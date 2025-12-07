import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accessibility, Heart, Shield, Clock, Phone, Check, Users, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const TaxiPMR = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const features = [
    {
      icon: Accessibility,
      title: isFr ? 'Véhicules adaptés' : 'Adapted vehicles',
      description: isFr 
        ? 'Rampe d\'accès, espace pour fauteuil roulant, sangles de sécurité homologuées'
        : 'Access ramp, wheelchair space, approved safety straps'
    },
    {
      icon: Heart,
      title: isFr ? 'Chauffeurs formés' : 'Trained drivers',
      description: isFr 
        ? 'Personnel sensibilisé au handicap, aide au transfert, patience et bienveillance'
        : 'Disability-aware staff, transfer assistance, patience and care'
    },
    {
      icon: Shield,
      title: isFr ? 'Conventionné CPAM' : 'CPAM approved',
      description: isFr 
        ? 'Transport sanitaire pris en charge sur prescription médicale (VSL agréé)'
        : 'Medical transport covered on prescription (approved VSL)'
    },
    {
      icon: Clock,
      title: isFr ? 'Disponible 24h/24' : 'Available 24/7',
      description: isFr 
        ? 'Urgences médicales, rendez-vous hospitaliers, sorties en toute liberté'
        : 'Medical emergencies, hospital appointments, outings with freedom'
    },
  ];

  const services = [
    {
      title: isFr ? 'Transport médical' : 'Medical transport',
      items: isFr 
        ? ['Rendez-vous médicaux', 'Hospitalisations', 'Dialyse et chimiothérapie', 'Rééducation']
        : ['Medical appointments', 'Hospitalizations', 'Dialysis and chemotherapy', 'Rehabilitation']
    },
    {
      title: isFr ? 'Vie quotidienne' : 'Daily life',
      items: isFr 
        ? ['Courses et commerces', 'Visites familiales', 'Loisirs et sorties', 'Cérémonies']
        : ['Shopping', 'Family visits', 'Leisure and outings', 'Ceremonies']
    },
    {
      title: isFr ? 'Transferts' : 'Transfers',
      items: isFr 
        ? ['Aéroport Saint-Exupéry', 'Gares Part-Dieu et Perrache', 'Cliniques et hôpitaux', 'EHPAD et maisons de retraite']
        : ['Saint-Exupéry Airport', 'Part-Dieu and Perrache stations', 'Clinics and hospitals', 'Nursing homes']
    },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? 'Taxi PMR Lyon | Transport Personnes Handicapées | Taxi Lyon Cab' : 'Lyon Wheelchair Taxi | Disabled Transport | Taxi Lyon Cab'}</title>
        <meta name="description" content={isFr 
          ? 'Taxi PMR et transport adapté à Lyon pour personnes à mobilité réduite. Véhicules avec rampe d\'accès, conventionné CPAM, chauffeurs formés. 24h/24.'
          : 'Wheelchair taxi and adapted transport in Lyon for people with reduced mobility. Vehicles with access ramp, CPAM approved, trained drivers. 24/7.'
        } />
        <meta name="keywords" content={isFr
          ? 'taxi PMR Lyon, taxi handicapé Lyon, transport adapté Lyon, taxi fauteuil roulant, VSL Lyon, taxi CPAM Lyon'
          : 'wheelchair taxi Lyon, disabled taxi Lyon, adapted transport Lyon, wheelchair accessible taxi, VSL Lyon, medical taxi Lyon'
        } />
        <link rel="canonical" href="https://taxilyon.cab/taxi-pmr-lyon" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-gradient-to-b from-blue-900/20 to-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-6">
                <Accessibility className="w-5 h-5" />
                <span className="font-medium">{isFr ? 'Transport Adapté' : 'Adapted Transport'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {isFr ? (
                  <>Taxi <span className="text-primary">PMR</span> à Lyon</>
                ) : (
                  <><span className="text-primary">Wheelchair</span> Taxi in Lyon</>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isFr 
                  ? 'Transport adapté et bienveillant pour les personnes à mobilité réduite. Véhicules équipés, chauffeurs formés, dignité et confort garantis.'
                  : 'Adapted and caring transport for people with reduced mobility. Equipped vehicles, trained drivers, dignity and comfort guaranteed.'
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  04 72 10 86 86
                </Button>
                <Button size="lg" variant="outline">
                  <FileText className="w-5 h-5 mr-2" />
                  {isFr ? 'Devis transport médical' : 'Medical transport quote'}
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Conventionné CPAM' : 'CPAM approved'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Rampe d\'accès' : 'Access ramp'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{isFr ? 'Aide au transfert' : 'Transfer assistance'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              {isFr ? 'Nos services PMR' : 'Our wheelchair services'}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {isFr 
                ? 'Un accompagnement complet pour tous vos besoins de déplacement'
                : 'Complete support for all your travel needs'
              }
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        {service.title}
                      </h3>
                      <ul className="space-y-3">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{item}</span>
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

        {/* CPAM Info */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-12 h-12 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {isFr ? 'Transport conventionné CPAM' : 'CPAM approved transport'}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {isFr 
                          ? 'Taxi Lyon Cab est conventionné par la Caisse Primaire d\'Assurance Maladie (CPAM) pour le transport sanitaire des patients. Sur prescription médicale, votre transport peut être pris en charge totalement ou partiellement selon votre situation.'
                          : 'Taxi Lyon Cab is approved by the French Health Insurance (CPAM) for patient medical transport. With a medical prescription, your transport may be fully or partially covered depending on your situation.'
                        }
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 text-sm">
                        {(isFr 
                          ? ['Prescription médicale requise', 'Prise en charge directe', 'Aucune avance de frais', 'Facturation à la CPAM']
                          : ['Medical prescription required', 'Direct coverage', 'No upfront payment', 'Billed to CPAM']
                        ).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <Check className="w-4 h-4 text-blue-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900/20 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isFr ? 'Réservez votre transport PMR' : 'Book your wheelchair transport'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {isFr 
                ? 'Notre équipe est à votre écoute pour organiser vos déplacements dans les meilleures conditions'
                : 'Our team is here to help organize your trips in the best conditions'
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

export default TaxiPMR;
