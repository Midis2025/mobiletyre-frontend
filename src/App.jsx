import React from 'react';
import { Phone, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-gray-100 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex flex-col leading-none">
          <span className="font-black italic text-2xl tracking-tighter text-black">MOBILE TYRE</span>
          <span className="font-extrabold text-[9px] tracking-[0.4em] self-end mt-[-4px] text-black">CREW</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
        <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Tires</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Locations</a>
        <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
      </div>

      <button className="flex items-center gap-2 bg-[#FB7E10] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-orange-600 transition-all">
        <span>+0800 123 4567</span>
        <Phone size={16} fill="white" />
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/hero-bg.png" 
          alt="Tire background" 
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#33251a] border border-[#fb7e10]/30 px-4 py-1.5 rounded-full">
              <span className="text-orange-500">⚡</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-400">
                UK'S FAST MOBILE TYRE SERVICE – 24/7
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              Mobile Tyre Crew,<br />
              <span className="text-[#FB7E10]">Where You Are.</span>
            </h1>

            <p className="max-w-md text-gray-300 text-base md:text-lg leading-relaxed">
              Premium mobile tire fitting service. Emergency roadside assistance or scheduled home fitting. Night or day, we keep you moving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all border-2 border-transparent">
                Call Now: +0800 123 4567
              </button>
              <button className="flex items-center justify-center gap-3 bg-[#22C55E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all border-2 border-transparent">
                Whatsapp: +0800 123 4567
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-[6px] h-8 bg-black"></div>
                <h2 className="text-2xl font-black tracking-tighter uppercase">INSTANT APPOINTMENT</h2>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                    FULL NAME
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                    PHONE NUMBER
                  </label>
                  <input 
                    type="text" 
                    placeholder="000-000-0000" 
                    className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                      TIRE SIZE
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. 225/45 R17" 
                      className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                      SERVICE TYPE
                    </label>
                    <div className="relative">
                      <select className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 appearance-none text-gray-700 text-sm focus:ring-2 focus:ring-[#FB7E10] font-medium">
                        <option>Emergency Fix</option>
                        <option>Scheduled Mobile Fitting</option>
                        <option>Tire Replacement</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0B1528] text-white py-4.5 rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 mt-6 hover:bg-slate-900 transition-all active:scale-[0.98]"
                >
                  REQUEST APPROVAL
                  <ArrowRight size={20} strokeWidth={3} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      {/* Logos Row */}
      <div className="flex flex-wrap justify-between items-center gap-12 opacity-80 mb-20 grayscale hover:grayscale-0 transition-all duration-500">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col leading-none">
            <span className="font-black italic text-3xl tracking-tighter text-black">MOBILE TYRE</span>
            <span className="font-extrabold text-[12px] tracking-[0.4em] self-end mt-[-5px] text-black">CREW</span>
          </div>
        ))}
      </div>

      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-black max-w-xl">
          Precision Engineering.<br />Roadside Reality.
        </h2>
        <div className="w-16 h-1.5 bg-[#FB7E10] mt-4"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Ultra-Rapid Deployment (Span 2) */}
        <div className="lg:col-span-2 bg-[#F1F3F6] rounded-3xl p-10 relative overflow-hidden group hover:shadow-lg transition-all">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-96 h-96 text-black">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 12L16 10" />
                <path d="M12 7V12" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-black">Ultra-Rapid Deployment</h3>
            <p className="text-gray-500 font-medium leading-relaxed max-w-md">
              Our proprietary dispatch algorithm routes the nearest technician to your GPS coordinates in seconds. No waiting on hold, just instant action.
            </p>
          </div>
        </div>

        {/* Card 2: Expertise Guaranteed */}
        <div className="bg-[#0B1528] rounded-3xl p-10 text-white hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
            <svg className="w-6 h-6 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 15L15 21L21 21L18 15" />
              <path d="M9 15L6 21L0 21L3 15" />
              <circle cx="12" cy="9" r="6" />
              <path d="M12 6L12 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Expertise Guaranteed</h3>
          <p className="text-gray-400 font-medium leading-relaxed mb-10">
            Every technician is IMI certified with a minimum of 5 years field experience in luxury and performance vehicles.
          </p>
          <div className="flex -space-x-3">
             {[1, 2, 3].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B1528] bg-gray-600 overflow-hidden">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=crew${i}`} alt="Avatar" className="w-full h-full object-cover" />
               </div>
             ))}
          </div>
        </div>

        {/* Card 3: 24/7 Kinetic Support */}
        <div className="bg-[#F1F3F6] rounded-3xl p-10 hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6V12L16 14" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-black">24/7 Kinetic Support</h3>
          <p className="text-gray-500 font-medium leading-relaxed">
            Christmas, New Year's, or 3 AM on a Tuesday. We never sleep because the roads never close.
          </p>
        </div>

        {/* Card 4: Quote (Span 2) */}
        <div className="lg:col-span-2 bg-[#FB7E10] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-all">
          <div className="p-10 flex-1 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-black text-white italic mb-6 leading-tight">
              "The best service I've ever experienced on the road."
            </h3>
            <p className="text-white/80 font-bold uppercase tracking-wider text-sm">
              — James T., Porsche 911 Owner
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-black relative">
            <img 
              src="/src/assets/porsche.png" 
              alt="Testimonial Car" 
              className="w-full h-full object-cover grayscale brightness-125 transition-all hover:grayscale-0 duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Premium Tyre Service",
      image: "/src/assets/service-1.png",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Expert Mechanical Repair",
      image: "/src/assets/service-2.png",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Professional Alloy Wheel Welding",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Mobile Trailer Tyre Fitting",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=2070",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "24/7 Tyre Service",
      image: "https://images.unsplash.com/photo-1609609836452-c1a3ee6c27fc?auto=format&fit=crop&q=80&w=2070",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Precision Wheel Balancing",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Emergency Tyre Fitting",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&q=80&w=2070",
      buttonText: "Learn More",
      link: "#"
    }
  ];

  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-black tracking-tight text-black italic uppercase">
          Our Services
        </h2>
        <div className="w-16 h-1.5 bg-[#FB7E10] mt-4"></div>
      </div>

      {/* Services List - Large Cards */}
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-sm cursor-pointer shadow-lg mb-4">
            {/* Image */}
            <div className="h-[400px] md:h-[500px] overflow-hidden">
               <img 
                 src={service.image} 
                 alt={service.title} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-12 flex flex-col items-center space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-white italic drop-shadow-lg">
                {service.title}
              </h3>
              <button className="bg-[#1E63C4] text-white px-8 py-2.5 rounded-sm font-bold text-sm hover:bg-blue-700 transition-all shadow-xl active:scale-95">
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-20 pb-24">
      <div className="max-w-7xl mx-auto border-[2.5px] border-[#3B82F6] rounded-[2rem] overflow-hidden flex flex-col lg:row-reverse lg:flex-row-reverse bg-[#0A0A0A] shadow-2xl">
        {/* Right Content - Image */}
        <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
             <img 
               src="/src/assets/fitting-step.png" 
               alt="Technician fitting tire" 
               className="w-full h-full object-cover grayscale brightness-75 transition-all hover:grayscale-0 duration-1000"
             />
             {/* Alignment guide effect from image (optional red dot/blue line if they wanted it as part of design, but it looks like tools) */}
        </div>

        {/* Left Content - Steps */}
        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-white uppercase italic">
            <span className="text-[#FB7E10]">FLAT TYRE?</span> REACH US INSTANTLY –<br />NO TIME WASTED!
          </h2>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 bg-[#1a1512] border border-[#fb7e10]/20 rounded-xl flex items-center justify-center">
                 <svg className="w-7 h-7 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                   <path d="M12 8v8" />
                   <path d="M8 12h8" />
                 </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-white italic">1. Give Us a Call</h4>
                <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                  Got a punctured tyre? Don't stress—call us now, experts arrive within 40-60 minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 bg-[#1a1512] border border-[#fb7e10]/20 rounded-xl flex items-center justify-center">
                 <svg className="w-7 h-7 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M3 7h18l-2 13H5L3 7z" />
                   <path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3" />
                   <path d="M9 12l2 2 4-4" />
                 </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-white italic">2. Receive Your Quote</h4>
                <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                  Contact us for a clear upfront quote covering tyre, fitting, and services costs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 bg-[#1a1512] border border-[#fb7e10]/20 rounded-xl flex items-center justify-center">
                 <svg className="w-7 h-7 text-[#FB7E10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <circle cx="12" cy="12" r="10" />
                   <polyline points="12 6 12 12 16 14" />
                 </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-white italic">3. Fast Tyre Fitting</h4>
                <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                  Skilled technicians replace your tyre on-site; pay easily and drive away confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-black min-h-[450px] flex items-center p-10 md:p-16 lg:p-20 shadow-2xl">
        {/* Background Tread Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none">
          <img 
            src="/src/assets/cta-bg.png" 
            alt="Tire Tread" 
            className="w-full h-full object-cover grayscale brightness-200"
          />
          <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-l from-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
            READY FOR THE<br />ROAD AHEAD?
          </h2>
          <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed">
            At Mobile Tyre Crew, we fit and replace tyres for leading manufacturers including Rolls-Royce, Bentley, Porsche, Lamborghini, BMW, Mercedes-Benz, Audi, and Range Rover—ensuring precise fitment, calibration, and reliable on-site convenience every time.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-[#FB7E10] text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95">
              Book Service
            </button>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Priority Hotline</span>
                 <span className="text-white font-black text-xl italic tracking-tight">1-800-TREADS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0B1528] pt-20 pb-10 px-6 sm:px-10 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
        {/* About */}
        <div className="space-y-8">
          <div className="flex flex-col leading-none">
            <span className="font-black italic text-3xl tracking-tighter text-white">MOBILE TYRE</span>
            <span className="font-extrabold text-[12px] tracking-[0.4em] self-end mt-[-5px] text-white/80">CREW</span>
          </div>
          <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
            Engineered for the unexpected. We provide premium roadside tire services for discerning drivers across the nation.
          </p>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
                  <path d="M2 12h20" />
                </svg>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
             </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8 lg:mt-2">
           <h4 className="text-white font-black text-lg uppercase tracking-tight">Quick Links</h4>
           <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Services</a>
              <a href="#" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Our Locations</a>
              <a href="#" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Book Online</a>
              <a href="#" className="text-gray-400 hover:text-[#FB7E10] transition-colors text-sm font-medium">Corporate Accounts</a>
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
        <div className="lg:mt-2">
           <div className="bg-[#050B16] border border-white/5 rounded-2xl p-6 lg:p-8 space-y-6">
              <div className="space-y-1">
                 <span className="text-[10px] font-black italic text-[#FB7E10] uppercase tracking-widest pl-1">24/7 Hotline</span>
                 <h4 className="text-white font-black text-2xl md:text-3xl italic tracking-tight">0800 123 4567</h4>
              </div>
              <button className="w-full bg-[#FB7E10] text-white py-3.5 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-orange-600 transition-all active:scale-[0.98] shadow-lg shadow-orange-900/10">
                Call Now
              </button>
           </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
         <p className="text-gray-500 text-xs font-medium">© 2026 Mobile Tyre Crew. All rights reserved.</p>
         <div className="flex items-center gap-6">
            <span className="text-gray-600 text-xs font-semibold cursor-pointer hover:text-white transition-colors">UK-WIDE SERVICE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></div>
            <span className="text-gray-600 text-xs font-semibold cursor-pointer hover:text-white transition-colors">EST. 2012</span>
         </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Outfit']">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Services />
      
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
