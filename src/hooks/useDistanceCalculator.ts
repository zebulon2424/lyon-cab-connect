import { useState, useCallback } from 'react';

// Tarifs officiels Lyon 2024 (Arrêté préfectoral n°69-2024-02-15-00001)
const TARIFS = {
  priseEnCharge: 3.00,
  tarifA: 0.98,  // Jour (7h-19h) avec retour client
  tarifB: 1.47,  // Nuit (19h-7h) et dimanche/fériés avec retour client
  minimum: 8.00,
  supplementPassager: 4.00, // À partir du 5ème passager
};

interface FareEstimate {
  distance: number; // in km
  duration: number; // in minutes
  minPrice: number;
  maxPrice: number;
  isNight: boolean;
}

export const useDistanceCalculator = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [estimate, setEstimate] = useState<FareEstimate | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isNightTime = (): boolean => {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDay();
    
    // Night: 19h-7h or Sunday (0) or holidays
    return hours >= 19 || hours < 7 || day === 0;
  };

  const calculateFare = useCallback(async (
    origin: string,
    destination: string,
    passengers: number = 1
  ): Promise<FareEstimate | null> => {
    if (!origin || !destination) {
      setEstimate(null);
      return null;
    }

    if (!window.google?.maps) {
      setError('Google Maps not loaded');
      return null;
    }

    setIsCalculating(true);
    setError(null);

    try {
      const service = new google.maps.DistanceMatrixService();
      
      const response = await new Promise<google.maps.DistanceMatrixResponse>((resolve, reject) => {
        service.getDistanceMatrix(
          {
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
          },
          (response, status) => {
            if (status === 'OK' && response) {
              resolve(response);
            } else {
              reject(new Error(`Distance Matrix failed: ${status}`));
            }
          }
        );
      });

      const element = response.rows[0]?.elements[0];
      
      if (element?.status !== 'OK') {
        throw new Error('Could not calculate distance');
      }

      const distanceKm = element.distance.value / 1000;
      const durationMin = Math.ceil(element.duration.value / 60);
      const isNight = isNightTime();
      
      const tarifKm = isNight ? TARIFS.tarifB : TARIFS.tarifA;
      let basePrice = TARIFS.priseEnCharge + (distanceKm * tarifKm);
      
      // Supplément passagers (à partir du 5ème)
      if (passengers > 4) {
        basePrice += (passengers - 4) * TARIFS.supplementPassager;
      }

      // Minimum de perception
      basePrice = Math.max(basePrice, TARIFS.minimum);

      const fareEstimate: FareEstimate = {
        distance: Math.round(distanceKm * 10) / 10,
        duration: durationMin,
        minPrice: Math.round(basePrice),
        maxPrice: Math.round(basePrice * 1.15), // +15% pour trafic/détours
        isNight,
      };

      setEstimate(fareEstimate);
      return fareEstimate;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Calculation failed';
      setError(message);
      setEstimate(null);
      return null;
    } finally {
      setIsCalculating(false);
    }
  }, []);

  const clearEstimate = useCallback(() => {
    setEstimate(null);
    setError(null);
  }, []);

  return {
    estimate,
    isCalculating,
    error,
    calculateFare,
    clearEstimate,
  };
};
