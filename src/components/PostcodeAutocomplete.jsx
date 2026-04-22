import React, { useState, useEffect, useRef } from 'react';
import { Search, Loader, AlertCircle, MapPin } from 'lucide-react';

/**
 * PostcodeAutocomplete Component
 * Provides UK postcode autocomplete with suggestions from postcodes.io API
 * 
 * Features:
 * - Debounced API calls (300ms)
 * - Real-time postcode suggestions with proper place names
 * - Priority field mapping: post_town → parish → admin_ward
 * - Shows postcode, town/city, and county
 * - Reverse geocoding data retrieval
 */
const PostcodeAutocomplete = ({ 
  onSelect, 
  onLocationChange,
  selectedPostcode = null,
  placeholder = "Enter UK postcode (e.g., GU11)"
}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const debounceTimer = useRef(null);
  const suggestionsRef = useRef(null);

  /**
   * Extract the correct town using priority field mapping
   * Priority: post_town → parish → admin_ward
   * This ensures we display the postal town (e.g., Aldershot), not administrative districts
   *
   * Returns only the first part if multiple values are comma-separated
   */
  const getTown = (result) => {
    // Helper to clean and extract first part
    const cleanValue = (val) => {
      if (!val) return '';
      return String(val).split(',')[0].trim();
    };
    // Priority: post_town -> bua (built-up area) -> parish -> parliamentary_constituency -> admin_ward
    // `bua` and `parliamentary_constituency` often contain the expected postal town (e.g., Aldershot)
    const postTown = cleanValue(result.post_town);
    const bua = cleanValue(result.bua);
    const parish = cleanValue(result.parish);
    const parliamentary = cleanValue(result.parliamentary_constituency);
    const adminWard = cleanValue(result.admin_ward);

    if (postTown) return postTown;
    if (bua) return bua;
    if (parish) return parish;
    if (parliamentary) return parliamentary;
    if (adminWard) return adminWard;

    return '';
  };

  /**
   * Fetch postcode suggestions from postcodes.io
   * API: https://api.postcodes.io/postcodes?q={query}
   */
  const fetchPostcodeSuggestions = async (query) => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://api.postcodes.io/postcodes?q=${encodeURIComponent(query.toUpperCase())}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch postcode suggestions');
      }

      const data = await response.json();
      
      if (data.status === 200 && data.result) {
        // Map results with proper place name field mapping
        const mappedResults = data.result.slice(0, 8).map(result => {
          // Debug: Log the raw API response for first result (no admin_district usage)
          if (data.result.indexOf(result) === 0) {
            console.log('API Response for first postcode:', {
              postcode: result.postcode,
              parish: result.parish,
              post_town: result.post_town,
              admin_ward: result.admin_ward,
              admin_county: result.admin_county
            });
          }

          const town = getTown(result);
          // Prefer explicit admin_county for county value (Postcodes.io authoritative)
          const county = result.admin_county || result.region || '';
          // Build a clean formatted address using postcode → town mapping (do NOT use reverse geocoding)
          const formattedAddress = county
            ? `${town}, ${county}, ${result.postcode}`
            : `${town}, ${result.postcode}`;

          return {
            postcode: result.postcode,
            town: town,
            county: county,
            address: formattedAddress,
            latitude: result.latitude,
            longitude: result.longitude,
            // Store additional raw fields if needed (do not use admin_district)
            parish: result.parish,
            post_town: result.post_town,
            admin_ward: result.admin_ward,
            bua: result.bua,
            parliamentary_constituency: result.parliamentary_constituency,
            region: result.region || ''
          };
        });
        
        setSuggestions(mappedResults);
        setShowSuggestions(true);
        setSelectedIndex(-1);
      } else {
        setSuggestions([]);
        setError('No postcodes found. Please check and try again.');
      }
    } catch (err) {
      console.error('Postcode fetch error:', err);
      setError('Error fetching postcodes. Please try again.');
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle input change with debouncing
   * Debounce delay: 300ms
   */
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setError('');

    // Clear previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new debounced timer
    debounceTimer.current = setTimeout(() => {
      fetchPostcodeSuggestions(value);
    }, 300);
  };

  /**
   * Handle postcode selection from suggestions
   * Returns structured data with correct place name and county
   */
  const handleSelectPostcode = (suggestion) => {
    setInputValue(suggestion.postcode);
    setShowSuggestions(false);
    setSuggestions([]);

    // Pass structured data to parent component (town-first, no admin_district)
    onSelect({
      postcode: suggestion.postcode,
      latitude: suggestion.latitude,
      longitude: suggestion.longitude,
      town: suggestion.town,
      county: suggestion.county || '',
      address: suggestion.address,
      // Backward compatibility: provide `district` as the town
      district: suggestion.town,
      region: suggestion.region
    });

    // Also update location if provided
    if (onLocationChange) {
      const locationDisplay = suggestion.county
        ? `${suggestion.town}, ${suggestion.county}`
        : suggestion.town;
      onLocationChange(locationDisplay);
    }
  };

  /**
   * Handle keyboard navigation in suggestions
   */
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelectPostcode(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setShowSuggestions(false);
        break;
      default:
        break;
    }
  };

  /**
   * Close suggestions when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /**
   * Scroll selected item into view
   */
  useEffect(() => {
    if (selectedIndex >= 0 && suggestionsRef.current) {
      const selectedElement = suggestionsRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="relative w-full" ref={suggestionsRef}>
      {/* Input Container */}
      <div className="relative">
        <div className="relative flex items-center">
          {/* Search Icon */}
          <MapPin 
            size={18} 
            className="absolute left-4 text-[#FB7E10] pointer-events-none"
          />

          {/* Input Field */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (suggestions.length > 0) setShowSuggestions(true);
            }}
            placeholder={placeholder}
            className="w-full bg-[#EAEEF3]/50 border-2 border-transparent rounded-xl pl-10 pr-4 py-3.5 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] focus:bg-white transition-all font-semibold outline-none"
          />

          {/* Loading Spinner */}
          {loading && (
            <Loader 
              size={18} 
              className="absolute right-4 text-[#FB7E10] animate-spin"
            />
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-600 text-sm font-medium">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="max-h-64 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <button
                key={`${suggestion.postcode}-${index}`}
                data-index={index}
                onClick={() => handleSelectPostcode(suggestion)}
                className={`w-full px-4 py-3 flex items-start gap-3 text-left transition-all ${
                  index === selectedIndex
                    ? 'bg-[#FB7E10]/10 border-l-4 border-[#FB7E10]'
                    : 'hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <MapPin size={16} className="text-[#FB7E10] flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900">
                    {suggestion.postcode}
                  </div>
                  <div className="text-sm text-gray-700 font-semibold">
                    {suggestion.town}{suggestion.county ? `, ${suggestion.county}` : ''}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {showSuggestions && !loading && suggestions.length === 0 && inputValue.trim().length > 0 && !error && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-100 rounded-xl shadow-lg p-4 text-center text-gray-500 text-sm z-50">
          <Search size={16} className="mx-auto mb-2 opacity-50" />
          No postcodes found for "{inputValue}"
        </div>
      )}
    </div>
  );
};

export default PostcodeAutocomplete;
