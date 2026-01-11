// components/Header.jsx (or wherever your ModernHeader is)
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'about', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href, id) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Don't render during SSR or until mounted
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-1/3 py-5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <div className="bg-black/80 backdrop-blur-xl rounded-full shadow-2xl px-4 py-2">
    <div className="flex items-center gap-6">
            
            {/* Logo */}
            <Link 
              href="#home" 
              className="flex items-center space-x-2 group"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home', 'home');
              }}
            >
            
              <div className="hidden md:block">
                
                <div className="">
                    <img
                            src="/images/me.png"
                            alt="Fashion Model"
                            className=" w-10 h-10 rounded-full object-cover shadow-lg"
                        />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className="relative group"
                >
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
              
              {/* CTA Button */}
              <button
                onClick={() => handleNavClick('#contact', 'contact')}
                className="relative overflow-hidden group px-6 py-2.5 rounded-full bg-white transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-black hover:text-white font-medium text-sm">Get in Touch</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10  transition-opacity duration-300"></div>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-black via-black/95 to-black/90 border-l border-white/10 shadow-2xl">
            <div className="p-8 h-full flex flex-col">
              
              {/* Close Button */}
              <div className="flex justify-end mb-12">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-6 flex-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    className="flex items-center justify-between w-full group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 scale-125' 
                          : 'bg-gray-600 group-hover:bg-gray-500'
                      }`}></div>
                      <span className={`text-lg font-medium transition-colors duration-300 ${
                        activeSection === item.id 
                          ? 'text-white' 
                          : 'text-gray-400 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transform rotate-90 transition-transform duration-300 ${
                      activeSection === item.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-8 border-t border-white/10">
                <button
                  onClick={() => handleNavClick('#contact', 'contact')}
                  className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-white font-medium"
                >
                  Contact Me
                </button>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-6 mt-8">
                  <a href="https://twitter.com/DasunThamash" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="text-sm">Twitter</span>
                  </a>
                  <a href="https://www.linkedin.com/in/dasun-thamash-4a9614252/" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a href="https://github.com/dasunthamsh" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-40">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300"
          style={{
            width: `${(activeSection === 'home' ? 0 : 
                     activeSection === 'projects' ? 25 : 
                     activeSection === 'about' ? 50 : 
                     activeSection === 'education' ? 75 : 100)}%`
          }}
        ></div>
      </div>
    </>
  );
};

export default Header;