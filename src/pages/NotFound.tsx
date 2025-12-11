import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Phone, MapPin, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const helpfulLinks = [
    { to: "/", icon: Home, label: "Accueil", description: "Retourner à la page d'accueil" },
    { to: "/#services", icon: MapPin, label: "Nos services", description: "Découvrir nos prestations" },
    { to: "/#contact", icon: Phone, label: "Contact", description: "Nous contacter" },
    { to: "/#faq", icon: HelpCircle, label: "FAQ", description: "Questions fréquentes" },
  ];

  return (
    <>
      <Helmet>
        <title>Page non trouvée - Taxi Lyon | 404</title>
        <meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil pour réserver votre taxi à Lyon." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-bold text-primary/20">404</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page non trouvée
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Utilisez les liens ci-dessous pour naviguer sur notre site.
            </p>

            {/* Primary CTA */}
            <Link to="/">
              <Button size="lg" className="mb-12">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>

            {/* Helpful Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors text-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 rounded-lg bg-muted">
              <p className="text-muted-foreground mb-2">
                Besoin d'aide pour réserver un taxi ?
              </p>
              <a 
                href="tel:0487382065" 
                className="text-xl font-semibold text-primary hover:underline"
              >
                04 87 38 20 65
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFound;
