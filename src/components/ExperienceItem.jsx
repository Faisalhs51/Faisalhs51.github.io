import React from "react";

const ExperienceItem = ({
  companyLogo,
  company,
  position,
  startDate,
  endDate,
  description,
}) => {
  // Split description into sections based on newlines
  const sections = description.split("\n").filter((section) => section.trim());

  return (
    <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
        {companyLogo && (
          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <img
              src={companyLogo}
              alt={`${company} logo`}
              className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
            />
          </div>
        )}
        <div className="text-center sm:text-left flex-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            {position}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
            {company} - {startDate} - {endDate}
          </p>
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
            {sections.map((section, index) => {
              // Check if the section is a bullet point
              if (section.trim().startsWith("•")) {
                return (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">
                      •
                    </span>
                    <p className="text-justify">
                      {section.replace("•", "").trim()}
                    </p>
                  </div>
                );
              }
              // Regular text section
              return <p key={index}>{section}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
