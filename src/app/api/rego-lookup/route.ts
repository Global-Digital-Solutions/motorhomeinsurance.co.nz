import { NextRequest, NextResponse } from 'next/server';

/**
 * NZ vehicle registration lookup
 *
 * Uses the NZTA Vehicle API (https://api.nzta.govt.nz/).
 * Set NZTA_API_KEY in Vercel env vars once Darin obtains a key from:
 * https://api.nzta.govt.nz/register
 *
 * Until the key is present the route returns 404 so the form falls back
 * to manual entry — the user experience degrades gracefully.
 */

const NZTA_API_KEY = process.env.NZTA_API_KEY || '';
const NZTA_URL = 'https://api.nzta.govt.nz/vehicle/v1/motor-vehicle-register/';

export async function GET(request: NextRequest) {
  const plate = request.nextUrl.searchParams.get('plate')?.trim().toUpperCase();

  if (!plate) {
    return NextResponse.json({ error: 'plate required' }, { status: 400 });
  }

  // No API key → tell the form to fall back to manual
  if (!NZTA_API_KEY) {
    return NextResponse.json(
      { error: 'Rego lookup not yet configured — please enter vehicle details manually.' },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(`${NZTA_URL}${encodeURIComponent(plate)}`, {
      headers: {
        'Ocp-Apim-Subscription-Key': NZTA_API_KEY,
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }, // cache 1 hour — plate details don't change often
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const data = await res.json();

    // Normalise NZTA response to the shape StarInsureForm expects
    return NextResponse.json({
      make:     data.make       || '',
      model:    data.model      || '',
      year:     String(data.modelYear || data.year || ''),
      colour:   data.colour     || data.color || '',
      bodyType: data.vehicleType || data.bodyType || '',
    });
  } catch (err) {
    console.error('[rego-lookup]', err);
    return NextResponse.json({ error: 'Lookup failed' }, { status: 500 });
  }
}
