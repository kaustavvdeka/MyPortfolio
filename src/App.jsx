import React, { useState } from "react";
import Navbar from "./section/NavBar";
import Hero from "./section/Hero";
import WhatIDo from "./section/WhatIDo";
import Work from "./section/Work";
import TechStack from "./section/TechStack";
import Career from "./section/Career";
import About from "./section/About";
import { LoadingProvider } from "./context/LoadingContext";
import { ThemeProvider } from "./context/ThemeContext";
import { CosmicBackground3D } from "./components/CosmicBackground3D";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { GlowCursor } from "./components/GlowCursor";
import { ContactModal } from "./components/ContactModal";

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ThemeProvider>
      <LoadingProvider>
        {/* Top Scroll Indicator */}
        <ScrollProgressBar />

        {/* Interactive Ambient Cursor Glow */}
        <GlowCursor />

        {/* Continuous 3D Moving Objects Background */}
        <CosmicBackground3D />

        {/* Interactive Contact Modal */}
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

        {/* Main Content Sections */}
        <div className="relative z-10 container mx-auto max-w-7xl">
          <Navbar onOpenContact={() => setIsContactOpen(true)} />
          <Hero />
          <WhatIDo />
          <Work />
          <TechStack />
          <Career />
          <About />
        </div>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;