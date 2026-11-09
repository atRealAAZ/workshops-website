import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config';

export default defineConfig({
  // Leeg tot het domein bekend is; zie `url` in src/config.ts.
  site: site.url || undefined,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: site.url ? [sitemap({ filter: (page) => !page.includes('/404') })] : [],
});
