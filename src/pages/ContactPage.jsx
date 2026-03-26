import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Zap, Shield, Award } from 'lucide-react';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="font-['Outfit'] bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden pt-24">
            
            {/* ── HERO SECTION ── */}
            <section className="relative py-32 md:py-48 px-4 border-b border-gray-200 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop" 
                        alt="Customer Support Hero" 
                        className="w-full h-full object-cover opacity-10 grayscale scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-50"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-100 px-4 py-2 rounded-xl shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-green-700">Live: 50+ Technicians Online UK-Wide</span>
                    </div>
                    <h1 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] text-black">
                        GET IN <br /> <span className="text-[#FB7E10]">TOUCH</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                        Rapid response mobile tyre solutions at your fingertips. Our dispatch team is available 24/7 to assist you.
                    </p>
                </div>
            </section>

            {/* ── CONTACT GRID ── */}
            <section className="py-20 px-4 md:px-10 lg:px-20 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left: Contact Info (4 cols) */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-[2px] bg-[#FB7E10]"></div>
                                <span className="text-[#FB7E10] font-black uppercase text-xs tracking-widest">Connect With Us</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic leading-none text-black">Speak to our <br /> Expert Team.</h2>
                        </div>

                        <div className="space-y-6">
                            <a href="tel:02033554005" className="group flex items-center gap-6 p-6 md:p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:border-[#FB7E10]/30 transition-all duration-500 shadow-xl">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FB7E10] border border-orange-100 group-hover:bg-[#FB7E10] group-hover:text-white transition-all duration-500">
                                    <Phone size={32} />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest leading-none">Emergency Phone</span>
                                    <span className="block text-2xl font-black text-black italic leading-tight">020 3355 4005</span>
                                </div>
                            </a>

                            <div className="group flex items-center gap-6 p-6 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-xl">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
                                    <MapPin size={32} />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest leading-none">Global HQ</span>
                                    <span className="block text-xl font-black text-black italic leading-tight">172 Newport road aldershot Gu124pz</span>
                                </div>
                            </div>

                            <div className="group flex items-center gap-6 p-6 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-xl">
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 border border-green-100">
                                    <Clock size={32} />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest leading-none">Service Window</span>
                                    <span className="block text-2xl font-black text-black italic leading-tight uppercase">Always 24/7/365</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0B1528] rounded-[3rem] p-10 text-white space-y-8 relative overflow-hidden group shadow-2xl">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-[#FB7E10]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                             <div className="space-y-2">
                                 <h4 className="text-2xl font-black italic uppercase tracking-tight">Rapid Response Matrix</h4>
                                 <p className="text-gray-400 font-medium text-sm leading-relaxed">Our centralized dispatch system tracks every unit in real-time to guarantee our arrival within 60 minutes.</p>
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                                     <span className="block text-[#FB7E10] text-3xl font-black italic">30m</span>
                                     <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Avg. Arrival</span>
                                 </div>
                                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                                     <span className="block text-[#FB7E10] text-3xl font-black italic">50+</span>
                                     <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Live Units</span>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[3rem] p-8 md:p-16 h-full border border-gray-100 shadow-2xl relative overflow-hidden">
                            {submitted && (
                                <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-10 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white scale-110 shadow-lg animate-bounce">
                                        <CheckCircle size={56} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-black text-black uppercase italic">Deployment Scheduled!</h2>
                                        <p className="text-gray-500 font-medium italic">Our dispatch center has received your request. A technician will contact you in less than 5 minutes.</p>
                                    </div>
                                    <button onClick={() => setSubmitted(false)} className="text-[#FB7E10] font-black uppercase text-xs tracking-widest border-b-2 border-[#FB7E10] pb-1 hover:text-black hover:border-black transition-colors">
                                        Submit Another Request
                                    </button>
                                </div>
                            )}

                            <div className="space-y-12">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-gray-100">
                                    <div className="space-y-3">
                                        <h3 className="text-black font-black text-3xl sm:text-7xl uppercase italic tracking-tighter leading-[0.8]">
                                            INITIATE <br /> <span className="text-[#FB7E10]">CONTACT</span>
                                        </h3>
                                        <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs italic pl-1">Technical Response Unit • 24H Readiness</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2.5">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Full Name</label>
                                        <input required type="text" placeholder="e.g. Lewis Hamilton" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all placeholder:text-gray-300 shadow-inner" />
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Direct Mobile</label>
                                        <input required type="tel" placeholder="+44 (0) 7..." className="w-full bg-slate-50 border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all placeholder:text-gray-300 shadow-inner" />
                                    </div>
                                    <div className="space-y-2.5 md:col-span-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Current Sector / Postcode</label>
                                        <input required type="text" placeholder="e.g. GU12 4PZ" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all placeholder:text-gray-300 shadow-inner" />
                                    </div>
                                    <div className="space-y-2.5 md:col-span-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Service Required</label>
                                        <div className="relative">
                                            <select className="w-full bg-slate-50 border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all appearance-none cursor-pointer shadow-inner">
                                                <option>IMMEDIATE EMERGENCY FITTING</option>
                                                <option>SCHEDULED MOBILE REPLACEMENT</option>
                                                <option>ROADSIDE PUNCTURE REPAIR</option>
                                                <option>COMMERCIAL FLEET SUPPORT</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">▼</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2.5 md:col-span-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Mission Details / Tyre Size</label>
                                        <textarea required rows="4" placeholder="How can we assist you today?" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all placeholder:text-gray-300 resize-none shadow-inner"></textarea>
                                    </div>
                                    <div className="md:col-span-2 pt-4">
                                        <button type="submit" className="group w-full bg-[#0B1528] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-lg hover:bg-black transition-all shadow-xl flex items-center justify-center gap-4 active:scale-[0.98]">
                                            <Send size={24} className="text-[#FB7E10] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                                            Schedule Deployment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
