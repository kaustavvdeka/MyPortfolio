import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";

// Single Drifting 3D Polyhedron / Cyber Artifact
function DriftingArtifact({
  position,
  geometry = "icosahedron",
  color = "#38bdf8",
  emissive = "#0284c7",
  scale = 0.6,
  rotSpeed = [0.005, 0.008, 0.004],
  wireframe = false,
}) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += rotSpeed[0];
    meshRef.current.rotation.y += rotSpeed[1];
    meshRef.current.rotation.z += rotSpeed[2];

    // Subtle pointer parallax
    const px = state.pointer.x * 0.45;
    const py = state.pointer.y * 0.45;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, position[0] + px, 0.025);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, position[1] + py, 0.025);
  });

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        {geometry === "dodecahedron" && <dodecahedronGeometry args={[0.9, 0]} />}
        {geometry === "torus" && <torusGeometry args={[0.8, 0.2, 16, 32]} />}
        {geometry === "tetrahedron" && <tetrahedronGeometry args={[1, 0]} />}
        {geometry === "torusKnot" && <torusKnotGeometry args={[0.6, 0.18, 64, 16]} />}
        {geometry === "capsule" && <capsuleGeometry args={[0.4, 0.8, 8, 16]} />}

        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={wireframe ? 0.6 : 0.4}
          roughness={0.2}
          metalness={0.8}
          wireframe={wireframe}
          transparent
          opacity={wireframe ? 0.45 : 0.65}
        />
      </mesh>
    </Float>
  );
}

// Glowing Orbiting Gyroscope Ring
function AmbientRing({ position, radius = 1.6, color = "#38bdf8", speed = 0.4, tilt = [0, 0, 0] }) {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed;
      ringRef.current.rotation.x += delta * (speed * 0.5);
    }
  });

  return (
    <group position={position} rotation={tilt}>
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, 0.025, 16, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Drifting Particle Field
function ParticleField({ count = 90 }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      coords[i] = (Math.random() - 0.5) * 28;
      coords[i + 1] = (Math.random() - 0.5) * 28;
      coords[i + 2] = (Math.random() - 0.5) * 16 - 4;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#38bdf8"
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Background Scene with Multi-layer 3D Objects
function BackgroundScene({ isMobile }) {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-8, 6, 2]} intensity={3.5} color="#38bdf8" />
      <pointLight position={[8, -6, 2]} intensity={3.5} color="#c084fc" />
      <pointLight position={[0, 8, -2]} intensity={2.5} color="#34d399" />

      {/* Floating Stardust Particles */}
      <Sparkles count={isMobile ? 40 : 80} scale={20} size={2.5} speed={0.3} color="#38bdf8" opacity={0.45} />
      <Sparkles count={isMobile ? 30 : 60} scale={22} size={3.2} speed={0.4} color="#c084fc" opacity={0.4} />
      <Sparkles count={isMobile ? 20 : 40} scale={18} size={2} speed={0.25} color="#34d399" opacity={0.35} />
      <ParticleField count={isMobile ? 45 : 110} />

      {/* Background 3D Floating Geometries */}
      {!isMobile ? (
        <>
          {/* Top Left Floating Wireframe Icosahedron */}
          <DriftingArtifact
            position={[-6.5, 4.5, -4]}
            geometry="icosahedron"
            color="#38bdf8"
            emissive="#0284c7"
            scale={0.85}
            wireframe={true}
          />

          {/* Top Center Floating Torus Knot */}
          <DriftingArtifact
            position={[1.5, 6, -5]}
            geometry="torusKnot"
            color="#a855f7"
            emissive="#7e22ce"
            scale={0.7}
            wireframe={true}
          />

          {/* Top Right Glowing Octahedron */}
          <DriftingArtifact
            position={[7.5, 5, -5]}
            geometry="octahedron"
            color="#c084fc"
            emissive="#7e22ce"
            scale={0.75}
          />

          {/* Mid Left Dodecahedron */}
          <DriftingArtifact
            position={[-8, -0.5, -5]}
            geometry="dodecahedron"
            color="#ec4899"
            emissive="#be185d"
            scale={0.75}
            wireframe={true}
          />

          {/* Mid Center Left Floating Crystal Capsule */}
          <DriftingArtifact
            position={[-4.5, -2.5, -6]}
            geometry="capsule"
            color="#34d399"
            emissive="#059669"
            scale={0.65}
          />

          {/* Mid Right Floating Neon Torus */}
          <DriftingArtifact
            position={[8.5, -1, -4]}
            geometry="torus"
            color="#38bdf8"
            emissive="#0369a1"
            scale={0.9}
            wireframe={true}
          />

          {/* Mid Center Right Floating Octahedron */}
          <DriftingArtifact
            position={[5, -3, -6]}
            geometry="octahedron"
            color="#f43f5e"
            emissive="#e11d48"
            scale={0.6}
            wireframe={true}
          />

          {/* Bottom Left Tetrahedron */}
          <DriftingArtifact
            position={[-6, -6.5, -5]}
            geometry="tetrahedron"
            color="#34d399"
            emissive="#059669"
            scale={0.85}
          />

          {/* Bottom Center Torus */}
          <DriftingArtifact
            position={[-1, -7, -4]}
            geometry="torus"
            color="#818cf8"
            emissive="#4f46e5"
            scale={0.75}
          />

          {/* Bottom Right Icosahedron */}
          <DriftingArtifact
            position={[7, -7, -4]}
            geometry="icosahedron"
            color="#a855f7"
            emissive="#6b21a8"
            scale={0.8}
          />

          {/* Orbiting Ambient Cyber Rings */}
          <AmbientRing position={[-6.5, 4.5, -4]} radius={1.4} color="#38bdf8" speed={0.3} tilt={[Math.PI / 4, 0.2, 0]} />
          <AmbientRing position={[7.5, 5, -5]} radius={1.3} color="#c084fc" speed={-0.35} tilt={[-Math.PI / 3, 0.4, 0.2]} />
          <AmbientRing position={[8.5, -1, -4]} radius={1.6} color="#38bdf8" speed={0.25} tilt={[0.5, 0.8, 0]} />
          <AmbientRing position={[-6, -6.5, -5]} radius={1.4} color="#34d399" speed={-0.3} tilt={[-0.4, 0.3, 0.5]} />
        </>
      ) : (
        <>
          <DriftingArtifact
            position={[-3.2, 4.5, -4]}
            geometry="icosahedron"
            color="#38bdf8"
            emissive="#0284c7"
            scale={0.6}
            wireframe={true}
          />
          <DriftingArtifact
            position={[3.2, 2, -4]}
            geometry="torus"
            color="#a855f7"
            emissive="#7e22ce"
            scale={0.55}
          />
          <DriftingArtifact
            position={[-3, -3.5, -4]}
            geometry="tetrahedron"
            color="#34d399"
            emissive="#059669"
            scale={0.55}
          />
          <DriftingArtifact
            position={[3, -5, -4]}
            geometry="octahedron"
            color="#c084fc"
            emissive="#7e22ce"
            scale={0.55}
          />
        </>
      )}
    </>
  );
}

export const CosmicBackground3D = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <BackgroundScene isMobile={isMobile} />
      </Canvas>
    </div>
  );
};
