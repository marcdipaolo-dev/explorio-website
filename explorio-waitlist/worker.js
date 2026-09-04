const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJD7WNyfGqPx999tptx7PW7XduOvfCs-I-HmF0VD6FI8PZwRe2WIdCBG74LZ0yLhtf/exec';

// Dedicated waitlist Worker (explorio-waitlist.marc-dipaolo.workers.dev).
// Keep in sync with root worker.js /api/waitlist.
// Waitlist → Apps Script query params: email, platform, city_interest.
// Apps Script + Sheet columns must accept city_interest.
// Steve updates Apps Script separately if it is not in this repo.
const FIELD_MAX = 120;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function sanitizeField(value) {
  if (typeof value !== 'string') return '';
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, FIELD_MAX);
  return cleaned;
}

function json(body, status = 200) {
  return Response.json(body, { status, headers: CORS_HEADERS });
}

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    try {
      const { email, platform, city_interest } = await request.json();

      if (!email || !email.includes('@')) {
        return json({ error: 'Invalid email' }, 400);
      }

      const safePlatform = platform === 'ios' || platform === 'android' ? platform : '';
      const cityInterest = sanitizeField(city_interest);

      const scriptUrl = new URL(SCRIPT_URL);
      scriptUrl.searchParams.set('email', email);
      scriptUrl.searchParams.set('platform', safePlatform);
      if (cityInterest) scriptUrl.searchParams.set('city_interest', cityInterest);

      await fetch(scriptUrl.toString());
      return json({ result: 'ok' });
    } catch {
      return json({ error: 'Server error' }, 500);
    }
  }
};
