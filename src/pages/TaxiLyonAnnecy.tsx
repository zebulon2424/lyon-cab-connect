import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, CreditCard, Phone, CheckCircle, Car, Mountain, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TaxiLyonAnnecy = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isFr ? "Quel est le prix d'un taxi Lyon - Annecy ?" : "What is the price of a taxi from Lyon to Annecy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le tarif d'un taxi Lyon - Annecy est estimé entre 180€ et 220€ selon l'heure et le trafic. Le trajet dure environ 1h30 à 2h." : "The fare for a Lyon - Annecy taxi is estimated between €180 and €220 depending on the time and traffic. The journey takes about 1h30 to 2h."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Combien de temps dure le trajet Lyon - Annecy en taxi ?" : "How long is the Lyon - Annecy taxi journey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le trajet en taxi de Lyon à Annecy dure environ 1h30 à 2h selon les conditions de circulation. Nous empruntons l'autoroute A43 puis A41 pour un trajet optimal." : "The taxi journey from Lyon to Annecy takes about 1h30 to 2h depending on traffic conditions. We take the A43 then A41 motorway for an optimal route."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Proposez-vous des transferts Aéroport Lyon - Annecy ?" : "Do you offer Lyon Airport - Annecy transfers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous assurons les transferts depuis l'Aéroport Lyon Saint-Exupéry vers Annecy. Le trajet dure environ 1h15 à 1h30 et le tarif est estimé entre 160€ et 200€." : "Yes, we provide transfers from Lyon Saint-Exupéry Airport to Annecy. The journey takes about 1h15 to 1h30 and the fare is estimated between €160 and €200."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Peut-on réserver un taxi Lyon - Annecy à l'avance ?" : "Can I book a Lyon - Annecy taxi in advance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous recommandons de réserver votre taxi 24 à 48h à l'avance pour les trajets longue distance. Réservation possible par téléphone, WhatsApp ou en ligne." : "Yes, we recommend booking your taxi 24 to 48 hours in advance for long-distance trips. Booking available by phone, WhatsApp or online."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Acceptez-vous les trajets aller-retour Lyon - Annecy ?" : "Do you accept round trips Lyon - Annecy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous proposons des trajets aller-retour avec tarif préférentiel. Idéal pour les réunions d'affaires, visites touristiques ou rendez-vous médicaux à Annecy." : "Yes, we offer round trips with preferential rates. Ideal for business meetings, tourist visits or medical appointments in Annecy."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Lyon Cab - Transfert Lyon Annecy",
    "description": isFr ? "Service de taxi longue distance Lyon - Annecy. Transferts aéroport, gares et domicile. Disponible 24h/24." : "Long-distance taxi service Lyon - Annecy. Airport, station and home transfers. Available 24/7.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Lyon Cab",
      "telephone": "+33487382065"
    },
    "areaServed": [
      { "@type": "City", "name": "Lyon" },
      { "@type": "City", "name": "Annecy" }
    ],
    "priceRange": "180€ - 220€"
  };

  const features = [
    {
      icon: Clock,
      title: isFr ? "Trajet 1h30 - 2h" : "1h30 - 2h journey",
      description: isFr ? "Via autoroute A43/A41, itinéraire optimal" : "Via A43/A41 motorway, optimal route"
    },
    {
      icon: CreditCard,
      title: isFr ? "Tarif transparent" : "Transparent pricing",
      description: isFr ? "Prix convenu à l'avance, sans surprise" : "Price agreed in advance, no surprises"
    },
    {
      icon: Car,
      title: isFr ? "Véhicules confortables" : "Comfortable vehicles",
      description: isFr ? "Berlines spacieuses pour longs trajets" : "Spacious sedans for long journeys"
    },
    {
      icon: Users,
      title: isFr ? "Jusqu'à 7 passagers" : "Up to 7 passengers",
      description: isFr ? "Vans disponibles pour les groupes" : "Vans available for groups"
    }
  ];

  const prices = [
    { from: "Lyon Centre", to: "Annecy Centre", price: "180-220€", time: "1h30-2h" },
    { from: isFr ? "Aéroport Saint-Exupéry" : "Saint-Exupéry Airport", to: "Annecy Centre", price: "160-200€", time: "1h15-1h30" },
    { from: "Lyon Part-Dieu", to: "Annecy Centre", price: "175-215€", time: "1h30-1h45" },
    { from: "Lyon Centre", to: "Annecy-le-Vieux", price: "185-225€", time: "1h35-2h" },
    { from: "Lyon Centre", to: "Lac d'Annecy", price: "190-230€", time: "1h40-2h" },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? "Taxi Lyon Annecy | Transfert dès 180€ | Taxi Lyon Cab" : "Lyon Annecy Taxi | Transfer from €180 | Taxi Lyon Cab"}</title>
        <meta name="description" content={isFr ? "Taxi Lyon - Annecy : transfert longue distance dès 180€. Trajet 1h30-2h, véhicules confortables, disponible 24h/24. Aéroport Lyon vers Annecy. ☎ 04 87 38 20 65" : "Lyon - Annecy taxi: long-distance transfer from €180. 1h30-2h journey, comfortable vehicles, available 24/7. Lyon Airport to Annecy. ☎ +33 4 87 38 20 65"} />
        <meta name="keywords" content={isFr ? "taxi lyon annecy, transfert lyon annecy, taxi aéroport lyon annecy, navette lyon annecy, prix taxi lyon annecy" : "taxi lyon annecy, lyon annecy transfer, lyon airport annecy taxi, lyon annecy shuttle, lyon annecy taxi price"} />
        <link rel="canonical" href="https://taxilyon.cab/taxi-lyon-annecy" />
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
                  <Mountain className="h-5 w-5" />
                  <span className="font-medium">{isFr ? "Longue Distance" : "Long Distance"}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {isFr ? "Taxi Lyon - Annecy" : "Lyon - Annecy Taxi"}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isFr 
                    ? "Transfert professionnel Lyon - Annecy en 1h30 à 2h. Service 24h/24, véhicules confortables, chauffeurs expérimentés pour vos trajets vers la Venise des Alpes."
                    : "Professional Lyon - Annecy transfer in 1h30 to 2h. 24/7 service, comfortable vehicles, experienced drivers for your trips to the Venice of the Alps."}
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
                  <span className="text-4xl">180€</span>
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
              <h2 className="text-3xl font-bold text-center mb-4">
                {isFr ? "Tarifs Taxi Lyon - Annecy" : "Lyon - Annecy Taxi Prices"}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {isFr 
                  ? "Tarifs indicatifs pour 1 à 4 passagers. Devis personnalisé pour les groupes et trajets spéciaux."
                  : "Indicative rates for 1 to 4 passengers. Custom quote for groups and special trips."}
              </p>
              
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {prices.map((price, index) => (
                  <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">{price.from} → {price.to}</div>
                            <div className="text-sm text-muted-foreground">{price.time}</div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-primary">{price.price}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  {isFr ? "Votre transfert Lyon - Annecy en toute sérénité" : "Your Lyon - Annecy transfer in complete peace of mind"}
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    {isFr 
                      ? "Annecy, surnommée la \"Venise des Alpes\", est une destination prisée à seulement 140 km de Lyon. Que vous voyagiez pour affaires, tourisme ou pour rejoindre les stations de ski de Haute-Savoie, notre service de taxi longue distance vous garantit un trajet confortable et ponctuel."
                      : "Annecy, nicknamed the 'Venice of the Alps', is a popular destination only 140 km from Lyon. Whether you're traveling for business, tourism or to reach the ski resorts of Haute-Savoie, our long-distance taxi service guarantees you a comfortable and punctual journey."}
                  </p>
                  <p>
                    {isFr 
                      ? "Nos chauffeurs professionnels connaissent parfaitement l'itinéraire Lyon - Annecy et empruntent les autoroutes A43 et A41 pour un trajet rapide et sécurisé. En cas de trafic, ils savent adapter leur itinéraire pour vous garantir une arrivée à l'heure."
                      : "Our professional drivers know the Lyon - Annecy route perfectly and take the A43 and A41 motorways for a fast and safe journey. In case of traffic, they know how to adapt their route to guarantee your arrival on time."}
                  </p>
                </div>

                <div className="grid gap-4 mt-12">
                  {[
                    isFr ? "Prise en charge à domicile, hôtel, gare ou aéroport" : "Pickup from home, hotel, station or airport",
                    isFr ? "Véhicules spacieux avec climatisation et wifi" : "Spacious vehicles with air conditioning and wifi",
                    isFr ? "Possibilité d'arrêts en cours de route (aire de repos, etc.)" : "Possibility of stops along the way (rest area, etc.)",
                    isFr ? "Suivi GPS en temps réel partagé avec vos proches" : "Real-time GPS tracking shared with your loved ones",
                    isFr ? "Tarifs aller-retour avantageux sur demande" : "Advantageous round-trip rates on request",
                    isFr ? "Paiement par carte, espèces ou virement" : "Payment by card, cash or bank transfer"
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
                {isFr ? "Questions fréquentes - Taxi Lyon Annecy" : "FAQ - Lyon Annecy Taxi"}
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
                {isFr ? "Réservez votre taxi Lyon - Annecy" : "Book your Lyon - Annecy taxi"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {isFr 
                  ? "Service disponible 24h/24, 7j/7. Réservation recommandée 24-48h à l'avance."
                  : "Service available 24/7. Booking recommended 24-48 hours in advance."}
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

export default TaxiLyonAnnecy;
