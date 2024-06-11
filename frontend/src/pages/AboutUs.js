import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">About Us</h1>
        <div className="bg-white shadow-md rounded-lg p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-gray-700 text-lg">Our mission is to provide high-quality products and services that meet the needs and exceed the expectations of our customers. We strive to innovate and continuously improve our offerings to ensure customer satisfaction and success.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
          <p className="text-gray-700 text-lg">Our vision is to be a global leader in our industry, recognized for our commitment to excellence, sustainability, and social responsibility. We aim to create a positive impact on the communities we serve and to inspire others to achieve their best.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
