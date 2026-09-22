import { FlipWords } from "./Flipword";
import { motion, useScroll, useTransform } from "motion/react";

const HeroText = () => {
  const words = ["Intelligent", "Scalable", "Vision-Driven", "Innovative"];
  const interactiveWords = [
    "Full-Stack Developer",
    "AI & Vision Engineer",
    "Software Engineer",
    "3D Web Specialist",
  ];

  const { scrollYProgress } = useScroll();
  // Smooth scroll transitions: text fades and moves upward gracefully
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96]);

  const variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="z-10 mt-16 md:mt-28 w-full max-w-3xl pointer-events-auto"
    >
      {/* Status Pill */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-xs sm:text-sm text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:border-cyan-400/50 transition-colors max-w-full"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-medium tracking-wide text-pretty">Available for innovative opportunities</span>
      </motion.div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col">
        <motion.h1
          className="text-2xl lg:text-3xl font-light text-neutral-300 tracking-wide"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hello, I'm <span className="font-semibold text-white">Kaustav</span> 👋
        </motion.h1>

        <div className="mt-3 flex flex-col items-start space-y-1">
          <motion.p
            className="text-4xl lg:text-5xl font-extrabold text-neutral-300 tracking-tight leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Engineering Systems
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-3xl lg:text-4xl font-bold text-neutral-400">That Are</span>
            <FlipWords
              words={words}
              className="font-black bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent text-5xl lg:text-6xl drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            />
          </motion.div>

          <motion.p
            className="text-3xl lg:text-4xl font-extrabold text-neutral-200 tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            & Impact-Driven
          </motion.p>
        </div>

        {/* Interactive Tagline */}
        <motion.div
          className="mt-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="text-lg text-neutral-400 flex items-center gap-2">
            <span>Specialized as a</span>
            <FlipWords
              words={interactiveWords}
              className="font-bold text-cyan-400 text-lg"
              duration={2500}
            />
          </div>
          <p className="text-sm text-neutral-500 mt-1 max-w-lg">
            Synthesizing Artificial Intelligence, Computer Vision, and modern Full-Stack engineering to solve complex real-world problems.
          </p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          className="mt-8 flex items-center gap-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <button
            onClick={() => scrollToSection("work")}
            className="cursor-pointer group relative px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/25 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-white font-semibold text-sm border border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] backdrop-blur-xl transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>Explore Work</span>
            <svg
              className="w-4 h-4 text-cyan-300 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer px-6 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] text-neutral-300 hover:text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:scale-105 active:scale-95"
          >
            About Me
          </button>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden space-y-4">
        <motion.p
          className="text-xl font-light text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hello, I'm <span className="font-semibold text-white">Kaustav</span> 👋
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-1"
        >
          <p className="text-3xl font-extrabold text-neutral-200">Building</p>
          <div>
            <FlipWords
              words={words}
              className="font-black bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-4xl"
            />
          </div>
          <p className="text-2xl font-bold text-neutral-300">Digital Solutions</p>
        </motion.div>

        {/* Mobile Tagline */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="text-sm text-neutral-400 flex items-center gap-1.5 flex-wrap">
            <span>Focused on</span>
            <FlipWords
              words={interactiveWords}
              className="font-bold text-cyan-400 text-sm"
              duration={2500}
            />
          </div>
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.9 }}
          className="pt-2 flex items-center gap-3"
        >
          <button
            onClick={() => scrollToSection("work")}
            className="cursor-pointer px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500/25 via-indigo-500/30 to-purple-500/25 border border-cyan-400/50 text-white font-semibold text-xs shadow-[0_0_15px_rgba(56,189,248,0.2)] flex items-center gap-1.5 active:scale-95"
          >
            <span>My Work</span>
            <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer px-4 py-2.5 rounded-lg border border-white/20 bg-white/[0.04] text-neutral-300 text-xs backdrop-blur-md active:scale-95"
          >
            About Me
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroText;