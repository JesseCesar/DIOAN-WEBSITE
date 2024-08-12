import React from 'react';
import Genimg from '../assets/CTO.jpg';
import CEOimg from '../assets/Man.jpg';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Helder António Ramos', role: 'Founder', image: Genimg },
    { name: 'Alberto Diogo Muanda', role: 'Co-Founder', image: CEOimg },
  ]
  return (
    <div className='font-poppins'>
      <section className="p-8 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          Our mission is to provide high-quality, organic produce to our community while maintaining sustainable farming practices.
        </p>
      </section>
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="flex justify-center space-x-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-1/3 flex flex-col items-center">
              <img src={member.image} alt={member.name} className="w-48 h-48 rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Contact Us</h2>
        <p className="text-lg mb-6 text-gray-600">We'd love to hear from you! Please fill out the form below to get in touch.</p>
        <form className="max-w-md mx-auto space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-200">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default AboutUs;
