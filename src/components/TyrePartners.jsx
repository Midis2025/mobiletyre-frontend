import React from 'react';

const TyrePartners = () => {
  const brands = [
    // Tyre Brands
    { name: 'Michelin', logo: 'https://www.carlogos.org/logo/Michelin-logo-2017x1100.png' },
    { name: 'Continental', logo: 'https://www.carlogos.org/car-logos/continental-logo-640.png' },
    { name: 'Pirelli', logo: 'https://www.carlogos.org/car-logos/pirelli-logo-640.png' },
    { name: 'Bridgestone', logo: 'https://www.carlogos.org/car-logos/bridgestone-logo-640.png' },
    { name: 'Goodyear', logo: 'https://www.carlogos.org/car-logos/goodyear-logo-640.png' },
    { name: 'Dunlop', logo: 'https://www.carlogos.org/car-logos/dunlop-logo-640.png' },

    // Luxury Car Brands
    { name: 'BMW', logo: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
    { name: 'Mercedes-Benz', logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
    { name: 'Audi', logo: 'https://www.audi.co.uk/content/dam/nemo/global/brand-elements/logos/four-rings/01_rings_black_lg.png' },
    { name: 'Porsche', logo: 'https://www.carlogos.org/car-logos/porsche-logo.png' },
    { name: 'Bentley', logo: 'https://www.carlogos.org/car-logos/bentley-logo-2002-640.png' },
    { name: 'Rolls-Royce', logo: 'https://www.carlogos.org/logo/Rolls-Royce-logo-640x550.jpg' },
    { name: 'Jaguar', logo: 'https://www.carlogos.org/car-logos/jaguar-logo-2021-640.png' },
    { name: 'Lexus', logo: 'https://www.carlogos.org/car-logos/lexus-logo.png' },
    { name: 'Aston Martin', logo: 'https://www.carlogos.org/logo/Aston-Martin-logo-2003-640x286.jpg' },
  ];

  return (
    <div className="bg-white border-b border-slate-100 py-1.5 md:py-3 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex items-center justify-between gap-4 md:gap-12">
        <div className="flex-shrink-0">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-slate-400">Premium Partners</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative group">
          <div className="flex animate-marquee items-center gap-8 md:gap-16">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 transition-all duration-300 hover:scale-110">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-4 md:h-7 w-auto object-contain transition-all cursor-pointer"
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
