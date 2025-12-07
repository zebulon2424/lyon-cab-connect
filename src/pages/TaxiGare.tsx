import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Train, Clock, Shield, MapPin, Users, Check, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TaxiGare = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const stations = [
    {
      name: 'Gare Part-Dieu',
      description: isFr 
        ? 'Principale gare TGV de Lyon, 2ème gare de France. Connexions nationales et internationales.'
        : 'Main Lyon TGV station, 2nd largest in France. National and international connections.',
      prices: [
        { zone: 'Lyon centre', price: '15-25€' },
        { zone: 'Aéroport', price: '59€' },
        { zone: 'Villeurbanne', price: '15-20€' },
      ]
    },
    {
      name: 'Gare Perrache',
      description: isFr 
        ? 'Gare historique de Lyon, au cœur de la Presqu\'île. TGV, TER et lignes régionales.'
        : 'Historic Lyon station, in the heart of Presqu\'île. TGV, TER and regional lines.',
      prices: [
        { zone: 'Lyon centre', price: '12-20€' },
        { zone: 'Aéroport', price: '69€' },
        { zone: 'Part-Dieu', price: '18-25€' },
      ]
    },
    {
      name: 'Gare Saint-Exupéry TGV',
      description: isFr 
        ? 'Gare TGV de l\'aéroport Lyon Saint-Exupéry. Connexion directe Paris-Lyon.'
        : 'TGV station at Lyon Saint-Exupéry Airport. Direct Paris-Lyon connection.',
      prices: [
        { zone: 'Lyon centre', price: '59-69€' },
        { zone: 'Part-Dieu', price: '54€' },
        { zone: 'Villeurbanne', price: '49€' },
      ]
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: isFr ? 'Ponctualité garantie' : 'Guaranteed punctuality',
      description: isFr 
        ? 'Votre chauffeur vous attend dès votre arrivée, même en cas de retard du train'
        : 'Your driver awaits upon arrival, even if your train is delayed'
    },
    {
      icon: MapPin,
      title: isFr ? 'Prise en charge directe' : 'Direct pickup',
      description: isFr 
        ? 'Retrouvez votre chauffeur facilement au point de rendez-vous convenu'
        : 'Easily meet your driver at the agreed meeting point'
    },
    {
      icon: Shield,
      title: isFr ? 'Prix fixe' : 'Fixed price',
      description: isFr 
        ? 'Tarif connu à l\'avance, pas de surprise à l\'arrivée'
        : 'Price known in advance, no surprises upon arrival'
    },
    {
      icon: Users,
      title: isFr ? 'Tous types de véhicules' : 'All vehicle types',
      description: isFr 
        ? 'Berline, Van 7 places, véhicule adapté PMR selon vos besoins'
        : 'Sedan, 7-seat Van, wheelchair-accessible vehicle as needed'
    },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? 'Taxi Gare Part-Dieu & Perrache Lyon | Transfert Gare | Taxi Lyon Cab' : 'Lyon Part-Dieu & Perrache Station Taxi | Station Transfer | Taxi Lyon Cab'}</title>
        <meta name="description" content={isFr 
          ? 'Taxi gare Lyon Part-Dieu et Perrache. Transfert professionnel depuis les gares de Lyon. Prix fixe dès 12€, disponible 24h/24. Réservation facile.'
          : 'Lyon Part-Dieu and Perrache station taxi. Professional transfer from Lyon stations. Fixed price from €12, available 24/7. Easy booking.'
        } />
        <meta name="keywords" content={isFr
          ? 'taxi gare Part-Dieu, taxi gare Perrache, taxi gare Lyon, transfert gare Lyon, taxi Part-Dieu, navette gare Lyon'
          : 'Part-Dieu station taxi, Perrache station taxi, Lyon station taxi, Lyon station transfer, Part-Dieu taxi, Lyon station shuttle'
        } />
        <link rel="canonical" href="https://taxilyon.cab/taxi-gare-lyon" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Train className="w-5 h-5" />
                <span className="font-medium">{isFr ? 'Transferts Gares' : 'Station Transfers'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {isFr ? (
                  <>Taxi Gare <span className="text-primary">Part-Dieu & Perrache</span></>
                ) : (
                  <>Taxi <span className="text-primary">Part-Dieu & Perrache</span> Station</>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isFr 
                  ? 'Service de taxi professionnel depuis et vers les gares de Lyon. Chauffeurs expérimentés, véhicules confortables, prix transparents.'
                  : 'Professional taxi service to and from Lyon train stations. Experienced drivers, comfortable vehicles, transparent pricing.'
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  {isFr ? 'Réserver : 04 72 10 86 86' : 'Book: 04 72 10 86 86'}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <adv.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{adv.title}</h3>
                      <p className="text-sm text-muted-foreground">{adv.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              {isFr ? 'Nos services pour chaque gare' : 'Our services for each station'}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {isFr 
                ? 'Tarifs indicatifs pour une berline standard. Van et véhicules PMR disponibles.'
                : 'Indicative prices for a standard sedan. Van and wheelchair-accessible vehicles available.'
              }
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {stations.map((station, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                          <Train className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{station.name}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{station.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                          {isFr ? 'Tarifs depuis cette gare' : 'Fares from this station'}
                        </h4>
                        {station.prices.map((price, i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                            <span className="text-muted-foreground">{price.zone}</span>
                            <span className="font-semibold text-primary">{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {isFr ? 'Questions fréquentes' : 'Frequently asked questions'}
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: isFr ? 'Où retrouver mon chauffeur à la gare Part-Dieu ?' : 'Where to meet my driver at Part-Dieu station?',
                  a: isFr 
                    ? 'Votre chauffeur vous attend à la sortie principale côté Villette. Il peut également venir vous chercher sur le parvis selon vos indications.'
                    : 'Your driver waits at the main exit on the Villette side. They can also pick you up at the forecourt based on your directions.'
                },
                {
                  q: isFr ? 'Mon train a du retard, que faire ?' : 'My train is delayed, what should I do?',
                  a: isFr 
                    ? 'Pas de panique ! Prévenez-nous simplement et votre chauffeur adaptera son heure d\'arrivée. Aucun frais supplémentaire ne vous sera facturé.'
                    : 'Don\'t worry! Simply let us know and your driver will adjust their arrival time. No additional charges will apply.'
                },
                {
                  q: isFr ? 'Puis-je réserver pour un groupe ?' : 'Can I book for a group?',
                  a: isFr 
                    ? 'Oui, nous proposons des vans 7 places et pouvons coordonner plusieurs véhicules pour les groupes plus importants.'
                    : 'Yes, we offer 7-seat vans and can coordinate multiple vehicles for larger groups.'
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground pl-6">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isFr ? 'Réservez votre taxi gare dès maintenant' : 'Book your station taxi now'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isFr ? 'Disponible 24h/24, 7j/7' : 'Available 24/7'}
            </p>
            <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground">
              <a href="tel:+33472108686" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                04 72 10 86 86
              </a>
            </Button>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default TaxiGare;
