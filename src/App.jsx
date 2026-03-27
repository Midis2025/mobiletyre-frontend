import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import TyreFinderPage from './pages/TyreFinderPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LocationsPage from './pages/LocationsPage';
import ServiceDetail from './pages/ServiceDetail';

/* ── Home page assembled from components ─────────────────────────────────── */
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Process />
    <Services />
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
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/locations" element={<LocationsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
