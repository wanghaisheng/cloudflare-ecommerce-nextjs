import Image from 'next/image';

interface ProductGalleryProps {
  mainImage: string;
//   thumbnails: string[];
}

export default function ProductGallery({ mainImage }: ProductGalleryProps) {
  return (
    <div className="flex flex-col">
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          src={mainImage}
          alt="Premium Wireless Headphones"
          className="object-cover object-center"
          height={592}
          width={592}
        />
      </div>
      {/* <div className="mt-4 grid grid-cols-4 gap-4">
        {thumbnails.map((thumb, i) => (
          <button
            key={i}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:ring-2 hover:ring-indigo-500"
          >
            <img
              src={thumb}
              alt={`Product image ${i + 1}`}
              fill
              className="object-cover object-center"
            />
          </button>
        ))}
      </div> */}
    </div>
  );
}