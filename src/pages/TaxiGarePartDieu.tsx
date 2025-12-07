import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Train, Clock, CreditCard, MapPin, Phone, CheckCircle, Car, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TaxiGarePartDieu = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isFr ? "Où trouver un taxi à la Gare Part-Dieu ?" : "Where to find a taxi at Part-Dieu Station?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "La station de taxi se trouve à la sortie principale de la gare, côté Villette (sortie Est). Vous pouvez aussi réserver à l'avance avec Taxi Lyon Cab pour éviter l'attente." : "The taxi stand is located at the main exit of the station, Villette side (East exit). You can also book in advance with Taxi Lyon Cab to avoid waiting."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Quel est le prix d'un taxi depuis la Gare Part-Dieu ?" : "What is the taxi price from Part-Dieu Station?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le tarif moyen est de 12-15€ pour Lyon centre, 55€ pour l'aéroport Saint-Exupéry. Prix fixe sur réservation, pas de mauvaise surprise." : "The average rate is €12-15 to Lyon center, €55 to Saint-Exupéry Airport. Fixed price on booking, no bad surprises."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Puis-je réserver un taxi Part-Dieu à l'avance ?" : "Can I book a Part-Dieu taxi in advance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous recommandons de réserver votre taxi à l'avance, surtout aux heures de pointe (7h-9h et 17h-20h). Réservation par téléphone ou en ligne." : "Yes, we recommend booking your taxi in advance, especially during rush hours (7am-9am and 5pm-8pm). Book by phone or online."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Y a-t-il des taxis la nuit à Part-Dieu ?" : "Are there taxis at night at Part-Dieu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, notre service est disponible 24h/24, 7j/7. Nous desservons la gare Part-Dieu même pour les derniers trains de nuit." : "Yes, our service is available 24/7. We serve Part-Dieu Station even for the last night trains."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Lyon Cab - Gare Part-Dieu",
    "description": isFr ? "Service de taxi professionnel depuis la Gare Lyon Part-Dieu. Disponible 24h/24, prix fixe sur réservation." : "Professional taxi service from Lyon Part-Dieu Station. Available 24/7, fixed price on booking.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Lyon Cab",
      "telephone": "+33472101010"
    },
    "areaServed": {
      "@type": "City",
      "name": "Lyon"
    }
  };

  const destinations = [
    { to: isFr ? "Lyon Centre (Bellecour)" : "Lyon Center (Bellecour)", price: "12-15€", time: "10-15 min" },
    { to: "Vieux Lyon", price: "15-18€", time: "15-20 min" },
    { to: isFr ? "Aéroport Saint-Exupéry" : "Saint-Exupéry Airport", price: "55€", time: "20-30 min" },
    { to: "Confluence", price: "18-22€", time: "15-20 min" },
    { to: "Villeurbanne", price: "12-16€", time: "10-15 min" },
    { to: isFr ? "Gare Perrache" : "Perrache Station", price: "15-18€", time: "10-15 min" },
    { to: "Croix-Rousse", price: "14-17€", time: "12-18 min" },
    { to: "Bron", price: "18-22€", time: "15-20 min" },
  ];

  const features = [
    {
      icon: Clock,
      title: isFr ? "Disponible 24h/24" : "Available 24/7",
      description: isFr ? "Service continu, même pour les trains de nuit" : "Continuous service, even for night trains"
    },
    {
      icon: MapPin,
      title: isFr ? "Prise en charge rapide" : "Quick pickup",
      description: isFr ? "Arrivée en moins de 10 minutes" : "Arrival in less than 10 minutes"
    },
    {
      icon: CreditCard,
      title: isFr ? "Prix fixe" : "Fixed price",
      description: isFr ? "Tarif garanti sur réservation" : "Guaranteed rate on booking"
    },
    {
      icon: Users,
      title: isFr ? "Tous bagages" : "All luggage",
      description: isFr ? "Véhicules adaptés pour vos valises" : "Vehicles adapted for your suitcases"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? "Taxi Gare Part-Dieu Lyon | Réservation 24h/24 | À partir de 12€" : "Lyon Part-Dieu Station Taxi | 24/7 Booking | From €12"}</title>
        <meta name="description" content={isFr ? "Réservez votre taxi à la Gare Part-Dieu Lyon. Service 24h/24, prix fixe à partir de 12€. Transfert aéroport 55€. ☎ 04 72 10 10 10" : "Book your taxi at Lyon Part-Dieu Station. 24/7 service, fixed price from €12. Airport transfer €55. ☎ +33 4 72 10 10 10"} />
        <meta name="keywords" content={isFr ? "taxi gare part dieu, taxi lyon part dieu, réserver taxi part dieu, taxi gare lyon, transfert part dieu aéroport" : "taxi part dieu station, lyon part dieu taxi, book taxi part dieu, lyon station taxi, part dieu airport transfer"} />
        <link rel="canonical" href="https://taxilyon.cab/taxi-gare-part-dieu" />
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
                  <Train className="h-5 w-5" />
                  <span className="font-medium">{isFr ? "Gare Lyon Part-Dieu" : "Lyon Part-Dieu Station"}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {isFr ? "Taxi Gare Part-Dieu Lyon" : "Lyon Part-Dieu Station Taxi"}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isFr 
                    ? "Service de taxi professionnel à la Gare Lyon Part-Dieu. Réservation à l'avance, prise en charge rapide, prix fixe garanti."
                    : "Professional taxi service at Lyon Part-Dieu Station. Advance booking, quick pickup, guaranteed fixed price."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <a href="tel:+33472101010">
                      <Phone className="mr-2 h-5 w-5" />
                      04 72 10 10 10
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
                  <span className="text-4xl">12€</span>
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

          {/* Destinations & Prices */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">
                {isFr ? "Tarifs Taxi depuis la Gare Part-Dieu" : "Taxi Prices from Part-Dieu Station"}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {isFr 
                  ? "Tarifs indicatifs. Prix fixe garanti sur réservation à l'avance."
                  : "Indicative prices. Fixed price guaranteed on advance booking."}
              </p>
              
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {destinations.map((dest, index) => (
                  <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">{dest.to}</div>
                          <div className="text-sm text-muted-foreground">{dest.time}</div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-primary">{dest.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Practical Info */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  {isFr ? "Informations pratiques - Taxi Part-Dieu" : "Practical Information - Part-Dieu Taxi"}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-background rounded-xl p-6 shadow-lg">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {isFr ? "Où prendre le taxi ?" : "Where to get the taxi?"}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {isFr 
                        ? "La station de taxi officielle se trouve à la sortie Villette (sortie Est), devant le centre commercial. Pour une prise en charge personnalisée, nous pouvons vous attendre directement sur le quai d'arrivée."
                        : "The official taxi stand is at the Villette exit (East exit), in front of the shopping center. For personalized pickup, we can wait for you directly at the arrival platform."}
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 shadow-lg">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {isFr ? "Horaires de service" : "Service hours"}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {isFr 
                        ? "Notre service est disponible 24h/24, 7j/7. La gare Part-Dieu accueille des TGV jusqu'à minuit et des trains régionaux tôt le matin. Nous sommes toujours là pour vous."
                        : "Our service is available 24/7. Part-Dieu Station welcomes TGVs until midnight and regional trains early in the morning. We are always here for you."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Questions fréquentes - Taxi Gare Part-Dieu" : "FAQ - Part-Dieu Station Taxi"}
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
                {isFr ? "Réservez votre taxi Gare Part-Dieu" : "Book your Part-Dieu Station taxi"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {isFr 
                  ? "Arrivée à Lyon ? Réservez maintenant pour une prise en charge sans attente."
                  : "Arriving in Lyon? Book now for a no-wait pickup."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <a href="tel:+33472101010">
                    <Phone className="mr-2 h-5 w-5" />
                    04 72 10 10 10
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

export default TaxiGarePartDieu;
