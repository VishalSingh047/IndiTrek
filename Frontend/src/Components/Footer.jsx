import React from 'react';
import logo from "../assets/img/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        
        <div>
        <div className='flex items-center mb-2'>
            <img src={logo} alt="IndiTrek Logo" className="h-8 w-8 object-contain" />
          <h2 className="text-xl font-semibold ml-2">About IndiTrek</h2>
          </div>
          <p className="text-sm text-gray-400">
            IndiTrek is your trusted travel partner offering curated tour packages
            across the diverse landscapes of India. Discover, explore, and experience
            the magic of travel.
          </p>
        
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/enquiry" className="hover:text-white">Enquiry</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-400">Email: info@inditrek.com</p>
          <p className="text-sm text-gray-400">Phone: +91 81269 51726</p>
          <p className="text-sm text-gray-400">Location: New Delhi, India</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 pb-5">
        &copy; {new Date().getFullYear()} IndiTrek. All rights reserved to Vishal Singh.
      </div>
    </footer>
  );
};

export default Footer;
