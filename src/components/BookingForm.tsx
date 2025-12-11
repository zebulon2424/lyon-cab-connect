import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Briefcase, CreditCard, Banknote, Phone, Mail, User, Car, Bus, Accessibility, Baby, FileText, AlertCircle, Calculator, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import AddressAutocomplete from './AddressAutocomplete';
import { useDistanceCalculator } from '@/hooks/useDistanceCalculator';
import { supabase } from '@/integrations/supabase/client';

type VehicleType = 'sedan' | 'minivan' | 'bus' | 'tpmr' | 'vsl';
type WheelchairType = 'foldable' | 'ramp';
type ChildSeatType = 'none' | 'baby' | 'child' | 'booster';

const BookingForm = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';
  const { estimate, isCalculating, calculateFare, clearEstimate } = useDistanceCalculator();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    luggage: '0',
    vehicleType: 'sedan' as VehicleType,
    wheelchairType: 'foldable' as WheelchairType,
    childSeat: 'none' as ChildSeatType,
    childAge: '',
    payment: 'online',
    name: '',
    phone: '',
    email: '',
  });

  // Recalculate fare when addresses or passengers change
  useEffect(() => {
    if (formData.pickup && formData.destination) {
      const timer = setTimeout(() => {
        calculateFare(formData.pickup, formData.destination, parseInt(formData.passengers));
      }, 500);
      return () => clearTimeout(timer);
    } else {
      clearEstimate();
    }
  }, [formData.pickup, formData.destination, formData.passengers, calculateFare, clearEstimate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.vehicleType === 'bus') {
      toast.info(t('booking.busCallMessage'));
      return;
    }

    setIsSubmitting(true);
    
    try {
      const bookingData = {
        ...formData,
        estimatedPrice: estimate ? `${estimate.minPrice}€ - ${estimate.maxPrice}€` : undefined,
      };

      const { data, error } = await supabase.functions.invoke('send-booking', {
        body: bookingData,
      });

      if (error) {
        console.error('Error sending booking:', error);
        toast.error(isFr ? 'Erreur lors de l\'envoi de la réservation' : 'Error sending booking');
        return;
      }

      toast.success(t('booking.successMessage'));
      
      // Reset form
      setFormData({
        pickup: '',
        destination: '',
        date: '',
        time: '',
        passengers: '1',
        luggage: '0',
        vehicleType: 'sedan',
        wheelchairType: 'foldable',
        childSeat: 'none',
        childAge: '',
        payment: 'online',
        name: '',
        phone: '',
        email: '',
      });
      clearEstimate();
    } catch (error) {
      console.error('Error:', error);
      toast.error(isFr ? 'Erreur lors de l\'envoi de la réservation' : 'Error sending booking');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      // Reset wheelchair type when not TPMR
      ...(name === 'vehicleType' && value !== 'tpmr' ? { wheelchairType: 'foldable' } : {}),
      // Reset child seat when changing
      ...(name === 'childSeat' && value === 'none' ? { childAge: '' } : {}),
    }));
  };

  const vehicleTypes = [
    { value: 'sedan', label: t('booking.vehicleSedanLabel'), icon: Car, maxPassengers: 4 },
    { value: 'minivan', label: t('booking.vehicleMinivanLabel'), icon: Car, maxPassengers: 8 },
    { value: 'bus', label: t('booking.vehicleBusLabel'), icon: Bus, maxPassengers: 19 },
    { value: 'tpmr', label: t('booking.vehicleTPMRLabel'), icon: Accessibility, maxPassengers: 4 },
    { value: 'vsl', label: t('booking.vehicleVSLLabel'), icon: FileText, maxPassengers: 4 },
  ];

  const wheelchairTypes = [
    { value: 'foldable', label: t('booking.wheelchairFoldable') },
    { value: 'ramp', label: t('booking.wheelchairRamp') },
  ];

  const childSeatOptions = [
    { value: 'none', label: t('booking.childSeatNone') },
    { value: 'baby', label: t('booking.childSeatBaby') },
    { value: 'child', label: t('booking.childSeatChild') },
    { value: 'booster', label: t('booking.childSeatBooster') },
  ];

  const paymentMethods = [
    { value: 'online', label: t('booking.paymentOnline'), icon: CreditCard },
    { value: 'cash', label: t('booking.paymentCash'), icon: Banknote },
    { value: 'card', label: t('booking.paymentCard'), icon: CreditCard },
  ];

  const currentVehicle = vehicleTypes.find(v => v.value === formData.vehicleType);
  const maxPassengers = currentVehicle?.maxPassengers || 4;
  const showWheelchairOptions = formData.vehicleType === 'tpmr';
  const showChildSeatAge = formData.childSeat !== 'none';
  const isBus = formData.vehicleType === 'bus';
  const isVSL = formData.vehicleType === 'vsl';

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
            {/* Vehicle Type Selection */}
            <div className="mb-8">
              <label className="text-sm font-medium text-foreground mb-4 block">
                {t('booking.vehicleType')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {vehicleTypes.map((vehicle) => (
                  <label
                    key={vehicle.value}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      formData.vehicleType === vehicle.value
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="vehicleType"
                      value={vehicle.value}
                      checked={formData.vehicleType === vehicle.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <vehicle.icon className={`w-6 h-6 ${formData.vehicleType === vehicle.value ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={`text-xs text-center ${formData.vehicleType === vehicle.value ? 'text-primary font-medium' : 'text-foreground'}`}>
                      {vehicle.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Vehicle Description */}
              <div className="mt-4 p-4 rounded-xl bg-surface/50 border border-border/30">
                <p className="text-sm text-muted-foreground">
                  {t(`booking.vehicleDesc_${formData.vehicleType}`)}
                </p>
                {isBus && (
                  <div className="mt-3 flex items-center gap-2 text-primary">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">{t('booking.busCallWarning')}</span>
                  </div>
                )}
                {isVSL && (
                  <div className="mt-3 flex items-center gap-2 text-primary">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">{t('booking.vslInfo')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* TPMR Wheelchair Options */}
            {showWheelchairOptions && (
              <div className="mb-8">
                <label className="text-sm font-medium text-foreground mb-4 block">
                  {t('booking.wheelchairType')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {wheelchairTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        formData.wheelchairType === type.value
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="wheelchairType"
                        value={type.value}
                        checked={formData.wheelchairType === type.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Accessibility className={`w-5 h-5 ${formData.wheelchairType === type.value ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={formData.wheelchairType === type.value ? 'text-primary font-medium' : 'text-foreground'}>
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pickup */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {t('booking.pickup')}
                </label>
                <AddressAutocomplete
                  name="pickup"
                  value={formData.pickup}
                  onChange={(value) => setFormData(prev => ({ ...prev, pickup: value }))}
                  placeholder={t('booking.pickupPlaceholder')}
                  required
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {t('booking.destination')}
                </label>
                <AddressAutocomplete
                  name="destination"
                  value={formData.destination}
                  onChange={(value) => setFormData(prev => ({ ...prev, destination: value }))}
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
                  {Array.from({ length: maxPassengers }, (_, i) => i + 1).map((num) => (
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

              {/* Child Seat */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Baby className="w-4 h-4 text-primary" />
                  {t('booking.childSeat')}
                </label>
                <select
                  name="childSeat"
                  value={formData.childSeat}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-lg border border-border bg-input px-4 py-3 text-base text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {childSeatOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Child Age - shown when child seat is selected */}
              {showChildSeatAge && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Baby className="w-4 h-4 text-primary" />
                    {t('booking.childAge')}
                  </label>
                  <Input
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder={t('booking.childAgePlaceholder')}
                    required
                  />
                </div>
              )}

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

              {/* Payment Method - Hidden for VSL */}
              {!isVSL && !isBus && (
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
              )}

              {/* VSL Info */}
              {isVSL && (
                <div className="md:col-span-2 p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{t('booking.vslPaymentTitle')}</p>
                      <p className="text-sm text-muted-foreground mt-1">{t('booking.vslPaymentDesc')}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fare Estimate Display */}
            {!isBus && !isVSL && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: (estimate || isCalculating) ? 1 : 0,
                  height: (estimate || isCalculating) ? 'auto' : 0
                }}
                className="mt-6 overflow-hidden"
              >
                <div className="p-5 rounded-2xl bg-gradient-gold/20 border border-primary/30">
                  {isCalculating ? (
                    <div className="flex items-center justify-center gap-3 py-2">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                      <span className="text-muted-foreground">
                        {isFr ? 'Calcul du tarif...' : 'Calculating fare...'}
                      </span>
                    </div>
                  ) : estimate && (
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Calculator className="w-6 h-6 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {isFr ? 'Estimation du tarif' : 'Fare estimate'}
                          </p>
                          <p className="text-xs text-muted-foreground/70">
                            {estimate.distance} km • ~{estimate.duration} min
                            {estimate.isNight && (
                              <span className="ml-2 text-primary">
                                ({isFr ? 'Tarif nuit' : 'Night rate'})
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-gradient">
                          {estimate.minPrice}€ - {estimate.maxPrice}€
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {isVSL && (
              <div className="mt-6 p-5 rounded-2xl bg-primary/10 border border-primary/30">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {isFr ? 'Transport conventionné' : 'Covered transport'}
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {t('booking.vslCovered')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-4">
              {isBus ? (
                <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center sm:text-left flex-1">
                    <p className="text-sm text-muted-foreground">{t('booking.busQuote')}</p>
                    <p className="text-xl font-bold text-primary">{t('booking.busCallUs')}</p>
                  </div>
                  <a href="tel:+33472000000" className="w-full sm:w-auto">
                    <Button type="button" variant="hero" size="xl" className="w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      {t('booking.callForQuote')}
                    </Button>
                  </a>
                </div>
              ) : (
                <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {isFr ? 'Envoi en cours...' : 'Sending...'}
                    </>
                  ) : (
                    t('booking.submit')
                  )}
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;