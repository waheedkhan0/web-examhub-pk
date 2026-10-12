import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://examhub.pk',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    // Sitemap disabled due to dependency issue - use static sitemap instead
    // Manually created sitemap: /public/sitemap.xml
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
