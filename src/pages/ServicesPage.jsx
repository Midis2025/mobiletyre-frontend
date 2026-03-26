import React from 'react';
import Services from '../components/Services';
import { Phone, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-['Outfit'] pt-24">
            
            {/* ── HERO ── */}
            <section className="relative py-32 md:py-48 px-4 overflow-hidden border-b border-gray-200">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1544436074-c603a16fc0c1?q=80&w=2070&auto=format&fit=crop" 
                        alt="Service Hero Background" 
                        className="w-full h-full object-cover opacity-10 grayscale scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-slate-50"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-100 px-4 py-2 rounded-xl shadow-sm">
                        <span className="text-[#FB7E10] font-black uppercase text-[10px] tracking-widest italic animate-pulse">Professional Mobile Units</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] text-black">
                        OUR <span className="text-[#FB7E10]">SERVICES</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto italic leading-relaxed">
                        High-precision mobile tyre solutions delivered at your request. Fast, reliable execution available 24 hours a day.
                    </p>
                </div>
            </section>

            {/* ── SERVICES COMPONENT (Contextually integrated) ── */}
            <section className="bg-white">
                <Services />
            </section>

            {/* ── EMERGENCY CALL ── */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-12 md:p-20 text-center space-y-10 shadow-2xl border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -mr-32 -mt-32"></div>

                    <h2 className="text-black text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] relative z-10">
                        NEED AN <br /> <span className="text-[#FB7E10]">EMERGENCY </span> QUOTE?
                    </h2>
                    
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <a href="tel:02033554005" className="inline-flex items-center gap-4 bg-[#FB7E10] text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest text-lg md:text-2xl hover:bg-orange-600 hover:scale-105 transition-all shadow-2xl">
                            <Phone size={32} fill="white" /> 020 3355 4005
                        </a>
                        <p className="text-gray-400 font-black uppercase text-xs tracking-widest italic flex items-center gap-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_green]"></span>
                            Live dispatch center open 24 hours a day
                        </p>
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ── */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-6xl mx-auto space-y-16 text-center">
                    <div className="space-y-4">
                        <h2 className="text-black text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">THE <span className="text-[#FB7E10]">MOBILE</span> ADVANTAGE</h2>
                        <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs italic">Why we outperform traditional workshops</p>
                    </div>
                    
                    <div className="overflow-x-auto rounded-[3rem] shadow-2xl border border-gray-100">
                        <table className="w-full text-left min-w-[700px]">
                            <thead className="bg-[#0B1528] text-white">
                                <tr>
                                    <th className="p-8 font-black uppercase text-xs tracking-widest italic opacity-50">Strategic Feature</th>
                                    <th className="p-8 font-black uppercase text-xs tracking-widest text-center">Mobile Tyre Crew</th>
                                    <th className="p-8 font-black uppercase text-xs tracking-widest text-center opacity-50">Local Garage</th>
                                </tr>
                            </thead>
                            <tbody className="text-black font-bold divide-y divide-gray-100 italic">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-8 pl-12">TRAVEL TIME</td>
                                    <td className="p-8 text-center text-[#FB7E10] text-xl">0 MINS <span className="text-[10px] uppercase align-top">(WE ARRIVE)</span></td>
                                    <td className="p-8 text-center text-gray-400">90-120 MINS TOTAL</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-8 pl-12">OPERATIONAL MODE</td>
                                    <td className="p-8 text-center text-[#FB7E10] text-xl">ASYNC <span className="text-[10px] uppercase align-top">(WORK FROM HOME)</span></td>
                                    <td className="p-8 text-center text-gray-400">IDLE IN COLD WAITING ROOM</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-8 pl-12">PRICING STRUCTURE</td>
                                    <td className="p-8 text-center text-[#FB7E10] text-xl underline decoration-2">TRANSPARENT FIXED</td>
                                    <td className="p-8 text-center text-gray-400">UNFATHOMABLE WORKSHOP FEES</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-8 pl-12">AVAILABILITY MATRIX</td>
                                    <td className="p-8 text-center text-[#FB7E10] text-xl">24/7/365 GLOBAL</td>
                                    <td className="p-8 text-center text-gray-400">STRICT 9 AM - 5 PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
