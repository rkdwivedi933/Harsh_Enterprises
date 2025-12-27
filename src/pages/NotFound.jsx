import React from 'react';
import { Home, Package, Leaf } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Subtle Leaf Decoration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Leaf className="w-20 h-20 text-green-200 opacity-40" strokeWidth={1} />
            <Leaf
              className="w-12 h-12 text-green-300 opacity-60 absolute top-8 -right-6"
              strokeWidth={1}
            />
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-6">
          <h1 className="text-9xl font-bold text-green-600 opacity-20 select-none">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Context Message */}
        <div className="mb-10">
          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
            Just like a seed needs the right soil to flourish, this page needs the right path to grow.
            Let us help you navigate back to where quality agriculture manufacturing solutions await.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* ✅ FIXED */}
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </a>

          {/* ✅ FIXED */}
          <a
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-50 text-green-700 font-semibold rounded-full border-2 border-green-600 transition-colors"
          >
            <Package className="w-5 h-5 mr-2" />
            Go to Products
          </a>
        </div>

        {/* Company Name */}
        <div className="mt-16">
          <p className="text-sm text-gray-400">
            Harsh Enterprises
          </p>
        </div>
      </div>
    </div>
  );
}
