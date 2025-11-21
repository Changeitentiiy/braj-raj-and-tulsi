import React from 'react';

const AboutSource: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <div className="relative">
                <div className="absolute -inset-4 bg-orange-200 rounded-2xl transform rotate-3"></div>
                <img 
                    src="https://images.unsplash.com/photo-1676960499889-7919191f2533?q=80&w=2070&auto=format&fit=crop" 
                    alt="Govardhan Hill" 
                    className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg max-w-xs">
                    <p className="text-sm font-bold text-deepmaroon">Sourced from Govardhan & Nandgaon</p>
                </div>
             </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-deepmaroon mb-6 font-serif">Collected with Love & Devotion</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our Tulsi and Braj Raj are not mass-manufactured products. They are collected by local Brajwasis who have lived in the holy Dham for generations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We visit the sacred forests of Nandgaon and the foothills of Govardhan to collect the dust and wood. Every packet is prepared with chanting of the Holy Names, ensuring that when it reaches you, it carries the authentic vibration of spiritual bliss.
            </p>
            
            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                    <span className="text-gray-800 font-medium">Direct support to Brajwasis</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                    <span className="text-gray-800 font-medium">No artificial chemicals or fragrances</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                    <span className="text-gray-800 font-medium">Packed with sacred mantras</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSource;