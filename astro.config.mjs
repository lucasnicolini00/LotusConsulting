// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// TODO: replace with production site URL
const site = "https://www.lotusconsulting.example";

export default defineConfig({
  site,
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr", "zh"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
