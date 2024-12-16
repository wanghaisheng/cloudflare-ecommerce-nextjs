import React from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Product } from "./types/Product";
import { headers } from "next/headers";

async function App() {
  const headersList = await headers();
  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${headersList.get("host")}`;

  let products: Product[] = [];
  try {
    const data = await fetch(`${host}/api/products`, {
      cache: "force-cache",
    });

    const dataJson = (await data.json()) as { results: Product[] };
    products = dataJson.results;
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  if (!products) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-800">Could not retrieve products</p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1674286388329-837db73581c3?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          className="w-full h-full object-cover opacity-70"
          width={2000}
          height={1125}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-blue-200 bg-opacity-80 rounded-lg p-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                Curated Collection
              </h2>
              <p className="text-xl text-gray-800 mb-8">
                Discover unique products handpicked by our experts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.imageUrl}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
