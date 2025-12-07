import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation
      nav: {
        home: "Accueil",
        services: "Services",
        pricing: "Tarifs",
        about: "À propos",
        contact: "Contact",
        book: "Réserver",
      },
      // Hero
      hero: {
        title: "Votre taxi à Lyon",
        titleHighlight: "en un clic",
        subtitle: "Service de taxi premium disponible 24h/24 et 7j/7 dans toute la région lyonnaise. Réservez en ligne et voyagez en toute sérénité.",
        cta: "Réserver maintenant",
        ctaSecondary: "Nos tarifs",
      },
      // Booking Form
      booking: {
        title: "Réservez votre course",
        pickup: "Adresse de départ",
        pickupPlaceholder: "Ex: 69001 Lyon, Place Bellecour",
        destination: "Adresse d'arrivée",
        destinationPlaceholder: "Ex: Aéroport Lyon Saint-Exupéry",
        date: "Date",
        time: "Heure",
        passengers: "Passagers",
        passenger: "passager",
        passengers_plural: "passagers",
        luggage: "Bagages",
        bag: "bagage",
        bags: "bagages",
        payment: "Mode de paiement",
        paymentOnline: "Carte en ligne",
        paymentCash: "Espèces",
        paymentCard: "Carte au chauffeur",
        phone: "Téléphone",
        phonePlaceholder: "+33 6 12 34 56 78",
        email: "Email",
        emailPlaceholder: "votre@email.com",
        name: "Nom complet",
        namePlaceholder: "Jean Dupont",
        submit: "Confirmer la réservation",
        estimatedPrice: "Prix estimé",
        successMessage: "Réservation envoyée ! Nous vous contacterons sous peu.",
        // Vehicle types
        vehicleType: "Type de véhicule",
        vehicleSedanLabel: "Berline",
        vehicleMinivanLabel: "Minivan",
        vehicleBusLabel: "Bus",
        vehicleTPMRLabel: "TPMR",
        vehicleVSLLabel: "VSL Médical",
        vehicleDesc_sedan: "Berline confortable pour 1 à 3 passagers (maximum 4 sans grosse valise). Idéal pour les trajets quotidiens et professionnels.",
        vehicleDesc_minivan: "Minivan spacieux pour 7 à 8 passagers maximum. Parfait pour les groupes et les familles avec bagages.",
        vehicleDesc_bus: "Bus pour groupes jusqu'à 19 passagers. Idéal pour les événements, séminaires et transferts de groupe.",
        vehicleDesc_tpmr: "Véhicule adapté aux Personnes à Mobilité Réduite. Équipé pour le transport de personnes en fauteuil roulant.",
        vehicleDesc_vsl: "Véhicule Sanitaire Léger conventionné CPAM. Transport médical avec bon de transport de la Sécurité Sociale.",
        busCallWarning: "Tarif sur demande - Veuillez nous appeler pour un devis personnalisé",
        busCallMessage: "Pour les réservations de bus, veuillez nous appeler directement.",
        busQuote: "Tarif sur demande",
        busCallUs: "Appelez-nous pour un devis",
        callForQuote: "Appeler pour devis",
        // TPMR options
        wheelchairType: "Type de fauteuil roulant",
        wheelchairFoldable: "Fauteuil pliable - Véhicule classique",
        wheelchairRamp: "Fauteuil non pliable / électrique - Véhicule avec rampe",
        // VSL
        vslInfo: "Transport pris en charge par la Sécurité Sociale",
        vslPaymentTitle: "Prise en charge Sécurité Sociale",
        vslPaymentDesc: "Ce transport est conventionné CPAM. Munissez-vous de votre bon de transport délivré par votre médecin. Si vous n'êtes pas pris en charge à 100%, un petit complément sera à régler en fonction de votre taux de prise en charge.",
        vslCovered: "Pris en charge",
        // Child seat
        childSeat: "Siège enfant",
        childSeatNone: "Pas de siège enfant",
        childSeatBaby: "Siège bébé (0-12 mois)",
        childSeatChild: "Siège enfant (1-4 ans)",
        childSeatBooster: "Réhausseur (4-10 ans)",
        childAge: "Âge de l'enfant",
        childAgePlaceholder: "Ex: 3 ans",
      },
      // Services
      services: {
        title: "Nos services",
        subtitle: "Des solutions de transport adaptées à tous vos besoins",
        airport: {
          title: "Transfert Aéroport",
          description: "Navette depuis/vers l'aéroport Lyon Saint-Exupéry. Suivi des vols en temps réel.",
        },
        business: {
          title: "Voyages d'affaires",
          description: "Service premium pour vos déplacements professionnels. Ponctualité garantie.",
        },
        station: {
          title: "Transfert Gare",
          description: "Connexions vers Part-Dieu, Perrache et toutes les gares de la région.",
        },
        events: {
          title: "Événements",
          description: "Transport pour vos soirées, mariages et événements spéciaux.",
        },
        hourly: {
          title: "Mise à disposition",
          description: "Chauffeur privé à l'heure pour vos rendez-vous multiples.",
        },
        medical: {
          title: "Transport médical",
          description: "VSL conventionné CPAM et TPMR pour personnes à mobilité réduite.",
        },
      },
      // Pricing
      pricing: {
        title: "Nos tarifs",
        subtitle: "Tarifs transparents et compétitifs, sans surprise",
        from: "À partir de",
        airport: "Aéroport Lyon",
        airportDesc: "Transfert depuis/vers le centre-ville",
        station: "Gares Lyon",
        stationDesc: "Part-Dieu, Perrache",
        hourly: "Mise à disposition",
        hourlyDesc: "Minimum 2 heures",
        perHour: "/heure",
        nightRate: "Tarif de nuit (+20%) : 20h - 7h",
        weekendRate: "Supplément week-end et jours fériés",
      },
      // Why Choose Us
      why: {
        title: "Pourquoi nous choisir ?",
        subtitle: "L'excellence du transport lyonnais depuis 2010",
        available: {
          title: "Disponible 24h/24",
          description: "Service continu jour et nuit, tous les jours de l'année.",
        },
        professional: {
          title: "Chauffeurs professionnels",
          description: "Conducteurs expérimentés, véhicules récents et bien entretenus.",
        },
        fixed: {
          title: "Prix fixes",
          description: "Tarifs communiqués à l'avance, sans mauvaise surprise.",
        },
        payment: {
          title: "Paiement flexible",
          description: "Carte en ligne, espèces ou carte bancaire au chauffeur.",
        },
      },
      // Contact
      contact: {
        title: "Contactez-nous",
        subtitle: "Une question ? Notre équipe est à votre disposition",
        phone: "Téléphone",
        email: "Email",
        address: "Adresse",
        addressValue: "Lyon, France",
        hours: "Horaires",
        hoursValue: "24h/24 - 7j/7",
      },
      // Footer
      footer: {
        description: "Service de taxi premium à Lyon. Transport fiable et confortable pour tous vos déplacements.",
        quickLinks: "Liens rapides",
        legal: "Mentions légales",
        privacy: "Politique de confidentialité",
        terms: "CGV",
        followUs: "Suivez-nous",
        copyright: "© 2024 Taxi Lyon Cab. Tous droits réservés.",
        madeWith: "Fait avec",
        inLyon: "à Lyon",
      },
      // Common
      common: {
        learnMore: "En savoir plus",
        getQuote: "Obtenir un devis",
        callNow: "Appeler maintenant",
      },
    },
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        services: "Services",
        pricing: "Pricing",
        about: "About",
        contact: "Contact",
        book: "Book Now",
      },
      // Hero
      hero: {
        title: "Your Lyon taxi",
        titleHighlight: "in one click",
        subtitle: "Premium taxi service available 24/7 throughout the Lyon region. Book online and travel with peace of mind.",
        cta: "Book now",
        ctaSecondary: "Our rates",
      },
      // Booking Form
      booking: {
        title: "Book your ride",
        pickup: "Pickup address",
        pickupPlaceholder: "E.g: 69001 Lyon, Place Bellecour",
        destination: "Destination address",
        destinationPlaceholder: "E.g: Lyon Saint-Exupéry Airport",
        date: "Date",
        time: "Time",
        passengers: "Passengers",
        passenger: "passenger",
        passengers_plural: "passengers",
        luggage: "Luggage",
        bag: "bag",
        bags: "bags",
        payment: "Payment method",
        paymentOnline: "Card online",
        paymentCash: "Cash",
        paymentCard: "Card to driver",
        phone: "Phone",
        phonePlaceholder: "+33 6 12 34 56 78",
        email: "Email",
        emailPlaceholder: "your@email.com",
        name: "Full name",
        namePlaceholder: "John Doe",
        submit: "Confirm booking",
        estimatedPrice: "Estimated price",
        successMessage: "Booking sent! We will contact you shortly.",
        // Vehicle types
        vehicleType: "Vehicle type",
        vehicleSedanLabel: "Sedan",
        vehicleMinivanLabel: "Minivan",
        vehicleBusLabel: "Bus",
        vehicleTPMRLabel: "Wheelchair",
        vehicleVSLLabel: "Medical VSL",
        vehicleDesc_sedan: "Comfortable sedan for 1 to 3 passengers (maximum 4 without large luggage). Ideal for daily and business trips.",
        vehicleDesc_minivan: "Spacious minivan for up to 7-8 passengers. Perfect for groups and families with luggage.",
        vehicleDesc_bus: "Bus for groups up to 19 passengers. Ideal for events, seminars and group transfers.",
        vehicleDesc_tpmr: "Vehicle adapted for People with Reduced Mobility. Equipped for wheelchair transport.",
        vehicleDesc_vsl: "Light Medical Vehicle covered by French Social Security. Medical transport with official transport voucher.",
        busCallWarning: "Price on request - Please call us for a custom quote",
        busCallMessage: "For bus reservations, please call us directly.",
        busQuote: "Price on request",
        busCallUs: "Call us for a quote",
        callForQuote: "Call for quote",
        // TPMR options
        wheelchairType: "Wheelchair type",
        wheelchairFoldable: "Foldable wheelchair - Standard vehicle",
        wheelchairRamp: "Non-foldable / Electric wheelchair - Vehicle with ramp",
        // VSL
        vslInfo: "Transport covered by French Social Security",
        vslPaymentTitle: "Social Security Coverage",
        vslPaymentDesc: "This transport is covered by CPAM. Bring your transport voucher issued by your doctor. If you are not covered at 100%, a small additional payment will be required based on your coverage rate.",
        vslCovered: "Covered",
        // Child seat
        childSeat: "Child seat",
        childSeatNone: "No child seat",
        childSeatBaby: "Baby seat (0-12 months)",
        childSeatChild: "Child seat (1-4 years)",
        childSeatBooster: "Booster seat (4-10 years)",
        childAge: "Child's age",
        childAgePlaceholder: "E.g: 3 years old",
      },
      // Services
      services: {
        title: "Our services",
        subtitle: "Transport solutions tailored to all your needs",
        airport: {
          title: "Airport Transfer",
          description: "Shuttle to/from Lyon Saint-Exupéry Airport. Real-time flight tracking.",
        },
        business: {
          title: "Business Travel",
          description: "Premium service for your professional trips. Punctuality guaranteed.",
        },
        station: {
          title: "Train Station Transfer",
          description: "Connections to Part-Dieu, Perrache and all regional stations.",
        },
        events: {
          title: "Events",
          description: "Transportation for your parties, weddings and special events.",
        },
        hourly: {
          title: "Hourly Hire",
          description: "Private chauffeur by the hour for multiple appointments.",
        },
        medical: {
          title: "Medical Transport",
          description: "CPAM approved VSL and wheelchair accessible vehicles for reduced mobility.",
        },
      },
      // Pricing
      pricing: {
        title: "Our rates",
        subtitle: "Transparent and competitive pricing, no surprises",
        from: "From",
        airport: "Lyon Airport",
        airportDesc: "Transfer to/from city center",
        station: "Lyon Stations",
        stationDesc: "Part-Dieu, Perrache",
        hourly: "Hourly Hire",
        hourlyDesc: "Minimum 2 hours",
        perHour: "/hour",
        nightRate: "Night rate (+20%): 8pm - 7am",
        weekendRate: "Weekend and holiday supplement",
      },
      // Why Choose Us
      why: {
        title: "Why choose us?",
        subtitle: "Excellence in Lyon transportation since 2010",
        available: {
          title: "Available 24/7",
          description: "Continuous service day and night, every day of the year.",
        },
        professional: {
          title: "Professional drivers",
          description: "Experienced drivers, recent and well-maintained vehicles.",
        },
        fixed: {
          title: "Fixed prices",
          description: "Rates communicated in advance, no bad surprises.",
        },
        payment: {
          title: "Flexible payment",
          description: "Online card, cash or card to driver.",
        },
      },
      // Contact
      contact: {
        title: "Contact us",
        subtitle: "Any questions? Our team is at your disposal",
        phone: "Phone",
        email: "Email",
        address: "Address",
        addressValue: "Lyon, France",
        hours: "Hours",
        hoursValue: "24/7",
      },
      // Footer
      footer: {
        description: "Premium taxi service in Lyon. Reliable and comfortable transport for all your trips.",
        quickLinks: "Quick Links",
        legal: "Legal Notice",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        followUs: "Follow Us",
        copyright: "© 2024 Taxi Lyon Cab. All rights reserved.",
        madeWith: "Made with",
        inLyon: "in Lyon",
      },
      // Common
      common: {
        learnMore: "Learn more",
        getQuote: "Get a quote",
        callNow: "Call now",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;