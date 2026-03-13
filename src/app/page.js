'use client'

import { useEffect } from 'react';
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import EducationExperience from "./components/EducationExperience";
import ContactSection from "./components/ContactSection";
import LogoCarousel from "./components/BrandCarousel";
import Projects from "./components/Projects";
import Header from "./components/Header";
import ProjectsSlider from './components/ProjectsSlider';
import VlogsSection from './components/Blogs';
import VisitCounter from './components/VisitCounter';
import VisitCounterBadge from './components/VisitCounterBadge';

export default function Home() {
  
  useEffect(() => {
    // This ensures sections have proper IDs for navigation
    const sections = [
      { id: 'home' },
      { id: 'about' },
      { id: 'projects' },
      { id: 'education' },
      { id: 'contact' },
    ];
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#0A0A0A] overflow-hidden">
      <main className="w-full">

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

        {/* Add visit counter in footer */}
        <footer className="py-4 px-6 border-t border-gray-800 mt-10">
          <div className="container mx-auto flex justify-between items-center text-gray-400 text-sm">
            <span>© 2024 Your Portfolio</span>
            <VisitCounter variant="detailed" />
          </div>
        </footer>

        {/* Optional: Floating badge counter */}
        <VisitCounterBadge />
      </main>
    </div>
  );
}