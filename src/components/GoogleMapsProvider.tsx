import { useEffect, useState, ReactNode, createContext, useContext } from 'react';

interface GoogleMapsProviderProps {
  children: ReactNode;
}

interface GoogleMapsContextType {
  isLoaded: boolean;
  loadGoogleMaps: () => void;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isLoaded: false,
  loadGoogleMaps: () => {},
});

export const useGoogleMaps = () => useContext(GoogleMapsContext);

// API key is public and restricted by domain in Google Cloud Console
const GOOGLE_MAPS_API_KEY = 'AIzaSyCsX1Du28X5cMYrPY0hhlw1mhNtFovhYnQ';

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadGoogleMaps = () => {
    if (isLoaded || isLoading) return;
    
    if (window.google?.maps) {
      setIsLoaded(true);
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => setIsLoaded(true));
      return;
    }

    if (!GOOGLE_MAPS_API_KEY) {
      console.error('[GoogleMaps] API key not configured');
      return;
    }

    setIsLoading(true);
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('[GoogleMaps] Script loaded successfully');
      setIsLoaded(true);
      setIsLoading(false);
    };
    script.onerror = (e) => {
      console.error('[GoogleMaps] Failed to load script:', e);
      setIsLoading(false);
    };
    
    document.head.appendChild(script);
  };

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadGoogleMaps }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export default GoogleMapsProvider;
