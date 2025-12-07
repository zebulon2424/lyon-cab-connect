import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Euro, Plane, Train, Clock, Sun, Moon, Phone, Calculator, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Tarifs = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const airportPrices = [
    { zone: 'Lyon 1er', day: '69€', night: '89€' },
    { zone: 'Lyon 2ème', day: '69€', night: '89€' },
    { zone: 'Lyon 3ème (Part-Dieu)', day: '59€', night: '79€' },
    { zone: 'Lyon 4ème', day: '69€', night: '89€' },
    { zone: 'Lyon 5ème', day: '69€', night: '89€' },
    { zone: 'Lyon 6ème', day: '64€', night: '84€' },
    { zone: 'Lyon 7ème', day: '59€', night: '79€' },
    { zone: 'Lyon 8ème', day: '54€', night: '74€' },
    { zone: 'Lyon 9ème', day: '69€', night: '89€' },
    { zone: 'Villeurbanne', day: '59€', night: '79€' },
    { zone: 'Vaulx-en-Velin', day: '49€', night: '69€' },
    { zone: 'Vénissieux', day: '54€', night: '74€' },
    { zone: 'Bron', day: '49€', night: '69€' },
    { zone: 'Saint-Priest', day: '45€', night: '65€' },
    { zone: 'Caluire', day: '59€', night: '79€' },
    { zone: 'Écully', day: '64€', night: '84€' },
  ];

  const stationPrices = [
    { from: 'Part-Dieu', to: 'Lyon 1-2', price: '18-25€' },
    { from: 'Part-Dieu', to: 'Lyon 3', price: '12-18€' },
    { from: 'Part-Dieu', to: 'Lyon 6-7-8', price: '15-22€' },
    { from: 'Part-Dieu', to: 'Aéroport', price: '59€' },
    { from: 'Perrache', to: 'Lyon 1-2', price: '12-18€' },
    { from: 'Perrache', to: 'Part-Dieu', price: '18-25€' },
    { from: 'Perrache', to: 'Aéroport', price: '69€' },
  ];

  const meterRates = [
    { label: isFr ? 'Prise en charge' : 'Pickup fee', value: '2,60€' },
    { label: isFr ? 'Prix au km (jour)' : 'Price per km (day)', value: '1,14€' },
    { label: isFr ? 'Prix au km (nuit)' : 'Price per km (night)', value: '1,37€' },
    { label: isFr ? 'Attente par heure' : 'Waiting per hour', value: '38,00€' },
    { label: isFr ? 'Supplément 4e passager' : '4th passenger supplement', value: '3,00€' },
    { label: isFr ? 'Supplément bagage volumineux' : 'Large luggage supplement', value: '2,00€' },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? 'Tarifs Taxi Lyon 2025 | Prix Aéroport, Gare, Course | Taxi Lyon Cab' : 'Lyon Taxi Fares 2025 | Airport, Station, Ride Prices | Taxi Lyon Cab'}</title>
        <meta name="description" content={isFr 
          ? 'Tous les tarifs taxi à Lyon : prix aéroport Saint-Exupéry dès 45€, gare Part-Dieu dès 12€. Tarifs au compteur, forfaits fixes. Grille tarifaire complète 2025.'
          : 'All Lyon taxi fares: Saint-Exupéry airport from €45, Part-Dieu station from €12. Meter rates, fixed fares. Complete 2025 price list.'
        } />
        <meta name="keywords" content={isFr
          ? 'tarif taxi Lyon, prix taxi Lyon, tarif taxi aéroport Lyon, prix taxi Part-Dieu, coût taxi Lyon, grille tarifaire taxi'
          : 'Lyon taxi fare, Lyon taxi price, Lyon airport taxi rate, Part-Dieu taxi price, Lyon taxi cost, taxi price list'
        } />
        <link rel="canonical" href="https://taxilyon.cab/tarifs" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="relative pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Euro className="w-5 h-5" />
                <span className="font-medium">{isFr ? 'Tarifs 2025' : '2025 Fares'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {isFr ? 'Tarifs Taxi Lyon' : 'Lyon Taxi Fares'}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                {isFr 
                  ? 'Des prix transparents et compétitifs. Forfaits fixes pour les transferts, tarifs au compteur pour les courses en ville.'
                  : 'Transparent and competitive prices. Fixed fares for transfers, metered rates for city rides.'
                }
              </p>

              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground" asChild>
                <Link to="/#simulator">
                  <Calculator className="w-5 h-5 mr-2" />
                  {isFr ? 'Calculer mon tarif' : 'Calculate my fare'}
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Airport Fares */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {isFr ? 'Tarifs Aéroport Lyon Saint-Exupéry' : 'Lyon Saint-Exupéry Airport Fares'}
                </h2>
                <p className="text-muted-foreground">
                  {isFr ? 'Forfaits fixes, tout compris' : 'Fixed fares, all inclusive'}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="w-5 h-5 text-amber-500" />
                      {isFr ? 'Tarif Jour' : 'Day Rate'}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">7h - 19h</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {airportPrices.slice(0, 8).map((price, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{price.zone}</span>
                        <span className="font-semibold text-primary">{price.day}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Moon className="w-5 h-5 text-blue-400" />
                      {isFr ? 'Tarif Nuit' : 'Night Rate'}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">19h - 7h</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {airportPrices.slice(0, 8).map((price, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{price.zone}</span>
                        <span className="font-semibold text-muted-foreground">{price.night}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                {isFr 
                  ? '* Tarifs pour berline standard (4 passagers). Van 7 places : +20€. Prix incluant 10 min d\'attente à l\'aéroport.'
                  : '* Prices for standard sedan (4 passengers). 7-seat van: +€20. Price includes 10 min waiting at airport.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Station Fares */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Train className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {isFr ? 'Tarifs Gares' : 'Station Fares'}
                </h2>
                <p className="text-muted-foreground">
                  {isFr ? 'Part-Dieu, Perrache, Saint-Exupéry TGV' : 'Part-Dieu, Perrache, Saint-Exupéry TGV'}
                </p>
              </div>
            </div>

            <div className="max-w-2xl">
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 bg-primary text-primary-foreground p-4 font-semibold rounded-t-lg">
                    <span>{isFr ? 'Départ' : 'From'}</span>
                    <span>{isFr ? 'Destination' : 'To'}</span>
                    <span className="text-right">{isFr ? 'Tarif' : 'Fare'}</span>
                  </div>
                  {stationPrices.map((route, i) => (
                    <div key={i} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? 'bg-background' : 'bg-card'}`}>
                      <span className="text-foreground">{route.from}</span>
                      <span className="text-muted-foreground">{route.to}</span>
                      <span className="text-right font-semibold text-primary">{route.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Meter Rates */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {isFr ? 'Tarifs au compteur' : 'Meter Rates'}
                </h2>
                <p className="text-muted-foreground">
                  {isFr ? 'Courses en ville selon la réglementation' : 'City rides according to regulations'}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {meterRates.map((rate, i) => (
                <Card key={i}>
                  <CardContent className="p-4 flex justify-between items-center">
                    <span className="text-muted-foreground">{rate.label}</span>
                    <span className="font-bold text-primary text-lg">{rate.value}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 max-w-4xl">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    {isFr ? 'Bon à savoir' : 'Good to know'}
                  </h3>
                  <ul className="space-y-2">
                    {(isFr 
                      ? [
                        'Tarif de nuit : +20% (19h-7h, dimanches et jours fériés)',
                        'Course minimum : 7,40€',
                        'Paiement par carte bancaire accepté sans minimum',
                        'Animaux acceptés (sur demande)',
                        'Siège enfant gratuit sur demande',
                      ]
                      : [
                        'Night rate: +20% (7pm-7am, Sundays and holidays)',
                        'Minimum fare: €7.40',
                        'Card payment accepted with no minimum',
                        'Pets accepted (on request)',
                        'Free child seat on request',
                      ]
                    ).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isFr ? 'Besoin d\'un tarif précis ?' : 'Need an exact fare?'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isFr ? 'Utilisez notre simulateur ou contactez-nous directement' : 'Use our simulator or contact us directly'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground" asChild>
                <Link to="/#simulator">
                  <Calculator className="w-5 h-5 mr-2" />
                  {isFr ? 'Simulateur de tarif' : 'Fare simulator'}
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <a href="tel:+33472108686" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  04 72 10 86 86
                </a>
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

export default Tarifs;
