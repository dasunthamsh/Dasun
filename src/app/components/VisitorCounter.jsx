'use client'

import Script from 'next/script';

export default function VisitorCounter() {
  return (
    <>
      <Script
        src="https://www.freevisitorcounters.com/auth.php?id=c63ab11cc15f7c9ac4e2482bf9708e48598bbdf4"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.freevisitorcounters.com/en/home/counter/1517508/t/3"
        strategy="afterInteractive"
      />
      
      <div className="fixed bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm z-50 text-sm flex items-center gap-2">
        <a 
          href='http://www.freevisitorcounters.com' 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          Visitors:
        </a>
        <div id="visitor-counter" className="font-mono"></div>
      </div>
    </>
  );
}