"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { JewelryItem } from '../data/jewelryData';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: JewelryItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleViewDetails = () => {
    router.push(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">{product.material}</span>
        </div>
        <div className="mt-4 flex justify-between">
          <button 
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            onClick={handleViewDetails}
          >
            View Details
          </button>
          <button 
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;