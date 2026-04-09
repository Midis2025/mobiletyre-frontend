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

                    {/* Social Media Icons */}
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <a 
                            href="https://www.facebook.com/people/Mobile-Tyre-Champions/61572150444121/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FB7E10] hover:text-white transition-all duration-300 border border-white/10 group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.instagram.com/mobiletyrechampions/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FB7E10] hover:text-white transition-all duration-300 border border-white/10 group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a 
                            href="https://www.tiktok.com/@mobiletyrechampions?is_from_webapp=1&sender_device=pc" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FB7E10] hover:text-white transition-all duration-300 border border-white/10 group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.6-1.53-2.03-2.52V15.14c.05 3.44-2.14 6.99-5.73 7.84-3.94 1.12-8.38-1.12-9.61-4.99-1.3-3.79 1.12-8.38 5.73-8.84.44-.04.88-.04 1.32.02v4.01c-.44-.06-.88-.06-1.32-.02-1.99.23-3.72 2.05-3.6 4.09.12 2.04 2.14 3.73 4.13 3.42 1.99-.31 3.42-2.31 3.42-4.33V0h1.36z"/>
                            </svg>
                        </a>
                    </div>
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
