import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deepmaroon text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        {/* Final CTA */}
        <div className="bg-orange-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl transform -translate-y-10 border border-orange-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif relative z-10">Bring the Blessings of Braj Home</h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto relative z-10">Don't wait. Connect with the divine energy of Vrindavan today. Authentic, Pure, and Sacred.</p>
            <button className="bg-white text-deepmaroon px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-100 transition-all transform hover:scale-105 relative z-10">
                Order Tulsi & Braj Raj Now
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                 <div className="bg-orange-500 text-white p-1.5 rounded-full">
                    <span className="font-serif text-xl font-bold">BD</span>
                </div>
                <span className="font-serif text-2xl font-bold">Braj Divine</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Our mission is to provide genuine spiritual items from the holy land of Braj to devotees worldwide, maintaining the highest standards of purity and devotion.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-saffron-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Shop Now</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-saffron-300">Contact Us</h4>
            <p className="text-gray-300 mb-2">Vrindavan, Mathura</p>
            <p className="text-gray-300 mb-2">Uttar Pradesh, India</p>
            <p className="text-gray-300 mb-6">support@brajdivine.com</p>
            <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Braj Divine. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Jai Shri Radhe Krishna 🙏</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;