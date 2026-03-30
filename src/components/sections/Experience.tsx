import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { TExperience } from "../../types";
import { fadeIn } from "../../utils/motion";

const ExperienceCard: React.FC<TExperience & { onClick: () => void }> = ({ onClick, ...experience }) => {
  // Use the first point as a short 1-line summary to keep the card compact
  const summary = experience.points.length > 0 ? experience.points[0] : "";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#100d25",
        color: "#fff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #100d25" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg, 
        boxShadow: "0 0 0 4px #050816, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)" 
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      {/* Wrapper with hover effect for the entire internal card block */}
      <div className="group transition-all duration-300 ease-in-out relative">
        <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-wide">{experience.title}</h3>
        <p className="text-[#915EFF] text-[15px] sm:text-[16px] font-semibold tracking-wider uppercase mt-1 mb-4" style={{ margin: "4px 0 16px 0" }}>
          {experience.companyName}
        </p>

        {/* Short Summary */}
        <p className="text-secondary text-[14px] sm:text-[15px] leading-relaxed mb-6 line-clamp-2">
          {summary}
        </p>

        {/* Clean Interactive Button */}
        <button 
          onClick={onClick}
          className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-white px-5 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#915EFF] hover:border-[#915EFF] hover:shadow-[0_4px_20px_rgba(145,94,255,0.3)] transition-all duration-300 transform group-hover:-translate-y-1"
        >
          View Details
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </VerticalTimelineElement>
  );
};

const ExperienceModal: React.FC<{ experience: TExperience | null, onClose: () => void }> = ({ experience, onClose }) => {
  
  // Handle keyboard (ESC) closing and background scroll freezing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (experience) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [experience, onClose]);

  return (
    <AnimatePresence>
      {experience && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Glassmorphism Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#050816]/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Main Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-[#100d25] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col z-10"
          >
            {/* Close Button top-right */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-black/20 hover:bg-[#915EFF] border border-white/10 hover:border-[#915EFF] rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Modal Header Panel */}
            <div className="pt-8 sm:pt-10 px-6 sm:px-10 pb-6 sm:pb-8 border-b border-white/5 relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gradient-to-br from-[#915EFF]/10 via-[#100d25] to-[#100d25]">
              {/* Aesthetic light streak */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-50" />
              
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-[#050816] border border-white/10 p-4 flex items-center justify-center shadow-xl relative z-10 bg-gradient-to-b from-white/5 to-transparent">
                <img src={experience.icon} alt={experience.companyName} className="w-full h-full object-contain" />
              </div>
              
              <div className="relative z-10 text-center sm:text-left pt-2">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{experience.title}</h2>
                <p className="text-[#915EFF] text-lg font-bold tracking-wide mt-1">{experience.companyName}</p>
                <p className="text-secondary text-sm mt-3 flex items-center justify-center sm:justify-start gap-2 opacity-90 border border-white/10 w-max mx-auto sm:mx-0 px-3 py-1 rounded-full bg-white/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {experience.date}
                </p>
              </div>
            </div>

            {/* Modal Body & Content */}
            <div className="px-6 sm:px-10 py-8 sm:py-10 flex flex-col gap-10">
              
              {/* Contributions / Overview */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#915EFF] rounded-full" />
                  Key Contributions
                </h4>
                <ul className="space-y-4">
                  {experience.points.map((point, index) => (
                    <li key={index} className="text-secondary text-[15px] sm:text-[16px] leading-[1.8] flex items-start gap-4">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-[#915EFF] mt-2.5 shadow-[0_0_10px_rgba(145,94,255,0.8)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills/Tools section */}
              {experience.skills && experience.skills.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-[#915EFF] rounded-full" />
                    Technologies &amp; Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-[14px] sm:text-[15px] py-2 px-4 rounded-lg bg-[#050816] border border-white/5 text-[#dfd9ff] font-medium flex items-center gap-2.5 transition-colors duration-300 hover:border-[#915EFF]/50 hover:bg-white/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#915EFF]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<TExperience | null>(null);

  return (
    <>
      <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-2 font-semibold">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight flex items-center gap-4">
          Experience.
        </h2>
      </motion.div>

      <div className="mt-16 sm:mt-20 flex flex-col relative w-full">
        {/* Custom vertical timeline overrides via props */}
        <VerticalTimeline lineColor="rgba(255,255,255,0.1)">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              {...experience} 
              onClick={() => setSelectedExperience(experience)} 
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Renders the interactive panel */}
      <ExperienceModal 
        experience={selectedExperience} 
        onClose={() => setSelectedExperience(null)} 
      />
    </>
  );
};

export default SectionWrapper(Experience, "work");
