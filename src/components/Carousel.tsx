import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type CarouselProps = {
  images: string[];
};
export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden relative h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute justify-center inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-center"
            />
          </div>
        ))}
      </div>
      <button
        className="bg-black absolute top-1/2 left-0 transform -translate-y-1/2 text-white"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length,
          )
        }
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="bg-black absolute top-1/2 right-0 transform -translate-y-1/2 text-white"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default Carousel;
