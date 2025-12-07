import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logoTaxi from '@/assets/logo-taxi-lyon.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { href: isHomePage ? '#home' : '/#home', label: t('nav.home') },
    { href: isHomePage ? '#services' : '/#services', label: t('nav.services') },
    { href: isHomePage ? '#pricing' : '/#pricing', label: t('nav.pricing') },
    { href: isHomePage ? '#contact' : '/#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoTaxi} 
              alt="Taxi Lyon Cab Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">Taxi Lyon</span>
              <span className="text-primary text-sm font-medium leading-tight">CAB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Globe size={18} />
              <span className="font-medium">{i18n.language.toUpperCase()}</span>
            </button>

            <a href="tel:+33487382065" className="flex items-center gap-2 text-primary font-semibold">
              <Phone size={18} />
              <span>04 87 38 20 65</span>
            </a>

            <Button variant="hero" size="lg" asChild>
              <a href="#booking">{t('nav.book')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-border my-2" />
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                <Globe size={18} />
                <span>{i18n.language === 'fr' ? 'English' : 'Français'}</span>
              </button>
              <a
                href="tel:+33487382065"
                className="flex items-center gap-2 py-3 px-4 text-primary font-semibold"
              >
                <Phone size={18} />
                <span>04 87 38 20 65</span>
              </a>
              <Button variant="hero" className="mt-2" asChild>
                <a href="#booking">{t('nav.book')}</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
