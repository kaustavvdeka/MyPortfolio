import React from "react";
import Navbar from "./section/NavBar";
import Hero from "./section/Hero";
import WhatIDo from "./section/WhatIDo";
import Work from "./section/Work";
import TechStack from "./section/TechStack";
import Career from "./section/Career";
import About from "./section/About";
import { LoadingProvider } from "./context/LoadingContext";

const App = () => {
  return (
    <LoadingProvider>
      <div className="container mx-auto max-w-7xl">
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