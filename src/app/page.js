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
import VisitorCounter from './components/VisitorCounter';

import { Analytics } from "@vercel/analytics/react";

export default function Home() {

  useEffect(() => {
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

        <section id="home" className="relative z-10">
          <HeroSection/>
        </section>

        <section id="about" className="relative z-20">
          <AboutSection/>
        </section>

        <section id="education" className="pt-20 relative z-20">  
          <EducationExperience/>
        </section>

        <section className='relative z-20'>
          <VlogsSection/>
        </section>

        <section className="mt-20 relative z-20">
          <LogoCarousel/>
        </section>

        <section id="projects" className="mt-20 relative z-20">
          <Projects/>
        </section>

        <section className="mt-20 relative z-20">
          <ProjectsSlider/>
        </section>

        <section id="contact" className="relative z-20">
          <ContactSection/>
        </section>

        {/* Add this line */}
        <Analytics />

              <section id="home" className="relative z-10">
        
        
      </section>

      </main>
    </div>
  );
}