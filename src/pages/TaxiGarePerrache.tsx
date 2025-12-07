import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Train, Clock, CreditCard, MapPin, Phone, CheckCircle, Car, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TaxiGarePerrache = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isFr ? "Où trouver un taxi à la Gare de Perrache ?" : "Where to find a taxi at Perrache Station?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "La station de taxi se trouve au niveau du cours de Verdun, devant la gare. Vous pouvez aussi réserver à l'avance pour une prise en charge immédiate à votre arrivée." : "The taxi stand is located at Cours de Verdun level, in front of the station. You can also book in advance for immediate pickup upon arrival."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Quel est le prix d'un taxi depuis Perrache ?" : "What is the taxi price from Perrache?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le tarif moyen est de 10-14€ pour Lyon centre, 65€ pour l'aéroport Saint-Exupéry. Prix fixe garanti sur réservation." : "The average rate is €10-14 to Lyon center, €65 to Saint-Exupéry Airport. Fixed price guaranteed on booking."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "La gare de Perrache est-elle desservie la nuit ?" : "Is Perrache Station served at night?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, notre service de taxi est disponible 24h/24, 7j/7 à la gare de Perrache, même pour les derniers trains et les premiers trains du matin." : "Yes, our taxi service is available 24/7 at Perrache Station, even for the last trains and early morning trains."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Combien de temps pour aller à l'aéroport depuis Perrache ?" : "How long to get to the airport from Perrache?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le trajet Perrache - Aéroport Saint-Exupéry dure environ 30-40 minutes selon le trafic. Nous vous recommandons de prévoir une marge de sécurité." : "The Perrache - Saint-Exupéry Airport journey takes about 30-40 minutes depending on traffic. We recommend allowing extra time for safety."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Lyon Cab - Gare Perrache",
    "description": isFr ? "Service de taxi professionnel depuis la Gare de Perrache Lyon. Disponible 24h/24, prix fixe sur réservation." : "Professional taxi service from Lyon Perrache Station. Available 24/7, fixed price on booking.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Lyon Cab",
      "telephone": "+33472101010"
    }
  };

  const destinations = [
    { to: isFr ? "Lyon Centre (Bellecour)" : "Lyon Center (Bellecour)", price: "10-14€", time: "5-10 min" },
    { to: "Vieux Lyon", price: "10-12€", time: "5-10 min" },
    { to: isFr ? "Aéroport Saint-Exupéry" : "Saint-Exupéry Airport", price: "65€", time: "30-40 min" },
    { to: "Part-Dieu", price: "15-18€", time: "10-15 min" },
    { to: "Confluence", price: "8-12€", time: "5-10 min" },
    { to: "Croix-Rousse", price: "14-18€", time: "12-18 min" },
    { to: "Villeurbanne", price: "18-22€", time: "15-20 min" },
    { to: "Gerland", price: "12-16€", time: "10-15 min" },
  ];

  const features = [
    {
      icon: Clock,
      title: isFr ? "Service 24h/24" : "24/7 Service",
      description: isFr ? "Disponible jour et nuit, tous les jours" : "Available day and night, every day"
    },
    {
      icon: MapPin,
      title: isFr ? "Position centrale" : "Central location",
      description: isFr ? "Accès rapide à tout Lyon" : "Quick access to all of Lyon"
    },
    {
      icon: CreditCard,
      title: isFr ? "Prix fixe" : "Fixed price",
      description: isFr ? "Tarif garanti sans surprise" : "Guaranteed rate, no surprises"
    },
    {
      icon: Car,
      title: isFr ? "Véhicules confortables" : "Comfortable vehicles",
      description: isFr ? "Berlines climatisées" : "Air-conditioned sedans"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? "Taxi Gare Perrache Lyon | Réservation 24h/24 | Dès 10€" : "Lyon Perrache Station Taxi | 24/7 Booking | From €10"}</title>
        <meta name="description" content={isFr ? "Réservez votre taxi à la Gare de Perrache Lyon. Service 24h/24, prix fixe dès 10€. Transfert aéroport 65€. ☎ 04 72 10 10 10" : "Book your taxi at Lyon Perrache Station. 24/7 service, fixed price from €10. Airport transfer €65. ☎ +33 4 72 10 10 10"} />
        <meta name="keywords" content={isFr ? "taxi gare perrache, taxi lyon perrache, réserver taxi perrache, taxi gare lyon, transfert perrache aéroport" : "taxi perrache station, lyon perrache taxi, book taxi perrache, perrache airport transfer"} />
        <link rel="canonical" href="https://taxilyon.cab/taxi-gare-perrache" />
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
                  <span className="font-medium">{isFr ? "Gare de Perrache" : "Perrache Station"}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {isFr ? "Taxi Gare Perrache Lyon" : "Lyon Perrache Station Taxi"}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isFr 
                    ? "Service de taxi professionnel à la Gare de Perrache. Position centrale idéale pour rejoindre Bellecour, Vieux Lyon ou Confluence rapidement."
                    : "Professional taxi service at Perrache Station. Ideal central location to quickly reach Bellecour, Vieux Lyon or Confluence."}
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
                  <span className="text-4xl">10€</span>
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
                {isFr ? "Tarifs Taxi depuis la Gare Perrache" : "Taxi Prices from Perrache Station"}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {isFr 
                  ? "La gare Perrache est idéalement située au cœur de Lyon. Tarifs fixes garantis sur réservation."
                  : "Perrache Station is ideally located in the heart of Lyon. Fixed rates guaranteed on booking."}
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
                  {isFr ? "La Gare de Perrache - Informations pratiques" : "Perrache Station - Practical Information"}
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    {isFr 
                      ? "La gare de Lyon-Perrache est la seconde gare de Lyon après Part-Dieu. Située au confluent du Rhône et de la Saône, elle dessert principalement les lignes TER vers le sud (Saint-Étienne, Grenoble, Valence) et certains TGV."
                      : "Lyon-Perrache station is Lyon's second station after Part-Dieu. Located at the confluence of the Rhône and Saône rivers, it mainly serves TER lines to the south (Saint-Étienne, Grenoble, Valence) and some TGVs."}
                  </p>
                  <p>
                    {isFr 
                      ? "Avec Taxi Lyon Cab, bénéficiez d'un service de taxi professionnel 24h/24 pour tous vos déplacements depuis Perrache : centre-ville, aéroport Saint-Exupéry, quartier de la Confluence, ou toute autre destination dans la région lyonnaise."
                      : "With Taxi Lyon Cab, enjoy a professional 24/7 taxi service for all your trips from Perrache: city center, Saint-Exupéry airport, Confluence district, or any other destination in the Lyon region."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Questions fréquentes - Taxi Gare Perrache" : "FAQ - Perrache Station Taxi"}
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
                {isFr ? "Réservez votre taxi Gare Perrache" : "Book your Perrache Station taxi"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {isFr 
                  ? "Un train à prendre ou un arrivée prévue ? Réservez maintenant."
                  : "Have a train to catch or an arrival planned? Book now."}
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

export default TaxiGarePerrache;
