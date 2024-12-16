import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import SearchBar from "./components/SearchBar";

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
          <SearchBar />
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
