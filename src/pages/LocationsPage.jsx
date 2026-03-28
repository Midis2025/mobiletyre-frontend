import React from 'react';
import { MapPin, Phone, ArrowRight, Shield, Clock, Zap } from 'lucide-react';

const locations = [
  { name: 'Aldershot', region: 'Hampshire', status: 'Operational' },
  { name: 'Alton', region: 'Hampshire', status: 'Operational' },
  { name: 'Basingstoke', region: 'Hampshire', status: 'Operational' },
  { name: 'Crowthorne', region: 'Berkshire', status: 'Operational' },
  { name: 'Farnborough', region: 'Hampshire', status: 'Operational' },
  { name: 'Farnham', region: 'Surrey', status: 'Operational' },
  { name: 'Fleet', region: 'Hampshire', status: 'Operational' },
  { name: 'Guildford', region: 'Surrey', status: 'Operational' },
  { name: 'Hook', region: 'Hampshire', status: 'Operational' },
  { name: 'London', region: 'Greater London', status: 'Operational' },
  { name: 'Petersfield', region: 'Hampshire', status: 'Operational' },
  { name: 'Southall', region: 'West London', status: 'Operational' },
  { name: 'Southampton', region: 'Hampshire', status: 'Operational' },
  { name: 'Uxbridge', region: 'West London', status: 'Operational' },
  { name: 'Winchester', region: 'Hampshire', status: 'Operational' },
];

const LocationsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-['Outfit'] pt-24 overflow-hidden relative">
      
      {/* ── BACKGROUND ACCENTS (Subtle) ── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/50 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[150px] -ml-64 -mb-64"></div>

      {/* ── HERO ── */}
      <section className="relative py-32 md:py-48 px-4 border-b border-gray-200 z-10 overflow-hidden shadow-sm">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544436074-c603a16fc0c1?q=80&w=2070&auto=format&fit=crop" 
            alt="Mobile Tyre Service Background" 
            className="w-full h-full object-cover opacity-10 grayscale scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
           <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-100 px-4 py-2 rounded-xl shadow-sm">
             <span className="text-[#FB7E10] font-black uppercase text-[10px] tracking-widest italic animate-pulse">Nationwide Coverage</span>
           </div>
           <h1 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] text-black">
              AREAS WE <br /> <span className="text-[#FB7E10]">COVER </span>
           </h1>
           <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto italic leading-relaxed">
              Professional mobile tyre services delivered to your doorstep. We operate 24/7 across the following locations.
           </p>
        </div>
      </section>

      {/* ── LOCATION GRID ── */}
      <section className="py-20 px-6 relative z-10">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {locations.map((loc, index) => (
                  <div key={index} className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                     
                     <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-start">
                           <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#FB7E10] border border-gray-100 group-hover:bg-[#FB7E10] group-hover:text-white transition-all duration-500 shadow-sm">
                              <MapPin size={28} />
                           </div>
                           <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100 shadow-sm">
                              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22C55E]"></span>
                              <span className="text-green-700 text-[9px] font-black uppercase tracking-widest leading-none">{loc.status}</span>
                           </div>
                        </div>

                        <div className="space-y-1">
                           <h3 className="text-3xl font-black text-black italic group-hover:text-[#FB7E10] transition-colors">{loc.name}</h3>
                           <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em]">{loc.region}</p>
                        </div>

                        <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                           <div className="flex flex-col">
                              <span className="text-gray-300 text-[9px] font-black uppercase tracking-widest">Arrival Time</span>
                              <span className="text-gray-600 text-sm font-bold italic tracking-tight">30-60 Mins</span>
                           </div>
                           <div className="w-10 h-10 bg-[#FB7E10]/10 rounded-full flex items-center justify-center group-hover:bg-[#FB7E10] group-hover:text-white transition-all shadow-sm">
                              <ArrowRight size={18} />
                           </div>
                        </div>
                     </div>

                     {/* Watermark Logo Effect */}
                     <div className="absolute right-[-5%] bottom-[-5%] text-9xl font-black text-slate-50 italic pointer-events-none group-hover:scale-105 transition-all duration-1000">
                        {loc.name.charAt(0)}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-white py-16 border-y border-gray-100 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-center md:text-left">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FB7E10] shadow-sm">
                    <Zap size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black italic uppercase tracking-tight text-black leading-none">Emergency Response</h4>
                   <p className="text-gray-400 font-medium text-sm mt-1">On-site in 60 minutes or less</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                    <Shield size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black italic uppercase tracking-tight text-black leading-none">Certified Crew</h4>
                   <p className="text-gray-400 font-medium text-sm mt-1">IMI-Certified expert technicians</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shadow-sm">
                    <Clock size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black italic uppercase tracking-tight text-black leading-none">24/7 Service</h4>
                   <p className="text-gray-400 font-medium text-sm mt-1">Always available, 365 days a year</p>
                </div>
            </div>
         </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 px-6 relative z-10 bg-slate-50">
         <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 text-center space-y-10 border border-gray-100 shadow-xl overflow-hidden relative">
            {/* decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FB7E10]/5 rounded-full -mr-32 -mt-32"></div>

            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-black">
               DON'T SEE <br /> <span className="text-[#FB7E10]">YOUR LOCATION?</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm italic max-w-2xl mx-auto">Our routes are updated daily. Call our specialized hotline to check live mobile technician availability in your specific area.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
               <a href="tel:+447495336005" className="inline-flex items-center justify-center gap-4 bg-[#FB7E10] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg md:text-xl hover:bg-orange-600 hover:scale-105 transition-all shadow-xl active:scale-95 shadow-orange-900/10">
                  <Phone size={24} fill="white" /> +44 7495 336 005
               </a>
               <a href="/contact" className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg md:text-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                  Book A Fast Slot
               </a>
            </div>

            <div className="flex items-center justify-center gap-4 pt-10 opacity-30">
               <div className="w-24 h-px bg-gray-200"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Operational Everywhere</span>
               <div className="w-24 h-px bg-gray-200"></div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default LocationsPage;
