import React from "react";
import profileImg from "../assets/profile.png";
import FadeInSection from "./FadeInSection";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <FadeInSection>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center mt-10">
          {/* Image */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <img
              src={profileImg}
              alt="Profile"
              className="w-80 h-80 rounded-2xl object-contain mx-auto shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm a full-stack developer with 2+ years of experience in the MERN
              stack and DevOps. I specialize in building scalable web
              applications, efficient APIs, and CI/CD pipelines. I’m passionate
              about clean code, responsive design, and delivering user-focused
              solutions.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
