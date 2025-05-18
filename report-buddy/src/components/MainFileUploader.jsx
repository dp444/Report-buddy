import React, { useState } from 'react';
import axios from 'axios';

const MainFileUploader = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [message, setMessage] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Append new files instead of replacing
    const updatedFiles = [...files, ...selectedFiles];
    setFiles(updatedFiles);

    // Generate previews
    const newPreviews = selectedFiles.map((file) => {
      if (file.type.startsWith('image/')) {
        return {
          url: URL.createObjectURL(file),
          name: file.name,
          isImage: true,
        };
      }
      return {
        name: file.name,
        isImage: false,
      };
    });

    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const handleUpload = async () => {
    if (!files.length) return;

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    setIsUploading(true);
    setMessage('Generating report...');

    try {
      const response = await axios.post('http://localhost:5000/generate-report', formData);
      setDownloadLink(response.data.download_url);
      setMessage('✅ Report generated successfully!');
    } catch (err) {
      setMessage('❌ Failed to generate report.');
    }

    setIsUploading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-indigo-600">Main Documents</h2>
      
      <input
        type="file"
        multiple
        accept=".pdf,.docx,.xlsx,image/*"
        onChange={handleFileChange}
        className="w-full px-4 py-2 border rounded-lg shadow-sm"
      />

      {/* Preview Grid */}
      {previews.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {previews.map((file, index) => (
            <div key={index} className="flex flex-col items-center text-sm text-center">
              {file.isImage ? (
                <img src={file.url} alt={file.name} className="w-24 h-24 object-cover rounded-lg shadow" />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-gray-200 text-gray-700 rounded-lg shadow text-xs p-2">
                  📄 {file.name.split('.').pop().toUpperCase()}
                </div>
              )}
              <p className="mt-1 truncate w-24">{file.name}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={isUploading}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        {isUploading ? 'Processing...' : 'Generate Report'}
      </button>

      {message && (
        <p className={`text-sm mt-2 ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}

      {downloadLink && (
        <a href={downloadLink} download className="text-indigo-600 font-medium underline text-sm mt-2 inline-block">
          📄 Download Report
        </a>
      )}
    </div>
  );
};

export default MainFileUploader;
