// components/ScrollingImageOverlay.js (Ultra minimal gap version)
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollingImageOverlay = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Faster animations with shorter distance
            gsap.to(textRef.current, {
                y: 80,
                scale: 0.6,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300",
                    scrub: 1,
                }
            });

            gsap.to(imageRef.current, {
                y: -150,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300",
                    scrub: 1,
                }
            });

            // Content appears immediately
            gsap.fromTo(contentRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 95%",
                        end: "top 70%",
                        scrub: 1,
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-black text-white overflow-x-hidden" ref={containerRef}>
            <div className="mx-5">
                {/* Compact hero section */}
                <div className="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden">
                    <h1 ref={textRef} className="absolute top-10 text-6xl font-bold">
                        MORE ABOUT <br /> DASUN©
                    </h1>
                    <div ref={imageRef} className="absolute top-1/2 transform -translate-y-1/2">
                        <img
                            src="/images/about.png"
                            alt="Fashion Model"
                            className="w-96 rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Content with virtually no gap */}
                <div ref={contentRef} className="relative bottom-50">
                    <div className="mb-6">
                        <p className="text-center font-nimbus text-gray-500 font-light">
                            I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may<br /> be unconventional, my dedication to the craft is unparalleled. I thrive on finding "unexpected solutions" and believe <br /> that with the right perspective, design can elevate the human experience.
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
