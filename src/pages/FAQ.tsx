import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const faqCategories = [
    {
      title: isFr ? '📅 Réservation' : '📅 Booking',
      questions: [
        {
          q: isFr ? 'Comment réserver un taxi à Lyon ?' : 'How do I book a taxi in Lyon?',
          a: isFr 
            ? 'Vous pouvez réserver via notre site web, par téléphone au 04 72 10 86 86, par WhatsApp, ou en utilisant notre simulateur de tarif. La réservation est confirmée instantanément.'
            : 'You can book via our website, by phone at 04 72 10 86 86, via WhatsApp, or using our fare simulator. Booking is confirmed instantly.'
        },
        {
          q: isFr ? 'Puis-je réserver à l\'avance ?' : 'Can I book in advance?',
          a: isFr 
            ? 'Oui, nous recommandons de réserver la veille pour les trajets matinaux ou les transferts aéroport/gare. Vous pouvez réserver jusqu\'à 30 jours à l\'avance.'
            : 'Yes, we recommend booking the day before for early morning trips or airport/station transfers. You can book up to 30 days in advance.'
        },
        {
          q: isFr ? 'Peut-on réserver pour quelqu\'un d\'autre ?' : 'Can I book for someone else?',
          a: isFr 
            ? 'Absolument ! Indiquez simplement le nom et le numéro de téléphone du passager lors de la réservation. Le chauffeur l\'attendra avec une pancarte.'
            : 'Absolutely! Just provide the passenger\'s name and phone number when booking. The driver will wait with a sign.'
        },
      ]
    },
    {
      title: isFr ? '💰 Tarifs et paiement' : '💰 Pricing and payment',
      questions: [
        {
          q: isFr ? 'Quels sont vos tarifs ?' : 'What are your rates?',
          a: isFr 
            ? 'Nos tarifs dépendent de la distance et de l\'heure. Comptez environ 15€ pour une course moyenne à Lyon. Les transferts aéroport débutent à 49€. Utilisez notre simulateur pour un tarif précis.'
            : 'Our rates depend on distance and time. Count approximately €15 for an average ride in Lyon. Airport transfers start at €49. Use our simulator for an exact fare.'
        },
        {
          q: isFr ? 'Le tarif est-il fixe ou au compteur ?' : 'Is the fare fixed or metered?',
          a: isFr 
            ? 'Pour les transferts aéroport et gare, nous proposons des forfaits fixes. Pour les courses en ville, le tarif est au compteur selon la réglementation.'
            : 'For airport and station transfers, we offer fixed fares. For city rides, the fare is metered according to regulations.'
        },
        {
          q: isFr ? 'Quels moyens de paiement acceptez-vous ?' : 'What payment methods do you accept?',
          a: isFr 
            ? 'Nous acceptons les cartes bancaires (Visa, Mastercard), les espèces, et le paiement en ligne sécurisé via Stripe. Paiement possible à l\'avance ou au chauffeur.'
            : 'We accept credit cards (Visa, Mastercard), cash, and secure online payment via Stripe. Payment possible in advance or to the driver.'
        },
        {
          q: isFr ? 'Y a-t-il des frais supplémentaires ?' : 'Are there additional fees?',
          a: isFr 
            ? 'Le tarif de nuit s\'applique de 19h à 7h (+20%). Les dimanches et jours fériés sont également majorés. Aucun frais caché, tout est inclus dans le tarif annoncé.'
            : 'Night rate applies from 7pm to 7am (+20%). Sundays and holidays are also surcharged. No hidden fees, everything is included in the quoted price.'
        },
      ]
    },
    {
      title: isFr ? '🚕 Services et véhicules' : '🚕 Services and vehicles',
      questions: [
        {
          q: isFr ? 'Proposez-vous des sièges enfants ?' : 'Do you offer child seats?',
          a: isFr 
            ? 'Oui, nous proposons gratuitement des réhausseurs et sièges bébé. Précisez-le lors de la réservation pour que le chauffeur prépare l\'équipement adapté.'
            : 'Yes, we offer boosters and baby seats free of charge. Specify this when booking so the driver can prepare the appropriate equipment.'
        },
        {
          q: isFr ? 'Les animaux sont-ils acceptés ?' : 'Are pets allowed?',
          a: isFr 
            ? 'Les animaux de compagnie sont généralement acceptés, surtout s\'ils sont dans une cage ou un sac de transport. Prévenez-nous lors de la réservation.'
            : 'Pets are generally accepted, especially if in a carrier or transport bag. Let us know when booking.'
        },
        {
          q: isFr ? 'Avez-vous des véhicules pour les groupes ?' : 'Do you have vehicles for groups?',
          a: isFr 
            ? 'Oui, nous disposons de vans 7 places pour les familles et petits groupes. Pour les groupes plus importants, nous pouvons coordonner plusieurs véhicules.'
            : 'Yes, we have 7-seat vans for families and small groups. For larger groups, we can coordinate multiple vehicles.'
        },
        {
          q: isFr ? 'Proposez-vous un service PMR ?' : 'Do you offer wheelchair service?',
          a: isFr 
            ? 'Oui, nous avons des véhicules adaptés avec rampe d\'accès pour les personnes à mobilité réduite. Nos chauffeurs sont formés pour l\'aide au transfert.'
            : 'Yes, we have adapted vehicles with access ramps for people with reduced mobility. Our drivers are trained for transfer assistance.'
        },
      ]
    },
    {
      title: isFr ? '✈️ Transferts aéroport' : '✈️ Airport transfers',
      questions: [
        {
          q: isFr ? 'Combien coûte un taxi vers l\'aéroport Saint-Exupéry ?' : 'How much is a taxi to Saint-Exupéry Airport?',
          a: isFr 
            ? 'Les tarifs varient selon le point de départ : de 49€ (Vaulx-en-Velin, Bron) à 69€ (Lyon centre). Tarifs de nuit majorés de 20%.'
            : 'Fares vary by departure point: from €49 (Vaulx-en-Velin, Bron) to €69 (Lyon city center). Night rates increased by 20%.'
        },
        {
          q: isFr ? 'Que se passe-t-il si mon vol a du retard ?' : 'What happens if my flight is delayed?',
          a: isFr 
            ? 'Nous suivons votre vol en temps réel et adaptons l\'heure d\'arrivée du chauffeur. Aucun frais supplémentaire ne vous sera facturé en cas de retard de vol.'
            : 'We track your flight in real-time and adjust the driver\'s arrival time. No additional fees will be charged for flight delays.'
        },
        {
          q: isFr ? 'Où retrouver mon chauffeur à l\'aéroport ?' : 'Where to meet my driver at the airport?',
          a: isFr 
            ? 'Votre chauffeur vous attend en zone d\'arrivées avec une pancarte à votre nom. Les coordonnées du chauffeur vous sont envoyées par SMS avant votre arrivée.'
            : 'Your driver waits in the arrivals area with a sign bearing your name. Driver details are sent to you by SMS before your arrival.'
        },
      ]
    },
    {
      title: isFr ? '❌ Annulation et modification' : '❌ Cancellation and changes',
      questions: [
        {
          q: isFr ? 'Puis-je annuler ma réservation ?' : 'Can I cancel my booking?',
          a: isFr 
            ? 'Oui, l\'annulation est gratuite jusqu\'à 2 heures avant l\'heure de prise en charge. Passé ce délai, des frais de 15€ peuvent s\'appliquer.'
            : 'Yes, cancellation is free up to 2 hours before pickup time. After that, a €15 fee may apply.'
        },
        {
          q: isFr ? 'Comment modifier ma réservation ?' : 'How do I modify my booking?',
          a: isFr 
            ? 'Contactez-nous par téléphone ou WhatsApp pour toute modification. Les changements sont gratuits si effectués plus de 2h avant le départ.'
            : 'Contact us by phone or WhatsApp for any changes. Modifications are free if made more than 2h before departure.'
        },
      ]
    },
    {
      title: isFr ? '📦 Bagages et objets perdus' : '📦 Luggage and lost items',
      questions: [
        {
          q: isFr ? 'Combien de bagages puis-je emporter ?' : 'How much luggage can I bring?',
          a: isFr 
            ? 'Une berline standard accueille 3 grandes valises + bagages cabine. Pour plus de bagages, optez pour un van 7 places.'
            : 'A standard sedan accommodates 3 large suitcases + cabin bags. For more luggage, choose a 7-seat van.'
        },
        {
          q: isFr ? 'J\'ai oublié quelque chose dans le taxi, que faire ?' : 'I left something in the taxi, what should I do?',
          a: isFr 
            ? 'Contactez-nous immédiatement au 04 72 10 86 86 avec les détails de votre course. Les objets trouvés sont conservés 30 jours.'
            : 'Contact us immediately at 04 72 10 86 86 with your trip details. Found items are kept for 30 days.'
        },
      ]
    },
  ];

  return (
    <>
      <Helmet>
        <title>{isFr ? 'FAQ Taxi Lyon | Questions Fréquentes | Taxi Lyon Cab' : 'Lyon Taxi FAQ | Frequently Asked Questions | Taxi Lyon Cab'}</title>
        <meta name="description" content={isFr 
          ? 'Toutes les réponses à vos questions sur nos services de taxi à Lyon. Réservation, tarifs, paiement, transferts aéroport, bagages, annulation.'
          : 'All answers to your questions about our taxi services in Lyon. Booking, rates, payment, airport transfers, luggage, cancellation.'
        } />
        <meta name="keywords" content={isFr
          ? 'FAQ taxi Lyon, questions taxi, réservation taxi Lyon, tarif taxi Lyon, paiement taxi'
          : 'Lyon taxi FAQ, taxi questions, Lyon taxi booking, Lyon taxi rates, taxi payment'
        } />
        <link rel="canonical" href="https://taxilyon.cab/faq" />
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
                <HelpCircle className="w-5 h-5" />
                <span className="font-medium">FAQ</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {isFr ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {isFr 
                  ? 'Trouvez rapidement les réponses à toutes vos questions sur nos services de taxi à Lyon'
                  : 'Quickly find answers to all your questions about our taxi services in Lyon'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {faqCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-4">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, qIndex) => (
                      <AccordionItem 
                        key={qIndex} 
                        value={`${catIndex}-${qIndex}`}
                        className="bg-card border border-border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isFr ? 'Vous n\'avez pas trouvé votre réponse ?' : 'Didn\'t find your answer?'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isFr ? 'Notre équipe est disponible 24h/24 pour répondre à vos questions' : 'Our team is available 24/7 to answer your questions'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground">
                <a href="tel:+33472108686" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  04 72 10 86 86
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="https://wa.me/33472108686" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
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

export default FAQ;
