import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} ReportBuddy. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/privacy" className="hover:text-indigo-600 transition">Privacy</a>
          <a href="/terms" className="hover:text-indigo-600 transition">Terms</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
