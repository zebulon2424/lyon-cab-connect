import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const testimonials = [
    {
      name: 'Sophie Martin',
      role: isFr ? 'Voyageuse fréquente' : 'Frequent traveler',
      rating: 5,
      text: isFr 
        ? "Service impeccable ! Le chauffeur était ponctuel et très professionnel. Je recommande vivement pour les transferts aéroport."
        : "Impeccable service! The driver was punctual and very professional. Highly recommended for airport transfers.",
      avatar: 'SM',
    },
    {
      name: 'Pierre Dubois',
      role: isFr ? 'Homme d\'affaires' : 'Business executive',
      rating: 5,
      text: isFr 
        ? "Taxi Lyon Cab est mon choix pour tous mes déplacements professionnels. Véhicules propres, chauffeurs courtois et tarifs transparents."
        : "Taxi Lyon Cab is my choice for all business travel. Clean vehicles, courteous drivers and transparent pricing.",
      avatar: 'PD',
    },
    {
      name: 'Marie Leroy',
      role: isFr ? 'Touriste' : 'Tourist',
      rating: 5,
      text: isFr 
        ? "Excellent service depuis l'aéroport. Le chauffeur parlait anglais et nous a donné des conseils sur Lyon. Très apprécié !"
        : "Excellent service from the airport. The driver spoke English and gave us tips about Lyon. Much appreciated!",
      avatar: 'ML',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isFr ? 'Ce que disent nos clients' : 'What Our Clients Say'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isFr 
              ? 'Plus de 10 000 clients satisfaits nous font confiance' 
              : 'Over 10,000 satisfied customers trust us'}
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-border/50 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;