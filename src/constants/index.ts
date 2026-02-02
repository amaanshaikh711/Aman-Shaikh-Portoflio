import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  future_interns,
  codtech,
  lusso_homes,
  insightify,
  ml_task,
  mz_autoworks,
  churn_prediction,
  lusso_homes_video,
  luxury_watches,
  weather_dashboard,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Next JS",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Machine Learning Intern",
    companyName: "Future Interns",
    icon: future_interns,
    iconBg: "#E6DEDD",
    date: "December 2025 – January 2026",
    points: [
      "Worked on core Machine Learning concepts including data preprocessing, model training, and evaluation.",
      "Implemented ML algorithms using Python and relevant libraries.",
      "Gained hands-on experience with real-world datasets and problem-solving workflows.",
      "Improved understanding of ML pipelines and practical deployment concepts.",
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "Model Evaluation"],
  },
  {
    title: "Freelance Web Developer",
    companyName: "Lusso Homes",
    icon: lusso_homes,
    iconBg: "#f3f3f3",
    date: "December 2025",
    points: [
      "Built and hosted a professional, responsive real estate website from scratch.",
      "Designed a user-friendly platform that enhanced digital presence and client interaction.",
      "Incorporated complex client requirements effectively into a high-quality final product.",
      "Ensured seamless hosting and performance optimization for a premium user experience.",
    ],
    skills: ["Web Development", "Frontend Design", "UI/UX", "Website Hosting"],
  },
  {
    title: "Python Programming Intern",
    companyName: "Codtech IT Solutions Pvt. Ltd.",
    icon: codtech,
    iconBg: "#383E56",
    date: "November 2025 – December 2025 (6 Weeks)",
    points: [
      "Developed and tested Python-based programs for practical use cases.",
      "Strengthened fundamentals of logic building, debugging, and clean code practices.",
      "Worked on small real-world tasks aligned with industry-style problem solving.",
      "Demonstrated consistency, learning ability, and professional work ethics.",
    ],
    skills: ["Python", "Problem Solving", "Programming Fundamentals"],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Insightify",
    description: "",
    tags: [],
    image: "", // Placeholder or thumbnail if needed
    video: insightify,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "MZ Autoworks",
    description: "",
    tags: [],
    image: "",
    video: mz_autoworks,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Lusso Homes",
    description: "",
    tags: [],
    image: "",
    video: lusso_homes_video,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Luxury Watches",
    description: "",
    tags: [],
    image: "",
    video: luxury_watches,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Churn Prediction",
    description: "",
    tags: [],
    image: "",
    video: churn_prediction,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Weather Dashboard",
    description: "",
    tags: [],
    image: "",
    video: weather_dashboard,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Sales Dashboard with Prediction",
    description: "",
    tags: [],
    image: "",
    video: ml_task,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
