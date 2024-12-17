import React from 'react';
import { Link } from 'react-router-dom';
import { Apple, MoveRight } from 'lucide-react';

export function WelcomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-amber-900 mb-6">
            Mango Quality Analysis System
          </h1>
          <p className="text-lg text-amber-800 mb-8">
            Welcome to our advanced AI-powered system for detecting calcium carbide in mangoes. 
            This Master's project utilizes deep learning technology to ensure the safety and 
            quality of your mangoes.
          </p>
          <Link
            to="/detection"
            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 
                     text-white font-semibold rounded-lg transition-colors gap-2"
          >
            Start Detection
            <MoveRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80"
            alt="Fresh Mangoes"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 text-amber-600">
              <Apple className="w-6 h-6" />
              <span className="font-semibold">AI-Powered Analysis</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-amber-900 mb-3">
            Quick Detection
          </h3>
          <p className="text-amber-700">
            Upload your mango images and get instant results about calcium carbide presence.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-amber-900 mb-3">
            Accurate Results
          </h3>
          <p className="text-amber-700">
            Our deep learning model ensures highly accurate detection and classification.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-amber-900 mb-3">
            Food Safety
          </h3>
          <p className="text-amber-700">
            Ensure your mangoes are free from harmful artificial ripening agents.
          </p>
        </div>
      </div>
    </div>
  );
}