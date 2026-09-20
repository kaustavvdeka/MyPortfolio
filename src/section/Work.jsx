import { useState, useRef } from "react";
import "../components/styles/Work.css";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";

const marqueeKeywordsTop = [
  "✦ AirMind AI Smart City",
  "✦ TrafficVision AI Real-Time YOLO",
  "✦ CropGuard NE Deep Learning",
  "✦ SIKHYAN EdTech Platform",
  "✦ IITG ML & Data Science",
  "✦ React 19 & Next.js",
  "✦ FastAPI & Python AI",
  "✦ Three.js 3D WebGL",
  "✦ AirMind AI Smart City",
  "✦ TrafficVision AI Real-Time YOLO",
  "✦ CropGuard NE Deep Learning",
  "✦ SIKHYAN EdTech Platform",
  "✦ IITG ML & Data Science",
  "✦ React 19 & Next.js",
  "✦ FastAPI & Python AI",
  "✦ Three.js 3D WebGL",
];

const marqueeKeywordsBottom = [
  "⚡ Real-Time AQI 24h/72h Forecasting",
  "⚡ Kalman-Filter Vehicle Tracking",
  "⚡ 38-Class Plant Disease MobileNetV2",
  "⚡ Interactive EdTech Learning Hub",
  "⚡ Streamlit Model Deployment",
  "⚡ Geospatial Pollution Heatmaps",
  "⚡ Road Occupancy % Analytics",
  "⚡ Vercel Edge Performance",
  "⚡ Real-Time AQI 24h/72h Forecasting",
  "⚡ Kalman-Filter Vehicle Tracking",
  "⚡ 38-Class Plant Disease MobileNetV2",
  "⚡ Interactive EdTech Learning Hub",
  "⚡ Streamlit Model Deployment",
  "⚡ Geospatial Pollution Heatmaps",
  "⚡ Road Occupancy % Analytics",
  "⚡ Vercel Edge Performance",
];

const projects = [
  {
    id: "01",
    title: "AirMind AI",
    category: "AI / Smart City / Environmental Intelligence",
    badge: "Live Production • Smart City",
    architecture: "React → FastAPI → Scikit-Learn ML → MongoDB Atlas → OpenWeather",
    tickerHighlights: [
      "Real-Time AQI Monitoring",
      "24h & 72h Predictive Forecast",
      "Geospatial Pollution Heatmaps",
      "Health Recommendation Engine",
      "Sensor Network Telemetry",
      "PM2.5 / PM10 / NO2 Analytics",
    ],
    description:
      "An AI-powered smart-city platform that combines real-time environmental data, machine-learning-based AQI prediction, geospatial pollution visualization, historical analytics, and health recommendations. Built with React, FastAPI, Scikit-learn, MongoDB Atlas, and OpenWeather APIs.",
    tools: ["React", "Vite", "FastAPI", "Python", "Scikit-learn", "MongoDB Atlas", "OpenWeather API", "Pandas", "React Leaflet"],
    image: "/images/airmind_ai.jpg",
    liveUrl: "https://aqi-air-mind-main.vercel.app/",
    githubUrl: "https://github.com/kaustavvdeka",
  },
  {
    id: "02",
    title: "TrafficVision AI",
    category: "Computer Vision / Intelligent Transportation",
    badge: "Real-Time Vision AI",
    architecture: "Camera / RTSP → OpenCV → YOLO Detection → Kalman Tracking → SQLite ORM",
    tickerHighlights: [
      "Live RTSP & Webcam Stream",
      "Kalman-Filter Persistent Tracking",
      "Road Occupancy % Calculation",
      "Traffic Congestion Heatmaps",
      "Multi-Class Vehicle Detection",
      "CSV / JSON Export Analytics",
    ],
    description:
      "A computer-vision-based intelligent transportation system that detects, tracks, and classifies vehicles from live cameras, RTSP streams, images, and videos. Calculates road occupancy, analyzes congestion patterns, generates heatmaps, and logs historical analytics with YOLO, OpenCV, and Streamlit.",
    tools: ["Python", "YOLOv8 / YOLOv11", "OpenCV", "ByteTrack", "Streamlit", "SQLAlchemy", "SQLite", "Plotly", "SciPy"],
    image: "/images/trafficvision_ai.jpg",
    liveUrl: "https://github.com/kaustavvdeka",
    githubUrl: "https://github.com/kaustavvdeka",
  },
  {
    id: "03",
    title: "CropGuard NE",
    category: "AI / Agriculture / Computer Vision",
    badge: "38-Class Deep Learning",
    architecture: "Input Leaf Image → MobileNetV2 Pretrained → Dense Layer Softmax → 38 Diseases",
    tickerHighlights: [
      "38 Plant Disease Classes",
      "MobileNetV2 Transfer Learning",
      "Northeast India Agricultural Context",
      "Confusion Matrix Evaluation",
      "Sub-Second Leaf Diagnosis",
      "Streamlit Cloud Interface",
    ],
    description:
      "An AI-powered plant disease detection system tailored with a Northeast India agricultural focus. Uses transfer learning with MobileNetV2 on ~87,000 images across 38 disease classes to classify plant diseases from leaf photos with regional agronomy context.",
    tools: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Streamlit", "PlantVillage", "NumPy", "Pillow"],
    image: "/images/cropguard_ne.jpg",
    liveUrl: "https://github.com/kaustavvdeka",
    githubUrl: "https://github.com/kaustavvdeka",
  },
  {
    id: "04",
    title: "SIKHYAN",
    category: "EdTech / Web Platform",
    badge: "Live Platform • EdTech",
    architecture: "React.js Frontend → Component System → Vercel Edge CDN Deployment",
    tickerHighlights: [
      "Centralized Learning Hub",
      "Interactive Student Portal",
      "Modular Course Progress Trackers",
      "Live Digital Lecture Stream",
      "Interactive Code Playground",
      "Edge CDN Optimized",
    ],
    description:
      "A modern EdTech web platform focused on improving the digital learning experience through an interactive, centralized, and student-oriented interface. Features responsive modular learning flows and code study playgrounds.",
    tools: ["React", "JavaScript", "Vercel", "Tailwind CSS", "Responsive UI", "REST APIs"],
    image: "/images/sikhyan.jpg",
    liveUrl: "https://emon-frontend.vercel.app/",
    githubUrl: "https://github.com/kaustavvdeka",
  },
  {
    id: "05",
    title: "IITG ML Project",
    category: "Machine Learning / Data Science",
    badge: "Live ML Application",
    architecture: "Dataset Ingestion → Feature Engineering → Scikit-Learn Model → Streamlit Cloud",
    tickerHighlights: [
      "Interactive Model Experimentation",
      "ROC & Precision-Recall Curves",
      "Confusion Matrix Heatmaps",
      "Feature Importance Visuals",
      "Live Prediction Input Simulator",
      "Data Science Telemetry",
    ],
    description:
      "An interactive machine-learning application developed with Python and Streamlit, providing a web-based interface for ML model experimentation, prediction, ROC performance curve evaluation, and data science visualization.",
    tools: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly", "NumPy"],
    image: "/images/iitg_ml.jpg",
    liveUrl: "https://iitgmlproject-dmevyx8gbj34vvdy87rhyz.streamlit.app/",
    githubUrl: "https://github.com/kaustavvdeka",
  },
];

function ShowcaseStage({ project }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 20, stiffness: 140 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 20, stiffness: 140 });

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="project-showcase-card relative w-full"
    >
      {/* Project Highlight Ticker Tape */}
      <div className="mb-6 pb-3.5 border-b border-white/[0.08] marquee-band-container">
        <div className="marquee-track-fast">
          {project.tickerHighlights.concat(project.tickerHighlights, project.tickerHighlights).map((item, idx) => (
            <span key={idx} className="marquee-pill-ghost">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4" style={{ transform: "translateZ(30px)" }}>
          <div>
            {/* Top Index & Badge */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-cyan-400 tracking-wider">
                {project.id}
              </span>
              <span className="text-[11px] px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-semibold tracking-wide uppercase shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                {project.badge}
              </span>
            </div>

            {/* Title & Category */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mt-1 mb-3">
              {project.category}
            </p>

            {/* Architecture Path */}
            <div className="mb-3 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold block mb-0.5">Architecture Flow</span>
              <span className="text-xs font-mono text-neutral-300">{project.architecture}</span>
            </div>

            {/* Description */}
            <p className="text-sm font-light text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              Key Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-neutral-300 font-medium hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons: Live Demo + GitHub */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/25 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/50 hover:border-cyan-300 text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Live Project</span>
                <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] text-neutral-300 hover:text-white font-medium text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:scale-105 active:scale-95"
            >
              <span>GitHub</span>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Media Frame */}
        <div className="lg:col-span-7" style={{ transform: "translateZ(40px)" }}>
          <div className="project-media-frame">
            <img src={project.image} alt={project.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02030a]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="relative c-space section-spacing scroll-mt-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header with Navigation Controls */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-400 tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="subtext mt-2 max-w-xl">
            A showcase of AI smart-city platforms, real-time computer vision systems, deep learning agriculture diagnostics, and EdTech web applications.
          </p>
        </div>

        {/* Prev / Next Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/50 text-white hover:text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/50 text-white hover:text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Next project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Dual-Directional Moving Marquee Tag Bands */}
      <div className="mb-8 space-y-2.5">
        {/* Track 1: Moving Left */}
        <div className="marquee-band-container">
          <div className="marquee-track-left">
            {marqueeKeywordsTop.map((text, idx) => (
              <span key={idx} className="marquee-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Track 2: Moving Right */}
        <div className="marquee-band-container">
          <div className="marquee-track-right">
            {marqueeKeywordsBottom.map((text, idx) => (
              <span key={idx} className="marquee-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main 3D Project Showcase Stage with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[activeIndex].id}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <ShowcaseStage project={projects[activeIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Interactive Project Selector Thumbnails */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            onClick={() => setActiveIndex(idx)}
            className={`project-thumb flex items-center gap-2.5 ${
              idx === activeIndex ? "project-thumb-active" : ""
            }`}
          >
            <span className="font-mono text-xs font-bold text-cyan-400">{proj.id}</span>
            <span className="text-xs font-medium text-neutral-300 truncate">{proj.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
