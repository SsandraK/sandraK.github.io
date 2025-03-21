import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const LIVE_URL = 'https://ssandrak.github.io';

export default defineConfig({
  site: LIVE_URL,
  base: '/',
  integrations: [tailwind()],
});
