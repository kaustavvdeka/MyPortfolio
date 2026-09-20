import React from "react";
import Navbar from "./section/NavBar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import { LoadingProvider } from "./context/LoadingContext";
// import Experiences from "./section/Experiences";
// import Testimonial from "./section/Testimonial";
// import Contact from "./section/Contact";
// import Footer from './section/Footer';

const App = () => {
  return (
    <LoadingProvider>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/*   <Experiences />
        <Testimonial />
        <Contact />
        <Footer/> */}
      </div>
    </LoadingProvider>
  );
};

export default App;