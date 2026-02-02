import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
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
      <div className="hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-default">
        <div>
          <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.companyName}
          </p>
        </div>

        <ul className="ml-5 mt-5 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1 text-[14px] tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>

        {experience.skills && (
          <div className="mt-5 flex flex-wrap gap-2">
            <p className="text-secondary text-[14px] font-semibold w-full mb-1">
              Skills:
            </p>
            {experience.skills.map((skill, index) => (
              <span
                key={`experience-skill-${index}`}
                className="text-[12px] py-1 px-2 rounded-lg bg-tertiary text-white-100 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
