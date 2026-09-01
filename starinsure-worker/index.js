/**
 * Cloudflare Worker — Star Insure Lead Connector
 * Deploy: wrangler deploy --name starinsure-connector
 *
 * Wrangler secrets to set (wrangler secret put <NAME>):
 *   WORKER_SECRET       — HMAC signing secret (generate a long random string)
 *   TURNSTILE_SECRET    — Cloudflare Turnstile secret key
 *   SENDGRID_API_KEY    — SendGrid API key for email delivery
 *   STAR_INSURE_EMAIL   — Star Insure recipient email (your contact's address)
 *   GOOGLE_SHEET_URL    — Google Apps Script Web App URL for sheet logging
 *
 * Vercel env vars for motorhomeinsurance.co.nz:
 *   STAR_WORKER_URL     — https://starinsure-connector.darinbutler.workers.dev
 *   STAR_WORKER_SECRET  — same value as WORKER_SECRET above
 */

const ALLOWED_ORIGINS = [
  'https://www.motorhomeinsurance.co.nz',
  'https://motorhomeinsurance.co.nz',
];

const MAX_AGE_SECONDS = 300; // 5 min — reject replayed requests

/* ─── Helpers ─────────────────────────────────────── */

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Signature, X-Timestamp',
    'Access-Control-Max-Age': '86400',
  };
}

async function verifyHmac(body, signature, timestamp, secret) {
  const age = (Date.now() - Number(timestamp)) / 1000;
  if (age > MAX_AGE_SECONDS || age < -30) return false;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
  );
  const expected = encoder.encode(`${timestamp}.${body}`);
  const sig = hexToBuffer(signature);
  return crypto.subtle.verify('HMAC', key, sig, expected);
}

function hexToBuffer(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

async function verifyTurnstile(token, secret, ip) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const { success } = await res.json();
  return success;
}

/* ─── Email builder ──────────────────────────────── */

function buildEmailHtml(d) {
  const row = (label, value) =>
    value
      ? `<tr><td style="padding:6px 12px;font-weight:600;color:#374151;background:#f9fafb;width:38%;border-bottom:1px solid #e5e7eb">${label}</td><td style="padding:6px 12px;color:#111827;border-bottom:1px solid #e5e7eb">${value}</td></tr>`
      : '';

  const history = d.drivingHistory || {};
  const historyRows = [
    ['Accidents (5yr)', history.accidents],
    ['Infringements (3yr)', history.infringements],
    ['Convictions', history.convictions],
    ['Policy declined', history.declined],
    ['Medical condition', history.medical],
    ['Claims (5yr)', history.claims],
    ['Commercial use', history.commercial],
    ['Full NZ licence', history.fullLicence],
  ].map(([l, v]) => row(l, v)).join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#111827;max-width:640px;margin:0 auto;padding:20px">
  <div style="background:linear-gradient(135deg,#0f172a,#1e3a5f);color:#fff;padding:28px 32px;border-radius:12px 12px 0 0">
    <div style="font-size:11px;font-weight:700;letter-spacing:.1em;color:#38bdf8;text-transform:uppercase;margin-bottom:6px">New Lead via Cover4You</div>
    <h1 style="margin:0;font-size:22px;font-weight:800">Motorhome Insurance Enquiry</h1>
    <p style="margin:6px 0 0;opacity:.7;font-size:13px">${new Date(d.timestamp || Date.now()).toLocaleString('en-NZ', { timeZone: 'Pacific/Auckland' })} (NZT)</p>
  </div>

  <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;overflow:hidden">

    <div style="padding:20px 24px 4px;background:#eff6ff;border-bottom:2px solid #bfdbfe">
      <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.06em">Vehicle</h2>
    </div>
    <table style="width:100%;border-collapse:collapse">
      ${row('Type', d.vehicleType)}
      ${row('Registration', d.rego)}
      ${row('Make / Model', [d.vehicleMake, d.vehicleModel, d.vehicleYear].filter(Boolean).join(' '))}
      ${row('Colour', d.vehicleColour)}
      ${row('Estimated Value', d.vehicleValue)}
    </table>

    <div style="padding:20px 24px 4px;background:#f0fdf4;border-top:2px solid #bbf7d0;border-bottom:2px solid #bbf7d0">
      <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.06em">Contact</h2>
    </div>
    <table style="width:100%;border-collapse:collapse">
      ${row('Name', d.name || `${d.firstName} ${d.lastName}`.trim())}
      ${row('Email', `<a href="mailto:${d.email}" style="color:#0369a1">${d.email}</a>`)}
      ${row('Phone', `<a href="tel:${d.phone}" style="color:#0369a1">${d.phone}</a>`)}
      ${row('Date of Birth', d.dob)}
      ${row('Address', d.address)}
    </table>

    <div style="padding:20px 24px 4px;background:#fefce8;border-top:2px solid #fde68a;border-bottom:2px solid #fde68a">
      <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.06em">Usage</h2>
    </div>
    <table style="width:100%;border-collapse:collapse">
      ${row('Frequency', d.useFrequency)}
      ${row('Primary use', d.primaryUse)}
      ${row('Self-contained', d.selfContained)}
      ${row('Storage', d.storageType)}
    </table>

    <div style="padding:20px 24px 4px;background:#fef2f2;border-top:2px solid #fecaca;border-bottom:2px solid #fecaca">
      <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#b91c1c;text-transform:uppercase;letter-spacing:.06em">Driving History</h2>
    </div>
    <table style="width:100%;border-collapse:collapse">
      ${historyRows}
    </table>

    <div style="padding:16px 24px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b">
      Referrer: <strong style="color:#0369a1">cover4you</strong> · Source: ${d.source} · Generated by Cover4You lead pipeline
    </div>
  </div>
</body>
</html>`;
}

async function sendEmail(env, payload) {
  const to = env.STAR_INSURE_EMAIL;
  const name = payload.name || `${payload.firstName} ${payload.lastName}`.trim();
  const vehicleLabel = [payload.vehicleMake, payload.vehicleModel, payload.vehicleYear].filter(Boolean).join(' ') || payload.vehicleType || 'RV';

  const body = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: 'leads@cover4you.co.nz', name: 'Cover4You Leads' },
    reply_to: { email: payload.email, name },
    subject: `New RV Quote — ${name} · ${vehicleLabel} · Ref: cover4you`,
    content: [{ type: 'text/html', value: buildEmailHtml(payload) }],
  };

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`SendGrid error ${res.status}: ${err}`);
  }
}

async function logToSheet(env, payload) {
  if (!env.GOOGLE_SHEET_URL) return; // skip if not configured yet

  const row = {
    timestamp:     payload.timestamp || new Date().toISOString(),
    referrer:      'cover4you',
    name:          payload.name || `${payload.firstName} ${payload.lastName}`.trim(),
    email:         payload.email,
    phone:         payload.phone,
    dob:           payload.dob,
    address:       payload.address,
    vehicleType:   payload.vehicleType,
    rego:          payload.rego,
    vehicleDetail: [payload.vehicleMake, payload.vehicleModel, payload.vehicleYear].filter(Boolean).join(' '),
    vehicleValue:  payload.vehicleValue,
    useFrequency:  payload.useFrequency,
    primaryUse:    payload.primaryUse,
    selfContained: payload.selfContained,
    storageType:   payload.storageType,
    accidents:     (payload.drivingHistory || {}).accidents,
    infringements: (payload.drivingHistory || {}).infringements,
    convictions:   (payload.drivingHistory || {}).convictions,
    declined:      (payload.drivingHistory || {}).declined,
    medical:       (payload.drivingHistory || {}).medical,
    claims:        (payload.drivingHistory || {}).claims,
    commercial:    (payload.drivingHistory || {}).commercial,
    fullLicence:   (payload.drivingHistory || {}).fullLicence,
  };

  await fetch(env.GOOGLE_SHEET_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(row),
  });
}

/* ─── Main handler ───────────────────────────────── */

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const ip        = request.headers.get('CF-Connecting-IP') || '';
    const signature = request.headers.get('X-Signature') || '';
    const timestamp = request.headers.get('X-Timestamp') || '';
    const bodyText  = await request.text();

    // 1. Verify HMAC
    const valid = await verifyHmac(bodyText, signature, timestamp, env.WORKER_SECRET);
    if (!valid) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    let payload;
    try { payload = JSON.parse(bodyText); }
    catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    // 2. Verify Turnstile
    const token = payload.cfTurnstileToken || '';
    const turnstileOk = await verifyTurnstile(token, env.TURNSTILE_SECRET, ip);
    if (!turnstileOk) {
      return new Response(JSON.stringify({ error: 'Bot check failed' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    // 3. Send email + log to sheet (non-blocking sheet log)
    try {
      await sendEmail(env, payload);
      logToSheet(env, payload).catch(err => console.error('[sheet]', err)); // fire-and-forget
    } catch (err) {
      console.error('[email]', err);
      return new Response(JSON.stringify({ error: 'Delivery failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  },
};
