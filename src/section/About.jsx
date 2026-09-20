import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
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

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="relative c-space section-spacing scroll-mt-24" id="about">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

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
          Passionate about building intuitive digital experiences, intelligent software architectures, and clean scalable systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-6">
        {/* Grid 1 */}
        <BentoCard className="md:col-span-4 md:row-span-2">
          <div className="flex items-end grid-default-color grid-1 w-full h-full relative overflow-hidden">
            <img
              src="assets/coding-pov.png"
              alt="Coding POV"
              className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            />

            {/* TEXT CONTENT */}
            <div className="z-10 space-y-3 p-6 sm:p-8" style={{ transform: "translateZ(25px)" }}>
              {/* Interactive typing text */}
              <p className="headtext">
                <span className="text-indigo-400">Hi, I'm Kaustav —</span>{" "}
                <span className="typing-text">a Creative Developer</span>
              </p>

              <p className="subtext max-w-md">
                I specialize in building smooth, modern, and interactive web experiences.
                My work focuses on Frontend, Backend, AI/ML, and 3D WebGL graphics using the
                latest technologies.
              </p>
            </div>

            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#02030a]" />
          </div>
        </BentoCard>

        {/* Grid 2 */}
        <BentoCard className="md:col-span-2 md:row-span-2">
          <div className="grid-default-color grid-2 w-full h-full relative overflow-hidden">
            <div
              ref={grid2Container}
              className="relative flex items-center justify-center w-full h-full"
            >
              {/* INTERACTIVE TEXT */}
              <p className="flex items-end text-3xl sm:text-4xl font-semibold text-indigo-400 typing-title">
                BUILD • BREAK • INNOVATE
              </p>

              {/* Cards */}
              <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text="CLEAN CODE"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="SOLID PRINCIPLES"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="SYSTEM DESIGN"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="ARCHITECTURE"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="OOP MASTERY"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "30deg", top: "70%", left: "70%" }}
                image="assets/logos/csharp-pink.png"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="assets/logos/dotnet-pink.png"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="assets/logos/blazor-pink.png"
                containerRef={grid2Container}
              />
            </div>
          </div>
        </BentoCard>

        {/* Grid 3 */}
        <BentoCard className="md:col-span-3 md:row-span-1">
          <div className="grid-black-color grid-3 relative overflow-hidden w-full h-full">
            <div className="z-10 w-[55%] space-y-3 p-6 sm:p-8" style={{ transform: "translateZ(25px)" }}>
              {/* INTERACTIVE TITLE */}
              <p className="headtext interactive-title text-xl sm:text-2xl font-bold">
                Time Zone & Availability
              </p>

              {/* INTERACTIVE SUB TEXT */}
              <p className="subtext floating-text text-xs sm:text-sm">
                Currently based in <span className="text-cyan-400 font-semibold">India (IST / UTC+5:30)</span>.
                Open to worldwide remote work and global collaborations.
              </p>
            </div>

            {/* FLOATING GLOBE */}
            <figure className="absolute left-[35%] top-[5%] animate-globe-float pointer-events-none">
              <Globe />
            </figure>
          </div>
        </BentoCard>

        {/* Grid 4 */}
        <BentoCard className="md:col-span-3 md:row-span-1">
          <div className="grid-special-color grid-4 w-full h-full relative overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-4 size-full p-6" style={{ transform: "translateZ(25px)" }}>
              <p className="text-center headtext text-xl sm:text-2xl font-bold">
                Do you want to start a project together?
              </p>
              <CopyEmailButton />
            </div>
          </div>
        </BentoCard>

        {/* Grid 5 */}
        <BentoCard className="md:col-span-6 md:row-span-1">
          <div className="grid-default-color grid-5 relative overflow-hidden w-full h-full">
            <div className="z-10 w-[55%] space-y-3 p-6 sm:p-8" style={{ transform: "translateZ(25px)" }}>
              {/* INTERACTIVE TITLE */}
              <p className="headtext interactive-stack-title text-xl sm:text-2xl font-bold">
                Tech Ecosystem
              </p>

              {/* INTERACTIVE SUBTEXT */}
              <p className="subtext interactive-stack-sub text-xs sm:text-sm max-w-lg">
                I work across a modern ecosystem of
                <span className="highlighted-word text-cyan-300"> languages</span>,
                <span className="highlighted-word text-purple-300"> frameworks</span>,
                and powerful <span className="highlighted-word text-emerald-300">AI / developer tools</span>
                {" "}to build fast, scalable, and efficient applications.
              </p>
            </div>

            {/* Frameworks Globe */}
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 animate-tech-float">
              <Frameworks />
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default About;
