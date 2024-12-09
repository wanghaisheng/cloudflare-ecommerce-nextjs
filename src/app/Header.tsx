import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/cloudflare-logo.png"
              alt="Cloudflare"
              width={120}
              height={40}
              className="h-10"
            />
          </Link>
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-indigo-600">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600">
              <ShoppingBag className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
