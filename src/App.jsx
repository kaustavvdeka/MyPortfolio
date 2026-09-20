import React from "react";
import Navbar from "./section/NavBar";
import Hero from "./section/Hero";
import WhatIDo from "./section/WhatIDo";
import Work from "./section/Work";
import TechStack from "./section/TechStack";
import Career from "./section/Career";
import About from "./section/About";
import { LoadingProvider } from "./context/LoadingContext";
import { CosmicBackground3D } from "./components/CosmicBackground3D";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { GlowCursor } from "./components/GlowCursor";

const App = () => {
  return (
    <LoadingProvider>
      {/* Top Scroll Indicator */}
      <ScrollProgressBar />

      {/* Interactive Ambient Cursor Glow */}
      <GlowCursor />

      {/* Continuous 3D Moving Objects Background */}
      <CosmicBackground3D />

      {/* Main Content Sections */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <WhatIDo />
        <Work />
        <TechStack />
        <Career />
        <About />
      </div>
    </LoadingProvider>
  );
};

export default App;