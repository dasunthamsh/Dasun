'use client';

import React from 'react';
import Link from 'next/link';

const designs = [
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
    image: '/images/post/P13.png',
  },
   {
    id: 8,
    image: '/images/post/P14.png',
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
    image: '/images/post/p11.png',
  }
];

const DesignSection = () => {
  return (
    <section id="designs" className="w-full px-6 py-20 text-white bg-[#0A0A0A]">
      {/* Header */}
      

        <div className="mx-auto max-w-5xl text-center mb-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
         My Design Work
        </h2>
        <p className="mt-4 text-gray-400">
         Explore my collection of graphic design projects and creative works
        </p>
      </div>

      {/* Designs Grid - 4 columns, 2 rows */}


    
     
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        {designs.map((design) => (
          <Link href="/Designs" key={design.id}>
            <div className="group cursor-pointer">
              <article className="overflow-hidden rounded-2xl bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Image with increased height */}
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={design.image}
                    alt="Design work"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </article>
            </div>
          </Link>
        ))}
      </div>

     <div className='flex justify-center pt-20'>
  <Link href="/Designs">
    <button className='group relative px-8 py-3 overflow-hidden rounded-full bg-amber-50 opacity-50 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out'>
      <span className='relative z-10 text-black'>View All</span>
      <div className='absolute inset-0 '></div>
    </button>
  </Link>
</div>

      {/* View All Button */}
      {/* <div className="mt-12 text-center">
        <Link
          href="/designs"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-white font-semibold transition-transform hover:scale-105"
        >
          View All Designs
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div> */}
    </section>
  );
};

export default DesignSection;