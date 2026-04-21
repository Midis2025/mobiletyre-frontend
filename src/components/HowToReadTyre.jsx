import React from 'react';
import { ArrowRight, CircleDot, Ruler, Gauge, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToReadTyre = () => {
  return (
    <div className="bg-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20">

          {/* Content Area */}
          <div className="lg:w-1/2 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 z-10 w-full text-center lg:text-left">
            <div className="space-y-2 xs:space-y-3">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                How to Read <span className="text-[#FB7E10] block xs:inline">A Tyre Size</span>
              </h2>
              <div className="w-10 xs:w-12 sm:w-16 md:w-20 h-0.5 xs:h-1 sm:h-1.5 md:h-2 bg-[#FB7E10] transform -skew-x-12 mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-3 xs:space-y-4">
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium px-1 xs:px-0">
                See a number like 205/55 R16 on your tyre and have no idea what it means? You're not alone — most drivers don't. <span className="text-[#FB7E10] font-black">Here's the short version:</span>
              </p>

              <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 pt-1 xs:pt-2 text-center lg:text-left">
                {[
                  { val: '205', desc: 'tyre width in millimetres' },
                  { val: '55', desc: 'sidewall height as a percentage of the width' },
                  { val: 'R', desc: 'radial construction (standard for UK roads)' },
                  { val: '16', desc: 'wheel rim diameter in inches' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 xs:gap-3 group px-1 xs:px-0">
                    <div className="mt-0.5 xs:mt-1 flex-shrink-0 w-4 xs:w-5 h-4 xs:h-5 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#FB7E10] transition-colors">
                      <div className="w-1 xs:w-1.5 h-1 xs:h-1.5 rounded-full bg-[#FB7E10] group-hover:bg-white transition-colors"></div>
                    </div>
                    <span className="text-xs xs:text-sm sm:text-base md:text-base lg:text-lg text-slate-700 font-bold leading-snug">
                      <span className="text-[#FB7E10]">{item.val}</span> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 xs:pt-3 sm:pt-4 border-t border-slate-100">
              <p className="text-xs xs:text-sm sm:text-base md:text-base lg:text-lg text-slate-500 leading-relaxed font-semibold px-1 xs:px-0">
                Not sure about yours? Just give us your number plate — we'll look up the exact size your vehicle needs in about 30 seconds.
              </p>
            </div>

            <div className="pt-3 xs:pt-4 sm:pt-5 md:pt-6">
              <Link
                to="/find-tyres"
                className="inline-flex items-center gap-2 xs:gap-2.5 sm:gap-3 bg-[#FB7E10] hover:bg-slate-900 text-white px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-3 xs:py-3.5 sm:py-4 md:py-4 lg:py-5 rounded-sm font-black text-xs sm:text-xs md:text-sm lg:text-base uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-500/20 whitespace-nowrap"
              >
                Read the Full Tyre Size Guide
                <ArrowRight className="w-4 xs:w-4 sm:w-5 md:w-5 lg:w-6" />
              </Link>
            </div>
          </div>

          {/* Visual Area */}
          <div className="lg:w-1/2 w-full relative flex justify-center">
            <div className="relative group flex items-center justify-center p-1 xs:p-2 sm:p-3 md:p-4 lg:p-8 w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-none">
              <img
                src="/images/emergency mobile tyre  (1).png"
                alt="Tyre sidewall markings guide showing section width, aspect ratio, radial construction, and wheel diameter"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowToReadTyre;
