import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Services from './components/Services';
import HowToReadTyre from './components/HowToReadTyre';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import AboutPage from './pages/AboutPage';
import TyreFinderPage from './pages/TyreFinderPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LocationsPage from './pages/LocationsPage';
import ServiceDetail from './pages/ServiceDetail';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingCallButton from './components/FloatingCallButton';
import LockingWheelNutRemoval from './pages/LockingWheelNutRemoval';
import TrailerTyreFitting from './pages/TrailerTyreFitting';
import TyrePartners from './components/TyrePartners';
import NotFoundPage from './pages/NotFoundPage';
import BookingPage from './pages/BookingPage';

/* ── Scroll to top on route change ─────────────────────────────────────── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

/* ── Home page assembled from components ─────────────────────────────────── */
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Process />
    <HowToReadTyre />
    <Services />
    <HowItWorks />
    <CTA />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-['Outfit']">
        <ScrollToTop />
        <TyrePartners />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/find-tyres" element={<TyreFinderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/locking-wheel-nut-removal" element={<LockingWheelNutRemoval />} />
          <Route path="/services/trailer-tyre-fitting" element={<TrailerTyreFitting />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <FloatingCallButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
