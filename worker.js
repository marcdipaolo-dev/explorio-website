const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJD7WNyfGqPx999tptx7PW7XduOvfCs-I-HmF0VD6FI8PZwRe2WIdCBG74LZ0yLhtf/exec';

// Waitlist → Apps Script query params: email, platform, city_interest, travel_window.
// Apps Script + Sheet columns must accept city_interest and travel_window.
// Steve updates Apps Script separately if it is not in this repo.
const FIELD_MAX = 120;
const TRAVEL_WINDOWS = new Set(['next_30_days', '1_3_months', '3_6_months', 'not_sure']);

function sanitizeField(value) {
  if (typeof value !== 'string') return '';
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, FIELD_MAX);
  return cleaned;
}

function sanitizeTravelWindow(value) {
  const cleaned = sanitizeField(value);
  return TRAVEL_WINDOWS.has(cleaned) ? cleaned : '';
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/waitlist' && request.method === 'POST') {
      try {
        const { email, platform, city_interest, travel_window } = await request.json();

        if (!email || !email.includes('@')) {
          return Response.json({ error: 'Invalid email' }, { status: 400 });
        }

        // Only ever ios/android/blank — anything else (or a desktop visitor
        // who never picked one) is dropped rather than passed through raw.
        const safePlatform = platform === 'ios' || platform === 'android' ? platform : '';
        const cityInterest = sanitizeField(city_interest);
        const travelWindow = sanitizeTravelWindow(travel_window);

        const scriptUrl = new URL(SCRIPT_URL);
        scriptUrl.searchParams.set('email', email);
        scriptUrl.searchParams.set('platform', safePlatform);
        if (cityInterest) scriptUrl.searchParams.set('city_interest', cityInterest);
        if (travelWindow) scriptUrl.searchParams.set('travel_window', travelWindow);

        await fetch(scriptUrl.toString());
        return Response.json({ result: 'ok' });
      } catch {
        return Response.json({ error: 'Server error' }, { status: 500 });
      }
    }

    // All other requests served from static assets
    return env.ASSETS.fetch(request);
  }
};
