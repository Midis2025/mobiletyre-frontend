import React from 'react';
import { Phone, Quote, Zap, ArrowRight, ShieldCheck, CreditCard, CheckCircle } from 'lucide-react';

const Process = () => {
  return (
    <div className="bg-slate-50 py-24 px-4 sm:px-10 lg:px-20 relative overflow-hidden">

      {/* Background Accent (Subtle) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[150px] -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto rounded-[3.5rem] md:rounded-[5rem] overflow-hidden flex flex-col lg:flex-row-reverse bg-white border border-gray-100 shadow-2xl relative z-10 transition-all duration-700 hover:shadow-orange-100">

        {/* Right Content - Visual */}
        <div className="lg:w-1/2 relative h-[400px] sm:h-[600px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1679652553853-1b4010233ce3?w=1000&auto=format&fit=crop&q=80"
            alt="Technician fitting tyre"
            className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>

          {/* Floating UI Detail - Light Mode */}
          <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-2xl border border-gray-200 p-8 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-10 group-hover:translate-y-0 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 border border-green-100 shadow-sm">
                <ShieldCheck size={36} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-green-700 text-[10px] font-black uppercase tracking-widest leading-none">Technician Deployed</p>
                </div>
                <p className="text-black font-black italic uppercase text-xl leading-tight tracking-tight">MISSION STATUS: <span className="text-green-600">IN-FLIGHT</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Content - Steps */}
        <div className="lg:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center space-y-16">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl">
              <span className="text-[#FB7E10] font-black uppercase text-[10px] tracking-widest italic tracking-tighter">Operational Protocol</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-black uppercase italic">
              FLAT TYRE? <br /> <span className="text-[#FB7E10]">REACH US INSTANTLY</span>
            </h2>
            <p className="text-gray-400 font-medium italic text-lg leading-relaxed max-w-md">Our specialized deployment sequence ensures zero downtime. Precision engineered response, 24/7/365.</p>
          </div>

          <div className="space-y-12 relative">
            {/* Connecting Line */}
            <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-gray-100 hidden md:block"></div>

            {[
              {
                idx: "01",
                icon: <Phone size={28} />,
                title: "COMMUNICATION",
                desc: "Call our emergency line. Our technicians are dispatched within 60 minutes nationwide."
              },
              {
                idx: "02",
                icon: <Quote size={28} />,
                title: "UPFRONT QUOTE",
                desc: "Receive a transparent, fixed-price quote instantly. Zero hidden fees, guaranteed."
              },
              {
                idx: "03",
                icon: <CreditCard size={28} />,
                title: "RAPID EXECUTION",
                desc: "Certified fitters arrive on-site. Secure card payment and you're back on your way."
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-10 items-start group relative">
                <div className="shrink-0 w-16 h-16 bg-white border border-gray-100 shadow-xl group-hover:bg-[#FB7E10] group-hover:text-white transition-all duration-700 rounded-[1.25rem] flex items-center justify-center text-[#FB7E10] relative z-20">
                  {step.icon}
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[10px] font-black text-gray-400 group-hover:text-black transition-colors shadow-sm">{step.idx}</div>
                </div>
                <div className="space-y-2 pt-2">
                  <h4 className="text-2xl font-black text-black italic transition-colors group-hover:text-[#FB7E10] tracking-tight">{step.title}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed max-w-sm italic text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6">
            <a href="tel:02033554005" className="inline-flex items-center justify-center gap-4 bg-[#FB7E10] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/10 active:scale-95 italic">
              GET TYRES NOW <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4 px-8 h-16 bg-slate-50 border border-slate-100 rounded-2xl group shadow-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=crew${i}`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest italic leading-none pt-0.5">Live Readiness</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
