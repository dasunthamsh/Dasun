// app/page.tsx  (or wherever you want this hero section)

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen w-full bg-black text-white flex items-center justify-center ">
     <div className="relative h-full mx-auto text-center px-6 pt-24 w-[100%] sm:w-[60%] max-w-[1100px]">



             <img
  src="/images/s.png"
  alt="Dasun Thamash"
  className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover grayscale brightness-75 contrast-110  transition-all duration-500 z-10 
    sm:w-[100%]  w-[250%]  /* 80% width on mobile, auto on larger screens */
    max-w-[2000px]  /* Max width on mobile */
    h-auto"
  priority
/>

            

       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-orange-500 blur-[350px] w-86 h-86 opacity-70"></div>


        
        {/* Small hello */}
        {/* <div className="text-orange-500 font-medium tracking-widest text-xl md:text-2xl">
          Hello
        </div> */}

        {/* Main name - big & bold */}
         
            <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-orange-600 my-20  ">
                DASUN <br /> THAMASH
        
            </h1>


    
        {/* Description */}

        <div className='z-20 absolute left-0 right-0 '>
        <div className="max-w-3xl mx-auto ">
          <p className="text-center font-nimbus m-4 ">
          I'm a creative UI/UX Designer and Frontend Developer from Sri Lanka, passionate about building innovative solutions and continuously improving my skills.
          </p>
        </div>

        {/* Social icons */}
        {/* <div className="flex justify-center gap-8 md:gap-12 pt-6 md:pt-10"> */}
          {/* GitHub */}
          {/* <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg className="w-9 h-9 md:w-11 md:h-11" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a> */}

          {/* WhatsApp / Phone */}
          {/* <a
            href="https://wa.me/947XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <svg className="w-9 h-9 md:w-11 md:h-11" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a> */}

          {/* Facebook */}
          {/* <a
            href="https://facebook.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg className="w-9 h-9 md:w-11 md:h-11" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a> */}

          {/* LinkedIn */}
          {/* <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-9 h-9 md:w-11 md:h-11" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.058-1.867-3.058-1.867 0-2.152 1.459-2.152 2.966v5.696h-3v-11h2.882v1.509h.039c.401-.757 1.381-1.557 2.837-1.557 3.033 0 3.597 1.997 3.597 4.597v6.451z"/>
            </svg>
          </a>
        </div> */}
</div>
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