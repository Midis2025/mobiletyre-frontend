import React, { useState } from 'react';
import { ChevronDown, ArrowRight, AlertCircle, CheckCircle, MapPin, Phone, User, Clock } from 'lucide-react';
import PostcodeAutocomplete from './PostcodeAutocomplete';
import MapPicker from './MapPicker';
import { servicesData } from '../data/servicesData';
import {
  submitAppointment,
  validateUKPhoneNumber,
  validateUKPostcode,
  validateTyreSize
} from '../api/appointmentService';

/**
 * LocationBookingForm Component
 * Complete booking form with location picker + map integration
 * 
 * Features:
 * - Postcode autocomplete input (free postcodes.io)
 * - Interactive map (free OpenStreetMap + Leaflet)
 * - Reverse geocoding for address (free Nominatim API)
 * - Full booking form with validation using appointmentService
 * - Strapi backend integration via appointmentService API
 * - Environment-based API URL configuration
 * - Comprehensive UK phone & postcode validation
 * - NO API KEYS NEEDED! Completely free!
 * 
 * @component
 * @returns {JSX.Element} Booking form component
 */
const LocationBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    postcode: '',
    address: '',
    latitude: 51.5074,
    longitude: -0.1278,
    serviceType: servicesData[0]?.title || '',
    tyreSize: '',
    timingSlot: 'As Soon As Possible'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showMap, setShowMap] = useState(false);

  /**
   * Handle postcode selection from autocomplete
   */
  const handlePostcodeSelect = (postcodeData) => {
    setFormData(prev => ({
      ...prev,
      postcode: postcodeData.postcode,
      latitude: postcodeData.latitude,
      longitude: postcodeData.longitude,
      address: `${postcodeData.postcode}, ${postcodeData.district}`
    }));
    setShowMap(true);
    setError('');
  };

  /**
   * Handle location change from map
   */
  const handleLocationChange = (locationData) => {
    setFormData(prev => ({
      ...prev,
      latitude: locationData.latitude,
      longitude: locationData.longitude,
      address: locationData.address
    }));
    setError('');
  };

  /**
   * Handle form input changes
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  /**
   * Validate form before submission
   * Uses validation helpers from appointmentService
   * Returns descriptive error messages for each validation failure
   */
  const validateForm = () => {
    // Validate full name
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      return false;
    }

    if (formData.fullName.trim().length < 2) {
      setError('Full name must be at least 2 characters');
      return false;
    }

    // Validate phone number using UK phone validation
    if (!formData.phoneNumber.trim()) {
      setError('Phone number is required');
      return false;
    }

    if (!validateUKPhoneNumber(formData.phoneNumber)) {
      setError('Please enter a valid UK phone number (e.g., +44 207 101 3856 or 02071013856)');
      return false;
    }

    // Validate postcode using UK postcode validation
    if (!formData.postcode.trim()) {
      setError('Please select a valid UK postcode');
      return false;
    }

    if (!validateUKPostcode(formData.postcode)) {
      setError('Invalid UK postcode format (e.g., GU11 3HY)');
      return false;
    }

    // Validate tyre size
    if (!formData.tyreSize.trim()) {
      setError('Tyre size is required');
      return false;
    }

    if (!validateTyreSize(formData.tyreSize)) {
      setError('Invalid tyre size format (e.g., 225/45 R17)');
      return false;
    }

    // Validate service type
    if (!formData.serviceType.trim()) {
      setError('Service type is required');
      return false;
    }

    // Validate timing slot
    if (!formData.timingSlot.trim()) {
      setError('Preferred timing is required');
      return false;
    }

    // Validate coordinates exist and are valid
    if (typeof formData.latitude !== 'number' || typeof formData.longitude !== 'number') {
      setError('Invalid location coordinates');
      return false;
    }

    return true;
  };

  /**
   * Submit appointment to Strapi backend using appointmentService
   * Handles all API communication, validation, error handling, and success states
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data before submission
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Prepare appointment data for submission
      const appointmentData = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        postcode: formData.postcode,
        address: formData.address,
        latitude: formData.latitude,
        longitude: formData.longitude,
        serviceType: formData.serviceType,
        tyreSize: formData.tyreSize,
        timingSlot: formData.timingSlot
      };

      // Submit to Strapi backend using API service
      const result = await submitAppointment(appointmentData);

      // Show success message
      setSuccess(true);
      console.log('Appointment submitted successfully:', result.data);
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        phoneNumber: '',
        postcode: '',
        address: '',
        latitude: 51.5074,
        longitude: -0.1278,
        serviceType: servicesData[0]?.title || '',
        tyreSize: '',
        timingSlot: 'As Soon As Possible'
      });
      setShowMap(false);

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      // Log error for debugging
      console.error('Appointment submission error:', err);
      
      // Display user-friendly error message
      const errorMessage = err.message ||
        'Failed to submit appointment. Please try again or contact us directly.';
      setError(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Form Header */}
      <div className="flex items-center gap-4">
        <div className="w-[6px] h-10 bg-[#FB7E10] rounded-full"></div>
        <div>
          <h2 className="text-2xl font-black tracking-tighter uppercase leading-none">
            INSTANT
          </h2>
          <h2 className="text-2xl font-black tracking-tighter uppercase leading-none text-[#FB7E10]">
            APPOINTMENT
          </h2>
        </div>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Error Alert */}
        {error && (
          <div className="flex items-start gap-3 bg-red-50 border-l-4 border-red-600 p-4 rounded-lg">
            <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 font-medium text-sm">{error}</p>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="flex items-start gap-3 bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-green-700 font-medium text-sm">
              ✓ Booking submitted successfully! Our team will contact you within 1 hour.
            </p>
          </div>
        )}

        {/* Personal Information Section */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xs font-black text-gray-700 uppercase tracking-[0.2em]">
            📋 Your Details
          </h3>

          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
              <User size={12} className="inline mr-1" /> Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all font-semibold outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
              <Phone size={12} className="inline mr-1" /> Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+44 (0) 207 101 3856"
              className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all font-semibold outline-none"
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xs font-black text-gray-700 uppercase tracking-[0.2em]">
            📍 Location Selection
          </h3>

          {/* Postcode Autocomplete */}
          <div>
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
              UK Postcode
            </label>
            <PostcodeAutocomplete
              onSelect={handlePostcodeSelect}
              selectedPostcode={formData.postcode}
              placeholder="Type postcode (e.g., GU11 3HY)"
            />
          </div>

          {/* Current Address Display */}
          {formData.address && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                Selected Address
              </p>
              <p className="text-sm font-semibold text-gray-900">{formData.address}</p>
            </div>
          )}

          {/* Map Picker */}
          {showMap && (
            <div className="space-y-3 p-4 bg-white border-2 border-gray-100 rounded-lg">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Refine Your Location on Map (Free - OpenStreetMap)
              </p>
              <MapPicker
                initialLat={formData.latitude}
                initialLng={formData.longitude}
                onLocationChange={handleLocationChange}
              />
            </div>
          )}
        </div>

        {/* Service Details Section */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xs font-black text-gray-700 uppercase tracking-[0.2em]">
            🔧 Service Details
          </h3>

          {/* Service Type */}
          <div>
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
              Service Type
            </label>
            <div className="relative">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 appearance-none text-gray-700 font-bold focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all outline-none"
              >
                {servicesData.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Tyre Size */}
          <div>
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
              Tyre Size (e.g., 225/45 R17)
            </label>
            <input
              type="text"
              name="tyreSize"
              value={formData.tyreSize}
              onChange={handleInputChange}
              placeholder="e.g. 225/45 R17"
              className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all font-semibold outline-none"
            />
          </div>

          {/* Timing Slot */}
          <div>
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
              <Clock size={12} className="inline mr-1" /> Preferred Timing
            </label>
            <div className="relative">
              <select
                name="timingSlot"
                value={formData.timingSlot}
                onChange={handleInputChange}
                className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 appearance-none text-gray-700 font-bold focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all outline-none"
              >
                <option>As Soon As Possible</option>
                <option>Morning (8AM - 12PM)</option>
                <option>Afternoon (12PM - 4PM)</option>
                <option>Evening (4PM - 8PM)</option>
                <option>Emergency (24/7)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0B1528] text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-slate-900 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              SUBMITTING...
            </>
          ) : (
            <>
              BOOK APPOINTMENT
              <ArrowRight size={20} strokeWidth={3} />
            </>
          )}
        </button>

        {/* Info Footer */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
          <p className="font-semibold">✓ We'll respond within 1 hour | ✓ Safe & Secure | ✓ No Hidden Charges</p>
        </div>
      </form>
    </div>
  );
};

export default LocationBookingForm;
