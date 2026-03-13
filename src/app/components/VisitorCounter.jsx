'use client'

import React, { useEffect, useState } from 'react';

const VisitorCounter = ({ count }) => {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate the count
    if (count > 0) {
      setIsVisible(true);
      let start = 0;
      const duration = 1500; // 1.5 seconds
      const increment = count / (duration / 16); // 60fps
      
      let timer = setInterval(() => {
        start += increment;
        if (start >= count) {
          setAnimatedCount(count);
          clearInterval(timer);
        } else {
          setAnimatedCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [count]);

  // Format the count with commas
  const formattedCount = animatedCount.toLocaleString();

  return (
    <div className={` text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex items-center space-x-2">
        {/* Eye icon for visitors */}
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
          />
        </svg>
        
        
        <span className="text-lg font-bold tabular-nums">
          {formattedCount}
        </span>
      </div>

      {/* Optional tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
          Unique visitors since {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;