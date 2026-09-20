import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { motion, useScroll, useTransform } from "motion/react";

function BentoCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={cardRef} className={className} style={{ perspective: 1200 }}>
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

const philosophies = [
  {
    icon: "🏗️",
    title: "Architecture-First",
    desc: "Designing resilient data flows and modular systems from day one.",
  },
  {
    icon: "⚡",
    title: "60fps Micro-Interactions",
    desc: "Crafting fluid animations with high visual fidelity and low overhead.",
  },
  {
    icon: "🧠",
    title: "Applied AI Solutions",
    desc: "Deploying vision and deep learning models to solve real-world problems.",
  },
  {
    icon: "🛡️",
    title: "Type Safety & Clean Code",
    desc: "Writing maintainable, well-structured, and documented codebases.",
  },
];

const highlights = [
  { label: "Degree", value: "B.Tech CSE '27", icon: "🎓" },
  { label: "Deployed Apps", value: "5+ Live Systems", icon: "🚀" },
  { label: "Specialization", value: "AI, Vision & 3D", icon: "🧠" },
  { label: "Performance", value: "Sub-Second UX", icon: "⚡" },
];

const About = () => {
  return (
    <section className="relative c-space section-spacing scroll-mt-24" id="about">
      {/* Background ambient cosmic lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-400 tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Identity & Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          About <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="subtext mt-2 max-w-xl">
          A deeper look into my engineering principles, creative workflow, and commitment to building intelligent digital products.
        </p>
      </motion.div>

      {/* Modern Unified Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mt-8">
        {/* Card 1: Bio & Engineering Narrative (4 Cols on MD) */}
        <BentoCard className="md:col-span-4">
          <div className="relative p-7 sm:p-9 rounded-2xl bg-[#080c24]/90 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full group">
            {/* Cyber Corner Crosshairs */}
            <div className="cyber-corner-tl" />
            <div className="cyber-corner-tr" />
            <div className="cyber-corner-bl" />
            <div className="cyber-corner-br" />

            <div>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-[11px] font-semibold text-cyan-300 uppercase tracking-widest">
                <span>⚡ Creative Developer & AI/ML Engineer</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Kaustav Mani Deka</span>
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-4">
                I am a Computer Science & Engineering undergrad specializing in building high-performance web applications, 3D WebGL user interfaces, and computer vision systems.
              </p>

              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                From training YOLO & MobileNetV2 models for regional agriculture and smart-city air intelligence, to engineering interactive 3D WebGL experiences with React and Three.js, I thrive at the intersection of computational engineering and design elegance.
              </p>
            </div>

            {/* Quick Metrics / Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/[0.08]">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <p className="text-sm font-bold text-cyan-300 truncate">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Engineering Philosophy & Principles (2 Cols on MD) */}
        <BentoCard className="md:col-span-2">
          <div className="relative p-7 sm:p-8 rounded-2xl bg-[#080c24]/90 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full group">
            {/* Cyber Corner Crosshairs */}
            <div className="cyber-corner-tl" />
            <div className="cyber-corner-tr" />
            <div className="cyber-corner-bl" />
            <div className="cyber-corner-br" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-950/30 text-[11px] font-semibold text-purple-300 uppercase tracking-widest">
                <span>💡 Core Mindset</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-5">
                How I Build
              </h3>

              <div className="space-y-3.5">
                {philosophies.map((phil) => (
                  <div
                    key={phil.title}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group/item"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{phil.icon}</span>
                      <h4 className="text-xs font-bold text-neutral-200 group-hover/item:text-purple-300 transition-colors">
                        {phil.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-neutral-400 font-light leading-snug">
                      {phil.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Timezone & Global Availability (3 Cols on MD) */}
        <BentoCard className="md:col-span-3">
          <div className="relative p-7 sm:p-8 rounded-2xl bg-[#080c24]/90 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full overflow-hidden group min-h-[300px]">
            {/* Cyber Corner Crosshairs */}
            <div className="cyber-corner-tl" />
            <div className="cyber-corner-tr" />
            <div className="cyber-corner-bl" />
            <div className="cyber-corner-br" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-[11px] font-semibold text-emerald-300 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Global Remote Ready</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                Timezone & Availability
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xs leading-relaxed">
                Based in <span className="text-cyan-300 font-medium">Assam, India (IST / UTC+5:30)</span>. Available for remote engineering opportunities and global team collaborations.
              </p>
            </div>

            {/* Orbiting Interactive Globe */}
            <div className="absolute -right-16 -bottom-16 w-72 h-72 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <Globe />
            </div>

            <div className="relative z-10 pt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-neutral-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>Active & Communicative</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Let's Connect / Collaboration CTA (3 Cols on MD) */}
        <BentoCard className="md:col-span-3">
          <div className="relative p-7 sm:p-8 rounded-2xl bg-[#080c24]/90 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full group min-h-[300px]">
            {/* Cyber Corner Crosshairs */}
            <div className="cyber-corner-tl" />
            <div className="cyber-corner-tr" />
            <div className="cyber-corner-bl" />
            <div className="cyber-corner-br" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-[11px] font-semibold text-cyan-300 uppercase tracking-widest">
                <span>🤝 Let's Collaborate</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                Have an Exciting Project in Mind?
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                Whether you need a full-stack web application, an AI/ML pipeline deployment, or an interactive 3D WebGL product, let's create something extraordinary.
              </p>
            </div>

            {/* Action Buttons: Copy Email + Direct Links */}
            <div className="flex flex-wrap items-center gap-3">
              <CopyEmailButton />

              <a
                href="mailto:kaustav.mani.deka@aus.ac.in"
                className="cursor-pointer px-4 py-3.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] text-neutral-300 hover:text-white font-medium text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Direct Mail</span>
                <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default About;
