'use client'
import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailAddress = "dasunthamash166@gmail.com";
  const whatsappNumber = "0784369667"; // Sri Lanka format with country code

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div 
      id="contact"
      className="text-white text-center justify-center content-center min-h-screen flex flex-col items-center px-4 "
    >

      <div className='backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-xl p-8 md:p-24 relative'>
        <h1 className="text-4xl md:text-9xl font-semibold mb-8 md:mb-12">
          HAVE AN IDEA?
        </h1>
        
        <div className="mb-6">
          <h3 className="text-lg md:text-xl mb-2 opacity-90">
            Drop me an email:
          </h3>
          
          <div className="relative inline-flex items-center group">
            <h3 
              onClick={handleEmailClick}
              className="text-xl md:text-2xl hover:text-yellow-400 transition-colors duration-300 cursor-pointer select-all"
            >
              {emailAddress}
            </h3>
            
            {/* Copy button */}
            <button
              onClick={handleCopyEmail}
              className="ml-3 text-sm md:text-base bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              title="Copy email"
            >
              {emailCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          
          {emailCopied && (
            <div className="mt-2 text-green-400 text-sm animate-fade-in">
              ✓ Email copied to clipboard!
            </div>
          )}
        </div>

        <div className='absolute -bottom-10 -right-10 opacity-20'>
          <img
            src="/images/shp.png"
            alt="Fashion Model"
            className="w-64 md:w-96 rounded-lg shadow-lg blur-xs"
          />
        </div>

        <div className='justify-center content-center flex flex-col items-center mt-8'>

          {/* Social Links with Icons */}
         <div className="mt-8 flex space-x-6">
  {/* GitHub */}
  <a 
    href="https://github.com/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
    title="GitHub"
  >
    <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
  </a>
  
  {/* LinkedIn */}
  <a 
    href="https://linkedin.com/in/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
    title="LinkedIn"
  >
    <FaLinkedinIn className="w-6 h-6 md:w-7 md:h-7" />
  </a>
  
  {/* Facebook */}
  <a 
    href="https://facebook.com/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
    title="Facebook"
  >
    <FaFacebookF className="w-6 h-6 md:w-7 md:h-7" />
  </a>
  
  {/* WhatsApp */}
  <button
    onClick={handleWhatsAppClick}
    className="text-gray-400 hover:text-white transition-colors duration-300"
    title="WhatsApp"
  >
    <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
  </button>
</div>
        </div>
      </div>

      <div className='pt-14 z-10 mt-8'>
        <h6 className="text-gray-400 text-sm">Thanks for looking. Stay in touch.</h6>
      </div>

    </div>
  );
};

export default ContactSection;