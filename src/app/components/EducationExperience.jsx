// components/EducationExperience.jsx
import React, { useState } from 'react';

const EducationExperience = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const items = [

       {
      id: 1,
      number: "1",
      title: "Open Web Lab (Dubai)",
      description: "Working as a UI/UX Engineer",
      detailedDescription: "Currently working as a UI/UX Engineer. Responsible for designing intuitive user interfaces, improving user experiences, creating wireframes, interactive prototypes, design systems, and collaborating closely with developers to deliver modern, user-centered digital products.",
      period: "March 2026 - Present",
      type: "experience",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    {
      id: 1,
      number: "2",
      title: "AUS-ETECH (Australia)",
      description: "Work as Designer AND Developer",
      detailedDescription: "Graphic design–focused professional with a strong foundation in visualstorytelling, branding, and intuitive icon creation.",
      period: "Feb 2024 - Oct 2024",
      type: "experience",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    {
      id: 2,
      number: "3",
      title: "GZONE",
      description: "Work as Designer.",
      detailedDescription: "Graphic design–driven UI/UX designer who crafted a live streamingecosystem for gamers,.",
      period: "Feb 2025 - Apr 2025",
      type: "experience",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    {
      id: 3,
      number: "4",
      title: "(TOP UP) London Metropolitan University",
      description: "BEng (Hons) in Software Engineering (TOP UP) <br> London Metropolitan University (UK) (LMU-T-BENG-SE).",
      detailedDescription: "Top-up degree focusing on advanced software engineering principles, software architecture, and project management. Final year project involved developing a scalable microservices architecture.",
      period: "Feb 2025 - Feb 2026",
      type: "education",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    {
      id: 4,
      number: "5",
      title: "(HND) Institute of Software Engineering",
      description: "Bsc(Hons). in Computer Science IJSE",
      detailedDescription: "Higher National Diploma in Computer Science covering fundamentals of programming, data structures, algorithms, databases, and software development methodologies.",
      period: "Feb 2021 - Sep 2024",
      type: "education",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    // {
    //   id: 5,
    //   number: "5",
    //   title: "DSMP",
    //   description: "DESIGNING & DEVELOPMENT  MASTER PROGRAM.",
    //   detailedDescription: "Comprehensive full-stack development program covering frontend (React, Vue), backend (Node.js, Express), databases (MongoDB, PostgreSQL), and DevOps (Docker, CI/CD).",
    //   period: "Jan 2023 - Sep 2023",
    //   type: "education",
    //   aosAnimation: "zoom-out",
    //   aosDuration: "2000"
    // },
    // {
    //   id: 6,
    //   number: "6",
    //   title: "FSD ACADEMY",
    //   description: "DESIGNING MASTER",
    //   detailedDescription: "Advanced UI/UX design course covering user research, wireframing, prototyping, design systems, and usability testing using Figma and Adobe XD.",
    //   period: "Sep 2023 - Jan 2024",
    //   type: "education",
    //   aosAnimation: "zoom-out",
    //   aosDuration: "2000"
    // }
  ];

  const handleMouseEnter = (item, e) => {
    setHoveredItem(item);
    // Position the popup near the cursor
    setPopupPosition({
      x: e.clientX + 20,
      y: e.clientY + 20
    });
  };

  const handleMouseMove = (e) => {
    if (hoveredItem) {
      setPopupPosition({
        x: e.clientX + 20,
        y: e.clientY + 20
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className='bg-[#000000]'>
      {/* Header */}
      <div className="flex justify-center gap-5 text-5xl font-bold my-10 flex-wrap">
        <h1 
          data-aos="fade-right" 
          data-aos-duration="2000"
          className="text-center md:text-left  bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Education & Experience
        </h1>
      </div>

      {/* Timeline Items */}
      <div className="text-white p-8 flex justify-center">
        <div 
          className="space-y-8 max-w-3xl mx-auto relative" 
          style={{ fontFamily: "'Poppins', sans-serif" }}
          onMouseMove={handleMouseMove}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              data-aos={item.aosAnimation}
              data-aos-duration={item.aosDuration}
              className="relative"
            >
              <div 
                className="flex items-start group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-800/30 rounded-lg p-2 -mx-4"
                onMouseEnter={(e) => handleMouseEnter(item, e)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Number Circle */}
                <div className={`flex items-center justify-center w-10 h-10 text-md font-bold rounded-full flex-shrink-0 transition-all duration-300 ${
                  item.type === 'education' 
                    ? 'bg-[#171717]' 
                    : 'bg-[#171717]'
                }`}>
                  {item.number}
                </div>
                
                {/* Content */}
                <div className="ml-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-md font-semibold tracking-wider group-hover:text-blue-300 transition-colors duration-300">
                      {item.title}
                    </h2>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.type === 'education' 
                        ? 'bg-blue-900/50 text-blue-300' 
                        : 'bg-purple-900/50 text-purple-300'
                    }`}>
                      {item.type === 'education' ? 'Education' : 'Experience'}
                    </span>
                  </div>
                  <p 
                    className="text-sm text-gray-300 mt-1"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <h1 className="text-xs text-gray-400 mt-2">
                    {item.period}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>

          <div className='absolute -bottom-10 -right-10 opacity-20'>
          <img
            src="/images/back1.jpg"
            alt="Fashion Model"
            className="w-64 md:w-96 rounded-lg shadow-lg blur-xs"
          />

           {/* <img
            src="/images/backorange.png"
            alt="Fashion Model"
            className="w-full  blur-xs opacity-35"
          /> */}

        </div>

      </div>

      {/* Popup for detailed description */}
      {hoveredItem && (
        <div 
          className="fixed z-50 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg shadow-2xl p-4 max-w-xs pointer-events-none transition-all duration-200"
          style={{
            left: `${popupPosition.x}px`,
            top: `${popupPosition.y}px`,
            transform: 'translate(0, 0)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${hoveredItem.type === 'education' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
            <h3 className="text-sm font-semibold text-white">{hoveredItem.title}</h3>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            {hoveredItem.detailedDescription}
          </p>
          <div className="mt-2 pt-2 border-t border-gray-700">
            <span className="text-xs text-gray-400">{hoveredItem.period}</span>
          </div>
          {/* Arrow pointer */}
          <div className="absolute -top-2 left-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default EducationExperience;