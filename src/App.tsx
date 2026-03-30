import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          
          {/* Minimal Professional Footer */}
          <footer className="w-full relative z-10 bottom-0 py-6 border-t border-white/5 opacity-80 transition-opacity duration-300 hover:opacity-100">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-center px-4">
              <p className="text-secondary text-[14px] sm:text-[15px] font-medium tracking-wide">
                Designed & Developed by <span className="text-white">Aman Shaikh</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
