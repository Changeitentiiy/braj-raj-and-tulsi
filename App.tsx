import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySpecial from './components/WhySpecial';
import Products from './components/Products';
import SpiritualBenefits from './components/SpiritualBenefits';
import Testimonials from './components/Testimonials';
import AboutSource from './components/AboutSource';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WhySpecial />
        <Products />
        <SpiritualBenefits />
        <Testimonials />
        <AboutSource />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;