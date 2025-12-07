import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PolitiqueConfidentialite = () => {
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
            {isFr ? 'Politique de Confidentialité' : 'Privacy Policy'}
          </h1>

          <p className="text-muted-foreground mb-8">
            {isFr ? 'Dernière mise à jour : Janvier 2025' : 'Last updated: January 2025'}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '1. Collecte des données personnelles' : '1. Collection of Personal Data'}
            </h2>
            <p className="text-muted-foreground mb-4">
              {isFr 
                ? 'Dans le cadre de nos services de transport, nous collectons les données suivantes :'
                : 'As part of our transport services, we collect the following data:'}
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>{isFr ? 'Nom et prénom' : 'First and last name'}</li>
              <li>{isFr ? 'Numéro de téléphone' : 'Phone number'}</li>
              <li>{isFr ? 'Adresse email' : 'Email address'}</li>
              <li>{isFr ? 'Adresses de prise en charge et de destination' : 'Pickup and destination addresses'}</li>
              <li>{isFr ? 'Informations de paiement' : 'Payment information'}</li>
              <li>{isFr ? 'Pour les VSL : bon de transport et informations médicales nécessaires' : 'For VSL: transport voucher and necessary medical information'}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '2. Utilisation des données' : '2. Use of Data'}
            </h2>
            <p className="text-muted-foreground mb-4">
              {isFr ? 'Vos données sont utilisées pour :' : 'Your data is used for:'}
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>{isFr ? 'Traiter et gérer vos réservations' : 'Process and manage your bookings'}</li>
              <li>{isFr ? 'Vous contacter concernant votre course' : 'Contact you about your ride'}</li>
              <li>{isFr ? 'Traiter les paiements' : 'Process payments'}</li>
              <li>{isFr ? 'Respecter nos obligations légales et réglementaires' : 'Comply with our legal and regulatory obligations'}</li>
              <li>{isFr ? 'Améliorer nos services' : 'Improve our services'}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '3. Durée de conservation' : '3. Data Retention'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Vos données personnelles sont conservées pendant une durée de 3 ans à compter de votre dernière interaction avec nos services, sauf obligation légale de conservation plus longue (notamment pour les documents comptables).'
                : 'Your personal data is retained for 3 years from your last interaction with our services, unless a longer retention period is required by law (particularly for accounting documents).'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '4. Partage des données' : '4. Data Sharing'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Vos données peuvent être partagées avec : nos chauffeurs partenaires (uniquement les informations nécessaires à la course), nos prestataires de paiement (Stripe), la CPAM dans le cadre des transports VSL, les autorités compétentes si la loi l\'exige.'
                : 'Your data may be shared with: our partner drivers (only information necessary for the ride), our payment providers (Stripe), CPAM for VSL transport, competent authorities if required by law.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '5. Vos droits' : '5. Your Rights'}
            </h2>
            <p className="text-muted-foreground mb-4">
              {isFr 
                ? 'Conformément au RGPD, vous disposez des droits suivants :'
                : 'In accordance with GDPR, you have the following rights:'}
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>{isFr ? 'Droit d\'accès à vos données' : 'Right to access your data'}</li>
              <li>{isFr ? 'Droit de rectification' : 'Right to rectification'}</li>
              <li>{isFr ? 'Droit à l\'effacement' : 'Right to erasure'}</li>
              <li>{isFr ? 'Droit à la portabilité' : 'Right to data portability'}</li>
              <li>{isFr ? 'Droit d\'opposition' : 'Right to object'}</li>
              <li>{isFr ? 'Droit de limitation du traitement' : 'Right to restriction of processing'}</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              {isFr 
                ? 'Pour exercer ces droits, contactez-nous à : contact@taxilyoncab.fr'
                : 'To exercise these rights, contact us at: contact@taxilyoncab.fr'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '6. Cookies' : '6. Cookies'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Notre site utilise des cookies essentiels au fonctionnement du service. Ces cookies ne collectent pas de données personnelles à des fins publicitaires.'
                : 'Our site uses cookies essential for the operation of the service. These cookies do not collect personal data for advertising purposes.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '7. Contact DPO' : '7. DPO Contact'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Pour toute question relative à la protection de vos données, vous pouvez contacter notre délégué à la protection des données à : contact@taxilyoncab.fr'
                : 'For any questions regarding the protection of your data, you can contact our Data Protection Officer at: contact@taxilyoncab.fr'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
