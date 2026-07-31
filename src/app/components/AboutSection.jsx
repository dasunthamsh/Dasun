// components/ScrollingImageOverlay.js (Fixed version)
'use client';

import { useEffect, useRef } from 'react';
        

const ScrollingImageOverlay = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const contentRef = useRef(null);


    return (
        <div className="text-white overflow-x-hidden bg-[#000000]" ref={containerRef}>
            <div className="mx-5">
                {/* Title at the top */}
                <div className="pt-12 pb-8 text-center">
                    <h1 ref={textRef} className="text-5xl font-extrabold">
                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        MORE ABOUT
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        DASUN©
                    </span>
                </h1>
                </div>

                {/* Hero section with image */}
              <div className="flex justify-center items-center">
            <div ref={imageRef} className="mt-8 flex justify-center">
                <img
                src="/images/me.png"
                alt="Fashion Model"
                className="sm:w-1/3 w-2xl rounded-lg shadow-lg"
                />
            </div>
         </div>


                {/* Content with virtually no gap */}
                <div className="pt-2">
                    <div className="mb-6">
                        <p className="text-center font-nimbus text-gray-500 text-lg mt-5">
                            As a designer and passionate frontend developer, I am committed to
                            creating innovative solutions and exploring emerging <br />technologies. With my
                            hardworking nature and strong work ethic, I am dedicated to delivering<br /> highquality work on time.
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

                   <div className='flex justify-center flex-wrap gap-8'>

    <a href="https://discord.com/dasun_thamash" target="_blank" rel="noopener noreferrer">
        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
            <img
                src="/images/accounts/discord.png"
                alt="Discord"
                className="w-8 rounded-lg shadow-lg"
            />
        </div>
    </a>

    <a href="https://t.me/Dasun_thamash" target="_blank" rel="noopener noreferrer">
        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
            <img
                src="/images/accounts/telegram.png"
                alt="Telegram"
                className="w-9 rounded-lg shadow-lg"
            />
        </div>
    </a>

    <a href="https://github.com/dasunthamsh" target="_blank" rel="noopener noreferrer">
        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
            <img
                src="/images/accounts/github.png"
                alt="GitHub"
                className="w-12 rounded-lg shadow-lg"
            />
        </div>
    </a>

    <a href="https://www.linkedin.com/in/dasun-thamash-4a9614252/" target="_blank" rel="noopener noreferrer">
        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
            <img
                src="/images/accounts/linkedin.png"
                alt="LinkedIn"
                className="w-10 rounded-lg shadow-lg"
            />
        </div>
    </a>

    <a href="https://www.instagram.com/dasun_thamash/?hl=en" target="_blank" rel="noopener noreferrer">
        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
            <img
                src="/images/accounts/instagram.png"
                alt="Instagram"
                className="w-10 rounded-lg shadow-lg"
            />
        </div>
    </a>

    <a href="https://www.behance.net/dasunthamash" target="_blank" rel="noopener noreferrer">
        <div className='w-14 h-14 bg-[#171717] flex justify-center items-center m-2 rounded-lg'>
            <img
                src="/images/accounts/behance.png"
                alt="Behance"
                className="w-8 rounded-lg shadow-lg"
            />
        </div>
    </a>

</div>

                       
                        


                    <div className="flex justify-center m-10">
                        <a href="/images/Dasun Thamash CV.pdf" download="Dasun_Resume.pdf">
                            <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-lg border-1 border-white transition-colors duration-300">
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