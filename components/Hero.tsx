import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop" 
          alt="Vrindavan Temple Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepmaroon/90 via-deepmaroon/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <div className="inline-block mb-4 px-4 py-1 border border-orange-300/50 rounded-full bg-black/20 backdrop-blur-sm">
            <span className="text-orange-200 font-medium tracking-widest text-xs uppercase">Authentic Spiritual Goods</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Pure Tulsi & Sacred <br/>
          <span className="text-saffron-400">Braj Raj</span> Direct From Braj
        </h1>
        
        <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Authentic, blessed, and hand-sourced from the divine land of Shri Radha Krishna. Bring the spiritual vibration of Vrindavan into your home.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#products"
            className="w-full sm:w-auto bg-saffron-500 hover:bg-saffron-400 text-deepmaroon px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
            Order Now <ArrowRight size={20} />
          </a>
          <a 
            href="#benefits"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
          >
            Explore Benefits
          </a>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>100% Authentic</span>
            </div>
             <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Blessed by Brajwasis</span>
            </div>
        </div>
      </div>
      
      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-saffron-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;