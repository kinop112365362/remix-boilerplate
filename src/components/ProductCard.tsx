import Image from 'next/image';
import { JewelryItem } from '../data/jewelryData';

interface ProductCardProps {
  product: JewelryItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        <div className="mt-4">
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;