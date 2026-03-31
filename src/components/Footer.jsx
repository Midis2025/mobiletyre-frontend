import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0B1528] pt-16 md:pt-20 pb-8 md:pb-10 px-4 sm:px-10 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-20">
                {/* Brand */}
                <div className="space-y-6 md:space-y-8 text-center sm:text-left flex flex-col items-center sm:items-start">
                    <Link to="/" className="flex items-center h-16 md:h-20">
                        <img src="/images/Asset 2.png" alt="Mobile Tyre Champions" className="h-full w-auto max-w-full object-contain" />
                    </Link>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
                        Engineered for the unexpected. We provide premium roadside tyre services for discerning drivers across the UK.
                    </p>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.facebook.com/profile.php?id=61583405162722"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#FB7E10]/40 transition-all cursor-pointer group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/mobiletyremates/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#FB7E10]/40 transition-all cursor-pointer group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-8 lg:mt-2">
                    <h4 className="text-white font-black text-lg uppercase tracking-tight">Quick Links</h4>
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Home</Link>
                        <Link to="/about" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">About Us</Link>
                        <Link to="/services" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Services</Link>
                        <Link to="/locations" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Locations</Link>
                        <Link to="/contact" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Contact Us</Link>
                    </div>
                </div>

                {/* Support */}
                <div className="space-y-8 lg:mt-2">
                    <h4 className="text-white font-black text-lg uppercase tracking-tight">Support</h4>
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Cookie Policy</a>
                        <a href="#" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Accessibility</a>
                    </div>
                </div>

                {/* Emergency Card */}
                <div className="lg:mt-2 sm:col-span-2 lg:col-span-1">
                    <div className="bg-[#050B16] border border-white/5 rounded-2xl p-6 space-y-5 text-center sm:text-left">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black text-[#FB7E10] uppercase tracking-widest pl-1">24/7 Hotline</span>
                            <h4 className="text-white font-black text-xl lg:text-2xl tracking-tight whitespace-nowrap">+44 7495 336 005</h4>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a
                                href="tel:+447495336005"
                                className="flex w-full items-center justify-center bg-[#FB7E10] text-white py-3 md:py-3.5 rounded-xl font-black uppercase text-xs md:text-sm tracking-widest hover:bg-orange-600 transition-all active:scale-[0.98] shadow-lg shadow-orange-900/10"
                            >
                                Call Now
                            </a>
                            <a
                                href="mailto:info@mobiletyrechampions.com"
                                className="text-gray-400 hover:text-[#FB7E10] transition-colors text-[10px] font-black uppercase tracking-widest text-center"
                            >
                                info@mobiletyrechampions.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto pt-10 md:pt-20 mt-10 md:mt-20 border-t border-white/5 flex flex-col items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-6 order-1 md:order-2">
                    <span className="text-gray-600 text-[10px] md:text-xs font-semibold">UK-WIDE SERVICE</span>
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#FB7E10]"></div>
                    <span className="text-gray-600 text-[10px] md:text-xs font-semibold">EST. 2012</span>
                </div>
                <p className="text-gray-500 text-[10px] md:text-xs font-medium order-2 md:order-1 text-center">
                    © 2026 Mobile Tyre Champions. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
