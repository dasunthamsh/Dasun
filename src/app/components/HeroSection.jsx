import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="relative text-center  overflow-hidden min-h-screen">
            {/* Background Image on Right Side */}
            <div className="absolute inset-0 z-0">
                <div className="relative h-full w-full">
                    {/* Left empty space for content */}
                    <div className="absolute left-0 top-0 h-full w-1/2 bg-black z-10"></div>
                    
                    {/* Image on right half */}
                    <div className="absolute right-0 top-0 h-full w-1/2 opacity-50">
                        <Image
                            src="/images/me.png" // Change to your image path
                            alt="Dasun Thamash"
                            fill
                            className="object-cover grayscale brightness-75 contrast-110"
                            priority
                            sizes="50vw"
                        />
                        {/* Overlay to enhance contrast */}
                        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black/10 z-0"></div>
                    </div>
                </div>
            </div>

            {/* Content Container - positioned above image */}
            <div className="relative z-20 container mx-auto px-4">
                <h3 className="text-3xl text-yellow-600 mt-11 font-bold" style={{ fontFamily: 'fantasy' }}>
                    Hello, I'm
                </h3>

                <h1
                    id="scrollingText"
                    className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-400 via-pink-600 to-red-500 mt-11"
                    style={{ fontFamily: 'fantasy' }}
                >
                    DASUN THAMASH
                </h1>

                <p
                    id="about"
                    className="text-lg text-white mt-11 max-w-2xl mx-auto"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    I'm a creative Software Engineer from Sri Lanka,<br />
                    passionate about building innovative solutions and continuously<br />
                    improving my skills.
                </p>

                {/* Social Media Icons */}
                <div className="mt-11 flex justify-center space-x-6">
                    <a
                        href="https://twitter.com/DasunThamash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 bg-black/30 p-3 rounded-full backdrop-blur-sm"
                        aria-label="Twitter"
                    >
                        <FaTwitter size={40} />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=100028425432835"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-600 transition-colors duration-300 bg-black/30 p-3 rounded-full backdrop-blur-sm"
                        aria-label="Facebook"
                    >
                        <FaFacebookF size={40} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dasun-thamash-4a9614252/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-700 transition-colors duration-300 bg-black/30 p-3 rounded-full backdrop-blur-sm"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={40} />
                    </a>

                    <a
                        href="https://github.com/dasunthamsh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-100 transition-colors duration-300 bg-black/30 p-3 rounded-full backdrop-blur-sm"
                        aria-label="GitHub"
                    >
                        <FaGithub size={40} />
                    </a>
                </div>
            </div>

            {/* Available Now Indicator */}
            <div
                id="available-now"
                className="fixed bottom-5 left-5 flex items-center space-x-2 z-30 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full"
            >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white">Available Now</span>
            </div>
        </div>
    );
};

export default HeroSection;