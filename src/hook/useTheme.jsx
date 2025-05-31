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

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    light: {

      bgColor: "bg-background-light",
      textColor: "text-gray-900",
      cardBg: "bg-white",
      cardBorder: "border border-gray-300",
      headingColor: "text-blue-700",
      mutedText: "text-gray-500",
      highlightText: "text-yellow-500",
      hoverBg: "hover:bg-gray-100",
      btn: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
      },
      background: "bg-background-light",
      textPrimary: "text-text-light-primary",
      textSecondary: "text-text-light-secondary",
      textTertiary: "text-text-light-tertiary",
      border: "border-border-light",
      card: "bg-card-light",
      hover: "hover:bg-hover-light",
      accent: "bg-accent-light",
      accentForeground: "text-accent-foreground-light",
    },
    dark: {
      headerBGColor:"#030712",
      bgColor: "#030712",
      textColor: "text-white",
      cardBg: "bg-card-dark",
      cardBorder: "border border-gray-700",
      headingColor: "text-blue-400",
      mutedText: "text-gray-400",
      highlightText: "text-yellow-500",
      hoverBg: "hover:bg-gray-700",
      btn: {
        primary: "bg-blue-500 text-white hover:bg-blue-400",
        background: "bg-background-dark",
        textPrimary: "text-text-dark-primary",
        textSecondary: "text-text-dark-secondary",
        textTertiary: "text-text-dark-tertiary",
        border: "border-border-dark",
        card: "bg-card-dark",
        hover: "hover:bg-hover-dark",
        accent: "bg-accent-dark",
        accentForeground: "text-accent-foreground-dark",
      },
    },
  };

  return themeStyles[theme]; // for styles
};
