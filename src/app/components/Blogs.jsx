"use client";

import Image from "next/image";

const row1 = [
 
  { id: 5, image: "/images/post/p17.png" },
  { id: 11, image: "/images/post/p4.jpeg" },
  { id: 2, image: "/images/post/mx.png" },
  { id: 5, image: "/images/post/p16.png" },
  { id: 3, image: "/images/post/p19.png" },
  { id: 5, image: "/images/post/p18.png" },
  { id: 5, image: "/images/post/p21.png" },

  
];

const row2 = [
  { id: 7, image: "/images/post/p7.jpeg" },
  { id: 8, image: "/images/post/P13.png" },
  { id: 6, image: "/images/post/p6.jpeg" },
  { id: 12, image: "/images/post/p11.png" },
  { id: 10, image: "/images/post/p20.png" },
  { id: 1, image: "/images/post/p8.jpeg" },
  { id: 4, image: "/images/post/p9.png" },

];

function InfiniteRow({ items, direction }) {
  const gallery = [...items, ...items];

  return (
    <div className="gallery-wrapper">
      <div
        className={`gallery-track ${
          direction === "right"
            ? "gallery-move-right"
            : "gallery-move-left"
        }`}
      >
        {gallery.map((item, index) => (
          <div
            key={index}
            style={{
              width: item.width,
            }}
            className="rounded-2xl overflow-hidden flex-shrink-0 
           border border-white/10 
           h-[260px] sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[400px]"
          >
              <Image
              src={item.image}
              alt=""
              width={1200}
              height={900}
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-120"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DesignSection() {
  return (
    <section className=" py-20 overflow-hidden space-y-3 max-w-7xl mx-auto">
      <div className="mx-auto max-w-5xl text-center mb-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          My Design Work
        </h2>

        <p className="mt-4 text-gray-400">
          Explore my collection of graphic design projects and creative works
        </p>
      </div>

      {/* First Row */}
      <InfiniteRow items={row1} direction="left" />

      {/* Second Row */}
      <InfiniteRow items={row2} direction="right" />

      <div className="bg-[#000000] absolute blur-xl w-full h-44 -mt-16 left-0 right-0"></div>

      <button
  onClick={() => (window.location.href = "/Designs")}
  className="group relative left-1/2 -translate-x-1/2 rounded-lg p-[1px] overflow-hidden"
>
  {/* Animated border */}
  <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#fef3c7_360deg)]" />

  {/* Button content */}
  <span className="relative block rounded-[7px] bg-black px-3 py-1 text-amber-50">
    view all designs
  </span>
</button>
    </section>
  );
}