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

For a separate hosted preview, connect this repo to a service supporting **branch deploys**, such as Cloudflare Pages or Netlify. Set the production branch for that service to `refactor/minimal-jekyll` and keep GitHub Pages configured on `master`. For a Jekyll build, use `bundle install && bundle exec jekyll build --baseurl '' --url 'https://YOUR-PREVIEW-DOMAIN'` and publish `_site`. A relative-url-aware build is needed because the production site lives under `/portfolio`.

This repo is a GitHub Pages **project site**: changing the default git branch is not the same as changing its Pages publishing source. Verify the actual Pages source in repository **Settings → Pages**.

## Pre-merge checks

Verify the homepage and post pagination, existing permalinks (including /plane-tune/ and /monolith/), tag/category anchors, search, light/system/dark modes, mobile layout and embedded sketches before merging into `master`.
