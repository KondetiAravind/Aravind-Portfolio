import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Timeline from "@/src/components/sections/Timeline";
import Experience from "@/src/components/sections/Experience";
import Research from "@/src/components/sections/Research";
import Contact from "@/src/components/sections/Contact";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <Timeline />

      <Experience />

      <Research />

      <Contact />

    </main>
  );
}