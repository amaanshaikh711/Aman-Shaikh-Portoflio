import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

const customProjects = [
  {
    name: "HateSense AI",
    description: "Developed a real-time hate speech detection and sentiment analysis system using machine learning pipelines, NLP, and Flask.",
    tags: [
      { name: "python", color: "text-blue-400" },
      { name: "flask", color: "text-green-400" },
      { name: "nlp", color: "text-pink-400" },
    ],
    image: "/project-1 hatesense-ai-project.png",
    sourceCodeLink: "https://github.com/amaanshaikh711/Real-Time-Sentiment-Analysis-and-Hatespeech-detection",
  },
  {
    name: "Insightify Data Analysis",
    description: "A comprehensive data analysis tool that visualizes trends and extracts actionable metrics from raw datasets.",
    tags: [
      { name: "pandas", color: "text-blue-400" },
      { name: "data-science", color: "text-green-400" },
      { name: "visualization", color: "text-pink-400" },
    ],
    image: "/project-2 insightify-Data analysis Tool.png",
    sourceCodeLink: "https://github.com/amaanshaikh711/AUTOMATED-REPORT-GENERATION",
  },
  {
    name: "LussoHomes Ecommerce",
    description: "A live, professional real estate platform featuring robust property listings and seamless property exploration.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "fullstack", color: "text-green-400" },
      { name: "ui-ux", color: "text-pink-400" },
    ],
    image: "/project- 5 lussohomes-Live ecommerce website.png",
    sourceCodeLink: "https://lussohomes.in",
  },
  {
    name: "AI Sales Dashboard",
    description: "An interactive dashboard integrating machine learning predictions to forecast sales trends and monitor real-time metrics.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "ml-model", color: "text-green-400" },
      { name: "analytics", color: "text-pink-400" },
    ],
    image: "/project-3 AI-sales-dashboard-ML-project.png",
    sourceCodeLink: "https://github.com/amaanshaikh711/FUTURE_ML_01",
  },
  {
    name: "Weather Dashboard",
    description: "A dynamic tracking application fetching real-time forecasting data from external weather APIs with an intuitive fast UI.",
    tags: [
      { name: "javascript", color: "text-blue-400" },
      { name: "rest-api", color: "text-green-400" },
      { name: "css", color: "text-pink-400" },
    ],
    image: "/project-4 weather-dashboard.png",
    sourceCodeLink: "https://github.com/amaanshaikh711/API-Integration-Data-Visualization",
  },
  {
    name: "Churn Prediction ML",
    description: "Predictive machine learning model designed to analyze customer retention data and forecast probability of churn accurately.",
    tags: [
      { name: "scikit-learn", color: "text-blue-400" },
      { name: "python", color: "text-green-400" },
      { name: "data-mining", color: "text-pink-400" },
    ],
    image: "/project-6 churn-prediction-ML-Project.png",
    sourceCodeLink: "https://github.com/amaanshaikh711/FUTURE_ML_02",
  },
  // {
  //   name: "Luxury Watch Store",
  //   description: "Premium digital storefront for luxury watches, complete with a beautifully designed cart system and checkouts.",
  //   tags: [
  //     { name: "nextjs", color: "text-blue-400" },
  //     { name: "ecommerce", color: "text-green-400" },
  //     { name: "tailwind", color: "text-pink-400" },
  //   ],
  //   image: "/project-7 watch-ecommerce-website.png",
  //   sourceCodeLink: "https://github.com/amaanshaikh711/Luxury-Watches-Showcase-Website",
  // },
  // {
  //   name: "Electronics Store",
  //   description: "A full-scale e-commerce web application for consumer electronics built with sleek interactivity and reliable fast mapping.",
  //   tags: [
  //     { name: "react", color: "text-blue-400" },
  //     { name: "database", color: "text-green-400" },
  //     { name: "web-app", color: "text-pink-400" },
  //   ],
  //   image: "/project-8 Electronics ecommerce website.png",
  //   sourceCodeLink: "https://github.com/amaanshaikh711/A.S.Electronics",
  // },
];

interface IProjectCard {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  sourceCodeLink: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)} className="w-full h-full">
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02}
        glareColor="#ffffff"
        glareMaxOpacity={0.1}
        glarePosition="all"
        glareBorderRadius="16px"
        className="w-full h-full flex"
        transitionSpeed={800}
      >
        <div className="bg-[#100d25] border border-white/5 w-full rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(145,94,255,0.25)] hover:border-[#915EFF]/30 transition-all duration-500 flex flex-col group h-full">
          <div className="relative h-[200px] sm:h-[230px] w-full shrink-0 overflow-hidden rounded-xl border border-white/10">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="card-img_hover absolute inset-0 m-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="bg-[#050816]/80 backdrop-blur-md hover:bg-[#915EFF] border border-white/10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                title="View Source/Project"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col flex-grow">
            <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-wide">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] leading-relaxed flex-grow">
              {description}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[13px] font-medium tracking-wide ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full">
      {/* Header section structure matching the rest of the premium site style */}
      <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-3 font-semibold">
          My Work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-none mb-6">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("right", "tween", 0.2, 0.5)}
          className="text-secondary text-[16px] sm:text-[17px] lg:text-[18px] w-full leading-[1.9] font-medium tracking-wide text-justify sm:text-left"
        >
          The following projects highlight my work through real-world applications, client websites, and ML-powered solutions. Each project reflects practical problem-solving, modern technologies, and a focus on clean, production-ready development.
        </motion.p>
      </div>

      {/* Grid of Custom Formatted Projects */}
      <div className="mt-16 sm:mt-20 w-full mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-stretch">
          {customProjects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
