import React from 'react';
import { Link } from 'react-router-dom';
import winter from '../assets/winter.jpg'

const HomeTheme = () => {
  return (
    <section className="bg-blue-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Discover the Magic of Winter
          </h1>
          <p className="mt-6 text-cyan-100 text-lg max-w-md mx-auto md:mx-0">
            Explore our latest winter collection and cozy up in style with exclusive offers.
          </p>
          <Link
            to=""
            className="mt-8 inline-block bg-cyan-300 text-blue-950 font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition"
          >
            Donate Now
          </Link>
        </div>

        {/* Image or Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src={winter}
            alt="Winter Collection"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeTheme;
