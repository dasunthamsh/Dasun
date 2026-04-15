'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Projects = () => {
  const router = useRouter();
  
  const items = [
    { 
      id: 1, 
      content: "Nike shoe", 
      bgColor: "bg-pink-100",
      imageSrc: "/images/shoe.png",
      description: ["A modern website designed for a shoe company to showcase products, highlight collections, and provide a smooth online browsing experience for customers."],
      url: "/Projects/Shoe"
    },
    { 
      id: 6, 
      content: "NFT", 
      bgColor: "bg-yellow-100",
      imageSrc: "/images/nft.png",
      description: ["A modern website built to showcase and promote NFT collections with a clean design and engaging user experience."],
      url: "/Projects/NFT"
    },
    { 
      id: 2, 
      content: "Ride Share App", 
      bgColor: "bg-blue-100",
      imageSrc: "/images/helloride.png",
      description: ["A ride-sharing application that connects passengers with drivers, making transportation quick, convenient, and easy to access."],
      url: "/Projects/HelloRide"
    },
    { 
      id: 4, 
      content: "Game Streaming", 
      bgColor: "bg-indigo-100",
      imageSrc: "/images/gz.png",
      description: ["A gaming streaming website designed to showcase live streams, gaming content, and provide an engaging platform for gamers and viewers."],
      url: "/projects/game-project"
    },
    { 
      id: 5, 
      content: "Petpal", 
      bgColor: "bg-purple-100",
      imageSrc: "/images/petpal.png",
      description: ["A mobile application designed to help users manage pet care, track activities, and access useful information for pet owners."],
      url: "/Projects/PetPal"
    },
    { 
      id: 3, 
      content: "Task App", 
      bgColor: "bg-green-100",
      imageSrc: "/images/task.png",
      description: ["An app that allows users to post jobs and connect with others to complete tasks quickly and efficiently."],
      url: "/Projects/Task"
    },
    { 
      id: 7, 
      content: "Fixer App", 
      bgColor: "bg-indigo-100",
      imageSrc: "/images/fix.png",
      description: ["A web platform where users can post jobs and find people to complete tasks quickly and efficiently."],
      url: "/projects/fixer-app"
    },
    { 
      id: 8, 
      content: "Coming soon", 
      bgColor: "",
      imageSrc: "",
      description: ["An e-commerce website for an electronics store, showcasing products and enabling smooth online shopping."],
      url: ""
    },
  ];

  // Function to handle project click
  const handleProjectClick = (url) => {
    if (url && url !== "") {
      router.push(url);
    }
  };

  return (
    <div className="min-h-screen text-white py-20 px-6 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Turning Ideas into Products
          </h2>
          <p className="mt-4 text-gray-400">
            A collection of projects that showcase my skills. Each project represents a journey of learning and innovation.
          </p>
        </div>

        {/* Projects Grid - 4 columns on desktop */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => {
            const isClickable = item.url && item.url !== "";
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <div
                key={item.id}
                onClick={() => isClickable && handleProjectClick(item.url)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  isClickable 
                    ? 'cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]' 
                    : 'cursor-default opacity-75'
                }`}
              >
                {/* Image Container */}
                <div className="overflow-hidden aspect-[3/4] relative">
                  {item.imageSrc ? (
                    <>
                      <img
                        src={item.imageSrc}
                        alt={item.content}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Content Overlay - Always visible at top left */}
                      <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
                        <h3 className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full inline">
                          {item.content}
                        </h3>
                      </div>

                      {/* Hover Popup - Shows description */}
                      {isHovered && item.description && item.description[0] && (
                        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-[90%] transform transition-all duration-300 scale-100 opacity-100">
                            <p className="text-white text-sm text-center">
                              {item.description[0]}
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10">
                      <span className="text-gray-400 text-lg">Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;