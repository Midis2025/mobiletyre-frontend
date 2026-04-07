import React from 'react';
import { ArrowRight, CircleDot, Ruler, Gauge, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToReadTyre = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20">

          {/* Content Area */}
          <div className="lg:w-1/2 space-y-5 sm:space-y-6 md:space-y-8 z-10 w-full text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                How to Read <span className="text-[#FB7E10]">A Tyre Size</span>
              </h2>
              <div className="w-12 sm:w-16 md:w-20 h-1 sm:h-1.5 md:h-2 bg-[#FB7E10] transform -skew-x-12 mx-auto lg:mx-0"></div>
            </div>

            <p className="text-sm sm:text-base md:text-xl text-slate-600 leading-relaxed font-medium">
              Your tyre size is printed on the sidewall — for example, <span className="font-bold text-slate-900 bg-slate-200 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm md:text-base">205/55 R16 91V</span>. This tells you the width (205mm), aspect ratio (55%), construction type (R = Radial), rim diameter (16"), load index (91) and speed rating (V).
            </p>

            <p className="text-xs sm:text-sm md:text-lg text-slate-500 leading-relaxed font-medium">
              Not sure of your size? Give us a call or use our free registration lookup tool — we'll find the exact match for your vehicle.
            </p>

            {/* Quick reference chips */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2 justify-center lg:justify-start">
              {[
                { icon: <Ruler size={12} className="sm:w-3.5 sm:h-3.5" />, label: 'Width (mm)' },
                { icon: <CircleDot size={12} className="sm:w-3.5 sm:h-3.5" />, label: 'Aspect Ratio' },
                { icon: <Circle size={12} className="sm:w-3.5 sm:h-3.5" />, label: 'Rim Size' },
                { icon: <Gauge size={12} className="sm:w-3.5 sm:h-3.5" />, label: 'Speed Rating' },
              ].map((chip, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-100 text-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-200">
                  {chip.icon} {chip.label}
                </span>
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <Link
                to="/find-tyres"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#1E63C4] hover:bg-slate-900 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-sm font-black text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Find Your Tyre Size
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Link>
            </div>
          </div>

          {/* Visual Area */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative group flex items-center justify-center p-2 sm:p-4 md:p-8">
              <img
                src="/images/emergency mobile tyre  (1).png"
                alt="Tyre sidewall markings guide showing section width, aspect ratio, radial construction, and wheel diameter"
                className="w-full max-w-[500px] lg:max-w-full h-auto object-contain hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowToReadTyre;
