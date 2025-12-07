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
        addressValue: "254 rue Vendôme, 69003 Lyon",
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
        copyright: "© 2025 Taxi Lyon Cab. Tous droits réservés.",
        madeWith: "Fait avec",
        inLyon: "à Lyon",
      },
      // Common
      common: {
        learnMore: "En savoir plus",
        getQuote: "Obtenir un devis",
        callNow: "Appeler maintenant",
      },
      chat: {
        title: "Taxi Lyon Cab",
        subtitle: "En ligne • Réponse rapide",
        welcomeMessage: "Bonjour ! 👋 Bienvenue chez Taxi Lyon Cab. Comment puis-je vous aider ? Vous pouvez me poser vos questions sur nos services, tarifs ou faire une réservation.",
        autoResponse: "Merci pour votre message ! Un de nos conseillers va vous répondre dans les plus brefs délais. Pour une réservation urgente, n'hésitez pas à nous appeler au 04 XX XX XX XX.",
        placeholder: "Écrivez votre message...",
        openChat: "Ouvrir le chat",
        close: "Fermer",
        minimize: "Réduire",
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
      // Hero - SEO optimized for English keywords
      hero: {
        title: "Lyon Airport Taxi",
        titleHighlight: "Book Online 24/7",
        subtitle: "Premium taxi service from Lyon Saint-Exupéry Airport (LYS) to city center, Part-Dieu & Perrache stations. Fixed prices, English-speaking drivers, online booking.",
        cta: "Book Your Taxi Now",
        ctaSecondary: "See Fixed Rates",
      },
      // Booking Form
      booking: {
        title: "Book Your Lyon Taxi",
        pickup: "Pickup location",
        pickupPlaceholder: "E.g: Lyon Saint-Exupéry Airport (LYS)",
        destination: "Drop-off location",
        destinationPlaceholder: "E.g: Lyon Part-Dieu Station, Hotel",
        date: "Date",
        time: "Time",
        passengers: "Passengers",
        passenger: "passenger",
        passengers_plural: "passengers",
        luggage: "Luggage",
        bag: "bag",
        bags: "bags",
        payment: "Payment method",
        paymentOnline: "Pay online",
        paymentCash: "Cash",
        paymentCard: "Card to driver",
        phone: "Phone",
        phonePlaceholder: "+33 6 12 34 56 78",
        email: "Email",
        emailPlaceholder: "your@email.com",
        name: "Full name",
        namePlaceholder: "John Doe",
        submit: "Confirm Taxi Booking",
        estimatedPrice: "Fixed price",
        successMessage: "Booking confirmed! We will contact you shortly with driver details.",
        // Vehicle types
        vehicleType: "Vehicle type",
        vehicleSedanLabel: "Sedan",
        vehicleMinivanLabel: "Minivan",
        vehicleBusLabel: "Bus",
        vehicleTPMRLabel: "Wheelchair Access",
        vehicleVSLLabel: "Medical Transport",
        vehicleDesc_sedan: "Comfortable sedan for 1-3 passengers (max 4 without large luggage). Perfect for airport transfers and business trips.",
        vehicleDesc_minivan: "Spacious minivan for up to 7-8 passengers. Ideal for families and groups with luggage.",
        vehicleDesc_bus: "Mini bus for groups up to 19 passengers. Great for tours, events and group airport transfers.",
        vehicleDesc_tpmr: "Wheelchair accessible vehicle. Equipped with ramp for wheelchair users.",
        vehicleDesc_vsl: "Medical transport covered by French Social Security. Requires official medical transport voucher.",
        busCallWarning: "Price on request - Please call for a custom quote",
        busCallMessage: "For bus reservations, please contact us directly.",
        busQuote: "Price on request",
        busCallUs: "Call for group quote",
        callForQuote: "Get Quote",
        // TPMR options
        wheelchairType: "Wheelchair type",
        wheelchairFoldable: "Foldable wheelchair - Standard vehicle",
        wheelchairRamp: "Electric/Non-foldable - Vehicle with ramp",
        // VSL
        vslInfo: "Covered by French Social Security",
        vslPaymentTitle: "Social Security Coverage",
        vslPaymentDesc: "This transport is covered by French CPAM. Please bring your medical transport voucher from your doctor.",
        vslCovered: "Covered",
        // Child seat
        childSeat: "Child seat",
        childSeatNone: "No child seat needed",
        childSeatBaby: "Baby seat (0-12 months)",
        childSeatChild: "Child seat (1-4 years)",
        childSeatBooster: "Booster seat (4-10 years)",
        childAge: "Child's age",
        childAgePlaceholder: "E.g: 3 years old",
      },
      // Services - SEO optimized
      services: {
        title: "Lyon Taxi Services",
        subtitle: "Airport transfers, train station pickups & private chauffeur services",
        airport: {
          title: "Lyon Airport Transfer",
          description: "Taxi to/from Lyon Saint-Exupéry Airport (LYS). Real-time flight tracking, meet & greet service.",
        },
        business: {
          title: "Business Travel",
          description: "Executive taxi service for corporate clients. Punctual, professional English-speaking drivers.",
        },
        station: {
          title: "Train Station Taxi",
          description: "Taxi from Part-Dieu TGV station, Perrache station. Perfect for TGV & Eurostar connections.",
        },
        events: {
          title: "Events & Tours",
          description: "Private taxi for Lyon city tours, wine tours in Beaujolais, weddings and special events.",
        },
        hourly: {
          title: "Hourly Chauffeur",
          description: "Private driver by the hour for business meetings, shopping or sightseeing in Lyon.",
        },
        medical: {
          title: "Medical Transport",
          description: "Wheelchair accessible vehicles (TPMR) and medical transport (VSL) for hospital visits.",
        },
      },
      // Pricing - SEO optimized
      pricing: {
        title: "Lyon Taxi Fixed Rates",
        subtitle: "Transparent fixed pricing - No hidden fees, no surprises",
        from: "From",
        airport: "Lyon Airport (LYS)",
        airportDesc: "To/from Lyon city center",
        station: "Train Stations",
        stationDesc: "Part-Dieu, Perrache",
        hourly: "Hourly Hire",
        hourlyDesc: "Minimum 2 hours",
        perHour: "/hour",
        nightRate: "Night rate (+20%): 8pm - 7am",
        weekendRate: "Weekend & public holiday supplement applies",
      },
      // Why Choose Us - SEO optimized
      why: {
        title: "Why Book With Us?",
        subtitle: "Trusted Lyon taxi service since 2010 - Thousands of satisfied travelers",
        available: {
          title: "24/7 Availability",
          description: "Early morning flights? Late arrivals? We're available around the clock, every day.",
        },
        professional: {
          title: "English-Speaking Drivers",
          description: "Professional, courteous drivers who speak English. Clean, modern vehicles.",
        },
        fixed: {
          title: "Fixed Price Guarantee",
          description: "Price quoted is price paid. No meter, no surprises, no hidden charges.",
        },
        payment: {
          title: "Easy Payment Options",
          description: "Pay online, by card, or cash. Visa, Mastercard, Amex accepted.",
        },
      },
      // Contact
      contact: {
        title: "Contact Us",
        subtitle: "Questions? Our team speaks English and is ready to help",
        phone: "Phone",
        email: "Email",
        address: "Address",
        addressValue: "254 rue Vendôme, 69003 Lyon, France",
        hours: "Available",
        hoursValue: "24/7 - Every day",
      },
      // Footer
      footer: {
        description: "Premium Lyon taxi service. Reliable airport transfers, train station pickups, and private chauffeur services throughout Lyon and Rhône-Alpes.",
        quickLinks: "Quick Links",
        legal: "Legal Notice",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        followUs: "Follow Us",
        copyright: "© 2025 Taxi Lyon Cab. All rights reserved.",
        madeWith: "Made with",
        inLyon: "in Lyon, France",
      },
      // Common
      common: {
        learnMore: "Learn more",
        getQuote: "Get a free quote",
        callNow: "Call now",
      },
      chat: {
        title: "Taxi Lyon Cab",
        subtitle: "Online • English support",
        welcomeMessage: "Hello! 👋 Welcome to Taxi Lyon Cab. Need a taxi from Lyon Airport or train station? Ask about our services, fixed rates, or book your transfer now.",
        autoResponse: "Thank you for your message! Our English-speaking team will respond shortly. For urgent bookings, please call us directly.",
        placeholder: "Type your message in English...",
        openChat: "Chat with us",
        close: "Close",
        minimize: "Minimize",
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