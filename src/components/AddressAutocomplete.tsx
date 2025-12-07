import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google?.maps?.places) {
      setIsLoaded(true);
      return;
    }

    // Wait for Google Maps to load
    const checkLoaded = setInterval(() => {
      if (window.google?.maps?.places) {
        setIsLoaded(true);
        clearInterval(checkLoaded);
      }
    }, 100);

    return () => clearInterval(checkLoaded);
  }, []);

  useEffect(() => {
    if (!isLoaded || !inputRef.current || autocompleteRef.current) return;

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
  }, [isLoaded, onChange]);

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
        placeholder={placeholder}
        required={required}
        className="pl-10"
      />
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
    </div>
  );
};

export default AddressAutocomplete;
