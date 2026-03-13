'use client'

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const updateCounter = async () => {
      try {
        const res = await fetch(
          "https://api.countapi.xyz/hit/dasun-blue-portfolio/visits"
        );
        const data = await res.json();
        setVisits(data.value);
      } catch (error) {
        console.error("Counter error:", error);
      }
    };

    updateCounter();
  }, []);

  return (
    <div className="text-center text-gray-400 text-sm mt-6">
      👁 Visitors: {visits ? visits : "Loading..."}
    </div>
  );
}