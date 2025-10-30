import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
