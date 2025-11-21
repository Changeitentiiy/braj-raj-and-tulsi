import React from 'react';

const SpiritualBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 relative bg-deepmaroon text-white overflow-hidden">
       {/* Decorative circle */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-saffron-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight font-serif text-saffron-300">
              Why Tulsi & Braj Raj <br/> are Essential
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                   <span className="text-2xl">🕉️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-saffron-100 mb-2">Purification (Shuddhi)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Applying Braj Raj as Tilak purifies the mind and body, instantly connecting you to the spiritual frequency of Govardhan Hill.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                   <span className="text-2xl">🙏</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-saffron-100 mb-2">Devotion (Bhakti)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Tulsi is dear to Lord Krishna. Chanting on a Tulsi Mala or keeping it in your home attracts divine blessings and removes negativity.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                   <span className="text-2xl">🏡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-saffron-100 mb-2">Vastu Dosha Nivaran</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Keeping authentic Braj dust in the Northeast corner of your home helps balance energies and brings prosperity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
            <div className="mb-6">
                <img 
                    src="https://images.unsplash.com/photo-1605213490942-6466950f3b4d?q=80&w=1974&auto=format&fit=crop" 
                    alt="Meditation" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg opacity-90"
                />
            </div>
            <blockquote className="shloka-text text-2xl md:text-3xl text-saffron-200 mb-4">
              "Yat kinchit tirtham bhumau, <br/>
              Braj rajah kanaih samam."
            </blockquote>
            <p className="text-gray-300 italic">
              "Whatever holy places exist on earth, they are not equal to even a single particle of Braj dust."
            </p>
            <div className="mt-6 w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualBenefits;