import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

export const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative p-2 rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer ${
        isDark
          ? "bg-[#080c24]/90 border-cyan-500/40 text-cyan-300 hover:border-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
          : "bg-[#10163a]/90 border-purple-400/50 text-purple-300 hover:border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
      } ${className}`}
      aria-label="Toggle Cosmic Atmosphere"
      title={isDark ? "Switch to Cosmic Nebula Atmosphere" : "Switch to Deep Space Atmosphere"}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? (
          // Moon icon with cyan glow
          <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          // Sun icon with golden glow
          <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
};
