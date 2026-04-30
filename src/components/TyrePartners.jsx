import React from 'react';

const TyrePartners = () => {
  const brands = [
    { name: 'Apollo', logo: '/logo/maxxis.png' },
    { name: 'CEAT', logo: '/logo/bridgestone.png' },
    { name: 'Bf Good Rich', logo: '/logo/Bf Good Rich.png' },
    { name: 'Bridgestone', logo: '/logo/bridgestone.png' },
    { name: 'Continental', logo: '/logo/continental.png' },
    { name: 'Dunlop', logo: '/logo/dumlop.png' },
    { name: 'Dvanti', logo: '/logo/dvanti tires.webp' },
    { name: 'Kumho', logo: '/logo/kumho tires.png' },
    { name: 'Michelin', logo: '/logo/michelin.png' },
    { name: 'Yokohama', logo: '/logo/yokohama.png' },
    { name: 'MTC', logo: '/logo/logo.png' },
  ];

  return (
    <div className="bg-white py-2 md:py-3 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex items-center justify-between gap-6 md:gap-16">


        <div className="flex-1 overflow-hidden relative group">
          <div className="flex w-max animate-marquee items-center gap-0">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 mr-8 md:mr-12 transition-all duration-500 hover:scale-105 group/card">
                <div className="bg-white flex items-center justify-center w-24 h-16 md:w-32 md:h-20 p-0 transition-all duration-500">
                  <img
                    src={encodeURI(brand.logo)}
                    alt={brand.name}
                    className="w-full h-full object-contain transition-all duration-500"
                    onError={(e) => { const el = e.currentTarget.closest('.group\/card'); if (el) el.style.display = 'none'; }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Removed Gradients for smooth fade */}
        </div>
      </div>
    </div>
  );
};

export default TyrePartners;
