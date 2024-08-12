import React from 'react';
import Genimg from '../assets/CTO.jpg';
import CEOimg from '../assets/Man.jpg';


const testimonials = [
  {
    id: 1,
    name: 'Helder António Ramos',
    title: 'CEO, DIOAN',
    image: Genimg,
    text: 'At the heart of our company is a commitment to sustainable farming practices. We believe that by investing in innovation and our community, we can cultivate a brighter future for everyone.',
  },
  {
    id: 2,
    name: 'Alberto Diogo Muanda',
    title: 'General Director, DIOAN',
    image: CEOimg,
    text: "Technology is transforming agriculture, and we're at the forefront of that change. Our advanced solutions empower farmers to maximize their yield while minimizing their environmental footprint.",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-poppins">
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
