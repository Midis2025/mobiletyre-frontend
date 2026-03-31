import React from 'react';
import { Phone, CheckCircle, AlertTriangle, PenTool, PoundSterling, PhoneCall, HelpCircle, Wrench } from 'lucide-react';

const LockingWheelNutRemoval = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[80vh] min-h-[600px] flex flex-col justify-end items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://www.alloywheelnutsandbolts.co.uk/wp-content/uploads/2019/11/technician.jpg"
                        alt="Locking Wheel Nut Removal Technician"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/80 to-[#0B1528]/40" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 pb-20 md:pb-32 text-center animate-fadeIn">
                    <div className="inline-flex items-center gap-2 bg-[#FB7E10]/20 border border-[#FB7E10]/30 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
                        <Wrench size={16} className="text-[#FB7E10]" />
                        <span className="text-[#FB7E10] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Specialist Mobile Service</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
                        Locking Wheel <br className="hidden md:block"/> <span className="text-[#FB7E10]">Nut Removal</span>
                    </h1>
                    
                    <p className="text-slate-300 max-w-2xl mx-auto font-medium text-base md:text-lg mb-10 leading-relaxed">
                        Lost your locking wheel nut key? Seized or damaged nuts? Mobile Tyre Champions provides 100% damage-free removal at your home, work, or roadside.
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
                                When Locking Wheel Nuts <br className="hidden md:block"/> <span className="text-[#FB7E10]">Become a Problem</span>
                            </h2>
                            <div className="w-16 h-1.5 bg-[#FB7E10]" />
                            <p className="text-gray-500 font-medium leading-relaxed text-base md:text-lg pt-4">
                                Modern vehicles are commonly fitted with locking wheel nuts to prevent theft. However, they become a real headache when the key is lost, damaged, or the nuts themselves seize due to over-tightening with harsh air-guns instead of torque wrenches. 
                            </p>
                            <p className="text-gray-500 font-medium leading-relaxed text-base md:text-lg">
                                Attempting DIY removal with reverse thread sockets or chisels often leads to cracked wheel studs and severe alloy damage. Our mobile specialists are fully equipped to remove locking wheel nuts safely and without damaging your alloy wheels.
                            </p>
                        </div>

                        {/* Grid Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#FB7E10] group-hover:text-white transition-colors">
                                    <AlertTriangle size={24} className="text-[#FB7E10] group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4">Why Avoid DIY?</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Locking wheel nuts are designed to resist drilling, chiselling, and hammered removals. DIY attempts usually result in ruined alloys, cracked studs, and much higher repair bills. 
                                </p>
                            </div>
                            
                            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#FB7E10] group-hover:text-white transition-colors">
                                    <PenTool size={24} className="text-[#FB7E10] group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4">Our Specialist Tools</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    We use professional Chrome Molybdenum Laser Locking Wheel Nut Removers that grip the outside of the nut dynamically, bypassing the need for the original key completely damage-free.
                                </p>
                            </div>
                        </div>

                        {/* Cost Guide */}
                        <div className="bg-[#0B1528] p-8 md:p-12 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-[0.03] pointer-events-none">
                                <PoundSterling size={300} className="text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-8 relative z-10">Removal Cost Guide</h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                    <p className="text-[#FB7E10] font-black uppercase tracking-wider text-sm mb-2">Single Wheel</p>
                                    <p className="text-white text-3xl md:text-4xl font-black tracking-tighter">£30 – £50</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                    <p className="text-[#FB7E10] font-black uppercase tracking-wider text-sm mb-2">All Four Wheels</p>
                                    <p className="text-white text-3xl md:text-4xl font-black tracking-tighter">£90 – £120</p>
                                </div>
                            </div>
                            <p className="text-slate-400 font-medium mt-6 text-sm relative z-10 leading-relaxed">
                                *Prices vary based on condition, location, and complexity. Severe DIY damage may incur additional labour charges. Always call for an exact quote.
                            </p>
                        </div>

                        {/* FAQs */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-black uppercase tracking-tight flex items-center gap-4">
                                <HelpCircle size={32} className="text-[#FB7E10]" />
                                Common Questions
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-3">Do I need the key for a mobile tyre replacement?</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">Yes. However, if your key is lost, simply notify us in advance so we can dispatch our technician with the specialist locking wheel nut removal equipment alongside your new tyres.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-3">Will this process damage my alloy wheels?</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">Not when done correctly! Our trained technicians use professional, non-invasive tools designed specifically to extract the nut without harming the lacquer or powder coating of your alloys.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-3">Where should I look for my key before calling?</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">Common hiding places include the glove compartment, boot side compartments, under the boot floor, seat pockets, or under the seats. If you still can't find it, we're here to help.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right: "Services Include" Card Sidebar */}
                    <div className="lg:w-1/3 w-full sticky top-32">
                        <div className="bg-[#FB7E10] rounded-3xl p-8 md:p-10 text-white relative shadow-[0_20px_40px_rgba(251,126,16,0.3)] overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

                           <div className="relative z-10 space-y-8">
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight drop-shadow-md">What's Included:</h3>
                                
                                <div className="space-y-5 pt-2">
                                    {[
                                        "Safe removal up to 4 locking nuts",
                                        "Non-damaging precision tools used",
                                        "Available at Home, Work or Roadside",
                                        "Can combine with tyre fitting",
                                        "Complete hub & wheel inspection",
                                        "Advice on replacement nuts"
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
                                    <h4 className="uppercase font-black text-xs tracking-widest text-white/70 mb-4 text-center">Request Immediate Dispatch</h4>
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

export default LockingWheelNutRemoval;
