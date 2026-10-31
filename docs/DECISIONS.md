# Decisions

Append-only log so context survives across sessions. Two sections:

- **Decided** — locked choices, with date + why + what we rejected.
- **Open / Deferred** — choices deliberately *not* made yet. The agent should consult this and avoid silently picking; pull options up to "Decided" only when actually chosen.

Format each entry: `### [short title] — YYYY-MM-DD`

---

## Decided

### Final personal sharing line — 2026-11-01
The owner selected “What matters must be lived.” for the thumbnail and matching sharing description. The name is blue. This supersedes the earlier “Ideas, stories…” draft below.

Final review `task_c1714d8f6357` / `ctx_0a5d2d8f1906` approved the image and metadata. Build, all 77 tests, page checks and form checks passed. The thumbnail is a fixed white-background image independent of the site's theme.

### Refresh the sharing thumbnail — 2026-11-01
The old `og-default.png` had obsolete “Designer & builder” copy baked into its pixels. BaseLayout now points both Open Graph and Twitter previews to `og-profile-2026.png`: a 1200×630 editorial card with the owner's name and “Ideas, stories, and things I’m figuring out.” The owner requested personal rather than employer-led positioning. Explicit type, dimensions and image alt text accompany it. A new asset URL allows image caches to distinguish the replacement; previously shared messages may retain their cached previews. The old asset remains available for existing links. Kalai/Vilai retain their separate metadata.

### Rural economy framing for iyal — 2026-11-01
At the owner's request, the opening statement is “Understanding the rural economy, one farming season at a time.” The kicker and metadata use the broader rural-economy framing; the detailed farming research remains intact. This replaces the money-led opening.

The kicker is simply “Rural economy”, with the day-job phrase removed. Header and homepage accessible descriptions match. Final independent review `task_05619dbf24cc` / `ctx_793decc56f1b` found no material issues; build, all 77 tests, page checks and form checks passed.

### Employer before DevTwin — 2026-11-01
The owner requested Oogway Labs first in the Now hero, linked to `https://oogwaylabs.com/` with the role “Forward-deployed engineer.” DevTwin follows with the shorter, owner-corrected framing “My developer taste, carried forward.” The two links form a compact vertical list at the top-right.

The owner subsequently chose the final DevTwin line: “Clone your developer self.”

Verified at 1440px and 375px; production build and page checks passed. Independent review `task_babe96627351` / `ctx_2d72970e6612` approved the final implementation, including title-first reading order and the theme-independent focus colour. Lowercase devtwin follows the project's README branding.

### DevTwin in the Now hero — 2026-11-01
The Now/Work hero includes a small top-right DevTwin website link and one-line description. Copy and destination live in `src/content/work/devtwin.md`, sourced from the project's README. Existing typography and colour tokens keep the feature unboxed; the description wraps on narrow screens while the Now heading remains bottom-left.

### Open-thought conversation forms — 2026-11-01
Kalai and Vilai reuse the existing EditorialField and Web3FormFields components for required name, email and message fields. Subjects identify the initiative. The shared public access key, honeypot, hCaptcha and same-site thanks redirect remain unchanged. Email stays available, and is the sole contact option if the key is missing. The standalone script restriction now permits only the shared Web3Forms captcha client. Scoped form tokens preserve both palettes and visible keyboard focus. Production form validation includes both routes. No test messages were sent.

### Return from the open thoughts — 2026-11-01
Added a visible “Back to Sundharesan” home link at the top-left of both standalone pages after the owner could not find a route back. The Kalai/Vilai switcher stays centered on desktop; mobile puts the home link above it. Uses existing palette and type tokens and a base-aware native home anchor. Verified the actual return navigation, desktop/mobile rendering, production build and generated-page checks.

### To shows contextual Kalai / Vilai links and leads with both — 2026-11-01
The owner requested Kalai and Vilai beside To in the header only while viewing the To index, plus larger links at the top of that page. Exact route matching normalises trailing slashes and strips the configured base. Desktop inserts these two coloured links directly after To, before Modelling. Below xl, the To page uses a compact To/Kalai/Vilai row and the existing cube menu for other destinations; this intentionally keeps all three together without crowding the header. Other pages retain their existing navigation. This is a deliberate contextual extension to the shared running order, not new cube faces. FutureDesk now places large coloured, unboxed links just after its masthead and before the ambitions; the old bottom block is removed. Accessible gold/blue theme tokens extend the standalone colour exception to these doorways. Rejected: revealing on hover, exposing the links everywhere, fitting eight destinations into tablet widths, or using low-contrast pale yellow on white.

### About introduces the two open thoughts — 2026-11-01
About now introduces Kalai and Vilai directly after the ambitions/iyal paragraph, using normal prose links. To remains the index; the main navigation stays unchanged. Each thought page opens its body with a personal observation grounded in the owner's stated motivations, without invented memories or current programme claims. Kalai's line has unequal sweeping gestures; Vilai repeats an equal loop to suggest practice. Both remain a single decorative path in the same viewBox. Photography, a notes feed, Home placement and consolidation of The Long Game into Vilai are deliberately deferred.

### Kalai and Vilai: two open thoughts, one independent format — 2026-11-01
The owner approved standalone `/kalai` (art, especially Tamil koothu) and `/vilai` (sport and supporting young people; owner-intended meaning “to produce”). These express personal thoughts and invite email conversations, without claiming programmes, partners, funding or outreach already exist. Both share a heavy sans-serif manifesto/notebook layout, with only Kalai and Vilai in the top navigation. Kalai is yellow on near-black; Vilai is deep blue on warm paper. This is an explicitly scoped exception to the portfolio's one-accent rule, because these are independent identities. Content lives in a Markdown collection. The To desk provides quiet links; the sports-development page keeps its URL and adds a bridge to Vilai. Rejected: donor/application funnels, invented impact, reusing portfolio chrome, changing the rest of the site's palette, and imposing a pilot commitment before the owner wants one. Native links and readable static content are the baseline, with reduced-motion-aware CSS transitions only. Domain separation and real programmes remain future choices.

### iyal reframed to farm margins; Season Trust parked — 2026-10-11
`/iyal` now leads with farm margins ("what a farming season costs, what it earns, and who keeps the difference") instead of a farmer capital network. The kicker reads `Farm margins · research alongside my day job`, the page names South India as the starting point, and it adds margin questions, a farm-budget and five-cow validation step, a "Replace a step, don't add one" principle, and one line on the wider scope (fishers, weavers, small processors). Header and Home wordmark labels follow. `/to/agri-fintech` keeps its URL and To-desk slot, but Season Trust is now "A parked bet": it explains why outside money into farm seasons is on hold and says plainly that it is not taking money. **Why:** the founder's working problem is now margin squeeze (inputs bought at retail, output sold at wholesale), not access to capital. A public page inviting investors into farm seasons also reads like soliciting public money, which is regulated. **Rejected:** broadening iyal to a "rural infrastructure economy" (too abstract for the people the contact form needs to reach), deleting the Season Trust page or URL, and naming a district before the founder chooses one.

### Scale reveals settle to rest, and reveals start before first paint — 2026-09-29
`reveal-scale` titles now transition to `transform: none` when revealed; previously the modifier's starting transform outranked the revealed state, so Writing, About, and the Now statement only faded and stayed at 96.5% scale. The `js-reveal` class is set in the head's no-flash script, so pages whose module script runs after first paint (Reading) no longer paint titles at rest and then jump; a 3s fail-safe removes the class if the motion script never runs. A reveal nested inside a revealing masthead waits three `--stagger` steps so the title lands just after its kicker. Writing lens titles (Theatrical, Technical/AI, Economic, Politics) move from the tracking settle to the scale settle, matching the Writing desk. **Why:** every main desk title should have the same visible entrance, and it must end at its true resting size. **Rejected:** longer or larger motion, a new animation style, and JS-timed staggering.

### The sunflower is drawn as a botanical plate — 2026-09-29
The shared sunflower renderer (margin flowers on Reading and Writing lenses, and the idle clusters) now draws the flower's real anatomy: 21 solid lanceolate ray petals in front, 21 in a deeper grey behind, short grey bract tips between them, a pale pollen ring, and a solid stellar-blue seed head with golden-angle seeds that are larger and darker toward the centre. Three front petals (unevenly spaced) take the spot colour. Colours are mixed from the theme tokens (`--color-accent`, `--color-text-muted`, `--color-bg`, `--color-text`), so light, cream, and dark all follow automatically. **Why:** the previous thin translucent blades around a pale disc read as a starburst or dandelion; a sunflower is recognised by broad pointed petals around a large, dark centre. **Rejected:** an outline-only "engraving" study (too faint at idle sizes) and an irregular two-ink "screenprint" study (more characterful, less recognisably a sunflower).

### Main editorial page titles use the scale-and-rise reveal — 2026-09-27
Reading, Writing, To, and About use the existing `reveal-scale` entrance on their primary titles. `PageHeader` exposes this as a typed opt-in and keeps `reveal-tracking` as its default, so Modelling, 404, Contact, lens pages, post pages, and To detail pages retain their current motion. About may use the same scale reveal again on its later pull quote because the two moments occupy different viewports. Reduced-motion visitors still receive static, fully visible type. **Why:** the restrained scale-and-rise has more physical presence on the main publication desks without making every route perform the same trick. **Rejected:** changing the shared default globally, adding a second animation system, or animating whole masthead blocks.

### Production Web3Forms uses build-time configuration and same-site confirmation — 2026-09-27
All three public forms share one Web3Forms metadata component: access key, form identity, same-site `/thanks/` redirect, honeypot, and free-tier hCaptcha markup. GitHub Actions injects `PUBLIC_WEB3FORMS_ACCESS_KEY` only into the production build and validates the generated form HTML before upload, while unconfigured local builds keep the visible email fallback. The hCaptcha widget uses its automatic theme and sits in an overflow-safe wrapper for narrow screens. **Why:** a static deployment should fail visibly when form delivery is missing, and successful visitors should return to the site instead of a generic provider page. **Rejected:** committing the access key, silently deploying fallback-only production HTML, adding form-specific redirect pages, or introducing a custom backend before delivery evidence requires one.

### Idle sunflower clusters inhabit empty margins — 2026-07-17

After three seconds without scroll, pointer, keyboard, touch, or pointer interaction, every page may show a low-contrast cluster of two or three small decorative sunflowers in collision-checked random viewport margins. Each has a random initial angle and a slow, varied clockwise or counter-clockwise rotation. The cluster clears at the next interaction and may return only after a fresh idle period. It never appears for reduced-motion users and never overlaps interactive, reading, or image content, including background-image frames. **Why:** random placement and gentle rotation make the flowers feel discovered rather than arranged, while the bounded idle-only loop keeps the site from becoming a screen saver. **Rejected:** one flower per idle moment, persistent flowers that remain through interaction, page-specific treatment, fixed corner placement, and a continuous all-page animation.

### Reading keeps only the last three reads — 2026-07-17

The public Reading page is a current shelf, not an archive: it contains only *Poor Economics*, *The Picture of Dorian Gray*, and *Thinking, Fast and Slow*, newest first. The section is titled “Last three reads” and carries the line “The last three reads. The rest have been returned to the void.” **Why:** a small active selection feels more editorial and prevents the page becoming a dumping ground for every finished book. **Rejected:** preserving an on-page archive, a separate archive route, and retaining older read entries in the collection for later.

### Reading lists expand from quiet previews — 2026-07-11

Read and To Read each own an independent five-item title-and-author preview when their list is long. Opening the native disclosure replaces that preview on the same canvas with every detailed entry; Read includes notes and optional questions, while To Read includes notes only. Manual order descends, and the page shows no counts or dates. CSS controls the preview swap and label state, with no client JavaScript. **Why:** both shelves stay calm and scannable while their richer context remains one action away. **Rejected:** pagination, separate archive pages, and a JavaScript toggle.

### Compact Read list — 2026-07-11

The Reading index shows a compact title-and-author list with the first five read books visible and any remainder inside a native `details` disclosure labelled with the full count. Notes, questions, and `opened` values remain in the content collection for possible detail pages but stay off the index. **Why:** the archive remains scannable without discarding richer source material, and native disclosure provides keyboard behavior without client code. **Rejected:** pagination, a separate archive route, and a JavaScript toggle.

### Reading recommendations stay private and curated — 2026-07-11

The Reading page separates `read` books from `on-deck` books and accepts private reader recommendations through the existing Web3Forms integration. A recommendation asks only for title and reason; optional name and email stay inside “Want a reply?”. Submissions never publish automatically. Accepted titles are added manually as `on-deck`. **Why:** the page should become conversational without turning a personal reading map into an unmoderated public feed or requiring a database. **Rejected:** instant public submissions, mandatory identity fields, and a custom backend.

### Home opening gives iyal the pre-navbar position — 2026-07-10
The Home hero places the blue script `iyal` wordmark at the top-left of its text panel while the full navbar is deferred. The link scrolls away with the opening and the navbar takes over after the photo frame leaves the viewport. The hero identity reads `Forward Deployed Engineer · Oogway Labs` and does not list writing as a role. **Why:** `iyal` is an important sister masthead and the intentionally empty pre-navbar opening gives it a clear front door without adding another persistent layer. **Rejected:** fixing the wordmark to the viewport, exposing the full navbar immediately, or keeping the old AI engineer/writer identity line.

### Next-page links are compact and right-aligned — 2026-07-08
`NextPageLink.astro` owns the recurring "Next on the desk" / "Next lens" pattern. It renders smaller than the primary page CTAs and sits at the right edge of the content area. **Why:** the next-page prompt should behave like quiet editorial pagination, not compete with "Share your perspective" or the footer contact CTA. **Rejected:** leaving large full-measure next blocks on every detail page, or making each page tune its own one-off version.

### Season Trust is the first iyal product track — 2026-07-08
`/to/agri-fintech` now frames Season Trust as the first product track growing out of `iyal`. `iyal` remains the research and operating seed, while Season Trust is the practical test for a trust layer across the farming pipeline: farmers, investors, rural workers, local operators, buyers, logistics, seasonal capital, and execution. **Why:** the page needed a clearer relationship between the active research masthead and the venture/product idea without pretending the organisation is already fully formed or reducing the system to farmer aid. **Rejected:** saying iyal is merely adjacent, calling it Farmer Capital Network after the name started feeling too narrow, calling Season Trust a launched company, or framing it as only helping farmers.

### To detail perspective prompts route to Contact — 2026-07-08
Each To detail page includes a "Share your perspective" action that routes to `/contact`; the To index stays a clean list of ideas without repeated CTAs. **Why:** these ideas need context and lived perspective, but the site should keep one clear contact front door and avoid visual clutter in the index. **Rejected:** adding the prompt under every To index item, using per-page mailto subjects, or adding a new form for each idea.

### iyal stays out of the To desk — 2026-07-08
`iyal` remains a standalone masthead-level research page reachable from the header and cube menu, but it is no longer listed inside the `/to` future desk. **Why:** To is for future/forming ambitions, while iyal is active work with its own front door. **Rejected:** duplicating iyal as an Active research entry in To, or hiding it from global navigation.

### Cube drawer list starts with unnumbered iyal — 2026-07-08
The cube menu keeps the 180px cube unchanged, but the text list beneath it is quieter: smaller serif labels, and `iyal` appears first as an unnumbered script wordmark before the numbered site routes. **Why:** the large fallback list was visually overpowering the cube, while `iyal` behaves more like a sister mark than another numbered section. **Rejected:** shrinking the cube, numbering `iyal`, or removing the accessible text list.

### Shared page mastheads do not use a top hairline — 2026-07-08
`PageHeader.astro` no longer draws a border above section mastheads, so Writing, Reading, To, Modelling, About, Contact, and 404 open directly into the labels and display type. **Why:** the top rule was adding visual clutter at the first viewport and competing with the editorial header rather than clarifying structure. **Rejected:** removing individual page borders one by one, keeping the line only on some sections, or replacing it with another decorative separator.

### Now / Work opens shorter and lands the intro sooner — 2026-07-08
The Now / Work photo header uses a shorter 46vh field, and the first content block has tighter vertical padding and grid spacing. **Why:** the page should still feel like a photo-led editorial feature, but the role statement and first content need to land together in the next viewport instead of feeling buried below a tall cover. **Rejected:** removing the photo band, shrinking the display type, or adding a separate jump/CTA.

### Now / Work copy describes the current role — 2026-07-08
The Now / Work page frames Sundharesan's present work as a forward-deployed engineer at Oogway Labs: small team, direct customer conversations, product shaping, AI systems built against real users, and legacy software realities. **Why:** Now / Work should describe the current operating state, not future ambition or generic early-adopter behavior. **Rejected:** claiming every new model release is tested, over-indexing on benchmarks, or making the page sound like a recruiting profile.

### Home desk statement sticks inside the opening note — 2026-07-08
The Home "Builder first. Hopelessly curious after that." statement is sticky on desktop inside the From the desk section, then releases before the Inside section. "Builder first." is kept as one line with an explicit line break after it. **Why:** the pull statement should behave like a magazine rail note, not scroll away immediately or split the title phrase awkwardly. **Rejected:** making the statement fixed across the whole page, shrinking the display token, or widening it with one-off chrome.

### Hovered editorial headings turn stellar blue — 2026-07-07
The shared `.swap-italic` display-title pattern now keeps the roman-to-italic cross-fade and also transitions the title color to the accent token on hover/focus. **Why:** the heading font change alone felt under-signaled; the blue spot color is already the site's link and navigation cue. **Rejected:** patching individual headings, adding block lift, or introducing a second hover style.

### Typography system: Libre Bodoni, Source Serif 4, Inter — 2026-07-02
The site now uses Libre Bodoni as the display face, Source Serif 4 Variable for long-form article prose in `Prose.astro`, and Inter Variable for UI, labels, forms, navigation, and scanning body text. Sacramento remains only for the `iyal` wordmark. **Why:** Playfair Display and Inter were editorial enough, but the site needed a sharper fashion-magazine display voice and a more article-like reading texture. **Rejected:** keeping Playfair Display as the display face, using Inter for all prose, and adding page-specific one-off fonts.

### Floating glass topbar — 2026-07-01
The header uses a macOS-style glassmorphism pill: transparent outer header, translucent blurred pill, soft hairline border, and no heavy shadow. This is the only sanctioned rounded/floating navigation surface because the owner explicitly chose it over the stricter full-width editorial glass treatment. **Rejected:** keeping the solid topbar, using a full-width glass strip, or adding heavy shadow/card chrome.

### Improvement layer from Impeccable audit — 2026-07-01
The audit backlog is being implemented in three ordered passes: responsive fit plus IA drift, iyal copy and positioning, then navigation/contact trust. `To` remains the public nav label while `/ambitions` becomes an alias to the same future-desk surface. `iyal` stays masthead-level as a sister brand, but now needs clearer accessible context and grounded field-note copy to earn that prominence. **Rejected:** renaming `To` back to Ambitions, demoting iyal into a normal project entry, or turning the improvements into a broader redesign.

### Progressive reveal and static form fallbacks — 2026-07-01
Reveal motion is progressive: content is visible by default, and JavaScript opts pages into reveal animation with a `js-reveal` class. Contact and iyal keep Web3Forms for static submissions, but render mailto fallback states when `PUBLIC_WEB3FORMS_ACCESS_KEY` is absent and include small expectation-setting copy when the forms are live. **Rejected:** hiding content until JS runs, adding a backend form handler, or adding heavy CTA/form chrome.

### Responsive text-fit utilities — 2026-07-01
The site now has small global text-fit utilities for long editorial labels, display headlines, and prose containers that risk mobile clipping. These are guardrails for the existing publication system, not a new component style. Cream theme muted text was darkened to keep small text at AA contrast. **Rejected:** globally hiding horizontal overflow as the primary fix, shrinking all display type, or adding page-specific one-off hacks.

### Waste management joins the To desk — 2026-07-01
The `/to` index now includes a Waste Management entry with a dedicated `/to/waste-management` page. It is framed as a civic infrastructure interest rather than an active venture: cleaner tier 1 and tier 2 cities and towns, better waste-worker conditions, and waste handling as a prior action item in development. **Why:** the owner wants this recorded as meaningful future work without overclaiming current execution. **Rejected:** presenting it as a launched product, using generic sustainability copy, or making it a visual/marketing section outside the existing To pattern.

### Home frame-clipped fixed portrait, About editorial frame — 2026-07-01
Home uses a frame-clipped fixed background on the portrait side of the hero: the image stays visually fixed while the page scrolls, but it is only painted inside the image frame, so forced scroll and page-edge pull do not reveal it behind unrelated content. The Home image side is wider than the text side and anchors the image to the right so the full portrait fits inside the frame. About intentionally keeps its earlier two-column editorial portrait frame instead of replicating the Home hero behavior, but now uses the dedicated `/img/about.jpg` portrait in a 2:3 inline image frame. The About portrait frame and name/brief are sticky on desktop until the long-read begins. **Why:** the previous viewport-fixed layer leaked during pull/force scroll; the sticky replacement made the image scroll too much; the narrow frame clipped the portrait; About now has its own image asset and needs its own scroll treatment. **Rejected:** sharing the Home reveal on About, forcing the About image through a viewport-fixed background crop, and keeping a permanent viewport-fixed image layer.

### Codex guidance lives in AGENTS.md — 2026-07-01
Codex should use the repo-root `AGENTS.md` as its durable project instruction file instead of a global user skill. **Why:** the guidance is project-specific, versioned with the site, and mirrors `CLAUDE.md` while adding Codex operating guardrails. **Rejected:** creating a global `~/.codex/skills` skill for this repo, which would not travel with the repository.

### iyal standalone page and wordmark — 2026-07-01
`iyal` is an active farmer capital network research/product flow, not a future-desk item. It gets a standalone `/iyal` page and a persistent top-header wordmark link beside `SK.`. The name is always rendered lowercase as `iyal`; the wordmark uses Sacramento and the existing blue accent/stellar colour. **Rejected:** keeping it only under `/to/agri-fintech`, listing it inside `/to`, or introducing a new brand colour outside the one-accent system.

### Contact forms use Web3Forms — 2026-07-01
The `/iyal` contribution section and `/contact` page use embedded Web3Forms static forms instead of mailto-only CTAs. `/iyal` is a field-note form for agriculture, capital, logistics, policy, and field operations context. `/contact` is the broad front door for work, writing, iyal, modelling, speaking, collaboration, and strange ideas worth discussing. Both read the access key from `PUBLIC_WEB3FORMS_ACCESS_KEY` so the key stays out of source. The footer headline routes to `/contact`; the cube menu includes Contact as an accessible fallback destination, while the already-dense masthead stays unchanged. **Rejected:** pushing readers through prescribed prompt lists, adding a custom backend before validation needs one, or adding Contact to the masthead.

### Brand blue: #0057B8 — 2026-07-01
The site blue is now `#0057B8` for light and cream themes. Dark mode uses the AA-safe tint `#6BB6FF` so blue links, rules, and wordmarks remain readable on `#0B0B0C`. **Rejected:** the too-dark `#011F4B`, which did not visibly read as blue in the UI, and `#2552B4`, which leaned too violet.

### Stack: Astro + Tailwind, static — 2026-06-14
Personal portfolio is content-heavy and low-interactivity. Astro ships near-zero JS by default and Tailwind keeps styling token-driven. **Rejected:** Next.js (heavier than needed for a static portfolio), plain HTML/CSS (loses content collections + componentization).

### Aesthetic: clean / minimal — 2026-06-14
Whitespace-led, near-monochrome + one accent, type-driven. See `DESIGN_SYSTEM.md`. **Rejected:** bold/expressive and editorial directions.

### Content via Astro Content Collections — 2026-06-14
Projects and writing as Markdown/MDX, not hardcoded. Keeps content editable without touching templates.

### Site sections / IA: Home + Work + Writing + About — 2026-06-14
Writing/blog is **in at launch** (not deferred). Launch IA: Home, Work, Writing, About. **Rejected:** minimum-viable Home+Work+About only (the owner wants writing surfaced from day one). Contact remains a mailto in the footer, not its own section (superseded by the later Web3Forms plus mail fallback decision).

### Accent color: blue `#0057B8` — 2026-06-14, updated 2026-07-01
Single accent. The active light/cream brand blue is now `#0057B8`. Dark mode uses the AA-safe tint `#6BB6FF` because `#0057B8` is not readable enough on `#0B0B0C`. **Rejected:** the previous brighter stellar blue, the too-dark `#011F4B`, violet-leaning `#2552B4`, and applying dark blues unchanged in dark mode where they fail contrast.

### Dark mode at launch (toggle + light default) — 2026-06-14
Ship light **and** dark from day one with a user toggle, defaulting to light on first visit and persisting explicit choices. Tokens already define both palettes. **Rejected:** system-default-first and system-only-no-toggle. Implication: the toggle needs the one piece of client JS we'll allow, plus an inline no-flash script in `<head>`.

### Build approach: shell-first with placeholders — 2026-06-14
Scaffold structure, layout, and components against the design system using realistic placeholder content; swap in Sundharesan's final bio/projects/copy later. **Rejected:** blocking the build on final content. Risk accepted: minor layout rework when real copy lands.

### Tailwind v4 (CSS-first tokens) — 2026-06-14
The Astro Tailwind integration installs Tailwind v4 (`@tailwindcss/vite`), which is CSS-first: design tokens live in `src/styles/global.css` under `@theme` and there is no `tailwind.config.mjs`. This fits the "tokens defined once → CSS variables" principle better than v3. **Rejected:** pinning Tailwind v3 to keep the `tailwind.config.mjs` the older docs referenced. Docs (ARCHITECTURE, DESIGN_SYSTEM) updated to match.

### Hero ambient motion: flow field — 2026-06-14 (supersedes the dot-field choice)
Particles drift continuously along an evolving noise **flow field** behind the hero; near the cursor they are pushed away and **swirl** (radial + tangential force). Rendered as short **line streaks** (not dots), with ~1/3 of them in **stellar blue** (the `accent` token — `#2F6BFF`/`#5B86FF`) and the rest faint muted-gray; streak alpha rises with speed. Canvas-based, single rAF loop. **Why the change:** the earlier reactive dot grid (brightness-only) tested as too tame / not captivating; the flow field is more organic and clearly "shows mouse activity" (the original ask). **Non-negotiables (unchanged):** disabled under `prefers-reduced-motion` (renders one static frame of streaks, no rAF/listeners), GPU-cheap (canvas 2d, capped DPR, particle count scales with area and is capped, paused via IntersectionObserver off-screen), theme-aware (re-reads `--color-accent`/`--color-text-muted` on toggle). **Mobile:** no cursor, but the field keeps drifting on its own so it still reads as alive. **Implementation:** `src/scripts/flowField.ts` (pure `flowAngle()` unit-tested) + `src/components/FlowField.astro`; replaces the removed `dotField.ts`/`DotField.astro`. Stays the second (and only other) piece of client JS after the theme toggle. **Rejected:** reactive dot grid (too tame), magnetic-displacement grid, ripple, ambient glow, drifting blob (all considered; magnetic & ripple were live-prototyped alongside flow before this pick).

### Identity: Sundharesan Kumaresan — 2026-06-14
The site is Sundharesan Kumaresan's personal portfolio. The earlier "Soumyo — Oogway Labs" was incorrect placeholder identity and has been removed site-wide (header, footer, titles, meta, OG, About, and placeholder copy). Contact email: sundharesansk11@gmail.com.

### Aesthetic pivot: minimal base + editorial layer — 2026-06-14
Supersedes the earlier "Aesthetic: clean/minimal — Rejected: editorial" decision. Keep the minimal whitespace base, but add an editorial/newspaper layer: serif display (Playfair Display) for headings + hero name, kicker eyebrows, datelines, hairline rules, and a full-bleed cover hero (photo + dark scrim + flow-field "extended dots" overlay + name). Not full newspaper (no multi-column body, no drop caps on content). **Why:** owner wants a newspaper/article feel with a photo hero; the minimal base keeps it from becoming busy.

### Editorial serif: Playfair Display — 2026-06-14
Resolves the previously-open "Typography — exact families". Self-hosted via @fontsource/playfair-display as `--font-serif`. **Rejected:** Newsreader (more sober) and Fraunces (more boutique) — owner chose Playfair's magazine-cover elegance.

### Hero: full-bleed cover (photo + name overlay + flow field) — 2026-06-14
Home hero is a full-bleed ~82vh cover: placeholder photo (`/public/hero-placeholder.jpg`, swap later) + dark scrim + the flow field (onPhoto variant, light dots) + name in Playfair + kicker/dateline. **Rejected:** masthead and portrait-split layouts (live-mocked alongside cover).

### Aesthetic pivot: Vogue/magazine editorial — 2026-06-14
Supersedes the "minimal base + editorial layer" (cards) direction. New system: black/white Didone display type at extreme scale, full-bleed full-colour photography, NO cards/boxes/borders/rounded corners, asymmetric flush-left composition, and a single stellar-blue spot colour threaded throughout (monogram dot, work nº, links, hairline rules, drop caps). Both light & dark kept. **Why:** owner wants a Vogue-cover / magazine feel — image-led, free-flowing, no uniform grid of boxes. Reference: Wix "Street Artist Portfolio (Industrial)". **Rejected:** industrial-grotesque type voice (chose Didone), pure B&W with no accent (chose the stellar-blue thread), functional contact form (mailto only — needs backend).

### Display type: Playfair Display (Didone) — 2026-06-14
Playfair Display (already self-hosted) is the Didone display voice (name, section titles, work/post titles, drop caps); Inter for body/nav/kickers/datelines. **Rejected:** Bodoni Moda (truer Vogue hairlines) — Playfair is sufficient and already loaded; swappable later.

### Blue spot colour — 2026-06-14, updated 2026-07-01
`--color-stellar: #0057B8` plus the AA accent `#0057B8` (light/cream) / `#6BB6FF` (dark). The one editorial spot colour throughout: monogram dot, nº numbering, links, hairline rules, drop caps, datelines. Photographs carry all other colour.

### Motion: CSS parallax (flow field removed) — 2026-06-14
Replaced the flow-field canvas with pure-CSS parallax (`background-attachment: fixed`) on full-bleed photo bands (hero, work entries, work-detail cover, about portrait). Zero new JS (only the theme toggle remains). Static on mobile/iOS (acceptable). The flow-field code was removed (in git history).

### No boxes / full-bleed; contact = mailto — 2026-06-14
Removed `ProjectCard` and all card/box/border/shadow/rounded chrome; work & writing are full-bleed/flush-left editorial entries; links underline-only. Contact is a bold serif "Get in touch →" mailto in the footer (functional form deferred — needs backend).

### Publication IA: Home · Now/Work · Writing · Reading · Ambitions · About — 2026-06-15
Expanded from 4 sections to a full publication (per `docs/plan-and-todo.md`). Home = thin threshold + "Inside this edition" teaser index. Now/Work = role feature (not a project list). Writing originally planned four lenses, now superseded by three live lenses until Philosophy has real content. Reading = scatter gallery grouped by "what each opened." Ambitions became the `/ambitions` alias for the `To` future desk. About = long-read. Contact stays footer-wide and in the cube menu.

### Projects gallery retired — 2026-06-15
Removed the `projects` collection, the `/work/[slug]` route, and `WorkEntry`/`ProjectCard`. Now/Work is a confidentiality-safe role feature instead. **Why:** owner's plan + Oogway confidentiality (no client/project names by default).

### Identity: Oogway Labs is the employer — 2026-06-15
Sundharesan is "Forward Deployed Engineer at Oogway Labs · writer · founder-in-waiting." Oogway Labs appears as his **employer** in content (Now/Work, identity line, About), NOT as the masthead. Reconciles the earlier scrub of "Soumyo — Oogway Labs," which was wrong only in the name.

### Rotating cube ≡ menu — 2026-06-15
A global ≡ overlay with a 3D CSS cube (6 faces = the 6 destinations), slow auto-spin (static under prefers-reduced-motion), Escape/backdrop close + focus management, and a plain text nav list as the accessible fallback (alongside the header's text nav). `CubeMenu.astro` + `src/scripts/cube.ts`.

### Modern ↔ Evening edition toggle — 2026-06-15
A reading-mode toggle scoped to Writing pages, a separate axis from the global light/dark theme. Evening = atmospheric dark-warm reading mode (deep `#0E0E12` ground, warm paper text, serif body, larger blue drop cap) via `[data-edition="evening"] .writing-page` overrides + a no-flash inline read. `EditionToggle.astro` + `src/scripts/edition.ts`. Third piece of client JS (after theme toggle + cube).

### Third theme: cream (warm day mode) — 2026-06-15
Added a third theme alongside light + dark: "cream" — a warm beige/day palette (ground #F3EBDD, warm dark-brown text #3B342B, warm hairlines) inspired by a soft warm reference illustration. Keeps the stellar-blue accent for thread consistency. Implemented via a `.theme-cream` class (the `.dark` class stays so Tailwind `dark:` variants keep working). The theme control is now a 3-state cycle (light → cream → dark). `data-edition` (Modern/Evening on Writing) remains a separate axis.

### Display type + tracking + container tokens — 2026-07-06
All display sizes now live as `@theme` tokens (`--text-display-giant/hero/page/read/name`, `--text-entry`, `--text-statement`, `--text-list-title`, `--text-dek`) and pages use the generated utilities (`text-display-hero`, …). The ~42 inline `style="font-size: clamp(...)"` overrides (34 unique values) are gone. Tracking collapsed to two tokens: `tracking-kicker` (0.18em, blessed because it was the de-facto house value) and `tracking-dateline` (0.12em). Containers: `max-w-page` (1100px) and `max-w-topbar` (1600px). **Why:** "tokens are law" was the most-violated written rule; peer pages had drifted to different h1 sizes. **Rejected:** keeping documented-but-untokenised clamps, and per-page custom sizes.

### Motion tokens + motion budget — 2026-07-06
Durations/easings are tokens: `--motion-fast/base/slow/reveal`, `--ease-editorial` (house ease), `--ease-panel`, `--ease-settle` (the one overshoot, reserved for the monogram dot), `--stagger`. Budget rules: one hover transformation per element (italic swap replaces color shift + block lift where applied); one special reveal style per viewport; nothing loops; scroll-linked motion at most one element per page (Home hero recede); accent never fills larger than a drop cap. **Rejected:** per-feature ad-hoc cubic-beziers, character-stagger/marquee/small-caps effects (off-voice).

### Editorial motion set — 2026-07-06
Shipped: masthead settle (SK rises, dot presses in via `--ease-settle`, iyal follows), cube-menu open choreography (backdrop fade, staggered contents list with leading `nº` numbers, cube last) with a real focus trap, scroll-aware pill tightening (`body.is-scrolled` from `reveal.ts`), hamburger→× morph, theme-toggle icon rotation, `u-draw` draws in left / retracts right, roman→italic hover swap on display titles (Bodoni 600-italic imported; grid-stacked cross-fade, CLS-free), arrow-advance + tracking-widen on `nº … →` labels, drop-cap ink-fill on reveal, h1 tracking-settle (`reveal-tracking`), pull-quote scale-settle (`reveal-scale`), Home hero recede (CSS `animation-timeline: view()` behind `@supports`, reduced-motion-gated). All ride the existing reveal system and the global reduced-motion kill switch.

### Contrast fixes on theme-frozen dark surfaces — 2026-07-06
New tokens `--color-ink` (#0B0B0C, the always-dark menu panel) and `--color-stellar-ondark` (#6BB6FF in every theme). The cube menu accents and the Work photo-band kicker use `stellar-ondark` so light/cream themes no longer paint #0057B8 on near-black (~2.4:1). **Rejected:** theming the menu panel per palette (it is deliberately ink in all three).

### One running order + iyal joins the IA — 2026-07-06
The publication has one running order everywhere (Home contents = header nav = cube menu): Work, Writing, Reading, To, Modelling, About. iyal appears in the cube-menu list and the 404 nav, and keeps the masthead wordmark. The earlier To-desk listing was later removed because iyal is active work, not a future-desk item. `/ambitions` is a config redirect to `/to` instead of a duplicate page. **Rejected:** keeping three competing orders, and iyal reachable only via the script wordmark.

### Exits everywhere; honest writing counts — 2026-07-06
Every page now ends with an onward path: next/prev piece on post details (plus a stellar-dot endmark), Now/Work → Technical lens, Reading → Writing, lens pages → next lens (cyclic), To details → next ambition. Lens counts show published pieces and "n forming" separately; being-written entries no longer lift on hover; Medium posts keep their datelines (`date · On Medium ↗`). Home leads with a featured piece ("From this issue", wired to the `featured` frontmatter flag). **Rejected:** dead-ending into the footer, counting forming pieces as pieces.

### agri-fintech rewritten into the site register — 2026-07-06
`/to/agri-fintech` was the one page in whitepaper voice ("Investors gain enough transparency to participate with confidence"). Rewritten dry and concrete, sentence-case headings, explicitly subordinated to iyal ("iyal is the research; the Farmer Capital Network is one bet pulled out of it"). `/iyal` and To-detail body copy promoted from `text-muted` to full `text` (muted is never for primary reading content).

### Modern ↔ Evening edition toggle: superseded (was never shipped) — 2026-07-06
The 2026-06-15 entry describes `EditionToggle.astro` + `edition.ts`, but no such code exists in the repo; the three-way light/cream/dark theme cycle is the only reading-mode control. Docs now match the code; the vestigial `.writing-page` wrappers were removed. If an Evening reading mode returns, it re-enters through Open/Deferred.

### Writing workflow: local-first scripts, no CMS — 2026-07-06
Owner writes locally (Obsidian or any editor pointed at `src/content/`), scaffolds with `npm run new` (schema-correct frontmatter, enums mirroring `content.config.ts`), and ships with `npm run publish` (build gate → commit → push; pushes to `main` deploy through GitHub Pages). Draft states live in frontmatter: `draft: true` = private, `status: writing` = public being-written desk, `status: published` = live. **Why:** solo author, fully static site, zero new infrastructure. **Rejected for now:** Sveltia CMS at `/admin` (the documented upgrade path — two static files + a GitHub OAuth worker, no SSR needed), Keystatic (drags React + an adapter into a static site), TinaCMS/hosted CMS (overkill, lock-in), custom `/write` page (hand-building a worse Sveltia).

### Hosting: GitHub Pages user site — 2026-09-27
Deploy the static build from `main` with GitHub Actions to `https://sundharesan11.github.io/` from the required `sundharesan11.github.io` repository. Production uses the domain root with no `SITE_BASE`; shared URL helpers retain optional subpath support. The generated-output check verifies root navigation, assets, canonical metadata, and the absence of stale project-path URLs. The 404 page performs a small client-side migration redirect from the briefly published `/personal-website/*` paths to their root equivalents because GitHub Pages does not redirect renamed project-site URLs. A custom domain remains open. **Rejected for now:** changing the GitHub username to `iyal11`, and Vercel, Netlify, or Cloudflare Pages.

---

## Open / Deferred

These are intentionally undecided. Don't lock them in without confirming.

### Domain
**Open:** which domain (oogwaylabs subdomain, personal domain, etc.)?

### Analytics
**Open:** none, or a privacy-friendly option (Plausible/Umami) later.

### Contact delivery quality
**Open:** whether Web3Forms is reliable enough after real submissions, or whether the site needs a first-party serverless handler later. The current decision is Web3Forms plus visible mail fallback. Delivery and hCaptcha enforcement still need one live owner-verified submission after the dashboard protection is enabled.

### View Transitions / persistent masthead
**Open:** adding Astro's `<ClientRouter />` so the glass pill and scroll-progress bar persist across navigations (the "bound spine" effect). High payoff but a real migration: scripts (cube/theme/reveal) must re-init on `astro:page-load`. Deferred until the MPA reloads actually bother the owner.

### Running-head section label in the topbar
**Open:** a small-caps current-section label swapping into the glass pill on long reads (the most literally-magazine topbar gesture). Deferred because the pill has no free center slot while the text nav is visible; needs a layout decision (e.g. crossfade with the iyal wordmark), not just CSS.

### Sveltia CMS at /admin
**Open:** the browser-editor upgrade path if the local scripts ever feel limiting: `public/admin/index.html` + `config.yml` mirroring `content.config.ts`, GitHub backend via the `sveltia-cms-auth` worker. Zero build/SSR impact; deletable in one commit.

### Fourth writing lens
**Open:** CLAUDE.md's "four lenses" is aspirational; the code has three. Adding one is a 3-line change (zod enum, `lenses` array, and the new content).
