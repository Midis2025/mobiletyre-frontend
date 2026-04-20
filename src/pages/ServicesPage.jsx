import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import { Phone, Star, ShieldCheck, Wrench, Clock, ArrowRight, CheckCircle } from 'lucide-react';

/* ── Trust signals data ── */
const trustSignals = [
  { icon: Star, value: "4.9★", label: "Average Rating" },
  { icon: ShieldCheck, value: "5,000+", label: "Jobs Completed" },
  { icon: Clock, value: "24/7", label: "Always Available" },
  { icon: Wrench, value: "7+", label: "Services Offered" },
  { icon: CheckCircle, value: "100%", label: "Satisfaction Rate" },
];

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Emergency', 'Standard', 'Specialist'];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-['Outfit']">

      {/* ── STICKY EMERGENCY BAR ── */}
      <div className="sticky top-0 z-50 bg-[#FB7E10] text-white py-3 px-4 text-center shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="flex items-center gap-2 font-black uppercase text-xs md:text-sm tracking-widest">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Emergency? We dispatch immediately — 24/7
          </span>
          <a
            href="tel:02071013856"
            className="flex items-center gap-2 bg-white text-[#FB7E10] px-5 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow"
          >
            <Phone size={14} fill="currentColor" /> Call Now
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-36 px-4 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544436074-c603a16fc0c1?q=80&w=2070&auto=format&fit=crop"
            alt="Service Hero Background"
            className="w-full h-full object-cover opacity-10 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-100 px-4 py-2 rounded-xl shadow-sm">
            <span className="text-[#FB7E10] font-black uppercase text-[10px] tracking-widest animate-pulse">Professional Mobile Units</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-black">
            OUR <span className="text-[#FB7E10]">SERVICES</span>
          </h1>
          <p className="text-gray-500 text-base md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            High-precision mobile tyre solutions delivered at your request. Fast, reliable execution available 24 hours a day.
          </p>
        </div>
      </section>

      {/* ── TRUST SIGNALS STRIP ── */}
      <section className="bg-[#0B1528] py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {trustSignals.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <item.icon size={22} className="text-[#FB7E10]" />
              <span className="text-white font-black text-xl md:text-2xl">{item.value}</span>
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORY QUICK-FILTER ── */}
      <section className="bg-white border-b border-gray-100 py-5 px-4 sticky top-[48px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest hidden sm:block">Filter:</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest border transition-all ${
                activeFilter === f
                  ? 'bg-[#FB7E10] text-white border-[#FB7E10] shadow-lg shadow-orange-100'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300 hover:text-[#FB7E10]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── SERVICES COMPONENT ── */}
      <section className="bg-white">
        <Services filterCategory={activeFilter} />
      </section>

      {/* ── EMERGENCY CTA — full-width dominant ── */}
      <section className="bg-[#FB7E10] py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-white font-black uppercase text-[10px] tracking-widest">Live Dispatch Active</span>
          </div>
          <h2 className="text-white text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
            NEED AN <br /><span className="text-[#0B1528]">EMERGENCY</span> QUOTE?
          </h2>
          <p className="text-white/80 text-base md:text-xl font-medium max-w-xl mx-auto">
            A technician will be dispatched to you immediately. No wait times, no booking portals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:02071013856"
              className="inline-flex items-center gap-3 bg-white text-[#FB7E10] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-base md:text-xl hover:bg-[#0B1528] hover:text-white transition-all shadow-2xl"
            >
              <Phone size={24} fill="currentColor" /> 0207 101 3856
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-sm border-2 border-white px-8 py-5 rounded-2xl hover:bg-white hover:text-[#FB7E10] transition-all"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12 text-center">
          <div className="space-y-3">
            <h2 className="text-black text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              THE <span className="text-[#FB7E10]">MOBILE</span> ADVANTAGE
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Why we outperform traditional workshops</p>
          </div>

          {/* Mobile: Cards / Desktop: Table */}
          <div className="rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

            {/* Table Header — hidden on mobile */}
            <div className="hidden md:grid grid-cols-3 bg-[#0B1528] text-white">
              <div className="p-8 font-black uppercase text-xs tracking-widest opacity-50">Strategic Feature</div>
              <div className="p-8 font-black uppercase text-xs tracking-widest text-center">Mobile Tyre Champions</div>
              <div className="p-8 font-black uppercase text-xs tracking-widest text-center opacity-50">Local Garage</div>
            </div>

            {/* Rows */}
            {[
              ['TRAVEL TIME', '40 MINS', 'WE ARRIVE AT YOU', '90–120 MINS', 'DRIVE + WAIT'],
              ['OPERATIONAL MODE', 'WORK FROM HOME', 'WHILE WE FIT YOUR TYRES', 'IDLE', 'COLD WAITING ROOM'],
              ['PRICING', 'TRANSPARENT FIXED', 'NO HIDDEN SURPRISE', 'UNKNOWN', 'HIDDEN WORKSHOP FEES'],
              ['AVAILABILITY', '24/7/365', 'ANY TIME, ANY DAY', '9 AM – 5 PM', 'WEEKDAYS ONLY'],
            ].map(([feature, usMain, usSub, themMain, themSub], i) => (
              <div key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>

                {/* Mobile layout */}
                <div className="md:hidden p-5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">{feature}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Us */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#FB7E10] mb-1">✅ Us</p>
                      <p className="text-sm font-black text-[#FB7E10] leading-tight">{usMain}</p>
                      <p className="text-[10px] text-orange-400 font-bold mt-1">{usSub}</p>
                    </div>
                    {/* Them */}
                    <div className="bg-slate-100 rounded-2xl p-4 text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">❌ Garage</p>
                      <p className="text-sm font-black text-slate-500 leading-tight">{themMain}</p>
                      <p className="text-[10px] text-slate-400 font-bold mt-1">{themSub}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-3 hover:bg-orange-50/30 transition-colors border-t border-gray-100">
                  <div className="p-8 pl-12 font-black text-slate-700 text-sm uppercase tracking-widest">{feature}</div>
                  <div className="p-8 text-center">
                    <span className="font-black text-[#FB7E10] text-base">{usMain}</span>
                    <span className="block text-[10px] text-orange-400 font-bold mt-1">{usSub}</span>
                  </div>
                  <div className="p-8 text-center">
                    <span className="font-bold text-gray-400 text-base">{themMain}</span>
                    <span className="block text-[10px] text-gray-300 font-bold mt-1">{themSub}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default ServicesPage;
