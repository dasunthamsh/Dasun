import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen w-full text-white flex items-center justify-center bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-600/20 via-transparent to-transparent z-10"></div>
        
        {/* Grid pattern */}
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, #383F49 1px, transparent 1px),
                             linear-gradient(to bottom, #383F49 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            backgroundPosition: 'center center',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className="relative h-full mx-auto text-center px-6 pt-24 w-[100%] sm:w-[60%] max-w-[1100px] z-20">
        {/* Your image */}
        <img
          src="/images/s.png"
          alt="Dasun Thamash"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover grayscale brightness-75 contrast-110 transition-all duration-500 z-10 
          sm:w-[250%] max-w-[1000px] w-[200%] h-auto"
          priority
        />

        {/* Orange blur effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-orange-500 blur-[350px] sm:w-86 sm:h-86 w-52 h-52 opacity-70"></div>

        {/* Name */}

        <h1 className="text-8xl  sm:text-9xl font-black tracking-tight sm:my-20 sm:pb-40 pb-80 z-50
          bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
          DASUN <br /> THAMASH.
        </h1>

        {/* Content container */} 
        <div className='z-20 absolute left-0 right-0'>
          <div className="max-w-3xl mx-auto">
            <p className="text-center font-nimbus m-4 ">
              I'm a creative Designer and Frontend Developer from Sri Lanka, passionate about building innovative solutions and continuously improving my skills.
            </p>
          </div>
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