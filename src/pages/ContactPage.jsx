import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="font-['Outfit'] bg-[#060C18] min-h-screen text-white overflow-x-hidden">
            
            {/* ── HERO SECTION ─────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#FB7E10]/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full animate-in fade-in slide-in-from-top-4 duration-1000">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-green-400">Live: 54 Technicians Online Now — UK-Wide</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-tight">
                        GET IN <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #FB7E10 0%, #ffb347 100%)' }}>TOUCH</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto italic">
                        Need an emergency tyre change or just a routine service? Our team is standing by to help you anywhere, anytime.
                    </p>
                </div>
            </section>

            {/* ── CONTACT GRID ────────────────────────────────────────────── */}
            <section className="py-20 px-4 md:px-10 lg:px-20 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left: Contact Info (4 cols) */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-black text-xs font-black uppercase tracking-[0.3em] bg-[#FB7E10] inline-block px-3 py-1 rounded-md">Direct Contact</h3>
                            <h2 className="text-4xl font-black tracking-tight uppercase italic leading-none">Speak to an Expert Info.</h2>
                        </div>

                        <div className="space-y-8">
                            <a href="tel:02033554005" className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-[#FB7E10] transition-all duration-500">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#FB7E10] group-hover:bg-white group-hover:text-black transition-colors">
                                    <Phone size={28} />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-gray-500 text-xs font-black uppercase tracking-widest group-hover:text-white/70">Phone 24/7</span>
                                    <span className="block text-xl font-black group-hover:text-white transition-colors">020 3355 4005</span>
                                </div>
                            </a>

                            <a href="mailto:hello@mobiletyrecrew.co.uk" className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white transition-all duration-500">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 group-hover:bg-black group-hover:text-white transition-colors">
                                    <Mail size={28} />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-gray-500 text-xs font-black uppercase tracking-widest">Support Email</span>
                                    <span className="block text-xl font-black text-white group-hover:text-black transition-colors break-all text-sm sm:text-lg">hello@mobiletyrecrew.co.uk</span>
                                </div>
                            </a>

                            <div className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400">
                                    <MapPin size={28} />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-gray-500 text-xs font-black uppercase tracking-widest">Global HQ</span>
                                    <span className="block text-lg font-black leading-tight italic">London, UK • Nationwide Coverage</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-[#0B1528] border border-white/10 rounded-[2.5rem] space-y-6 shadow-2xl">
                            <div className="flex items-center gap-3">
                                <Clock className="text-[#FB7E10]" />
                                <h4 className="text-white font-black uppercase italic tracking-wider text-xl">Operational Hours</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-white/5 pb-2 text-sm sm:text-base">
                                    <span className="text-white/60 font-medium">Monday — Friday</span>
                                    <span className="text-white font-black italic">24 Hours</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2 text-sm sm:text-base">
                                    <span className="text-white/60 font-medium">Saturday</span>
                                    <span className="text-white font-black italic">24 Hours</span>
                                </div>
                                <div className="flex justify-between text-sm sm:text-base">
                                    <span className="text-white/60 font-medium">Sunday & Holidays</span>
                                    <span className="text-white font-black italic">24 Hours</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[3rem] p-8 md:p-16 h-full border border-gray-100 shadow-2xl relative overflow-hidden">
                            {submitted && (
                                <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-10 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                    <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white scale-110 shadow-lg animate-bounce">
                                        <CheckCircle size={56} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-black text-black uppercase italic">Message Sent!</h2>
                                        <p className="text-gray-500 font-medium">An expert technician will review your request and call you back shortly.</p>
                                    </div>
                                    <button onClick={() => setSubmitted(false)} className="text-[#FB7E10] font-black uppercase text-xs tracking-widest border-b-2 border-[#FB7E10] pb-1">
                                        Send another message
                                    </button>
                                </div>
                            )}

                            <div className="space-y-12">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
                                    <div className="space-y-4">
                                        <h3 className="text-black font-black text-3xl sm:text-5xl uppercase italic tracking-tighter leading-none">
                                            SEND US A <br className="hidden sm:block" /> <span className="text-[#FB7E10]">MESSAGE</span>
                                        </h3>
                                        <p className="text-gray-400 font-medium text-sm sm:text-base">We'll get back to you in less than 30 minutes.</p>
                                    </div>
                                    <div className="flex -space-x-4">
                                        {[1,2,3,4].map(i => (
                                            <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                                                <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="avatar" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-black flex items-center justify-center text-white text-[10px] font-black">+14</div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Full Name</label>
                                        <input required type="text" placeholder="John Doe" className="w-full bg-[#F1F3F6] border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all placeholder:text-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Phone Number</label>
                                        <input required type="tel" placeholder="020 3355 4005" className="w-full bg-[#F1F3F6] border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all placeholder:text-gray-300" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Email Address</label>
                                        <input required type="email" placeholder="john@example.com" className="w-full bg-[#F1F3F6] border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all placeholder:text-gray-300" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Service</label>
                                        <select className="w-full bg-[#F1F3F6] border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-4 sm:py-5 font-bold text-black outline-none transition-all appearance-none cursor-pointer">
                                            <option>Emergency Service</option>
                                            <option>Home/Work Fitting</option>
                                            <option>Puncture Repair</option>
                                            <option>Fleet Support</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pl-1">Message</label>
                                        <textarea required rows="4" placeholder="How can we help?" className="w-full bg-[#F1F3F6] border-2 border-transparent focus:border-[#FB7E10] focus:bg-white rounded-2xl px-6 py-5 font-bold text-black outline-none transition-all placeholder:text-gray-300 resize-none"></textarea>
                                    </div>
                                    <div className="md:col-span-2">
                                        <button type="submit" className="w-full bg-[#0B1528] text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-lg hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]">
                                            <Send size={20} className="text-[#FB7E10]" /> Send Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FULL-SCREEN SATELLITE COMMAND CENTER ────────────────────── */}
            <section className="bg-[#02060E] min-h-[600px] md:min-h-[850px] relative overflow-hidden flex items-center justify-center border-t border-white/5">
                
                {/* Background Layer */}
                <div className="absolute inset-0 z-0 text-white/10 grayscale">
                    <div 
                        className="absolute inset-0 bg-center bg-cover opacity-30 scale-110 animate-[pulse-slow_15s_ease-in-out_infinite]"
                        style={{ 
                            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
                            filter: 'grayscale(100%) brightness(0.4)'
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060C18] via-transparent to-[#060C18]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060C18] via-transparent to-[#060C18]"></div>
                </div>

                {/* HUD Elements */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] -top-full animate-[radar-scan_8s_linear_infinite]"></div>
                </div>

                <div className="relative z-20 w-full h-full flex items-center justify-center px-4">
                    <div className="relative w-full max-w-7xl min-h-[500px] flex items-center justify-center">
                        <div 
                            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.15] mix-blend-screen scale-125 md:scale-150 animate-[slow-bob_10s_ease-in-out_infinite] grayscale invert"
                            style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ed/United_Kingdom_physical_map.svg')" }}
                        ></div>

                        {/* Tech Hotspots */}
                        <div className="absolute top-[60%] left-[55%] group/pin">
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full animate-ping"></div>
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase border border-white/10 opacity-0 group-hover/pin:opacity-100 transition-all duration-300">London Sector</div>
                        </div>

                        <div className="absolute top-10 left-10 md:top-20 md:left-20 space-y-4">
                            <div className="space-y-1">
                                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] block animate-pulse">Tracking Active</span>
                                <h3 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">NATIONWIDE <br /> <span className="text-[#FB7E10]">SYNC</span></h3>
                            </div>
                        </div>

                        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-right space-y-6">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] space-y-2 shadow-2xl skew-x-[-4deg]">
                                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest block">Units Active</span>
                                <div className="text-white text-5xl font-black italic tabular-nums leading-none">50+</div>
                            </div>
                            <a href="tel:02033554005" className="inline-block bg-[#FB7E10] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                                Emergency Line
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes radar-scan {
                    0%   { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.4; transform: scale(1.1); }
                    50% { opacity: 0.6; transform: scale(1.15); }
                }
                @keyframes slow-bob {
                    0%, 100% { transform: translateY(0) scale(1.25); }
                    50% { transform: translateY(-30px) scale(1.3); }
                }
                @media (min-width: 768px) {
                    @keyframes slow-bob {
                        0%, 100% { transform: translateY(0) scale(1.5); }
                        50% { transform: translateY(-40px) scale(1.55); }
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
