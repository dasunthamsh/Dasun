'use client'
import React, { useState } from 'react';

const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailAddress = "dasunthamash166@gmail.com";

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

  return (
    <div 
      id="contact"
      className="text-white text-center justify-center content-center min-h-screen flex flex-col items-center px-4"
    >
      <h1 className="text-4xl md:text-9xl font-semibold mb-8 md:mb-12">
        HAVE AN IDEA?
      </h1>
      
      <div className="mb-6">
        <h3 className="text-lg md:text-xl mb-2 opacity-90">
          Drop me an email:
        </h3>
        
        <div className="relative inline-block">
          <h3 
            onClick={handleEmailClick}
            className="text-xl md:text-2xl hover:text-yellow-400 transition-colors duration-300 cursor-pointer select-all"
          >
            {emailAddress}
          </h3>
          
          {/* Copy button */}
          <button
            onClick={handleCopyEmail}
            className="ml-3 text-sm md:text-base bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
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

      {/* Optional: Social Links */}
      <div className="mt-8 flex space-x-6">
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a 
          href="https://twitter.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default ContactSection;