import type { APIRoute } from 'astro';
import { site } from '../config';
import { workshops } from '../data/workshops';

// llms.txt: een korte, platte samenvatting van de site voor taalmodellen
// (voorstel van llmstxt.org). Gemaakt uit dezelfde data als de pagina's, zodat
// hij nooit uit de pas loopt.
const link = (pad: string) => (site.url ? `${site.url}${pad}` : pad);

export const GET: APIRoute = () => {
  const tekst = `# ${site.name}

> Interactieve workshops van 90 minuten over filterbubbels, nepnieuws en democratie, voor bibliotheken, gemeenten, scholen en organisaties in Nederland. Deelnemers doen mee op hun telefoon, aan tafels en met de beamer; de uitleg komt pas nadat ze het zelf hebben meegemaakt. Gegeven door ${site.owner}.

## Workshops

${workshops
  .map(
    (w) => `### [${w.titel}](${link(`/workshops/${w.slug}/`)})

${w.vraag} ${w.kort}

- Thema: ${w.themas.join(', ')}
- Duur: 90 minuten, voor 12 tot 30 deelnemers, geen voorkennis nodig
- Opstelling: ${w.tafels}
- Programma: ${w.programma.map((b) => `${b.titel} (${b.minuten} min)`).join('; ')}`,
  )
  .join('\n\n')}

## Praktisch

- Op de locatie van de opdrachtgever. Nodig: een zaal met tafels, een beamer met scherm, en wifi.
- Deelnemers doen mee via een QR-code: geen account, geen installatie, hooguit een voornaam.
- Eén prijs per workshop voor de hele groep, na een korte kennismaking. Ook te boeken als reeks van drie avonden.
- Taal: Nederlands.

## Contact

- [Plan een kennismaking](${link('/contact/')})
- E-mail: ${site.contactEmail}
- [Aanpak](${link('/aanpak/')})
- [Over ${site.name}](${link('/over/')})
`;
  return new Response(tekst, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
