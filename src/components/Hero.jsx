import React from 'react';
import LocationBookingForm from './LocationBookingForm';

/**
 * Hero Component
 * Main landing page hero section with booking form
 * 
 * Features:
 * - Eye-catching headline and value proposition
 * - Call-to-action buttons (phone, WhatsApp)
 * - Integrated LocationBookingForm with:
 *   - Postcode autocomplete (postcodes.io - FREE)
 *   - Interactive map (OpenStreetMap + Leaflet - FREE)
 *   - Reverse geocoding (Nominatim API - FREE)
 *   - Strapi backend integration
 * 
 * NO API KEYS NEEDED! Completely free to use!
 */
const Hero = () => {

  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Untitled design (2).jpg.jpeg"
          alt="Tire background"
          className="w-full h-full object-cover opacity-60 md:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 md:via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-10 lg:px-20 relative z-10 py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Column - Hero Text & CTAs */}
          <div className="text-white space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 bg-[#33251a] border border-[#fb7e10]/30 px-3 md:px-4 py-1.5 rounded-full">
              <span className="text-orange-500">⚡</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-orange-400">
                UK'S FAST MOBILE TYRE SERVICE – 24/7
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              The Help You Need, Exactly <br className="hidden lg:block" />
              <span className="text-[#FB7E10]"> Where You Are.</span>
            </h1>

            <p className="max-w-md text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Stuck with a flat? Got a puncture on your way to work? We come straight to you, any time of the day or night, anywhere across Surrey and Hampshire.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 w-full max-w-sm md:max-w-none">
              <a
                href="tel:02071013856"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-orange-600 transition-all border-2 border-transparent"
              >
                Call Now: 0207 101 3856
              </a>
              <a
                href="https://wa.me/447494024653"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#22C55E] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-green-600 transition-all border-2 border-transparent"
              >
                Whatsapp
              </a>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full max-w-md relative overflow-hidden border border-white/20 max-h-[90vh] overflow-y-auto">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/40 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100/20 rounded-full -ml-12 -mb-12 blur-3xl"></div>

              {/* LocationBookingForm Component */}
              <div className="relative z-10">
                <LocationBookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;





