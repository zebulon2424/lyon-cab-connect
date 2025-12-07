import { useEffect, useState, ReactNode } from 'react';

interface GoogleMapsProviderProps {
  children: ReactNode;
}

// API key is public and restricted by domain in Google Cloud Console
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('[GoogleMaps] API Key present:', !!GOOGLE_MAPS_API_KEY);
    console.log('[GoogleMaps] API Key length:', GOOGLE_MAPS_API_KEY.length);
    
    if (window.google?.maps) {
      console.log('[GoogleMaps] Already loaded');
      setIsLoaded(true);
      return;
    }

    if (!GOOGLE_MAPS_API_KEY) {
      console.error('[GoogleMaps] API key not configured - VITE_GOOGLE_MAPS_API_KEY is empty');
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      console.log('[GoogleMaps] Script already exists, waiting for load');
      existingScript.addEventListener('load', () => setIsLoaded(true));
      return;
    }

    console.log('[GoogleMaps] Loading script...');
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

    return () => {
      // Don't remove the script on unmount as it might be used elsewhere
    };
  }, []);

  return <>{children}</>;
};

export default GoogleMapsProvider;
