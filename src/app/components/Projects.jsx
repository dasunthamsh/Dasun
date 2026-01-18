'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link'; // Import Next.js Link component
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const Projects = () => {
  const router = useRouter();
  
  const items = [
    { 
      id: 1, 
      content: "Dashboard", 
      bgColor: "bg-pink-100",
      imageSrc: "/images/shoe.png",
      tags: ["Analytics", "Charts", "Data"],
      url: "/Projects/Shoe" // Add URL for this project
    },
    { 
      id: 6, 
      content: "UI/UX Design", 
      bgColor: "bg-yellow-100",
      imageSrc: "/images/nft.png",
      tags: ["Figma", "Prototype", "Wireframe"],
      url: "/Projects/NFT"
    },
    { 
      id: 2, 
      content: "Ride Share App", 
      bgColor: "bg-blue-100",
      imageSrc: "/images/helloride.png",
      tags: ["UI UX", "App"],
      url: "/Projects/HelloRide"
    },
    { 
      id: 4, 
      content: "Game Project", 
      bgColor: "bg-indigo-100",
      imageSrc: "/images/gz.png",
      tags: ["Game", "Unity", "3D"],
      url: "/projects/game-project"
    },
    { 
      id: 5, 
      content: "E-commerce", 
      bgColor: "bg-purple-100",
      imageSrc: "/images/petpal.png",
      tags: ["Shopify", "Payment", "Cart"],
      url: "/Projects/PetPal"
    },
    { 
      id: 3, 
      content: "Mobile App", 
      bgColor: "bg-green-100",
      imageSrc: "/images/task.png",
      tags: ["React Native", "iOS", "Android"],
      url: "/Projects/Task"
    },
    { 
      id: 7, 
      content: "Fixer App", 
      bgColor: "bg-indigo-100",
      imageSrc: "/images/fix.png",
      tags: ["Service", "Booking", "App"],
      url: "/projects/fixer-app"
    },
    { 
      id: 8, 
      content: "Coming soon", 
      bgColor: "",
      imageSrc: "",
      tags: ["", ""],
      url: "" // Empty URL for coming soon projects
    },
    { 
      id: 9, 
      content: "Coming soon", 
      bgColor: "bg-teal-100",
      imageSrc: "",
      tags: ["", ""],
      url: ""
    },
    { 
      id: 10, 
      content: "Coming soon", 
      bgColor: "bg-orange-100",
      imageSrc: "",
      tags: ["", ""],
      url: ""
    },
    { 
      id: 11, 
      content: "Coming soon", 
      bgColor: "bg-cyan-100",
      imageSrc: "",
      tags: ["", ""],
      url: ""
    },
    { 
      id: 12, 
      content: "Coming soon", 
      bgColor: "bg-lime-100",
      imageSrc: "",
      tags: ["", ""],
      url: ""
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Turning Ideas into Products
        </h2>
        <p className="mt-4 text-gray-400">
          A collection of projects that showcase my skills. Each project represents a journey of learning and innovation.
        </p>
      </div>

      <h1 className="text-5xl font-bold self-center mb-20"></h1>
      <p className="mt-4 text-gray-400"></p>
      <div className="w-full max-w-6xl">
        <Carousel
          items={items}
          className="mb-16"
          router={router} // Pass router to Carousel
        />
      </div>
    </div>
  );
};

const Carousel = ({
  items,
  className = '',
  router, // Receive router as prop
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const totalItems = items.length;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const updateSlidesPerView = useCallback(() => {
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
    if (typeof window === 'undefined') return;
    
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [updateSlidesPerView]);

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

  const getGridCols = () => {
    if (isMobile) return "grid-cols-1";
    if (slidesPerView === 4) return "grid-cols-2 grid-rows-2";
    return "grid-cols-3 grid-rows-2";
  };

  // Function to handle project click
  const handleProjectClick = (item) => {
    if (item.url && item.url !== "") {
      router.push(item.url); // Navigate to project page
    }
  };

  const visibleItems = getVisibleItems();

  if (!isClient) {
    return (
      <div className={`relative w-full ${className}`}>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {items.slice(0, 6).map((item, index) => (
            <Link 
              href={item.url || "#"} 
              key={`${item.id}-ssr`}
              className="block h-full"
            >
              <div className="h-full rounded-xl shadow-lg overflow-hidden min-h-[300px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div 
        ref={containerRef}
        className={`grid ${getGridCols()} ${isMobile ? 'gap-6' : 'gap-4'} transition-all duration-300`}
      >
        {visibleItems.map((item, index) => {
          // For items with no URL (coming soon), make them non-clickable
          if (!item.url || item.url === "") {
            return (
              <div 
                key={`${item.id}-${currentIndex}`} 
                className={`h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isMobile ? 'min-h-[300px]' : ''
                } ${!item.url ? 'cursor-default' : ''}`}
              >
                <div className="relative h-full">
                  {item.imageSrc && (
                    <img
                      src={item.imageSrc}
                      alt={item.content}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.tags.map((tag, tagIndex) => tag && (
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
            );
          }

          // For items with URL, make them clickable
          return (
            <div 
              key={`${item.id}-${currentIndex}`} 
              onClick={() => handleProjectClick(item)}
              className={`h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                isMobile ? 'min-h-[300px]' : ''
              } cursor-pointer hover:scale-[1.02] active:scale-[0.98]`}
            >
              <div className="relative h-full">
                {item.imageSrc && (
                  <img
                    src={item.imageSrc}
                    alt={item.content}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag, tagIndex) => tag && (
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
          );
        })}
        
        {!isMobile && visibleItems.length < slidesPerView && 
          Array.from({ length: slidesPerView - visibleItems.length }).map((_, index) => (
            <div 
              key={`empty-${index}`}
              className="h-full rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 cursor-default"
            >
              Coming Soon
            </div>
          ))
        }
      </div>

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

      {isMobile && (
        <div className="flex justify-center mt-6 gap-2">
          <span className="text-sm text-gray-600">
            {currentIndex + 1} - {Math.min(currentIndex + 2, totalItems)} of {totalItems}
          </span>
        </div>
      )}

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