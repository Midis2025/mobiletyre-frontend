import React from 'react';

const Features = () => {
  const brandLogos = [
    "https://www.mobiletyremates.com/wp-content/uploads/2025/12/Mobile-tyres-logos-mitchlen.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/1-1.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/2-1.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/3-1.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/4-1.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/5-1.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/6-1.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/7-1.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/8-1.png",
    "https://www.mobiletyremates.com/wp-content/uploads/2025/10/9-1.png",
  ];

  return (
    <div className="bg-white py-12 md:py-20 px-4 sm:px-10 lg:px-20 overflow-hidden">
      {/* Logos Row - Animated Marquee */}
      <div className="relative mb-12 md:mb-20 select-none group before:absolute before:left-0 before:top-0 before:w-16 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-16 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <div className="flex w-max animate-marquee items-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 hover:[animation-play-state:paused]">
          {[...brandLogos, ...brandLogos].map((logo, i) => (
            <img 
              key={i} 
              src={logo} 
              alt="Brand Logo" 
              className="h-10 sm:h-12 md:h-16 w-auto object-contain mx-6 md:mx-10 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" 
            />
          ))}
        </div>
      </div>

      {/* Heading */}
      <div className="mb-10 md:mb-16 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-black max-w-xl italic uppercase">
          Precision Engineering.<br className="hidden sm:block" />Roadside Reality.
        </h2>
        <div className="w-16 h-1.5 bg-[#FB7E10] mt-4"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Ultra-Rapid Deployment (Span 2) */}
        <div className="lg:col-span-2 bg-[#F1F3F6] rounded-2xl md:rounded-3xl p-6 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-96 h-96 text-black">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 12L16 10" />
                <path d="M12 7V12" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-black italic">Ultra-Rapid Deployment</h3>
            <p className="text-gray-500 font-medium leading-relaxed max-w-md italic">
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
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4 italic">Expertise Guaranteed</h3>
          <p className="text-gray-400 font-medium leading-relaxed mb-10 italic">
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
        <div className="bg-[#F1F3F6] rounded-2xl md:rounded-3xl p-6 md:p-10 hover:shadow-lg transition-all">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 md:mb-8 border border-gray-100">
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6V12L16 14" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-black italic">24/7 Kinetic Support</h3>
          <p className="text-gray-500 font-medium leading-relaxed italic">
            Christmas, New Year's, or 3 AM on a Tuesday. We never sleep because the roads never close.
          </p>
        </div>

        {/* Card 4: Quote (Span 2) */}
        <div className="lg:col-span-2 bg-[#FB7E10] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-all">
          <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic mb-4 md:mb-6 leading-tight uppercase">
              "The best service I've ever experienced on the road."
            </h3>
            <p className="text-white/80 font-bold uppercase tracking-wider text-sm">
              — James T., Porsche 911 Owner
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-black relative h-48 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1523305353081-c178a1c2202e?q=80&w=2070&auto=format&fit=crop"
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
