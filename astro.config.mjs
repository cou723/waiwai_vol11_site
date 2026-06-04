import { resolve } from 'node:path';
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
  },
});
