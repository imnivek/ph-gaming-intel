// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://phgamingintel.com',
  output: 'static',
  build: {
    format: 'file',
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
