import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">IndiTrekk</div>
        <ul className="flex space-x-6 text-base">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/enquiry" className="hover:text-gray-300 transition">
              Enquiry
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
