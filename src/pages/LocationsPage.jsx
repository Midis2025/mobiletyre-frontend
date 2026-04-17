import React from 'react';
import { MapPin, Phone, ArrowRight, Shield, Clock, Zap } from 'lucide-react';

const locations = [
  { name: 'Aldershot', region: 'Hampshire', postcode: 'GU11', status: 'Operational' },
  { name: 'Alton', region: 'Hampshire', postcode: 'GU34', status: 'Operational' },
  { name: 'Ascot', region: 'Berkshire', postcode: 'SL5', status: 'Operational' },
  { name: 'Ash', region: 'Surrey', postcode: 'GU12', status: 'Operational' },
  { name: 'Ash Vale', region: 'Surrey', postcode: 'GU12', status: 'Operational' },
  { name: 'Bagshot', region: 'Surrey', postcode: 'GU19', status: 'Operational' },
  { name: 'Basingstoke', region: 'Hampshire', postcode: 'RG21', status: 'Operational' },
  { name: 'Bordon', region: 'Hampshire', postcode: 'GU35', status: 'Operational' },
  { name: 'Bracknell', region: 'Berkshire', postcode: 'RG12', status: 'Operational' },
  { name: 'Camberley', region: 'Surrey', postcode: 'GU15', status: 'Operational' },
  { name: 'Church Crookham', region: 'Hampshire', postcode: 'GU52', status: 'Operational' },
  { name: 'Cranleigh', region: 'Surrey', postcode: 'GU6', status: 'Operational' },
  { name: 'Crowthorne', region: 'Berkshire', postcode: 'RG45', status: 'Operational' },
  { name: 'Farnborough', region: 'Hampshire', postcode: 'GU14', status: 'Operational' },
  { name: 'Farnham', region: 'Surrey', postcode: 'GU9', status: 'Operational' },
  { name: 'Fleet', region: 'Hampshire', postcode: 'GU51', status: 'Operational' },
  { name: 'Frimley', region: 'Surrey', postcode: 'GU16', status: 'Operational' },
  { name: 'Godalming', region: 'Surrey', postcode: 'GU7', status: 'Operational' },
  { name: 'Guildford', region: 'Surrey', postcode: 'GU1', status: 'Operational' },
  { name: 'Hankley Common', region: 'Surrey', postcode: 'GU8', status: 'Operational' },
  { name: 'Haslemere', region: 'Surrey', postcode: 'GU27', status: 'Operational' },
  { name: 'Hindhead', region: 'Surrey', postcode: 'GU26', status: 'Operational' },
  { name: 'Hook', region: 'Hampshire', postcode: 'RG27', status: 'Operational' },
  { name: 'Lightwater', region: 'Surrey', postcode: 'GU18', status: 'Operational' },
  { name: 'Liphook', region: 'Hampshire', postcode: 'GU30', status: 'Operational' },
  { name: 'Liss', region: 'Hampshire', postcode: 'GU33', status: 'Operational' },
  { name: 'London', region: 'Greater London', postcode: 'W1', status: 'Operational' },
  { name: 'Midhurst', region: 'West Sussex', postcode: 'GU29', status: 'Operational' },
  { name: 'Petersfield', region: 'Hampshire', postcode: 'GU31', status: 'Operational' },
  { name: 'Petworth', region: 'West Sussex', postcode: 'GU28', status: 'Operational' },
  { name: 'Sandhurst', region: 'Berkshire', postcode: 'GU47', status: 'Operational' },
  { name: 'Southall', region: 'West London', postcode: 'UB1', status: 'Operational' },
  { name: 'Southampton', region: 'Hampshire', postcode: 'SO14', status: 'Operational' },
  { name: 'Tongham', region: 'Surrey', postcode: 'GU10', status: 'Operational' },
  { name: 'Uxbridge', region: 'West London', postcode: 'UB8', status: 'Operational' },
  { name: 'Virginia Water', region: 'Surrey', postcode: 'GU25', status: 'Operational' },
  { name: 'Winchester', region: 'Hampshire', postcode: 'SO22', status: 'Operational' },
  { name: 'Windlesham', region: 'Surrey', postcode: 'GU20', status: 'Operational' },
  { name: 'Woking', region: 'Surrey', postcode: 'GU21', status: 'Operational' },
  { name: 'Yateley', region: 'Hampshire', postcode: 'GU46', status: 'Operational' },
];

const LocationsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-['Outfit'] overflow-hidden relative">
      
      {/* ── BACKGROUND ACCENTS (Subtle) ── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/50 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[150px] -ml-64 -mb-64"></div>

      {/* ── HERO ── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 border-b border-gray-200 z-10 overflow-hidden shadow-sm">
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
             <span className="text-[#FB7E10] font-black uppercase text-[10px] tracking-widest animate-pulse">Nationwide Coverage</span>
           </div>
           <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-black">
              AREAS WE <br /> <span className="text-[#FB7E10]">COVER </span>
           </h1>
           <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              Professional mobile tyre services delivered to your doorstep. We operate 24/7 across the following locations.
           </p>

           <div className="max-w-lg mx-auto bg-white/90 backdrop-blur border border-gray-200 p-2 sm:p-2 rounded-3xl sm:rounded-full shadow-lg flex flex-col sm:flex-row items-center mt-8 gap-2 sm:gap-0">
              <input 
                 type="text" 
                 placeholder="Enter your Postcode" 
                 className="w-full sm:flex-1 bg-transparent px-6 py-4 outline-none font-bold text-black uppercase tracking-widest text-xs sm:text-sm text-center sm:text-left"
              />
              <button className="w-full sm:w-auto bg-[#0B1528] text-white px-8 py-4 sm:py-5 rounded-2xl sm:rounded-full font-black uppercase text-[10px] sm:text-xs tracking-widest hover:bg-[#FB7E10] transition-all shadow-md active:scale-95">
                 Check Area
              </button>
           </div>
        </div>
      </section>

      {/* ── LOCATION GRID ── */}
      <section className="pt-4 pb-24 px-6 relative z-10 bg-[#F8FAFC]">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
               {locations.map((loc, index) => (
                  <div key={index} className="group relative bg-white border border-slate-200 rounded-3xl p-0 hover:border-[#FB7E10] transition-all duration-500 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1">
                     
                     {/* Signature Side Pillar */}
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-100 group-hover:bg-[#FB7E10] transition-colors duration-500"></div>

                     <div className="p-8 md:p-10 space-y-8 flex-1">
                        {/* Header: Postcode ID & Status */}
                        <div className="flex justify-between items-start pl-2">
                           <div>
                              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Zone Identifier</span>
                              <h4 className="text-3xl font-black text-[#0B1528] tracking-tighter group-hover:text-[#FB7E10] transition-colors">
                                 {loc.postcode}
                              </h4>
                           </div>
                           <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 uppercase">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                               <span className="text-slate-600 text-[10px] font-black tracking-widest">{loc.status}</span>
                           </div>
                        </div>

                        {/* Body: Location Name */}
                        <div className="pl-2 space-y-2">
                           <h3 className="text-4xl font-black text-black leading-none break-words">
                              {loc.name}
                           </h3>
                           <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{loc.region}</p>
                        </div>
                     </div>

                     {/* Footer: Tech Data Strip */}
                     <div className="bg-slate-50/80 border-t border-slate-100 px-8 md:px-10 py-6 flex items-center justify-between group-hover:bg-orange-50/30 transition-colors">
                        <div className="flex flex-col">
                           <span className="text-slate-300 text-[9px] font-black uppercase tracking-widest mb-1">Deployment Time</span>
                           <div className="flex items-center gap-2">
                              <Clock size={14} className="text-[#FB7E10]" />
                              <span className="text-slate-700 text-sm font-black">30-60 MINS</span>
                           </div>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500 shadow-sm">
                           <ArrowRight size={20} strokeWidth={3} />
                        </div>
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
                   <h4 className="text-xl font-black uppercase tracking-tight text-black leading-none">Emergency Response</h4>
                   <p className="text-gray-400 font-medium text-sm mt-1">On-site in 60 minutes or less</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                    <Shield size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black uppercase tracking-tight text-black leading-none">Certified Crew</h4>
                   <p className="text-gray-400 font-medium text-sm mt-1">IMI-Certified expert technicians</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shadow-sm">
                    <Clock size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black uppercase tracking-tight text-black leading-none">24/7 Service</h4>
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

            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">
               DON'T SEE <br /> <span className="text-[#FB7E10]">YOUR LOCATION?</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm max-w-2xl mx-auto">Our routes are updated daily. Call our specialized hotline to check live mobile technician availability in your specific area.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
               <a href="tel:+447494024653" className="inline-flex items-center justify-center gap-4 bg-[#FB7E10] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg md:text-xl hover:bg-orange-600 hover:scale-105 transition-all shadow-xl active:scale-95 shadow-orange-900/10">
                  <Phone size={24} fill="white" /> +447494024653
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
