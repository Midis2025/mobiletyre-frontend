import React from 'react';
import { Phone, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      icon: <Phone size={24} className="text-slate-400 group-hover:text-white transition-colors" fill="currentColor" />,
      title: "Call or Book Online",
      desc: "Tell us your tyre size or vehicle registration and location."
    },
    {
      id: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="12" y1="2" x2="12" y2="8"></line>
          <line x1="12" y1="16" x2="12" y2="22"></line>
          <line x1="2" y1="12" x2="8" y2="12"></line>
          <line x1="16" y1="12" x2="22" y2="12"></line>
        </svg>
      ),
      title: "We Come to You",
      desc: "Our nearest mobile fitter heads straight to you with the correct tyres and equipment."
    },
    {
      id: "03",
      icon: <Truck size={24} className="text-slate-400 group-hover:text-white transition-colors" />,
      title: "Professional Fitting On-Site",
      desc: "We remove the old tyre, fit the new one, balance the wheel and check pressure and safety."
    },
    {
      id: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white group-hover:text-white transition-colors">
          <path d="M4 22L12 2l8 20" />
          <path d="M8 14h8" />
        </svg>
      ),
      title: "You Drive Away Safely",
      desc: "Fully fitted. No queues. No wasted time."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#0B1528] via-[#0D1D3A] to-[#0B1528] py-20 md:py-28 px-4 md:px-10 relative overflow-hidden">
      {/* Blue Textured Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <img src="/images/cta-bg.png" alt="texture" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Orange Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FB7E10]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16 tracking-tighter uppercase drop-shadow-md">
          HOW IT WORKS
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="group bg-white/10 backdrop-blur-xl rounded-[1.25rem] p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative flex flex-col justify-start min-h-[260px] overflow-hidden hover:-translate-y-1 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
              <div className="mb-6 relative z-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-inner border border-white/20 group-hover:bg-white/20 transition-colors duration-500">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight relative z-10 drop-shadow-sm">
                {step.title}
              </h3>
              <p className="text-blue-100/80 font-medium text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="tel:02080901010" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-bold tracking-wide transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] active:scale-95 group">
            <Phone size={22} className="text-[#FB7E10] group-hover:animate-pulse" />
            <span className="text-lg">02080901010</span>
          </a>
          <a href="https://wa.me/442080901010" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-bold tracking-wide transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] active:scale-95">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366]" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-lg">Connect on Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
