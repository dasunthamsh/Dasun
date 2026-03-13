'use client'

import { useEffect, useState } from 'react';
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import EducationExperience from "./components/EducationExperience";
import ContactSection from "./components/ContactSection";
import LogoCarousel from "./components/BrandCarousel";
import Projects from "./components/Projects";
import Header from "./components/Header";
import ProjectsSlider from './components/ProjectsSlider';
import VlogsSection from './components/Blogs';
import VisitorCounter from './components/VisitorCounter'; // New component

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // This ensures sections have proper IDs for navigation
    const sections = [
      { id: 'home' },
      { id: 'about' },
      { id: 'projects' },
      { id: 'education' },
      { id: 'contact' },
    ];

    // Visitor counter logic
    const updateVisitorCount = () => {
      // Get existing count from localStorage
      let count = localStorage.getItem('visitorCount');
      
      // Check if this is a new session
      const hasVisited = sessionStorage.getItem('hasVisited');
      
      if (!hasVisited) {
        // New session - increment count
        if (count) {
          count = parseInt(count) + 1;
        } else {
          count = 1;
        }
        
        // Store the updated count
        localStorage.setItem('visitorCount', count.toString());
        sessionStorage.setItem('hasVisited', 'true');
      } else {
        // Returning session - just get the count
        count = count ? parseInt(count) : 0;
      }
      
      setVisitorCount(count);
    };

    updateVisitorCount();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#0A0A0A] overflow-hidden">
      <main className="w-full">
        {/* Visitor Counter - Floating element */}
        <div className="fixed bottom-4 right-4 z-50">
          <VisitorCounter count={visitorCount} />
        </div>

        <section className="z-20">
          <Header/>
        </section>
        
        {/* Hero Section */}
        <section id="home" className="relative z-10">
          <HeroSection/>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-20">
          <AboutSection/>
        </section>

        {/* Education & Experience */}
        <section id="education" className="mt-20 relative">
          <EducationExperience/>
        </section>

        <section>
          <VlogsSection/>
        </section>

        <section className="mt-20 relative">
          <LogoCarousel/>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20 relative">
          <Projects/>
        </section>

        <section className="mt-20 relative">
          <ProjectsSlider/>
        </section>
       
        {/* Contact */}
        <section id="contact" className="relative">
          <ContactSection/>
        </section>
      </main>
    </div>
  );
}