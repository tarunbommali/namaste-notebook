/* eslint-disable no-unused-vars */
// hooks/useTheme.js
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Load from localStorage or default to light
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply to <html> and save in localStorage
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeStyles = {
    light: {
      bgColor: "bg-background-light",


      textColor: "text-gray-900",
      mutedText: "text-gray-500",
      highlightText: "text-yellow-500",


      card: "bg-card-light",
      cardBG: "bg-[#f2f2f3]",
      cardBorder: "border border-gray-300",


      headingColor: "text-blue-700",
      
      hoverBg: "hover:bg-gray-100",
      btn: {
        primary: "bg-blue-600 text-white hover:bg-blue-700", // bright blue button with hover
        background: "bg-white", // light background
        textPrimary: "text-gray-900", // dark text primary
        textSecondary: "text-gray-600", // medium gray secondary text
        textTertiary: "text-gray-400", // light gray tertiary text
        border: "border-gray-300", // light border color
        card: "bg-white", // white card background
        hover: "hover:bg-gray-100", // subtle light hover effect
        accent: "bg-blue-500", // accent with blue
        accentForeground: "text-white", // white text on accent
      },
      
    },
    dark: {
      headerBGColor: "bg-[#030712]",
      bgColor: "bg-black",


      textColor: "text-white",
      mutedText: "text-gray-400",
      highlightText: "text-yellow-500",

      card: "bg-card-dark",
      cardBG: "bg-black",
      cardBorder: "border border-[#99a1af]",


      headingColor: "text-blue-400",
      hoverBg: "hover:bg-gray-700",
      border: "border-border-dark",

      btn: {
        primary: "bg-blue-500 text-white hover:bg-blue-400",
        background: "bg-background-dark",
        textPrimary: "text-text-dark-primary",
        textSecondary: "text-text-dark-secondary",
        textTertiary: "text-text-dark-tertiary",
        border: "border-border-dark",
        hover: "hover:bg-hover-dark",
        accent: "bg-accent-dark",
        accentForeground: "text-accent-foreground-dark",
      },
    },
  };

  return themeStyles[theme]; // for styles
};
