import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-8 md:mb-16 text-center md:text-left flex flex-col items-center md:items-start group">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-black uppercase leading-tight">
          Our Services
        </h2>
        <p className="mt-4 text-slate-500 text-sm md:text-lg font-bold max-w-2xl leading-relaxed">
          From a quick puncture repair to a full set of new tyres, every job gets the same level of care — wherever you are across Surrey and Hampshire.
        </p>
        <div className="w-20 h-2 bg-[#FB7E10] mt-6 transition-all group-hover:w-32"></div>
      </div>

      {/* Services List - Large Cards */}
      <div className="space-y-4">
        {servicesData.map((service, index) => (
          <Link
            key={index}
            to={`/services/${service.id}`}
            className="relative block group overflow-hidden rounded-xl md:rounded-sm cursor-pointer shadow-lg mb-4"
          >
            {/* Image */}
            <div className="h-[280px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 md:bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-6 md:bottom-12 flex flex-col items-center space-y-3 md:space-y-4 px-4 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white drop-shadow-lg leading-tight uppercase">
                {service.title}
              </h3>
              <p className="text-white/80 text-[10px] sm:text-sm md:text-xl max-w-3xl font-medium drop-shadow-md line-clamp-2 md:line-clamp-none">
                {service.description}
              </p>
              <div className="bg-[#FB7E10] text-white px-8 md:px-12 py-3 md:py-4 rounded-sm font-black text-xs md:text-base shadow-2xl active:scale-95 uppercase tracking-widest transition-all hover:bg-slate-900 mt-2">
                {service.cta || "Learn More"}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
