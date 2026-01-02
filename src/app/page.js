import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
          <div>
              <HeroSection/>
          </div>

          <div className="mt-44">
              <AboutSection/>
          </div>


      </main>
    </div>
  );
}
