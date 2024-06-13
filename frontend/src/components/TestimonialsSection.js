import React from 'react';
import Genimg from '../assets/CTO.jpg';
import CEOimg from '../assets/Man.jpg';


const testimonials = [
  {
    id: 1,
    name: 'Helder António Ramos',
    title: 'CEO, DIOAN',
    image: Genimg,
    text: 'This product has changed the way we operate and has made a huge difference in our productivity.',
  },
  {
    id: 2,
    name: 'Alberto Diogo Muanda',
    title: 'General Director, DIOAN',
    image: CEOimg,
    text: 'Incredible results! We are very satisfied with the quality and support provided.',
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">What Our Leaders Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="max-w-sm bg-white rounded-lg shadow-md p-6">
              <img className="w-24 h-24 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.name} />
              <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-gray-600 mb-2">{testimonial.title}</p>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
