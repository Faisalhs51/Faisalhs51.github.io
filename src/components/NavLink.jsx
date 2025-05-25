import React from "react";

const NavLink = ({ href, text, onClick, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-all duration-200 group ${className}`}
    >
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;
