import { useState, useRef } from "react";
import { TechStack3D, techSkills } from "../components/TechStack3D";
import { motion, useScroll, useTransform } from "motion/react";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & Systems" },
  { id: "3d", label: "3D & Creative" },
  { id: "tools", label: "Tools & DevOps" },
];

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  // Scroll transition: 30° -> 0° rotation as the section enters the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section id="techstack" ref={sectionRef} className="relative c-space section-spacing scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-xs font-semibold text-cyan-400 tracking-widest uppercase shadow-[0_0_12px_rgba(6,182,212,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>⚡ Interactive Universe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="subtext mt-2 max-w-lg">
            A comprehensive suite of modern frameworks, 3D WebGL libraries, AI/ML tools, and scalable backend technologies I build with.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  : "bg-white/[0.03] text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 3D Scroll Rotation Wrapper (30° -> 0°) */}
      <div style={{ perspective: 1200 }}>
        <motion.div
          style={{
            rotateX,
            scale,
            opacity,
            y,
            transformStyle: "preserve-3d",
          }}
        >
          {/* 3D Interactive Physics Tech Canvas */}
          <TechStack3D activeFilter={activeFilter} />

          {/* Quick Skill Badges Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {techSkills
              .filter((skill) => activeFilter === "all" || skill.category === activeFilter)
              .map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group backdrop-blur-sm"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-5 h-5 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all"
                  />
                  <span className="text-xs font-medium text-neutral-300 group-hover:text-white truncate">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
