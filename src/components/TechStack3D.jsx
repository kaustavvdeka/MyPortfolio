import React, { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Html } from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";

// ALL Available Tech Stack Icons & Data
export const techSkills = [
  // Frontend
  { name: "React", category: "frontend", icon: "/images/react2.webp", color: "#38bdf8", emissive: "#0284c7" },
  { name: "Next.js", category: "frontend", icon: "/images/next2.webp", color: "#ffffff", emissive: "#475569" },
  { name: "TypeScript", category: "frontend", icon: "/images/typescript.webp", color: "#60a5fa", emissive: "#2563eb" },
  { name: "JavaScript", category: "frontend", icon: "/images/javascript.webp", color: "#facc15", emissive: "#ca8a04" },
  { name: "Tailwind CSS", category: "frontend", icon: "/assets/logos/tailwindcss.svg", color: "#38bdf8", emissive: "#0284c7" },
  { name: "HTML5", category: "frontend", icon: "/assets/logos/html5.svg", color: "#f97316", emissive: "#c2410c" },
  { name: "CSS3", category: "frontend", icon: "/assets/logos/css3.svg", color: "#3b82f6", emissive: "#1d4ed8" },
  
  // 3D & Creative
  { name: "Three.js", category: "3d", icon: "/assets/logos/threejs.svg", color: "#f472b6", emissive: "#db2777" },
  { name: "Blazor", category: "3d", icon: "/assets/logos/blazor.svg", color: "#a855f7", emissive: "#7e22ce" },
  
  // Backend & Systems
  { name: "Node.js", category: "backend", icon: "/images/node2.webp", color: "#4ade80", emissive: "#16a34a" },
  { name: "Express.js", category: "backend", icon: "/images/express.webp", color: "#cbd5e1", emissive: "#475569" },
  { name: "MongoDB", category: "backend", icon: "/images/mongo.webp", color: "#34d399", emissive: "#059669" },
  { name: "MySQL", category: "backend", icon: "/images/mysql.webp", color: "#38bdf8", emissive: "#0284c7" },
  { name: "SQLite", category: "backend", icon: "/assets/logos/sqlite.svg", color: "#60a5fa", emissive: "#1d4ed8" },
  { name: "C#", category: "backend", icon: "/assets/logos/csharp.svg", color: "#c084fc", emissive: "#7e22ce" },
  { name: "C++", category: "backend", icon: "/assets/logos/cplusplus.svg", color: "#60a5fa", emissive: "#2563eb" },
  { name: ".NET", category: "backend", icon: "/assets/logos/dotnet.svg", color: "#818cf8", emissive: "#4338ca" },
  { name: ".NET Core", category: "backend", icon: "/assets/logos/dotnetcore.svg", color: "#a78bfa", emissive: "#6d28d9" },
  { name: "EF Core", category: "backend", icon: "/assets/logos/efcore.png", color: "#c084fc", emissive: "#7e22ce" },
  
  // Tools & Cloud
  { name: "Git", category: "tools", icon: "/assets/logos/git.svg", color: "#fb923c", emissive: "#ea580c" },
  { name: "GitHub", category: "tools", icon: "/assets/logos/github.svg", color: "#f8fafc", emissive: "#475569" },
  { name: "Azure", category: "tools", icon: "/assets/logos/azure.svg", color: "#38bdf8", emissive: "#0284c7" },
  { name: "Auth0", category: "tools", icon: "/assets/logos/auth0.svg", color: "#fb923c", emissive: "#ea580c" },
  { name: "VS Code", category: "tools", icon: "/assets/logos/visualstudiocode.svg", color: "#38bdf8", emissive: "#0284c7" },
  { name: "Vite", category: "tools", icon: "/assets/logos/vitejs.svg", color: "#c084fc", emissive: "#7e22ce" },
  { name: "WordPress", category: "tools", icon: "/assets/logos/wordpress.svg", color: "#38bdf8", emissive: "#0284c7" },
];

// Single Interactive 3D Skill Sphere with Hover Displacement and Spring Return
function SkillOrb({ skill, initialPos, activeFilter }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Velocity and offset vectors for smooth spring physics
  const currentPos = useRef(new THREE.Vector3(...initialPos));
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  const homePos = useMemo(() => new THREE.Vector3(...initialPos), [initialPos]);

  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(skill.icon);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [skill.icon]);

  // Unique organic drift frequency & phase
  const driftParams = useMemo(() => ({
    speedX: 0.4 + Math.random() * 0.5,
    speedY: 0.5 + Math.random() * 0.5,
    rotSpeedX: (Math.random() - 0.5) * 0.8,
    rotSpeedY: 0.6 + Math.random() * 0.8,
    phase: Math.random() * Math.PI * 2,
  }), []);

  const isDimmed = activeFilter !== "all" && skill.category !== activeFilter;

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // 1. Organic gentle breathing oscillation around home position
    const floatOffsetX = Math.cos(time * driftParams.speedX + driftParams.phase) * 0.15;
    const floatOffsetY = Math.sin(time * driftParams.speedY + driftParams.phase) * 0.18;
    const targetAnchor = new THREE.Vector3(
      homePos.x + floatOffsetX,
      homePos.y + floatOffsetY,
      homePos.z
    );

    // 2. Cursor repulsion & Hover impulse:
    // Project ball to screen coordinates to calculate distance to cursor
    const orbScreenPos = meshRef.current.position.clone().project(state.camera);
    const distToPointer = Math.hypot(pointer.x - orbScreenPos.x, pointer.y - orbScreenPos.y);

    if (distToPointer < 0.28 || hovered) {
      // Push ball away dynamically
      const pushStrength = hovered ? 0.9 : Math.max(0, (0.28 - distToPointer) * 3.2);
      const angle = Math.atan2(orbScreenPos.y - pointer.y, orbScreenPos.x - pointer.x);
      
      const impulseX = Math.cos(angle) * pushStrength;
      const impulseY = Math.sin(angle) * pushStrength;
      const impulseZ = pushStrength * 0.6;

      targetAnchor.x += impulseX;
      targetAnchor.y += impulseY;
      targetAnchor.z += impulseZ;
    }

    // 3. Spring physics: pull current position back to targetAnchor smoothly (returns right back to home)
    const springStrength = 12.0;
    const damping = 6.5;

    const force = targetAnchor.clone().sub(currentPos.current).multiplyScalar(springStrength);
    velocity.current.add(force.multiplyScalar(delta));
    velocity.current.multiplyScalar(Math.max(0, 1 - damping * delta));
    currentPos.current.add(velocity.current.clone().multiplyScalar(delta));

    meshRef.current.position.copy(currentPos.current);

    // 4. Rotation dynamics: accelerates on hover
    const spinMultiplier = hovered ? 3.0 : 1.0;
    meshRef.current.rotation.y += delta * driftParams.rotSpeedY * spinMultiplier;
    meshRef.current.rotation.x += delta * driftParams.rotSpeedX * spinMultiplier;

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * (hovered ? 2.5 : 1.2);
    }

    // 5. Scale transitions
    const targetScale = isDimmed ? 0.55 : (hovered ? 1.4 : (clicked ? 1.25 : 1.0));
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 9);
  });

  return (
    <group
      ref={meshRef}
      position={initialPos}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
        setClicked(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setClicked(!clicked);
      }}
    >
      {/* Outer Glowing Cyber Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[0.62, 0.018, 16, 48]} />
        <meshBasicMaterial
          color={skill.color}
          transparent
          opacity={isDimmed ? 0.12 : (hovered ? 0.95 : 0.45)}
        />
      </mesh>

      {/* Main Glowing Skill Sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshPhysicalMaterial
          map={texture}
          emissive={skill.emissive}
          emissiveMap={texture}
          emissiveIntensity={isDimmed ? 0.1 : (hovered ? 0.9 : 0.35)}
          metalness={0.65}
          roughness={0.25}
          clearcoat={0.35}
          clearcoatRoughness={0.1}
          opacity={isDimmed ? 0.3 : 1}
          transparent={isDimmed}
        />
      </mesh>

      {/* Interactive Tooltip Badge on Hover */}
      {hovered && (
        <Html position={[0, 0.8, 0]} center distanceFactor={15}>
          <div className="px-3 py-1 rounded-lg backdrop-blur-md bg-[#030412]/95 border border-cyan-400/60 shadow-[0_0_18px_rgba(56,189,248,0.5)] pointer-events-none whitespace-nowrap animate-in fade-in zoom-in-95 duration-200">
            <span className="text-xs font-extrabold tracking-wide" style={{ color: skill.color }}>
              {skill.name}
            </span>
          </div>
        </Html>
      )}
    </group>
  );
}

export function TechStack3D({ activeFilter = "all" }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Beautiful 3D spatial distribution for all 26 tech spheres across layers
  const positions = useMemo(() => [
    // Row 1 (Top)
    [-4.2, 2.3, -0.2],  // React
    [-2.5, 2.5, 0.3],   // Next.js
    [-0.8, 2.4, -0.4],  // TypeScript
    [0.9, 2.5, 0.2],    // JavaScript
    [2.6, 2.4, -0.3],   // Tailwind CSS
    [4.3, 2.2, 0.1],    // HTML5

    // Row 2 (Upper-Mid)
    [-4.6, 1.1, 0.3],   // CSS3
    [-3.0, 1.2, -0.3],  // Three.js
    [-1.4, 1.3, 0.4],   // Blazor
    [0.3, 1.2, -0.2],   // Node.js
    [2.0, 1.3, 0.3],    // Express.js
    [3.7, 1.1, -0.4],   // MongoDB

    // Row 3 (Center-Mid)
    [-4.3, -0.1, -0.3], // MySQL
    [-2.7, -0.1, 0.4],  // SQLite
    [-1.0, 0.0, -0.2],  // C#
    [0.7, -0.1, 0.3],   // C++
    [2.4, 0.0, -0.3],   // .NET
    [4.1, -0.1, 0.2],   // .NET Core

    // Row 4 (Lower-Mid)
    [-3.6, -1.3, 0.2],  // EF Core
    [-1.9, -1.3, -0.3], // Git
    [-0.2, -1.2, 0.4],  // GitHub
    [1.5, -1.3, -0.2],  // Azure
    [3.2, -1.2, 0.3],   // Auth0

    // Row 5 (Bottom)
    [-2.2, -2.4, -0.1], // VS Code
    [0.0, -2.4, 0.3],   // Vite
    [2.2, -2.4, -0.2],  // WordPress
  ], []);

  return (
    <div className="relative w-full h-[380px] sm:h-[520px] md:h-[640px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#06091f]/70 via-[#030412]/85 to-[#030412] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
      {/* Cosmic background radial glows */}
      <div className="absolute inset-0 bg-radial from-cyan-500/10 via-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/15 blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-purple-500/15 blur-[90px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, isMobile ? 13.5 : 8.8], fov: isMobile ? 55 : 46 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Studio Cosmic Lighting */}
          <ambientLight intensity={1.7} />
          <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
          <pointLight position={[-7, 5, 3]} intensity={5.0} color="#38bdf8" />
          <pointLight position={[7, -5, 3]} intensity={4.5} color="#c084fc" />
          <pointLight position={[0, 6, 2]} intensity={2.5} color="#f472b6" />

          {/* Stardust Sparkles Nebula */}
          <Sparkles count={75} scale={12} size={2.5} speed={0.3} color="#38bdf8" opacity={0.6} />
          <Sparkles count={50} scale={14} size={4} speed={0.5} color="#c084fc" opacity={0.5} />

          {/* All 26 3D Tech Orbs */}
          {techSkills.map((skill, index) => (
            <SkillOrb
              key={skill.name}
              skill={skill}
              initialPos={positions[index] || [0, 0, 0]}
              activeFilter={activeFilter}
            />
          ))}
        </Suspense>
      </Canvas>

      {/* Floating Interactive Hint Pill */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-md bg-black/50 border border-white/10 text-[10px] sm:text-xs text-neutral-400 pointer-events-none flex items-center gap-1.5 sm:gap-2 shadow-lg max-w-[90%] truncate">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
        <span className="truncate">Hover or touch balls to displace • Release to spring back</span>
      </div>
    </div>
  );
}
