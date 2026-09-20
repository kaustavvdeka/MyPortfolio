import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallelaxBackground";
import { Astronaut } from "../components/Astronaut";
import { FloatingObjects } from "../components/FloatingObjects";
import ScrollIndicator from "../components/ScrollIndicator";
import { Float, Sparkles, Stars } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import { useScroll } from "motion/react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const scrollProgressRef = useRef(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      scrollProgressRef.current = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden c-space" id="home">
      {/* 2D Multi-layer Parallax Background */}
      <ParallaxBackground />

      {/* Hero Typography & Interactive Content */}
      <HeroText />

      {/* 3D WebGL Canvas Universe */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Canvas
          camera={{ position: [0, 0.8, 3.8], fov: isMobile ? 55 : 45 }}
          className="pointer-events-auto"
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={<Loader />}>
            {/* Multi-Point Cosmic Studio Lighting */}
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 8, 5]} intensity={2.2} color="#ffffff" />
            <pointLight position={[-4, 3, 2]} intensity={4.5} color="#38bdf8" />
            <pointLight position={[4, -2, 2]} intensity={3.5} color="#c084fc" />
            <pointLight position={[0, 4, 3]} intensity={2} color="#f472b6" />

            {/* Cosmic Stardust & Particle Nebula */}
            <Sparkles count={70} scale={10} size={3} speed={0.4} color="#38bdf8" opacity={0.7} />
            <Sparkles count={45} scale={12} size={4.5} speed={0.6} color="#c084fc" opacity={0.6} />
            <Stars radius={50} depth={40} count={1500} factor={3.5} saturation={0.8} fade speed={1.2} />

            {/* Floating 3D Geometric Artifacts & Crystals */}
            <FloatingObjects scrollProgress={scrollProgressRef} isMobile={isMobile} />

            {/* 3D Falling Astronaut Character */}
            <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
              <Astronaut
                scale={isMobile ? 0.13 : 0.19}
                position={isMobile ? [0, -1.2, 0] : [1.4, -0.8, 0]}
                scrollProgress={scrollProgressRef}
                isMobile={isMobile}
              />
            </Float>

            {/* Interactive Mouse & Scroll Camera Rig */}
            <Rig scrollProgress={scrollProgressRef} isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

function Rig({ scrollProgress, isMobile }) {
  return useFrame((state, delta) => {
    const scroll = scrollProgress.current || 0;
    
    // Mouse Parallax with smooth maath damping
    const targetX = (state.pointer.x * (isMobile ? 0.4 : 0.8));
    const targetY = 0.8 + (state.pointer.y * (isMobile ? 0.3 : 0.5)) - scroll * 1.5;
    const targetZ = 3.8 + scroll * 1.8;

    easing.damp3(
      state.camera.position,
      [targetX, targetY, targetZ],
      0.35,
      delta
    );

    // Subtle look-at point adjustment
    state.camera.lookAt(0, -scroll * 0.8, 0);
  });
}

export default Hero;
