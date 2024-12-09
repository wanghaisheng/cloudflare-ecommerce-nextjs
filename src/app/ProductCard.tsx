import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
}: ProductProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/product/${id}`}>
        <div className="aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            width={800}
            height={800}
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-indigo-600 font-medium">{category}</p>
          <h3 className="mt-1 text-lg font-medium text-gray-900">{name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-xl font-semibold text-gray-900">${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
