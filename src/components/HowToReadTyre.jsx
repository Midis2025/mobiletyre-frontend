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
            <div className="space-y-2 xs:space-y-3 text-center lg:text-left">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                How to Read <span className="text-[#FB7E10] block xs:inline">A Tyre Size</span>
              </h2>
              <div className="w-10 xs:w-12 sm:w-16 md:w-20 h-0.5 xs:h-1 sm:h-1.5 md:h-2 bg-[#FB7E10] transform -skew-x-12 mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium px-1 xs:px-0 text-center lg:text-left">
                Looks confusing at first glance — but it’s simpler than it looks.
              </p>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm text-left">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <span>🛞</span> Quick visual guide (185/75 R17 82S)
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { val: '185', title: 'Tyre width', desc: 'Width in millimetres (185mm)' },
                    { val: '75', title: 'Aspect ratio', desc: 'Sidewall height as a % of width (75% of 185mm)' },
                    { val: 'R', title: 'Radial', desc: 'Standard radial construction for modern cars' },
                    { val: '17', title: 'Wheel size', desc: 'The rim diameter in inches - must match your wheel size' },
                    { val: '82', title: 'Load index', desc: 'Max weight capacity per tyre (82 = 475kg)' },
                    { val: 'S', title: 'Speed rating', desc: 'Max speed capability (S = 112mph / 180km/h)' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#FB7E10]"></div>
                      <div className="text-sm sm:text-base text-slate-700">
                        <span className="font-bold text-slate-900"><span className="text-[#FB7E10]">{item.val}</span> &rarr; {item.title}</span><br/>
                        <span className="text-slate-500 text-xs sm:text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm mt-3 text-left">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-start sm:items-center gap-2 mb-3">
                  <span className="mt-1 sm:mt-0">🔍</span> Tyre Class & Service Type
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { val: 'P', title: 'Tyre class', desc: 'P stands for Passenger vehicle (Standard car tyres)' },
                    { val: 'LT', title: 'Light Truck', desc: 'LT stands for Light Truck (Vans and pickups)' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#FB7E10]"></div>
                      <div className="text-sm sm:text-base text-slate-700">
                        <span className="font-bold text-slate-900"><span className="text-[#FB7E10]">{item.val}</span> &rarr; {item.title}</span><br/>
                        <span className="text-slate-500 text-xs sm:text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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
