import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 *  Components
 */
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <ReactLenis root>
      {/* 🔹 Background layer */}
      <div class="spline-container fixed top-0 left-0 w-full h-full -z-10">
  <iframe
    src="https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx"
    frameborder="0"
    class="w-full h-full"
  ></iframe>
</div>


      {/* 🔹 Foreground content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App;
