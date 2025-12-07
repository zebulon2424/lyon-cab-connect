import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '04 78 00 00 00',
      href: 'tel:+33478000000',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'contact@taxilyon.cab',
      href: 'mailto:contact@taxilyon.cab',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.addressValue'),
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: t('contact.hoursValue'),
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-gold flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
