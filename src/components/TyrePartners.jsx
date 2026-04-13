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
    <div className="bg-slate-50 border-t border-b border-slate-200 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-5 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex items-center justify-between gap-6 md:gap-16">


        <div className="flex-1 overflow-hidden relative group">
          <div className="flex w-max animate-marquee items-center gap-12 md:gap-24">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 transition-all duration-500 hover:scale-110 group/card">
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 group-hover/card:from-blue-500 group-hover/card:to-indigo-600 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                  <div className="bg-white rounded-[15px] flex items-center justify-center p-3 w-24 h-16 md:w-32 md:h-20 transition-colors">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-8 md:h-12 w-auto object-contain transition-all cursor-pointer"
                      onError={(e) => { e.currentTarget.closest('.group\\/card').style.display = 'none'; }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradients for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default TyrePartners;
