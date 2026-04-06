import React from 'react';

const Features = () => {
  const brandLogos = [
    // Ford
    { src: "https://www.carlogos.org/car-logos/ford-logo-2003-640.png", name: "Ford" },
    // Volkswagen
    { src: "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356", name: "Volkswagen" },
    // Toyota
    { src: "https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png", name: "Toyota" },
   // Renault
    { src: "https://w7.pngwing.com/pngs/270/984/png-transparent-renault-5-renault-16-renault-4-car-renault-logo-angle-text-rectangle-thumbnail.png", name: "Renault" },
    // Peugeot
    { src: "https://www.stellantis.com/content/dam/stellantis-corporate/brands/peugeot/peugeot.png", name: "Peugeot" },
    // Skoda
    { src: "https://cdn.skoda-storyboard.com/2023/07/Skoda_Wordmark_RGB_Emerald_Green_e2c8d407-1440x473.png", name: "Skoda" },
    // SEAT
    { src: "https://www.seat.co.uk/content/dam/countries/gb/seat-website/global-header/global-navigation/seat-logo/seat-s-logo.svg", name: "SEAT" },
    // --- Popular UK Models ---
    // Kia Sportage
    // --- Premium Brands ---
    // BMW
    { src: "https://www.carlogos.org/car-logos/bmw-logo.png", name: "BMW" },
    // Mercedes-Benz
    { src: "https://www.carlogos.org/car-logos/mercedes-benz-logo.png", name: "Mercedes-Benz" },
    // Porsche
    { src: "https://www.carlogos.org/car-logos/porsche-logo.png", name: "Porsche" },
    // Lexus
    { src: "https://www.carlogos.org/car-logos/lexus-logo.png", name: "Lexus" },
    // --- Luxury Brands ---
    // Bentley
    { src: "https://www.carlogos.org/car-logos/bentley-logo-2002-640.png", name: "Bentley" },
    // Rolls-Royce
    { src: "https://www.carlogos.org/logo/Rolls-Royce-logo-640x550.jpg", name: "Rolls-Royce" },
    // Jaguar
    { src: "https://www.carlogos.org/car-logos/jaguar-logo-2021-640.png", name: "Jaguar" },
    // Mini
    { src: "https://www.carlogos.org/logo/Mini-logo-2001-640x270.jpg", name: "Mini" },
    // Aston Martin
    { src: "https://www.carlogos.org/logo/Aston-Martin-logo-2003-640x286.jpg", name: "Aston Martin" },
  ];

  return (
    <div className="bg-[#f8fafc] py-16 md:py-24 px-4 sm:px-10 lg:px-20 overflow-hidden relative border-y border-slate-100/50">
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Premium Brands Trust Section */}
      <div className="relative z-10 w-full mb-8 md:mb-12">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/60 px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Official Partners</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9] mb-4">
            Trusted by the <span className="text-[#FB7E10]">Best in Motion</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest max-w-lg">
            Serving the UK's most popular car brands — on every road, every day
          </p>
        </div>

        {/* The Marquee Track */}
        <div className="relative group max-w-[1400px] mx-auto">
          {/* Solid Container for Marquee - Highlighted orange track */}
          <div className="absolute inset-x-[-100vw] inset-y-0 bg-[#FB7E10] z-0"></div>

          {/* Scrolling edges fade */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#FB7E10] via-[#FB7E10]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#FB7E10] via-[#FB7E10]/80 to-transparent z-10 pointer-events-none"></div>

          {/* Single Row: Forward Motion */}
          <div className="flex w-max animate-marquee-slow items-center py-10 relative z-10">
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <div
                key={`r1-${i}`}
                className="mx-6 md:mx-10 flex flex-col items-center justify-center bg-white px-6 py-5 md:px-8 md:py-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 min-w-[110px] md:min-w-[140px]"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`h-10 md:h-14 w-auto object-contain transition-all duration-500 hover:scale-110 ${logo.name.includes('Kia') ? 'brightness-0' : ''}`}
                />
                <span className="mt-3 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-10 md:mb-16 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-black max-w-xl uppercase">
          Precision Engineering.<br className="hidden sm:block" />Roadside Reality.
        </h2>
        <div className="w-16 h-1.5 bg-[#FB7E10] mt-4"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Ultra-Rapid Deployment (Span 2) */}
        <div className="lg:col-span-2 bg-[#FB7E10] rounded-2xl md:rounded-3xl p-6 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-96 h-96 text-white">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-orange-400">
              <svg className="w-6 h-6 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 12L16 10" />
                <path d="M12 7V12" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">Ultra-Rapid Deployment</h3>
            <p className="text-white/90 font-medium leading-relaxed max-w-md">
              Our proprietary dispatch algorithm routes the nearest technician to your GPS coordinates in seconds. No waiting on hold, just instant action.
            </p>
          </div>
        </div>

        {/* Card 2: Expertise Guaranteed */}
        <div className="bg-[#0B1528] rounded-2xl md:rounded-3xl p-6 md:p-10 text-white hover:shadow-xl transition-all">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 md:mb-8">
            <svg className="w-6 h-6 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 15L15 21L21 21L18 15" />
              <path d="M9 15L6 21L0 21L3 15" />
              <circle cx="12" cy="9" r="6" />
              <path d="M12 6L12 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Expertise Guaranteed</h3>
          <p className="text-gray-400 font-medium leading-relaxed mb-10">
            Every technician is IMI certified with a minimum of 5 years field experience in luxury and performance vehicles.
          </p>
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B1528] bg-gray-600 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=crew${i}`} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: 24/7 Kinetic Support */}
        <div className="bg-[#FB7E10] rounded-2xl md:rounded-3xl p-6 md:p-10 hover:shadow-lg transition-all">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 md:mb-8 border border-orange-400">
            <svg className="w-6 h-6 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6V12L16 14" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">24/7 Kinetic Support</h3>
          <p className="text-white/90 font-medium leading-relaxed">
            Christmas, New Year's, or 3 AM on a Tuesday. We never sleep because the roads never close.
          </p>
        </div>

        {/* Card 4: Quote (Span 2) */}
        <div className="lg:col-span-2 bg-[#FB7E10] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-all">
          <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 leading-tight uppercase">
              "The best service I've ever experienced on the road."
            </h3>
            <p className="text-white/80 font-bold uppercase tracking-wider text-sm">
              — James T., Porsche 911 Owner
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-black relative h-48 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww"
              alt="Testimonial Car"
              className="w-full h-full object-cover grayscale brightness-125 transition-all hover:grayscale-0 duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
