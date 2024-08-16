"use client";
import { HeroSection } from "./components/hero-section/hero-content";
import { AboutSection } from "./components/about-section/about-section";
import { SkilsSection } from "./components/skill-section";
import { ProjectsSection } from "./components/projects";
import { Contact } from "./components/contact-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black">
      <HeroSection />
      <AboutSection />
      <SkilsSection />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
