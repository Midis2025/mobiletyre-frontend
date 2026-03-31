import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero image.avif"
          alt="Tire background"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 bg-[#33251a] border border-[#fb7e10]/30 px-3 md:px-4 py-1.5 rounded-full">
              <span className="text-orange-500">⚡</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-orange-400">
                UK'S FAST MOBILE TYRE SERVICE – 24/7
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Mobile Tyre Champions,<br className="hidden sm:block" />
              <span className="text-[#FB7E10]"> Where You Are.</span>
            </h1>

            <p className="max-w-md text-gray-300 text-sm md:text-lg leading-relaxed">
              Premium mobile tyre fitting service. Emergency roadside assistance or scheduled home fitting. Night or day, we keep you moving.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 w-full max-w-sm sm:max-w-none">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-orange-600 transition-all border-2 border-transparent">
                Call Now: +0800 123 4567
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#22C55E] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-green-600 transition-all border-2 border-transparent">
                Whatsapp
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full -mr-16 -mt-16 blur-3xl"></div>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-[6px] h-8 bg-black"></div>
                <h2 className="text-2xl font-black tracking-tighter uppercase">INSTANT APPOINTMENT</h2>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="000-000-0000"
                    className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                    SERVICE TYPE
                  </label>
                  <div className="relative">
                    <select className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 appearance-none text-gray-700 font-medium focus:ring-2 focus:ring-[#FB7E10] transition-all">
                      {servicesData.map((service, index) => (
                        <option key={index} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                      TIRE SIZE
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 225/45 R17"
                      className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                      TIMING SLOT
                    </label>
                    <div className="relative">
                      <select className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 appearance-none text-gray-700 text-sm focus:ring-2 focus:ring-[#FB7E10] transition-all font-medium">
                        <option>As Soon As Possible</option>
                        <option>Morning (8AM - 12PM)</option>
                        <option>Afternoon (12PM - 4PM)</option>
                        <option>Evening (4PM - 8PM)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B1528] text-white py-4.5 rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 mt-6 hover:bg-slate-900 transition-all active:scale-[0.98]"
                >
                  REQUEST APPROVAL
                  <ArrowRight size={20} strokeWidth={3} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
