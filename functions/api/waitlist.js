const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzvI5tahFghAKUCGuQGa8GMO636oUo3r9HK0Vv2dfTGBIc0F3_dzsJMZPtW00NdZE4Z/exec';

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
