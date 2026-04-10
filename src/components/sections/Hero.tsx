import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { herobg } from "../../assets";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-[100px] sm:pt-[120px] pb-10 sm:pb-20">

      {/* 3. Strongly Implemented Background Texture (Abstract Purple Wave) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Animated Custom Abstract Wave Texture */}
        <motion.div
          animate={{ y: [-15, 10, -15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full opacity-[0.12] sm:opacity-[0.18] mix-blend-screen"
        >
          <img
            src={herobg}
            alt="Abstract Purple Wave Background"
            className="w-full h-full object-cover filter contrast-125"
          />
        </motion.div>

        {/* Ambient meshes positioned on edges/right side behind the texture */}
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-[#915EFF] mix-blend-screen filter blur-[120px] sm:blur-[180px] opacity-[0.10]" />
        <div className="absolute top-[30%] -right-[15%] w-[50%] h-[50%] rounded-[100%] bg-[#c8b4ff] mix-blend-screen filter blur-[150px] opacity-[0.08]" />
      </div>

      <div className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 relative z-10`}>

        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col flex-1 w-full text-left max-w-2xl"
        >
          {/* 1 & 2. Improved Heading Hierarchy & Name Layout */}
          <h1 className="flex flex-col items-start mb-4">
            <span className="font-semibold text-white/80 text-xl sm:text-2xl lg:text-3xl mb-1 tracking-wide">
              Hi, I'm
            </span>
            <span
              className="font-extrabold text-[#915EFF] whitespace-nowrap tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw + 1.5rem, 4.5rem)", lineHeight: "1.1" }}
            >
              Aman Shaikh
            </span>
          </h1>

          <h2 className="font-bold text-[#dfd9ff] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-5">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#c8b4ff]">AI-powered web applications</span> that solve real world problems.
          </h2>

          <p className="text-secondary text-base sm:text-lg lg:text-[19px] leading-relaxed mb-8 max-w-[540px] font-medium">
            Computer Science student and freelance developer focused on building scalable web apps and real-time AI systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <a href="#projects" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#915EFF] text-white text-base lg:text-lg font-medium rounded-lg hover:bg-[#7e46fc] shadow-[0_4px_14px_0_rgba(145,94,255,0.25)] hover:shadow-[0_6px_20px_rgba(145,94,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white text-base lg:text-lg font-medium rounded-lg border-2 border-white/20 hover:border-[#915EFF] hover:bg-[#915EFF]/10 transition-all duration-300 transform hover:-translate-y-0.5">
              Hire Me
            </a>
          </div>

          {/* Trust line */}
          <div className="flex items-start sm:items-center gap-3 text-sm lg:text-[15px] text-secondary/90 font-medium">
            <svg className="w-5 h-5 text-[#915EFF] shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="leading-tight">Built real-world projects &bull; AI + Web focus &bull; Always learning</p>
          </div>
        </motion.div>

        {/* Right Side: Visual Image (Coder Avatar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full flex justify-center lg:justify-end items-center relative pb-6 lg:pb-0"
        >
          {/* Responsive sizing container for the avatar - slightly reduced max sizes for balance */}
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] aspect-square flex justify-center items-center">

            {/* Minimal pulsing glowing rings */}
            <div className="absolute inset-0 rounded-full border border-[#915EFF]/25 animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-3 sm:inset-4 rounded-full border border-[#915EFF]/35 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Avatar Image Wrapper */}
            <div className="absolute inset-6 sm:inset-8 rounded-full overflow-hidden border border-[#915EFF]/50 shadow-[0_0_60px_rgba(145,94,255,0.20)] group transform transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(145,94,255,0.35)]">
              <img
                src="/coder_avatar.png"
                alt="Aman Shaikh - Software Developer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Inner vignette/gradient for depth */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator animation - fixed position */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex">
        <a href="#about" aria-label="Scroll to About">
          <div className="w-[30px] h-[55px] rounded-3xl border-[3px] border-secondary/40 flex justify-center items-start p-1.5 hover:border-[#915EFF] transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
