import React from "react";
import ProjectCard from "./ProjectCard";
import FadeInSection from "./FadeInSection";
import goDaddy from "../assets/go-daddy.png";
import abstract from "../assets/abstract-clone.png";
import sgs from "../assets/SGS.png";

const projects = [
  {
    title: "Restaurant WebApp",
    description:
      "A web application for a restaurant built with React and TailwindCSS.",
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Google Auth",
    ],
    link: "https://hotelmannat.vercel.app/user/17",
    image:
      "https://user-images.githubusercontent.com/89152237/268242121-2d7abdff-cf2f-46a7-a0bc-18b352be3248.png",
    githubLink: "https://github.com/Faisalhs51/RestaurantWebApp",
  },
  {
    title: "Frontend Clone of GoDaddy",
    description:
      "A frontend clone of GoDaddy built with React and TailwindCSS.",
    tech: ["React", "Vite", "Tailwind", "Animation"],
    link: "https://go-daddy-clone.vercel.app/",
    image: goDaddy,
    githubLink: "https://github.com/Faisalhs51/go-daddy-clone",
  },
  {
    title: "Society E-Portal",
    description:
      "A web application for a society built with React and TailwindCSS.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
    link: "https://society-e-portal.netlify.app",
    image:
      "https://user-images.githubusercontent.com/89152237/268244406-af52abc6-85aa-4696-ab28-b3a95e3a65d1.png",
    githubLink: "https://github.com/Faisalhs51/Society-E-Portal",
  },
  {
    title: "Frontend clone of abstract",
    description:
      "A frontend clone of abstract built with React and TailwindCSS.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://faisalhs51.github.io/abstract-clone/",
    image: abstract,
    githubLink: "https://github.com/Faisalhs51/abstract-clone",
  },
  {
    title: "Student Grading System",
    description:
      "A grading system for a student built with Node.js and Express.",
    tech: ["Java", "MySQL", "JDBC"],
    image: sgs,
    githubLink: "https://github.com/Faisalhs51/Student-Grading-System",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Personal Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <FadeInSection key={project.title} delay={idx * 0.2}>
              <ProjectCard {...project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
