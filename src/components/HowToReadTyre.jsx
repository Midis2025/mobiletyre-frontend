import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToReadTyre = () => {
  return (
    <div className="bg-slate-50 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Area */}
          <div className="lg:w-1/2 space-y-8 z-10 w-full">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight italic">
                How to Read <span className="text-[#FB7E10]">A Tyre Size</span>
              </h2>
              <div className="w-16 md:w-20 h-1.5 md:h-2 bg-[#FB7E10] transform -skew-x-12"></div>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Understanding your tyre size is essential when ordering replacements. The size is written on the sidewall of your tyre and typically looks something like <span className="font-bold text-slate-900 bg-slate-200 px-2 py-1 rounded">205/55 R16 91V</span>. This alphanumeric code tells you the tyre's width, profile, wheel diameter, load index, and speed rating.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/find-tyres" 
                className="inline-flex items-center gap-3 bg-[#1E63C4] hover:bg-slate-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-sm font-black text-sm md:text-base uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Read More
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
          </div>

          {/* Visual Area */}
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-[#FB7E10]/20 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop" 
                alt="Tyre size on sidewall" 
                className="w-full h-auto object-cover md:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border-l-4 border-[#FB7E10]">
                <p className="font-black text-slate-900 text-lg uppercase tracking-tight">Know Your Size</p>
                <p className="text-sm font-medium text-slate-600">Order the perfect fit</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HowToReadTyre;
