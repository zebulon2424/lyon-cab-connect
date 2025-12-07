import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CGV = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isFr ? 'Retour à l\'accueil' : 'Back to home'}
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {isFr ? 'Conditions Générales de Vente' : 'Terms and Conditions'}
          </h1>

          <p className="text-muted-foreground mb-8">
            {isFr ? 'Dernière mise à jour : Janvier 2025' : 'Last updated: January 2025'}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '1. Objet' : '1. Purpose'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Les présentes conditions générales de vente régissent les relations contractuelles entre Taxi Lyon Cab et ses clients pour tous les services de transport de personnes.'
                : 'These terms and conditions govern the contractual relationship between Taxi Lyon Cab and its customers for all passenger transport services.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '2. Réservation' : '2. Booking'}
            </h2>
            <p className="text-muted-foreground mb-4">
              {isFr 
                ? 'Les réservations peuvent être effectuées via notre site web, par téléphone ou via WhatsApp. Toute réservation est considérée comme ferme et définitive dès sa confirmation par nos services.'
                : 'Bookings can be made via our website, by phone, or via WhatsApp. Any booking is considered firm and final upon confirmation by our services.'}
            </p>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Le client s\'engage à fournir des informations exactes lors de la réservation (adresses, horaires, nombre de passagers, besoins spécifiques).'
                : 'The customer agrees to provide accurate information when booking (addresses, times, number of passengers, specific needs).'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '3. Tarifs' : '3. Pricing'}
            </h2>
            <p className="text-muted-foreground mb-4">
              {isFr 
                ? 'Nos tarifs sont indiqués en euros TTC. Pour les courses standard, le prix est calculé selon le compteur horokilométrique conformément à la réglementation en vigueur.'
                : 'Our prices are shown in euros including tax. For standard rides, the price is calculated according to the taximeter in compliance with current regulations.'}
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>{isFr ? 'Tarif de nuit (+20%) : 20h00 - 7h00' : 'Night rate (+20%): 8pm - 7am'}</li>
              <li>{isFr ? 'Supplément week-end et jours fériés' : 'Weekend and holiday supplement'}</li>
              <li>{isFr ? 'Forfaits disponibles pour les transferts aéroport et gare' : 'Fixed rates available for airport and station transfers'}</li>
              <li>{isFr ? 'Bus : tarif sur devis uniquement' : 'Bus: quote only'}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '4. Paiement' : '4. Payment'}
            </h2>
            <p className="text-muted-foreground mb-4">
              {isFr ? 'Les modes de paiement acceptés sont :' : 'Accepted payment methods are:'}
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>{isFr ? 'Carte bancaire en ligne (via Stripe)' : 'Credit card online (via Stripe)'}</li>
              <li>{isFr ? 'Carte bancaire au chauffeur' : 'Credit card to driver'}</li>
              <li>{isFr ? 'Espèces' : 'Cash'}</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              {isFr 
                ? 'Pour les transports VSL conventionnés CPAM, la prise en charge est directe sur présentation du bon de transport. Un complément peut être demandé si le patient n\'est pas pris en charge à 100%.'
                : 'For CPAM-approved VSL transport, coverage is direct upon presentation of the transport voucher. A supplement may be requested if the patient is not covered at 100%.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '5. Annulation' : '5. Cancellation'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Toute annulation doit être effectuée au moins 2 heures avant l\'heure de prise en charge prévue. Passé ce délai, des frais d\'annulation de 15€ pourront être appliqués. Pour les réservations de bus ou de groupe, l\'annulation doit être effectuée au moins 24 heures à l\'avance.'
                : 'Any cancellation must be made at least 2 hours before the scheduled pickup time. After this period, a cancellation fee of €15 may apply. For bus or group bookings, cancellation must be made at least 24 hours in advance.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '6. Obligations du client' : '6. Customer Obligations'}
            </h2>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>{isFr ? 'Être présent à l\'heure et au lieu convenus' : 'Be present at the agreed time and place'}</li>
              <li>{isFr ? 'Respecter le véhicule et le chauffeur' : 'Respect the vehicle and driver'}</li>
              <li>{isFr ? 'Attacher la ceinture de sécurité' : 'Wear seat belts'}</li>
              <li>{isFr ? 'Ne pas fumer dans le véhicule' : 'No smoking in the vehicle'}</li>
              <li>{isFr ? 'Signaler tout besoin spécifique lors de la réservation (siège enfant, fauteuil roulant, etc.)' : 'Report any special needs when booking (child seat, wheelchair, etc.)'}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '7. Responsabilité' : '7. Liability'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Taxi Lyon Cab dispose d\'une assurance responsabilité civile professionnelle couvrant le transport de passagers. Notre responsabilité est limitée aux dommages directs prouvés. Nous ne sommes pas responsables des retards dus à des circonstances exceptionnelles (embouteillages, intempéries, accidents, etc.).'
                : 'Taxi Lyon Cab has professional liability insurance covering passenger transport. Our liability is limited to proven direct damages. We are not responsible for delays due to exceptional circumstances (traffic jams, bad weather, accidents, etc.).'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '8. Bagages et objets oubliés' : '8. Luggage and Lost Items'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Les bagages sont transportés sous la responsabilité du client. En cas d\'objet oublié, veuillez nous contacter dans les plus brefs délais. Les objets trouvés sont conservés pendant 30 jours.'
                : 'Luggage is transported under the customer\'s responsibility. In case of forgotten items, please contact us as soon as possible. Found items are kept for 30 days.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '9. Réclamations' : '9. Complaints'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Toute réclamation doit être adressée par email à contact@taxilyon.cab dans un délai de 7 jours suivant la prestation. Nous nous engageons à répondre sous 48 heures ouvrées.'
                : 'Any complaint must be sent by email to contact@taxilyon.cab within 7 days of the service. We commit to responding within 48 business hours.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '10. Droit applicable' : '10. Applicable Law'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux de Lyon seront seuls compétents.'
                : 'These terms and conditions are governed by French law. In case of dispute, the courts of Lyon shall have exclusive jurisdiction.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CGV;
