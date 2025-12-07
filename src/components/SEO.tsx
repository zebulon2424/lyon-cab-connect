import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  page?: 'home' | 'cgv' | 'mentions' | 'confidentialite';
}

const SEO = ({ page = 'home' }: SEOProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const baseUrl = 'https://taxilyoncab.fr';

  // Mots-clés optimisés basés sur les recherches à fort volume
  const seoData = {
    home: {
      fr: {
        title: 'Taxi Lyon Aéroport Saint-Exupéry | Réservation 24h/24 - Taxi Lyon Cab',
        description: 'Taxi Lyon ✓ Transfert aéroport Saint-Exupéry ✓ Gare Part-Dieu & Perrache ✓ Réservation en ligne 24h/24 7j/7 ✓ Tarifs fixes ✓ Devis gratuit. Chauffeurs professionnels à Lyon.',
        keywords: 'taxi lyon, taxi aéroport lyon, taxi saint exupéry, transfert aéroport lyon, taxi gare part dieu, taxi gare perrache, vtc lyon, réservation taxi lyon, taxi lyon pas cher, navette aéroport lyon, chauffeur privé lyon, taxi conventionné lyon, course taxi lyon, commander taxi lyon, tarif taxi lyon aéroport, taxi lyon 24h/24, taxi villeurbanne, taxi bron, taxi vénissieux, taxi lyon centre',
      },
      en: {
        title: 'Lyon Airport Taxi Saint-Exupéry | Book Online 24/7 - Taxi Lyon Cab',
        description: 'Lyon Taxi ✓ Saint-Exupéry Airport Transfer ✓ Part-Dieu & Perrache Station ✓ Online Booking 24/7 ✓ Fixed Rates ✓ Free Quote. Professional drivers in Lyon, France.',
        keywords: 'lyon taxi, lyon airport taxi, saint exupery taxi, lyon airport transfer, part dieu station taxi, perrache station taxi, vtc lyon, book taxi lyon, cheap taxi lyon, lyon airport shuttle, private driver lyon, lyon taxi service, lyon cab, taxi to lyon airport, lyon taxi price, lyon 24h taxi, taxi from lyon airport',
      },
    },
    cgv: {
      fr: {
        title: 'Conditions Générales de Vente | Tarifs Taxi Lyon - Taxi Lyon Cab',
        description: 'Conditions générales de vente Taxi Lyon Cab. Tarification taxi Lyon, politique d\'annulation, conditions de réservation et transport.',
        keywords: 'cgv taxi lyon, conditions taxi lyon, tarifs taxi lyon, prix taxi lyon aéroport, tarif course taxi lyon',
      },
      en: {
        title: 'Terms and Conditions | Lyon Taxi Rates - Taxi Lyon Cab',
        description: 'Taxi Lyon Cab terms and conditions. Lyon taxi pricing, cancellation policy, booking and transport conditions.',
        keywords: 'taxi lyon terms, taxi conditions lyon, lyon taxi rates, lyon airport taxi price',
      },
    },
    mentions: {
      fr: {
        title: 'Mentions Légales | Taxi Lyon Cab - Service Taxi Lyon',
        description: 'Mentions légales Taxi Lyon Cab. Informations juridiques sur notre service de taxi à Lyon et transferts aéroport.',
        keywords: 'mentions légales taxi lyon, informations légales taxi',
      },
      en: {
        title: 'Legal Notice | Taxi Lyon Cab - Lyon Taxi Service',
        description: 'Taxi Lyon Cab legal notice. Legal information about our taxi service in Lyon and airport transfers.',
        keywords: 'legal notice taxi lyon, taxi legal information',
      },
    },
    confidentialite: {
      fr: {
        title: 'Politique de Confidentialité | Taxi Lyon Cab',
        description: 'Politique de confidentialité Taxi Lyon Cab. Protection de vos données personnelles conformément au RGPD.',
        keywords: 'confidentialité taxi lyon, rgpd taxi, protection données taxi',
      },
      en: {
        title: 'Privacy Policy | Taxi Lyon Cab',
        description: 'Taxi Lyon Cab privacy policy. Personal data protection in compliance with GDPR.',
        keywords: 'privacy taxi lyon, gdpr taxi, data protection taxi',
      },
    },
  };

  const currentLang = lang === 'en' ? 'en' : 'fr';
  const alternateLang = currentLang === 'fr' ? 'en' : 'fr';
  const data = seoData[page][currentLang];

  // Schema.org TaxiService enrichi
  const taxiServiceData = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': `${baseUrl}/#taxiservice`,
    name: 'Taxi Lyon Cab',
    alternateName: ['Taxi Lyon Aéroport', 'Taxi Saint-Exupéry', 'Lyon Airport Taxi'],
    description: currentLang === 'fr' 
      ? 'Service de taxi premium à Lyon. Transferts aéroport Saint-Exupéry, gares Part-Dieu et Perrache. Réservation 24h/24.'
      : 'Premium taxi service in Lyon. Saint-Exupéry airport transfers, Part-Dieu and Perrache stations. 24/7 booking.',
    url: baseUrl,
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
    areaServed: [
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'City', name: 'Villeurbanne' },
      { '@type': 'City', name: 'Vénissieux' },
      { '@type': 'City', name: 'Bron' },
      { '@type': 'City', name: 'Caluire-et-Cuire' },
      { '@type': 'Place', name: 'Aéroport Lyon Saint-Exupéry' },
      { '@type': 'Place', name: 'Gare de Lyon Part-Dieu' },
      { '@type': 'Place', name: 'Gare de Lyon Perrache' },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: ['Cash', 'Credit Card', 'Visa', 'Mastercard', 'Apple Pay', 'Google Pay'],
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
      reviewCount: '2847',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: currentLang === 'fr' ? 'Services de taxi' : 'Taxi Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: currentLang === 'fr' ? 'Transfert Aéroport Saint-Exupéry' : 'Saint-Exupéry Airport Transfer',
            description: currentLang === 'fr' 
              ? 'Navette taxi Lyon centre vers aéroport Saint-Exupéry, tarif fixe'
              : 'Taxi shuttle Lyon center to Saint-Exupéry airport, fixed rate',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: currentLang === 'fr' ? 'Taxi Gare Part-Dieu' : 'Part-Dieu Station Taxi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: currentLang === 'fr' ? 'Taxi Gare Perrache' : 'Perrache Station Taxi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: currentLang === 'fr' ? 'VTC Lyon' : 'Lyon VTC',
          },
        },
      ],
    },
  };

  // LocalBusiness pour le SEO local
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  // FAQ Schema pour les questions fréquentes
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: currentLang === 'fr' ? [
      {
        '@type': 'Question',
        name: 'Quel est le tarif d\'un taxi Lyon aéroport Saint-Exupéry ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le tarif pour un taxi de Lyon centre vers l\'aéroport Saint-Exupéry est à partir de 55€ en tarif fixe. Prix garanti, pas de supplément.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment réserver un taxi à Lyon ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Réservez en ligne sur notre site 24h/24, par téléphone ou via WhatsApp. Confirmation immédiate et chauffeur professionnel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des transferts gare Part-Dieu ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous assurons les transferts depuis et vers la gare Part-Dieu 24h/24, 7j/7 avec tarifs fixes.',
        },
      },
    ] : [
      {
        '@type': 'Question',
        name: 'What is the fare for a taxi from Lyon to Saint-Exupéry airport?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The fare for a taxi from Lyon center to Saint-Exupéry airport starts at €55 fixed rate. Guaranteed price, no extra charges.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to book a taxi in Lyon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Book online on our website 24/7, by phone or via WhatsApp. Instant confirmation and professional driver.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer Part-Dieu station transfers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide transfers to and from Part-Dieu station 24/7 with fixed rates.',
        },
      },
    ],
  };

  // BreadcrumbList pour la navigation
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: currentLang === 'fr' ? 'Accueil' : 'Home',
        item: baseUrl,
      },
      ...(page !== 'home' ? [{
        '@type': 'ListItem',
        position: 2,
        name: page === 'cgv' 
          ? (currentLang === 'fr' ? 'CGV' : 'Terms') 
          : page === 'mentions' 
          ? (currentLang === 'fr' ? 'Mentions légales' : 'Legal Notice')
          : (currentLang === 'fr' ? 'Confidentialité' : 'Privacy'),
        item: `${baseUrl}/${page}`,
      }] : []),
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta name="author" content="Taxi Lyon Cab" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo Meta Tags pour SEO local */}
      <meta name="geo.region" content="FR-69" />
      <meta name="geo.placename" content="Lyon" />
      <meta name="geo.position" content="45.764043;4.835659" />
      <meta name="ICBM" content="45.764043, 4.835659" />

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
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />

      {/* Structured Data - Multiple schemas for rich results */}
      <script type="application/ld+json">
        {JSON.stringify(taxiServiceData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

export default SEO;
