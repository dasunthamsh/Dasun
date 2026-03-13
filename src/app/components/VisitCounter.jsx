'use client'

import { useEffect, useState } from 'react';

const VisitCounter = ({ variant = 'simple', className = '' }) => {
  const [visitCount, setVisitCount] = useState(0);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Function to handle visit counting
    const handleVisitCount = () => {
      try {
        // Get current counts from localStorage
        const storedVisits = localStorage.getItem('siteVisits');
        const storedUnique = localStorage.getItem('uniqueVisitors');
        const visitorId = localStorage.getItem('visitorId');

        // Parse existing counts or initialize to 0
        let currentVisits = storedVisits ? parseInt(storedVisits) : 0;
        let currentUnique = storedUnique ? parseInt(storedUnique) : 0;

        // Increment total visits
        currentVisits += 1;

        // Check if this is a new visitor
        if (!visitorId) {
          // Generate a simple visitor ID
          const newVisitorId = Date.now().toString(36) + Math.random().toString(36).substr(2);
          localStorage.setItem('visitorId', newVisitorId);
          currentUnique += 1;
          localStorage.setItem('uniqueVisitors', currentUnique.toString());
        }

        // Save updated visit count
        localStorage.setItem('siteVisits', currentVisits.toString());

        // Update state
        setVisitCount(currentVisits);
        setUniqueVisitors(currentUnique);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error handling visit count:', error);
        // Fallback values
        setVisitCount(0);
        setUniqueVisitors(0);
        setIsLoaded(true);
      }
    };

    // Call the function
    handleVisitCount();
  }, []);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  // Different variants of the counter
  const renderCounter = () => {
    if (!isLoaded) {
      return <span className="opacity-50">Loading...</span>;
    }

    switch (variant) {
      case 'simple':
        return (
          <div className={`flex items-center gap-2 text-sm ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-white">{formatNumber(visitCount)}</span>
            <span className="text-gray-400">visits</span>
          </div>
        );

      case 'detailed':
        return (
          <div className={`flex items-center gap-4 text-sm ${className}`}>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="text-white">{formatNumber(visitCount)}</span>
              <span className="text-gray-400">visits</span>
            </div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="text-white">{formatNumber(uniqueVisitors)}</span>
              <span className="text-gray-400">visitors</span>
            </div>
          </div>
        );

      case 'icon':
        return (
          <div className={`flex items-center gap-1 ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-white font-medium">{formatNumber(visitCount)}</span>
          </div>
        );

      default:
        return (
          <div className={`flex items-center gap-1 ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-white font-medium">{formatNumber(visitCount)}</span>
          </div>
        );
    }
  };

  return (
    <div className="inline-block">
      {renderCounter()}
    </div>
  );
};

export default VisitCounter;