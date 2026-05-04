import React from 'react';
import { Phone, Quote, Zap, ArrowRight, ShieldCheck, CreditCard, CheckCircle } from 'lucide-react';

const Process = () => {
  return (
    <div className="bg-slate-50 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-10 lg:px-20 relative overflow-hidden">

      {/* Background Accent (Subtle) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[150px] -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto rounded-[1rem] md:rounded-[1rem] overflow-hidden flex flex-col lg:flex-row-reverse bg-white border border-gray-100 shadow-2xl relative z-10 transition-all duration-700 hover:shadow-orange-100">

        {/* Right Content - Visual */}
        <div className="lg:w-1/2 relative h-[300px] sm:h-[500px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg"
            alt="Technician fitting tyre"
            className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>

          {/* Floating UI Detail - Light Mode */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/80 backdrop-blur-2xl border border-gray-200 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] opacity-0 md:group-hover:opacity-100 transition-all duration-1000 translate-y-10 group-hover:translate-y-0 shadow-2xl hidden md:block">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 border border-green-100 shadow-sm">
                <ShieldCheck size={36} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-green-700 text-[10px] font-bold tracking-widest leading-none">Technician Deployed</p>
                </div>
                <p className="text-black font-black uppercase text-xl leading-tight tracking-tight">MISSION STATUS: <span className="text-green-600">IN-FLIGHT</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Content - Steps */}
        <div className="lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center space-y-10 md:space-y-16">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl">
              <span className="text-[#FB7E10] font-black uppercase text-[10px] tracking-widest tracking-tighter">Operational Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-[0.85] text-black">
              Flat Tyre? <br /> <span className="text-[#FB7E10]">Reach us instantly</span>
            </h2>
            <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">A flat tyre is stressful enough without the wait. Our 24/7 emergency callout covers all of Surrey and Hampshire — call us and we'll be on our way.</p>
          </div>

          <div className="space-y-8 md:space-y-12 relative">
            {/* Connecting Line */}
            <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-gray-100 hidden md:block"></div>

            {[
              {
                idx: "01",
                icon: <Phone size={28} />,
                title: "COMMUNICATION",
                desc: "The moment you call, we'll tell you exactly when to expect us. No vague estimates, no being left in the dark."
              },
              {
                idx: "02",
                icon: <Quote size={28} />,
                title: "UPFRONT QUOTE",
                desc: "Not in a rush? Book a slot that fits your day. We work around you, not the other way around."
              },
              {
                idx: "03",
                icon: <CreditCard size={28} />,
                title: "RAPID EXECUTION",
                desc: "Our vans carry a broad range of tyre sizes — so we're ready to fit the moment we arrive. No second trips, no delays."
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 md:gap-10 items-start group relative">
                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white border border-gray-100 shadow-xl group-hover:bg-[#FB7E10] group-hover:text-white transition-all duration-700 rounded-[1.25rem] flex items-center justify-center text-[#FB7E10] relative z-20">
                  {step.icon}
                  <div className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[10px] font-black text-gray-400 group-hover:text-black transition-colors shadow-sm">{step.idx}</div>
                </div>
                <div className="space-y-1 md:space-y-2 pt-1 md:pt-2 text-left">
                  <h4 className="text-xl md:text-2xl font-black text-black transition-colors group-hover:text-[#FB7E10] tracking-tight">{step.title}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed max-w-sm text-xs md:text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 md:pt-8 flex justify-center">
            <a href="tel:02071013856" className="inline-flex items-center justify-center gap-4 bg-[#FB7E10] text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold tracking-widest text-sm hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/10 active:scale-95">
              GET TYRES NOW <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
