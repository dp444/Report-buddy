import React, { useState } from 'react';

const TemplateUploader = () => {
  const [template, setTemplate] = useState(null);

  const handleTemplateUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTemplate(file);
    }
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-indigo-600">Report Structure File</h2>
      <input
        type="file"
        accept=".docx"
        onChange={handleTemplateUpload}
        className="w-full px-4 py-2 border rounded-lg"
      />
      {template && (
        <p className="text-sm text-gray-700 mt-1">📄 Uploaded: <strong>{template.name}</strong></p>
      )}
    </div>
  );
};

export default TemplateUploader;
