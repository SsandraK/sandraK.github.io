import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'sandraK.github.io',
  base: '/',
  integrations: [tailwind()],
});
