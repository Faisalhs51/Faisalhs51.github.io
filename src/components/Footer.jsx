import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X, Code, Instagram } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/faisalhs51", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/faisalhs51",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:faisalhusaindev@gmail.com", icon: Mail, label: "Email" },
  { href: "https://x.com/ShaikhFaisal51", icon: X, label: "X" },
  {
    href: "https://www.instagram.com/_.faisal_._",
    icon: Instagram,
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left text-gray-700 dark:text-gray-300">
          <p className="flex items-center gap-1 text-sm">
            <Code className="w-4 h-4" /> Built with ❤️ by{" "}
            <span className="font-semibold ml-1">Faisal Husain Shaikh</span>
          </p>
          <p className="text-xs mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
