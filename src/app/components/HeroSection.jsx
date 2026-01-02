import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className="text-center mt-24 overflow-hidden">
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
                className="text-lg text-white mt-11"
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
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    aria-label="Twitter"
                >
                    <FaTwitter size={40} />
                </a>

                <a
                    href="https://www.facebook.com/profile.php?id=100028425432835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-600 transition-colors duration-300"
                    aria-label="Facebook"
                >
                    <FaFacebookF size={40} />
                </a>

                <a
                    href="https://www.linkedin.com/in/dasun-thamash-4a9614252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-700 transition-colors duration-300"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn size={40} />
                </a>

                <a
                    href="https://github.com/dasunthamsh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
                    aria-label="GitHub"
                >
                    <FaGithub size={40} />
                </a>
            </div>

            {/* Available Now Indicator */}
            <div
                id="available-now"
                className="fixed bottom-5 left-5 flex items-center space-x-2"
            >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white">Available Now</span>
            </div>
        </div>
    );
};

export default HeroSection;
