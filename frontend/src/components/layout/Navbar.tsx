import React from 'react';
import { Link } from 'react-router-dom';
import { Apple } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Apple className="w-8 h-8 text-amber-600" />
            <span className="text-xl font-bold text-amber-900">
              Mango AI Detection
            </span>
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/detection"
              className="text-amber-800 hover:text-amber-600 transition-colors"
            >
              Detection
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}