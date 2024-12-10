import { getBaseUrl } from "@/app/utils/config";
import { Product } from "../../../../types/Product";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default async function Page({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const productId = (await params).productId;

  const baseUrl = getBaseUrl();
  console.log("BASE URLBASE URLBASE URLBASE URLBASE URLBASE URLBASE URLBASE URLBASE URLBASE URLBASE URLBASE URL", baseUrl);
  const response = await fetch(`${baseUrl}/api/products/${productId}`);
  const data = (await response.json()) as { results: Product[] };
  const product = data.results[0];

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
