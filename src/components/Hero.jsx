import React from 'react';
import QuickAvailabilityForm from './QuickAvailabilityForm';

/**
 * Hero Component
 * Main landing page hero section with booking form
 * 
 * Features:
 * - Eye-catching headline and value proposition
 * - Call-to-action buttons (phone, WhatsApp)
 * - Integrated LocationBookingForm with:
 *   - Google Places Autocomplete (Premium Address Selection)
 *   - Real-time UK address suggestions
 *   - Strapi backend integration
 */
const Hero = () => {

  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-900 overflow-x-hidden md:overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
        <div className="sticky top-0 w-full h-[100dvh] flex justify-center items-center md:hidden">
          <img
            src="/images/mobile-tyre-champions-van1.jpeg"
            alt="Mobile Tyre Champions van mobile"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <img
          src="/images/mobile-tyre-champions-van1.jpeg"
          alt="Mobile Tyre Champions van"
          className="hidden md:block w-full h-full object-cover md:object-center"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-10 lg:px-20 relative z-10 py-10 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Column - Hero Text & CTAs */}
          <div className="text-white space-y-4 md:space-y-6 text-center flex flex-col items-center bg-black/40 md:bg-black/30 backdrop-blur-md md:backdrop-blur-md p-5 sm:p-8 rounded-[2rem] md:rounded-[2rem] md:p-6 border border-white/10 md:border-white/10 shadow-2xl md:shadow-2xl mt-4 md:mt-0">
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
              Stuck with a flat? Got a puncture on your way to work? We come straight to you 24/7 across <span className="text-white font-bold">Surrey, Hampshire</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 w-full max-w-sm md:max-w-none justify-center mx-auto">
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
            <div className="bg-white/95 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full max-w-md relative border border-white/20">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/40 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100/20 rounded-full -ml-12 -mb-12 blur-3xl"></div>

              {/* QuickAvailabilityForm Component */}
              <div className="relative z-10">
                <QuickAvailabilityForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;





