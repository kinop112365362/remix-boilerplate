"use client";

import Image from 'next/image';
import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc("https://via.placeholder.com/300x300?text=Image+Not+Found");
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      layout="fill"
      objectFit="cover"
      onError={handleError}
    />
  );
};

export default ProductImage;