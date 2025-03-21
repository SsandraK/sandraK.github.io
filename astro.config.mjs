import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ssandrak.github.io/sandraK.github.io',
  base: '/sandraK.github.io/',
  integrations: [tailwind()],
});
