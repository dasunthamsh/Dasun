// components/InteractiveBrandCarousel.jsx
'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const brands = [
  { id: 1, name: 'S', logoPath: '/images/austech.png' },
  { id: 2, name: 'N', logoPath: '/images/gzone.png' },
  { id: 3, name: '总', logoPath: '/images/BestBuy.png' },
  { id: 4, name: 'e', logoPath: '/images/fixit.png' },
  { id: 5, name: 'X', logoPath: '/images/boatle.png' },
  { id: 6, name: '6', logoPath: '/images/zksynce.png' },
  { id: 7, name: '7', logoPath: '/images/janahitha.png' },
];

export default function InteractiveBrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);

  // Update visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= brands.length - visibleItems ? 0 : prevIndex + 1
    );
  }, [visibleItems]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - visibleItems : prevIndex - 1
    );
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        

        <div className="relative">
          {/* Navigation Buttons */}
        

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 "
                  style={{ width: `${150 / visibleItems}%` }}   
                >
                  <div className="  transition-all duration-300 hover:-translate-y-1  h-full flex items-center justify-center">
                    <div className="relative w-full h-32 sm:h-24 md:h-28 lg:h-32">

                      <img
                        src={brand.logoPath}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain "
                        sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px "
                        priority={brand.id <= 2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
         
        </div>
      </div>
    </div>
  );
}