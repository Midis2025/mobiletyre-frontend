import React from 'react';

const TyrePartners = () => {
  const brands = [
    { name: 'Bridgestone', logo: 'https://www.carlogos.org/tire-logos/bridgestone-logo.png' },
    { name: 'Continental', logo: 'https://www.carlogos.org/tire-logos/continental-logo.png' },
    { name: 'Pirelli', logo: 'https://www.carlogos.org/tire-logos/pirelli-logo.png' },
    { name: 'Goodyear', logo: 'https://www.carlogos.org/tire-logos/goodyear-logo.png' },
    { name: 'Dunlop', logo: 'https://www.carlogos.org/tire-logos/dunlop-logo.png' },
    { name: 'Hankook', logo: 'https://www.carlogos.org/tire-logos/hankook-logo.png' },
    { name: 'Yokohama', logo: 'https://www.carlogos.org/tire-logos/yokohama-logo.png' },
    { name: 'Kumho', logo: 'https://www.carlogos.org/tire-logos/kumho-logo.png' },
    { name: 'Toyo', logo: 'https://www.carlogos.org/tire-logos/toyo-logo.png' },
    { name: 'Apollo', logo: 'https://www.carlogos.org/tire-logos/apollo-logo.png' },
    { name: 'CEAT', logo: 'https://www.carlogos.org/tire-logos/ceat-logo.png' },
    { name: 'MRF', logo: 'https://www.carlogos.org/tire-logos/mrf-logo.png' },
    { name: 'Vogue', logo: 'https://www.carlogos.org/tire-logos/vogue-logo.png' },
    { name: 'Atturo', logo: 'https://www.carlogos.org/tire-logos/atturo-logo.png' },
    { name: 'Starfire', logo: 'https://www.carlogos.org/tire-logos/starfire-logo.png' },
  ];

  return (
    <div className="bg-white border-b border-slate-100 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex items-center justify-between gap-6 md:gap-16">


        <div className="flex-1 overflow-hidden relative group">
          <div className="flex w-max animate-marquee items-center gap-12 md:gap-24">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 transition-all duration-300 hover:scale-110">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 md:h-12 w-auto object-contain transition-all cursor-pointer"
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
