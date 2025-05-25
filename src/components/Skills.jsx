import React from "react";
import SkillItem from "./SkillItem";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiKubernetes,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
} from "react-icons/si";
import FadeInSection from "./FadeInSection";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-blue-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-purple-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Skills
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, idx) => (
            <FadeInSection key={skill.name} delay={idx * 0.1}>
              <SkillItem name={skill.name} icon={skill.icon} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
