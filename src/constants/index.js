import {
  car,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  nodejs,
  react,
  summiz,
  tailwindcss,
  threads,
} from "../assets/icons";

export const skills = [
  { imageUrl: javascript, name: "JavaScript", type: "Language" },
  { imageUrl: react, name: "React.js", type: "Frontend" },
  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: express, name: "Express.js", type: "Backend" },
  { imageUrl: mongodb, name: "MongoDB", type: "Database" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: motion, name: "Framer Motion", type: "Animation" },
  { imageUrl: html, name: "HTML5", type: "Frontend" },
  { imageUrl: css, name: "CSS3", type: "Frontend" },
  { imageUrl: git, name: "Git", type: "Developer Tool" },
];

export const technicalSkills = [
  { category: "Languages", items: "C++, JavaScript, SQL, HTML5, CSS3" },
  {
    category: "Frameworks & Libraries",
    items: "React.js, Vite, Tailwind CSS, Framer Motion, Recharts, Node.js, Express.js, Mongoose, Axios",
  },
  { category: "Databases", items: "MongoDB, MySQL" },
  {
    category: "Developer Tools & Platforms",
    items: "Git, GitHub, VS Code, Postman, Chrome DevTools, npm, MongoDB Compass, MongoDB Atlas, Linux/Ubuntu, WSL",
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "Graphic Era Hill University, Bhimtal",
  period: "2021 – 2025",
  location: "Bhimtal, Uttarakhand",
  score: "7.52 / 10 CGPA",
};

export const courses = [
  "Computer Networking",
  "Operating System",
  "Cryptography",
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management System",
];

export const certifications = [
  { name: "Cybersecurity Essential", provider: "Cisco" },
  { name: "Cybersecurity Associate", provider: "Pregrad" },
  { name: "Machine Learning A–Z: AI, Python", provider: "Udemy" },
  { name: "The Complete Ethical Hacking", provider: "Udemy" },
];

export const experiences = [
  {
    title: "Web Development Intern",
    company_name: "3Skill",
    icon: react,
    iconBg: "#a2d2ff",
    date: "September 2026 – Present",
    points: [
      "Developing full-stack web applications using the MERN stack: MongoDB, Express.js, React.js, and Node.js.",
      "Building responsive UI, integrating REST APIs, and implementing backend functionality.",
      "Debugging, optimizing, and collaborating on real-world web development projects.",
    ],
  },
  {
    title: "Software Engineer — Virtual Job Simulation",
    company_name: "Forage",
    icon: github,
    iconBg: "#b7e4c7",
    date: "Forage Virtual Experience",
    points: [
      "Implemented frontend updates based on product feedback and developed backend updates to support new application features.",
      "Analyzed feature releases and product requirements, enhancing the application for the YC Internship Program.",
    ],
  },
];

export const socialLinks = [
  { name: "Contact", iconUrl: contact, link: "/contact", external: false },
  { name: "GitHub", iconUrl: github, link: "https://github.com/Ag1605", external: true },
  { name: "LinkedIn", iconUrl: linkedin, link: "https://www.linkedin.com/in/Ag1605", external: true },
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-blue",
    name: "Multithreaded HTTP Server",
    description: "A concurrent HTTP server built from scratch in C++ with TCP sockets and POSIX threads.",
    techStack: "C++, Linux/Ubuntu, TCP Sockets, POSIX Threads, HTTP, Networking",
    highlights: [
      "Implemented HTTP request parsing, response generation, routing, static file serving, and connection handling without a web-server framework.",
      "Designed concurrent request processing with a thread-per-connection architecture for simultaneous requests.",
      "Applied low-level networking, socket programming, concurrency, synchronization, and Linux systems programming concepts.",
    ],
    repositoryLink: "https://github.com/Ag1605",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "AI Invoice Generator",
    description: "An AI-powered invoice management platform for creating, managing, and generating invoices.",
    techStack: "React.js, Node.js, Express.js, MongoDB, Mongoose, Clerk, Gemini AI, Vercel, Render",
    highlights: [
      "Built a full-stack platform with React.js and Node.js to create, generate, edit, view, and manage invoices.",
      "Integrated Google Gemini AI for structured invoice generation and secure Clerk authentication with protected routes.",
      "Added invoice preview, PDF/print export, dashboard analytics, and Paid/Pending status management.",
    ],
    liveLink: "https://ai-invoice-generator-ivory.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "NASA Space Live",
    description: "A real-time space intelligence dashboard powered by NASA APIs.",
    techStack: "React.js, Vite, Tailwind CSS, Framer Motion, Node.js, Express.js, Axios, NASA APIs",
    highlights: [
      "Integrated NASA DONKI, EONET, GIBS, and NASA Images APIs to display space weather, asteroids, hazards, and Earth imagery.",
      "Developed an Express.js backend with Axios and caching to aggregate external NASA APIs efficiently.",
      "Implemented asteroid detection, space-weather monitoring, Earth imagery, discovery galleries, and auto refresh.",
    ],
    liveLink: "https://nasa-space-live.vercel.app/",
  },
];
