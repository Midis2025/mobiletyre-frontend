import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-8 md:mb-12 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black italic uppercase">
          Our Services
        </h2>
        <div className="w-16 h-1.5 bg-[#FB7E10] mt-3 md:mt-4"></div>
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
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white italic drop-shadow-lg leading-tight uppercase">
                {service.title}
              </h3>
              <div className="bg-[#1E63C4] text-white px-6 md:px-8 py-2 md:py-2.5 rounded-sm font-bold text-xs md:text-sm shadow-xl active:scale-95 uppercase italic">
                Learn More
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
