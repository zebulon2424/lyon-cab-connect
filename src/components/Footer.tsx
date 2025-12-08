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
    { label: 'Taxi Aéroport Lyon', href: '/taxi-aeroport-lyon-saint-exupery' },
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

  // Placeholder links - user will replace with their actual URLs
  const reviewPlatforms = [
    { 
      name: 'Google', 
      href: '#', // Replace with your Google My Business URL
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
    },
    { 
      name: 'TripAdvisor', 
      href: '#', // Replace with your TripAdvisor URL
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="6.5" cy="12" r="4.5" fill="#00AF87"/>
          <circle cx="6.5" cy="12" r="2" fill="white"/>
          <circle cx="17.5" cy="12" r="4.5" fill="#00AF87"/>
          <circle cx="17.5" cy="12" r="2" fill="white"/>
          <ellipse cx="12" cy="6" rx="3" ry="2" fill="#00AF87"/>
          <path d="M2 12c0-2.5 2-4.5 4.5-4.5M22 12c0-2.5-2-4.5-4.5-4.5" stroke="#00AF87" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    { 
      name: 'Avis Vérifiés', 
      href: '#', // Replace with your Avis Vérifiés URL
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#00B67A"/>
          <path d="M12 6l1.5 3.5L17 10l-2.5 2.5.5 4-3-1.5-3 1.5.5-4L7 10l3.5-.5L12 6z" fill="white"/>
        </svg>
      ),
    },
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

            {/* Review Platforms */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">{t('footer.followUs')}</p>
              <div className="flex gap-3">
                {reviewPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    aria-label={platform.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-all duration-200"
                  >
                    {platform.logo}
                  </a>
                ))}
              </div>
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
