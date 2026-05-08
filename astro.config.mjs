import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  site: 'https://omnicore-framework.github.io',
  base: '/omnicore-website',
  vite: {
    plugins: [tailwindcss()],
  },
});
