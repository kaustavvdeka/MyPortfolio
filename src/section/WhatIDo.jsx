import { useRef } from "react";
import "../components/styles/WhatIDo.css";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useMediaQuery } from "react-responsive";

const services = [
  {
    index: "01",
    badge: "Interactive UI",
    title: "Frontend & 3D Web",
    subtitle: "Modern Web Interfaces",
    description:
      "Crafting immersive, high-performance web applications using React, Next.js, and Three.js WebGL. Focused on responsive architectures, smooth 60fps micro-animations, and cutting-edge visual fidelity.",
    tags: ["React.js", "Next.js", "Three.js", "TypeScript", "Tailwind CSS", "WebGL", "Framer Motion"],
    iconColor: "from-cyan-400 to-blue-500",
    glowColor: "rgba(56, 189, 248, 0.3)",
    accentText: "text-cyan-400",
    alignTilt: -6,
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    index: "02",
    badge: "Scalable Systems",
    title: "Backend Architecture",
    subtitle: "Robust Server Infrastructure",
    description:
      "Designing scalable server-side systems, REST APIs, and database pipelines using Node.js, Express, C#, and .NET Core. Emphasizing high throughput, resilient data flows, and secure authentication.",
    tags: ["Node.js", "Express.js", "C# / .NET", "MongoDB", "MySQL", "REST APIs", "EF Core"],
    iconColor: "from-purple-400 to-indigo-500",
    glowColor: "rgba(168, 85, 247, 0.3)",
    accentText: "text-purple-400",
    alignTilt: 0,
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    ),
  },
  {
    index: "03",
    badge: "Machine Intelligence",
    title: "AI & Machine Learning",
    subtitle: "Computer Vision & Deep Learning",
    description:
      "Developing intelligent machine learning systems, deep learning computer vision pipelines, and predictive analytics platforms. Experienced with YOLO object detection, MobileNetV2 transfer learning, Scikit-learn, and Streamlit AI deployment.",
    tags: ["Python", "TensorFlow", "Keras", "YOLOv8/v11", "OpenCV", "Scikit-Learn", "FastAPI", "Streamlit"],
    iconColor: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52, 211, 153, 0.3)",
    accentText: "text-emerald-400",
    alignTilt: 6,
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Scroll transition: 30° -> 0° rotation as the card enters the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [isDesktop ? 24 : 8, 0]);
  const scrollRotateZ = useTransform(
    scrollYProgress,
    [0, 1],
    [isDesktop ? service.alignTilt : 0, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 150 });
  const mouseRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 150 });

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);

    cardRef.current.style.setProperty("--mouse-x", `${(x + 0.5) * 100}%`);
    cardRef.current.style.setProperty("--mouse-y", `${(y + 0.5) * 100}%`);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div ref={cardRef} style={{ perspective: 1200 }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: scrollRotateX,
          rotateY: mouseRotateY,
          rotateZ: scrollRotateZ,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
        }}
        className="whatido-card group cursor-pointer"
      >
        {/* Cyber Corner Accents */}
        <div className="cyber-corner-tl" />
        <div className="cyber-corner-tr" />
        <div className="cyber-corner-bl" />
        <div className="cyber-corner-br" />

        {/* Top Row: Number & Icon */}
        <div className="flex items-center justify-between mb-6" style={{ transform: "translateZ(30px)" }}>
          <span className="font-mono text-3xl font-black text-neutral-600 group-hover:text-cyan-400 transition-colors duration-300">
            {service.index}
          </span>

          {/* 3D Glowing Icon Container */}
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.iconColor} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            style={{ boxShadow: `0 0 20px ${service.glowColor}` }}
          >
            <div className="w-full h-full bg-[#080c24] rounded-[14px] flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {service.iconPath}
              </svg>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div style={{ transform: "translateZ(25px)" }}>
          <div className="inline-block px-3 py-1 mb-2 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold text-neutral-400 uppercase tracking-widest">
            {service.badge}
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mt-1">
            {service.title}
          </h3>
          <h4 className={`text-xs font-semibold ${service.accentText} uppercase tracking-wider mt-1 mb-3`}>
            {service.subtitle}
          </h4>
          <p className="text-sm font-light text-neutral-400 leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        {/* Skill Tags */}
        <div className="pt-4 border-t border-white/[0.08]" style={{ transform: "translateZ(20px)" }}>
          <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mb-2.5">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-neutral-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 group-hover:text-cyan-200 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const WhatIDo = () => {
  return (
    <section id="whatido" className="relative c-space section-spacing scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header with Stagger Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-400 tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          What I <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Do</span>
        </h2>
        <p className="subtext mt-3 max-w-2xl">
          Transforming complex computational concepts into intuitive, high-performance web products, AI & Computer Vision systems, and modern full-stack architectures.
        </p>
      </motion.div>

      {/* 3D Interactive Services Grid */}
      <div className="whatido-grid">
        {services.map((service, index) => (
          <ServiceCard key={service.index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
