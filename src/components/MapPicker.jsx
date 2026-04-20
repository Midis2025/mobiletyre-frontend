import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Loader, AlertCircle } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * MapPicker Component
 * OpenStreetMap + Leaflet integration (FREE, no API key needed!)
 * 
 * Features:
 * - Display map with draggable marker
 * - Click on map to set location
 * - Drag marker to adjust position
 * - Browser geolocation integration
 * - Reverse geocoding via Nominatim API (free)
 * - Mobile responsive
 * - Completely free - no Google Cloud setup needed!
 */
const MapPicker = ({ 
  initialLat = 51.5074,
  initialLng = -0.1278,
  onLocationChange,
  googleMapsApiKey, // Not needed anymore, kept for backward compatibility
  disabled = false
}) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);

  const [latitude, setLatitude] = useState(initialLat);
  const [longitude, setLongitude] = useState(initialLng);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Initialize Leaflet map
   */
  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    mapInstance.current = L.map(mapRef.current).setView([latitude, longitude], 14);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(mapInstance.current);

    // Create draggable marker
    createMarker(latitude, longitude);

    // Add map click listener
    mapInstance.current.on('click', (event) => {
      const { lat, lng } = event.latlng;
      updateLocation(lat, lng);
    });

    return () => {
      // Cleanup
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  /**
   * Create or update marker on map
   */
  const createMarker = (lat, lng) => {
    if (!mapInstance.current) return;

    // Remove existing marker
    if (markerInstance.current) {
      mapInstance.current.removeLayer(markerInstance.current);
    }

    // Create custom marker icon (orange with white border)
    const markerIcon = L.divIcon({
      html: `
        <div style="
          background-color: #FB7E10;
          border: 3px solid white;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ">
          <div style="
            background-color: white;
            width: 4px;
            height: 4px;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [28, 28],
      className: 'custom-marker'
    });

    // Create new marker
    markerInstance.current = L.marker([lat, lng], {
      icon: markerIcon,
      draggable: !disabled,
      title: 'Your Service Location'
    }).addTo(mapInstance.current);

    // Add marker drag listener
    if (!disabled) {
      markerInstance.current.on('drag', () => {
        const pos = markerInstance.current.getLatLng();
        updateLocation(pos.lat, pos.lng);
      });

      markerInstance.current.on('dragend', () => {
        const pos = markerInstance.current.getLatLng();
        updateLocation(pos.lat, pos.lng);
      });
    }
  };

  /**
   * Perform reverse geocoding using Nominatim API (free)
   * No API key needed!
   */
  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      
      if (data.address) {
        // Build readable address
        const { house_number, road, postcode, city, county } = data.address;
        const parts = [
          house_number && road ? `${house_number} ${road}` : road,
          postcode,
          city || county
        ].filter(Boolean);
        return parts.join(', ') || data.display_name;
      }
      
      return data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    } catch (err) {
      console.error('Reverse geocoding error:', err);
      return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    }
  };

  /**
   * Update location with coordinates
   */
  const updateLocation = async (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);

    // Get address from reverse geocoding
    const fullAddress = await reverseGeocode(lat, lng);
    setAddress(fullAddress);

    // Notify parent component
    if (onLocationChange) {
      onLocationChange({
        latitude: lat,
        longitude: lng,
        address: fullAddress
      });
    }

    // Update map center
    if (mapInstance.current) {
      mapInstance.current.setView([lat, lng], 14);
    }
  };

  /**
   * Use browser geolocation to get user's current location
   */
  const handleUseMyLocation = () => {
    setError('');
    setLoading(true);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        updateLocation(lat, lng);
        createMarker(lat, lng);
        setLoading(false);
      },
      (err) => {
        setError(
          err.code === 1
            ? 'Location permission denied. Please enable it in your browser settings.'
            : 'Unable to get your location. Please try again or select manually.'
        );
        setLoading(false);
      }
    );
  };

  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div className="relative rounded-xl overflow-hidden border-2 border-gray-100 shadow-md">
        <div
          ref={mapRef}
          className="w-full h-[350px] bg-gray-100"
        />

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-xl z-50">
            <Loader size={32} className="text-white animate-spin" />
          </div>
        )}

        {/* Use My Location Button */}
        {!disabled && (
          <button
            onClick={handleUseMyLocation}
            disabled={loading}
            className="absolute top-4 right-4 z-40 flex items-center gap-2 bg-white/95 backdrop-blur-md hover:bg-white text-[#FB7E10] px-4 py-2.5 rounded-lg font-bold shadow-lg transition-all active:scale-95 disabled:opacity-50"
            title="Use your current location"
          >
            <Navigation size={16} />
            <span className="hidden sm:inline text-sm">My Location</span>
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3">
          <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Location Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
        <div className="flex items-start gap-2">
          <MapPin size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              Selected Location
            </p>
            <p className="text-sm font-semibold text-gray-900 line-clamp-2">
              {address || 'No location selected'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Coordinates: {latitude.toFixed(4)}°, {longitude.toFixed(4)}°
            </p>
          </div>
        </div>
      </div>

      {/* Info Badge */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-xs text-green-800">
        <p className="font-semibold">✅ Free Map: OpenStreetMap + Leaflet (No API Key Needed!)</p>
      </div>
    </div>
  );
};

export default MapPicker;
