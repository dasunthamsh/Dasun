// components/ScrollingImageOverlay.js
'use client';

import { useEffect, useRef } from 'react';

const ScrollingImageOverlay = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const text = textRef.current;
            const image = imageRef.current;

            if (text && image) {
                // Text transformations
                const textTranslateY = Math.min(scrollY * 0.5, 100);
                const textScale = Math.max(1 - scrollY * 0.002, 0.5);
                const textOpacity = Math.max(1 - scrollY * 0.005, 0);

                text.style.transform = `translateY(${textTranslateY}px) scale(${textScale})`;
                text.style.opacity = textOpacity;

                // Image transformation
                const imageTranslateY = Math.max(-scrollY * 0.2, -200);
                image.style.transform = `translateY(${imageTranslateY}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-[200vh] bg-black text-white overflow-x-hidden">
            <div className="mx-5">
                {/* Hero section */}
                <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
                    <h1
                        ref={textRef}
                        className="absolute top-1/3 text-6xl font-bold transition-transform duration-300 ease-out"
                    >
                        MORE ABOUT <br /> DASUN©
                    </h1>

                    <div
                        ref={imageRef}
                        className="absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-out"
                    >
                        <img
                            src="/images/about.png" // Update this path to your actual image location
                            alt="Fashion Model"
                            className="w-96 rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Description section */}
                <div className="mt-20">
                    <p className="text-center font-nimbus text-gray-500 font-light">
                        I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may<br /> be unconventional, my dedication to the craft is unparalleled. I thrive on finding "unexpected solutions" and believe <br /> that with the right perspective, design can elevate the human experience.
                    </p>
                </div>

                {/* Skills section */}
                <div className="text-center m-5 font-nimbus">
                    <h3 className="font-bold text-xl mb-5">What I do</h3>
                    <div className="flex flex-col justify-center m-5 space-y-2">
                        <h5>UI/UX design</h5>
                        <h5>Frontend development</h5>
                        <h5>Graphic design</h5>
                    </div>
                </div>

                {/* Resume download button */}
                <div className="flex justify-center m-10">
                    <a href="/resume.pdf" download="Dasun_Resume.pdf">
                        <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full border-2 border-white transition-colors duration-300">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ScrollingImageOverlay;
