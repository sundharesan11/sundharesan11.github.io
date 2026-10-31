# Architecture

How the site is structured. Update when structure changes.

## Hosting

GitHub Actions deploys the static `dist/` output from `main` to the user-site repository `sundharesan11.github.io`, served at the domain root. `src/lib/paths.ts` keeps routes and public assets compatible with an optional `SITE_BASE`, but production and local development both use `/`.

## Planned tree

```
/
├── CLAUDE.md
├── docs/                  # context files (this folder)
├── astro.config.mjs
├── tsconfig.json
├── public/                # static assets served as-is (favicon, og image, fonts)
│   └── img/               # photographs actually in use (hero-crop, work, about)
└── src/
    ├── content.config.ts  # collection schemas (zod) — Astro v5 location
    ├── content/           # Astro Content Collections
    │   ├── writing/       # blog posts (lens, status, featured, cover fields added)
    │   └── reading/       # reading entries (new collection)
    │   # REMOVED: projects/ collection
    ├── components/        # small composable .astro components (no cards — editorial entries only)
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── Monogram.astro     # SK. brand mark; trailing dot is stellar-blue
    │   ├── FixedPhotoHero.astro # frame-clipped fixed portrait for Home
    │   ├── Figure.astro       # full-bleed photograph wrapper (no borders/rounded corners)
    │   ├── Kicker.astro       # editorial eyebrow label (uppercase, letter-spaced)
    │   ├── PageHeader.astro   # canonical page masthead (hairline + labels + display h1)
    │   ├── Web3FormFields.astro # shared Web3Forms metadata, redirect, honeypot, and hCaptcha
    │   ├── IndexNo.astro      # the stellar nº index-number motif
    │   ├── Endmark.astro      # stellar-dot endmark closing long pieces
    │   ├── ThemeToggle.astro
    │   ├── Prose.astro        # styled long-form wrapper
    │   ├── CubeMenu.astro     # rotating-cube ≡ overlay menu plus text fallback
    │   ├── FactsRail.astro    # sidebar facts/pull-quotes rail
    │   ├── FutureDesk.astro   # shared To/Ambitions future-desk index
    │   ├── Sunflower.astro    # lightweight canvas/DOM enhancement for sunflower page
    │   ├── IdleSunflowers.astro # global decorative idle-state sunflower overlay
    │   └── TeaserIndex.astro  # "Inside this edition" teaser index (Home)
    │   # REMOVED: Hero.astro, FlowField.astro, ProjectCard.astro, WorkEntry.astro, ParallaxHero.astro
    ├── layouts/
    │   └── BaseLayout.astro   # <head>, fonts, meta, slots
    ├── pages/             # file-based routing
    │   ├── index.astro        # Home (threshold + teaser index)
    │   ├── work/
    │   │   └── index.astro    # Now/Work — single role feature page
    │   ├── writing/
    │   │   ├── index.astro    # Writing index — three live lenses + being-written desk
    │   │   ├── [lens].astro   # Lens index
    │   │   └── [lens]/[slug].astro # Post detail (from content)
    │   ├── reading/
    │   │   └── index.astro    # Reading — compact Read list, To Read, private recommendations
    │   ├── iyal.astro         # Standalone active farmer-capital-network research/product page
    │   ├── contact.astro      # General Web3Forms contact page with mail fallback
    │   ├── thanks.astro       # Same-site success destination for Web3Forms submissions
    │   # /ambitions is a redirect to /to (astro.config.mjs), no page file
    │   ├── to/                # Future-desk idea pages
    │   │   ├── index.astro
    │   │   ├── agri-fintech.astro
    │   │   ├── sports-development.astro
    │   │   └── waste-management.astro
    │   └── about.astro
    ├── lib/
    │   ├── reading.ts     # generic compact-list partition helper
    │   ├── writing.ts     # lenses, intros, datelines, linking, next-lens
    │   └── scatter.ts     # shared scattered-gallery offsets
    ├── scripts/
    │   ├── (repo root) scripts/new-post.mjs + scripts/publish.mjs — writing workflow (npm run new / npm run publish)
    │   ├── theme.ts       # dark-mode toggle logic
    │   ├── cube.ts        # cube menu: auto-spin, Escape/backdrop close, focus management
    │   ├── reveal.ts      # progressive reveal and scroll-progress enhancement
    │   ├── sunflower.ts   # sunflower page interaction enhancement
    │   └── idleSunflowers.ts # three-second idle controller for global sunflower clusters
    │   # REMOVED: flowField.ts
    └── styles/
        └── global.css     # @theme tokens (Tailwind v4), base resets, font import
```

## Routing

Kalai and Vilai's conversation sections share the website's `EditorialField` and `Web3FormFields` components. `PUBLIC_WEB3FORMS_ACCESS_KEY` enables the forms, with initiative-specific subjects, shared spam protection and `/thanks/` redirect. Missing configuration falls back to email. The shared captcha client is the only permitted script on these standalone pages.

The exact `/to` index (with either trailing-slash form) gets conditional Kalai/Vilai links beside To in the header and a prominent opening pair before the ambition list. To detail pages and other publication pages do not get this contextual header row. Below xl on the index, the row shows To/Kalai/Vilai while the existing cube menu provides the other destinations.

File-based via `src/pages`. Routes: `/` (Home), `/work` (Now/Work role feature), `/writing` (Writing index), `/writing/[lens]` and `/writing/[lens]/[slug]` (writing collection routes), `/reading` (compact reading list), `/iyal` (masthead-level active farmer-capital-network research/product page), `/contact` (general Web3Forms contact page with mail fallback), `/thanks` (same-site form success page), `/to` (future-desk index), `/ambitions` (alias to `/to` via a config redirect, no page file), `/to/agri-fintech`, `/to/sports-development`, `/to/waste-management`, `/modelling`, `/about`. The `/work/[slug]` project detail route was REMOVED along with the `projects` collection.

## Content model

The Now hero directly imports `src/content/work/oogway.md` and `devtwin.md` frontmatter for its employer and project links, in that order. These page-specific content files are not a content collection.

About provides the contextual introduction to Kalai and Vilai at `/about#open-thoughts`, directly after the ambitions/iyal paragraph. These normal prose links complement the existing To index links; they do not add primary-navigation destinations.

`/kalai` and `/vilai` are standalone public thought pages. Both load a required entry from `src/content/initiatives/*.md` and render it through `InitiativeLayout.astro`. The `initiatives` schema defines the two palette names, metadata, opening, annotation, three possibilities, and conversation invitation; Markdown holds the personal body prose. `initiatives.css` is imported only by this standalone layout. Links use `withBase`, and the email subject identifies the page. The To desk links to both; the existing sports-development URL also links to Vilai. Neither page implies an operating programme. Visitors can send private notes through the shared Web3Forms integration. They use text-only social metadata and individual SVG favicons rather than the portfolio's personal share image.

`writing` frontmatter (see `src/content.config.ts`, the source of truth): `title`, `description`, `date`, `draft?` (true = hidden everywhere), `lens` (`economics | technical | theatrical`, lowercase), `status` (`published | writing`; `writing` = the being-written desk), `featured?` (surfaces on Home as "From this issue"), `cover?`, `link?` (external Medium piece: frontmatter-only file, no detail route).
`reading` frontmatter: `title`, `author`, `note`, `question?`, `status` (`read | on-deck`), `opened`, `cover?`, `link?`, `order`. Entries use descending manual `order`: the public `read` shelf is deliberately capped at the three current entries, shown under “Last three reads”; `on-deck` entries appear under To Read. Both sections use the existing detailed editorial list treatment when five or fewer entries exist; a longer To Read list can use the native disclosure on the same canvas. Read detail includes `note` and optional `question`; To Read detail includes `note` only. The index shows no counts or dates. Recommendations submit privately through Web3Forms, fall back to email when unconfigured, and become content only after manual curation.

Authoring workflow: `npm run new` scaffolds a schema-correct entry; `npm run publish` builds (zod gates every entry), commits, and pushes. See `docs/WRITING_WORKFLOW.md`.

Schemas enforced in `src/content.config.ts` with zod so content stays consistent. The `projects` collection and its schema were REMOVED.

Modelling is an intentionally hardcoded empty page at launch, not a content collection. Do not register a modelling collection until there is real modelling content to publish.

## Styling flow

Tailwind v4 (CSS-first): tokens are defined once in `src/styles/global.css` under an `@theme` block. Tailwind reads `@theme` and auto-generates utilities from those variables — there is no `tailwind.config.mjs`. Components use Tailwind utility classes (`text-accent`, `bg-surface`, etc.) that map directly to the `@theme` tokens. No raw hex/px in components.

Typography is tokenized in `src/styles/global.css`: `--font-serif` is Libre Bodoni for display, `--font-prose` is Source Serif 4 Variable for article prose, and `--font-sans` is Inter Variable for UI and scanning text. Special brand exception: `/iyal` uses `--font-script` (Sacramento via Fontsource) for the lowercase blue `iyal` wordmark only.

## Motion

CSS-first photo motion. Home uses `FixedPhotoHero.astro`: a frame-clipped fixed background on the portrait side of the hero, so the image stays visually fixed while scrolling but only paints inside the frame. The Home image side is wider than the text side and anchors the image right so the full portrait fits. Home uses `/img/hero-crop.jpeg`; About uses a dedicated `/img/about.jpg` portrait inside an inline 2:3 editorial frame. The About portrait frame and name/brief column stay sticky on desktop until the opening section gives way to the long-read, which preserves the scroll-hold effect without forcing the image through a viewport-fixed background crop. Other photo bands may use CSS parallax (`background-attachment: fixed` via Tailwind `bg-fixed`). Client JS stays narrow: `theme.ts` for themes, `cube.ts` for the rotating menu, `reveal.ts` for progressive reveal plus scroll progress, `sunflower.ts` for the page sunflower renderer, and `idleSunflowers.ts` for the three-second, reduced-motion-safe global decorative cluster. Idle flowers choose collision-checked random positions and spin slowly at varied speeds until interaction. Reveal is opt-in via `js-reveal` so content remains visible if JavaScript fails.

## Data flow

Fully static. No runtime data fetching at launch. Everything resolved at build time from content collections.
