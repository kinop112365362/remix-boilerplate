import Image from "next/image";
import { jewelryData } from "../data/jewelryData";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <header className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Elegant Jewelry Collection</h1>
        <p className="text-xl text-gray-600">Discover our exquisite selection of fine jewelry</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jewelryData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 py-8 mt-16 text-center text-gray-600">
        <p>&copy; 2024 Elegant Jewelry. All rights reserved.</p>
      </footer>
    </div>
  );
}