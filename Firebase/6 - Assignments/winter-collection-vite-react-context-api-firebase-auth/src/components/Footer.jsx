import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaSnowflake } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaSnowflake className="text-cyan-300" />
            Winter Campaign
          </div>
          <p className="mt-4 text-sm text-cyan-100 max-w-xs">
            Embrace the chill with our exclusive winter deals. Stay warm, stay stylish!
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-lg font-semibold text-cyan-200">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><Link className="hover:underline" to="/shop">Shop</Link></li>
            <li><Link className="hover:underline" to="/about">About</Link></li>
            <li><Link className="hover:underline" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-lg font-semibold text-cyan-200">Follow Us</h3>
          <div className="flex gap-5 mt-4 text-xl">
            <a href="#" className="hover:text-cyan-300" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hover:text-cyan-300" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="hover:text-cyan-300" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-cyan-800 pt-4 text-center text-sm text-cyan-400">
        © 2025 WinterGlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
