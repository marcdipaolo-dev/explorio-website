# Explorio — Design System
*Full design language reference for the app, website, and marketing surfaces. Based on v1 style guide and the approved photography corpus. Updated April 2026.*

---

## Brand Essence

Explorio sells the feeling of being somewhere ancient and alive, with a voice in your ear that makes you feel like you belong there. The visual language is cinematic and warm — golden hour always, mist optional, headphones mandatory. The product is audio-first, which means the UI gets out of the way and the photography does the emotional lifting.

**Three words:** intimate, luminous, discovered.

---

## Photography Style

This is the single most developed and consistent part of the brand. The image corpus establishes a clear visual grammar that should govern all marketing, website, and social content.

### What the photos share

- **Golden hour light, always.** Every image uses warm amber/orange light — either actual sunset or artificial equivalents. The `#F5A623` brand amber is literally the color of the sky in these photos. This is not a coincidence. The photography and the palette reinforce each other.
- **Atmospheric haze.** Mist, dust, or smoke softens backgrounds and creates cinematic depth. It also signals mystery — "there's more around the corner."
- **Cobblestone streets and ancient plazas.** European and Asian heritage settings: Italy, France, Germany, Vietnam. The architecture is always pre-industrial, worn, storied.
- **Earbuds and headphones in frame.** Always visible — AirPods, over-ear headphones, earbuds with wires. The listening device is a hero prop, not an afterthought.
- **Travelers, not tourists.** Backpacks, casual layers, absorbed expressions. These people are discovering, not sightseeing. They look like they *belong* here more than the tour buses do.
- **Shallow depth of field.** Backgrounds blur into impressionist washes. The person is the subject; the city is the feeling.
- **Looking away or inward.** Subjects are rarely looking at the camera. They're gazing at architecture, listening, thinking. Wonder is the emotion, not performance.
- **Duos and solo walkers.** Couples sharing a moment, two friends laughing at a fountain, a lone young man on ancient steps. Always intimate scale — never crowds.

### What the photos don't do

- No phones in hand (mostly). The app is heard, not watched.
- No maps, no signs, no tourist paraphernalia.
- No bright midday light. Never flat, harsh, or clinical.
- No urban modernity (glass towers, etc.) as the primary setting.

### Art direction rule

> Every marketing image should look like a still from a film about someone falling in love with a city.

---

## Color System

### App / Dark Palette (Canonical)

| Token | Hex | Use |
|---|---|---|
| `background` | `#0D1117` | App background, player bar |
| `card` / `surface` | `#151B26` | Raised content blocks |
| `surfaceAlt` / `muted` | `#1E2535` | Subtle wells, secondary surfaces |
| `border` / `input` | `#252D3D` | Hairlines, input strokes |
| `primary` | `#F5A623` | Primary CTAs, focus, brand accents |
| `accent` | `#E8965A` | Secondary highlights (sparingly) |
| `primaryForeground` | `#0D1117` | Text/icon on amber surfaces |
| `foreground` | `#F5F1EB` | Body and headlines |
| `mutedForeground` | `#9CA3AF` | Captions, secondary metadata |
| `destructive` | `#EF4444` | Delete, end tour, remove only |
| `mapOverlay` | `rgba(13,17,23,0.92)` | Map dimming behind controls |

### Website / Light Palette *(to be defined — see Gaps section)*

The app is dark-first but the website should breathe. Suggested starting point:

| Token | Hex | Rationale |
|---|---|---|
| `pageBackground` | `#FAF8F5` | Warm off-white — echoes `#F5F1EB` foreground without being clinical |
| `sectionDark` | `#0D1117` | Full-bleed dark sections, same as app background |
| `textPrimary` | `#1A1612` | Near-black with warm undertone |
| `textMuted` | `#7A6E63` | Warm gray, not cool |
| `amber` | `#F5A623` | Brand amber, unchanged |
| `amberLight` | `rgba(245,166,35,0.10)` | Amber wash for hover states, highlights |

**Principle:** Website alternates between full dark sections (hero, player demos) and warm off-white sections (features, testimonials). This mirrors how the photography alternates between night-dark and golden warmth.

---

## Typography

### App (Mobile)

System sans — San Francisco on iOS, Roboto on Android. Six sizes only.

| Role | Size / Weight | Tracking | Use |
|---|---|---|---|
| Display | 36 / 700 | −0.5 | Hero moments, tour titles |
| Title | 20 / 700 | −0.3 | Stop names, section heads |
| Headline | 16 / 700 | 0 | Category labels |
| Body | 15 / 400 | 0, lh 22 | Narration captions, descriptions |
| Label | 13 / 600 | 0 | Button text, CTAs |
| Caption | 11–12 / 500–700 | +0.5 | "STOP 2 / 7", metadata |

### Website

Website type should feel editorial and atmospheric — not SaaS-generic.

**Heading font: Libre Baskerville** (or Baskerville, or Cormorant Garamond at display sizes). Serif headers give the brand a sense of place and history that a sans-serif cannot. The photography is cinematic; the type should be too.

**Body font: Inter** or system sans. Clean, readable at 16–18px. Keeps the site from feeling overly precious.

| Role | Font | Size / Weight | Notes |
|---|---|---|---|
| H1 / Hero | Baskerville-class serif | 64–80px / 300–400 | Light weight, wide tracking (+1 to +2) |
| H2 / Section | Baskerville-class serif | 40–48px / 400 | Normal weight |
| H3 / Subsection | Baskerville-class serif | 24–28px / 400 | |
| Body | Inter / system sans | 16–18px / 400 | Line height 1.6–1.7 |
| Label / UI | Inter / system sans | 13–14px / 500–600 | Buttons, nav, captions |
| Caption / Overline | Inter | 11–12px / 600–700 | Uppercase, +2 tracking |

**Typography rule:** Headings should feel like something you'd find engraved on a 19th-century map. Body text is contemporary and invisible.

---

## Spacing & Layout

### 4-pt Rhythm (App)

`4 · 8 · 12 · 16 · 24 · 32 · 48`

Most components use 12, 16, or 24. Generous padding inside cards.

### Website Grid

- Max content width: **1200px**
- Gutter: **24px** (mobile), **48px** (desktop)
- Columns: 12-col grid
- Full-bleed sections: hero, photography panels, dark feature sections

**Layout pattern:** The website should feel like a magazine spread, not a dashboard. Full-bleed photography panels alternate with tight editorial text columns. Whitespace is generous. Nothing is crowded.

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `radius.card` | 16px | Cards, modals, image containers |
| `radius.pill` | 999px | Buttons, badges, tags |
| `radius.input` | 12px | Form fields |
| `radius.image` (website) | 8–12px | Hero images with soft corners |

---

## Iconography

**Feather icons**, 2px stroke weight.

| Context | Size |
|---|---|
| Inline with text | 13px |
| Standard control | 18px |
| Primary action | 22–26px |

Icons are always monochrome — `foreground` or `primary`. Never decoratively colored.

---

## Components

### Mobile App

**Primary Button**
- Background `#F5A623`, text `#0D1117`
- Padding 12×20, radius 999 (full pill)
- Font 14 / 600
- One per screen maximum

**Ghost Button**
- Transparent background, 1px border `#252D3D`
- Same padding and radius

**Pill / Badge**
- Default background `#1E2535`
- Active state `rgba(245,166,35,0.12)`
- Padding 6×12, radius 999, font 12 / 500–700

**Card**
- Background `#151B26`, 1px border `#252D3D`
- Radius 16, padding 16–18px

**Audio Player Surface**
- Occupies bottom ~30% of screen
- Background `#0D1117` (pure app background — no elevation)
- Three controls only: Mic (left), Play/Pause (center, 56pt diameter), Skip (right)
- Nothing competes with the play button

### Website

**Primary CTA Button**
- Background `#F5A623`, text `#0D1117`
- Padding 14×28, radius 999
- Font: Inter 15 / 600
- Hover: `#E8965A` (accent) or slight brightness lift

**Secondary / Ghost Button**
- Background transparent, 1px border current text color
- Same padding and radius
- Used on dark backgrounds: border `rgba(245,241,235,0.3)`

**Image Card / Feature Panel**
- Border radius 8–12px
- Subtle shadow on light backgrounds: `0 4px 24px rgba(0,0,0,0.08)`
- On dark sections: no shadow, let the image breathe

**Nav Bar**
- Transparent over hero, transitions to `#0D1117` on scroll (dark site) or `#FAF8F5` (light site)
- Logo left, links right, CTA amber pill rightmost

---

## Voice & Tone

**App copy:** Conversational, not formal. Short. The UI talks like a knowledgeable friend who's been here before.
- ✅ "Let's keep going"
- ❌ "Continue to next stop"
- Praise is earned — only at tour completion, not for every tap
- No paragraph in UI longer than two sentences; long-form lives in audio

**Website copy:** Warm, evocative, slightly literary — matches the photography. Leads with feeling, follows with fact.
- ✅ "The city has been waiting to tell you its secrets."
- ❌ "Explorio is an AI-powered audio tour platform."
- Headlines can be poetic; subheads are where you explain the feature
- Avoid "unlock," "seamless," "effortless," and other SaaS clichés

---

## Landing Page System

Everything in this section is specific to the marketing landing page. It supplements — but doesn't override — the general website rules above.

---

### 1. Hero Section Spec

The hero is the entire emotional argument for the product. It should feel like the opening shot of a film, not a SaaS homepage.

**Layout**
- Full viewport height (100vh) on desktop; 90vh on mobile
- Full-bleed photography as background — no letterboxing, no padding
- Text and CTA anchored to bottom-left on desktop; bottom-center on mobile
- Nav bar floats above, transparent, transitions to `#0D1117` at 80px scroll

**Photography selection for hero**
Use a solo walker or intimate duo image — the misty cobblestone street shots, the woman with headphones looking back over her shoulder, or the young man sitting on ancient steps overlooking a piazza. Avoid group shots in the hero. The viewer should be able to project themselves into the scene.

**Photo overlay gradient**
Text on photography requires a legibility gradient. Never a flat darkening — use a directional scrim that preserves the image in the upper portion:

```css
background: linear-gradient(
  to top,
  rgba(13, 17, 23, 0.90) 0%,
  rgba(13, 17, 23, 0.55) 40%,
  rgba(13, 17, 23, 0.10) 70%,
  rgba(13, 17, 23, 0.00) 100%
);
```

For portrait/vertical images (mobile), run the gradient left-to-right instead of bottom-to-top.

**Hero headline rules**
- Maximum 7 words. Ideally 4–6.
- Baskerville-class serif, 64–80px desktop / 40–48px mobile, weight 300–400
- Color `#F5F1EB` (warm white, not pure white)
- No drop shadow — the gradient scrim handles legibility
- One line if possible. Hard break at two.

**Hero subhead**
- Inter, 18–20px, weight 300, `rgba(245,241,235,0.75)`
- Maximum 15 words. One sentence.
- 24px below the headline

**Hero CTA**
- Single amber pill button: Download on App Store / Get Early Access
- 16px below subhead
- Optional ghost secondary: "See how it works" — links to demo section

**Example composition**
```
[full-bleed photo: woman with headphones on misty cobblestone street]

                    The city has stories
                    it's never told a tourist.

                    Audio walking tours for the genuinely curious.

                    [ Download on App Store ]   [ See how it works → ]
```

---

### 2. Section Cadence

The landing page alternates between emotional and rational — dark cinematic sections make you feel it, light sections explain it. Never stack two dark or two light sections consecutively.

```
┌─────────────────────────────────────────┐
│  HERO  ·  dark · full-bleed photo       │  Feel it
├─────────────────────────────────────────┤
│  VALUE PROP  ·  light (#FAF8F5)         │  Understand it
├─────────────────────────────────────────┤
│  PHOTO PANEL  ·  dark · split layout    │  Feel it again
├─────────────────────────────────────────┤
│  HOW IT WORKS  ·  light                 │  Follow the steps
├─────────────────────────────────────────┤
│  TESTIMONIALS  ·  light                 │  Trust it
├─────────────────────────────────────────┤
│  DOWNLOAD CTA  ·  dark · full-bleed     │  Do it
├─────────────────────────────────────────┤
│  FOOTER  ·  dark (#0D1117)              │  Navigate
└─────────────────────────────────────────┘
```

**Section padding:** 96px top/bottom on desktop, 64px on mobile. Give each section room to breathe. The temptation is to compress — resist it.

**Section transitions:** No hard dividers or lines between sections. The background color shift is the divider. Optionally use a very subtle 1px `#252D3D` rule where dark meets light.

---

### 3. Photo Overlay Treatment

For any section where text appears directly over photography (hero, photo panels, dark feature sections), use these gradient presets:

**Bottom scrim** — standard hero, text at bottom of image
```css
linear-gradient(to top, rgba(13,17,23,0.90) 0%, rgba(13,17,23,0.00) 65%)
```

**Left scrim** — split photo/text layouts, text on left
```css
linear-gradient(to right, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.50) 50%, rgba(13,17,23,0.00) 100%)
```

**Full atmospheric wash** — for sections where the photo is decorative and text coverage is high
```css
rgba(13,17,23,0.72)  /* flat overlay — use only when photo is secondary */
```

**Legibility check:** Any text on a photo overlay must achieve a minimum 4.5:1 contrast ratio (WCAG AA). The scrim values above are calibrated for `#F5F1EB` text — verify if photography is unusually bright.

**What not to do:** No vignettes (darkened edges, bright center). No color tints other than the dark scrim. No blur on the background photo — the haze is already in the images; adding CSS blur makes them look broken.

---

### 4. Landing Page Components

These supplement the general website component library with patterns specific to the landing page.

**Feature Callout** — used in the Value Prop and How It Works sections
- Icon (Feather, 22px, amber `#F5A623`) top
- Headline: Baskerville 22px / 400, `#1A1612`
- Body: Inter 16px / 400, `#7A6E63`, max 2 sentences
- Arranged in 3-col grid on desktop, stacked on mobile
- No card background — these float on the light section background

**How It Works Step**
- Large numeral: Baskerville 72px / 300, `rgba(245,166,35,0.15)` (ghost amber) — decorative
- Headline: Baskerville 24px / 400 overlaid on the numeral
- Body: Inter 16px, `#7A6E63`
- Steps connect with a dashed amber line on desktop (`border-top: 1px dashed rgba(245,166,35,0.3)`)
- Three steps maximum: **Pick a city → Press play → Walk**

**Testimonial Card**
- Background `#FAF8F5` on light section, `#151B26` on dark section
- 1px border `#E8E4DE` (light) or `#252D3D` (dark)
- Radius 16px, padding 24px
- Quote: Inter 17px / 400 italic, `#1A1612` or `#F5F1EB`
- Attribution: Inter 13px / 600, `#7A6E63` or `#9CA3AF`
- No star ratings — they look generic. Just the quote and the person.

**App Store Badges**
- Use official Apple and Google badge assets — do not create custom versions
- Display side by side, 160px wide each on desktop, full-width stacked on mobile
- On dark backgrounds: use the light/white badge variant
- On light backgrounds: use the dark badge variant
- 16px gap between badges

**Waitlist / Email Capture** *(if pre-launch)*
- Single input + submit pill, inline on desktop / stacked on mobile
- Input: background `#1E2535`, border `#252D3D`, text `#F5F1EB`, placeholder `#9CA3AF`
- Submit button: amber primary pill, label "Join the waitlist"
- Below input: Inter 12px, `#7A6E63` — "No spam. First to know when we launch in your city."
- Success state: amber checkmark icon + "You're on the list." — no full page reload

**Split Photo Panel** — for mid-page cinematic moments
- 50/50 split: photography left, text right (or reversed)
- Photo fills its half fully — no padding, no radius on the interior edge, 8px radius on exterior corners only
- Text column: 48px padding, vertically centered
- H2 (Baskerville) + body (Inter) + optional CTA ghost button
- On mobile: photo stacks above text, photo height 60vw

---

### 5. Landing Page Copy Formula

The hero and section headlines follow a specific emotional logic. This is not the same as app UI copy (which is functional) — it's closer to book jacket or travel writing.

**Hero headline pattern:** *A true thing that sounds like poetry.*
- Lead with the experience, not the product
- Never name the feature in the headline; name the feeling
- ✅ "The city has stories it's never told a tourist."
- ✅ "Walk slower. Listen harder. See more."
- ✅ "History sounds different when it whispers."
- ❌ "AI-powered audio tours for historic cities"
- ❌ "Discover hidden stories with Explorio"

**Section headline pattern (H2):** *One evocative phrase + one grounding subhead*
- H2: Baskerville, poetic, 5–8 words max
- Subhead: Inter, explains the feature plainly, 1 sentence

Example:
> *Every street has a past.*
> Explorio knows the stories behind the stones — and plays them at exactly the right moment.

**Feature callout headline pattern:** Short, active, concrete.
- ✅ "Starts the moment you arrive"
- ✅ "No planning. Just walk."
- ✅ "Your guide knows this city cold."
- ❌ "Seamless geolocation-triggered audio playback"

**CTA copy:**
- Primary (download): "Start exploring" / "Get the app" / "Walk with Explorio"
- Waitlist: "Join the waitlist" / "Be first in your city"
- Secondary: "See how it works" / "Watch a tour"
- Avoid: "Sign up," "Learn more," "Get started" — too generic

---

## Motion & Animation *(Not yet defined — see Gaps)*

Suggested principles:
- **Slow and deliberate.** App transitions: 300–400ms ease-out. Nothing snappy.
- **Ambient, not reactive.** A subtle amber pulse on the play button while audio is playing. No bouncing loaders.
- **Website:** Parallax on photography panels (subtle, 10–15% depth). Fade-in on scroll for text blocks. No aggressive pop-in animations.

---

## Gaps & Missing Pieces

The following are not yet defined and should be addressed before the website ships:

1. **Website light palette** — only a dark palette exists. The off-white palette above is a starting proposal; needs validation against actual comps.

2. **Logo / wordmark spec** — no logo file, usage rules, clear space, minimum sizes, or dark/light variants are documented anywhere in the current style guide.

3. **Motion system** — no animation tokens, duration scale, or easing curves defined. The app has animations in code; they aren't documented.

4. **Website typography scale** — the mobile type scale doesn't translate to a 1440px canvas. The Baskerville-based scale above is proposed, not ratified.

5. **Dark/light mode for website** — does the website follow system preference? Is it always dark, always light, or mixed by section? Not decided.

6. **Form design** — inputs, labels, validation states, error messages. Not in the current guide (only mentioned briefly for app inputs).

7. **Loading / empty states** — how does the app behave while fetching a tour? What does an empty tour list look like? Not specified.

8. **Accessibility baselines** — contrast ratios not audited. `#9CA3AF` on `#0D1117` is 5.1:1 (passes AA), but some secondary text combinations may not. Needs a full audit.

9. **Social / OG image template** — the photography corpus is strong but there's no templated format for social sharing cards, OpenGraph images, or AppStore screenshots.

10. **Map visual style** — the app has a map view with a `mapOverlay` token, but the underlying map tile style (Mapbox style, colors, label treatment) isn't specified.

---

## Do & Don't

- ✅ **Do** use amber as a single point of attention per screen / section
- ✅ **Do** keep all tap targets ≥ 44pt on mobile
- ✅ **Do** let photography carry emotional weight — UI is support, not spectacle
- ✅ **Do** use Baskerville-class serifs for website headlines
- ✅ **Do** use full-bleed photography at golden hour for hero sections
- ❌ **Don't** stack two primary buttons on the same screen or section
- ❌ **Don't** use red for anything other than destructive actions
- ❌ **Don't** introduce new accent colors — variety comes from photography, not chrome
- ❌ **Don't** use bright, flat, or cool-toned photography — it contradicts the entire palette
- ❌ **Don't** use generic SaaS photography (laptops, dashboards, smiling stock people in offices)
- ❌ **Don't** use bold sans-serif headlines on the website — the brand is too cinematic for that

---

*Explorio Design System · v1.2 · April 2026 · Compiled from style guide v1.0, photography corpus analysis, website extension proposals, and landing page system.*
