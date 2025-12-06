import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, UserCheck, Tag, Wallet } from 'lucide-react';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Clock,
      title: t('why.available.title'),
      description: t('why.available.description'),
    },
    {
      icon: UserCheck,
      title: t('why.professional.title'),
      description: t('why.professional.description'),
    },
    {
      icon: Tag,
      title: t('why.fixed.title'),
      description: t('why.fixed.description'),
    },
    {
      icon: Wallet,
      title: t('why.payment.title'),
      description: t('why.payment.description'),
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('why.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
