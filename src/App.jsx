import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Services from './components/Services';
import HowToReadTyre from './components/HowToReadTyre';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import TyreFinderPage from './pages/TyreFinderPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LocationsPage from './pages/LocationsPage';
import ServiceDetail from './pages/ServiceDetail';
import WhatsAppButton from './components/WhatsAppButton';
import LockingWheelNutRemoval from './pages/LockingWheelNutRemoval';
import TrailerTyreFitting from './pages/TrailerTyreFitting';

/* ── Home page assembled from components ─────────────────────────────────── */
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Process />
    <Services />
    <HowToReadTyre />
    <CTA />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-['Outfit']">
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
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
