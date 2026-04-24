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
    address: '',
    latitude: null,
    longitude: null,
    location: '', // town — used only for UI display, not sent to Strapi
    serviceType: servicesData[0]?.title || '',
    tyreSize: '',
    timingSlot: 'As Soon As Possible',
    locationNotes: '',
  });

  const [searchPostcode, setSearchPostcode] = useState('');
  const [fetchingAddresses, setFetchingAddresses] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleGetAddress = async () => {
    if (!searchPostcode.trim()) {
      setAddressError('Please enter a valid postcode');
      return;
    }

    setFetchingAddresses(true);
    setAddressError('');
    setAddresses([]);
    setSelectedAddress('');

    const cleanPostcode = searchPostcode.trim().toUpperCase();
    setFormData(prev => ({
      ...prev,
      address: '',
      postcode: cleanPostcode,
      latitude: null,
      longitude: null,
      location: '',
    }));

    try {
      // ── Priority 1: Backend API ──────────────────────────────────────
      const response = await fetch(`/api/postcode?postcode=${encodeURIComponent(cleanPostcode)}`);
      if (!response.ok) throw new Error('Backend unavailable');
      const data = await response.json();

      if (data?.addresses?.length > 0) {
        setAddresses(data.addresses);
        setFormData(prev => ({
          ...prev,
          location: data.postcodeData?.town || '',
          latitude: data.postcodeData?.latitude ?? null,
          longitude: data.postcodeData?.longitude ?? null,
        }));
        setFetchingAddresses(false);
        return;
      }
      throw new Error('No addresses in backend response');

    } catch (_backendErr) {
      // ── Priority 2: Free public APIs (postcodes.io + Overpass) ───────
      try {
        // Step A — Get lat/lon and town from postcodes.io
        const pcRes = await fetch(
          `https://api.postcodes.io/postcodes/${encodeURIComponent(cleanPostcode)}`
        );
        if (!pcRes.ok) throw new Error('Invalid postcode');
        const pcData = await pcRes.json();

        if (pcData.status !== 200 || !pcData.result) {
          setAddressError('Invalid or unknown UK postcode. Please check and try again.');
          setFetchingAddresses(false);
          return;
        }

        const { latitude, longitude, admin_district, admin_ward } = pcData.result;
        const town = admin_district || admin_ward || cleanPostcode;

        // Step B — Query Overpass API for buildings with house numbers near the postcode
        // This is the key: we get real property-level addresses (house number + street name)
        const radius = 300; // metres around the postcode centroid
        const overpassQuery = `
          [out:json][timeout:15];
          (
            node["addr:housenumber"](around:${radius},${latitude},${longitude});
            way["addr:housenumber"](around:${radius},${latitude},${longitude});
          );
          out body;
        `;

        const overpassRes = await fetch('https://overpass-api.de/api/interpreter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `data=${encodeURIComponent(overpassQuery)}`
        });
        const overpassData = await overpassRes.json();

        // Step C — Format addresses from OSM tags
        const seen = new Set();
        const rawList = [];

        for (const el of overpassData.elements || []) {
          const tags = el.tags || {};
          const houseNum = tags['addr:housenumber'];
          const street = tags['addr:street'];
          const flatUnit = tags['addr:unit'] || tags['addr:flats'];

          if (!houseNum || !street) continue;

          // Expand flat ranges like "1-6" → Flat 1, Flat 2 … Flat 6
          if (flatUnit && /^\d+-\d+$/.test(flatUnit)) {
            const [from, to] = flatUnit.split('-').map(Number);
            for (let f = from; f <= to && f - from < 30; f++) {
              const addr = `Flat ${f}, ${houseNum} ${street}`;
              if (!seen.has(addr)) { seen.add(addr); rawList.push(addr); }
            }
          } else if (flatUnit) {
            const addr = `Flat ${flatUnit}, ${houseNum} ${street}`;
            if (!seen.has(addr)) { seen.add(addr); rawList.push(addr); }
          } else {
            const addr = `${houseNum} ${street}`;
            if (!seen.has(addr)) { seen.add(addr); rawList.push(addr); }
          }
        }

        // Sort numerically by the first number in the address
        rawList.sort((a, b) => {
          const na = parseInt(a.match(/\d+/)?.[0] || '0', 10);
          const nb = parseInt(b.match(/\d+/)?.[0] || '0', 10);
          return na - nb;
        });

        if (rawList.length > 0) {
          setAddresses(rawList);
          setFormData(prev => ({ ...prev, location: town, latitude, longitude }));
          setFetchingAddresses(false);
          return;
        }

        // Step D — Overpass returned nothing; widen radius to 600 m
        const widerQuery = `
          [out:json][timeout:15];
          (
            node["addr:housenumber"](around:600,${latitude},${longitude});
            way["addr:housenumber"](around:600,${latitude},${longitude});
          );
          out body;
        `;
        const widerRes = await fetch('https://overpass-api.de/api/interpreter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `data=${encodeURIComponent(widerQuery)}`
        });
        const widerData = await widerRes.json();
        const widerList = [];

        for (const el of widerData.elements || []) {
          const tags = el.tags || {};
          const houseNum = tags['addr:housenumber'];
          const street = tags['addr:street'];
          if (!houseNum || !street) continue;
          const addr = `${houseNum} ${street}`;
          if (!seen.has(addr)) { seen.add(addr); widerList.push(addr); }
        }

        widerList.sort((a, b) => {
          const na = parseInt(a.match(/\d+/)?.[0] || '0', 10);
          const nb = parseInt(b.match(/\d+/)?.[0] || '0', 10);
          return na - nb;
        });

        if (widerList.length > 0) {
          setAddresses(widerList);
          setFormData(prev => ({ ...prev, location: town, latitude, longitude }));
        } else {
          setAddressError(
            'No house addresses found near this postcode. Please enter your address manually or try a nearby postcode.'
          );
        }

      } catch (fallbackErr) {
        console.error('Address lookup error:', fallbackErr);
        setAddressError('Could not fetch addresses. Please check the postcode and try again.');
      }
    }

    setFetchingAddresses(false);
  };


  const handleAddressSelect = (e) => {
    const val = e.target.value;
    setSelectedAddress(val);
    setFormData(prev => ({ ...prev, address: val }));
    setError('');
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

    if (!formData.address) {
      setError('Please select an address');
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
        postcode:      formData.postcode,
        address:       formData.address,
        latitude:      formData.latitude,
        longitude:     formData.longitude,
        serviceType:   formData.serviceType,
        tyreSize:      formData.tyreSize,
        timingSlot:    formData.timingSlot,
        bookingStatus: 'Pending',
        locationNotes: formData.locationNotes || ''
      };

      const result = await submitAppointment(appointmentData);

      setSuccess(true);
      console.log('Appointment submitted successfully:', result.data);

      setFormData({
        fullName: '',
        phoneNumber: '',
        postcode: '',
        address: '',
        latitude: null,
        longitude: null,
        location: '',
        serviceType: servicesData[0]?.title || '',
        tyreSize: '',
        timingSlot: 'As Soon As Possible',
        locationNotes: '',
      });
      setSearchPostcode('');
      setAddresses([]);
      setSelectedAddress('');

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
          <h3 className="text-xs font-black text-gray-700 uppercase tracking-[0.2em]">
            📍 Location Selection
          </h3>

          <div className="space-y-3">
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
              UK Postcode
            </label>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={searchPostcode}
                onChange={(e) => setSearchPostcode(e.target.value)}
                placeholder="Enter postcode (e.g. SL5 0AB)"
                className="w-full bg-[#EAF2FC] border border-gray-200 rounded-lg px-4 py-3 focus:border-[#FB7E10] transition-all outline-none text-gray-800"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleGetAddress())}
              />
              <button
                type="button"
                onClick={handleGetAddress}
                disabled={fetchingAddresses || !searchPostcode}
                className="w-full bg-[#5D644F] text-white py-3 rounded-md font-semibold uppercase tracking-wider hover:bg-[#4A513E] transition-colors disabled:opacity-70 flex justify-center items-center h-12 shadow-sm"
              >
                {fetchingAddresses ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : 'GET ADDRESS'}
              </button>
            </div>
          </div>

          {addressError && (
            <p className="text-sm text-red-500 font-medium ml-1">{addressError}</p>
          )}

          <div className="pt-1">
            <div className="relative">
              <select
                value={selectedAddress}
                onChange={handleAddressSelect}
                disabled={addresses.length === 0}
                className={`w-full bg-white border border-gray-200 rounded-md px-4 py-3 appearance-none text-gray-700 focus:border-[#FB7E10] transition-all outline-none ${addresses.length === 0 ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'cursor-pointer shadow-sm'}`}
              >
                <option value="">Please select your address...</option>
                {addresses.map((addr, idx) => (
                  <option key={idx} value={addr}>{addr}</option>
                ))}
              </select>
              <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 ${addresses.length === 0 ? 'text-gray-300' : 'text-gray-600'} pointer-events-none`} size={18} />
            </div>
          </div>

          {/* Location field mapped from postcodeData.town */}
          {formData.location && formData.address && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                Selected Location
              </p>
              <p className="text-sm font-semibold text-gray-900">{formData.address}</p>
              <p className="text-xs font-medium text-gray-600 mt-1">{formData.location}</p>
            </div>
          )}

          {/* Location Notes */}
          <div>
            <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
              Location Notes <span className="font-normal normal-case text-gray-400"></span>
            </label>
            <textarea
              name="locationNotes"
              value={formData.locationNotes}
              onChange={handleInputChange}
              placeholder="e.g. Behind the main gate, opposite the red door, park on the driveway..."
              rows={3}
              className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-3 placeholder-gray-400 focus:ring-4 focus:ring-orange-500/10 focus:border-[#FB7E10] transition-all font-semibold outline-none resize-none text-sm"
            />
            <p className="text-[10px] text-gray-400 mt-1 ml-1">Help our fitter find you quickly by adding any extra directions.</p>
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
