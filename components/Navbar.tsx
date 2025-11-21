import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
            <div className="bg-orange-600 text-white p-1.5 rounded-full">
                <span className="font-serif text-xl font-bold">BD</span>
            </div>
            <span className={`font-serif text-2xl font-bold ${scrolled ? 'text-deepmaroon' : 'text-deepmaroon md:text-white'}`}>
                Braj Divine
            </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium uppercase tracking-wider hover:text-orange-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
            <ShoppingBag size={18} />
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none ${scrolled ? 'text-gray-800' : 'text-gray-800'}`} // Always dark on mobile for visibility against potential light bg or white drawer
            >
                {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-gray-800' : 'text-deepmaroon'} />}
            </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-orange-100 flex flex-col py-4 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <div className="px-6 pt-4">
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold shadow-md">
                Order Now
            </button>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;