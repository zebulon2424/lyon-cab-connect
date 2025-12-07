import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  page?: 'home' | 'cgv' | 'mentions' | 'confidentialite';
}

const SEO = ({ page = 'home' }: SEOProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const baseUrl = 'https://taxilyoncab.fr';

  const seoData = {
    home: {
      fr: {
        title: 'Taxi Lyon Cab - Service de taxi premium à Lyon 24h/24',
        description: 'Réservez votre taxi à Lyon en ligne. Service premium 24h/24, transferts aéroport Saint-Exupéry, gares Part-Dieu et Perrache. Tarifs fixes et chauffeurs professionnels.',
        keywords: 'taxi lyon, taxi aéroport lyon, vtc lyon, réservation taxi, transfert aéroport saint-exupéry, taxi gare part-dieu, taxi lyon 24h/24, chauffeur privé lyon',
      },
      en: {
        title: 'Taxi Lyon Cab - Premium Taxi Service in Lyon 24/7',
        description: 'Book your taxi in Lyon online. Premium 24/7 service, airport transfers Saint-Exupéry, train stations Part-Dieu and Perrache. Fixed rates and professional drivers.',
        keywords: 'taxi lyon, lyon airport taxi, vtc lyon, taxi booking, saint-exupery airport transfer, part-dieu station taxi, lyon 24h taxi, private driver lyon',
      },
    },
    cgv: {
      fr: {
        title: 'Conditions Générales de Vente - Taxi Lyon Cab',
        description: 'Consultez les conditions générales de vente de Taxi Lyon Cab. Tarification, réservation, annulation et conditions de transport.',
        keywords: 'cgv taxi lyon, conditions générales taxi, tarifs taxi lyon',
      },
      en: {
        title: 'Terms and Conditions - Taxi Lyon Cab',
        description: 'View Taxi Lyon Cab terms and conditions. Pricing, booking, cancellation and transport conditions.',
        keywords: 'taxi lyon terms, taxi conditions, lyon taxi rates',
      },
    },
    mentions: {
      fr: {
        title: 'Mentions Légales - Taxi Lyon Cab',
        description: 'Mentions légales et informations juridiques de Taxi Lyon Cab, service de taxi à Lyon.',
        keywords: 'mentions légales taxi lyon, informations légales',
      },
      en: {
        title: 'Legal Notice - Taxi Lyon Cab',
        description: 'Legal notice and legal information for Taxi Lyon Cab, taxi service in Lyon.',
        keywords: 'legal notice taxi lyon, legal information',
      },
    },
    confidentialite: {
      fr: {
        title: 'Politique de Confidentialité - Taxi Lyon Cab',
        description: 'Politique de confidentialité et protection des données personnelles de Taxi Lyon Cab.',
        keywords: 'confidentialité taxi lyon, protection données, rgpd',
      },
      en: {
        title: 'Privacy Policy - Taxi Lyon Cab',
        description: 'Privacy policy and personal data protection for Taxi Lyon Cab.',
        keywords: 'privacy taxi lyon, data protection, gdpr',
      },
    },
  };

  const currentLang = lang === 'en' ? 'en' : 'fr';
  const alternateLang = currentLang === 'fr' ? 'en' : 'fr';
  const data = seoData[page][currentLang];
  const alternateData = seoData[page][alternateLang];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Taxi Lyon Cab',
    description: data.description,
    url: baseUrl,
    telephone: '+33478000000',
    email: 'contact@taxilyoncab.fr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lyon',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'Place', name: 'Aéroport Lyon Saint-Exupéry' },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.facebook.com/taxilyoncab',
      'https://www.instagram.com/taxilyoncab',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2500',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'Taxi Lyon Cab',
    image: `${baseUrl}/og-image.jpg`,
    telephone: '+33478000000',
    email: 'contact@taxilyoncab.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lyon',
      addressLocality: 'Lyon',
      postalCode: '69000',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.764043,
      longitude: 4.835659,
    },
    url: baseUrl,
    priceRange: '€€',
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta name="author" content="Taxi Lyon Cab" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Canonical & Hreflang */}
      <link rel="canonical" href={baseUrl} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}?lang=fr`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:site_name" content="Taxi Lyon Cab" />
      <meta property="og:locale" content={currentLang === 'fr' ? 'fr_FR' : 'en_GB'} />
      <meta property="og:locale:alternate" content={alternateLang === 'fr' ? 'fr_FR' : 'en_GB'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessData)}
      </script>
    </Helmet>
  );
};

export default SEO;
