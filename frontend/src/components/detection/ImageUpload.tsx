import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { API_CONFIG } from '../../config/constants';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file: File) => {
    if (file && API_CONFIG.ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
      onImageSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 transition-colors ${
          dragActive ? 'border-amber-500 bg-amber-50' : 'border-amber-300'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          accept={API_CONFIG.ACCEPTED_IMAGE_TYPES.join(',')}
        />
        
        <div className="text-center">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="mx-auto max-h-64 rounded-lg shadow-lg mb-4"
            />
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="w-12 h-12 text-amber-400 mb-4" />
              <p className="text-lg font-medium text-amber-700">
                Drag and drop your mango image here
              </p>
              <p className="text-sm text-amber-600 mt-2">
                or click to select a file
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}