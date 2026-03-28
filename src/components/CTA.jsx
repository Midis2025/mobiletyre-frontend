import React from 'react';
import { Phone } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto relative rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-black min-h-[350px] md:min-h-[450px] flex items-center p-6 md:p-16 lg:p-20 shadow-2xl">
        {/* Background Tread Pattern */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 md:opacity-40 pointer-events-none">
          <img
            src="/images/cta-bg.png"
            alt="Tire Tread"
            className="w-full h-full object-cover grayscale brightness-200"
          />
          <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-6 md:space-y-8 text-center md:text-left w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
            READY FOR THE<br className="hidden sm:block" />ROAD AHEAD?
          </h2>
          <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed">
            At Mobile Tyre Champions, we fit and replace tyres for leading manufacturers including Rolls-Royce, Bentley, Porsche, Lamborghini, BMW, Mercedes-Benz, Audi, and Range Rover—ensuring precise fitment, calibration, and reliable on-site convenience every time.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 pt-2 md:pt-4">
            <button className="w-full sm:w-auto bg-[#FB7E10] text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black text-base md:text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95">
              Book Service
            </button>
            <a href="tel:+447495336005" className="flex items-center gap-3 md:gap-4 group cursor-pointer hover:scale-105 transition-all">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FB7E10]/20 group-hover:border-[#FB7E10]">
                <Phone size={20} className="text-white scale-75 md:scale-100 group-hover:text-[#FB7E10]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] font-black text-white/40 uppercase tracking-widest group-hover:text-[#FB7E10]">Priority Hotline</span>
                <span className="text-white font-black text-lg md:text-xl italic tracking-tight group-hover:text-[#FB7E10] tracking-tighter">+44 7495 336 005</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
