import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake, Clock, CreditCard, Phone, CheckCircle, Car, Mountain, Users, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TaxiStationsSki = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isFr ? "Quel est le prix d'un taxi Lyon - Courchevel ?" : "What is the price of a taxi from Lyon to Courchevel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le tarif d'un taxi Lyon - Courchevel est estimé entre 350€ et 450€ selon la saison et les conditions. Le trajet dure environ 2h30 à 3h." : "The fare for a Lyon - Courchevel taxi is estimated between €350 and €450 depending on the season and conditions. The journey takes about 2h30 to 3h."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Proposez-vous des transferts depuis l'aéroport de Lyon vers les stations de ski ?" : "Do you offer transfers from Lyon airport to ski resorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous assurons tous les transferts depuis l'Aéroport Lyon Saint-Exupéry vers les stations des Alpes : Courchevel, Val Thorens, Méribel, Les Arcs, La Plagne, Tignes, Val d'Isère, Chamonix, etc." : "Yes, we provide all transfers from Lyon Saint-Exupéry Airport to Alpine resorts: Courchevel, Val Thorens, Méribel, Les Arcs, La Plagne, Tignes, Val d'Isère, Chamonix, etc."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Vos véhicules sont-ils équipés pour la montagne ?" : "Are your vehicles equipped for mountain driving?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, tous nos véhicules sont équipés de pneus neige homologués et de chaînes. Nos chauffeurs sont formés à la conduite en montagne et connaissent parfaitement les routes des stations." : "Yes, all our vehicles are equipped with approved snow tires and chains. Our drivers are trained in mountain driving and know the resort roads perfectly."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Peut-on transporter des skis et snowboards ?" : "Can we transport skis and snowboards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nos véhicules disposent d'un grand espace de rangement pour vos équipements de ski : skis, snowboards, chaussures, bagages. Précisez la quantité lors de la réservation." : "Yes, our vehicles have large storage space for your ski equipment: skis, snowboards, boots, luggage. Specify the quantity when booking."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Faut-il réserver à l'avance pour les stations de ski ?" : "Do I need to book in advance for ski resorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, nous recommandons de réserver au minimum 48h à l'avance, et jusqu'à une semaine pendant les vacances scolaires (Noël, février) pour garantir la disponibilité." : "Yes, we recommend booking at least 48 hours in advance, and up to a week during school holidays (Christmas, February) to guarantee availability."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Lyon Cab - Transfert Stations de Ski",
    "description": isFr ? "Service de taxi Lyon vers les stations de ski des Alpes : Courchevel, Val Thorens, Méribel, Les Arcs, Tignes, Chamonix. Véhicules équipés neige." : "Lyon taxi service to Alpine ski resorts: Courchevel, Val Thorens, Méribel, Les Arcs, Tignes, Chamonix. Snow-equipped vehicles.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Lyon Cab",
      "telephone": "+33487382065"
    },
    "areaServed": [
      { "@type": "City", "name": "Lyon" },
      { "@type": "Place", "name": "Stations de ski des Alpes" }
    ]
  };

  const features = [
    {
      icon: Snowflake,
      title: isFr ? "Équipement neige" : "Snow equipment",
      description: isFr ? "Pneus neige et chaînes homologués" : "Approved snow tires and chains"
    },
    {
      icon: Car,
      title: isFr ? "Transport skis" : "Ski transport",
      description: isFr ? "Espace pour tout votre matériel" : "Space for all your equipment"
    },
    {
      icon: Clock,
      title: isFr ? "24h/24 - 7j/7" : "24/7 Service",
      description: isFr ? "Même pour les vols tôt le matin" : "Even for early morning flights"
    },
    {
      icon: Users,
      title: isFr ? "Jusqu'à 8 passagers" : "Up to 8 passengers",
      description: isFr ? "Vans et minibus disponibles" : "Vans and minibuses available"
    }
  ];

  const stations = [
    { name: "Courchevel", price: "350-450€", time: "2h30-3h", distance: "180 km" },
    { name: "Val Thorens", price: "320-400€", time: "2h30-3h", distance: "175 km" },
    { name: "Méribel", price: "300-380€", time: "2h15-2h45", distance: "165 km" },
    { name: "Les Arcs", price: "280-350€", time: "2h-2h30", distance: "155 km" },
    { name: "La Plagne", price: "290-360€", time: "2h-2h30", distance: "160 km" },
    { name: "Tignes", price: "320-400€", time: "2h30-3h", distance: "175 km" },
    { name: "Val d'Isère", price: "340-420€", time: "2h45-3h15", distance: "185 km" },
    { name: "Chamonix", price: "280-350€", time: "2h-2h30", distance: "150 km" },
    { name: "Megève", price: "250-320€", time: "1h45-2h15", distance: "140 km" },
    { name: "Les Menuires", price: "310-390€", time: "2h15-2h45", distance: "170 km" },
    { name: "L'Alpe d'Huez", price: "220-280€", time: "1h30-2h", distance: "110 km" },
    { name: "Les 2 Alpes", price: "230-290€", time: "1h30-2h", distance: "115 km" },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? "Taxi Lyon Stations de Ski | Courchevel, Val Thorens, Méribel | Taxi Lyon Cab" : "Lyon Ski Resort Taxi | Courchevel, Val Thorens, Méribel | Taxi Lyon Cab"}</title>
        <meta name="description" content={isFr ? "Taxi Lyon vers les stations de ski : Courchevel, Val Thorens, Méribel, Les Arcs, Tignes, Chamonix. Véhicules équipés neige, transport skis inclus. ☎ 04 87 38 20 65" : "Lyon taxi to ski resorts: Courchevel, Val Thorens, Méribel, Les Arcs, Tignes, Chamonix. Snow-equipped vehicles, ski transport included. ☎ +33 4 87 38 20 65"} />
        <meta name="keywords" content={isFr ? "taxi lyon courchevel, taxi lyon val thorens, taxi lyon méribel, taxi lyon stations ski, transfert aéroport lyon ski, navette lyon montagne" : "lyon courchevel taxi, lyon val thorens taxi, lyon meribel taxi, lyon ski resort taxi, lyon airport ski transfer, lyon mountain shuttle"} />
        <link rel="canonical" href="https://taxilyon.cab/taxi-lyon-stations-ski" />
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
                  <Snowflake className="h-5 w-5" />
                  <span className="font-medium">{isFr ? "Transfert Montagne" : "Mountain Transfer"}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {isFr ? "Taxi Lyon - Stations de Ski" : "Lyon - Ski Resorts Taxi"}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isFr 
                    ? "Transferts professionnels vers Courchevel, Val Thorens, Méribel, Les Arcs, Tignes, Chamonix et toutes les stations des Alpes. Véhicules équipés neige, transport de skis inclus."
                    : "Professional transfers to Courchevel, Val Thorens, Méribel, Les Arcs, Tignes, Chamonix and all Alpine resorts. Snow-equipped vehicles, ski transport included."}
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
                  <span className="text-4xl">220€</span>
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
                {isFr ? "Tarifs Taxi Lyon - Stations de Ski" : "Lyon - Ski Resorts Taxi Prices"}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {isFr 
                  ? "Tarifs depuis Lyon ou l'Aéroport Saint-Exupéry pour 1 à 4 passagers. Devis sur demande pour les groupes."
                  : "Rates from Lyon or Saint-Exupéry Airport for 1 to 4 passengers. Quote on request for groups."}
              </p>
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stations.map((station, index) => (
                    <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Mountain className="h-6 w-6 text-primary" />
                          <h3 className="font-semibold text-lg">{station.name}</h3>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex justify-between">
                            <span>{isFr ? "Distance" : "Distance"}:</span>
                            <span>{station.distance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{isFr ? "Durée" : "Duration"}:</span>
                            <span>{station.time}</span>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <div className="text-xl font-bold text-primary text-center">{station.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <p className="text-center text-muted-foreground mt-8">
                {isFr 
                  ? "* Tarifs indicatifs. Le prix peut varier selon les conditions météo et la période (haute saison). Transport des skis et équipements inclus."
                  : "* Indicative prices. Price may vary depending on weather conditions and season (peak season). Ski and equipment transport included."}
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  {isFr ? "Transfert professionnel vers les stations de ski" : "Professional transfer to ski resorts"}
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    {isFr 
                      ? "Lyon est la porte d'entrée idéale vers les plus grandes stations de ski des Alpes françaises. Notre service de taxi spécialisé vous permet de rejoindre Courchevel, Val Thorens, Méribel, Les Arcs, La Plagne, Tignes, Val d'Isère ou Chamonix en toute sérénité, depuis l'aéroport Lyon Saint-Exupéry ou le centre-ville."
                      : "Lyon is the ideal gateway to the largest ski resorts in the French Alps. Our specialized taxi service allows you to reach Courchevel, Val Thorens, Méribel, Les Arcs, La Plagne, Tignes, Val d'Isère or Chamonix with complete peace of mind, from Lyon Saint-Exupéry Airport or the city center."}
                  </p>
                  <p>
                    {isFr 
                      ? "Tous nos véhicules sont équipés de pneus neige homologués et de chaînes, et nos chauffeurs sont expérimentés dans la conduite en montagne. Nous transportons vos skis, snowboards et tout votre équipement en toute sécurité."
                      : "All our vehicles are equipped with approved snow tires and chains, and our drivers are experienced in mountain driving. We transport your skis, snowboards and all your equipment safely."}
                  </p>
                </div>

                <div className="grid gap-4 mt-12">
                  {[
                    isFr ? "Véhicules 4x4 et vans équipés pneus neige et chaînes" : "4x4 vehicles and vans equipped with snow tires and chains",
                    isFr ? "Transport de skis, snowboards et équipements inclus" : "Ski, snowboard and equipment transport included",
                    isFr ? "Chauffeurs formés à la conduite en montagne" : "Drivers trained in mountain driving",
                    isFr ? "Suivi des conditions météo et routières en temps réel" : "Real-time weather and road condition monitoring",
                    isFr ? "Prise en charge à l'aéroport avec pancarte nominative" : "Airport pickup with name sign",
                    isFr ? "Sièges enfants et rehausseurs disponibles gratuitement" : "Child seats and boosters available free of charge"
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

          {/* Stations populaires */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Les domaines skiables desservis" : "Ski areas served"}
              </h2>
              
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {isFr ? "Savoie - Tarentaise" : "Savoy - Tarentaise"}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Les 3 Vallées</strong> : Courchevel, Méribel, Val Thorens, Les Menuires</li>
                    <li>• <strong>Paradiski</strong> : Les Arcs, La Plagne, Peisey-Vallandry</li>
                    <li>• <strong>Espace Killy</strong> : Tignes, Val d'Isère</li>
                    <li>• La Rosière, Sainte-Foy, Les Saisies</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {isFr ? "Haute-Savoie & Isère" : "Haute-Savoie & Isère"}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Mont-Blanc</strong> : Chamonix, Megève, Saint-Gervais</li>
                    <li>• <strong>Portes du Soleil</strong> : Avoriaz, Morzine, Les Gets</li>
                    <li>• <strong>Isère</strong> : L'Alpe d'Huez, Les 2 Alpes, Villard-de-Lans</li>
                    <li>• La Clusaz, Le Grand-Bornand, Flaine</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Questions fréquentes - Taxi Stations de Ski" : "FAQ - Ski Resort Taxi"}
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

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                {isFr ? "Réservez votre taxi vers les stations de ski" : "Book your ski resort taxi"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {isFr 
                  ? "Service disponible 24h/24. Réservation recommandée 48h à l'avance (1 semaine en haute saison)."
                  : "Service available 24/7. Booking recommended 48 hours in advance (1 week during peak season)."}
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

export default TaxiStationsSki;
