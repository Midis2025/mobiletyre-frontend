import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, Shield, Clock, Zap, Star, Search, Navigation } from 'lucide-react';

const locations = [
  { name: 'Aldershot', region: 'Hampshire', postcode: 'GU11', status: 'Operational', jobs: '450+', rating: '4.9' },
  { name: 'Alton', region: 'Hampshire', postcode: 'GU34', status: 'Operational', jobs: '280+', rating: '4.8' },
  { name: 'Ascot', region: 'Berkshire', postcode: 'SL5', status: 'Operational', jobs: '310+', rating: '4.9' },
  { name: 'Ash', region: 'Surrey', postcode: 'GU12', status: 'Operational', jobs: '190+', rating: '4.7' },
  { name: 'Ash Vale', region: 'Surrey', postcode: 'GU12', status: 'Operational', jobs: '220+', rating: '4.8' },
  { name: 'Bagshot', region: 'Surrey', postcode: 'GU19', status: 'Operational', jobs: '150+', rating: '4.9' },
  { name: 'Basingstoke', region: 'Hampshire', postcode: 'RG21', status: 'Operational', jobs: '890+', rating: '5.0' },
  { name: 'Bordon', region: 'Hampshire', postcode: 'GU35', status: 'Operational', jobs: '120+', rating: '4.6' },
  { name: 'Bracknell', region: 'Berkshire', postcode: 'RG12', status: 'Operational', jobs: '540+', rating: '4.9' },
  { name: 'Camberley', region: 'Surrey', postcode: 'GU15', status: 'Operational', jobs: '670+', rating: '4.9' },
  { name: 'Church Crookham', region: 'Hampshire', postcode: 'GU52', status: 'Operational', jobs: '140+', rating: '4.8' },
  { name: 'Cranleigh', region: 'Surrey', postcode: 'GU6', status: 'Operational', jobs: '210+', rating: '4.7' },
  { name: 'Crowthorne', region: 'Berkshire', postcode: 'RG45', status: 'Operational', jobs: '180+', rating: '4.8' },
  { name: 'Farnborough', region: 'Hampshire', postcode: 'GU14', status: 'Operational', jobs: '920+', rating: '5.0' },
  { name: 'Farnham', region: 'Surrey', postcode: 'GU9', status: 'Operational', jobs: '760+', rating: '4.9' },
  { name: 'Fleet', region: 'Hampshire', postcode: 'GU51', status: 'Operational', jobs: '630+', rating: '4.9' },
  { name: 'Frimley', region: 'Surrey', postcode: 'GU16', status: 'Operational', jobs: '410+', rating: '4.8' },
  { name: 'Godalming', region: 'Surrey', postcode: 'GU7', status: 'Operational', jobs: '320+', rating: '4.9' },
  { name: 'Guildford', region: 'Surrey', postcode: 'GU1', status: 'Operational', jobs: '1200+', rating: '5.0' },
  { name: 'Hankley Common', region: 'Surrey', postcode: 'GU8', status: 'Operational', jobs: '80+', rating: '4.5' },
  { name: 'Haslemere', region: 'Surrey', postcode: 'GU27', status: 'Operational', jobs: '240+', rating: '4.8' },
  { name: 'Hindhead', region: 'Surrey', postcode: 'GU26', status: 'Operational', jobs: '170+', rating: '4.7' },
  { name: 'Hook', region: 'Hampshire', postcode: 'RG27', status: 'Operational', jobs: '290+', rating: '4.9' },
  { name: 'Lightwater', region: 'Surrey', postcode: 'GU18', status: 'Operational', jobs: '230+', rating: '4.8' },
  { name: 'Liphook', region: 'Hampshire', postcode: 'GU30', status: 'Operational', jobs: '150+', rating: '4.7' },
  { name: 'Liss', region: 'Hampshire', postcode: 'GU33', status: 'Operational', jobs: '110+', rating: '4.6' },
  { name: 'London', region: 'Greater London', postcode: 'W1', status: 'Operational', jobs: '2500+', rating: '4.9' },
  { name: 'Midhurst', region: 'West Sussex', postcode: 'GU29', status: 'Operational', jobs: '190+', rating: '4.8' },
  { name: 'Petersfield', region: 'Hampshire', postcode: 'GU31', status: 'Operational', jobs: '340+', rating: '4.9' },
  { name: 'Petworth', region: 'West Sussex', postcode: 'GU28', status: 'Operational', jobs: '130+', rating: '4.7' },
  { name: 'Sandhurst', region: 'Berkshire', postcode: 'GU47', status: 'Operational', jobs: '380+', rating: '4.8' },
  { name: 'Southall', region: 'West London', postcode: 'UB1', status: 'Operational', jobs: '720+', rating: '4.9' },
  { name: 'Southampton', region: 'Hampshire', postcode: 'SO14', status: 'Operational', jobs: '1100+', rating: '4.9' },
  { name: 'Tongham', region: 'Surrey', postcode: 'GU10', status: 'Operational', jobs: '160+', rating: '4.8' },
  { name: 'Uxbridge', region: 'West London', postcode: 'UB8', status: 'Operational', jobs: '680+', rating: '4.9' },
  { name: 'Virginia Water', region: 'Surrey', postcode: 'GU25', status: 'Operational', jobs: '220+', rating: '4.9' },
  { name: 'Winchester', region: 'Hampshire', postcode: 'SO22', status: 'Operational', jobs: '950+', rating: '5.0' },
  { name: 'Windlesham', region: 'Surrey', postcode: 'GU20', status: 'Operational', jobs: '180+', rating: '4.8' },
  { name: 'Woking', region: 'Surrey', postcode: 'GU21', status: 'Operational', jobs: '840+', rating: '4.9' },
  { name: 'Yateley', region: 'Hampshire', postcode: 'GU46', status: 'Operational', jobs: '310+', rating: '4.8' },
];

const LocationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = useMemo(() => {
    return locations.filter(loc => 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      loc.postcode.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-['Outfit'] overflow-hidden relative">
      
      {/* ── BACKGROUND ACCENTS ── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/50 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[150px] -ml-64 -mb-64"></div>

      {/* ── HERO ── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 border-b border-gray-200 z-10 overflow-hidden shadow-sm">
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
           <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Find your local mobile tyre technician. We operate 24/7 across {locations.length} major zones.
           </p>

           {/* Search BAR (Interactive) */}
           <div className="max-w-xl mx-auto bg-white border border-gray-200 p-2 rounded-3xl sm:rounded-full shadow-2xl flex flex-col sm:flex-row items-center mt-12 group focus-within:ring-4 focus-within:ring-orange-100 transition-all">
              <div className="flex items-center flex-1 w-full px-6 py-2">
                 <Search size={20} className="text-gray-400 mr-3 group-focus-within:text-[#FB7E10] transition-colors" />
                 <input 
                    type="text" 
                    placeholder="Search city or postcode..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent outline-none font-bold text-black uppercase tracking-widest text-sm"
                 />
              </div>
              <button className="w-full sm:w-auto bg-[#0B1528] text-white px-10 py-5 rounded-2xl sm:rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#FB7E10] transition-all shadow-md active:scale-95">
                 Search Loc
              </button>
           </div>
        </div>
      </section>

      {/* ── LOCATION GRID ── */}
      <section className="py-16 md:py-24 px-6 relative z-10 bg-[#F8FAFC]">
         <div className="max-w-7xl mx-auto">
            
            {/* Results Count */}
            <div className="mb-12 flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-black">Serviceable Zones</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Showing {filteredLocations.length} locations matching your search</p>
                </div>
                <div className="hidden md:flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400">
                    <span className="flex items-center gap-1.5"><Navigation size={14} className="text-[#FB7E10]" /> Hampshire</span>
                    <span className="flex items-center gap-1.5"><Navigation size={14} className="text-[#FB7E10]" /> Surrey</span>
                    <span className="flex items-center gap-1.5"><Navigation size={14} className="text-[#FB7E10]" /> Berkshire</span>
                </div>
            </div>

            {filteredLocations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                   {filteredLocations.map((loc, index) => (
                      <Link 
                        to={`/contact?location=${loc.name}`} 
                        key={index} 
                        className="group relative bg-white border border-slate-200 rounded-[2rem] p-0 hover:border-[#FB7E10] transition-all duration-500 overflow-hidden flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-pointer outline-none focus:ring-4 focus:ring-orange-100"
                      >
                         
                         {/* Card Header: Zone & Status */}
                         <div className="p-8 pb-4 flex justify-between items-start">
                            <div className="space-y-1">
                               <span className="block text-[9px] font-black text-[#FB7E10] uppercase tracking-[0.3em]">Zone ID</span>
                               <h4 className="text-2xl font-black text-[#0B1528] tracking-tighter">
                                  {loc.postcode}
                               </h4>
                            </div>
                            <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                               <span className="text-green-700 text-[9px] font-black uppercase tracking-widest">{loc.status}</span>
                            </div>
                         </div>
    
                         <div className="px-8 pb-8 space-y-6 flex-1">
                            {/* Body: Location Name */}
                            <div className="space-y-1 group-hover:translate-x-1 transition-transform duration-300">
                               <h3 className="text-3xl font-black text-black leading-none uppercase tracking-tight">
                                  {loc.name}
                               </h3>
                               <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                 <MapPin size={12} className="text-[#FB7E10]" /> {loc.region}
                               </p>
                            </div>

                            {/* Trust Signals (MTC-LOC-07 Fix) */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 group-hover:bg-orange-50/50 transition-colors">
                                    <div className="flex items-center gap-1.5 mb-1 text-[#FB7E10]">
                                        <Star size={12} fill="currentColor" />
                                        <span className="text-xs font-black">{loc.rating}</span>
                                    </div>
                                    <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Avg Rating</p>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 group-hover:bg-orange-50/50 transition-colors">
                                    <div className="flex items-center gap-1.5 mb-1 text-black">
                                        <Shield size={12} className="text-[#FB7E10]" />
                                        <span className="text-xs font-black">{loc.jobs}</span>
                                    </div>
                                    <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Jobs Done</p>
                                </div>
                            </div>

                            {/* Clear CTA (MTC-LOC-02 Fix) */}
                            <div className="pt-2">
                                <div className="w-full bg-[#0B1528] text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group-hover:bg-[#FB7E10] transition-colors shadow-lg shadow-black/5 group-hover:shadow-orange-900/10">
                                    Book In {loc.name} <ArrowRight size={14} />
                                </div>
                            </div>
                         </div>
    
                         {/* Footer: Tech Data Strip */}
                         <div className="bg-slate-50 px-8 py-5 flex items-center justify-between border-t border-slate-100 group-hover:bg-orange-50/30 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                                  <Clock size={16} className="text-[#FB7E10]" />
                               </div>
                               <div>
                                  <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest">Deployment</span>
                                  <span className="text-slate-800 text-[10px] font-black">30-60 MINS</span>
                               </div>
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FB7E10] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                Live Now
                            </span>
                         </div>
                      </Link>
                   ))}
                </div>
            ) : (
                <div className="py-24 text-center bg-white rounded-[3rem] border border-dashed border-slate-300">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                        <Search size={40} />
                    </div>
                    <h3 className="text-2xl font-black uppercase text-black mb-2">No Matching Areas Found</h3>
                    <p className="text-slate-500 font-medium">Try a different city or the first part of your postcode.</p>
                    <button 
                        onClick={() => setSearchQuery('')}
                        className="mt-6 text-[#FB7E10] font-black uppercase tracking-widest text-xs hover:underline"
                    >
                        Clear Search
                    </button>
                </div>
            )}
         </div>
      </section>

      {/* ── INFO STRIP ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-y border-gray-100 px-6 relative z-20">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-center md:text-left">
            <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FB7E10] shadow-sm group-hover:scale-110 transition-transform">
                    <Zap size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black uppercase tracking-tight text-black leading-none mb-2">Emergency Response</h4>
                   <p className="text-gray-400 font-medium text-sm">On-site in 60 minutes or less</p>
                </div>
            </div>
            <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                    <Shield size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black uppercase tracking-tight text-black leading-none mb-2">Certified Crew</h4>
                   <p className="text-gray-400 font-medium text-sm">IMI-Certified expert technicians</p>
                </div>
            </div>
            <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                    <Clock size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black uppercase tracking-tight text-black leading-none mb-2">24/7 Service</h4>
                   <p className="text-gray-400 font-medium text-sm">Always available, 365 days a year</p>
                </div>
            </div>
         </div>
      </section>

      {/* ── CALL TO ACTION (MTC-LOC-09 Fix: Better Emphasis) ───────────────────── */}
      <section className="py-24 px-6 relative z-10 bg-slate-50">
         <div className="max-w-6xl mx-auto bg-[#0B1528] rounded-[3.5rem] p-12 md:p-24 text-center space-y-12 border border-gray-100 shadow-2xl overflow-hidden relative group">
            
            {/* decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FB7E10]/10 rounded-full -mr-64 -mt-64 blur-3xl group-hover:bg-[#FB7E10]/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/5">
                    <Navigation size={16} className="text-[#FB7E10]" />
                    <span className="text-white font-black uppercase text-[10px] tracking-widest">Expanded Network Access</span>
                </div>
                <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                   NOT ON <br /> <span className="text-[#FB7E10]">THE LIST?</span>
                </h2>
                <p className="text-white/60 font-medium text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                   Our fleet expands daily. Even if your town isn't listed, we likely have a technician orbiting your area right now.
                </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center pt-4">
               <a href="tel:02071013856" className="inline-flex items-center justify-center gap-4 bg-[#FB7E10] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-lg md:text-xl hover:bg-orange-600 hover:scale-105 transition-all shadow-xl active:scale-95 shadow-orange-900/40">
                  <Phone size={24} fill="white" /> 0207 101 3856
               </a>
               <Link to="/contact" className="inline-flex items-center justify-center gap-4 bg-white text-[#0B1528] px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-lg md:text-xl hover:bg-[#FB7E10] hover:text-white transition-all shadow-xl active:scale-95">
                  Request Area Check
               </Link>
            </div>

            <div className="relative z-10 pt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                <div className="flex items-center gap-3 text-white">
                    <Shield size={20} className="text-[#FB7E10]" />
                    <span className="text-xs font-black uppercase tracking-widest">Safe Work Certified</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                    <Star size={20} className="text-[#FB7E10]" />
                    <span className="text-xs font-black uppercase tracking-widest">4.9/5 Service Rank</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                    <Zap size={20} className="text-[#FB7E10]" />
                    <span className="text-xs font-black uppercase tracking-widest">Rapid Response</span>
                </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default LocationsPage;
