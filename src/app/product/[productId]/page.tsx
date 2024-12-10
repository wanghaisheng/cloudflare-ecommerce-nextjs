import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Product } from "../../../../types/Product";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default async function Page({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const productId = (await params).productId;

  const { results } = await (await getCloudflareContext()).env.DB.prepare(
    "SELECT id, name, description, price, rating, imageUrl FROM products WHERE id = ?;"
  )
    .bind(productId)
    .run();

  if (!results) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-800">Could not retrieve product</p>
      </div>
    )
  }
  const product = results[0] as Product;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <ProductGallery
            mainImage={product.imageUrl}
            // thumbnails={productData.thumbnails}
          />
          <div>
            <ProductInfo
              title={product.name}
              price={product.price}
              rating={product.rating}
              description={product.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
