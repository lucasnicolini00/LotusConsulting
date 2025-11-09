# Lotus Consulting International Limited — Landing Page

This is a professional, dark-themed landing page for a commercial & transaction lawyer (Nilufer), built with Astro and Tailwind CSS v4.

## Stack

- Astro 5
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- PostCSS + Autoprefixer
- `@astrojs/sitemap` for SEO

## Project Structure

```text
/
├── astro.config.mjs           # Astro config (set your production site URL)
├── postcss.config.cjs         # Tailwind v4 PostCSS plugin
├── tailwind.config.mjs        # Optional theme extensions (lotus colors)
├── public/
│   ├── favicon.svg
│   └── robots.txt             # Robots + sitemap link
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro       # Global SEO tags + Tailwind import
│   ├── pages/
│   │   └── index.astro        # Composes the landing sections + JSON-LD
│   └── styles/
│       └── tailwind.css
└── package.json
```

## Setup & Scripts

Run these from the project root:

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to ./dist
npm run preview # preview production build
```

## Tailwind v4 Notes

Tailwind v4 is configured using the new PostCSS plugin:

```js
// postcss.config.cjs
const tailwind = require("@tailwindcss/postcss");
module.exports = { plugins: [tailwind(), require("autoprefixer")()] };
```

- Custom colors for the brand live in `tailwind.config.mjs` under `theme.extend.colors.lotus` and are used like `bg-lotus-600`.
- Utility classes are applied directly in components; no `@apply` is used in `src/styles/tailwind.css` to keep v4 stable.

## SEO

- Set your real production URL in `astro.config.mjs` as `site`.
- `public/robots.txt` includes a link to the sitemap; update the domain there.
- Open Graph/Twitter meta tags are set in `src/layouts/Layout.astro` via props from pages.
- JSON-LD structured data for Organization and LegalService is injected in `src/pages/index.astro`.

## Where to edit content

- Company/Lawyer names: `src/pages/index.astro` and various components.
- Services copy: `src/components/Services.astro`.
- Hero/CTA email: `src/components/Hero.astro` and `src/components/Contact.astro`.

## Deployment

Any static host works (Netlify, Vercel, GitHub Pages, etc.). Ensure the `site` in `astro.config.mjs` matches your final domain so the sitemap and canonical URLs are correct.
