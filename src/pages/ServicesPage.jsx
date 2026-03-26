import Services from '../components/Services';
import { Phone } from 'lucide-react';

const ServicesPage = () => {
    return (
        <div className="bg-[#060C18] min-h-screen text-white font-['Outfit'] pt-24">
            {/* ── HERO ── */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544436074-c603a16fc0c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale scale-110"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
                    <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-tight">
                        OUR <span className="text-[#FB7E10]">SERVICES</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto italic">
                        Professional mobile tyre solutions delivered to your location. Fast, reliable, and available 24/7.
                    </p>
                </div>
            </section>

            {/* ── SERVICES COMPONENT ── */}
            <Services />

            {/* ── EMERGENCY CALL ── */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-[#FB7E10] rounded-[4rem] p-12 md:p-20 text-center space-y-8 shadow-2xl">
                    <h2 className="text-black text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                        NEED AN <br /> <span className="text-white">EMERGENCY </span> QUOTE?
                    </h2>
                    <a href="tel:02033554005" className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-2xl hover:scale-105 transition-all shadow-2xl">
                        <Phone size={28} fill="white" /> 020 3355 4005
                    </a>
                    <p className="text-black font-black uppercase text-xs tracking-widest opacity-80 italic">Dispatch center open 24 hours a day, 365 days a year</p>
                </div>
            </section>

            {/* ── WHY US TABLE ── */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-16 text-center">
                    <h2 className="text-black text-4xl md:text-6xl font-black uppercase italic tracking-tighter">WHY CHOOSE <span className="text-[#FB7E10]">MOBILE?</span></h2>
                    <div className="overflow-x-auto rounded-[3rem] shadow-2xl">
                        <table className="w-full text-left min-w-[600px]">
                            <thead className="bg-[#0B1528] text-white">
                                <tr>
                                    <th className="p-8 font-black uppercase text-xs tracking-widest">Feature</th>
                                    <th className="p-8 font-black uppercase text-xs tracking-widest text-center">Mobile Tyre Crew</th>
                                    <th className="p-8 font-black uppercase text-xs tracking-widest text-center">Local Garage</th>
                                </tr>
                            </thead>
                            <tbody className="text-black font-bold divide-y divide-gray-100 italic">
                                <tr>
                                    <td className="p-8">Travel Time</td>
                                    <td className="p-8 text-center text-[#FB7E10]">0 Mins (We come to you)</td>
                                    <td className="p-8 text-center text-gray-400">45-60 Mins Each Way</td>
                                </tr>
                                <tr>
                                    <td className="p-8">Convenience</td>
                                    <td className="p-8 text-center text-[#FB7E10]">Work from home/office</td>
                                    <td className="p-8 text-center text-gray-400">Cold waiting room</td>
                                </tr>
                                <tr>
                                    <td className="p-8">Cost</td>
                                    <td className="p-8 text-center text-[#FB7E10]">Transparent Fixed Price</td>
                                    <td className="p-8 text-center text-gray-400">Hidden Workshop Fees</td>
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
