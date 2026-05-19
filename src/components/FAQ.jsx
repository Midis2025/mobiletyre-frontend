import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "How quickly can you reach me?",
            a: "For emergency callouts, we aim to reach you within 60 minutes. In major urban areas, response times are often faster. In rural locations, we'll always give you an honest ETA."
        },
        {
            q: "Will you come to me on the motorway?",
            a: "Yes. Our technicians are equipped to work safely at motorway locations. Always stay behind the crash barrier while waiting."
        },
        {
            q: "What if you don't have my tyre size in stock?",
            a: "We carry a very wide range of common tyre sizes. In the rare event we don't have your exact tyre on the van, we'll source and deliver the correct tyre as quickly as possible and keep you updated throughout."
        },
        {
            q: "Do I need to pay upfront?",
            a: "We'll confirm the price before we dispatch. Payment is taken after the job is completed to your satisfaction."
        },
        {
            q: "Can you help if I've lost my locking wheel nut key?",
            a: "Yes. Our technicians carry specialist tools for this exact situation."
        }
    ];

    return (
        <section className="bg-white py-20 md:py-28 px-4 sm:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-2 mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-4">
                        <HelpCircle size={40} className="text-[#FB7E10]" />
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 font-bold uppercase text-[10px] tracking-[0.2em] pl-1">Everything you need to know</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FB7E10]/30 hover:shadow-md">
                            <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#FB7E10] transition-colors">{faq.q}</span>
                                <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#FB7E10]' : ''}`} />
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
