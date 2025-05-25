import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";

const navLinks = [
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#skills", text: "Skills" },
  { href: "#contact", text: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dark:bg-gray-900 shadow-md fixed w-full z-50 backdrop-blur-sm bg-white/80">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-end items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.text} href={link.href} text={link.text} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-800/95 shadow-lg border-t border-gray-200 dark:border-gray-700 backdrop-blur-sm animate-slideDown">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.text}
                href={link.href}
                text={link.text}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-base font-medium border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg px-3 transition-all duration-200"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
