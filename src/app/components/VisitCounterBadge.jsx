'use client'

import { useEffect, useState } from 'react';

const VisitCounterBadge = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    try {
      const storedVisits = localStorage.getItem('siteVisits');
      const storedUnique = localStorage.getItem('uniqueVisitors');
      
      setVisitCount(storedVisits ? parseInt(storedVisits) : 0);
      setUniqueVisitors(storedUnique ? parseInt(storedUnique) : 0);
    } catch (error) {
      console.error('Error reading visit count:', error);
    }
  }, []);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className=" text-white rounded-lg shadow-lg p-3 flex flex-col gap-1 text-sm">
        <div className="flex items-center justify-between gap-4">
         
          
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
          
            <span className="font-bold">{formatNumber(visitCount)}</span>
            <span className="text-xs opacity-90">visits</span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-1">
           
            <span className="font-bold">{formatNumber(uniqueVisitors)}</span>
            <span className="text-xs opacity-90">visitors</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitCounterBadge;