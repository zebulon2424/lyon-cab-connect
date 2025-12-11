import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calculator, Info, Sun, Moon, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Tarifs officiels Lyon 2025 (Arrêté du 20 janvier 2025 - JORF n°0027 du 1er février 2025)
const TARIFS = {
  priseEnCharge: 4.48,    // Prise en charge max 2025
  tarifA: 1.12,           // Jour (7h-19h) avec retour client
  tarifB: 1.29,           // Nuit (19h-7h) et dimanche/fériés - tarif max 2025
  tarifC: 2.24,           // Jour sans retour client
  tarifD: 2.58,           // Nuit sans retour client
  minimum: 8.00,          // Minimum inchangé
  supplementPassager: 5.50, // À partir du 5ème passager
  heureAttente: 41.76,    // Prix horaire max 2025
};

// Distances approximatives depuis le centre de Lyon
const DESTINATIONS_POPULAIRES = [
  { id: 'aeroport', labelFr: 'Aéroport Saint-Exupéry', labelEn: 'Saint-Exupéry Airport', distance: 28 },
  { id: 'partdieu', labelFr: 'Gare Part-Dieu', labelEn: 'Part-Dieu Station', distance: 3 },
  { id: 'perrache', labelFr: 'Gare de Perrache', labelEn: 'Perrache Station', distance: 2 },
  { id: 'villeurbanne', labelFr: 'Villeurbanne', labelEn: 'Villeurbanne', distance: 4 },
  { id: 'vaulx', labelFr: 'Vaulx-en-Velin', labelEn: 'Vaulx-en-Velin', distance: 8 },
  { id: 'venissieux', labelFr: 'Vénissieux', labelEn: 'Vénissieux', distance: 7 },
];

const FareSimulator = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';
  
  const [distance, setDistance] = useState<string>('');
  const [isNight, setIsNight] = useState(false);
  const [passengers, setPassengers] = useState(1);

  const estimation = useMemo(() => {
    const km = parseFloat(distance) || 0;
    if (km <= 0) return null;

    const tarifKm = isNight ? TARIFS.tarifB : TARIFS.tarifA;
    let total = TARIFS.priseEnCharge + (km * tarifKm);
    
    // Supplément passagers (à partir du 5ème)
    if (passengers > 4) {
      total += (passengers - 4) * TARIFS.supplementPassager;
    }

    // Minimum de perception
    total = Math.max(total, TARIFS.minimum);

    return {
      min: total,
      max: total * 1.15, // Marge pour trafic/détours
      tarifKm,
    };
  }, [distance, isNight, passengers]);

  const handleQuickSelect = (km: number) => {
    setDistance(km.toString());
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-6 md:p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {isFr ? 'Simulateur de tarif' : 'Fare Simulator'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isFr ? 'Estimation basée sur les tarifs officiels 2025' : 'Estimate based on official 2025 rates'}
                </p>
              </div>
            </div>

            {/* Destinations populaires */}
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-3 block">
                {isFr ? 'Destinations populaires' : 'Popular destinations'}
              </label>
              <div className="flex flex-wrap gap-2">
                {DESTINATIONS_POPULAIRES.map((dest) => (
                  <Button
                    key={dest.id}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickSelect(dest.distance)}
                    className={`text-xs ${
                      distance === dest.distance.toString()
                        ? 'border-primary bg-primary/10 text-primary'
                        : ''
                    }`}
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    {isFr ? dest.labelFr : dest.labelEn}
                  </Button>
                ))}
              </div>
            </div>

            {/* Distance input */}
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-2 block">
                {isFr ? 'Distance (km)' : 'Distance (km)'}
              </label>
              <Input
                type="number"
                min="0"
                step="0.5"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder={isFr ? 'Entrez la distance en km' : 'Enter distance in km'}
                className="text-lg"
              />
            </div>

            {/* Tarif jour/nuit */}
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-3 block">
                {isFr ? 'Horaire' : 'Time'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsNight(false)}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                    !isNight
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50 text-foreground'
                  }`}
                >
                  <Sun className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">{isFr ? 'Jour' : 'Day'}</div>
                    <div className="text-xs opacity-70">7h - 19h</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setIsNight(true)}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                    isNight
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50 text-foreground'
                  }`}
                >
                  <Moon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">{isFr ? 'Nuit' : 'Night'}</div>
                    <div className="text-xs opacity-70">19h - 7h</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Nombre de passagers */}
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-2 block">
                {isFr ? 'Nombre de passagers' : 'Number of passengers'}
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value))}
                className="flex h-12 w-full rounded-lg border border-border bg-input px-4 py-3 text-base text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? (isFr ? 'passager' : 'passenger') : (isFr ? 'passagers' : 'passengers')}
                  </option>
                ))}
              </select>
              {passengers > 4 && (
                <p className="text-xs text-primary mt-1">
                  {isFr 
                    ? `+${(passengers - 4) * TARIFS.supplementPassager}€ supplément (à partir du 5ème passager)`
                    : `+${(passengers - 4) * TARIFS.supplementPassager}€ supplement (from 5th passenger)`
                  }
                </p>
              )}
            </div>

            {/* Résultat */}
            {estimation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-gradient-gold/20 border border-primary/30"
              >
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {isFr ? 'Estimation du tarif' : 'Fare estimate'}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-gradient">
                      {estimation.min.toFixed(0)}€
                    </span>
                    <span className="text-muted-foreground">-</span>
                    <span className="text-4xl font-bold text-gradient">
                      {estimation.max.toFixed(0)}€
                    </span>
                  </div>
                </div>

                {/* Détail du calcul */}
                <div className="mt-4 pt-4 border-t border-border/50 text-sm text-muted-foreground space-y-1">
                  <div className="flex justify-between">
                    <span>{isFr ? 'Prise en charge' : 'Pick-up fee'}</span>
                    <span>{TARIFS.priseEnCharge.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isFr ? 'Tarif kilométrique' : 'Per km rate'}</span>
                    <span>{estimation.tarifKm.toFixed(2)}€/km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isFr ? 'Distance' : 'Distance'}</span>
                    <span>{distance} km</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Infos légales */}
            <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              <p>
                {isFr 
                  ? 'Tarifs indicatifs basés sur l\'arrêté du 20 janvier 2025 (JORF du 1er février 2025). Le tarif réel peut varier selon le trafic, les détours et le trajet exact.'
                  : 'Indicative rates based on the decree of January 20, 2025 (Official Journal Feb 1, 2025). Actual fare may vary based on traffic, detours, and exact route.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FareSimulator;
