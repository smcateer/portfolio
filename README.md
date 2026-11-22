# Data science portfolio

Source for https://smcateer.github.io/portfolio/.

## Branches

- `master`: production site, published by GitHub Pages.
- `refactor/minimal-jekyll`: a self-contained Jekyll theme, developed independently. **Not deployed to production until merged.**

## Local development

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000/portfolio/.

To test a branch preview at a different base path:

```bash
bundle exec jekyll serve --baseurl /portfolio-refactor
```

Jekyll posts are kept in `_posts/`. Embedded sketches and assets are under `assets/`.

## Theme structure

- `_layouts/`: home, post, year/category/tag archives, default shell.
- `_includes/`: minimal header, bio, sharing, taxonomy, footer and search.
- `assets/css/site.css`: the site design and the light/dark CSS variables.
- `assets/js/theme.js`: Light / System / Dark selector (Light by default).
- `assets/js/search.js` and `search.json`: local client-side post search.

Colours are intentionally limited to `#000000`, `#FFFFFF`, and `#42f5c5`. Fonts are BBH Bartle for post titles/accents, BBH Bogle for site machinery, and Zalando Sans SemiExpanded for prose.

## Preview without touching production

For a separate hosted preview, create a **Cloudflare Pages** project connected to `smcateer/portfolio` (Workers & Pages → Create application → Pages → Import Git repository). Choose `refactor/minimal-jekyll` as that project's production branch, **without changing GitHub Pages**, which must remain configured on `master`.

Use these Cloudflare Pages settings:

- Framework preset: Jekyll
- Root directory: repository root
- Build command: `printf 'url: "%s"\nbaseurl: ""\n' "$CF_PAGES_URL" > _cloudflare.yml && bundle exec jekyll build --config _config.yml,_cloudflare.yml`
- Build output directory: `_site`
- Build environment variable: `RUBY_VERSION=3.1.3` (or another supported Ruby 3.1 release)

Cloudflare automatically supplies `CF_PAGES_URL`. The command writes a temporary configuration override because Jekyll 3.10 does not support the `--url` CLI flag. This ensures canonical/sharing links point at the preview and assets resolve from the preview domain's root. The resulting `*.pages.dev` URL is separate from `https://smcateer.github.io/portfolio/`. The preview URL only exists **after** you connect and deploy the project.

This repo is a GitHub Pages **project site**: changing the default git branch is not the same as changing its Pages publishing source. Verify the actual Pages source in repository **Settings → Pages**.

## Pre-merge checks

Verify the homepage and post pagination, existing permalinks (including /plane-tune/ and /monolith/), tag/category anchors, search, light/system/dark modes, mobile layout and embedded sketches before merging into `master`.
