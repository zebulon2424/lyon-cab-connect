import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqs = [
    {
      question: isFr 
        ? 'Comment réserver un taxi pour l\'aéroport Lyon Saint-Exupéry ?' 
        : 'How do I book a taxi to Lyon Saint-Exupéry Airport?',
      answer: isFr 
        ? 'Vous pouvez réserver en ligne via notre formulaire, par téléphone au 04 87 38 20 65, ou par WhatsApp. Nous vous confirmons votre réservation par SMS avec les détails du chauffeur.'
        : 'You can book online via our form, by phone at +33 4 87 38 20 65, or via WhatsApp. We confirm your booking by SMS with driver details.',
    },
    {
      question: isFr 
        ? 'Quels sont vos tarifs pour l\'aéroport ?' 
        : 'What are your rates to/from the airport?',
      answer: isFr 
        ? 'Nos tarifs sont fixes et communiqués à l\'avance. Le transfert aéroport Lyon Saint-Exupéry ↔ Centre-ville est à partir de 60€. Utilisez notre simulateur de prix pour un devis précis.'
        : 'Our rates are fixed and communicated upfront. Airport transfer Lyon Saint-Exupéry ↔ City center starts from €60. Use our fare simulator for an accurate quote.',
    },
    {
      question: isFr 
        ? 'Acceptez-vous les paiements par carte bancaire ?' 
        : 'Do you accept credit card payments?',
      answer: isFr 
        ? 'Oui, nous acceptons les paiements en ligne (Visa, Mastercard), les espèces et les cartes bancaires directement au chauffeur.'
        : 'Yes, we accept online payments (Visa, Mastercard), cash, and card payments directly to the driver.',
    },
    {
      question: isFr 
        ? 'Que se passe-t-il si mon vol est en retard ?' 
        : 'What happens if my flight is delayed?',
      answer: isFr 
        ? 'Nous suivons votre vol en temps réel. En cas de retard, votre chauffeur ajuste automatiquement son heure d\'arrivée sans frais supplémentaires.'
        : 'We track your flight in real-time. In case of delay, your driver automatically adjusts their arrival time at no extra cost.',
    },
    {
      question: isFr 
        ? 'Proposez-vous des sièges enfants ?' 
        : 'Do you provide child seats?',
      answer: isFr 
        ? 'Oui, nous proposons des sièges bébé, sièges enfant et réhausseurs gratuitement sur demande lors de la réservation.'
        : 'Yes, we provide baby seats, child seats and booster seats free of charge upon request when booking.',
    },
    {
      question: isFr 
        ? 'Êtes-vous disponibles 24h/24 ?' 
        : 'Are you available 24/7?',
      answer: isFr 
        ? 'Oui, notre service est disponible 24 heures sur 24, 7 jours sur 7, y compris les jours fériés. Un supplément de nuit (+20%) s\'applique entre 20h et 7h.'
        : 'Yes, our service is available 24 hours a day, 7 days a week, including holidays. A night surcharge (+20%) applies between 8pm and 7am.',
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isFr ? 'Questions fréquentes' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isFr 
              ? 'Trouvez rapidement les réponses à vos questions' 
              : 'Find quick answers to your questions'}
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-xl border border-border/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;