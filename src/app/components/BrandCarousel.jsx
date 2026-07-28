// app/logos/page.jsx or pages/logos.js
'use client';

import React from 'react';
import Link from 'next/link';

const allLogos = [
  {
    id: 1,
    image: '/images/post/l1.png',
  },
  {
    id: 2,
    image: '/images/post/l2.png',
  },
  {
    id: 3,
    image: '/images/post/l3.png',
  },
  {
    id: 4,
    image: '/images/post/i4.png',
  },
  {
    id: 5,
    image: '/images/post/l5.png',
  },
  {
    id: 6,
    image: '/images/post/l6.png',
  },
  {
    id: 7,
    image: '/images/post/l7.png',
  },
  {
    id: 8,
    image: '/images/post/l8.png',
  }
];

const LogosPage = () => {
  return (
    <main className=" text-white py-20 px-6 bg-[#000000]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold  mb-4">
             Logos
          </h1>
          <p className="text-gray-300">
            Complete collection of my logo designs and brand identity work
          </p>
        </div>

        {/* Logos Grid - 4 columns with square images */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allLogos.map((logo) => (
            <div
              key={logo.id}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-xl overflow-hidden "
            >
              <div className="overflow-hidden flex justify-center items-center aspect-square h-44 m-auto">
                <img
                  src={logo.image}
                  alt="Logo design"
                  className="w-32 h-32 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
    
      </div>
    </main>
  );
};

export default LogosPage;