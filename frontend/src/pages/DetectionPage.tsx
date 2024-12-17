import React, { useState } from 'react';
import { ImageUpload } from '../components/detection/ImageUpload';
import { ResultDisplay } from '../components/detection/ResultDisplay';
import { Apple } from 'lucide-react';
import { API_CONFIG } from '../config/constants';
import type { AnalysisResult } from '../types';

export function DetectionPage() {
  const [result, setResult] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleImageSelect = async (file: File) => {

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(API_CONFIG.ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('====================================');
      console.log("data is " + data);
      console.log('====================================');
      if (!data.success) {
        throw new Error(data.message || "Unexpected response from server.");
      }

      // Extract the result and confidence from data and set them
      setResult(Number(data.result));
      setConfidence(Number(data.confidence));
    } catch (error) {
      console.error('Error analyzing image:', error);
      setError('Failed to analyze image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Apple className="w-12 h-12 text-amber-600" />
        </div>
        <h1 className="text-4xl font-bold text-amber-900 mb-4">
          Mango Analysis System
        </h1>
        <p className="text-lg text-amber-700 max-w-2xl mx-auto">
          Upload a mango image to analyze for the presence of calcium carbide using our
          advanced AI detection system.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <ImageUpload onImageSelect={handleImageSelect} />
        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        <ResultDisplay result={result} confidence={confidence} isLoading={isLoading} />
      </div>
    </div>
  );
}
