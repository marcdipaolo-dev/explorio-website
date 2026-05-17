const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJD7WNyfGqPx999tptx7PW7XduOvfCs-I-HmF0VD6FI8PZwRe2WIdCBG74LZ0yLhtf/exec';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/waitlist' && request.method === 'POST') {
      try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
          return Response.json({ error: 'Invalid email' }, { status: 400 });
        }

        await fetch(`${SCRIPT_URL}?email=${encodeURIComponent(email)}`);
        return Response.json({ result: 'ok' });
      } catch {
        return Response.json({ error: 'Server error' }, { status: 500 });
      }
    }

    // All other requests served from static assets
    return env.ASSETS.fetch(request);
  }
};
