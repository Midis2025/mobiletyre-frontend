import React from 'react';

const TyrePartners = () => {
  const brands = [
    // Tyre Brands
 
    // Luxury Car Brands (from Features)
    { name: 'BMW', logo: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
    { name: 'Mercedes-Benz', logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
       { name: 'Porsche', logo: 'https://www.carlogos.org/car-logos/porsche-logo.png' },
    { name: 'Bentley', logo: 'https://www.carlogos.org/car-logos/bentley-logo-2002-640.png' },
    { name: 'Rolls-Royce', logo: 'https://www.carlogos.org/logo/Rolls-Royce-logo-640x550.jpg' },
    { name: 'Jaguar', logo: 'https://www.carlogos.org/car-logos/jaguar-logo-2021-640.png' },
    { name: 'Lexus', logo: 'https://www.carlogos.org/car-logos/lexus-logo.png' },
    { name: 'Aston Martin', logo: 'https://www.carlogos.org/logo/Aston-Martin-logo-2003-640x286.jpg' },
  ];

  return (
    <div className="bg-white border-b border-slate-100 py-3 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex items-center justify-between gap-6 md:gap-12">
        <div className="flex-shrink-0">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Premium Partners</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative group">
          <div className="flex animate-marquee items-center gap-10 md:gap-16">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 transition-all duration-300 hover:scale-110">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-5 md:h-7 w-auto object-contain transition-all cursor-pointer"
                />
              </div>
            ))}
          </div>
          
          {/* Gradients for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default TyrePartners;
