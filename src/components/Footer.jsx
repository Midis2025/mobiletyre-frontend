import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0B1528] pt-16 md:pt-24 pb-8 md:pb-12 px-6 sm:px-10 lg:px-20 border-t border-white/5 relative overflow-hidden text-center">
            {/* Subtle premium accent at the top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#FB7E10]/30 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 xl:gap-12 justify-items-center items-start">
                    {/* Column 1: About */}
                    <div className="space-y-6 flex flex-col items-center">
                        <Link to="/" className="flex items-center h-16 md:h-20">
                            <img src="/images/MTC logo 3.png" alt="Mobile Tyre Champions" className="h-full w-auto max-w-full object-contain" />
                        </Link>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs mx-auto">
                            Mobile Tyre Champions is a 24/7 mobile tyre fitting service based at Grosvenor Road, Aldershot GU11 3HY.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center justify-center gap-4">
                            {[
                                { name: 'Facebook', url: 'https://www.facebook.com/people/Mobile-Tyre-Champions/61572150444121/', icon: (
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                )},
                                { name: 'Instagram', url: 'https://www.instagram.com/mobiletyrechampions/', icon: (
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                )},
                                { name: 'TikTok', url: 'https://www.tiktok.com/@mobiletyrechampions', icon: (
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.6-1.53-2.03-2.52V15.14c.05 3.44-2.14 6.99-5.73 7.84-3.94 1.12-8.38-1.12-9.61-4.99-1.3-3.79 1.12-8.38 5.73-8.84.44-.04.88-.04 1.32.02v4.01c-.44-.06-.88-.06-1.32-.02-1.99.23-3.72 2.05-3.6 4.09.12 2.04 2.14 3.73 4.13 3.42 1.99-.31 3.42-2.31 3.42-4.33V0h1.36z"/>
                                    </svg>
                                )}
                            ].map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FB7E10] hover:text-white transition-all duration-300 border border-white/10 group shadow-lg"
                                >
                                    {social.icon}
                                    <span className="sr-only">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div className="space-y-6 flex flex-col items-center">
                        <h4 className="text-white font-bold text-lg">Our Services</h4>
                        <div className="flex flex-col space-y-3.5">
                            {[
                                { name: 'Emergency Tyre Fitting', path: '/services/emergency-tyre-fitting' },
                                { name: 'Wheel Balancing', path: '/services/precision-wheel-balancing' },
                                { name: 'Locking Wheel Nut Removal', path: '/services/locking-wheel-nut-removal' },
                                { name: 'Mobile Trailer Tyre Fitting', path: '/services/trailer-tyre-fitting' }
                            ].map((service) => (
                                <Link 
                                    key={service.path}
                                    to={service.path} 
                                    className="text-gray-400 hover:text-[#FB7E10] transition-all text-sm font-medium hover:scale-105 duration-200"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="space-y-6 flex flex-col items-center">
                        <h4 className="text-white font-bold text-lg">Quick Links</h4>
                        <div className="flex flex-col space-y-3.5 text-gray-400 text-sm font-medium">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Services', path: '/services' },
                                { name: 'About', path: '/about' },
                                { name: 'Locations', path: '/locations' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <Link 
                                    key={link.name}
                                    to={link.path} 
                                    className="hover:text-[#FB7E10] transition-all hover:scale-105 duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Hotline Card */}
                    <div className="flex flex-col items-center w-full">
                        <div className="bg-gradient-to-br from-[#111A2C] to-[#0A1222] border border-white/10 rounded-3xl p-6 xl:p-8 space-y-6 text-center shadow-2xl relative group w-full max-w-[320px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#FB7E10]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                            
                            <div className="space-y-1 relative">
                                <span className="text-[10px] font-bold text-[#FB7E10] uppercase tracking-[0.2em] block">24/7 Hotline</span>
                                <a href="" className="text-white font-black text-xl xl:text-2xl tracking-tight whitespace-nowrap hover:text-[#FB7E10] transition-colors">
                                    0207 101 3856
                                </a>
                            </div>
                            
                            <div className="flex flex-col gap-4 items-center relative">
                                <a
                                    href="tel:02071013856"
                                    className="bg-[#FB7E10] text-white w-full py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-orange-600 transition-all text-center shadow-lg shadow-orange-900/20 active:scale-[0.98] ring-4 ring-[#FB7E10]/10"
                                >
                                    Call Now
                                </a>
                                <a
                                    href="mailto:info@mobiletyrechampions.com"
                                    className="text-gray-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest text-center"
                                >
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popular Tyre Sizes Section */}
                <div className="mt-20 pt-12 border-t border-white/5">
                    <h4 className="text-white font-bold text-lg mb-8">Popular Tyre Sizes</h4>
                    <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto">
                        {[
                            '205/55 R16', '225/45 R17', '195/65 R15', '225/40 R18', '185/65 R15', 
                            '215/55 R17', '225/50 R17', '235/45 R18', '175/65 R14', '205/45 R17', 
                            '245/40 R18', '255/35 R19', '195/55 R16', '215/60 R16', '235/40 R18',
                            '185/60 R15', '215/50 R17', '225/55 R17', '205/60 R16', '225/45 R18',
                            '255/40 R19', '275/35 R19', '235/35 R19', '255/35 R18', '245/45 R18',
                            '215/45 R17', '205/50 R17', '195/60 R15', '175/70 R14', '185/55 R15',
                            '255/30 R20', '285/30 R20', '275/40 R20', '315/35 R20', '295/35 R21',
                            '235/55 R17', '235/60 R18', '225/65 R17', '215/65 R16', '235/50 R18'
                        ].map((size) => (
                            <Link 
                                key={size}
                                to={`/find-tyres?size=${size.replace(/\s+/g, '')}`}
                                className="text-[10px] font-bold text-gray-500 hover:text-[#FB7E10] hover:bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-md transition-all duration-200 uppercase tracking-tighter"
                            >
                                {size}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-10 mt-16 border-t border-white/5">
                    <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
                        <p className="text-gray-500 text-xs font-medium">
                            © 2025 Mobile Tyre Champions. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                            <Link to="/privacy" className="hover:text-[#FB7E10] transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-[#FB7E10] transition-colors">Terms & Conditions</Link>
                            <Link to="/cookies" className="hover:text-[#FB7E10] transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
