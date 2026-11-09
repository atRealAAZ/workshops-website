/**
 * Alles wat per site verschilt staat hier. Pas dit aan voor livegang.
 */
export const site = {
  name: 'Meemaken',
  tagline: 'Interactieve workshops over de digitale samenleving',
  owner: 'Arthur Zwartsenberg',

  // Het volledige domein, zonder slash aan het eind, bijv. 'https://meemaken.nl'.
  // Zolang dit leeg is, komen er geen canonieke links en geen sitemap in de
  // build: met een verkeerd domein vertel je Google het verkeerde adres.
  url: '',

  // TODO: vervang door je echte adres. example.com is een plaatshouder.
  contactEmail: 'hallo@example.com',

  // Laat leeg: het formulier opent dan het mailprogramma van de bezoeker met
  // de aanvraag erin. Vul een endpoint in (bijv. Formspree, Basin, Web3Forms)
  // om het formulier direct te laten versturen via een POST met JSON.
  formEndpoint: '',
};
