import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen w-full text-white flex items-center justify-center 
bg-gradient-to-b from-[#DF8645] via-[#9D5E2D] via-[#563117] to-[#000000]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10"></div>
        
        {/* Grid pattern */}
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, #383F49 0.5px, transparent 0.5px),
                             linear-gradient(to bottom, #383F49 0.5px, transparent 0.5px)`,
            backgroundSize: '50px 50px',
            backgroundPosition: 'center center',
            maskImage: 'radial-gradient(circle at center, black %, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 4%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className="relative h-full mx-auto text-center px-6 pt-24 w-[100%] sm:w-[60%] max-w-[1100px] z-20">
        {/* Your image */}
        <img
          src="/images/das.png"
          alt="Dasun Thamash"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover transition-all duration-500 z-10 
          sm:w-[250%] max-w-[1120px] w-[300%] h-auto"
          priority
        />

        {/* Content container - moved to left and bottom */}
        <div className='absolute bottom-32 sm:bottom-56 left-0 z-20 text-left'>
          <div className="max-w-md pl-8">
            <p className="font-nimbus text-lg leading-relaxed">
              I'm a creative Designer and Frontend Developer from Sri Lanka, passionate about building innovative solutions and continuously improving my skills.
            </p>
          </div>
        </div>
        
        {/* "Dasun" text at bottom center - moved forward with larger font */}
        <div className="fixed sm:-bottom-17 -bottom-6 left-0 right-0 flex justify-center z-30">
          <span 
            className="text-white font-extrabold tracking-normal"
            style={{ 
              fontFamily: "'Inter Display', sans-serif",
              fontSize: 'clamp(8rem, 18vw, 18rem)',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              whiteSpace: 'nowrap'
            }}
          >
            Dasun
          </span>
        </div>

        {/* Available Now indicator */}
        <div
          id="available-now"
          className="fixed bottom-5 left-5 flex items-center space-x-2 z-30 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white">Available Now</span>
        </div>
      </div>
    </main>
  );
}