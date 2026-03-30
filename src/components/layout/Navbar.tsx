import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Contextual highlighter
    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#050816]/70 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between relative">
        <Link
          to="/"
          className="flex items-center gap-4 group z-10"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Custom User Logo */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-[1.5px] border-white/10 group-hover:border-[#915EFF]/60 shadow-[0_0_15px_rgba(145,94,255,0.25)] group-hover:shadow-[0_0_25px_rgba(145,94,255,0.5)] flex items-center justify-center transition-all duration-300">
            <img src={logo} alt="Aman Shaikh Logo" className="w-full h-full object-cover transform scale-110" />
          </div>
          <p 
            className="text-white hidden sm:block tracking-widest cursor-pointer group-hover:text-[#c8b4ff] transition-colors duration-300"
            style={{ fontFamily: "'Caveat', cursive", fontSize: "1.9rem", lineHeight: "1" }}
          >
            Aman Shaikh
          </p>
        </Link>

        {/* Desktop Menu - Right aligned */}
        <ul className="list-none hidden sm:flex flex-row gap-8 lg:gap-12">
          {navLinks.map((nav) => (
             <li
              key={nav.id}
              className={`relative cursor-pointer text-[15px] lg:text-[16px] font-medium tracking-wide transition-colors duration-300 group
                ${active === nav.id ? "text-white" : "text-secondary"} 
                hover:text-white`}
            >
              <a href={`#${nav.id}`} className="py-2 inline-block relative">
                {nav.title}
                {/* Underline hover/active effect */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#915EFF] origin-left transition-transform duration-300 ease-out rounded-full
                  ${active === nav.id ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:opacity-100 group-hover:scale-x-100"}`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`w-[28px] h-[28px] object-contain cursor-pointer z-50 transition-transform duration-300 ${toggle ? 'rotate-90 scale-90' : 'rotate-0'}`}
            onClick={() => setToggle(!toggle)}
          />

          {/* Premium blurred backdrop overlay */}
          <div 
            className={`fixed inset-0 left-0 bg-[#050816]/60 backdrop-blur-sm z-30 transition-all duration-500 min-h-screen
              ${toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={() => setToggle(false)}
          />

          {/* Sliding Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-screen w-[75vw] max-w-[320px] bg-[#050816]/95 backdrop-blur-2xl border-l border-white/10 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] p-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 ${
              !toggle ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <ul className="list-none flex flex-col items-start justify-start h-full mt-28 gap-6 w-full">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[22px] transition-all duration-500 relative w-full ${
                    active === nav.id ? "text-[#915EFF]" : "text-secondary hover:text-white"
                  }`}
                  style={{ 
                    transitionDelay: toggle ? `${index * 100 + 100}ms` : '0ms',
                    opacity: toggle ? 1 : 0,
                    transform: toggle ? 'translateX(0)' : 'translateX(20px)'
                  }}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`} className="block w-full py-4 border-b border-white/5 tracking-wide">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
