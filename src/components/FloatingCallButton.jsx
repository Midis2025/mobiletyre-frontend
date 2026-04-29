import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
    return (
        <a
            href="tel:02071013856"
            className="fixed bottom-8 left-8 z-[9999] group"
            aria-label="Call Us Now"
        >
            {/* Tooltip */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl border border-white/10">
                Call Us Now
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-black rotate-45 border-l border-b border-white/10"></div>
            </div>

            {/* Pulsing Aura */}
            <div className="absolute inset-0 bg-[#FB7E10] rounded-full animate-ping opacity-25"></div>

            {/* Main Button */}
            <div className="relative w-16 h-16 bg-[#FB7E10] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(251,126,16,0.4)] hover:shadow-[0_15px_50px_rgba(251,126,16,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group-hover:-rotate-12 border border-white/20">
                <Phone className="w-8 h-8 text-white fill-current" />
            </div>
        </a>
    );
};

export default FloatingCallButton;
