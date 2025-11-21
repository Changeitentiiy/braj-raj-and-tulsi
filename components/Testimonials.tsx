import React from 'react';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-saffron-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepmaroon mb-4">Words from Devotees</h2>
          <p className="text-gray-600">See how our sacred products have touched lives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-md relative">
              <Quote className="absolute top-6 right-6 text-orange-100" size={48} />
              <div className="flex text-orange-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;