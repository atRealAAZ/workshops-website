import type { APIRoute } from 'astro';
import { site } from '../config';

// Alles mag gecrawld worden, ook door de zoekbots van ChatGPT, Claude,
// Perplexity en Gemini: die moeten de site juist kunnen vinden.
export const GET: APIRoute = () => {
  const regels = ['User-agent: *', 'Allow: /'];
  if (site.url) regels.push('', `Sitemap: ${site.url}/sitemap-index.xml`);
  return new Response(regels.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
