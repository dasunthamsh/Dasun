// components/ScrollingImageOverlay.js (Fixed version)
'use client';

import { useEffect, useRef } from 'react';


const ScrollingImageOverlay = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const contentRef = useRef(null);


    return (
        <div className=" text-white overflow-x-hidden" ref={containerRef}>
            <div className="mx-5">
                {/* Title at the top */}
                <div className="pt-12 pb-8 text-center">
                    <h1 ref={textRef} className="text-5xl font-bold ">
                        MORE ABOUT <br /> DASUN©
                    </h1>
                </div>

                {/* Hero section with image */}
                <div className="relative flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
                    <div ref={imageRef} className="mt-8">
                        <img
                            src="/images/me.png"
                            alt="Fashion Model"
                            className="w-2xl rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Content with virtually no gap */}
                <div className="pt-2">
                    <div className="mb-6">
                        <p className="text-center font-nimbus text-gray-500 text-lg mt-5">
                            I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. 
                            Though my methods may<br /> be unconventional, my dedication to the craft is unparalleled. 
                            I thrive on finding "unexpected solutions" and believe<br /> that with the right perspective, 
                            design can elevate the human experience.
                        </p>
                    </div>

               <div className="text-center m-5 font-nimbus">
                        <h3 className="font-bold text-xl mb-5">What I do</h3>
                        <div className="flex flex-col justify-center m-5 space-y-2">
                            <h5>UI/UX design</h5>
                            <h5>Frontend development</h5>
                            <h5>Graphic design</h5>
                        </div>
                    </div>

                    <div className='flex justify-center gap-8'>
                        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
                             <img
                            src="/images/react.png"
                            alt="Fashion Model"
                            className="w-8 rounded-lg shadow-lg"
                        />
                        </div>
                        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
                             <img
                            src="/images/next.png"
                            alt="Fashion Model"
                            className="w-9 rounded-lg shadow-lg"
                        />
                        </div>
                         <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
                             <img
                            src="/images/framer.png"
                            alt="Fashion Model"
                            className="w-12 rounded-lg shadow-lg"
                        />
                        </div>
                         <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
                             <img
                            src="/images/webflo.png"
                            alt="Fashion Model"
                            className="w-10 rounded-lg shadow-lg"
                        />
                        </div>
                         <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
                             <img
                            src="/images/ps.png"
                            alt="Fashion Model"
                            className="w-10 rounded-lg shadow-lg"
                        />
                        </div>
                        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
                             <img
                            src="/images/figma.png"
                            alt="Fashion Model"
                            className="w-8 rounded-lg shadow-lg"
                        />
                        </div>
                        
                    </div>

                       
                        


                    <div className="flex justify-center m-10">
                        <a href="/resume.pdf" download="Dasun_Resume.pdf">
                            <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full border-2 border-white transition-colors duration-300">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollingImageOverlay;