import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Clock, CreditCard, Users, Phone, CheckCircle, Car, Shield, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const LyonAirportTaxi = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much is a taxi from Lyon Airport to city center?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A taxi from Lyon Saint-Exupéry Airport (LYS) to Lyon city center costs €59 during the day and €75 at night (7pm-7am). This is a fixed price with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the taxi ride from Lyon Airport to downtown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The taxi journey from Lyon Saint-Exupéry Airport to Lyon city center takes approximately 25-35 minutes, depending on traffic conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a Lyon Airport taxi in advance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we recommend booking your airport taxi 24 hours in advance. You can book by phone (+33 4 72 10 10 10), WhatsApp, or through our online booking form."
        }
      },
      {
        "@type": "Question",
        "name": "Does the driver speak English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our drivers speak English. We specialize in serving international travelers and business clients at Lyon Airport."
        }
      },
      {
        "@type": "Question",
        "name": "What if my flight is delayed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We track your flight in real-time and adjust pickup time accordingly. 1 hour of waiting time is included free of charge for airport pickups."
        }
      },
      {
        "@type": "Question",
        "name": "Where will the driver meet me at Lyon Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your driver will wait for you in the arrivals hall with a sign displaying your name. We meet you right after you exit customs."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Lyon Cab - Lyon Airport Transfer",
    "description": "Professional English-speaking taxi service for Lyon Saint-Exupéry Airport (LYS) transfers. Fixed price €59, available 24/7.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Lyon Cab",
      "telephone": "+33472101010",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressCountry": "FR"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Lyon"
    },
    "priceRange": "€59 - €75"
  };

  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Available day and night, every day of the year"
    },
    {
      icon: CreditCard,
      title: "Fixed Price €59",
      description: "No meter, no hidden fees - pay what we quote"
    },
    {
      icon: Users,
      title: "Meet & Greet",
      description: "Driver waiting with your name at arrivals"
    },
    {
      icon: Shield,
      title: "English Speakers",
      description: "All drivers speak fluent English"
    }
  ];

  const prices = [
    { from: "Lyon City Center", to: "Saint-Exupéry Airport (LYS)", dayPrice: "€59", nightPrice: "€75", time: "25-35 min" },
    { from: "Part-Dieu Station", to: "Saint-Exupéry Airport (LYS)", dayPrice: "€55", nightPrice: "€70", time: "20-30 min" },
    { from: "Perrache Station", to: "Saint-Exupéry Airport (LYS)", dayPrice: "€65", nightPrice: "€80", time: "30-40 min" },
    { from: "Vieux Lyon", to: "Saint-Exupéry Airport (LYS)", dayPrice: "€62", nightPrice: "€78", time: "30-40 min" },
    { from: "Confluence", to: "Saint-Exupéry Airport (LYS)", dayPrice: "€65", nightPrice: "€80", time: "30-40 min" },
  ];

  const testimonials = [
    {
      name: "James M.",
      country: "UK",
      rating: 5,
      text: "Excellent service! Driver was waiting for me at arrivals with a sign. Very professional and the car was spotless. Highly recommend for airport transfers."
    },
    {
      name: "Sarah K.",
      country: "USA",
      rating: 5,
      text: "Best airport taxi experience in Europe. Fixed price, no hassle, driver spoke perfect English. Will definitely use again on my next trip to Lyon."
    },
    {
      name: "Michael T.",
      country: "Australia",
      rating: 5,
      text: "My flight was delayed by 2 hours and they adjusted everything without any extra charge. The driver was friendly and helped with my heavy luggage."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lyon Airport Taxi | Saint-Exupéry Transfer €59 Fixed Price | English Speaking Drivers</title>
        <meta name="description" content="Book your Lyon Airport taxi online. Fixed price €59 to city center, English-speaking drivers, meet & greet service. Available 24/7. Call +33 4 72 10 10 10" />
        <meta name="keywords" content="lyon airport taxi, saint exupery airport taxi, LYS taxi, lyon airport transfer, taxi from lyon airport, english speaking taxi lyon, airport shuttle lyon" />
        <link rel="canonical" href="https://taxilyon.cab/lyon-airport-taxi" />
        <meta property="og:title" content="Lyon Airport Taxi | €59 Fixed Price Transfer | Taxi Lyon Cab" />
        <meta property="og:description" content="Professional taxi service from Lyon Saint-Exupéry Airport. Fixed price €59, English-speaking drivers, 24/7 availability." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Plane className="h-5 w-5" />
                  <span className="font-medium">Lyon Saint-Exupéry Airport (LYS)</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Lyon Airport Taxi Service
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Professional taxi transfer from Lyon Saint-Exupéry Airport (LYS) to city center. 
                  Fixed price, English-speaking drivers, meet & greet service included.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <a href="tel:+33472101010">
                      <Phone className="mr-2 h-5 w-5" />
                      +33 4 72 10 10 10
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <Link to="/#reservation">
                      Book Online Now
                    </Link>
                  </Button>
                </div>

                <div className="inline-flex items-center gap-2 text-2xl font-bold text-primary">
                  <span>From only</span>
                  <span className="text-4xl">€59</span>
                  <span className="text-muted-foreground text-lg font-normal">(fixed price)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                        <feature.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">
                Lyon Airport Taxi Prices
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                All prices are fixed and include meet & greet, 1 hour waiting time, and luggage assistance.
              </p>
              
              <div className="max-w-4xl mx-auto overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left">From</th>
                      <th className="p-4 text-left">To</th>
                      <th className="p-4 text-center">Day Rate</th>
                      <th className="p-4 text-center">Night Rate</th>
                      <th className="p-4 text-center">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((price, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                        <td className="p-4 font-medium">{price.from}</td>
                        <td className="p-4">{price.to}</td>
                        <td className="p-4 text-center font-semibold text-primary">{price.dayPrice}</td>
                        <td className="p-4 text-center font-semibold">{price.nightPrice}</td>
                        <td className="p-4 text-center text-muted-foreground">{price.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="text-center text-muted-foreground mt-6">
                * Night rate applies from 7pm to 7am and on Sundays/public holidays. Prices for 1-4 passengers.
              </p>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                What Our Customers Say
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Why Choose Taxi Lyon Cab for Airport Transfers?
                </h2>
                
                <div className="grid gap-4">
                  {[
                    "English-speaking professional drivers trained in customer service",
                    "Meet & greet service - driver waits with your name sign at arrivals",
                    "Free flight tracking - we monitor your flight and adjust pickup time",
                    "1 hour free waiting time included for airport pickups",
                    "Spacious vehicles with room for luggage (2 large suitcases + 2 carry-ons)",
                    "Fixed price guaranteed - no meter, no surge pricing, no hidden fees",
                    "Free baby seats and booster seats available on request",
                    "All major credit cards accepted, including contactless payments"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Lyon Airport Taxi FAQ
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-lg mb-3">{faq.name}</h3>
                    <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Book Your Lyon Airport Taxi Now
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Available 24/7. Quick booking by phone, WhatsApp, or online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <a href="tel:+33472101010">
                    <Phone className="mr-2 h-5 w-5" />
                    +33 4 72 10 10 10
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/#reservation">
                    Book Online
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default LyonAirportTaxi;
