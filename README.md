# Explorio website

Landing site for [explorio.io](https://explorio.io).

## Waitlist fields

The waitlist form POSTs JSON `{ email, platform, city_interest, travel_window }` to the dedicated Worker at `https://explorio-waitlist.marc-dipaolo.workers.dev`. The site Worker also accepts the same body at `POST /api/waitlist`.

Both Workers forward to Apps Script as query params (`email`, `platform`, `city_interest`, `travel_window`). Empty optional fields are omitted. Values are trimmed and capped at 120 characters.

**Apps Script + Sheet columns must accept `city_interest` and `travel_window`.** Steve updates Apps Script separately if that project is not in this repo.

Keep these copies in sync:

- `explorio-waitlist/worker.js` — live waitlist endpoint
- `worker.js` — `POST /api/waitlist` on the website Worker
