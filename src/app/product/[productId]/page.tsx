import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default async function Page({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {

  console.log("Made it to here")

  const productId = (await params).productId;

  console.log(productId)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <ProductGallery
            mainImage={products[productId-1].image}
            // thumbnails={productData.thumbnails}
          />
          <div>
            <ProductInfo
              title="Product"
              price="$100"
              discount="Svae 2323r2"
              rating={1}
              reviews={23}
              description="Cool product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1059.99,
      category: "Technology",
      image:
        "https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/393defea-8ee6-46c7-971f-df55f24a7700/public",
    },
    {
      id: 2,
      name: "Television",
      price: 2889.99,
      category: "Technology",
      image:
        "https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/f2cf1abd-3995-4b8c-0c24-99b82e4aac00/public",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 129.99,
      category: "Accessories",
      image:
        "https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/4e290265-b01d-43d9-0b49-b891fcdaf100/public",
    },
    {
      id: 4,
      name: "Watch",
      price: 199.99,
      category: "Accessories",
      image:
        "https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/36b74004-c669-4572-b505-6384c000bd00/public",
    },
  ];