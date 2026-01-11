'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const items = [
    { 
      id: 1, 
      content: "Ride Share App", 
      bgColor: "bg-blue-100",
      imageSrc: "/images/2.png",
      tags: ["UI UX", "App"]
    },
    { 
      id: 2, 
      content: "Mobile App", 
      bgColor: "bg-green-100",
      imageSrc: "/images/task.png",
      tags: ["React Native", "iOS", "Android"]
    },
    { 
      id: 3, 
      content: "UI/UX Design", 
      bgColor: "bg-yellow-100",
      imageSrc: "/images/nft.png",
      tags: ["Figma", "Prototype", "Wireframe"]
    },
    { 
      id: 4, 
      content: "E-commerce", 
      bgColor: "bg-purple-100",
      imageSrc: "/images/3.png",
      tags: ["Shopify", "Payment", "Cart"]
    },
    { 
      id: 5, 
      content: "Dashboard", 
      bgColor: "bg-pink-100",
      imageSrc: "/images/shoe.png",
      tags: ["Analytics", "Charts", "Data"]
    },
    { 
      id: 6, 
      content: "Game Project", 
      bgColor: "bg-indigo-100",
      imageSrc: "/images/gz.png",
      tags: ["Game", "Unity", "3D"]
    },
    { 
      id: 7, 
      content: "Fixer App", 
      bgColor: "bg-indigo-100",
      imageSrc: "/images/fix.png",
      tags: ["Service", "Booking", "App"]
    },
    { 
      id: 8, 
      content: "AI Assistant", 
      bgColor: "bg-red-100",
      imageSrc: "/images/8.png",
      tags: ["AI", "Chatbot", "ML"]
    },
    { 
      id: 9, 
      content: "Fitness App", 
      bgColor: "bg-teal-100",
      imageSrc: "/images/9.png",
      tags: ["Health", "Mobile", "Tracking"]
    },
    { 
      id: 10, 
      content: "Music Player", 
      bgColor: "bg-orange-100",
      imageSrc: "/images/10.png",
      tags: ["Audio", "Streaming", "Mobile"]
    },
    { 
      id: 11, 
      content: "Social Media", 
      bgColor: "bg-cyan-100",
      imageSrc: "/images/11.png",
      tags: ["Social", "Network", "App"]
    },
    { 
      id: 12, 
      content: "Cloud Storage", 
      bgColor: "bg-lime-100",
      imageSrc: "/images/12.png",
      tags: ["Cloud", "Storage", "Security"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold self-start mb-12">Turning Ideas into Products</h1>
      
      <div className="w-full max-w-6xl">
        <Carousel
          items={items}
          className="mb-16"
        />
      </div>
    </div>
  );
};

const Carousel = ({
  items,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [isClient, setIsClient] = useState(false); // Add this line
  const totalItems = items.length;

  // Fix 1: Add useEffect to track client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update slides per view based on screen size
  const updateSlidesPerView = useCallback(() => {
    // Fix 2: Check if window exists (client-side only)
    if (typeof window === 'undefined') return;
    
    const width = window.innerWidth;
    
    if (width < 768) {
      setSlidesPerView(2);
      setIsMobile(true);
    } else if (width < 1024) {
      setSlidesPerView(4);
      setIsMobile(false);
    } else {
      setSlidesPerView(6);
      setIsMobile(false);
    }
    
    if (currentIndex > totalItems - slidesPerView) {
      setCurrentIndex(Math.max(0, totalItems - slidesPerView));
    }
  }, [currentIndex, totalItems, slidesPerView]);

  useEffect(() => {
    // Fix 3: Only run on client side
    if (typeof window === 'undefined') return;
    
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [updateSlidesPerView]);

  // Get visible items based on current index
  const getVisibleItems = () => {
    if (isMobile) {
      return items.slice(currentIndex, currentIndex + 2);
    } else {
      return items.slice(currentIndex, currentIndex + slidesPerView);
    }
  };

  const nextSlide = () => {
    if (isMobile) {
      if (currentIndex < totalItems - 2) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    } else {
      if (currentIndex < totalItems - slidesPerView) {
        setCurrentIndex(currentIndex + slidesPerView);
      } else {
        setCurrentIndex(0);
      }
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(totalItems - 2);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - slidesPerView);
      } else {
        setCurrentIndex(totalItems - slidesPerView);
      }
    }
  };

  // Calculate grid columns based on screen size
  const getGridCols = () => {
    if (isMobile) return "grid-cols-1";
    if (slidesPerView === 4) return "grid-cols-2 grid-rows-2";
    return "grid-cols-3 grid-rows-2";
  };

  // Fix 4: Clean up class names - remove line breaks and extra spaces
  const visibleItems = getVisibleItems();

  // Fix 5: Render different content during SSR vs CSR
  if (!isClient) {
    // SSR: Render a simplified version without dynamic calculations
    return (
      <div className={`relative w-full ${className}`}>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {items.slice(0, 6).map((item, index) => (
            <div 
              key={`${item.id}-ssr`} 
              className="h-full rounded-xl shadow-lg overflow-hidden min-h-[300px]"
            >
              <div className="relative h-full">
                <img
                  src={item.imageSrc}
                  alt={item.content}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.content}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Projects Grid */}
      <div 
        ref={containerRef}
        className={`grid ${getGridCols()} ${isMobile ? 'gap-6' : 'gap-4'} transition-all duration-300`}
      >
        {visibleItems.map((item, index) => (
          <div 
            key={`${item.id}-${currentIndex}`} 
            className={`h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
              isMobile ? 'min-h-[300px]' : ''
            }`}
          >
            {/* Image wrapper */}
            <div className="relative h-full">
              {/* Image */}
              <img
                src={item.imageSrc}
                alt={item.content}
                className="w-full h-full object-cover"
              />

              {/* Overlay - Fix 6: Clean class names (no line breaks) */}
              <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
                <div className="flex flex-wrap gap-2 mb-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={`font-semibold text-white ${isMobile ? 'text-lg' : 'text-xl'}`}>
                  {item.content}
                </h3>
              </div>
            </div>
          </div>
        ))}
        
        {/* Fill empty slots if needed (for desktop/tablet) */}
        {!isMobile && visibleItems.length < slidesPerView && 
          Array.from({ length: slidesPerView - visibleItems.length }).map((_, index) => (
            <div 
              key={`empty-${index}`}
              className="h-full rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400"
            >
              Coming Soon
            </div>
          ))
        }
      </div>

      {/* Navigation Controls - Fix 7: Clean class names */}
      <div className='flex justify-end mt-8 gap-3'>
        <button
          type="button"
          onClick={prevSlide}
          className="size-10 bg-white flex items-center justify-center rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5 text-black" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="size-10 bg-white flex items-center justify-center rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5 text-black" />
        </button>
      </div>

      {/* Mobile Indicator */}
      {isMobile && (
        <div className="flex justify-center mt-6 gap-2">
          <span className="text-sm text-gray-600">
            {currentIndex + 1} - {Math.min(currentIndex + 2, totalItems)} of {totalItems}
          </span>
        </div>
      )}

      {/* Desktop/Tablet Indicator */}
      {!isMobile && totalItems > slidesPerView && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ 
            length: Math.ceil(totalItems / slidesPerView) 
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * slidesPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index * slidesPerView 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to group ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;