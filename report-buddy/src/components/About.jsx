import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-500 to-indigo-500 min-h-screen py-16 px-6 flex justify-center items-center">
      <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-10 space-y-6">
        <h1 className="text-4xl font-bold text-indigo-700 text-center">About 📘ReportBuddy</h1>
        
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>ReportBuddy</strong> is an intelligent document processing platform designed to make report generation easier than ever. Users can upload documents such as <strong>PDFs, Word, Excel, and Images</strong>, and our system—powered by <strong>Google Gemini AI</strong>—automatically generates structured, summarized, and visually appealing academic-style reports.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you're a student, researcher, or professional, ReportBuddy saves hours of manual work by extracting data, generating insights, and compiling them into professional documents with embedded <strong>charts, tables, and summaries</strong>.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Features include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 text-lg">
          <li>Automatic summarization using Gemini AI</li>
          <li>PDF and DOCX report generation</li>
          <li>Visual charts generated from uploaded data</li>
          <li>Template-based structured formatting</li>
          <li>Responsive and modern React + Flask interface</li>
        </ul>

       
      
      </div>
    </div>
  );
};

export default About;
