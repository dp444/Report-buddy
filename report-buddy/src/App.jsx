import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainFileUploader from './components/MainFileUploader';
import TemplateUploader from './components/TemplateUploader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Team from './components/Team';
import About from './components/About';

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-white via-blue-500 to-indigo-500 flex items-center justify-center p-6">
    <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center text-indigo-700">📘ReportBuddy</h1>
      <p className="text-center text-gray-600">Upload documents to automatically generate a structured report.</p>
      <TemplateUploader />
      <MainFileUploader />
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
