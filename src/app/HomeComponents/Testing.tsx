// pages/index.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import imagesss from "../../../public/Images/Ecommerce.png"

const Testing: React.FC = () => {
  const images = [
    '/images/Ecommerce.png',
    '/images/Beauty.png',
    '/images/Spots.png',
  ];

  const Slider: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
      <div className="relative w-full h-64 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
        src={image} 
        alt={`Slide ${index}`} 
        width={500} 
        height={300} 
        className="slid221" 
      />
          </div>
        ))}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        >
          Next
        </button>
      </div>
    );
  };

  return (
   
     
      <Slider images={images} />

  );
};

export default Testing;
