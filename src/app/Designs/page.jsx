// app/designs/page.jsx or pages/designs.js
'use client';

import React from 'react';
import Link from 'next/link';

const allDesigns = [
{
    id: 1,  
    image: '/images/post/p8.jpeg',
  },
  {
    id: 2,
    image: '/images/post/p10.png',
  },
  {
    id: 3,
    image: '/images/post/p5.jpeg',
  },
   {
    id: 8,
    image: '/images/post/p21.png',
  },
  {
    id: 4,
    image: '/images/post/p9.png',
  },
  {
    id: 5,
    image: '/images/post/p3.jpeg',
  },
  {
    id: 6,
    image: '/images/post/p6.jpeg',
  },
  {
    id: 7,
    image: '/images/post/p7.jpeg',
  },
  {
    id: 8,
    image: '/images/post/p17.png',
  },
  {
    id: 8,
    image: '/images/post/p1.jpeg',
  },
   {
    id: 8,
    image: '/images/post/p4.jpeg',
  },
   {
    id: 8,
    image: '/images/post/p20.png',
  },
   {
    id: 8,
    image: '/images/post/p11.png',
  },
   {
    id: 8,
    image: '/images/post/p19.png',
  },
   {
    id: 8,
    image: '/images/post/p16.png',
  },
   {
    id: 8,
    image: '/images/post/d2.jpeg',
  },
   {
    id: 8,
    image: '/images/post/p12.jpg',
  },
   {
    id: 8,
    image: '/images/post/p13.png',
  },
   {
    id: 8,
    image: '/images/post/p14.png',
  },
  {
    id: 8,
    image: '/images/post/p18.png',
  }

];

const DesignsPage = () => {
  return (
    <main className="min-h-screen  text-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
    


         <div className="mx-auto max-w-5xl text-center mb-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
         All Designs
        </h2>
        <p className="mt-4 text-gray-400">
         Explore my collection of graphic design projects and creative works
        </p>
      </div>

        {/* Designs Grid - 4 columns with taller images */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-gray-800 rounded-2xl border border-white/10  overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="overflow-hidden aspect-[3/4] ">
                <img
                  src={design.image}
                  alt="Design work"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/#designs"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DesignsPage;