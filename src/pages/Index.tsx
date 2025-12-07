import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import Services from '@/components/Services';
import FareSimulator from '@/components/FareSimulator';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BookingForm />
        <Services />
        <FareSimulator />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveChat />
    </div>
  );
};

export default Index;
