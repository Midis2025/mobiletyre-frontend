import React, { useState } from 'react';
import { ChevronDown, ArrowRight, AlertCircle, CheckCircle, Phone, User, Clock } from 'lucide-react';
import { servicesData } from '../data/servicesData';
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
    town: '',
    latitude: null,
    longitude: null,
    serviceType: servicesData[0]?.title || '',
    tyreSize: '',
    timingSlot: 'As Soon As Possible',
    locationNotes: '',
  });

  const [searchPostcode, setSearchPostcode] = useState('');
  const [fetchingPostcode, setFetchingPostcode] = useState(false);
  const [hasDetected, setHasDetected] = useState(false);
  const [postcodeError, setPostcodeError] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleGetAddress = async () => {
    if (!searchPostcode.trim()) {
      setPostcodeError('Please enter a valid postcode');
      return;
    }

    setFetchingPostcode(true);
    setPostcodeError('');
    setHasDetected(false);

    const cleanPostcode = searchPostcode.trim().toUpperCase();
    setSearchPostcode(cleanPostcode);

    try {
      const pcRes = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(cleanPostcode)}`);
      if (!pcRes.ok) {
        setPostcodeError('Invalid postcode');
        setFetchingPostcode(false);
        return;
      }
      
      const pcData = await pcRes.json();
      const res = pcData.result;
      const outcode = res?.outcode;
      
      // 1. Get Primary Town (Checking both post_town and postal_town)
      let postTown = res?.post_town || res?.postal_town || '';
      
      if (!postTown && outcode) {
        try {
          const outRes = await fetch(`https://api.postcodes.io/outcodes/${encodeURIComponent(outcode)}`);
          if (outRes.ok) {
            const outData = await outRes.json();
            // outcodes endpoint returns post_town as an array
            const outTowns = outData.result?.post_town;
            if (Array.isArray(outTowns) && outTowns.length > 0) {
              postTown = outTowns[0];
            }
          }
        } catch (e) { console.warn('Outcode lookup failed'); }
      }

      // 2. Get Specific Area (Ward or Parish)
      // We strictly avoid "admin_district" to prevent the "Rushmoor" issue
      let area = res?.admin_ward || res?.parish || '';
      
      // If area is the same as the administrative district (e.g. Rushmoor), we ignore it
      if (area.toLowerCase() === res?.admin_district?.toLowerCase()) {
        area = '';
      }

      // 3. Fallback to Nominatim if both are still missing
      if (!postTown && !area) {
        try {
          const nomSearchRes = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cleanPostcode)}&addressdetails=1&limit=1`,
            { headers: { 'User-Agent': 'TyreServiceBookingApp/1.0' } }
          );
          if (nomSearchRes.ok) {
            const nomData = await nomSearchRes.json();
            if (nomData.length > 0) {
              const addr = nomData[0].address;
              area = addr.suburb || addr.neighbourhood || '';
              postTown = addr.city || addr.town || addr.village || '';
            }
          }
        } catch (e) { console.warn('Nominatim search failed'); }
      }

      // 4. Final Display Logic - Strictly show Town Name only (e.g., "Aldershot")
      let displayLocation = postTown || area || 'Manual Entry Required';
      
      setFormData(prev => ({
        ...prev,
        postcode: cleanPostcode,
        town: displayLocation,
        latitude: res?.latitude || null,
        longitude: res?.longitude || null
      }));
      setHasDetected(true);

    } catch (err) {
      console.error('Postcode lookup error:', err);
      // Even on error, we want to show the postcode the user entered
      setFormData(prev => ({
        ...prev,
        postcode: cleanPostcode,
        town: 'Manual Entry'
      }));
      setHasDetected(true); 
    } finally {
      setFetchingPostcode(false);
    }
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

    if (!formData.postcode) {
      setError('Please enter and detect your postcode first');
      return false;
    }

    if (!formData.locationNotes) {
      setError('Please enter your full address (House No. & Street)');
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
      const appointmentData = {
        fullName:      formData.fullName,
        phoneNumber:   formData.phoneNumber,
        serviceType:   formData.serviceType,
        tyreSize:      formData.tyreSize,
        timingSlot:    formData.timingSlot,
        postcode:      formData.postcode,
        town:          formData.town,
        latitude:      formData.latitude,
        longitude:     formData.longitude,
        locationNotes: formData.locationNotes
      };

      const result = await submitAppointment(appointmentData);

      setSuccess(true);
      
      setFormData({
        fullName: '',
        phoneNumber: '',
        postcode: '',
        town: '',
        latitude: null,
        longitude: null,
        serviceType: servicesData[0]?.title || '',
        tyreSize: '',
        timingSlot: 'As Soon As Possible',
        locationNotes: '',
      });
      setSearchPostcode('');
      setHasDetected(false);

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
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-black text-gray-700 uppercase tracking-[0.2em]">
              📍 Location Selection
            </h3>
            {hasDetected && (
              <button 
                type="button"
                onClick={() => { setHasDetected(false); setSearchPostcode(''); setFormData(prev => ({ ...prev, postcode: '', town: '', locationNotes: '' })); }}
                className="text-[10px] font-bold text-[#FB7E10] uppercase tracking-wider hover:underline"
              >
                Change Postcode
              </button>
            )}
          </div>

          {/* Postcode Input */}
          {!hasDetected ? (
            <div className="space-y-3">
              <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                UK Postcode
              </label>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={searchPostcode}
                  onChange={(e) => setSearchPostcode(e.target.value.toUpperCase())}
                  placeholder="Enter postcode (e.g. SL5 0AB)"
                  className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all font-semibold outline-none"
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleGetAddress())}
                />
                <button
                  type="button"
                  onClick={handleGetAddress}
                  disabled={fetchingPostcode || !searchPostcode}
                  className="w-full bg-[#FB7E10] text-white py-3.5 rounded-xl font-black uppercase tracking-[0.15em] hover:bg-orange-600 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex justify-center items-center h-12"
                >
                  {fetchingPostcode ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : 'GET ADDRESS'}
                </button>
              </div>
              {postcodeError && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1">{postcodeError}</p>
              )}
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Detected Area */}
              <div className="p-3 bg-white border-2 border-orange-100 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span role="img" aria-label="area" className="text-white text-xs font-bold">📍</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-orange-600 uppercase tracking-wider leading-none mb-1">
                    Detected Area
                  </p>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    {formData.town}, {formData.postcode}
                  </p>
                </div>
              </div>

              {/* Manual Address Input */}
              <div className="space-y-2">
                <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] ml-1">
                  Enter Full Address (House No. & Street)
                </label>
                <textarea
                  name="locationNotes"
                  value={formData.locationNotes}
                  onChange={handleInputChange}
                  placeholder="e.g. 10 High Street, Flat 5..."
                  rows={3}
                  className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all font-semibold outline-none resize-none text-sm"
                />
              </div>
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
      </form>
    </div>
  );
};

export default LocationBookingForm;
