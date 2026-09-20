import React, { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export const GlowCursor = () => {
  const [visible, setVisible] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Only enable on pointer-supported devices (non-touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveHandler = (e) => {
      cursorX.set(e.clientX - 160);
      cursorY.set(e.clientY - 160);
      if (!visible) setVisible(true);
    };

    const leaveHandler = () => setVisible(false);
    const enterHandler = () => setVisible(true);

    window.addEventListener("mousemove", moveHandler, { passive: true });
    document.addEventListener("mouseleave", leaveHandler);
    document.addEventListener("mouseenter", enterHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseleave", leaveHandler);
      document.removeEventListener("mouseenter", enterHandler);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="fixed top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-[80px] pointer-events-none z-10 transition-opacity duration-300"
    />
  );
};
