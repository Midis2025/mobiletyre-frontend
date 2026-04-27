import React, { useState } from 'react';
import { ChevronDown, ArrowRight, AlertCircle, CheckCircle, Phone, User, Clock } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import AddressField from './AddressField';
import {
  submitAppointment,
  validateUKPhoneNumber,
  validateTyreSize
} from '../api/appointmentService';

const LocationBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    postcode: '',
    address: '',
    town: '',
    latitude: null,
    longitude: null,
    serviceType: servicesData[0]?.title || '',
    tyreSize: '',
    timingSlot: 'As Soon As Possible',
    locationNotes: '',
  });

  const [addressError, setAddressError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleAddressSelect = (data) => {
    setFormData(prev => ({
      ...prev,
      postcode: data.postcode,
      address: data.fullAddress,
      town: data.city,
      latitude: data.latitude,
      longitude: data.longitude
    }));
    setAddressError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      return false;
    }

    if (formData.fullName.trim().length < 2) {
      setError('Full name must be at least 2 characters');
      return false;
    }

    if (!formData.phoneNumber.trim()) {
      setError('Phone number is required');
      return false;
    }

    if (!validateUKPhoneNumber(formData.phoneNumber)) {
      setError('Please enter a valid UK phone number (e.g., +44 207 101 3856 or 02071013856)');
      return false;
    }

    if (!formData.address && !formData.locationNotes.trim()) {
      setAddressError('Please search for an address or enter it manually below');
      return false;
    }

    if (!formData.tyreSize.trim()) {
      setError('Tyre size is required');
      return false;
    }

    if (!validateTyreSize(formData.tyreSize)) {
      setError('Invalid tyre size format (e.g., 225/45 R17)');
      return false;
    }

    if (!formData.serviceType.trim()) {
      setError('Service type is required');
      return false;
    }

    if (!formData.timingSlot.trim()) {
      setError('Preferred timing is required');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await submitAppointment(formData);

      setSuccess(true);
      
      setFormData({
        fullName: '',
        phoneNumber: '',
        postcode: '',
        address: '',
        town: '',
        latitude: null,
        longitude: null,
        serviceType: servicesData[0]?.title || '',
        tyreSize: '',
        timingSlot: 'As Soon As Possible',
        locationNotes: '',
      });
      setAddressError('');

      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error('Appointment submission error:', err);
      const errorMessage = err.message || 'Failed to submit appointment. Please try again or contact us directly.';
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
          <h3 className="text-xs font-black text-gray-700 uppercase tracking-[0.2em] mb-2">
            📍 Location Selection
          </h3>

          <AddressField 
            onAddressSelect={handleAddressSelect} 
            error={addressError}
          />

          <div className="space-y-2 pt-2">
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] ml-1">
              House No. & Street (or Full Address)
            </label>
            <textarea
              name="locationNotes"
              value={formData.locationNotes}
              onChange={handleInputChange}
              placeholder="e.g. 10 High Street, Flat 5..."
              rows={3}
              className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all font-semibold outline-none resize-none text-sm"
            />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider ml-1 italic">
              * Required if not selected from search above
            </p>
          </div>
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
      </form>
    </div>
  );
};

export default LocationBookingForm;
