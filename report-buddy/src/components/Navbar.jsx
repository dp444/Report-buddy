import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-sky-170 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-10 flex justify-between items-center">
        {/* Logo */}
        <div className=" text-2xl font-bold text-indigo-600">
        📘ReportBuddy
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
          <Link to="/team" className="text-gray-700 hover:text-indigo-600">Team</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
