import { defineConfig } from 'astro/config';

// Zet `site` op het echte domein zodra dat er is (voor canonieke links).
export default defineConfig({
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
