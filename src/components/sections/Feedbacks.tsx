import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

// Custom tailored dataset mixing true client testimonials and a major project highlight
const customTestimonials = [
  {
    type: "testimonial",
    content: "Aman built a professional and visually appealing website for LussoHomes with great attention to detail. The design and overall experience turned out exactly as expected, and the process was smooth from start to finish.",
    name: "Mohammad Shaikh",
    context: "LussoHomes",
    role: "Project Client"
  },
  {
    type: "testimonial",
    content: "Aman developed a clean and responsive website for our garage that clearly showcases our services online. The website helps us present our work professionally, and the overall experience working with him was efficient and reliable.",
    name: "Ashraf Shaikh",
    context: "MZ Autoworks",
    role: "Business Owner"
  },
  {
    type: "project",
    content: "Developed a real-time hate speech detection and sentiment analysis system using NLP and Flask, demonstrating practical implementation of machine learning in web applications.",
    name: "HateSense AI",
    context: "AI Project",
    role: "Core Developer"
  }
];

interface IFeedbackCard {
  index: number;
  type: string;
  content: string;
  name: string;
  context: string;
  role: string;
}

const FeedbackCard: React.FC<IFeedbackCard> = ({
  index,
  type,
  content,
  name,
  context,
  role,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="bg-[#100d25] border border-white/5 w-full rounded-2xl p-6 sm:p-8 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_35px_rgba(145,94,255,0.2)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group h-full"
    >
      {/* Aesthetic blur circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#915EFF]/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-[#915EFF]/20 transition-all duration-300" />

      {/* Dynamic Structural Icon Identifier */}
      {type === "testimonial" ? (
        <span className="text-[80px] font-black text-[#915EFF]/15 absolute -top-2 right-4 pointer-events-none leading-none select-none font-serif transform transition-transform duration-300 group-hover:scale-110">
          "
        </span>
      ) : (
        <span className="absolute top-8 right-6 text-[#915EFF]/30 pointer-events-none group-hover:text-[#915EFF]/50 transition-colors duration-300">
           <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </span>
      )}

      <div className="relative z-10 flex flex-col flex-grow">
        <p className="text-[15px] sm:text-[16.5px] leading-[1.8] tracking-wide text-secondary font-medium">
          {content}
        </p>

        {/* Card Footer (Author / Context) */}
        <div className="mt-8 pt-6 flex items-center justify-between gap-1 border-t border-white/5 mt-auto">
          <div className="flex flex-1 flex-col">
            <p className="text-[17px] sm:text-[18px] font-bold text-white tracking-wide">
              {type === "testimonial" ? (
                <span className="text-[#915EFF] font-mono select-none">@ </span>
              ) : (
                <span className="text-[#915EFF] font-mono select-none"># </span>
              )}
              {name}
            </p>
            <p className="text-secondary mt-1.5 text-[13px] sm:text-[14px] font-medium tracking-wide">
              {role} <span className="text-[#915EFF] px-1.5 opacity-40 select-none">•</span> <span className="text-[#dfd9ff]">{context}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="w-full">
      {/* Structural Header matching main templating styles */}
      <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-2 font-semibold">
          What others say
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight flex items-center gap-4">
          Testimonials.
        </h2>
      </motion.div>

      {/* Structured CSS Grid */}
      <div className="mt-16 sm:mt-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full place-items-stretch">
          {customTestimonials.map((testimonial, index) => (
            <FeedbackCard key={index} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Utilizing standard SectionWrapper ensures it inherits the max-w-7xl global width restraint properly along with other sections.
export default SectionWrapper(Feedbacks, "feedbacks");
