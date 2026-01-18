'use client';

import React from 'react';

const images = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
  '/images/7.png',
  '/images/8.png',
  '/images/9.png',
  '/images/10.png',
  '/images/11.png',
  '/images/12.png',
  '/images/13.png',
  '/images/14.png',
  '/images/15.png',
  '/images/16.png',
];

// Split images into groups of 3
const columns = [
  images.slice(0, 3),   // 1,2,3
  images.slice(3, 6),   // 4,5,6
  images.slice(6, 9),   // 7,8,9
  images.slice(9, 12),  // 10,11,12
];

const Column = ({ images, direction, offset = 0 }) => {
  return (
    <div className="relative h-screen  overflow-hidden ">
      <div
        className={`flex flex-col gap-1 md:gap-3 animate-vertical-${direction}`}
        style={{ animationDelay: `${offset}s` }}
      >
        {/* duplicate for seamless loop */}
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Project"
            className="rounded-lg shadow-lg opacity-40"
          />
        ))}
      </div>
    </div>
  );
};

const ProjectsSlider = () => {
  return (
    <div
      id="contact"
      className="flex w-full w-full overflow-hidden"
      
    >
      <section className="w-1/3 md:1/4 p-1 md:p-3">
        <Column images={columns[0]} direction="up" offset={0} />
      </section>

      <section className="w-1/3 md:1/4 p-1 md:p-3">
        <Column images={columns[1]} direction="down" offset={-5} />
      </section>

      <section className="w-1/3 md:1/4 p-1 md:p-3">
        <Column images={columns[2]} direction="up" offset={-10} />
      </section>

      <section className="w-1/3 md:1/4 p-1 md:p-3 hidden md:inline">
        <Column images={columns[3]} direction="down" offset={-15} />
      </section>
    </div>
  );
};

export default ProjectsSlider;
