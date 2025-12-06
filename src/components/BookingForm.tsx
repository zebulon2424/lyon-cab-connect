import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Users, Briefcase, CreditCard, Banknote, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const BookingForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    luggage: '0',
    payment: 'online',
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would integrate with the backend
    toast.success('Réservation envoyée ! Nous vous contacterons sous peu.');
    console.log('Booking data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const paymentMethods = [
    { value: 'online', label: t('booking.paymentOnline'), icon: CreditCard },
    { value: 'cash', label: t('booking.paymentCash'), icon: Banknote },
    { value: 'card', label: t('booking.paymentCard'), icon: CreditCard },
  ];

  return (
    <section id="booking" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('booking.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-10 border border-border/50">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pickup */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t('booking.pickup')}
                </label>
                <Input
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder={t('booking.pickupPlaceholder')}
                  required
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t('booking.destination')}
                </label>
                <Input
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder={t('booking.destinationPlaceholder')}
                  required
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {t('booking.date')}
                </label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {t('booking.time')}
                </label>
                <Input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  {t('booking.passengers')}
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-lg border border-border bg-input px-4 py-3 text-base text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? t('booking.passenger') : t('booking.passengers_plural')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Luggage */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  {t('booking.luggage')}
                </label>
                <select
                  name="luggage"
                  value={formData.luggage}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-lg border border-border bg-input px-4 py-3 text-base text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num <= 1 ? t('booking.bag') : t('booking.bags')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  {t('booking.name')}
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('booking.namePlaceholder')}
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  {t('booking.phone')}
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('booking.phonePlaceholder')}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {t('booking.email')}
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('booking.emailPlaceholder')}
                  required
                />
              </div>

              {/* Payment Method */}
              <div className="space-y-3 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  {t('booking.payment')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.value}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        formData.payment === method.value
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.value}
                        checked={formData.payment === method.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <method.icon className={`w-5 h-5 ${formData.payment === method.value ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={formData.payment === method.value ? 'text-primary font-medium' : 'text-foreground'}>
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground">{t('booking.estimatedPrice')}</p>
                <p className="text-3xl font-bold text-gradient">~35€</p>
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
                {t('booking.submit')}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
