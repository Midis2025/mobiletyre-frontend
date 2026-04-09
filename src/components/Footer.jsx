import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0B1528] pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-10 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {/* Column 1: About */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center h-16 md:h-20 justify-center md:justify-start">
                        <img src="/images/MTC logo 3.png" alt="Mobile Tyre Champions" className="h-full w-auto max-w-full object-contain" />
                    </Link>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0 text-center md:text-left">
                        Mobile Tyre Champions is a 24/7 mobile tyre fitting service based at Grosvenor Road, Aldershot GU11 3HY, covering Surrey and Hampshire. We come to you at home, at work, or on the roadside — fast, honest, and fully mobile.
                    </p>
                </div>

                {/* Column 2: Our Services */}
                <div className="space-y-8 text-center md:text-left">
                    <h4 className="text-white font-black text-lg uppercase tracking-tight">Our Services</h4>
                    <div className="flex flex-col space-y-4">
                        <Link to="/services/emergency-tyre-fitting" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Emergency Tyre Fitting</Link>
                        <Link to="/services/precision-wheel-balancing" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Wheel Balancing</Link>
                        <Link to="/services/tyre-sales" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Tyre Sales</Link>
                        <Link to="/services/locking-wheel-nut-removal" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Locking Wheel Nut Removal</Link>
                        <Link to="/services/trailer-tyre-fitting" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Mobile Trailer Tyre Fitting</Link>
                    </div>
                </div>

                {/* Column 3: Quick Links & Support */}
                <div className="grid grid-cols-2 gap-4 text-center md:text-left">
                    <div className="space-y-8">
                        <h4 className="text-white font-black text-lg uppercase tracking-tight">Quick Links</h4>
                        <div className="flex flex-col space-y-4 text-gray-400 text-sm font-medium">
                            <Link to="/" className="hover:text-[#FB7E10] transition-colors">Home</Link>
                            <Link to="/services" className="hover:text-[#FB7E10] transition-colors">Services</Link>
                            <Link to="/about" className="hover:text-[#FB7E10] transition-colors">About Us</Link>
                            <Link to="/locations" className="hover:text-[#FB7E10] transition-colors">Locations</Link>
                            <Link to="/contact" className="hover:text-[#FB7E10] transition-colors">Contact Us</Link>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h4 className="text-white font-black text-lg uppercase tracking-tight">Support</h4>
                        <div className="flex flex-col space-y-4 text-gray-400 text-sm font-medium">
                            <Link to="/privacy" className="hover:text-[#FB7E10] transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-[#FB7E10] transition-colors">Terms of Service</Link>
                            <Link to="/cookies" className="hover:text-[#FB7E10] transition-colors">Cookie Policy</Link>
                            <Link to="/accessibility" className="hover:text-[#FB7E10] transition-colors">Accessibility</Link>
                        </div>
                    </div>
                </div>

                {/* Column 4: Hotline Card */}
                <div className="lg:mt-0 lg:ml-auto">
                    <div className="bg-[#050B16] border border-white/5 rounded-[2.5rem] p-8 space-y-6 text-center shadow-2xl">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest block text-center">24/7 Hotline</span>
                            <h4 className="text-[#FB7E10] font-black text-2xl xl:text-3xl tracking-tight whitespace-nowrap text-center">
                                +44 7494 024653
                            </h4>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <a
                                href="tel:+447494024653"
                                className="bg-[#FB7E10] text-white w-full py-4 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-orange-600 transition-all text-center shadow-lg shadow-orange-900/20 active:scale-[0.98]"
                            >
                                Call Now
                            </a>
                            <a
                                href="mailto:info@mobiletyrechampions.com"
                                className="text-gray-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest text-center"
                            >
                                info@mobiletyrechampions.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto pt-10 mt-16 border-t border-white/5 text-center px-4">
                <p className="text-gray-500 text-[10px] md:text-sm font-medium flex flex-wrap justify-center gap-x-2 gap-y-1">
                    <span>© 2025 Mobile Tyre Champions. All rights reserved.</span>
                    <span className="text-gray-700 hidden sm:inline">|</span>
                    <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                    <span className="text-gray-700 hidden sm:inline">|</span>
                    <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms and Conditions</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
