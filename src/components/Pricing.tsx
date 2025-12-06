import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plane, Train, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const { t } = useTranslation();

  const prices = [
    {
      icon: Plane,
      title: t('pricing.airport'),
      description: t('pricing.airportDesc'),
      price: '55€',
      popular: true,
    },
    {
      icon: Train,
      title: t('pricing.station'),
      description: t('pricing.stationDesc'),
      price: '15€',
      popular: false,
    },
    {
      icon: Clock,
      title: t('pricing.hourly'),
      description: t('pricing.hourlyDesc'),
      price: '45€',
      suffix: t('pricing.perHour'),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {prices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                item.popular
                  ? 'glass-gold border-primary'
                  : 'glass border-border/50 hover:border-primary/50'
              }`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold rounded-full text-xs font-semibold text-primary-foreground">
                  Populaire
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.popular ? 'bg-primary/20' : 'bg-secondary'
                }`}>
                  <item.icon className={`w-6 h-6 ${item.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">{t('pricing.from')}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gradient">{item.price}</span>
                  {item.suffix && <span className="text-muted-foreground">{item.suffix}</span>}
                </div>
              </div>
              
              <Button
                variant={item.popular ? 'hero' : 'heroOutline'}
                className="w-full"
                asChild
              >
                <a href="#booking">{t('nav.book')}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-primary" />
            <span>{t('pricing.nightRate')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-primary" />
            <span>{t('pricing.weekendRate')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
