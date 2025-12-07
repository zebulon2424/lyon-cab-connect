import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Clock, CreditCard, MapPin, Phone, CheckCircle, Car, Users, Landmark } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TaxiLyonCentre = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isFr ? "Comment commander un taxi dans le centre de Lyon ?" : "How to order a taxi in Lyon city center?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Appelez le 04 87 38 20 65, envoyez un WhatsApp ou réservez en ligne. Nos taxis arrivent en moins de 10 minutes dans le centre de Lyon." : "Call 04 87 38 20 65, send a WhatsApp or book online. Our taxis arrive in less than 10 minutes in Lyon city center."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Quel est le tarif moyen d'un taxi dans Lyon ?" : "What is the average taxi fare in Lyon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Une course moyenne dans Lyon centre coûte entre 10€ et 20€. Le prix dépend de la distance et de l'heure (tarif jour ou nuit)." : "An average ride in Lyon center costs between €10 and €20. The price depends on the distance and time (day or night rate)."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Les taxis circulent-ils dans le Vieux Lyon ?" : "Do taxis operate in Vieux Lyon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nos taxis desservent le Vieux Lyon et peuvent vous déposer au plus près des rues piétonnes. Prise en charge possible place Saint-Jean ou quai de Bondy." : "Yes, our taxis serve Vieux Lyon and can drop you off as close as possible to the pedestrian streets. Pickup available at Place Saint-Jean or Quai de Bondy."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Y a-t-il un supplément pour les bagages ?" : "Is there an extra charge for luggage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Non, les bagages standards (2 valises + bagages cabine) sont inclus dans le tarif. Seuls les bagages très volumineux peuvent entraîner un supplément." : "No, standard luggage (2 suitcases + cabin bags) is included in the fare. Only very bulky luggage may incur an extra charge."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Lyon Cab - Centre-Ville Lyon",
    "description": isFr ? "Service de taxi professionnel dans le centre de Lyon : Bellecour, Vieux Lyon, Presqu'île, Confluence. Disponible 24h/24." : "Professional taxi service in Lyon city center: Bellecour, Vieux Lyon, Presqu'île, Confluence. Available 24/7.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Lyon Cab",
      "telephone": "+33487382065"
    }
  };

  const quartiers = [
    { name: "Bellecour", description: isFr ? "Cœur de Lyon, Place Bellecour" : "Heart of Lyon, Place Bellecour" },
    { name: "Vieux Lyon", description: isFr ? "Quartier Renaissance, cathédrale Saint-Jean" : "Renaissance district, Saint-Jean Cathedral" },
    { name: isFr ? "Presqu'île" : "Presqu'île", description: isFr ? "Entre Rhône et Saône, commerces" : "Between Rhône and Saône, shops" },
    { name: "Confluence", description: isFr ? "Quartier moderne, centre commercial" : "Modern district, shopping center" },
    { name: "Croix-Rousse", description: isFr ? "Colline des Canuts, village" : "Canuts Hill, village atmosphere" },
    { name: "Part-Dieu", description: isFr ? "Quartier d'affaires, gare TGV" : "Business district, TGV station" },
  ];

  const features = [
    {
      icon: Clock,
      title: isFr ? "Arrivée en 10 min" : "Arrival in 10 min",
      description: isFr ? "Prise en charge rapide dans tout le centre" : "Quick pickup throughout the center"
    },
    {
      icon: MapPin,
      title: isFr ? "Tous les quartiers" : "All neighborhoods",
      description: isFr ? "Bellecour, Vieux Lyon, Confluence..." : "Bellecour, Vieux Lyon, Confluence..."
    },
    {
      icon: CreditCard,
      title: isFr ? "Paiement flexible" : "Flexible payment",
      description: isFr ? "CB, espèces, Apple Pay, Google Pay" : "Card, cash, Apple Pay, Google Pay"
    },
    {
      icon: Car,
      title: isFr ? "Confort garanti" : "Guaranteed comfort",
      description: isFr ? "Véhicules propres et climatisés" : "Clean and air-conditioned vehicles"
    }
  ];

  const prices = [
    { from: "Bellecour", to: "Vieux Lyon", price: "8-10€" },
    { from: "Bellecour", to: "Part-Dieu", price: "12-15€" },
    { from: "Bellecour", to: "Croix-Rousse", price: "12-15€" },
    { from: "Bellecour", to: "Confluence", price: "10-14€" },
    { from: "Bellecour", to: isFr ? "Aéroport" : "Airport", price: "59€" },
    { from: "Vieux Lyon", to: "Perrache", price: "8-12€" },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? "Taxi Lyon Centre-Ville | Bellecour, Vieux Lyon, Presqu'île | 24h/24" : "Lyon City Center Taxi | Bellecour, Vieux Lyon, Presqu'île | 24/7"}</title>
        <meta name="description" content={isFr ? "Réservez un taxi dans le centre de Lyon : Bellecour, Vieux Lyon, Confluence, Croix-Rousse. Service 24h/24, arrivée en 10 min. ☎ 04 87 38 20 65" : "Book a taxi in Lyon city center: Bellecour, Vieux Lyon, Confluence, Croix-Rousse. 24/7 service, arrival in 10 min. ☎ +33 4 87 38 20 65"} />
        <meta name="keywords" content={isFr ? "taxi lyon centre, taxi bellecour, taxi vieux lyon, taxi presqu'île, taxi confluence, réserver taxi lyon" : "lyon center taxi, taxi bellecour, taxi vieux lyon, taxi presqu'île, taxi confluence, book taxi lyon"} />
        <link rel="canonical" href="https://taxilyon.cab/taxi-lyon-centre" />
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
                  <Building className="h-5 w-5" />
                  <span className="font-medium">{isFr ? "Centre-Ville Lyon" : "Lyon City Center"}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {isFr ? "Taxi Lyon Centre-Ville" : "Lyon City Center Taxi"}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isFr 
                    ? "Service de taxi professionnel dans tous les quartiers du centre de Lyon. Bellecour, Vieux Lyon, Presqu'île, Confluence - arrivée en moins de 10 minutes."
                    : "Professional taxi service in all Lyon city center neighborhoods. Bellecour, Vieux Lyon, Presqu'île, Confluence - arrival in less than 10 minutes."}
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
                  <span>{isFr ? "Course moyenne" : "Average ride"}</span>
                  <span className="text-4xl">10-20€</span>
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
                {isFr ? "Quartiers desservis" : "Neighborhoods served"}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {isFr 
                  ? "Nos taxis desservent l'ensemble du centre de Lyon et ses quartiers emblématiques."
                  : "Our taxis serve all of Lyon city center and its iconic neighborhoods."}
              </p>
              
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quartiers.map((quartier, index) => (
                  <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Landmark className="h-6 w-6 text-primary" />
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
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Exemples de tarifs dans Lyon" : "Example fares in Lyon"}
              </h2>
              
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

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Questions fréquentes - Taxi Lyon Centre" : "FAQ - Lyon Center Taxi"}
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
                {isFr ? "Besoin d'un taxi dans Lyon ?" : "Need a taxi in Lyon?"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {isFr 
                  ? "Réservez maintenant et profitez d'une prise en charge en moins de 10 minutes."
                  : "Book now and enjoy pickup in less than 10 minutes."}
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

export default TaxiLyonCentre;
