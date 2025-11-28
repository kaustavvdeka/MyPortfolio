import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
       <div className="flex items-end grid-default-color grid-1">
         <img
       src="assets/coding-pov.png"
       className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
        />

  {/* TEXT CONTENT */}
         <div className="z-10 space-y-3">
    {/* Interactive typing text */}
             <p className="headtext">
             <span className="text-indigo-400">Hi, I'm Kaustav —</span>{" "}
             <span className="typing-text">a Creative Developer</span>
             </p>

            <p className="subtext max-w-md">
            I specialize in building smooth, modern, and interactive web experiences.
            My work focuses on frontend, backend, and 3D web development using the
            latest technologies.
            </p>
     </div>

     <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo" />
</div>
{/* Grid 2 */}
<div className="grid-default-color grid-2">
  <div
    ref={grid2Container}
    className="relative flex items-center justify-center w-full h-full"
  >
    {/* INTERACTIVE TEXT */}
    <p className="flex items-end text-5xl font-semibold text-indigo-400 typing-title">
      BUILD • BREAK • INNOVATE
    </p>

    {/* Cards (unchanged positions, only text updated) */}
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

        {/* Grid 3 */}
<div className="grid-black-color grid-3 relative overflow-hidden">
  <div className="z-10 w-[50%] space-y-3">

    {/* INTERACTIVE TITLE */}
    <p className="headtext interactive-title">
      Time Zone & Availability
    </p>

    {/* INTERACTIVE SUB TEXT */}
    <p className="subtext floating-text">
      Currently orbiting <span className="text-red-400 font-semibold">Mars</span>.
      Open to remote work across the Solar System.
    </p>

  </div>

  {/* FLOATING GLOBE */}
  <figure className="absolute left-[30%] top-[10%] animate-globe-float">
    <Globe />
  </figure>
</div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
                    {/* Grid 5 */}
                <div className="grid-default-color grid-5 relative overflow-hidden">
            <div className="z-10 w-[50%] space-y-3">

                {/* INTERACTIVE TITLE */}
                <p className="headText interactive-stack-title">
                Tech Stack
                </p>

                {/* INTERACTIVE SUBTEXT */}
                <p className="subtext interactive-stack-sub">
                I work across a modern ecosystem of
                <span className="highlighted-word"> languages</span>,
                <span className="highlighted-word"> frameworks</span>,
                and powerful <span className="highlighted-word">developer tools</span>
                to build fast, scalable, and efficient applications.
                </p>

            </div>

            {/* Frameworks Globe */}
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 animate-tech-float">
                <Frameworks />
            </div>
            </div>

      </div>
    </section>
  );
};

export default About;