import React, { useState, useRef } from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { MapPin, Loader, AlertCircle } from 'lucide-react';

const LIBRARIES = ['places'];

const AddressField = ({ onAddressSelect, error }) => {
  const [inputValue, setInputValue] = useState('');
  const autocompleteRef = useRef(null);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || '',
    libraries: LIBRARIES,
  });

  if (!apiKey) {
    return (
      <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg flex items-center gap-3">
        <AlertCircle className="text-orange-500" size={20} />
        <p className="text-sm text-orange-700 font-medium">Google Maps API Key not found. Please restart your dev server or check .env file.</p>
      </div>
    );
  }

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      
      if (!place.geometry || !place.address_components) {
        return;
      }

      const addressComponents = place.address_components;
      
      const getComponent = (type, useShort = false) => {
        const comp = addressComponents.find(c => c.types.includes(type));
        return comp ? (useShort ? comp.short_name : comp.long_name) : '';
      };

      const extractedData = {
        fullAddress: place.formatted_address,
        postcode: getComponent('postal_code'),
        city: getComponent('postal_town') || getComponent('locality'),
        street: getComponent('route'),
        houseNumber: getComponent('street_number'),
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      };

      setInputValue(place.formatted_address);
      onAddressSelect(extractedData);
    }
  };

  if (loadError) {
    return (
      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-center gap-3">
        <AlertCircle className="text-red-500" size={20} />
        <p className="text-sm text-red-700 font-medium">Error loading Google Maps API. Please check your API key.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
        <Loader className="animate-spin text-orange-500" size={20} />
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Loading Address Autocomplete...</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
        <MapPin size={12} className="inline mr-1" /> Enter Postcode or Address
      </label>
      
      <div className="relative group">
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          options={{
            componentRestrictions: { country: "gb" },
            types: ["address"],
            fields: ["address_components", "geometry", "formatted_address"]
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search address (e.g. GU11 3HY or 10 High Street)"
            className={`w-full bg-white border-2 ${error ? 'border-red-500' : 'border-transparent'} rounded-xl px-4 py-3.5 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all font-semibold outline-none shadow-sm group-hover:border-gray-200 focus:bg-white`}
          />
        </Autocomplete>
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
          <MapPin size={18} className="text-[#FB7E10]" />
        </div>
      </div>
      
      {error && (
        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1">{error}</p>
      )}
    </div>
  );
};

export default AddressField;
