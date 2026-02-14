# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/blog site (la-bu.github.io) built with Astro 5 with @astrojs/mdx and @astrojs/rss integrations. Deployed to GitHub Pages.

## Commands

- `pnpm dev` — Start dev server (localhost:4321)
- `pnpm build` — Production build to `./dist/`
- `pnpm preview` — Preview production build locally
- `pnpm astro check` — TypeScript type checking

No test runner or linter is configured yet.

## Architecture

- **Framework:** Astro 5 with strict TypeScript, using pnpm
- **Routing:** File-based routing via `src/pages/`
- **Layouts:** `src/layouts/` for page layout templates
- **Components:** `src/components/` (Astro components by default)
- **Content:** `src/content/blog/` uses Astro content collections for MDX blog posts
- **Styles:** `src/styles/` for global CSS with custom properties (dark/light theme)
- **Static assets:** `src/assets/` for processed assets, `public/` for unprocessed static files
- **Build output:** `dist/` (gitignored)
- **Generated types:** `.astro/` (gitignored)

Astro uses Islands Architecture — components render as static HTML with zero JS by default. Interactive components must be explicitly hydrated with `client:*` directives.
