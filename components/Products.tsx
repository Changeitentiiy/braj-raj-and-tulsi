import React from 'react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, Star } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Sacred Offerings</span>
          <h2 className="text-4xl md:text-5xl font-bold text-deepmaroon mt-2 mb-6">Bring Braj Home</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Carefully packed to preserve the spiritual potency. 100% Pure & Natural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100">
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white/90 backdrop-blur-sm text-deepmaroon text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span className="text-gray-400 text-xs ml-1">(48)</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-6 line-clamp-3 flex-1">
                  {product.description}
                </p>
                
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <span className="text-gray-400 line-through text-sm block">{product.originalPrice}</span>
                    <span className="text-2xl font-bold text-deepmaroon">{product.price}</span>
                  </div>
                  <button className="bg-deepmaroon hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-md">
                    <ShoppingCart size={18} /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-orange-50 p-8 rounded-2xl border border-orange-100 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-deepmaroon mb-2">Our Guarantee</h4>
            <p className="text-gray-700">If you don't feel the spiritual quality of our products, we offer a 100% refund. We trust in the purity of Braj.</p>
        </div>
      </div>
    </section>
  );
};

export default Products;