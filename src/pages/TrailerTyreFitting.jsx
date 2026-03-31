import React from 'react';
import { Phone, CheckCircle, Clock, MapPin, Wrench, ShieldCheck, Truck, Route, PhoneCall, Gauge } from 'lucide-react';

const TrailerTyreFitting = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[80vh] min-h-[600px] flex flex-col justify-end items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://www.morristrailers.co.uk/wp-content/uploads/2020/02/services-inner-banner-1536x384.jpg"
                        alt="Mobile Trailer Tyre Fitting Banner"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/80 to-[#0B1528]/40" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 pb-20 md:pb-32 text-center animate-fadeIn">
                    <div className="inline-flex items-center gap-2 bg-[#FB7E10]/20 border border-[#FB7E10]/30 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
                        <Truck size={16} className="text-[#FB7E10]" />
                        <span className="text-[#FB7E10] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Trailer, RV & Campervan Support</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
                        Mobile Trailer <br className="hidden md:block"/> <span className="text-[#FB7E10]">Tyre Fitting</span>
                    </h1>
                    
                    <p className="text-slate-300 max-w-2xl mx-auto font-medium text-base md:text-lg mb-10 leading-relaxed">
                        Don’t drive miles just to change tyres — we come to your trailer wherever it is parked, even in remote or rural spots.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="tel:+447495336005"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-10 py-5 rounded-xl font-black text-lg uppercase tracking-widest hover:bg-orange-600 transition-all shadow-[0_0_40px_rgba(251,126,16,0.4)] hover:scale-105 active:scale-95"
                        >
                            <Phone size={24} fill="white" className="stroke-none" />
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="py-16 md:py-24 px-4 sm:px-10 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Left: Detailed Info */}
                    <div className="lg:w-2/3 space-y-16">
                        
                        {/* Intro */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-black leading-[1.1] tracking-tight uppercase">
                                Expert Tyre Service <br className="hidden md:block"/> <span className="text-[#FB7E10]">At Your Location</span>
                            </h2>
                            <div className="w-16 h-1.5 bg-[#FB7E10]" />
                            <p className="text-gray-500 font-medium leading-relaxed text-base md:text-lg pt-4">
                                Trailers, motorhomes, RVs, and campervans require specialized care due to their higher load ratings and heavier structures. Traveling to a workshop with a flat or damaged trailer tyre can be stressful, dangerous, or completely impossible if you're stranded in a rural or remote location.
                            </p>
                            <p className="text-gray-500 font-medium leading-relaxed text-base md:text-lg">
                                That's where Mobile Tyre Champions steps in. We aim to reach you within about an hour with a fully equipped mobile response van to handle all your trailer tyre work right where you are.
                            </p>
                        </div>

                        {/* Why Use Our Service grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#FB7E10] group-hover:text-white transition-colors">
                                    <Clock size={24} className="text-[#FB7E10] group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4">Rapid On-Site Response</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Why wait around? We strive to be with you in record time, complete with the correct tyres and tools so you can minimise your time off the road and avoid expensive detours.
                                </p>
                            </div>
                            
                            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#FB7E10] group-hover:text-white transition-colors">
                                    <ShieldCheck size={24} className="text-[#FB7E10] group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4">Designed for Heavy Loads</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    We supply and fit high-durability tyres perfectly suited for heavy structural loads typical in trailers and motorhomes, ensuring absolute safety for the journey ahead.
                                </p>
                            </div>
                        </div>
                        
                        {/* Custom Image Section */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] border-8 border-white">
                            <img 
                                src="/images/mobile-tyre-champions-van.jpg" 
                                alt="Mobile Tyre Champions Van" 
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-black text-2xl uppercase tracking-tighter">Ready for Any Challenge</p>
                                <p className="text-gray-300 font-medium">Equipped for every trailer, caravan and RV emergency.</p>
                            </div>
                        </div>

                        {/* What We Provide List */}
                        <div className="space-y-8 bg-[#0B1528] p-8 md:p-12 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 opacity-[0.03] pointer-events-none">
                                <Wrench size={300} className="text-white" />
                            </div>
                            
                            <h2 className="text-3xl font-black text-white uppercase tracking-tight relative z-10">What We Provide</h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 pt-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#FB7E10] rounded-xl flex items-center justify-center shrink-0">
                                        <Route size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">On-Site Tyres & Sidewalls Inspection</h4>
                                        <p className="text-slate-400 text-sm">Thorough technical assessment.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#FB7E10] rounded-xl flex items-center justify-center shrink-0">
                                        <Truck size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Removal & Mounting of New Tyres</h4>
                                        <p className="text-slate-400 text-sm">Safe, scratch-free mechanical handling.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#FB7E10] rounded-xl flex items-center justify-center shrink-0">
                                        <Gauge size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Precision Wheel Balancing</h4>
                                        <p className="text-slate-400 text-sm">Ensuring smooth driving stability.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#FB7E10] rounded-xl flex items-center justify-center shrink-0">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Load & Pressure Safety Checks</h4>
                                        <p className="text-slate-400 text-sm">Optimized for maximum structural weight.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right: "Services Include" Card Sidebar */}
                    <div className="lg:w-1/3 w-full sticky top-32">
                        <div className="bg-[#FB7E10] rounded-3xl p-8 md:p-10 text-white relative shadow-[0_20px_40px_rgba(251,126,16,0.3)] overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

                           <div className="relative z-10 space-y-8">
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight drop-shadow-md">Services Include:</h3>
                                
                                <div className="space-y-5 pt-2">
                                    {[
                                        "On-site fitting for trailers, RVs, and campervans",
                                        "Tyre inspection, mounting & balancing",
                                        "Safety checks built for heavy hauls",
                                        "Specialist equipment for high load ratings",
                                        "Fast, convenient mobile assistance",
                                        "Puncture repairs where safe"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4 group/item">
                                            <div className="w-6 h-6 mt-0.5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                                <CheckCircle size={14} className="text-white" />
                                            </div>
                                            <span className="font-bold text-white/90 leading-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/20">
                                    <h4 className="uppercase font-black text-xs tracking-widest text-white/70 mb-4 text-center">Get Mobile Support Now</h4>
                                    <a href="tel:+447495336005" className="w-full flex items-center justify-center gap-3 bg-white text-[#FB7E10] py-5 rounded-xl font-black uppercase tracking-widest text-sm md:text-base hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                                        <PhoneCall size={20} />
                                        07495 336 005
                                    </a>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrailerTyreFitting;
