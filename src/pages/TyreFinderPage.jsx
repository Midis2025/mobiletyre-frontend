import React from 'react';
import TyreFinder from '../components/TyreFinder';
import { ArrowRight, ShieldCheck, Zap, HelpCircle, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TyreFinderPage = () => {
    return (
        <div className="font-['Outfit'] bg-[#060C18] min-h-screen text-white overflow-x-hidden">
            
            {/* ── PREMIUM HERO SECTION ───────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
                {/* Background animations */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FB7E10]/10 rounded-full blur-[120px] -mr-40 -mt-20 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -ml-40 -mb-20"></div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                ></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full animate-in fade-in slide-in-from-top-4 duration-700">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB7E10] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FB7E10]"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#FB7E10]">UK's Smartest Tyre Lookup</span>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tight italic leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            REGISTRATION <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #FB7E10 0%, #ffb347 100%)' }}>
                                LOOKUP TOOL
                            </span>
                        </h1>
                        <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-[#FB7E10] mx-auto rounded-full"></div>
                        <p className="text-gray-400 text-base sm:text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto italic animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 px-2">
                            Identify your vehicle's specifications in seconds. Enter your registration number and we'll handle the rest.
                        </p>
                    </div>

                    {/* Quick Action Button for emergency */}
                    <div className="pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <a href="tel:+447495336005" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl transition-all group">
                            <Phone className="text-[#FB7E10] group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-black uppercase tracking-widest text-[#FB7E10]">Need Help? Call +44 7495 336 005</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── TYRE FINDER COMPONENT SECTION ─────────────────────────────── */}
            <section className="relative z-20 -mt-10 mb-20">
                <div className="max-w-7xl mx-auto">
                    <TyreFinder />
                </div>
            </section>

            {/* ── BENTO STYLE INFO GRID ──────────────────────────────────────── */}
            <section className="bg-white py-24 md:py-32 px-4 md:px-10 lg:px-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-20">
                    
                    {/* Section Header */}
                    <div className="max-w-3xl space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">
                            WHY ACCURACY <br /> <span className="text-[#FB7E10]">MATTERS</span>
                        </h2>
                        <p className="text-gray-500 font-medium text-lg md:text-xl">Every car is unique. Our lookup tool ensures you get the exact performance your car was engineered for.</p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-[#F1F3F6] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 space-y-8 sm:space-y-12 group hover:shadow-2xl transition-all duration-500 cursor-default border border-gray-100">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                                <ShieldCheck size={28} className="sm:w-8 sm:h-8" />
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <h4 className="text-black font-black text-xl sm:text-2xl uppercase tracking-tight italic">Safety Guaranteed</h4>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm sm:text-base">
                                    The wrong size can affect the ABS, stability control, and braking performance. We eliminate the risk of incorrect fittment.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 (Highlighted) */}
                        <div className="bg-[#0B1528] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 space-y-8 sm:space-y-12 group hover:shadow-2xl transition-all duration-500 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FB7E10]/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#FB7E10] shadow-sm border border-white/5 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <Zap size={28} className="sm:w-8 sm:h-8" />
                            </div>
                            <div className="space-y-3 sm:space-y-4 relative z-10">
                                <h4 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight italic">Instant Search</h4>
                                <p className="text-gray-400 font-medium leading-relaxed text-sm sm:text-base">
                                    Powered by high-performance datasets, our lookup provides detailed vehicle specs in under 5 seconds. Speed is at our core.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#F1F3F6] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 space-y-8 sm:space-y-12 group hover:shadow-2xl transition-all duration-500 cursor-default border border-gray-100">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                                <HelpCircle size={28} className="sm:w-8 sm:h-8" />
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <h4 className="text-black font-black text-xl sm:text-2xl uppercase tracking-tight italic">Expert Support</h4>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm sm:text-base">
                                    Registration not listed? Our team has access to tier-1 manufacturing databases to find the right tyre for any vehicle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRUSTBAR / TESTIMONIAL ────────────────────────────────────── */}
            <section className="bg-slate-50 py-12 sm:py-20 border-t border-gray-100 flex items-center justify-center px-4 overflow-hidden">
                <div className="max-w-4xl w-full bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-xl border border-gray-100 text-center space-y-6 sm:space-y-8 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 sm:w-2 bg-[#FB7E10]"></div>
                    <div className="flex gap-0.5 sm:gap-1 justify-center">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={18} fill="#FB7E10" className="text-[#FB7E10] sm:w-6 sm:h-6" />
                        ))}
                    </div>
                    <p className="text-lg sm:text-2xl md:text-4xl font-black text-black italic tracking-tight leading-tight">
                        "Easiest way to find my Mercedes CLA tyres. Took exactly 3 seconds to get the right size and book a mobile fitting."
                    </p>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-black font-black uppercase text-xs sm:text-sm tracking-widest">Mark S.</span>
                        <span className="text-gray-400 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">Verified Customer from London</span>
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA BAR ─────────────────────────────────────────────── */}
            <section className="bg-[#0B1528] py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
                        READY TO GET <span className="text-[#FB7E10]">MOVING?</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link to="/about" className="w-full md:w-auto px-10 py-5 bg-[#FB7E10] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20 active:scale-95">
                            Learn about us
                        </Link>
                        <a href="tel:+447495336005" className="w-full md:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all active:scale-95">
                            Emergency? Call Now
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TyreFinderPage;
