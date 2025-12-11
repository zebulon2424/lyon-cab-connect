import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MentionsLegales = () => {
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
            {isFr ? 'Mentions Légales' : 'Legal Notice'}
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '1. Éditeur du site' : '1. Website Publisher'}
            </h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong>{isFr ? 'Raison sociale' : 'Company name'}:</strong> (Taxi) LYON CAB</p>
              <p><strong>{isFr ? 'Forme juridique' : 'Legal form'}:</strong> EIRL</p>
              <p><strong>SIRET:</strong> 792 940 447</p>
              <p><strong>{isFr ? 'Numéro de TVA intracommunautaire' : 'VAT number'}:</strong> FR46792940447</p>
              <p><strong>{isFr ? 'Siège social' : 'Registered office'}:</strong> 254 rue Vendôme, 69003 Lyon, France</p>
              <p><strong>{isFr ? 'Téléphone' : 'Phone'}:</strong> 04 87 38 20 65</p>
              <p><strong>Email:</strong> contact@taxilyon.cab</p>
              <p><strong>{isFr ? 'Directeur de la publication' : 'Publication director'}:</strong> contact@taxilyon.cab</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '2. Hébergement' : '2. Hosting'}
            </h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong>{isFr ? 'Hébergeur' : 'Host'}:</strong> Hostinger International Ltd.</p>
              <p><strong>{isFr ? 'Adresse' : 'Address'}:</strong> 61 Lordou Vironos Street, 6023 Larnaca, Cyprus</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '3. Propriété intellectuelle' : '3. Intellectual Property'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'L\'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d\'auteur. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.'
                : 'All content on this website (texts, images, videos, logos, etc.) is protected by copyright. Any reproduction, representation, modification, publication, or adaptation of all or part of the elements of the site is prohibited without prior written authorization.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '4. Licence de transport' : '4. Transport License'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Taxi Lyon Cab est titulaire d\'une licence de taxi délivrée par la Préfecture du Rhône. Numéro de licence : LYON 69. Nous sommes également conventionnés par la CPAM pour les transports VSL.'
                : 'Taxi Lyon Cab holds a taxi license issued by the Rhône Prefecture. License number: LYON 69. We are also approved by CPAM for VSL transport.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '5. Responsabilité' : '5. Liability'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Taxi Lyon Cab s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, nous ne pouvons garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition. En conséquence, l\'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.'
                : 'Taxi Lyon Cab strives to ensure the accuracy and updating of information published on this site. However, we cannot guarantee the accuracy, precision, or completeness of the information provided. Consequently, the user acknowledges using this information at their own risk.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {isFr ? '6. Contact' : '6. Contact'}
            </h2>
            <p className="text-muted-foreground">
              {isFr 
                ? 'Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l\'adresse suivante : contact@taxilyon.cab'
                : 'For any questions regarding these legal notices, you can contact us at: contact@taxilyon.cab'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
