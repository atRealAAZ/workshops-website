# Meemaken: website

Statische site (Astro) voor drie interactieve workshops: De informatiebubbel,
Nepnieuws-detective en Samen een land besturen. De opbouw volgt
aibedrijfsdag.nl; vormgeving en tekst zijn eigen.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # statische site in dist/
```

## Waar staat wat

| Wat | Bestand |
|---|---|
| Naam, e-mailadres, formulier-endpoint | `src/config.ts` |
| Alle tekst per workshop (programma, wat nodig is, aankondiging) | `src/data/workshops.ts` |
| Veelgestelde vragen | `src/data/faq.ts` |
| Kleuren, lettertypes, schaal | `src/styles/global.css` (bovenin) |
| Beeld per workshop (gegenereerde SVG) | `src/components/WorkshopCover.astro` |

Pagina's: `/`, `/workshops/`, `/workshops/<slug>/`, `/aanpak/`, `/over/`,
`/contact/`, `/privacy/`.

## Voor livegang

- **Railway:** koppel de repo; Railway draait `npm run build` en daarna
  `npm start` (`serve` op `$PORT`, met de echte 404-pagina). Node-versie staat
  in `engines` in `package.json`.

- **Domein:** vul `url` in `src/config.ts` in (bijv. `https://meemaken.nl`).
  Pas dan komen er een sitemap, canonieke links en een `Sitemap:`-regel in
  `robots.txt` in de build.
- **E-mailadres:** `contactEmail` in `src/config.ts` is nog een plaatshouder.
- **Formulier:** zonder `formEndpoint` opent het formulier het mailprogramma
  van de bezoeker met de aanvraag erin. Met een endpoint (Formspree, Basin,
  Web3Forms) gaat het als JSON-POST direct weg. De privacypagina noemt de
  externe dienst dan vanzelf.
- **Bron van de inhoud:** de workshops zelf staan in
  `~/Projects/Workshops/autom_workshops/sessions/<slug>/` (brief.md,
  structuur.md). Verandert daar het programma, werk dan `src/data/workshops.ts`
  bij.

## Vindbaarheid

Per workshop staan zoektitel, omschrijving en thema's in `src/data/workshops.ts`.
Gestructureerde data (schema.org) staat in `src/data/schema.ts`. `/llms.txt` en
`/robots.txt` worden uit dezelfde data gemaakt.

Geen cookies, geen trackers; lettertypes (Archivo, Atkinson Hyperlegible)
worden zelf gehost via Fontsource.
