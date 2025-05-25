import React from "react";
import FadeInSection from "./FadeInSection";
import ExperienceItem from "./ExperienceItem";
import evotechLogo from "../assets/evotech.jpg";
import axstudiosLogo from "../assets/axstudios.png";

const experienceData = [
  {
    companyLogo: evotechLogo,
    company: "Evotech Global (Remote)",
    position: "Full Stack Developer",
    startDate: "Jan 2024",
    endDate: "Present",
    description: `• Designed and developed responsive, high‑performance web interfaces using React, Metronic Bootstrap, and TypeScript.
    • Built and integrated robust, scalable REST APIs with Express to power fronted applications.
    • Managed database operations with MongoDB Atlas, optimizing data storage and retrieval processes.
    • Led multiple projects involving React.js, TypeScript, Node.js, and MongoDB, overseeing end‑to‑end development cycles.
    • Streamlined the DevOps pipeline using AWS EKS and CodeBuild, enabling continuous integration and deployment (CI/CD).
    • Leveraged AWS S3 for object storage and CDN, optimizing media and asset delivery for faster load times.
    • Enhanced system performance through code optimization, best practices, and API latency reduction using MongoDB aggregate pipeline and parallel processing.
    • Ensured software quality through proactive bug fixing, unit testing, and thorough code reviews.`,
  },
  {
    companyLogo: axstudiosLogo,
    company: "AxStudios (Remote)",
    position: "Frontend Developer",
    startDate: "May 2023",
    endDate: "Oct 2023",
    description: `• Built responsive, high‑performance web applications using ReactJS, NextJS, and TailwindCSS, enhancing user experience and load speed.
    • Collaborated closely with UI designers and backend developers to deliver cohesive, user‑centered products on time and aligned with business goals.`,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Experience
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 mx-auto gap-8">
          {experienceData.map((experience, idx) => (
            <ExperienceItem key={idx} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
