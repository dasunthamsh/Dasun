// components/EducationExperience.jsx
import React from 'react';

const EducationExperience = () => {
  const items = [
    {
      id: 1,
      number: "1",
      title: "AUS-ETECH (Australia)",
      description: "Work as intern software engineer.",
      period: "Feb 2024 - Oct 2024",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    {
      id: 2,
      number: "2",
      title: "GZONE",
      description: "Work as UI UX engineer.",
      period: "Feb 2025 - Apr 2025",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
       {
      id: 3,
      number: "3",
      title: "(TOP UP) London Metropolitan University",
      description: "BEng (Hons) in Software Engineering (TOP UP) <br> London Metropolitan University (UK) (LMU-T-BENG-SE).",
      period: "Feb 2025 - Feb 2026",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    {
      id: 4,
      number: "4",
      title: "(HND) Institute of Software Engineering",
      description: "Bsc(Hons). in Computer Science IJSE - Institute of Software Engineering",
      period: "Feb 2021 - Sep 2024",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    {
      id: 5,
      number: "5",
      title: "DSMP",
      description: "Fullstack Master Program Developer stack.",
      period: "Jan 2023 - Sep 2023",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    },
    {
      id: 6,
      number: "6",
      title: "FSD ACADEMY",
      description: "Master UI/UX Designing Course",
      period: "Sep 2023 - Jan 2024",
      aosAnimation: "zoom-out",
      aosDuration: "2000"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-center gap-5 text-4xl font-bold my-20 text-yellow-500 flex-wrap">
        <h1 
          data-aos="fade-right" 
          data-aos-duration="2000"
          className="text-center md:text-left"
        >
          Education
        </h1>
        <h1 className="items-center hidden md:block">&</h1>
        <h1 
          data-aos="fade-left" 
          data-aos-duration="2000"
          className="text-center md:text-end"
        >
          Experience
        </h1>
      </div>

      {/* Timeline Items */}
      <div className="text-white p-8 flex justify-center">
        <div className="space-y-8 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {items.map((item) => (
            <div 
              key={item.id}
              data-aos={item.aosAnimation}
              data-aos-duration={item.aosDuration}
              className="flex items-start"
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center w-10 h-10 text-lg font-bold bg-gray-800 rounded-full flex-shrink-0">
                {item.number}
              </div>
              
              {/* Content */}
              <div className="ml-4">
                <h2 className="text-lg font-semibold tracking-wider">
                  {item.title}
                </h2>
                <p 
                  className="text-sm text-gray-300 mt-1"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <h1 className="text-xs text-gray-400 mt-2">
                  {item.period}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;