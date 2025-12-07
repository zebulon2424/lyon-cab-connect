import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoTaxi from '@/assets/logo-taxi-lyon.png';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const destinationLinks = [
    { label: 'Taxi Aéroport Lyon', href: '/taxi-aeroport-lyon' },
    { label: 'Lyon Airport Taxi', href: '/lyon-airport-taxi' },
    { label: 'Taxi Gare Part-Dieu', href: '/taxi-gare-part-dieu' },
    { label: 'Taxi Gare Perrache', href: '/taxi-gare-perrache' },
    { label: 'Taxi Lyon Centre', href: '/taxi-lyon-centre' },
    { label: 'VTC vs Taxi Lyon', href: '/vtc-taxi-lyon' },
  ];

  const legalLinks = [
    { label: t('footer.legal'), href: '/mentions-legales' },
    { label: t('footer.privacy'), href: '/politique-confidentialite' },
    { label: t('footer.terms'), href: '/cgv' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoTaxi} 
                alt="Taxi Lyon Cab Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">Taxi Lyon</span>
                <span className="text-primary text-sm font-medium leading-tight">CAB</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destination Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Destinations</h4>
            <ul className="space-y-2">
              {destinationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-6 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
