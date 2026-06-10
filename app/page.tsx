import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import Hero from "@/src/components/sections/Hero";
import Stats from "@/src/components/sections/Stats";
import Skills from "@/src/components/sections/Skills";
import Projects from "@/src/components/sections/Projects";
import Experience from "@/src/components/sections/Experience";
import Research from "@/src/components/sections/Research";
import Contact from "@/src/components/sections/Contact";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Stats />

      <Skills />

      <Projects />

      <Experience />

      <Research />

      <Contact />

      <Footer />

    </main>
  );
}