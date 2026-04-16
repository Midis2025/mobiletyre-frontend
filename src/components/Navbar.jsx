import React, { useState, useEffect } from 'react';
import {
  Phone, Menu, X, ChevronDown,
  Home, Info, Search, Truck, Settings, MapPin, MessageSquare
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => { setIsMenuOpen(false); }, [location]);

  const links = [
    { label: 'Home', to: '/', icon: <Home size={20} /> },
    { label: 'About', to: '/about', icon: <Info size={20} /> },
    { label: 'Find Tyres', to: '/find-tyres', isNew: true, icon: <Search size={20} /> },
    {
      label: 'Commercial Tyres',
      to: '#',
      icon: <Truck size={20} />,
      dropdown: [
        { label: 'Locking Wheel Nut Removal', to: '/services/locking-wheel-nut-removal' },
        { label: 'Mobile Trailer Tyre Fitting', to: '/services/trailer-tyre-fitting' },
      ]
    },
    { label: 'Services', to: '/services', icon: <Settings size={20} /> },
    { label: 'Areas We Cover', to: '/locations', icon: <MapPin size={20} /> },
    { label: 'Contact', to: '/contact', icon: <MessageSquare size={20} /> },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full flex items-center justify-between px-4 md:px-10 h-24 md:h-28 transition-all duration-500 z-[100] ${scrolled
          ? 'bg-black/95 backdrop-blur-2xl shadow-2xl py-2'
          : 'bg-black py-4'
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center h-full py-1 sm:py-2 w-1/2 sm:w-auto">
          <div className="bg-white p-1 md:p-1.5 rounded-lg flex items-center justify-center aspect-square h-16 md:h-20 shadow-lg hover:scale-105 transition-all duration-500 overflow-hidden">
            <img
              src="/images/MTC logo 2.png"
              alt="Mobile Tyre Champions"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-white uppercase tracking-wider">
          {links.map(({ label, to, isNew, dropdown }) => (
            <div key={label} className="relative group">
              <Link
                to={to}
                onClick={(e) => { if (to === '#') e.preventDefault(); }}
                className={`relative py-2 transition-all flex items-center gap-1.5 ${isActive(to) ? 'text-[#FB7E10]' : 'hover:text-[#FB7E10]'
                  } group-hover:translate-y-[-1px]`}
              >
                {label}
                {isNew && (
                  <span className="bg-[#FB7E10] text-white text-[7px] px-1.5 py-0.5 rounded-full font-black animate-bounce">NEW</span>
                )}
                {dropdown && <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform duration-500" />}

                {/* Modern Indicator */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FB7E10] transition-all duration-300 ${isActive(to) ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                  }`}></span>
              </Link>

              {dropdown && (
                <div className="absolute top-full left-[-20px] mt-4 w-72 bg-black/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 rounded-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-50 ring-1 ring-white/5">
                  {dropdown.map((subItem) => (
                    <Link
                      key={subItem.to}
                      to={subItem.to}
                      className="block px-6 py-3 text-[13px] text-white/70 hover:text-[#FB7E10] hover:bg-white/5 transition-all font-semibold"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="tel:02071013856"
            className="flex items-center gap-1.5 sm:gap-2.5 bg-[#0B1528] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-black text-[10px] sm:text-[11px] tracking-widest shadow-xl hover:bg-[#FB7E10] hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            <span>0207 101 3856</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <Phone size={12} fill="currentColor" className="text-white" />
            </div>
          </a>

          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${isMenuOpen ? 'bg-[#FB7E10] text-white' : 'bg-white/10 border border-white/10 text-white'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overview */}
      <div className={`lg:hidden fixed inset-0 h-screen w-full bg-[#0B1528]/40 backdrop-blur-3xl z-[150] transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
        <div className={`absolute top-0 right-0 w-[85%] h-full bg-white shadow-2xl transition-transform duration-500 transform flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
            <div className="bg-white p-1 rounded flex items-center justify-center aspect-square h-10 shadow-sm">
              <img src="/images/MTC logo 2.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 bg-slate-100 rounded-full text-slate-500 active:scale-90 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links Grid */}
          <div className="flex-grow overflow-y-auto p-4 space-y-2">
            {links.map(({ label, to, icon, isNew, dropdown }) => (
              <div key={label} className="w-full">
                <Link
                  to={to}
                  onClick={(e) => { if (to === '#') e.preventDefault(); }}
                  className={`flex items-center justify-between w-full p-4 rounded-2xl transition-all ${isActive(to)
                    ? 'text-[#FB7E10] bg-orange-50/50 shadow-inner'
                    : 'text-slate-700 hover:bg-slate-50 active:bg-orange-50/30'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive(to) ? 'bg-[#FB7E10] text-white shadow-lg shadow-orange-500/20' : 'bg-slate-100 text-slate-500'
                      }`}>
                      {icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-black text-sm uppercase tracking-tight">{label}</span>
                      {isNew && <span className="text-[9px] font-black tracking-widest text-[#FB7E10]">JUST ADDED</span>}
                    </div>
                  </div>
                  {dropdown && <ChevronDown size={18} className={`text-slate-300 transition-transform ${isActive(to) ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Sub-menu with nice spacing */}
                {dropdown && (
                  <div className="grid grid-cols-1 gap-2 mt-2 px-2 pb-2">
                    {dropdown.map(subItem => (
                      <Link
                        key={subItem.to}
                        to={subItem.to}
                        className={`flex items-center gap-3 py-3 px-4 rounded-xl text-xs font-bold transition-all ${isActive(subItem.to)
                          ? 'text-[#FB7E10] bg-orange-50'
                          : 'text-slate-500 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></div>
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Actions Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
            <a
              href="tel:02071013856"
              className="flex items-center justify-center gap-3 bg-[#FB7E10] text-white w-full py-4 rounded-2xl font-black text-xs tracking-widest shadow-xl shadow-orange-500/20 active:scale-95 transition-all"
            >
              <Phone size={18} />
              <span>0207 101 3856</span>
            </a>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Social icons removed due to library version limitations */}
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile Tyre Champions</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
