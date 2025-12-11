import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Clock, CreditCard, MapPin, Phone, Car, Train, Plane, Shield, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TaxiVilleurbanne = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isFr ? "Combien coûte un taxi entre Villeurbanne et Lyon ?" : "How much does a taxi cost between Villeurbanne and Lyon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Une course entre Villeurbanne et Lyon centre coûte en moyenne 12 à 18€. Le tarif dépend du quartier exact et de l'heure de la course." : "A ride between Villeurbanne and Lyon center costs on average €12 to €18. The fare depends on the exact neighborhood and time of the ride."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Quel est le temps d'attente pour un taxi à Villeurbanne ?" : "What is the waiting time for a taxi in Villeurbanne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Nos taxis arrivent en moyenne en 8 à 12 minutes à Villeurbanne. La proximité avec Lyon Part-Dieu nous permet une prise en charge rapide." : "Our taxis arrive on average in 8 to 12 minutes in Villeurbanne. The proximity to Lyon Part-Dieu allows us quick pickup."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Proposez-vous des transferts aéroport depuis Villeurbanne ?" : "Do you offer airport transfers from Villeurbanne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous proposons des transferts vers l'aéroport Lyon Saint-Exupéry depuis Villeurbanne à partir de 55€. Réservation possible 24h/24." : "Yes, we offer transfers to Lyon Saint-Exupéry airport from Villeurbanne starting at €55. Booking available 24/7."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Quels quartiers de Villeurbanne desservez-vous ?" : "Which Villeurbanne neighborhoods do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Nous couvrons tout Villeurbanne : Gratte-Ciel, Charpennes, République, Cusset, Grandclément, Tonkin, campus La Doua et tous les autres quartiers." : "We cover all of Villeurbanne: Gratte-Ciel, Charpennes, République, Cusset, Grandclément, Tonkin, La Doua campus and all other neighborhoods."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Lyon Cab - Villeurbanne",
    "description": isFr ? "Service de taxi professionnel à Villeurbanne. Transferts aéroport, gares et déplacements locaux. Disponible 24h/24." : "Professional taxi service in Villeurbanne. Airport, train station transfers and local trips. Available 24/7.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Lyon Cab",
      "telephone": "+33487382065"
    },
    "areaServed": {
      "@type": "City",
      "name": "Villeurbanne"
    }
  };

  const quartiers = [
    { name: "Gratte-Ciel", description: isFr ? "Centre-ville, mairie, commerces" : "City center, town hall, shops", icon: Building2 },
    { name: "Charpennes", description: isFr ? "Métro, connexion Part-Dieu" : "Metro, Part-Dieu connection", icon: Train },
    { name: "La Doua", description: isFr ? "Campus universitaire, INSA" : "University campus, INSA", icon: Users },
    { name: "Cusset", description: isFr ? "Quartier résidentiel, parcs" : "Residential area, parks", icon: MapPin },
    { name: "Tonkin", description: isFr ? "Proche Parc de la Tête d'Or" : "Near Tête d'Or Park", icon: MapPin },
    { name: "Grandclément", description: isFr ? "Zone commerciale, tramway" : "Commercial area, tramway", icon: Train },
  ];

  const features = [
    {
      icon: Clock,
      title: isFr ? "Arrivée en 10 min" : "Arrival in 10 min",
      description: isFr ? "Prise en charge rapide dans tout Villeurbanne" : "Quick pickup throughout Villeurbanne"
    },
    {
      icon: Plane,
      title: isFr ? "Transferts aéroport" : "Airport transfers",
      description: isFr ? "Lyon Saint-Exupéry dès 55€" : "Lyon Saint-Exupéry from €55"
    },
    {
      icon: CreditCard,
      title: isFr ? "Paiement flexible" : "Flexible payment",
      description: isFr ? "CB, espèces, Apple Pay, Google Pay" : "Card, cash, Apple Pay, Google Pay"
    },
    {
      icon: Shield,
      title: isFr ? "Chauffeurs agréés" : "Licensed drivers",
      description: isFr ? "Professionnels expérimentés" : "Experienced professionals"
    }
  ];

  const prices = [
    { from: "Gratte-Ciel", to: "Lyon Part-Dieu", price: "10-14€" },
    { from: "Charpennes", to: "Lyon Bellecour", price: "14-18€" },
    { from: "La Doua", to: "Gare Perrache", price: "18-22€" },
    { from: "Villeurbanne", to: isFr ? "Aéroport Saint-Exupéry" : "Saint-Exupéry Airport", price: "55€" },
    { from: "Gratte-Ciel", to: "Vieux Lyon", price: "16-20€" },
    { from: "Tonkin", to: "Confluence", price: "18-24€" },
  ];

  const advantages = [
    {
      icon: Car,
      title: isFr ? "Véhicules confortables" : "Comfortable vehicles",
      description: isFr ? "Berlines récentes, climatisation, WiFi disponible" : "Recent sedans, air conditioning, WiFi available"
    },
    {
      icon: Clock,
      title: isFr ? "Disponible 24h/24" : "Available 24/7",
      description: isFr ? "Service de nuit, week-ends et jours fériés inclus" : "Night service, weekends and holidays included"
    },
    {
      icon: Users,
      title: isFr ? "Jusqu'à 7 passagers" : "Up to 7 passengers",
      description: isFr ? "Véhicules adaptés aux groupes et familles" : "Vehicles suitable for groups and families"
    },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? "Taxi Villeurbanne | Gratte-Ciel, Charpennes, La Doua | 24h/24" : "Villeurbanne Taxi | Gratte-Ciel, Charpennes, La Doua | 24/7"}</title>
        <meta name="description" content={isFr ? "Réservez un taxi à Villeurbanne : Gratte-Ciel, Charpennes, La Doua, Cusset. Service 24h/24, transferts aéroport Lyon dès 55€. ☎ 04 87 38 20 65" : "Book a taxi in Villeurbanne: Gratte-Ciel, Charpennes, La Doua, Cusset. 24/7 service, Lyon airport transfers from €55. ☎ +33 4 87 38 20 65"} />
        <meta name="keywords" content={isFr ? "taxi villeurbanne, taxi gratte-ciel, taxi charpennes, taxi la doua, réserver taxi villeurbanne, taxi aéroport villeurbanne" : "villeurbanne taxi, gratte-ciel taxi, charpennes taxi, la doua taxi, book taxi villeurbanne, villeurbanne airport taxi"} />
        <link rel="canonical" href="https://taxilyoncab.fr/taxi-villeurbanne" />
        <meta property="og:title" content={isFr ? "Taxi Villeurbanne | Service 24h/24 | Taxi Lyon Cab" : "Villeurbanne Taxi | 24/7 Service | Taxi Lyon Cab"} />
        <meta property="og:description" content={isFr ? "Service de taxi professionnel à Villeurbanne. Transferts aéroport, gares, déplacements locaux. Réservation en ligne ou par téléphone." : "Professional taxi service in Villeurbanne. Airport, train station transfers, local trips. Online or phone booking."} />
        <meta property="og:type" content="website" />
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
                  <Building2 className="h-5 w-5" />
                  <span className="font-medium">Villeurbanne</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {isFr ? "Taxi Villeurbanne" : "Villeurbanne Taxi"}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isFr 
                    ? "Service de taxi professionnel dans tout Villeurbanne et ses quartiers. Gratte-Ciel, Charpennes, La Doua, Cusset - prise en charge rapide 24h/24."
                    : "Professional taxi service throughout Villeurbanne and its neighborhoods. Gratte-Ciel, Charpennes, La Doua, Cusset - quick pickup 24/7."}
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

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{isFr ? "Arrivée ~10 min" : "Arrival ~10 min"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-primary" />
                    <span>{isFr ? "Aéroport dès 55€" : "Airport from €55"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>{isFr ? "Chauffeurs agréés" : "Licensed drivers"}</span>
                  </div>
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

          {/* Neighborhoods */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">
                {isFr ? "Quartiers desservis à Villeurbanne" : "Neighborhoods served in Villeurbanne"}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {isFr 
                  ? "Nos taxis couvrent l'ensemble de Villeurbanne et assurent des connexions rapides vers Lyon et l'aéroport."
                  : "Our taxis cover all of Villeurbanne and provide fast connections to Lyon and the airport."}
              </p>
              
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quartiers.map((quartier, index) => (
                  <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <quartier.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">{quartier.name}</h3>
                      </div>
                      <p className="text-muted-foreground">{quartier.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Prices */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">
                {isFr ? "Tarifs taxi depuis Villeurbanne" : "Taxi fares from Villeurbanne"}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {isFr 
                  ? "Estimations tarifaires pour vos trajets les plus fréquents depuis Villeurbanne."
                  : "Fare estimates for your most frequent trips from Villeurbanne."}
              </p>
              
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {prices.map((price, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <span className="font-medium">{price.from}</span>
                        <span className="mx-2 text-muted-foreground">→</span>
                        <span className="font-medium">{price.to}</span>
                      </div>
                      <div className="text-xl font-bold text-primary">{price.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground mt-8">
                {isFr 
                  ? "Tarifs indicatifs au compteur. Le prix final peut varier selon le trafic et l'itinéraire."
                  : "Indicative metered rates. Final price may vary depending on traffic and route."}
              </p>
            </div>
          </section>

          {/* Advantages */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Pourquoi choisir Taxi Lyon Cab ?" : "Why choose Taxi Lyon Cab?"}
              </h2>
              
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <advantage.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Questions fréquentes - Taxi Villeurbanne" : "FAQ - Villeurbanne Taxi"}
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-lg mb-3">{faq.name}</h3>
                    <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                {isFr ? "Autres destinations" : "Other destinations"}
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/taxi-lyon-centre" className="px-4 py-2 bg-muted rounded-full hover:bg-primary/10 transition-colors">
                  Taxi Lyon Centre
                </Link>
                <Link to="/taxi-gare-part-dieu" className="px-4 py-2 bg-muted rounded-full hover:bg-primary/10 transition-colors">
                  Taxi Part-Dieu
                </Link>
                <Link to="/taxi-aeroport-lyon-saint-exupery" className="px-4 py-2 bg-muted rounded-full hover:bg-primary/10 transition-colors">
                  Taxi Aéroport Lyon
                </Link>
                <Link to="/taxi-gare-perrache" className="px-4 py-2 bg-muted rounded-full hover:bg-primary/10 transition-colors">
                  Taxi Perrache
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                {isFr ? "Besoin d'un taxi à Villeurbanne ?" : "Need a taxi in Villeurbanne?"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {isFr 
                  ? "Réservez maintenant et profitez d'une prise en charge rapide dans tout Villeurbanne."
                  : "Book now and enjoy quick pickup throughout Villeurbanne."}
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

export default TaxiVilleurbanne;
