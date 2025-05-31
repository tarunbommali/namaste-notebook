/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiHomeLine, RiMenuUnfold3Fill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../hook/useTheme";
import { Bookmark } from "lucide-react";

const navMenu = [
  {
    id: "home",
    text: "Home",
    path: "/",
    icon: RiHomeLine,
  },
  {
    id: "bookmarks",
    path: "/bookmarks",
    text: "Bookmarks",
    icon: Bookmark,
  },
];

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const themeStyles = useTheme();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${themeStyles.headerBGColor} shadow-sm`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span
              className={`text-2xl font-semibold ${themeStyles.textColor} transition-transform group-hover:scale-105`}
            >
              Namaste Notebook
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="flex items-center space-x-3">
            {/* Home and Bookmarks links */}
            {navMenu.map(({ id, text, path, icon: Icon }) => (
              <Link
                key={id}
                to={path}
                className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg 
                  ${themeStyles.btn.textPrimary} ${themeStyles.btn.hover} transition-all duration-300`}
              >
                <Icon size={18} />
                <span className="font-medium">{text}</span>
              </Link>
            ))}

            {/* GitHub */}
            <a
              href="https://github.com/tarunbommali/namaste-notebook"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg 
                ${themeStyles.btn.textPrimary} ${themeStyles.btn.hover} transition-all duration-300`}
              aria-label="GitHub"
            >
              <BsGithub size={20} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg 
                ${themeStyles.btn.textPrimary} ${themeStyles.btn.hover} transition-all duration-300`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg 
                ${themeStyles.btn.textPrimary} ${themeStyles.btn.hover} transition-all duration-300`}
              aria-label="Toggle menu"
            >
              <RiMenuUnfold3Fill
                size={22}
                className={`transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-2 border-t ${themeStyles.border} pt-3 space-y-2`}
          >
            <Link
              to="/"
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg 
                ${themeStyles.btn.textPrimary} ${themeStyles.btn.hover} transition-all duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <RiHomeLine size={18} />
              <span>Home</span>
            </Link>

            <a
              href="https://github.com/tarunbommali/namaste-notebook"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg 
                ${themeStyles.btn.textPrimary} ${themeStyles.btn.hover} transition-all duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <BsGithub size={18} />
              <span>GitHub</span>
            </a>
          </div>
        )}
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-40" />
    </header>
  );
};

export default Header;
