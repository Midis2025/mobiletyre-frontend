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

            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-xl text-slate-600 leading-relaxed font-medium">
                See a number like 205/55 R16 on your tyre and have no idea what it means? You're not alone — most drivers don't. <span className="text-[#FB7E10] font-black">Here's the short version:</span>
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  { val: '205', desc: 'tyre width in millimetres' },
                  { val: '55', desc: 'sidewall height as a percentage of the width' },
                  { val: 'R', desc: 'radial construction (standard for UK roads)' },
                  { val: '16', desc: 'wheel rim diameter in inches' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#FB7E10] transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FB7E10] group-hover:bg-white transition-colors"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-slate-700 font-bold">
                      <span className="text-[#FB7E10]">{item.val}</span> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed font-semibold">
                Not sure about yours? Just give us your number plate — we'll look up the exact size your vehicle needs in about 30 seconds.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <Link
                to="/find-tyres"
                className="inline-flex items-center gap-3 bg-[#FB7E10] hover:bg-slate-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-sm font-black text-xs sm:text-sm md:text-base uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-500/20"
              >
                Read the Full Tyre Size Guide
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
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
