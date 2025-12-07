import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Clock, CreditCard, Shield, Phone, CheckCircle, X, Scale, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const VTCTaxiLyon = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isFr ? "Quelle est la différence entre un taxi et un VTC à Lyon ?" : "What is the difference between a taxi and VTC in Lyon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Le taxi peut prendre des clients dans la rue et aux stations, avec un tarif réglementé au compteur. Le VTC ne peut prendre que des clients sur réservation, avec des prix libres qui peuvent varier (surge pricing)." : "A taxi can pick up clients on the street and at stands, with regulated meter rates. VTC can only take clients by reservation, with free pricing that can vary (surge pricing)."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Un taxi est-il plus cher qu'un VTC à Lyon ?" : "Is a taxi more expensive than a VTC in Lyon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Pas nécessairement. Les taxis ont des tarifs réglementés et stables, tandis que les VTC peuvent appliquer des majorations en période de forte demande. Un taxi est souvent plus économique aux heures de pointe." : "Not necessarily. Taxis have regulated and stable rates, while VTCs can apply surcharges during high demand. A taxi is often cheaper during rush hours."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Les taxis lyonnais acceptent-ils la carte bancaire ?" : "Do Lyon taxis accept credit cards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, tous nos taxis sont équipés de terminaux de paiement et acceptent les cartes bancaires, Apple Pay, Google Pay et les espèces." : "Yes, all our taxis are equipped with payment terminals and accept credit cards, Apple Pay, Google Pay and cash."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Peut-on réserver un taxi à Lyon comme un VTC ?" : "Can you book a taxi in Lyon like a VTC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, absolument ! Vous pouvez réserver votre taxi à l'avance par téléphone, WhatsApp ou en ligne, exactement comme un VTC, mais avec les avantages du taxi (tarif garanti, pas de surge pricing)." : "Yes, absolutely! You can book your taxi in advance by phone, WhatsApp or online, exactly like a VTC, but with taxi advantages (guaranteed rate, no surge pricing)."
        }
      },
      {
        "@type": "Question",
        "name": isFr ? "Les taxis peuvent-ils utiliser les voies de bus ?" : "Can taxis use bus lanes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isFr ? "Oui, c'est un avantage exclusif des taxis ! Les taxis peuvent emprunter les voies réservées aux bus à Lyon, ce qui permet d'éviter les embouteillages et d'arriver plus vite à destination." : "Yes, this is an exclusive taxi advantage! Taxis can use bus lanes in Lyon, which helps avoid traffic jams and arrive faster at your destination."
        }
      }
    ]
  };

  const comparison = [
    {
      feature: isFr ? "Prise en charge dans la rue" : "Street pickup",
      taxi: true,
      vtc: false
    },
    {
      feature: isFr ? "Réservation à l'avance" : "Advance booking",
      taxi: true,
      vtc: true
    },
    {
      feature: isFr ? "Tarif réglementé" : "Regulated rates",
      taxi: true,
      vtc: false
    },
    {
      feature: isFr ? "Pas de surge pricing" : "No surge pricing",
      taxi: true,
      vtc: false
    },
    {
      feature: isFr ? "Accès voies de bus" : "Bus lane access",
      taxi: true,
      vtc: false
    },
    {
      feature: isFr ? "Stations officielles" : "Official stands",
      taxi: true,
      vtc: false
    },
    {
      feature: isFr ? "Licence professionnelle" : "Professional license",
      taxi: true,
      vtc: true
    },
    {
      feature: isFr ? "Assurance transport" : "Transport insurance",
      taxi: true,
      vtc: true
    },
  ];

  const taxiAdvantages = [
    {
      icon: Scale,
      title: isFr ? "Tarifs réglementés" : "Regulated rates",
      description: isFr ? "Prix au compteur fixés par la préfecture, transparents et équitables" : "Meter prices set by prefecture, transparent and fair"
    },
    {
      icon: Clock,
      title: isFr ? "Disponibilité immédiate" : "Immediate availability",
      description: isFr ? "Prise en charge possible dans la rue ou aux stations, sans attente" : "Street or stand pickup possible, no waiting"
    },
    {
      icon: Car,
      title: isFr ? "Voies de bus autorisées" : "Bus lanes allowed",
      description: isFr ? "Moins de trafic, arrivée plus rapide à destination" : "Less traffic, faster arrival at destination"
    },
    {
      icon: Shield,
      title: isFr ? "Pas de majoration" : "No surcharge",
      description: isFr ? "Même tarif qu'il pleuve, aux heures de pointe ou lors d'événements" : "Same rate in rain, rush hours or during events"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? "VTC ou Taxi Lyon : Comparatif et Différences | Taxi Lyon Cab" : "VTC vs Taxi Lyon: Comparison and Differences | Taxi Lyon Cab"}</title>
        <meta name="description" content={isFr ? "VTC ou Taxi à Lyon ? Découvrez les différences, avantages et tarifs. Le taxi : tarif réglementé, pas de surge pricing, accès voies de bus. ☎ 04 87 38 20 65" : "VTC or Taxi in Lyon? Discover the differences, advantages and prices. Taxi: regulated rates, no surge pricing, bus lane access. ☎ +33 4 87 38 20 65"} />
        <meta name="keywords" content={isFr ? "vtc lyon, taxi vs vtc, différence taxi vtc, uber lyon, chauffeur privé lyon, taxi ou vtc lyon" : "vtc lyon, taxi vs vtc, taxi vtc difference, uber lyon, private driver lyon, taxi or vtc lyon"} />
        <link rel="canonical" href="https://taxilyon.cab/vtc-taxi-lyon" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Scale className="h-5 w-5" />
                  <span className="font-medium">{isFr ? "Comparatif" : "Comparison"}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {isFr ? "VTC ou Taxi à Lyon ?" : "VTC or Taxi in Lyon?"}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isFr 
                    ? "Découvrez les différences entre taxi et VTC à Lyon. Tarifs, avantages, réglementation : faites le bon choix pour vos déplacements."
                    : "Discover the differences between taxi and VTC in Lyon. Rates, advantages, regulations: make the right choice for your trips."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <a href="tel:+33487382065">
                      <Phone className="mr-2 h-5 w-5" />
                      04 87 38 20 65
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <Link to="/#reservation">
                      {isFr ? "Réserver un taxi" : "Book a taxi"}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Taxi vs VTC : Le comparatif" : "Taxi vs VTC: The comparison"}
              </h2>
              
              <div className="max-w-3xl mx-auto overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 text-left bg-muted/50">{isFr ? "Caractéristique" : "Feature"}</th>
                      <th className="p-4 text-center bg-primary text-primary-foreground">Taxi</th>
                      <th className="p-4 text-center bg-muted/50">VTC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4 font-medium">{item.feature}</td>
                        <td className="p-4 text-center">
                          {item.taxi ? (
                            <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {item.vtc ? (
                            <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Taxi Advantages */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">
                {isFr ? "Les avantages du taxi à Lyon" : "Taxi advantages in Lyon"}
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {isFr 
                  ? "Le taxi offre des avantages uniques que le VTC ne peut pas proposer."
                  : "Taxis offer unique advantages that VTCs cannot provide."}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {taxiAdvantages.map((advantage, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                        <advantage.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground text-sm">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Surge Pricing Explanation */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  {isFr ? "Le surge pricing : attention aux mauvaises surprises" : "Surge pricing: beware of bad surprises"}
                </h2>
                
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-lg mb-4 text-red-800 dark:text-red-200">
                    {isFr ? "Qu'est-ce que le surge pricing ?" : "What is surge pricing?"}
                  </h3>
                  <p className="text-red-700 dark:text-red-300 mb-4">
                    {isFr 
                      ? "Le surge pricing (ou tarification dynamique) est une pratique courante chez les VTC comme Uber ou Bolt. Lors des périodes de forte demande (heures de pointe, pluie, événements, Nouvel An...), les prix peuvent être multipliés par 2, 3 ou même plus !"
                      : "Surge pricing is a common practice among VTCs like Uber or Bolt. During high demand periods (rush hours, rain, events, New Year's Eve...), prices can be multiplied by 2, 3 or even more!"}
                  </p>
                  <p className="text-red-700 dark:text-red-300 font-medium">
                    {isFr 
                      ? "Avec le taxi : tarif identique 24h/24, 7j/7, qu'il pleuve ou qu'il vente !"
                      : "With taxi: same rate 24/7, rain or shine!"}
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4 text-green-800 dark:text-green-200 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    {isFr ? "Le taxi : tarif juste et stable" : "Taxi: fair and stable rates"}
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    {isFr 
                      ? "Les tarifs des taxis sont fixés par la préfecture et ne changent pas en fonction de la demande. Vous payez le même prix qu'il soit 8h du matin en pleine heure de pointe ou 3h du matin. La seule différence est le tarif de nuit (majoration préfectorale), clairement affiché."
                      : "Taxi rates are set by the prefecture and do not change based on demand. You pay the same price whether it's 8am during rush hour or 3am. The only difference is the night rate (prefectural surcharge), clearly displayed."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isFr ? "Questions fréquentes - Taxi vs VTC Lyon" : "FAQ - Taxi vs VTC Lyon"}
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
                {isFr ? "Choisissez le taxi pour vos déplacements à Lyon" : "Choose taxi for your Lyon trips"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {isFr 
                  ? "Tarif juste, pas de surprise, service professionnel 24h/24."
                  : "Fair price, no surprises, professional 24/7 service."}
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
                    {isFr ? "Réserver maintenant" : "Book now"}
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

export default VTCTaxiLyon;
