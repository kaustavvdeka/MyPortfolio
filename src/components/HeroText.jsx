import { FlipWords } from "./Flipword";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Innovative", "Dynamic", "Creative", "Modern"];
  const interactiveWords = ["Full-Stack Developer", "Problem Solver", "UI/UX Enthusiast", "Tech Innovator"];
  
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hello, I'm Kaustav
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Crafting Digital <br /> Experiences That
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Inspire & Engage
          </motion.p>
        </div>
        
        {/* Interactive Tagline */}
        <motion.div
          className="mt-8"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.1 }}
        >
          <p className="text-xl text-neutral-400 mb-2">
            I am a{" "}
            <span className="inline-block">
              <FlipWords
                words={interactiveWords}
                className="font-bold text-blue-400 text-xl"
                duration={2000}
              />
            </span>
          </p>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          className="mt-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.4 }}
        >
          <p className="text-lg text-neutral-500">
            Let's build something extraordinary together
          </p>
        </motion.div>
      </div>
      
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hello, I'm Kaustav
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Creating
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Digital Solutions
          </motion.p>
        </div>
        
        {/* Interactive Tagline - Mobile */}
        <motion.div
          className="mt-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.1 }}
        >
          <p className="text-lg text-neutral-400">
            Your next{" "}
            <span className="inline-block">
              <FlipWords
                words={interactiveWords}
                className="font-bold text-blue-400 text-lg"
                duration={2000}
              />
            </span>
          </p>
        </motion.div>
        
        {/* Call to Action - Mobile */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.4 }}
        >
          <p className="text-md text-neutral-500">
            Ready to bring ideas to life
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;