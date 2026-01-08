import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import EducationExperience from "./components/EducationExperience";
import ContactSection from "./components/ContactSection";
import BrandCarousel from "./components/BrandCarousel";
import LogoCarousel from "./components/BrandCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <main className="">
          <div>
              <HeroSection/>
          </div>

          <div className="mt-44">
              <AboutSection/>
          </div>

           <div className="mt-44">
              <LogoCarousel/>
          </div>

            <div className="mt-44">
              <EducationExperience/>
          </div>

            <div className="mt-44">
              <ContactSection/>
          </div>


      </main>
    </div>
  );
}
