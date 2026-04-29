import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { validateUKPostcode } from '../api/appointmentService';

const QuickAvailabilityForm = () => {
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postcode.trim()) {
      setError('Please enter a postcode');
      return;
    }

    if (!validateUKPostcode(postcode)) {
      setError('Please enter a valid UK postcode (e.g., GU11 3HY)');
      return;
    }

    // Navigate to booking page with postcode
    navigate(`/booking?postcode=${encodeURIComponent(postcode.trim().toUpperCase())}`);
  };

  return (
    <div className="relative pt-2 md:pt-4">
      {/* Step Indicators */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center -mt-8 md:-mt-6 px-4">
        <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-2"></div>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-300 font-bold text-[10px] md:text-xs shadow-sm z-20">2</div>
      </div>

      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-1 leading-tight uppercase tracking-tight">
          Find A Mobile <br className="md:hidden" /> Tyre Fitter Near You
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value);
              setError('');
            }}
            placeholder="Enter postcode (e.g. GU11 or KT1)"
            className={`w-full pl-12 pr-4 py-4 bg-white border-2 ${error ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:border-yellow-400 focus:ring-0 transition-all font-semibold text-lg placeholder:text-gray-400 shadow-sm`}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm font-bold ml-2 animate-pulse">
            Please enter a valid postcode (e.g. GU11 or KT1 2AA)
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#FB7E10] hover:bg-orange-600 text-white py-4 rounded-full font-black text-base md:text-lg uppercase tracking-tight shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-3"
        >
          Check Availability Near You
        </button>
      </form>

      <p className="mt-6 text-center text-white text-[11px] font-bold tracking-tight opacity-90">
        Subject to availability. Terms & Conditions apply*
      </p>
    </div>
  );
};

export default QuickAvailabilityForm;
