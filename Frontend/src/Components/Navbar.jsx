import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-40 w-full bg-blue-600 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="IndiTrek Logo" className="h-8 w-8" />
        <span className="text-xl font-bold">IndiTrek</span>
        </Link>
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
