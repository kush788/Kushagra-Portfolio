import { useEffect, useState } from "react";
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in on mount
    setLoaded(true);
  }, []);

  return (
    <ReactLenis root>
      {/* Background layer */}
      <div className={`spline-container fixed top-0 left-0 w-full h-full -z-10 ${loaded ? 'loaded' : ''}`}>
        <iframe
          src="https://my.spline.design/untitled-f680ea749fc30deeb5eff5a8b15b2f63"
          frameBorder="0"
          width="100%"
          height="100%"
          id="aura-spline"
        ></iframe>
      </div>

      {/* Foreground content */}
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
  );
};

export default App;
