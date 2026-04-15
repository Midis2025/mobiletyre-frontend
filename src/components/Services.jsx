import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Star, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const Services = ({ filterCategory = 'All' }) => {
  const displayed = filterCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === filterCategory);

  return (
    <div className="bg-white py-12 md:py-20 px-4 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-12 text-center md:text-left flex flex-col items-center md:items-start group">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.8]">
          OUR <span className="text-[#FB7E10]">SERVICES</span>
        </h2>
        <p className="mt-6 text-slate-500 text-sm md:text-xl font-medium max-w-2xl leading-relaxed">
          Professional mobile tyre solutions delivered at your request. Fast, reliable execution available 24 hours a day across Surrey and Hampshire.
        </p>
        <div className="w-20 h-2 bg-[#FB7E10] mt-8 transition-all group-hover:w-40"></div>
      </div>

      {/* Services List - Large Cards */}
      <div className="grid grid-cols-1 gap-6">
        {displayed.map((service, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl border ${service.priority ? 'border-orange-200 ring-2 ring-orange-100 ring-offset-4' : 'border-slate-100'}`}
          >
            <div className="flex flex-col md:flex-row h-full min-h-[400px]">
              {/* Image Side */}
              <div className="w-full md:w-[45%] lg:w-[40%] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-64 md:h-full ${service.fit === 'contain' ? 'object-contain p-8 bg-slate-50' : 'object-cover'} transition-transform duration-1000 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/10"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${service.priority ? 'bg-[#FB7E10] text-white' : 'bg-white text-slate-900'}`}>
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 p-6 md:p-12 flex flex-col justify-center bg-white relative">
                {/* Trust Signal: Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(service.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 ml-2">{service.rating} ({service.reviews}+ reviews)</span>
                </div>

                <h3 className="text-2xl md:text-5xl font-black text-black leading-none uppercase tracking-tighter mb-4 transition-colors group-hover:text-[#FB7E10]">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
                  {service.description}
                </p>

                {/* Features List for Clarity */}
                <div className="hidden sm:grid grid-cols-2 gap-y-3 gap-x-6 mb-8">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle2 size={16} className="text-[#FB7E10]" />
                      <span className="text-xs md:text-sm font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto text-center px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 bg-slate-900 text-white hover:bg-[#FB7E10]"
                  >
                    {service.cta}
                  </Link>
                  <Link
                    to={`/services/${service.id}`}
                    className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-[#FB7E10] uppercase tracking-widest transition-colors"
                  >
                    {service.secondaryCta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative element */}
                <div className="absolute top-1/2 -right-4 translate-y-[-50%] opacity-0 group-hover:opacity-10 transition-opacity hidden lg:block">
                  <ArrowRight size={120} strokeWidth={3} className="text-[#FB7E10]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
