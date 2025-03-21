import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const LIVE_URL = 'https://sandrak.github.io';

export default defineConfig({
  site: LIVE_URL,
  integrations: [tailwind()],
});
