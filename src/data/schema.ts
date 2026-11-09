/**
 * Gestructureerde data (schema.org, JSON-LD). Zoekmachines en AI-zoekers lezen
 * hieruit wie je bent, wat je aanbiedt en voor wie, zonder de opmaak te hoeven
 * interpreteren.
 */
import { site } from '../config';
import { faq } from './faq';
import type { Workshop } from './workshops';

const abs = (pad: string) => (site.url ? `${site.url}${pad}` : undefined);
const orgId = abs('/#organisatie');

export function organisatie() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    url: abs('/'),
    email: site.contactEmail,
    description:
      'Interactieve workshops van 90 minuten over filterbubbels, nepnieuws en democratie, voor bibliotheken, gemeenten, scholen en organisaties.',
    founder: { '@type': 'Person', name: site.owner },
    areaServed: { '@type': 'Country', name: 'Nederland' },
    knowsAbout: [
      'Mediawijsheid',
      'Filterbubbels',
      'Algoritmes en sociale media',
      'Nepnieuws',
      'Deepfakes',
      'Desinformatie',
      'Democratie',
      'Burgerberaad',
      'Digitale democratie',
    ],
  };
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: abs('/'),
    inLanguage: 'nl',
    publisher: orgId ? { '@id': orgId } : { '@type': 'Organization', name: site.name },
  };
}

export function veelgesteldeVragen() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.vraag,
      acceptedAnswer: { '@type': 'Answer', text: f.antwoord },
    })),
  };
}

export function cursus(w: Workshop) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `Workshop ${w.titel}`,
    description: w.seoBeschrijving,
    url: abs(`/workshops/${w.slug}/`),
    inLanguage: 'nl',
    about: w.themas,
    teaches: w.meenemen,
    educationalLevel: 'Geen voorkennis nodig',
    audience: { '@type': 'Audience', audienceType: 'Gemengd publiek, jong en oud' },
    provider: orgId ? { '@id': orgId } : { '@type': 'Organization', name: site.name },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      courseWorkload: 'PT1H30M',
      inLanguage: 'nl',
    },
  };
}

export function kruimelpad(items: { naam: string; pad: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.naam,
      item: abs(it.pad),
    })),
  };
}
