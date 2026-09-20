import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, 20]);

  const handleScrollClick = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
      onClick={handleScrollClick}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
          Scroll to explore
        </span>

        {/* Outer Mouse Pill */}
        <div className="w-6 h-10 rounded-full border-2 border-white/20 group-hover:border-cyan-400/60 p-1 flex justify-center backdrop-blur-md bg-black/30 transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          {/* Animated Scroll Wheel Dot */}
          <motion.div
            animate={{
              y: [0, 14, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
          />
        </div>

        {/* Down Arrow Chevron */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-neutral-400 group-hover:text-cyan-400 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
