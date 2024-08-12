import React, { forwardRef } from 'react';

const LocationSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="location" className="bg-white rounded-lg p-8 md:p-12 font-poppins flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Our Location</h2>
      <iframe
        className="w-3/4 h-64 rounded-lg hover:shadow-xl transition-shadow duration-300"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.028537932106!2d13.189862951866892!3d-8.913474334939106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a52f5b9b8f35c1b%3A0xd0b3a95f8e4e2f6c!2sAvenida%2021%20de%20Janeiro%2C%20Luanda%2C%20Angola!5e0!3m2!1sen!2sao!4v1623895734987!5m2!1sen!2sao"
        allowFullScreen=""
        loading="lazy"
      >
      </iframe>
    </div>
  )
});

export default LocationSection;
