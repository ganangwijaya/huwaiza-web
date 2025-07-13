import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="/huwaiza-web/logo/logo-huwaiza.png"
              alt="Logo Huwaiza"
              className="h-12"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-400 transition-colors"
            >
              Profil
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-400 transition-colors"
            >
              Simpanan
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-400 transition-colors"
            >
              Pembiayaan
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-400 transition-colors"
            >
              Baitulmal
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-400 transition-colors"
            >
              Berita
            </Link>
            <Button size={"sm"} className="bg-primary-400 hover:bg-primary-500">
              Hubungi Kami
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
