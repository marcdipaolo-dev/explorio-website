const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJD7WNyfGqPx999tptx7PW7XduOvfCs-I-HmF0VD6FI8PZwRe2WIdCBG74LZ0yLhtf/exec';

export async function onRequestPost(context) {
  try {
    const { email } = await context.request.json();

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Invalid email' }, { status: 400 });
    }

    const url = `${SCRIPT_URL}?email=${encodeURIComponent(email)}`;
    await fetch(url);

    return Response.json({ result: 'ok' });
  } catch (err) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
