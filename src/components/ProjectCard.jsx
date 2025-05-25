import React from "react";

const ProjectCard = ({ title, description, tech, link, image, githubLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      {image && (
        <div className="mb-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </a>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        <strong>Tech:</strong> {tech.join(", ")}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline mr-4"
        >
          View Project →
        </a>
      )}
      <br />
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          View Code →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
