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

  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

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
    icon: "🔬",
    title: "Theory + Experimentation + Code",
    desc: "Bridging algorithmic theory and first principles with rapid prototyping and production deployment.",
  },
  {
    icon: "🏛️",
    title: "Core CS Fundamentals",
    desc: "Grounded in DSA, DBMS, Operating Systems, Computer Networks, Compiler Design, and Computation Theory.",
  },
  {
    icon: "🧠",
    title: "Neural & Vision Mastery",
    desc: "Exploring the mathematics behind deep neural architectures, YOLO detection, and transfer learning.",
  },
  {
    icon: "🛡️",
    title: "Full-Stack Craftsmanship",
    desc: "Writing modular, scalable, and resilient systems across frontend, backend, APIs, and databases.",
  },
];

const highlights = [
  { label: "Institution", value: "Assam University, Silchar", icon: "🏛️" },
  { label: "Core Focus", value: "AI, Vision & Full-Stack", icon: "🧠" },
  { label: "CS Fundamentals", value: "DSA, OS, DBMS & Systems", icon: "🔬" },
  { label: "Mindset", value: "Curious, Adaptable & Impact-Driven", icon: "⚡" },
];

const techBadges = [
  "Python",
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "FastAPI",
  "TensorFlow",
  "Keras",
  "OpenCV",
  "Scikit-learn",
  "MongoDB",
  "SQL",
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
          <span>Profile & Technical Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          About <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="subtext mt-2 max-w-xl">
          A deeper insight into my computer science journey, artificial intelligence research, full-stack craftsmanship, and engineering mindset.
        </p>
      </motion.div>

      {/* Modern Unified Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mt-8">
        {/* Card 1: Comprehensive Bio & Engineering Narrative (4 Cols on MD) */}
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
                <span>⚡ CSE Undergrad • Assam University, Silchar</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Engineering at the Confluence of{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  AI, Vision & Scalable Systems
                </span>
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-4">
                I am a <strong>Computer Science & Engineering undergraduate at Assam University, Silchar</strong>, deeply fascinated by how technology functions from mathematical first principles up to high-throughput production architectures. I specialize in <strong>Artificial Intelligence, Machine Learning, Computer Vision, Full-Stack Development, and Software Engineering</strong>.
              </p>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-4">
                My technical foundation spans <strong>Python, C++, JavaScript, React, Node.js, Express.js, Next.js, FastAPI, MongoDB, SQL, TensorFlow, Keras, Scikit-learn, and OpenCV</strong>. I thrive working across the entire development spectrum—architecting responsive, 60fps user interfaces, engineering resilient backend microservices, managing databases, and integrating intelligent vision models into production.
              </p>

              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                In <strong>Deep Learning & Vision AI</strong>, I actively investigate neural networks, YOLO object detection, transfer learning, and image classification—not merely utilizing pre-built models, but mastering the mathematical rigor, loss optimization, and feature dynamics beneath them.
              </p>
            </div>

            {/* Core Tech Stack Micro-Chips */}
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mb-2.5">
                Core Technologies & Tools
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Key Attributes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/[0.08]">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mb-1">
                    <span>{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </div>
                  <p className="text-xs font-bold text-cyan-300 truncate">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Engineering Philosophy & CS Foundations (2 Cols on MD) */}
        <BentoCard className="md:col-span-2">
          <div className="relative p-7 sm:p-8 rounded-2xl bg-[#080c24]/90 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full group">
            {/* Cyber Corner Crosshairs */}
            <div className="cyber-corner-tl" />
            <div className="cyber-corner-tr" />
            <div className="cyber-corner-bl" />
            <div className="cyber-corner-br" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-950/30 text-[11px] font-semibold text-purple-300 uppercase tracking-widest">
                <span>💡 CS Foundations & Method</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-5">
                Core Philosophy
              </h3>

              <div className="space-y-3.5">
                {philosophies.map((phil) => (
                  <div
                    key={phil.title}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group/item"
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

            {/* Core CS Domains Footer */}
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <p className="text-[10px] uppercase tracking-wider text-purple-300 font-semibold mb-1">
                Core CS Domains
              </p>
              <p className="text-[11px] text-neutral-400 font-light leading-snug">
                DSA • OS • DBMS • Computer Networks • Compiler Design • Theory of Computation
              </p>
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
                <span>Global Remote Collaboration</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                Timezone & Availability
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xs leading-relaxed">
                Based in <span className="text-cyan-300 font-medium">Silchar, Assam, India (IST / UTC+5:30)</span>. Adaptable and eager to contribute to forward-thinking distributed engineering teams worldwide.
              </p>
            </div>

            {/* Orbiting Interactive Globe */}
            <div className="absolute -right-10 -bottom-10 sm:-right-16 sm:-bottom-16 w-56 h-56 sm:w-72 sm:h-72 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <Globe />
            </div>

            <div className="relative z-10 pt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-neutral-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>Curious • Adaptable • Problem-Solver</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Professional Interests & Collaboration CTA (3 Cols on MD) */}
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
                Interested in Solving Challenging Problems?
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                Whether deploying deep learning computer vision architectures, developing full-stack software products, or building innovative AI systems with real-world impact, let's create something transformative.
              </p>
            </div>

            {/* Action Buttons: Copy Email + Direct Mail */}
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
