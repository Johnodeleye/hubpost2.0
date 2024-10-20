'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface ImageShowcaseProps {
  src: string | StaticImageData;
  alt: string;
}

const ImageShowcase: React.FC<ImageShowcaseProps> = ({ src, alt }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleClose = () => {
    setIsImageOpen(false);
  };

  return (
    <div className="w-full h-72 relative">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="object-cover rounded-md object-center cursor-pointer"
        onClick={handleImageClick}
      />
      {isImageOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <Image
            src={src}
            alt="Enlarged Image"
            layout="fill"
            objectFit="contain"
            onClick={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default ImageShowcase;