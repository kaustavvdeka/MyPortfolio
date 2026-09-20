import { useRef } from "react";
import "../components/styles/Career.css";
import { motion, useScroll, useTransform } from "motion/react";

const educationJourney = [
  {
    index: "01",
    period: "2023 – 2027",
    status: "Currently Pursuing",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Triguna Sen School of Technology, Assam University",
    scoreBadge: "UG Engineering Degree",
    description:
      "Specializing in Software Architecture, Artificial Intelligence, Computer Vision, and 3D WebGL Graphics. Conducting research on machine learning deployment and deep learning vision systems for regional applications.",
    coursework: ["Data Structures & Algorithms", "Deep Learning & AI", "Computer Vision", "Database Management", "Operating Systems", "Web Technologies"],
    icon: (
      <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    align: "right",
  },
  {
    index: "02",
    period: "2020 – 2022",
    status: "Completed with Distinction",
    degree: "Higher Secondary (Science Stream)",
    institution: "Aryabhatta Junior Science College",
    scoreBadge: "85.2% Board Distinction",
    description:
      "Comprehensive core scientific curriculum with focus on Advanced Mathematics, Physics, and Chemistry. Developed strong analytical, mathematical modeling, and problem-solving foundations.",
    coursework: ["Advanced Mathematics", "Physics Mechanics & Modern Physics", "Physical & Organic Chemistry", "Scientific Computing"],
    icon: (
      <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    align: "left",
  },
  {
    index: "03",
    period: "2015 – 2020",
    status: "Completed with High Merit",
    degree: "Secondary High School (Matriculation)",
    institution: "Sarabari High School",
    scoreBadge: "81.33% Secondary Merit",
    description:
      "Graduated secondary education with academic distinction in General Science and Mathematics, laying the groundwork for engineering sciences and computational thinking.",
    coursework: ["General Mathematics", "Physical Sciences", "Computer Literacy", "Social & Environmental Sciences"],
    icon: (
      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    align: "right",
  },
];

function MilestoneCard({ item }) {
  const cardRef = useRef(null);

  // Scroll transition: maps from 30deg down to 0deg as the element enters and centers in the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 1],
    [item.align === "left" ? 8 : -8, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div
      ref={cardRef}
      className={`relative w-full my-8 lg:my-14 flex items-center ${
        item.align === "left" ? "lg:justify-start" : "lg:justify-end"
      }`}
      style={{ perspective: 1200 }}
    >
      {/* 3D Scroll-Rotating Milestone Card (30° -> 0°) */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
        }}
        className="w-full lg:w-[46%] pl-12 lg:pl-0"
      >
        <div className="milestone-3d-card group cursor-pointer">
          {/* Cyber Corner Crosshairs */}
          <div className="cyber-corner-tl" />
          <div className="cyber-corner-tr" />
          <div className="cyber-corner-bl" />
          <div className="cyber-corner-br" />

          {/* Top Header: Period, Status, & Score Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4" style={{ transform: "translateZ(25px)" }}>
            <span className="font-mono text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              {item.period}
            </span>
            <span className="text-xs px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-semibold tracking-wide uppercase shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              {item.scoreBadge}
            </span>
          </div>

          {/* Degree & Institution */}
          <div className="space-y-1 mb-3" style={{ transform: "translateZ(20px)" }}>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {item.degree}
            </h3>
            <h4 className="text-sm font-semibold text-cyan-400/90 tracking-wide">
              {item.institution}
            </h4>
          </div>

          {/* Description */}
          <p className="text-sm font-light text-neutral-300 leading-relaxed mb-5" style={{ transform: "translateZ(15px)" }}>
            {item.description}
          </p>

          {/* Coursework & Domain Chips */}
          <div className="pt-4 border-t border-white/[0.08]" style={{ transform: "translateZ(15px)" }}>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              Key Focus & Disciplines
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.coursework.map((course) => (
                <span
                  key={course}
                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-neutral-300 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-all duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Center Node with Scroll Rotation Icon */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          scale,
        }}
        className="timeline-center-node"
      >
        {item.icon}
      </motion.div>
    </div>
  );
}

const Career = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="career-section c-space section-spacing scroll-mt-24" id="career" ref={containerRef}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="career-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-400 tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Academic Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education <span>&</span> Journey
          </h2>
          <p className="subtext mt-2 max-w-xl">
            A chronological timeline of academic milestones, computer science engineering studies, and scientific achievements.
          </p>
        </motion.div>

        {/* Dynamic Vertical Timeline Track */}
        <div className="relative w-full">
          {/* Timeline background rail */}
          <div className="career-timeline-line" />

          {/* Animated Glowing Fill Line mapped to scroll */}
          <motion.div
            style={{ scaleY }}
            className="career-timeline-line !bg-gradient-to-b !from-cyan-400 !via-indigo-400 !to-purple-500 !opacity-100 shadow-[0_0_12px_#38bdf8]"
          />

          {/* Milestone Cards with 30° -> 0° 3D Scroll Rotation Transition */}
          {educationJourney.map((item) => (
            <MilestoneCard key={item.index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
