import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';
import { useGoogleMaps } from '@/components/GoogleMapsProvider';

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string, placeId?: string) => void;
  placeholder?: string;
  required?: boolean;
  name: string;
}

const AddressAutocomplete = ({
  value,
  onChange,
  placeholder,
  required,
  name,
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [mapsReady, setMapsReady] = useState(false);
  const { isLoaded, loadGoogleMaps } = useGoogleMaps();

  // Load Google Maps on focus (lazy loading)
  const handleFocus = () => {
    if (!isLoaded) {
      loadGoogleMaps();
    }
  };

  useEffect(() => {
    if (isLoaded && window.google?.maps?.places) {
      setMapsReady(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (!mapsReady || !inputRef.current || autocompleteRef.current) return;

    autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: 'fr' },
      fields: ['place_id', 'formatted_address', 'geometry'],
      types: ['geocode', 'establishment'],
    });

    autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current?.getPlace();
      if (place?.formatted_address) {
        onChange(place.formatted_address, place.place_id);
      }
    });
  }, [mapsReady, onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        required={required}
        className="pl-10"
      />
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
    </div>
  );
};

export default AddressAutocomplete;
