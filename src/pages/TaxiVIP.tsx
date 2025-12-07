import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Car, Briefcase, Wine, Star, Shield, Clock, Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const TaxiVIP = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const services = [
    {
      icon: Briefcase,
      title: isFr ? 'Voyages d\'affaires' : 'Business travel',
      description: isFr 
        ? 'Transferts professionnels pour vos rendez-vous clients, séminaires et conférences'
        : 'Professional transfers for client meetings, seminars and conferences'
    },
    {
      icon: Wine,
      title: isFr ? 'Événements VIP' : 'VIP Events',
      description: isFr 
        ? 'Mariages, galas, soirées privées avec un service discret et élégant'
        : 'Weddings, galas, private parties with discreet and elegant service'
    },
    {
      icon: Car,
      title: isFr ? 'Mise à disposition' : 'At your disposal',
      description: isFr 
        ? 'Chauffeur privé à la journée ou demi-journée pour vos déplacements'
        : 'Private driver for the day or half-day for your travels'
    },
    {
      icon: Crown,
      title: isFr ? 'Accueil VIP aéroport' : 'VIP Airport welcome',
      description: isFr 
        ? 'Accueil personnalisé avec pancarte, aide aux bagages, rafraîchissements'
        : 'Personalized welcome with sign, luggage assistance, refreshments'
    },
  ];

  const vehicles = [
    {
      name: 'Mercedes Classe E',
      features: isFr 
        ? ['4 passagers', 'Cuir premium', 'Climatisation bi-zone', 'WiFi haut débit']
        : ['4 passengers', 'Premium leather', 'Dual-zone AC', 'High-speed WiFi'],
      image: '🚗'
    },
    {
      name: 'BMW Série 7',
      features: isFr 
        ? ['4 passagers', 'Intérieur luxe', 'Sièges massants', 'Tablettes arrière']
        : ['4 passengers', 'Luxury interior', 'Massage seats', 'Rear tablets'],
      image: '🚘'
    },
    {
      name: 'Mercedes Classe V',
      features: isFr 
        ? ['7 passagers', 'Espace VIP', 'Configuration modulable', 'Ideal groupes']
        : ['7 passengers', 'VIP space', 'Modular configuration', 'Ideal for groups'],
      image: '🚐'
    },
  ];

  const testimonials = [
    {
      name: 'Pierre D., CEO',
      company: 'Tech Solutions Lyon',
      text: isFr 
        ? 'Service impeccable pour nos clients internationaux. Chauffeur professionnel, véhicule prestigieux, ponctualité parfaite.'
        : 'Impeccable service for our international clients. Professional driver, prestigious vehicle, perfect punctuality.',
      rating: 5
    },
    {
      name: 'Elisabeth M.',
      company: isFr ? 'Mariage Lyon' : 'Lyon Wedding',
      text: isFr 
        ? 'Le chauffeur a été extraordinaire pour notre mariage. Discret, élégant, attentionné. Un service 5 étoiles !'
        : 'The driver was extraordinary for our wedding. Discreet, elegant, attentive. A 5-star service!',
      rating: 5
    },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? 'Taxi VIP Lyon | Chauffeur Privé Haut de Gamme | Taxi Lyon Cab' : 'VIP Taxi Lyon | Premium Private Driver | Taxi Lyon Cab'}</title>
        <meta name="description" content={isFr 
          ? 'Service taxi VIP et chauffeur privé à Lyon. Berlines de luxe Mercedes, BMW. Voyages d\'affaires, mariages, événements. Service premium 24h/24.'
          : 'VIP taxi and private driver service in Lyon. Luxury Mercedes, BMW sedans. Business travel, weddings, events. Premium 24/7 service.'
        } />
        <meta name="keywords" content={isFr
          ? 'taxi VIP Lyon, chauffeur privé Lyon, berline luxe Lyon, taxi haut de gamme, chauffeur affaires Lyon, Mercedes Lyon'
          : 'VIP taxi Lyon, private driver Lyon, luxury sedan Lyon, premium taxi, business driver Lyon, Mercedes Lyon'
        } />
        <link rel="canonical" href="https://taxilyon.cab/taxi-vip-lyon" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-gradient-to-b from-amber-900/20 to-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-4 py-2 rounded-full mb-6">
                <Crown className="w-5 h-5" />
                <span className="font-medium">{isFr ? 'Service VIP Premium' : 'Premium VIP Service'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {isFr ? (
                  <>Taxi VIP & <span className="text-primary">Chauffeur Privé</span> Lyon</>
                ) : (
                  <>VIP Taxi & <span className="text-primary">Private Driver</span> Lyon</>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isFr 
                  ? 'Excellence, discrétion et confort absolu. Nos chauffeurs d\'élite et véhicules haut de gamme pour vos déplacements les plus exigeants.'
                  : 'Excellence, discretion and absolute comfort. Our elite drivers and premium vehicles for your most demanding trips.'
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  {isFr ? 'Réserver un VIP' : 'Book VIP'}
                </Button>
                <Button size="lg" variant="outline">
                  {isFr ? 'Demander un devis' : 'Request a quote'}
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Berlines de prestige' : 'Prestigious sedans'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Chauffeurs triés sur le volet' : 'Hand-picked drivers'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Confidentialité totale' : 'Total confidentiality'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {isFr ? 'Nos prestations VIP' : 'Our VIP services'}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:border-primary/50 transition-colors text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              {isFr ? 'Notre flotte VIP' : 'Our VIP fleet'}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {isFr 
                ? 'Des véhicules d\'exception pour des moments d\'exception'
                : 'Exceptional vehicles for exceptional moments'
              }
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {vehicles.map((vehicle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden hover:border-primary/50 transition-all">
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-7xl">{vehicle.image}</span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">{vehicle.name}</h3>
                      <ul className="space-y-2">
                        {vehicle.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {isFr ? 'Ils nous font confiance' : 'They trust us'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-primary/10 to-transparent">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 italic text-lg">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-900/20 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isFr ? 'Vivez l\'expérience VIP' : 'Experience VIP service'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {isFr 
                ? 'Contactez-nous pour un service sur mesure adapté à vos exigences'
                : 'Contact us for a tailored service adapted to your requirements'
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
                <a href="mailto:contact@taxilyon.cab">{isFr ? 'Demander un devis' : 'Request a quote'}</a>
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

export default TaxiVIP;
