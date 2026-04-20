import React, { useState, useEffect, useRef } from 'react';
import { Search, Loader, AlertCircle, MapPin } from 'lucide-react';

/**
 * PostcodeAutocomplete Component
 * Provides UK postcode autocomplete with suggestions from postcodes.io API
 * 
 * Features:
 * - Debounced API calls (300ms)
 * - Real-time postcode suggestions
 * - Shows admin district for context
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
        // Map results to show postcode and district
        const mappedResults = data.result.slice(0, 8).map(result => ({
          postcode: result.postcode,
          district: result.district || result.admin_district || 'UK',
          latitude: result.latitude,
          longitude: result.longitude,
          region: result.region || ''
        }));
        
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
   */
  const handleSelectPostcode = (suggestion) => {
    setInputValue(suggestion.postcode);
    setShowSuggestions(false);
    setSuggestions([]);

    // Pass data to parent component
    onSelect({
      postcode: suggestion.postcode,
      latitude: suggestion.latitude,
      longitude: suggestion.longitude,
      district: suggestion.district,
      region: suggestion.region
    });

    // Also update location if provided
    if (onLocationChange) {
      onLocationChange(suggestion.district || suggestion.postcode);
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
                className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-all ${
                  index === selectedIndex
                    ? 'bg-[#FB7E10]/10 border-l-4 border-[#FB7E10]'
                    : 'hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <MapPin size={16} className="text-[#FB7E10] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900">
                    {suggestion.postcode}
                  </div>
                  <div className="text-xs text-gray-500">
                    {suggestion.district} {suggestion.region && `• ${suggestion.region}`}
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
