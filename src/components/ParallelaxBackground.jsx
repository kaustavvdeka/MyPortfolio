import { motion, useScroll, useSpring, useTransform } from "motion/react";

// Importing assets
import sky from "../assets/sky.jpg";
import mountain3 from "../assets/mountain-3.png";
import planets from "../assets/planets.png";
import mountain2 from "../assets/mountain-2.png";
import mountain1 from "../assets/mountain-1.png";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 40, stiffness: 90 });

  const mountain3Y = useTransform(smoothProgress, [0, 0.5], ["0%", "50%"]);
  const planetsX = useTransform(smoothProgress, [0, 0.5], ["0%", "-18%"]);
  const planetsY = useTransform(smoothProgress, [0, 0.5], ["0%", "15%"]);
  const mountain2Y = useTransform(smoothProgress, [0, 0.5], ["0%", "25%"]);
  const mountain1Y = useTransform(smoothProgress, [0, 0.5], ["0%", "8%"]);
  const skyOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.6]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Background Sky Layer */}
      <motion.div
        className="absolute inset-0 w-full h-full -z-50"
        style={{
          backgroundImage: `url(${sky})`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          opacity: skyOpacity,
        }}
      />

      {/* Atmospheric Dark Tint & Vignette */}
      <div className="absolute inset-0 -z-45 bg-radial from-transparent via-[#030412]/30 to-[#030412]/85" />

      {/* Mountain Layer 3 (Deepest) */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: `url(${mountain3})`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          y: mountain3Y,
        }}
      />

      {/* Planets Layer */}
      <motion.div
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage: `url(${planets})`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          x: planetsX,
          y: planetsY,
        }}
      />

      {/* Mountain Layer 2 (Mid-ground) */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${mountain2})`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          y: mountain2Y,
        }}
      />

      {/* Mountain Layer 1 (Foreground) */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${mountain1})`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          y: mountain1Y,
        }}
      />

      {/* Bottom Gradient Fade to smoothly blend into About section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030412] via-[#030412]/80 to-transparent z-0" />
    </div>
  );
};

export default ParallaxBackground;
