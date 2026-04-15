import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Clock, Star, Users, Wrench, MapPin, CheckCircle, Zap, Award, HeartHandshake } from 'lucide-react';

/* ─── Data ──────────────────────────────────────────────────────────────── */

const stats = [
  { value: '4.9★', label: 'Google Rating', sub: '500+ Verified Reviews' },
  { value: '24/7', label: 'Available', sub: 'Every Day of the Year' },
  { value: '10k+', label: 'Jobs Done', sub: 'Across Surrey & Hampshire' },
  { value: '30min', label: 'Avg Response', sub: 'Guaranteed' },
];

const values = [
  {
    icon: <Zap className="w-6 h-6 text-[#FB7E10]" />,
    title: 'Speed Without Compromise',
    desc: 'Our dispatchers match you to the nearest certified technician so your GPS guides us to you in seconds — average arrival under 40 miles.',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#FB7E10]" />,
    title: 'Workshop-Grade Equipment',
    desc: 'Every van runs the same tools, machines, and stock as a full workshop. No cutting corners, no compromise — just convenience.',
  },
  {
    icon: <Award className="w-6 h-6 text-[#FB7E10]" />,
    title: 'IMI-Certified Technicians',
    desc: '  Every technician holds a minimum of 5 years full certification, including cars and vans and far more vehicle types.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[#FB7E10]" />,
    title: 'Transparent Pricing',
    desc: 'No hidden fees, no nasty surprises. You get upfront quotes covering tyres, fitting, and all services before we start.',
  },
  {
    icon: <Clock className="w-6 h-6 text-[#FB7E10]" />,
    title: '24/7 — Rain or Shine',
    desc: 'Available 24 hours a day, 7 days a week — including bank holidays, late nights, and early mornings. If you need us, we’re there. No exceptions.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#FB7E10]" />,
    title: 'We Come to You',
    desc: 'At home, at work, or stranded roadside — we bring the van safely to your location. No garage visits, no waiting rooms.',
  },
];

const services = [
  'Mobile Tyre Fitting (Emergency & Scheduled)',
  'Puncture Repair',
  'Tyre Sales',
  'Precision Wheel Balancing',
  'Mobile Car Battery Replacement',
  'Tyre Inspection & Rotation',
  'Emergency Tyre Fitting',
  'Tyre Recycling',
  'Alloy Wheel Welding',
  'Locking Wheel Nut Removal',
];

const testimonials = [
  {
    quote: "The best service I've ever experienced on the road. Called them after a blowout on the A3 and they were with me in 30 minutes. They even checked my spare tyre before leaving. Absolutely outstanding when driving my Porsche.",
    name: 'James T.',
    role: 'Porsche 911 Owner',
    seed: 'crew1',
  },
  {
    quote: "Stuck on the M25 at midnight — they arrived in 35 minutes. Absolute lifesavers. Five stars, every time.",
    name: 'Sarah M.',
    role: 'Range Rover Sport Owner',
    seed: 'crew2',
  },
  {
    quote: "Professional, fast, and a fair price. Never going to a garage again when Mobile Tyre Champions exists.",
    name: 'Daniel R.',
    role: 'BMW M4 Owner',
    seed: 'crew3',
  },
];

/* ─── Animated counter hook ─────────────────────────────────────────────── */

/* ─── Component ─────────────────────────────────────────────────────────── */

const AboutPage = () => {
  return (
    <div className="font-['Outfit'] bg-slate-50 min-h-screen overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[560px] md:min-h-[680px] flex items-center bg-gray-900 overflow-hidden">
        {/* bg image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fitting-step.png"
            alt="Mobile Tyre Champions technician at work"
            className="w-full h-full object-cover opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        </div>

        {/* decorative ring */}
     
        <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-[#33251a] border border-[#fb7e10]/30 px-4 py-1.5 rounded-full">
              <span className="text-orange-500">⚡</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-orange-400">
                UK's Most Trusted Mobile Tyre Service
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              About{' '}
              <span className="text-[#FB7E10]">Mobile<br className="hidden md:block" /> Tyre Champions</span>
            </h1>

            <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-2xl">
              We exist to make tyre care hassle-free. Whether you're stuck at the roadside or planning a service day, our team delivers premium mobile tyre fitting directly to you — with expert technicians, fully equipped vans, and zero waiting rooms.
             </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="tel:02071013856" className="flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-8 py-4 rounded-xl font-black text-base hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                <Phone size={18} fill="white" />
                Call Now: 0207 101 3856
              </a>
              <a
                href="#why-us"
                className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-all"
              >
                Why Choose Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0B1528] py-8 md:py-10 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-5xl font-black text-[#FB7E10] group-hover:scale-110 transition-transform duration-300">
                {s.value}
              </div>
              <div className="text-white font-bold text-sm md:text-base mt-1">{s.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-6 md:py-8 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/hero image.avif"
                alt="Our Story"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = '/images/fitting-step.png'; }}
              />
            </div>
            {/* floating badge */}
           
          </div>

          {/* Text side */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-black">
                We Bring the<br />
                <span className="text-[#FB7E10]">Workshop to You.</span>
              </h2>
              <div className="w-16 h-1.5 bg-[#FB7E10] mt-4" />
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Mobile Tyre Champions was built on a simple belief — no driver should be stranded. Our mobile operation means no waiting in garages, no lengthy delays. You stay where you are, and we come to you with the same equipment and expertise as a workshop.
              </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Based at Grosvenor Road, Aldershot, Postcode GU11 3HY, we serve customers across the UK with a large stock of expert technicians and fully equipped mobile vans — delivering convenience, safety, and transparency with every job.
             </p>

            {/* service bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {services.slice(0, 6).map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#FB7E10] shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section id="why-us" className="bg-[#F1F3F6] py-6 md:py-8 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* heading */}
          <div className="mb-12 md:mb-16 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-black md:max-w-xl">
              Why Thousands Choose<br />
              <span className="text-[#FB7E10]">Mobile Tyre Champions</span>
            </h2>
            <div className="w-16 h-1.5 bg-[#FB7E10] mt-4" />
          </div>

          {/* 6-card bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className={`rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300 ${i === 0 || i === 3 ? 'bg-[#0B1528] text-white' : 'bg-white' }`}
              >
                {/* watermark icon */}
                <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <Wrench className="w-24 h-24" />
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${i === 0 || i === 3 ? 'bg-white/10' : 'bg-[#F1F3F6] border border-gray-100'}`}>
                  {v.icon}
                </div>
                <h3 className={`text-lg font-black uppercase tracking-tight mb-3 ${i === 0 || i === 3 ? 'text-white' : 'text-black'}`}>
                  {v.title}
                </h3>
                <p className={`font-medium leading-relaxed text-sm ${i === 0 || i === 3 ? 'text-gray-400' : 'text-gray-500'}`}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-6 md:py-8 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
              Be Part of Our Ever-Growing<br />
              <span className="text-[#FB7E10]">Family of Satisfied Clients</span>
            </h2>
            <p className="text-gray-500 font-medium mt-4 text-base md:text-lg">Rated 4.9 ★ on Google Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-500 group cursor-default ${
                  i === 1 
                  ? 'bg-[#FB7E10] text-white shadow-2xl scale-105 z-10' 
                  : 'bg-[#F1F3F6] text-slate-700 hover:bg-[#0B1528] hover:text-white hover:shadow-2xl hover:-translate-y-2' 
                }`}
              >
                {/* stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, si) => (
                    <Star 
                      key={si} 
                      size={16} 
                      fill={i === 1 ? 'white' : '#FB7E10'} 
                      className={`transition-colors duration-500 ${i === 1 ? 'text-white' : 'text-[#FB7E10] group-hover:text-white group-hover:fill-white'}`} 
                    />
                  ))}
                </div>
                <p className={`font-bold leading-relaxed text-base flex-1 transition-colors duration-500 ${i === 1 ? 'text-white' : 'text-gray-800 group-hover:text-white'}`}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}`}
                    alt={t.name}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-500 ${i === 1 ? 'border-white/40' : 'border-[#FB7E10]/30 group-hover:border-white/40'} bg-gray-300`}
                  />
                  <div>
                    <div className={`font-black text-sm transition-colors duration-500 ${i === 1 ? 'text-white' : 'text-black group-hover:text-white'}`}>{t.name}</div>
                    <div className={`text-xs font-medium transition-colors duration-500 ${i === 1 ? 'text-white/70' : 'text-gray-500 group-hover:text-white/70'}`}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO STRIP ────────────────────────────────────────────── */}
      <section className="bg-[#0B1528] py-8 md:py-10 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Address */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-[#FB7E10]/10 border border-[#FB7E10]/20 rounded-xl flex items-center justify-center">
              <MapPin size={22} className="text-[#FB7E10]" />
            </div>
            <div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Address</div>
              <div className="text-white font-bold text-sm md:text-base leading-snug">Grosvenor Road, Aldershot<br />GU11 3HY</div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-[#FB7E10]/10 border border-[#FB7E10]/20 rounded-xl flex items-center justify-center">
              <Phone size={22} className="text-[#FB7E10]" />
            </div>
            <div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Contact</div>
              <a href="tel:02071013856" className="text-white font-bold text-sm md:text-base hover:text-[#FB7E10] transition-colors">0207 101 3856</a>
              <br />
              <a href="mailto:info@mobiletyrechampions.com" className="text-white font-bold text-sm md:text-base hover:text-[#FB7E10] transition-colors">info@mobiletyrechampions.com</a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-[#FB7E10]/10 border border-[#FB7E10]/20 rounded-xl flex items-center justify-center">
              <Clock size={22} className="text-[#FB7E10]" />
            </div>
            <div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Open Hours</div>
              <div className="text-[#FB7E10] font-black text-lg md:text-2xl">24/7</div>
              <div className="text-white/60 text-xs font-medium">We are always available!</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-8 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto relative rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-black min-h-[350px] md:min-h-[420px] flex items-center p-6 md:p-16 lg:p-20 shadow-2xl">
          {/* bg image */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 md:opacity-40 pointer-events-none">
            <img
              src="/images/cta-bg.png"
              alt="Tire tread background"
              className="w-full h-full object-cover grayscale brightness-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-black" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6 md:space-y-8 text-center md:text-left w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
              STUCK ON THE<br className="hidden sm:block" /> ROAD? CALL NOW.
            </h2>
            <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed">
              Whether you're at home, work, or stranded roadside — our expert team arrives quickly and gets you back on the road in just 30 minutes, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 pt-2">
              <a href="tel:02071013856" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FB7E10] text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black text-base md:text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                <Phone size={18} fill="white" />
                Call 0207 101 3856
              </a>
              <Link 
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black text-base md:text-lg hover:bg-[#0B1528] hover:border-transparent transition-all shadow-xl active:scale-95"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
