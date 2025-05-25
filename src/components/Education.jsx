import React from "react";
import FadeInSection from "./FadeInSection";

const educationData = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    university: "Mumbai University",
    duration: "2019 - 2023",
    cgpa: "8.51",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Education
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-8">
          {educationData.map((education, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {education.university}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {education.duration}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    CGPA:
                  </span>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
