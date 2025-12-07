import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Clock, Shield, CreditCard, Users, Wifi, Baby, Check, Star, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const TaxiAeroport = () => {
  const { i18n, t } = useTranslation();
  const isFr = i18n.language === 'fr';

  const features = [
    {
      icon: Clock,
      title: isFr ? 'Suivi des vols en temps réel' : 'Real-time flight tracking',
      description: isFr 
        ? 'Nous surveillons votre vol et adaptons l\'heure de prise en charge en cas de retard' 
        : 'We monitor your flight and adjust pickup time for delays'
    },
    {
      icon: Shield,
      title: isFr ? 'Prix fixe garanti' : 'Fixed price guaranteed',
      description: isFr 
        ? 'Pas de surprise, le prix annoncé est le prix payé, embouteillages inclus' 
        : 'No surprises, the quoted price is what you pay, traffic included'
    },
    {
      icon: Users,
      title: isFr ? 'Accueil personnalisé' : 'Personalized welcome',
      description: isFr 
        ? 'Votre chauffeur vous attend avec une pancarte à votre nom' 
        : 'Your driver awaits with a sign bearing your name'
    },
    {
      icon: CreditCard,
      title: isFr ? 'Paiement flexible' : 'Flexible payment',
      description: isFr 
        ? 'Carte bancaire, espèces, Stripe - paiement en ligne sécurisé disponible' 
        : 'Credit card, cash, Stripe - secure online payment available'
    },
    {
      icon: Wifi,
      title: isFr ? 'WiFi à bord' : 'Onboard WiFi',
      description: isFr 
        ? 'Restez connecté pendant votre trajet' 
        : 'Stay connected during your journey'
    },
    {
      icon: Baby,
      title: isFr ? 'Sièges enfants disponibles' : 'Child seats available',
      description: isFr 
        ? 'Réhausseurs et sièges bébé sur demande, sans frais supplémentaires' 
        : 'Boosters and baby seats on request, no extra charge'
    },
  ];

  const prices = [
    { zone: 'Lyon 1er', day: '69€', night: '89€' },
    { zone: 'Lyon 2ème', day: '69€', night: '89€' },
    { zone: 'Lyon 3ème (Part-Dieu)', day: '59€', night: '79€' },
    { zone: 'Lyon 6ème', day: '64€', night: '84€' },
    { zone: 'Lyon 7ème', day: '59€', night: '79€' },
    { zone: 'Lyon 8ème', day: '54€', night: '74€' },
    { zone: 'Villeurbanne', day: '59€', night: '79€' },
    { zone: 'Vaulx-en-Velin', day: '49€', night: '69€' },
    { zone: 'Vénissieux', day: '54€', night: '74€' },
    { zone: 'Bron', day: '49€', night: '69€' },
  ];

  const testimonials = [
    {
      name: 'Sophie M.',
      text: isFr 
        ? 'Chauffeur ponctuel et très professionnel. Mon vol a eu 1h de retard et il m\'attendait sans problème. Je recommande !'
        : 'Punctual and very professional driver. My flight was 1h late and he waited without any issue. Highly recommend!',
      rating: 5
    },
    {
      name: 'James T.',
      text: isFr
        ? 'Excellent service pour mon transfert vers l\'aéroport. Véhicule propre, chauffeur anglophone, prix fixe respecté.'
        : 'Excellent service for my airport transfer. Clean vehicle, English-speaking driver, fixed price honored.',
      rating: 5
    },
    {
      name: 'Marie L.',
      text: isFr
        ? 'Réservation simple via WhatsApp, chauffeur m\'attendait avec une pancarte. Parfait pour voyager sereinement.'
        : 'Easy booking via WhatsApp, driver was waiting with a sign. Perfect for stress-free travel.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? 'Taxi Aéroport Lyon Saint-Exupéry | Transfert dès 49€ | Taxi Lyon Cab' : 'Lyon Airport Taxi Saint-Exupéry | Transfer from €49 | Taxi Lyon Cab'}</title>
        <meta name="description" content={isFr 
          ? 'Réservez votre taxi pour l\'aéroport Lyon Saint-Exupéry (LYS). Prix fixe dès 49€, suivi des vols, accueil personnalisé. Disponible 24h/24, 7j/7. Chauffeurs professionnels.'
          : 'Book your taxi to Lyon Saint-Exupéry Airport (LYS). Fixed price from €49, flight tracking, personalized welcome. Available 24/7. Professional drivers.'
        } />
        <meta name="keywords" content={isFr
          ? 'taxi aéroport Lyon, taxi Saint-Exupéry, transfert aéroport Lyon, navette aéroport Lyon, taxi LYS, prix taxi aéroport Lyon'
          : 'Lyon airport taxi, Saint-Exupéry taxi, Lyon airport transfer, Lyon airport shuttle, LYS taxi, Lyon airport taxi price'
        } />
        <link rel="canonical" href="https://taxilyon.cab/taxi-aeroport-lyon" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Plane className="w-5 h-5" />
                <span className="font-medium">{isFr ? 'Service Aéroport Premium' : 'Premium Airport Service'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {isFr ? (
                  <>Taxi Aéroport <span className="text-primary">Lyon Saint-Exupéry</span></>
                ) : (
                  <>Lyon <span className="text-primary">Saint-Exupéry</span> Airport Taxi</>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isFr 
                  ? 'Transferts professionnels depuis et vers l\'aéroport Lyon Saint-Exupéry. Prix fixe, suivi des vols en temps réel, chauffeurs expérimentés.'
                  : 'Professional transfers to and from Lyon Saint-Exupéry Airport. Fixed price, real-time flight tracking, experienced drivers.'
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  {isFr ? 'Réserver maintenant' : 'Book now'}
                </Button>
                <Button size="lg" variant="outline">
                  <a href="/#simulator">{isFr ? 'Calculer mon tarif' : 'Calculate my fare'}</a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Prix fixe dès 49€' : 'Fixed price from €49'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Disponible 24h/24' : 'Available 24/7'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Annulation gratuite' : 'Free cancellation'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {isFr ? 'Pourquoi choisir Taxi Lyon Cab pour l\'aéroport ?' : 'Why choose Taxi Lyon Cab for the airport?'}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              {isFr ? 'Tarifs Taxi Lyon - Aéroport Saint-Exupéry' : 'Lyon - Saint-Exupéry Airport Taxi Fares'}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {isFr 
                ? 'Prix fixes garantis, incluant 10 minutes d\'attente et les éventuels embouteillages'
                : 'Guaranteed fixed prices, including 10 minutes waiting time and traffic'
              }
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl overflow-hidden border border-border">
                <div className="grid grid-cols-3 bg-primary text-primary-foreground p-4 font-semibold">
                  <span>{isFr ? 'Zone de départ' : 'Departure zone'}</span>
                  <span className="text-center">{isFr ? 'Jour' : 'Day'} (7h-19h)</span>
                  <span className="text-center">{isFr ? 'Nuit' : 'Night'} (19h-7h)</span>
                </div>
                {prices.map((price, index) => (
                  <div 
                    key={index} 
                    className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}
                  >
                    <span className="text-foreground font-medium">{price.zone}</span>
                    <span className="text-center text-primary font-semibold">{price.day}</span>
                    <span className="text-center text-muted-foreground">{price.night}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                {isFr 
                  ? '* Tarifs pour berline standard. Van 7 places disponible avec supplément.'
                  : '* Prices for standard sedan. 7-seat van available with supplement.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {isFr ? 'Ce que disent nos clients' : 'What our customers say'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {isFr ? 'Comment réserver votre taxi aéroport ?' : 'How to book your airport taxi?'}
            </h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: isFr ? 'Réservez' : 'Book', desc: isFr ? 'En ligne, par téléphone ou WhatsApp' : 'Online, by phone or WhatsApp' },
                { step: '2', title: isFr ? 'Confirmez' : 'Confirm', desc: isFr ? 'Recevez votre confirmation immédiate' : 'Receive immediate confirmation' },
                { step: '3', title: isFr ? 'Voyagez' : 'Travel', desc: isFr ? 'Votre chauffeur vous attend' : 'Your driver awaits' },
                { step: '4', title: isFr ? 'Payez' : 'Pay', desc: isFr ? 'En ligne ou au chauffeur' : 'Online or to the driver' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isFr ? 'Prêt à réserver votre transfert aéroport ?' : 'Ready to book your airport transfer?'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {isFr 
                ? 'Réservez maintenant et voyagez l\'esprit tranquille. Annulation gratuite jusqu\'à 2h avant.'
                : 'Book now and travel with peace of mind. Free cancellation up to 2h before.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground">
                <a href="tel:+33472108686" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  04 72 10 86 86
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="/#booking">{isFr ? 'Réserver en ligne' : 'Book online'}</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default TaxiAeroport;
