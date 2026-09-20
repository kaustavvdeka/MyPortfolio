import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 origin-left z-50 shadow-[0_0_12px_#38bdf8]"
    />
  );
};
