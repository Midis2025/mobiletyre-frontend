import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Phone, CheckCircle, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <h2 className="text-3xl font-black text-slate-800 mb-4 uppercase">Service Not Found</h2>
                <p className="text-slate-500 mb-8">The service you're looking for or isn't available right now.</p>
                <Link to="/" className="bg-[#FB7E10] text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* ── HERO SECTION - As requested in screenshot ───────────────────────── */}
            <section className="relative h-[100vh] flex flex-col justify-end items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover scale-105"
                    />
                    {/* Dark Overlay (Gradient matches common luxury automotive styles) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 pb-20 md:pb-32 text-center animate-fadeIn">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12 drop-shadow-2xl">
                        {service.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="tel:+447494024653"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#1E63C4] text-white px-10 py-5 rounded-xl font-black text-lg uppercase tracking-widest hover:bg-blue-700 transition-all shadow-[0_0_50px_rgba(30,99,196,0.3)] hover:scale-105 active:scale-95"
                        >
                            <Phone size={24} fill="white" className="stroke-none" />
                            Call Us Now
                        </a>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-30">
                    <span className="text-white text-[10px] uppercase font-black tracking-widest">Discover More</span>
                    <ArrowRight size={16} className="text-white rotate-90" />
                </div>
            </section>

            {/* ── SERVICE DETAILS ─────────────────────────────────────────────────── */}
            <section className="py-24 px-4 sm:px-10 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Left: Detailed Info */}
                    <div className="lg:w-2/3 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full shadow-sm">
                                <span className="text-[#FB7E10] text-[10px] font-black uppercase tracking-widest">Services Detail</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-6xl font-black text-black leading-none tracking-tighter uppercase">
                                <span className="text-[#FB7E10]">Expert Tyre Care</span> <br />
                                for High-End Cars
                            </h2>
                            <div className="w-16 h-1 bg-[#FB7E10]" />
                        </div>

                        {/* Feature List */}
                        <div className="space-y-10 pt-4">
                            {/* Item 1 */}
                            <div className="flex gap-6 items-start group">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FB7E10] border border-orange-100 group-hover:bg-[#FB7E10] group-hover:text-white transition-all duration-500">
                                    <ShieldCheck size={24} />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-black text-black uppercase tracking-tight">Precision Service, Zero Risk</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed max-w-xl">
                                        Our team understands that luxury vehicles demand extra care. Every fitting is carried out with protective tools and non-contact mounting systems to preserve the integrity of your alloys. From pressure calibration to torque adjustment, each step is handled to perfection, keeping your performance smooth, balanced, and safe on every drive.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FB7E10] border border-orange-100 group-hover:bg-[#FB7E10] group-hover:text-white transition-all duration-500">
                                    <Clock size={24} />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-black text-black uppercase tracking-tight">24/7 On-Call Assistance</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed max-w-xl">
                                        Whether you're stranded with a puncture at midnight or require a full tyre set replacement during the day, our mobile service reaches you anywhere — at home, office, or roadside. We're available round the clock to ensure your luxury car never stays off the road for long.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FB7E10] border border-orange-100 group-hover:bg-[#FB7E10] group-hover:text-white transition-all duration-500">
                                    <MapPin size={24} />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-black text-black uppercase tracking-tight">Trusted by Luxury Car Owners</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed max-w-xl">
                                        Discerning clients trust Mobile Tyre Champions for care, confidentiality, and precision. We're known for our professionalism, premium-grade tools, and exceptional handling of high-end vehicles — maintaining showroom standards, even in mobile conditions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: "Services Include" Card Sidebar */}
                    <div className="lg:w-1/3 w-full sticky top-32">
                        <div className="bg-[#0B1528] rounded-3xl p-10 text-white relative h-full shadow-2xl border border-white/5 overflow-hidden group">
                           
                           {/* Dark Decorative Gradient */}
                           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                           <div className="relative z-10 space-y-8">
                                <h3 className="text-3xl font-black uppercase tracking-tight">Services Include:</h3>
                                
                                <p className="text-gray-400 font-medium leading-relaxed text-sm">
                                    Our {service.title} covers full tyre removal and installation, dynamic wheel balancing, and TPMS recalibration. Each service includes a rim inspection, corrosion protection treatment if required, and final pressure optimization according to OEM guidelines. We also ensure the dashboard system is reset, ensuring your tyre performance and safety features work flawlessly.
                                </p>

                                {/* Feature List */}
                                <div className="space-y-4 pt-4">
                                    {[
                                        "Luxury Vehicle Specialists",
                                        "Damage-Free Handling",
                                        "OEM-Approved Equipment",
                                        "Convenient Mobile Service"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 group/item">
                                            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FB7E10] group-hover/item:bg-[#FB7E10] transition-colors" />
                                            <span className="font-bold text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link 
                                    to="/contact"
                                    className="mt-8 w-full flex items-center justify-center gap-3 bg-[#1E63C4] text-white py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl active:scale-95 border border-blue-400/20"
                                >
                                    Make Appointment
                                </Link>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA SECTION ───────────────────────────────────────────────── */}
            <section className="pb-24 px-4 sm:px-10 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-black min-h-[400px] flex items-center shadow-2xl group">
                    {/* Background Image (Tyre texture) */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/images/Gradient.jpg" 
                            alt="Tyre Texture" 
                            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[3000ms] grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-10 md:p-20 space-y-10 max-w-3xl">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase">
                                Ready for the <br /> Road Ahead?
                            </h2>
                            <p className="text-gray-400 font-medium leading-relaxed text-lg pr-4">
                                At Mobile Tyre Champions, we fit and replace tyres for leading manufacturers including <span className="text-white">Rolls-Royce, Bentley, Porsche, Lamborghini, BMW, Mercedes-Benz, Audi, and Range Rover</span>—ensuring precise fitment, calibration, and reliable on-site convenience every time.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <Link 
                                to="/contact"
                                className="w-full sm:w-auto bg-[#FF6600] text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-base hover:bg-orange-600 transition-all shadow-[0_10px_40px_rgba(255,102,0,0.3)] active:scale-95 text-center"
                            >
                                Book Service
                            </Link>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                                    <Phone size={24} className="text-[#FF6600]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1 text-center sm:text-left">Priority Hotline</span>
                                    <span className="text-white font-black text-2xl tracking-tight leading-none">+44 7494 024653</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
