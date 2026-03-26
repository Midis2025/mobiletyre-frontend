import React from 'react';
import { Phone, Quote, Zap, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';

const Process = () => {
  return (
    <div className="bg-[#060C18] py-24 px-4 sm:px-10 lg:px-20 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FB7E10]/5 rounded-full blur-[120px] -ml-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto rounded-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row-reverse bg-[#0B1528] border border-white/5 shadow-2xl relative z-10">
        
        {/* Right Content - Visual */}
        <div className="lg:w-1/2 relative h-[300px] sm:h-[500px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1984&auto=format&fit=crop"
            alt="Technician fitting tyre"
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-transparent"></div>
          
          {/* Floating UI Detail */}
          <div className="absolute bottom-10 left-10 right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-10 group-hover:translate-y-0">
             <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#FB7E10] rounded-xl flex items-center justify-center text-white">
                    <ShieldCheck size={28} />
                 </div>
                 <div className="space-y-0.5">
                    <p className="text-[#FB7E10] text-[10px] font-black uppercase tracking-widest">Technician Live</p>
                    <p className="text-white font-black italic uppercase leading-tight">Safety Standards Verified</p>
                 </div>
             </div>
          </div>
        </div>

        {/* Left Content - Steps */}
        <div className="lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center space-y-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white uppercase italic">
              FLAT TYRE? <br /> <span className="text-[#FB7E10]">REACH US INSTANTLY</span>
            </h2>
            <p className="text-gray-500 font-medium italic text-lg leading-relaxed max-w-md">Our precision deployment sequence ensures you spend zero unnecessary time on the roadside.</p>
          </div>

          <div className="space-y-12">
            {[
              {
                idx: "01",
                icon: <Phone size={28} />,
                title: "COMMUNICATION",
                desc: "Got a punctured tyre? Call our emergency line. Our technicians arrive within 60 minutes nationwide."
              },
              {
                idx: "02",
                icon: <Quote size={28} />,
                title: "UPFRONT QUOTA",
                desc: "Receive a clear, fixed-price quote instantly. No hidden fees, no workshop surcharges."
              },
              {
                idx: "03",
                icon: <CreditCard size={28} />,
                title: "RAPID EXECUTION",
                desc: "Certified fitters replace your tyre on-site. Secure card payment and you're back on your way."
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <div className="shrink-0 w-16 h-16 bg-white/5 border border-white/10 group-hover:bg-[#FB7E10] group-hover:text-white transition-all duration-500 rounded-2xl flex items-center justify-center text-[#FB7E10] font-black text-xl italic relative">
                  {step.icon}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0B1528] border border-white/5 rounded-lg flex items-center justify-center text-[10px] font-black text-gray-500 group-hover:text-white transition-colors">{step.idx}</div>
                </div>
                <div className="space-y-2 pt-2">
                  <h4 className="text-2xl font-black text-white italic transition-colors group-hover:text-[#FB7E10] tracking-tight">{step.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed max-w-sm italic">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
             <a href="tel:02033554005" className="inline-flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/10 active:scale-95">
                Instant Dispatch <ArrowRight size={16} />
             </a>
             <div className="flex items-center gap-3 px-6 h-14 bg-white/5 border border-white/10 rounded-2xl opacity-50">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest italic">Live Agents Available</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
