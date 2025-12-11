import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Clock, CreditCard, Users, Phone, MapPin, CheckCircle, Car } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TaxiAeroportLyon = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isFr ? "Quel est le prix d'un taxi Lyon - Aéroport Saint-Exupéry ?" : "What is the price of a taxi from Lyon to Saint-Exupéry Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le tarif est estimé entre 59€ et 75€ pour un trajet Lyon centre - Aéroport Saint-Exupéry, selon l'heure et le trafic. Tarif au compteur, transparent et réglementé." : "The fare is estimated between €59 and €75 for a Lyon city center - Saint-Exupéry Airport trip, depending on time and traffic. Metered rate, transparent and regulated."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Combien de temps dure le trajet en taxi vers l'aéroport ?" : "How long does the taxi ride to the airport take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le trajet dure environ 25-35 minutes depuis Lyon centre, selon le trafic. Nos chauffeurs connaissent les meilleurs itinéraires pour vous garantir une arrivée à l'heure." : "The journey takes approximately 25-35 minutes from Lyon city center, depending on traffic. Our drivers know the best routes to ensure you arrive on time."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Puis-je réserver un taxi pour l'aéroport à l'avance ?" : "Can I book an airport taxi in advance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous recommandons de réserver 24h à l'avance pour garantir votre transfert. Réservation possible par téléphone, WhatsApp ou via notre formulaire en ligne." : "Yes, we recommend booking 24 hours in advance to guarantee your transfer. Booking available by phone, WhatsApp or via our online form."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Le chauffeur m'attend-il à l'aéroport avec une pancarte ?" : "Will the driver wait for me at the airport with a sign?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, votre chauffeur vous attend dans le hall des arrivées avec une pancarte à votre nom. 1 heure d'attente incluse gratuitement." : "Yes, your driver waits for you in the arrivals hall with a sign with your name. 1 hour of waiting time included for free."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Acceptez-vous les paiements par carte bancaire ?" : "Do you accept credit card payments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous acceptons tous les moyens de paiement : carte bancaire, espèces, Apple Pay, Google Pay. Facture disponible sur demande." : "Yes, we accept all payment methods: credit card, cash, Apple Pay, Google Pay. Invoice available upon request."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Lyon Cab - Transfert Aéroport Saint-Exupéry",
    "description": isFr ? "Service de taxi professionnel pour transferts Lyon - Aéroport Saint-Exupéry. À partir de 59€, disponible 24h/24." : "Professional taxi service for Lyon - Saint-Exupéry Airport transfers. From €59, available 24/7.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Lyon Cab",
      "telephone": "+33487382065",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressCountry": "FR"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Lyon"
    },
    "priceRange": "59€ - 75€"
  };

  const features = [
    {
      icon: Clock,
      title: isFr ? "Disponible 24h/24" : "Available 24/7",
      description: isFr ? "Service continu jour et nuit, 7j/7" : "Continuous service day and night, 7 days a week"
    },
    {
      icon: CreditCard,
      title: isFr ? "Tarif réglementé" : "Regulated pricing",
      description: isFr ? "Prix au compteur, transparent et sans surprise" : "Metered rate, transparent with no surprises"
    },
    {
      icon: Users,
      title: isFr ? "Accueil personnalisé" : "Personalized welcome",
      description: isFr ? "Chauffeur avec pancarte à votre nom" : "Driver with sign with your name"
    },
    {
      icon: Car,
      title: isFr ? "Véhicules premium" : "Premium vehicles",
      description: isFr ? "Berlines confortables et climatisées" : "Comfortable, air-conditioned sedans"
    }
  ];

  const prices = [
    { from: isFr ? "Lyon Centre" : "Lyon Center", to: isFr ? "Aéroport Saint-Exupéry" : "Saint-Exupéry Airport", dayPrice: "59€", nightPrice: "75€", time: "25-35 min" },
    { from: "Part-Dieu", to: isFr ? "Aéroport Saint-Exupéry" : "Saint-Exupéry Airport", dayPrice: "55€", nightPrice: "70€", time: "20-30 min" },
    { from: "Perrache", to: isFr ? "Aéroport Saint-Exupéry" : "Saint-Exupéry Airport", dayPrice: "65€", nightPrice: "80€", time: "30-40 min" },
    { from: "Villeurbanne", to: isFr ? "Aéroport Saint-Exupéry" : "Saint-Exupéry Airport", dayPrice: "55€", nightPrice: "70€", time: "20-30 min" },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? "Taxi Aéroport Lyon Saint-Exupéry | Transfert dès 59€ | Taxi Lyon Cab" : "Lyon Airport Taxi Saint-Exupéry | Transfer from €59 | Taxi Lyon Cab"}</title>
        <meta name="description" content={isFr ? "Réservez votre taxi Lyon - Aéroport Saint-Exupéry. À partir de 59€, disponible 24h/24, chauffeur avec pancarte. Transfert rapide en 25-35 min. ☎ 04 87 38 20 65" : "Book your Lyon - Saint-Exupéry Airport taxi. From €59, available 24/7, driver with sign. Fast transfer in 25-35 min. ☎ +33 4 87 38 20 65"} />
        <meta name="keywords" content={isFr ? "taxi aéroport lyon, taxi saint exupéry, transfert aéroport lyon, navette taxi lyon, taxi LYS, prix taxi aéroport lyon" : "lyon airport taxi, saint exupery taxi, lyon airport transfer, taxi LYS, airport taxi price lyon"} />
        <link rel="canonical" href="https://taxilyon.cab/taxi-aeroport-lyon-saint-exupery" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Plane className="h-5 w-5" />
                  <span className="font-medium">{isFr ? "Transfert Aéroport" : "Airport Transfer"}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {isFr ? "Taxi Lyon - Aéroport Saint-Exupéry" : "Lyon - Saint-Exupéry Airport Taxi"}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isFr 
                    ? "Transfert professionnel vers l'aéroport Lyon Saint-Exupéry (LYS). Tarif au compteur réglementé, chauffeur ponctuel avec pancarte à votre nom."
                    : "Professional transfer to Lyon Saint-Exupéry Airport (LYS). Regulated metered rate, punctual driver with sign with your name."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <a href="tel:+33487382065">
                      <Phone className="mr-2 h-5 w-5" />
                      04 87 38 20 65
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <Link to="/#reservation">
                      {isFr ? "Réserver en ligne" : "Book online"}
                    </Link>
                  </Button>
                </div>

                <div className="inline-flex items-center gap-2 text-2xl font-bold text-primary">
                  <span>{isFr ? "À partir de" : "From"}</span>
                  <span className="text-4xl">59€</span>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                        <feature.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Tarifs Taxi Aéroport Lyon Saint-Exupéry" : "Lyon Saint-Exupéry Airport Taxi Prices"}
              </h2>
              
              <div className="max-w-4xl mx-auto overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left">{isFr ? "Départ" : "From"}</th>
                      <th className="p-4 text-left">{isFr ? "Arrivée" : "To"}</th>
                      <th className="p-4 text-center">{isFr ? "Tarif Jour" : "Day Rate"}</th>
                      <th className="p-4 text-center">{isFr ? "Tarif Nuit" : "Night Rate"}</th>
                      <th className="p-4 text-center">{isFr ? "Durée" : "Duration"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((price, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                        <td className="p-4 font-medium">{price.from}</td>
                        <td className="p-4">{price.to}</td>
                        <td className="p-4 text-center font-semibold text-primary">{price.dayPrice}</td>
                        <td className="p-4 text-center font-semibold">{price.nightPrice}</td>
                        <td className="p-4 text-center text-muted-foreground">{price.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="text-center text-muted-foreground mt-6">
                {isFr 
                  ? "* Tarif nuit applicable de 19h à 7h et les dimanches/jours fériés. Prix pour 1-4 passagers."
                  : "* Night rate applicable from 7pm to 7am and on Sundays/holidays. Price for 1-4 passengers."}
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  {isFr ? "Pourquoi choisir Taxi Lyon Cab pour l'aéroport ?" : "Why choose Taxi Lyon Cab for the airport?"}
                </h2>
                
                <div className="grid gap-4">
                  {[
                    isFr ? "Chauffeur professionnel avec pancarte à votre nom dans le hall des arrivées" : "Professional driver with sign with your name in the arrivals hall",
                    isFr ? "1 heure d'attente incluse gratuitement en cas de retard de vol" : "1 hour of waiting time included free in case of flight delay",
                    isFr ? "Suivi de votre vol en temps réel pour ajuster l'heure de prise en charge" : "Real-time flight tracking to adjust pickup time",
                    isFr ? "Véhicules spacieux pour vos bagages (2 valises + 2 bagages cabine inclus)" : "Spacious vehicles for your luggage (2 suitcases + 2 cabin bags included)",
                    isFr ? "Tarif au compteur réglementé - prix transparent dans la fourchette indiquée" : "Regulated metered rate - transparent pricing within the indicated range",
                    isFr ? "Sièges bébé et rehausseurs disponibles sur demande (gratuit)" : "Baby seats and booster seats available on request (free)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Questions fréquentes - Taxi Aéroport Lyon" : "Frequently Asked Questions - Lyon Airport Taxi"}
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.name}</h3>
                    <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                {isFr ? "Réservez votre taxi aéroport maintenant" : "Book your airport taxi now"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {isFr 
                  ? "Disponible 24h/24, 7j/7. Réservation rapide par téléphone ou en ligne."
                  : "Available 24/7. Quick booking by phone or online."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <a href="tel:+33487382065">
                    <Phone className="mr-2 h-5 w-5" />
                    04 87 38 20 65
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/#reservation">
                    {isFr ? "Réserver en ligne" : "Book online"}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default TaxiAeroportLyon;
