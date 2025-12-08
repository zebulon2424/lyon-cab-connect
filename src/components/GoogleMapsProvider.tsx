import { useEffect, useState, ReactNode } from 'react';

interface GoogleMapsProviderProps {
  children: ReactNode;
}

// API key is public and restricted by domain in Google Cloud Console
const GOOGLE_MAPS_API_KEY = 'AIzaSyCsX1Du28X5cMYrPY0hhlw1mhNtFovhYnQ';

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.google?.maps) {
      setIsLoaded(true);
      return;
    }

    if (!GOOGLE_MAPS_API_KEY) {
      console.error('[GoogleMaps] API key not configured');
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
    script.onload = () => {
      console.log('[GoogleMaps] Script loaded successfully');
      setIsLoaded(true);
    };
    script.onerror = (e) => console.error('[GoogleMaps] Failed to load script:', e);
    
    document.head.appendChild(script);
  }, []);

  return <>{children}</>;
};

export default GoogleMapsProvider;
