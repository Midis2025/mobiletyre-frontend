import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Premium Tyre Service",
      image: "/images/PREMIUM TYRE SERVICE.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Expert Mechanical Repair",
      image: "/images/precision.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Professional Alloy Wheel Welding",
      image: "/images/PROFESSIOMAL ALLOY.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Mobile Trailer Tyre Fitting",
      image: "/images/Mobile Trailer Tyre Fitting.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "24/7 Tyre Service",
      image: "/images/24 7 tyre.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Precision Wheel Balancing",
      image: "/images/precision wheel.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Emergency Tyre Fitting",
      image: "/images/emergency tyre.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "TPMS Sensor Service",
      image: "/images/TPMS.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Flat Tyre Assistance",
      image: "/images/flat tyre 1.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Locking Wheel Nut Removal",
      image: "/images/locking wheel 1.avif",
      buttonText: "Learn More",
      link: "#"
    },
    {
      title: "Tyre Recycling & Disposal",
      image: "/images/tyre recycling.avif",
      buttonText: "Learn More",
      link: "#"
    }
  ];

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
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl md:rounded-sm cursor-pointer shadow-lg mb-4">
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
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white italic drop-shadow-lg leading-tight">
                {service.title}
              </h3>
              <button className="bg-[#1E63C4] text-white px-6 md:px-8 py-2 md:py-2.5 rounded-sm font-bold text-xs md:text-sm hover:bg-blue-700 transition-all shadow-xl active:scale-95">
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
