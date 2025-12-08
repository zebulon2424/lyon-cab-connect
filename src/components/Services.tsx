import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plane, Briefcase, Train, PartyPopper, Clock, Heart } from 'lucide-react';
import serviceAirport from '@/assets/service-airport.jpg';
import serviceGare from '@/assets/service-gare.jpg';
import serviceBusiness from '@/assets/service-business.jpg';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Plane,
      title: t('services.airport.title'),
      description: t('services.airport.description'),
      image: serviceAirport,
    },
    {
      icon: Briefcase,
      title: t('services.business.title'),
      description: t('services.business.description'),
      image: serviceBusiness,
    },
    {
      icon: Train,
      title: t('services.station.title'),
      description: t('services.station.description'),
      image: serviceGare,
    },
    {
      icon: PartyPopper,
      title: t('services.events.title'),
      description: t('services.events.description'),
    },
    {
      icon: Clock,
      title: t('services.hourly.title'),
      description: t('services.hourly.description'),
    },
    {
      icon: Heart,
      title: t('services.medical.title'),
      description: t('services.medical.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {service.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
