import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

// Import locally needed icons so we don't depend on generic services from config
import { web, mobile, backend, creator } from "../../assets";

// Specifically tailored skill cards data
const specializedSkills = [
  {
    title: "AI-Powered Web Applications",
    description: "Building intelligent apps using machine learning and modern web technologies.",
    icon: web,
  },
  {
    title: "Real-Time Machine Learning Systems",
    description: "Deploying robust ML models into live production environments.",
    icon: creator,
  },
  {
    title: "3D & AR Web Experiences",
    description: "Creating immersive web interfaces with 3D models and AR integration.",
    icon: mobile,
  },
  {
    title: "Scalable Backend & APIs",
    description: "Designing fast, reliable backend architectures for data-heavy apps.",
    icon: backend,
  },
];

interface IServiceCard {
  index: number;
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, description, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={12}
    tiltMaxAngleY={12}
    scale={1.03}
    glareColor="#915EFF"
    glarePosition="all"
    glareBorderRadius="16px"
    className="w-full h-full flex"
    transitionSpeed={800}
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full h-full rounded-[16px] p-[1px] bg-gradient-to-br from-[#915EFF]/40 to-transparent shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(145,94,255,0.25)] transition-shadow duration-300"
    >
      {/* Compact card layout tailored for title + description */}
      <div className="bg-[#0f0c29] rounded-[16px] py-6 px-5 sm:px-6 h-full flex flex-col items-center text-center relative overflow-hidden group">

        {/* Subtle hover glow circle behind icon */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#915EFF]/25 blur-[24px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <img
          src={icon}
          alt={title}
          className="w-12 h-12 object-contain mb-5 transition-transform duration-300 group-hover:-translate-y-1 relative z-10"
        />

        <h3 className="text-white text-[16px] sm:text-[17px] font-bold tracking-wide leading-tight mb-3">
          {title}
        </h3>

        <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="w-full">
      {/* Header section structure */}
      <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-2 font-semibold">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight flex items-center gap-4">
          Overview.
        </h2>
      </motion.div>

      {/* Content & Balance Layout */}
      <div className="mt-8 flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">

        {/* Left: Refined exact text content */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.5)}
          className="flex flex-col flex-1 text-secondary text-[16px] sm:text-[17.5px] leading-[1.8] font-medium"
        >
          <p className="mb-5">
            I’m a Computer Science student and Python-focused developer specializing in AI-driven web applications.
          </p>
          <p className="mb-5">
            I’ve built real-world projects like HateSense AI, applying machine learning and NLP to solve practical problems using Flask and modern web technologies.
          </p>
          <p>
            I focus on building scalable, efficient systems that are clean, reliable, and production-ready.
          </p>
        </motion.div>

        {/* Right: Balanced structured Quick Facts block */}
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.5)}
          className="flex-1 w-full bg-[#100d25] rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden shadow-xl"
        >
          {/* Aesthetic accent */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#915EFF]/10 blur-3xl rounded-full pointer-events-none" />

          <h3 className="text-white font-bold text-xl sm:text-2xl mb-6 flex items-center gap-3 relative z-10">
            <div className="w-1.5 h-6 bg-[#915EFF] rounded-full" />
            Quick Facts
          </h3>

          <ul className="space-y-5 relative z-10">
            {/* Focus */}
            <li className="flex items-start gap-4 text-secondary">
              <span className="w-10 h-10 rounded-full bg-[#151030] border border-white/5 flex flex-shrink-0 items-center justify-center text-[#915EFF] shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </span>
              <span className="text-[14px] sm:text-[15px] pt-1 leading-snug"><strong className="text-white">Focus:</strong> Building AI-powered web applications and immersive digital experiences that solve real-world problems.</span>
            </li>

            {/* Core Stack */}
            <li className="flex items-start gap-4 text-secondary">
              <span className="w-10 h-10 rounded-full bg-[#151030] border border-white/5 flex flex-shrink-0 items-center justify-center text-[#915EFF] shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </span>
              <span className="text-[14px] sm:text-[15px] pt-1 leading-snug"><strong className="text-white">Core Stack:</strong> Python, Flask, NLP, Machine Learning, React, Next.js.</span>
            </li>

            {/* Specialization */}
            <li className="flex items-start gap-4 text-secondary">
              <span className="w-10 h-10 rounded-full bg-[#151030] border border-white/5 flex flex-shrink-0 items-center justify-center text-[#915EFF] shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </span>
              <span className="text-[14px] sm:text-[15px] pt-1 leading-snug"><strong className="text-white">Specialization:</strong> AI integration, real-time data processing, and 3D/AR-based web experiences.</span>
            </li>

            {/* Experience
            <li className="flex items-start gap-4 text-secondary">
              <span className="w-10 h-10 rounded-full bg-[#151030] border border-white/5 flex flex-shrink-0 items-center justify-center text-[#915EFF] shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </span>
              <span className="text-[14px] sm:text-[15px] pt-1 leading-snug"><strong className="text-white">Experience:</strong> Built and deployed real-world AI systems and interactive web projects including AR-integrated platforms.</span>
            </li> */}
          </ul>
        </motion.div>
      </div>

      {/* Grid Layout for Service Cards */}
      <div className="mt-16 sm:mt-24 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-stretch">
          {specializedSkills.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
