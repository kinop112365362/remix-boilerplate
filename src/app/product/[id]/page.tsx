import { notFound } from 'next/navigation';
import { jewelryData } from '../../../data/jewelryData';
import ProductImage from '../../../components/ProductImage';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = jewelryData.find(item => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="relative h-96 w-full md:w-96">
              <ProductImage src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Material:</span> {product.material}
            </div>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Category:</span> {product.category}
            </div>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}