import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

const STAR_WORKER_URL    = process.env.STAR_WORKER_URL!;
const STAR_WORKER_SECRET = process.env.STAR_WORKER_SECRET!;
const REDIRECT_URL       = process.env.REDIRECT_URL ?? '/thank-you/';

function redirectPath() {
  try { return new URL(REDIRECT_URL).pathname || '/thank-you/'; }
  catch { return REDIRECT_URL; }
}

function validate(raw: Record<string, unknown>): string | null {
  if (!raw.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(raw.email))) {
    return 'Invalid email address';
  }
  if (!raw.firstName && !raw.name) return 'Name is required';
  return null;
}

export async function POST(request: NextRequest) {
  let raw: Record<string, unknown> = {};

  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    raw = await request.json();
  } else {
    const formData = await request.formData();
    formData.forEach((value, key) => {
      if (typeof value === 'string') raw[key] = value;
    });
  }

  // Honeypot
  if (raw['_honey'] || raw['_honeypot']) {
    return NextResponse.json({ ok: true, redirect: redirectPath() });
  }

  const error = validate(raw);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  // Build the payload sent to the Star Insure Cloudflare Worker
  const payload = {
    referrer:  'cover4you',
    source:    'motorhomeinsurance.co.nz',
    timestamp: new Date().toISOString(),

    // Vehicle
    vehicleType:   raw.vehicleType   || '',
    rego:          raw.rego          || '',
    vehicleMake:   raw.vehicleMake   || '',
    vehicleModel:  raw.vehicleModel  || '',
    vehicleYear:   raw.vehicleYear   || '',
    vehicleColour: raw.vehicleColour || '',
    vehicleValue:  raw.vehicleValue  || '',

    // Contact
    name:      `${raw.firstName || ''} ${raw.lastName || ''}`.trim() || raw.name || '',
    firstName: raw.firstName || '',
    lastName:  raw.lastName  || '',
    email:     String(raw.email || '').trim(),
    phone:     String(raw.phone || '').trim(),
    dob:       raw.dob     || '',
    address:   raw.address || '',

    // Usage
    useFrequency:  raw.useFrequency  || '',
    primaryUse:    raw.primaryUse    || '',
    selfContained: raw.selfContained || '',
    storageType:   raw.storageType   || '',

    // History
    drivingHistory: {
      accidents:     raw.q_accidents     || 'No',
      infringements: raw.q_infringements || 'No',
      convictions:   raw.q_convictions   || 'No',
      declined:      raw.q_declined      || 'No',
      medical:       raw.q_medical       || 'No',
      claims:        raw.q_claims        || 'No',
      commercial:    raw.q_commercial    || 'No',
      fullLicence:   raw.q_fullLicence   || 'No',
    },

    cfTurnstileToken: raw.cfTurnstileToken || '',
  };

  const body      = JSON.stringify(payload);
  const timestamp = String(Date.now());
  const signature = createHmac('sha256', STAR_WORKER_SECRET)
    .update(`${timestamp}.${body}`)
    .digest('hex');

  try {
    const res = await fetch(STAR_WORKER_URL, {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Signature':  signature,
        'X-Timestamp':  timestamp,
      },
      body,
    });

    if (!res.ok) {
      console.error('[Star Insure Worker] error:', res.status, await res.text());
      return NextResponse.json({ error: 'Submission failed' }, { status: 502 });
    }
  } catch (err) {
    console.error('[Star Insure Worker] unreachable:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, redirect: redirectPath() });
}
