import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { RESULT_MESSAGES } from '../config/constants';

interface ResultDisplayProps {
  result: number | null;
  isLoading: boolean;
}

export function ResultDisplay({ result, isLoading }: ResultDisplayProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (result === null) return null;

  const isHealthy = result === 0;
  const message = isHealthy ? RESULT_MESSAGES.HEALTHY : RESULT_MESSAGES.CONTAMINATED;

  return (
    <div className={`p-6 rounded-lg ${
      isHealthy ? 'bg-green-50' : 'bg-red-50'
    } mt-6`}>
      <div className="flex items-center space-x-3">
        {isHealthy ? (
          <>
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-green-700 font-medium">
              {message.title}
            </span>
          </>
        ) : (
          <>
            <XCircle className="w-6 h-6 text-red-500" />
            <span className="text-red-700 font-medium">
              {message.title}
            </span>
          </>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-600">
        {message.description}
      </p>
    </div>
  );
}