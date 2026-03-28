import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
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
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Find Tyres', to: '/find-tyres', isNew: true },
    { label: 'Services', to: '/services' },
    { label: 'Areas We Cover', to: '/locations' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav
        className={`flex items-center justify-between px-4 md:px-10 h-20 md:h-28 transition-all duration-300 relative z-50 ${scrolled ? 'bg-white shadow-md' : 'bg-gray-100 shadow-sm'
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center h-full py-2 sm:py-3 w-1/2 sm:w-auto">
          <img src="/images/mtc-logo-new.png" alt="Mobile Tyre Champions" className="h-full w-auto max-w-full object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`relative py-1 transition-colors flex items-center gap-1 ${isActive(to)
                  ? 'text-[#FB7E10]'
                  : 'hover:text-[#FB7E10]'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FB7E10] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive(to) ? 'after:scale-x-100' : ''
                }`}
            >
              {label}
              {links.find(l => l.to === to)?.isNew && (
                <span className="bg-[#FB7E10] text-white text-[8px] px-1.5 py-0.5 rounded-full font-black animate-pulse">NEW</span>
              )}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+447495336005"
            className="hidden lg:flex items-center gap-2 bg-[#FB7E10] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-orange-600 transition-all whitespace-nowrap"
          >
            <span>+44 7495 336 005</span>
            <Phone size={16} fill="white" />
          </a>

          <button
            className="lg:hidden p-2 text-black bg-white/50 rounded-md border border-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white fixed top-20 left-0 w-full shadow-xl border-t border-gray-100 z-40 py-4 px-6 flex flex-col space-y-2 font-semibold text-gray-800">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center justify-between w-full py-3 px-2 rounded-lg transition-colors border-b border-gray-100 last:border-b-0 ${isActive(to)
                  ? 'text-[#FB7E10] bg-orange-50'
                  : 'hover:text-[#FB7E10] hover:bg-gray-50'
                }`}
            >
              <span className="flex items-center gap-2">
                {label}
                {links.find(l => l.to === to)?.isNew && (
                  <span className="bg-[#FB7E10] text-white text-[8px] px-1.5 py-0.5 rounded-full font-black underline-none">NEW</span>
                )}
              </span>
            </Link>
          ))}

          <a
            href="tel:+447495336005"
            className="flex items-center justify-center gap-2 bg-[#FB7E10] text-white w-full py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-orange-600 transition-all mt-2"
          >
            <span>CALL: +44 7495 336 005</span>
            <Phone size={16} fill="white" />
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
