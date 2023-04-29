import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Works />
      </div>
      <div className="relative z-0">
        <Contact />
      </div>

      <div className="relative z-0"></div>
    </div>
  );
}
