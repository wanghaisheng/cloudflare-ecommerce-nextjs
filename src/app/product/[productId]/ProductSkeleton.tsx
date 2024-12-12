import React from 'react';

export default function ProductSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image skeleton */}
          <div className="flex flex-col">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200 animate-pulse" />
          </div>

          {/* Content skeleton */}
          <div className="mt-10 lg:mt-0 lg:pl-8">
            {/* Title */}
            <div className="h-8 bg-gray-200 rounded-md w-3/4 animate-pulse" />
            
            {/* Rating */}
            <div className="mt-3 flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
              <div className="w-24 h-5 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center space-x-3">
              <div className="h-8 bg-gray-200 rounded-md w-32 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded-md w-20 animate-pulse" />
            </div>

            {/* Description */}
            <div className="mt-6">
              <div className="h-5 bg-gray-200 rounded w-24 animate-pulse mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
              </div>
            </div>

            {/* Shipping info */}
            <div className="mt-6 space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-40 animate-pulse" />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex space-x-4">
              <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse" />
              <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse" />
            </div>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex justify-between">
                <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
                <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}