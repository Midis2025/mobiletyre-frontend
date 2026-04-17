import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="bg-white pt-0 pb-8 xs:pt-0 xs:pb-10 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto relative rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-black min-h-[350px] md:min-h-[450px] flex items-center p-6 md:p-16 lg:p-20 shadow-2xl">
        {/* Background Tread Pattern */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 md:opacity-40 pointer-events-none">
          <img
            src="/images/cta-bg.png"
            alt="Tire Tread"
            className="w-full h-full object-cover grayscale brightness-200"
          />
          <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-6 md:space-y-8 text-center md:text-left w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
            READY FOR THE<br className="hidden sm:block" />ROAD AHEAD?
          </h2>
          <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed">
            We cover GU11 Aldershot, GU9 Farnham, GU51 Fleet, GU15 Camberley, GU1 Guildford and the whole of Surrey and Hampshire — any time of day or night. Got a tyre giving you trouble? Don't wait — get in touch and we'll sort it.
             </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 pt-4">
            <a 
              href="tel:+447494024653"
              className="w-full sm:w-auto bg-[#FB7E10] text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-black text-base md:text-xl hover:bg-orange-600 transition-all shadow-2xl active:scale-95 uppercase tracking-widest text-center"
            >
              Call Now
            </a>
            <Link 
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-black text-base md:text-xl hover:bg-[#0B1528] transition-all shadow-2xl active:scale-95 uppercase tracking-widest text-center"
            >
              Request a Callback
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
