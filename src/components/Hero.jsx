import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    serviceType: servicesData[0]?.title || '',
    tyreSize: '',
    timingSlot: 'As Soon As Possible'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Validation
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      setLoading(false);
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setError('Phone number is required');
      setLoading(false);
      return;
    }
    if (!formData.tyreSize.trim()) {
      setError('Tyre size is required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://enduring-morning-cf86e59201.strapiapp.com/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            serviceType: formData.serviceType,
            tyreSize: formData.tyreSize,
            timingSlot: formData.timingSlot,
            bookingStatus: 'Pending'
          }
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error?.message || 'Failed to submit appointment');
      }

      setSuccess(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        serviceType: servicesData[0]?.title || '',
        tyreSize: '',
        timingSlot: 'As Soon As Possible'
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || 'Failed to submit appointment. Please try again.');
      console.error('Appointment submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero image.avif"
          alt="Tire background"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 bg-[#33251a] border border-[#fb7e10]/30 px-3 md:px-4 py-1.5 rounded-full">
              <span className="text-orange-500">⚡</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-orange-400">
                UK'S FAST MOBILE TYRE SERVICE – 24/7
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              The Help You Need, Exactly <br className="hidden sm:block" />
              <span className="text-[#FB7E10]"> Where You Are.</span>
            </h1>

            <p className="max-w-md text-gray-300 text-sm md:text-lg leading-relaxed">
              Stuck with a flat? Got a puncture on your way to work? We come straight to you, any time of the day or night, anywhere across Surrey and Hampshire.
               </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 w-full max-w-sm sm:max-w-none">
              <a 
                href="tel:+447494024653"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-orange-600 transition-all border-2 border-transparent"
              >
                Call Now: +44 7494 024653
              </a>
              <a
                href="https://wa.me/447495336005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#22C55E] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-green-600 transition-all border-2 border-transparent"
              >
                Whatsapp
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full -mr-16 -mt-16 blur-3xl"></div>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-[6px] h-8 bg-black"></div>
                <h2 className="text-2xl font-black tracking-tighter uppercase">INSTANT APPOINTMENT</h2>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm font-medium">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm font-medium">
                    ✓ Appointment request submitted successfully! We'll contact you shortly.
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="000-000-0000"
                    className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                    SERVICE TYPE
                  </label>
                  <div className="relative">
                    <select 
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 appearance-none text-gray-700 font-medium focus:ring-2 focus:ring-[#FB7E10] transition-all">
                      {servicesData.map((service, index) => (
                        <option key={index} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                      TYRE SIZE
                    </label>
                    <input
                      type="text"
                      name="tyreSize"
                      value={formData.tyreSize}
                      onChange={handleInputChange}
                      placeholder="e.g. 225/45 R17"
                      className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 placeholder-gray-400 focus:ring-2 focus:ring-[#FB7E10] transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#8A95AF] uppercase tracking-[0.2em] mb-2 ml-1">
                      TIMING SLOT
                    </label>
                    <div className="relative">
                      <select 
                        name="timingSlot"
                        value={formData.timingSlot}
                        onChange={handleInputChange}
                        className="w-full bg-[#EAEEF3] border-none rounded-lg px-4 py-3.5 appearance-none text-gray-700 text-sm focus:ring-2 focus:ring-[#FB7E10] transition-all font-medium">
                        <option>As Soon As Possible</option>
                        <option>Morning (8AM - 12PM)</option>
                        <option>Afternoon (12PM - 4PM)</option>
                        <option>Evening (4PM - 8PM)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0B1528] text-white py-4.5 rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 mt-6 hover:bg-slate-900 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'SUBMITTING...' : 'REQUEST APPROVAL'}
                  <ArrowRight size={20} strokeWidth={3} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
