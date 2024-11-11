import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>
      Basculer en mode {theme === "light" ? "sombre" : "clair"}
    </button>
  );
};

export default ThemeToggle;
