import { useEffect, useState, ReactNode } from 'react';

interface GoogleMapsProviderProps {
  children: ReactNode;
}

// API key is public and restricted by domain in Google Cloud Console
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.google?.maps) {
      setIsLoaded(true);
      return;
    }

    if (!GOOGLE_MAPS_API_KEY) {
      console.warn('Google Maps API key not configured');
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => setIsLoaded(true));
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => console.error('Failed to load Google Maps');
    
    document.head.appendChild(script);

    return () => {
      // Don't remove the script on unmount as it might be used elsewhere
    };
  }, []);

  return <>{children}</>;
};

export default GoogleMapsProvider;
