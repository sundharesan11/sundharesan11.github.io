# Design System

The spine of the site. Every UI choice traces back here. Aesthetic: **Vogue/magazine editorial** — image-led, black-and-white Bodoni display type at extreme scale, article-serif long reads, no boxes or cards, asymmetric flush-left composition, and a single stellar-blue spot colour.

> Tokens are declared once in `src/styles/global.css` under the `@theme` block (Tailwind v4, CSS-first). Tailwind generates utilities from them automatically — there is no `tailwind.config.mjs`. When you add a token, add it to `@theme` in `global.css`; the utility is immediately available.

## Principles

1. **Image first.** Full-bleed photographs carry all colour; the typography sits over or beside them.
2. **No boxes, no cards.** Borders, shadows, rounded corners, and surface fills are banned. Separation comes from whitespace, hairline rules, and typographic contrast.
3. **One spot colour.** Stellar blue draws the eye — reserve it for the monogram dot, index numbers, links, hairline rules, and drop caps. Never as a fill.
4. **Vast negative space.** The restraint is in the emptiness, not the absence of imagery.
5. **Consistency over cleverness.** Reuse patterns; no one-off styling.
6. **Earn every element.** If removing it doesn't hurt, remove it.

> The Vogue patterns below are the sanctioned layer. Beyond them, the restraint principles above still hold — no decoration that isn't one of these patterns.

## Color tokens

**To-page doorways:** By owner request, the To index also uses Kalai/Vilai colour for contextual navigation beside To and large links above the ambitions. `kalai-link` is #806100 on light/cream and #f2d85c on dark; `vilai-link` is #183f96 on light/cream and #92b3ff on dark. Contrast against the corresponding page backgrounds: Kalai 5.79/4.89/13.82:1; Vilai 9.59/8.10/9.48:1. Hover retains the ink and adds an underline; focus uses the same ink. This extends the standalone colour exception only to these named doorways. No other publication copy changes colour.

Kalai and Vilai wordmarks end with small Tamil names (`கலை`, `விளை`) instead of a full stop. These use `text-initiative-tamil` (clamp 1.125rem/3vw/2.5rem), normal tracking, weight 400, and `lang="ta"` with system Tamil glyph fallback. Names live in the content collection's `tamilTitle` field.

**Standalone Kalai / Vilai:** The owner-approved pages use independent palettes in `InitiativeLayout.astro` / `initiatives.css`: `kalai-paper` (#191b16) and `kalai-ink` (#f2d85c), contrast 12.20:1; `vilai-paper` (#f3f0e6) and `vilai-ink` (#183f96), contrast 8.41:1. All readable copy, links and focus indicators use full-strength ink. This scoped exception does not change the publication's single stellar-blue rule.

Their named `@theme` tokens are `text-initiative-wordmark` (clamp 6rem/28vw/23rem, line height .9), `text-initiative-statement` (clamp 2rem/4.3vw/4rem, line height 1.08), tracking `initiative` (-.075em) and `initiative-heading` (-.045em), spacing `initiative-gutter` (clamp 1.5rem/5vw/5rem) and `initiative-section` (clamp 3.5rem/8vw/7rem), containers `initiative` (90rem) and `initiative-copy` (43rem). Existing Inter and Source Serif fonts are reused. SVG coordinates are illustration geometry; favicon SVGs repeat these palettes because external SVG cannot inherit page CSS tokens. Native cross-document fades are enabled only without reduced motion. Content is never hidden.

Ink (black/white, theme-dependent) + full-colour photography + a single stellar-blue spot colour. Photographs carry all other colour.

| Token            | Light       | Dark        | Use |
|------------------|-------------|-------------|-----|
| `bg`             | `#FFFFFF`   | `#0B0B0C`   | page background |
| `surface`        | `#F7F7F5`   | `#161617`   | (use sparingly — prefer plain bg) |
| `text`           | `#16161A`   | `#EDEDED`   | primary text |
| `text-muted`     | `#6B6B73`   | `#9A9AA2`   | secondary text, captions, datelines |
| `border`         | `#E6E6E3`   | `#26262A`   | hairline rules only |
| `accent`         | `#0057B8`   | `#6BB6FF`   | blue spot colour (AA) |
| `accent-hover`   | `#00438F`   | `#9CCFFF`   | hover state |

> `--color-stellar: #0057B8` is the spot colour name in light and cream themes. Dark mode uses `#6BB6FF`, an AA-safe tint of the same blue family, because `#0057B8` is too dark on the dark background. Rules: body text on `bg` only. `text-muted` never for primary reading content. Accent (stellar) never as a large fill — it is a highlight, not a background.

Cream theme keeps the same roles with warmer neutrals; `text-muted` is `#685E50` so small editorial labels clear AA contrast on `#F3EBDD`.

## Typography

- **Display (Bodoni):** Libre Bodoni via `--font-serif` — the display voice for the name, section titles, work/post titles, pull quotes, and drop caps. Used at **extreme `clamp()` sizes**, which live as tokens (never inline styles):

| Token | Value | Use |
|-------|-------|-----|
| `text-display-giant` | `clamp(5rem, 18vw, 13rem)` | the iyal script masthead only |
| `text-display-hero` | `clamp(2.5rem, 8vw, 5.5rem)` | section mastheads (Writing, Reading, Modelling, To, 404) + display statements (Contact h1) |
| `text-display-page` | `clamp(2.3rem, 7vw, 4.8rem)` | detail-page h1s (lens pages, To details, Now) and large section h2s |
| `text-display-read` | `clamp(2.1rem, 5.5vw, 3.6rem)` | long-read h1s (About, posts), the big pull quote |
| `text-display-name` | `clamp(2rem, 5vw, 4rem)` | the Home hero name (fits its 38vw column) |
| `text-entry` | `clamp(1.7rem, 5vw, 2.9rem)` | contents-list entry titles, footer CTA, status h2s |
| `text-statement` | `clamp(1.5rem, 3.8vw, 2.3rem)` | serif statements/deks, inline pull quotes, CTA buttons |
| `text-list-title` | `clamp(1.4rem, 3.4vw, 2.05rem)` | post/book titles in lists, minor h2/h3 |
| `text-dek` | `clamp(1.05rem, 2.4vw, 1.45rem)` | italic deks, reading questions |
| `text-kicker-compact` | `0.625rem` | constrained single-line identity kickers |
- **Article prose:** Source Serif 4 Variable via `--font-prose` — reusable long-form prose in `Prose.astro`, especially Writing pages.
- **UI + scanning body:** Inter (or `ui-sans-serif, system-ui` fallback) — nav, forms, kickers (uppercase, letter-spaced), datelines, and non-article body copy.
- Keep to one weight contrast per context; the system has three type roles only. Sacramento is the one-off `iyal` wordmark exception.

Type scale (rem, ~1.25 ratio):

| Token   | Size    | Line height | Use |
|---------|---------|-------------|-----|
| `xs`    | 0.8     | 1.5         | captions, meta |
| `sm`    | 0.9     | 1.6         | secondary, datelines |
| `base`  | 1.0     | 1.7         | body |
| `lg`    | 1.25    | 1.5         | lead paragraph |
| `xl`    | 1.6     | 1.3         | sub-heading |
| `2xl`   | 2.1     | 1.2         | page title |
| `3xl`   | 2.8     | 1.1         | hero (base; extended via clamp) |

Weights: 400 body, 500 emphasis, 600 headings. Avoid 700+ for body; display headings may use 700 for impact. Body measure: max ~68ch. Article prose uses Source Serif 4 around 1.18rem with generous leading.

## Spacing

4px base scale: `1=4 2=8 3=12 4=16 6=24 8=32 12=48 16=64 24=96 32=128`.
Section vertical rhythm: 96–128px between major sections on desktop, 48–64px on mobile. Be generous — the negative space is the aesthetic.

## Radius & elevation

- **No rounded corners anywhere** in the editorial system (no `rounded-*` on photos, sections, or any UI chrome).
- **No shadows.** The system is flat; separation comes from whitespace and hairline rules.
- Exception: interactive UI micro-elements and the approved macOS-style glass topbar may use radius. The topbar is the only sanctioned floating pill.

## Motion

Durations and easings are tokens — never hardcode a cubic-bezier or ms value:

| Token | Value | Use |
|-------|-------|-----|
| `--motion-fast` | 180ms | colour, icon, hairline micro-motion |
| `--motion-base` | 250ms | standard micro-interaction |
| `--motion-slow` | 420ms | panels, page-level moves |
| `--motion-reveal` | 700ms | entrance reveals |
| `--ease-editorial` | `cubic-bezier(.2,.6,.2,1)` | the house ease (reveals, hovers) |
| `--ease-panel` | `cubic-bezier(.2,.7,.2,1)` | the cube panel slide |
| `--ease-settle` | `cubic-bezier(.34,1.4,.64,1)` | **the monogram dot only** — the one overshoot |
| `--stagger` | 45ms | per-item delay in choreographed lists |

Rules:
- CSS parallax (`background-attachment: fixed`) on full-bleed photo bands where used. Static on mobile/iOS is acceptable.
- Subtle micro-interactions: fade/translate a few px on entrance; animate only `transform`/`opacity` (plus border-color) so the glass pill's backdrop-filter stays cheap.
- Respect `prefers-reduced-motion` — the global kill switch zeroes all durations; every effect's end state must be its visible resting state.
- Client JS is allowed only for narrow enhancements already in use: theme toggle, rotating cube menu, progressive reveal/scroll progress, and the sunflower interaction. Content must remain visible if JavaScript fails.

**Motion budget** (a magazine is calm):
- One hover transformation per element. Where the roman→italic swap (`.swap-italic`) applies, the title may also shift to stellar blue; avoid parent block lift.
- One special reveal style per viewport: `reveal-tracking` remains the default page-h1 treatment; `reveal-scale` is the deliberate title treatment on Reading, Writing, the Writing lens pages, To, and About, and may also mark a quote or statement when it sits in a later viewport. The base fade-rise is the default.
- Nothing loops, except the small idle sunflower clusters while the visitor remains inactive. Their rotation is bounded to two or three flowers, stops immediately on interaction, and is absent for reduced-motion users.
- Scroll-linked motion: at most one element per page (the Home hero recede), always behind `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference`.
- Accent never animates into a fill larger than a drop cap.

**Sanctioned motion patterns:** masthead settle (`.mm-sk`/`.mm-dot`/`.mm-iyal`), scroll-aware pill (`body.is-scrolled`), cube-menu choreography, hamburger morph (`.hb`), theme-toggle rotation, underline draw (`.u-draw`, in-left/out-right), arrow advance (`.adv-arrow`/`.adv-label`), italic swap (`.swap-italic`), drop-cap ink-fill (`.dropcap-draw`), h1 tracking-settle (`.reveal-tracking`), selected-title and quote scale-settle (`.reveal-scale`), hero recede (`.hero-recede`).

## Vogue editorial patterns

- **Full-bleed photo bands:** `-mx-[50vw] w-screen` with `bg-fixed` (CSS parallax). No borders, no rounded corners, no shadows. Full-colour photograph fills the band.
- **Monogram (SK.):** Libre Bodoni, flush-left; the trailing dot is stellar-blue (`text-accent`). Used in the site header/brand.
- **Glass topbar:** The site header is a floating macOS-style glass pill over a transparent sticky/overlay header. It uses blur, translucency, and a hairline border, with no heavy shadow.
- **Parallax hero:** Full-bleed, full-viewport photo band with the name at extreme `clamp()` size in Libre Bodoni over a dark scrim, plus kicker eyebrow and dateline.
- **Work entry:** Alternating full-bleed parallax photo + serif title at `clamp(2rem, 4.5vw, 3.4rem)` + stellar-blue `nº` index number + dateline + short description. No cards or borders.
- **Writing contents list:** Flush-left list entries; stellar-blue `nº` index number; Libre Bodoni title; hairline `border` rule between items. No cards.
- **Page masthead:** `PageHeader.astro` — muted label left + accent label right + optional display h1, with no top hairline. Every section page opens with it; Home and Now/Work are the deliberate opt-outs (threshold and photo band).
- **Index number:** `IndexNo.astro` — the stellar `nº 01` motif, one spec (`text-xs`, `tracking-kicker`, accent).
- **Endmark:** `Endmark.astro` — the monogram's stellar dot closing a long piece.
- **Drop cap:** First letter of first body paragraph, Libre Bodoni, stellar-blue (`text-accent`), class `.dropcap` (+ `.dropcap-draw` for the reveal ink-fill).
- **Pull quote:** Libre Bodoni italic, stellar-blue left hairline rule (`border-l-2 border-accent`), generous indent.
- **Kicker:** Small uppercase, `tracking-kicker` (0.18em), Inter — editorial eyebrow label (`Kicker.astro`). The one sanctioned uppercase element.
- **Dateline:** Dates rendered small, uppercase, `tracking-dateline` (0.12em), `text-muted`, Inter.
- **Theme-frozen dark surfaces:** the cube-menu panel (`bg-ink`) and photo-band scrims stay dark in every theme; their accent is always `stellar-ondark` so contrast holds in light/cream.
- **Hairline rules:** `border` token as a 1px divider; used sparingly under section headings and between writing entries.
- **Links:** Underline only (no box); stellar-blue accent (`text-accent underline`). Visible focus ring always.
- **Next-page link:** `NextPageLink.astro` — compact, right-aligned page progression. Small uppercase eyebrow, `text-list-title` serif link, hairline rule, `ml-auto`, no full-width CTA treatment.
- **Editorial footer:** Bold serif "Get in touch →" route to `/contact`. Contact and iyal use Web3Forms when configured and show a mail fallback when no `PUBLIC_WEB3FORMS_ACCESS_KEY` is present.

## Removed patterns

- ~~**Cards / ProjectCard:**~~ Removed. No card chrome (borders, shadows, `rounded-*`, surface fills) anywhere.
- ~~**Flow field canvas:**~~ Removed. CSS parallax replaces it.

## Do / Don't

| Do | Don't |
|----|-------|
| Use full-bleed photographs | Add boxes, cards, borders, shadows, or rounded corners |
| Let stellar-blue be the single accent | Introduce a second accent or use stellar as a fill |
| Libre Bodoni at extreme clamp sizes | Use display type at modest/predictable sizes |
| Vast negative space between sections | Fill whitespace with decoration or extra elements |
| Left-align everything (flush-left composition) | Center headings or long text |
| Reuse the Vogue patterns above | Create one-off styled variants |
| CSS parallax for photo motion | Add JS-driven animation or canvas overlays |
