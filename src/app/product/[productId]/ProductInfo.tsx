import { Star, Truck, Shield } from 'lucide-react';

interface ProductInfoProps {
  title: string;
  price: string;
  discount?: string;
  rating: number;
  reviews: number;
  description: string;
}

export default function ProductInfo({
  title,
  price,
  discount,
  rating,
  reviews,
  description,
}: ProductInfoProps) {
  return (
    <div className="mt-10 lg:mt-0 lg:pl-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
      
      <div className="mt-3 flex items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
              fill="currentColor"
            />
          ))}
        </div>
        <span className="ml-3 text-sm text-gray-500">({reviews} reviews)</span>
      </div>

      <div className="mt-6">
        <h2 className="sr-only">Product information</h2>
        <div className="flex items-center">
          <p className="text-3xl tracking-tight text-gray-900">{price}</p>
          {discount && (
            <span className="ml-3 text-sm font-medium text-green-600">{discount}</span>
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">Description</h3>
        </div>
        <div className="mt-2 space-y-6">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center">
          <Truck className="h-5 w-5 text-gray-400" />
          <span className="ml-2 text-sm text-gray-600">Free shipping worldwide</span>
        </div>
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-gray-400" />
          <span className="ml-2 text-sm text-gray-600">2-year warranty included</span>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add to Cart
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Buy Now
        </button>
      </div>
    </div>
  );
}