import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://examhub.pk',
  trailingSlash: 'never',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
