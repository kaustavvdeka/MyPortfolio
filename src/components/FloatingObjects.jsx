import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Single Interactive Floating Shape
function FloatingArtifact({ position, rotationSpeed = [0.01, 0.01, 0.005], geometryType = "icosahedron", color = "#38bdf8", emissive = "#0284c7", scale = 1, scrollProgress = { current: 0 } }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const initialPos = useRef(position);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Auto rotation with speed boost on hover
    const boost = hovered ? 3.5 : 1;
    meshRef.current.rotation.x += rotationSpeed[0] * boost;
    meshRef.current.rotation.y += rotationSpeed[1] * boost;
    meshRef.current.rotation.z += rotationSpeed[2] * boost;

    // Scroll reaction - drift along Y and Z based on scroll
    const scroll = scrollProgress.current || 0;
    meshRef.current.position.y = initialPos.current[1] + scroll * 2.5;
    meshRef.current.position.z = initialPos.current[2] - scroll * 1.5;

    // Smooth hover scale
    const targetScale = hovered ? scale * 1.3 : scale;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 8);
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {geometryType === "icosahedron" && <icosahedronGeometry args={[0.5, 0]} />}
        {geometryType === "octahedron" && <octahedronGeometry args={[0.45, 0]} />}
        {geometryType === "torus" && <torusGeometry args={[0.4, 0.12, 16, 32]} />}
        {geometryType === "dodecahedron" && <dodecahedronGeometry args={[0.4, 0]} />}
        {geometryType === "torusKnot" && <torusKnotGeometry args={[0.3, 0.08, 64, 16]} />}

        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={hovered ? 0.9 : 0.4}
          roughness={0.15}
          metalness={0.85}
          wireframe={geometryType === "torus"}
        />
      </mesh>
    </Float>
  );
}

// Glowing Orbiting Ring
function OrbitingCyberRing({ radius = 2.2, speed = 0.5, tilt = [Math.PI / 4, 0, 0], color = "#a855f7" }) {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed;
    }
  });

  return (
    <group rotation={tilt}>
      <mesh ref={ringRef}>
        <ringGeometry args={[radius, radius + 0.03, 64]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// Pulsing Energy Crystal Orb
function EnergyCrystal({ position, scale = 0.6, color = "#ec4899" }) {
  const crystalRef = useRef();
  
  useFrame((state, delta) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y += delta * 0.8;
      crystalRef.current.rotation.x += delta * 0.4;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
      <group position={position} scale={scale}>
        {/* Core Crystal */}
        <mesh ref={crystalRef}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* Outer Wireframe Shield */}
        <mesh scale={1.25}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

export function FloatingObjects({ scrollProgress, isMobile }) {
  if (isMobile) {
    // Fewer objects for mobile performance & cleaner view
    return (
      <group>
        <FloatingArtifact
          position={[-1.2, 1.8, -0.5]}
          geometryType="icosahedron"
          color="#38bdf8"
          emissive="#0284c7"
          scale={0.5}
          scrollProgress={scrollProgress}
        />
        <FloatingArtifact
          position={[1.3, -1.8, -0.3]}
          geometryType="octahedron"
          color="#c084fc"
          emissive="#7e22ce"
          scale={0.55}
          scrollProgress={scrollProgress}
        />
        <EnergyCrystal position={[-1.3, -1.2, -0.5]} scale={0.4} color="#f43f5e" />
      </group>
    );
  }

  return (
    <group>
      {/* Upper Left Holographic Polyhedron */}
      <FloatingArtifact
        position={[-2.8, 1.8, -0.5]}
        rotationSpeed={[0.015, 0.02, 0.01]}
        geometryType="icosahedron"
        color="#38bdf8"
        emissive="#0284c7"
        scale={0.7}
        scrollProgress={scrollProgress}
      />

      {/* Top Center-Right Floating Tech Ring */}
      <FloatingArtifact
        position={[2.4, 2.2, -0.8]}
        rotationSpeed={[0.01, 0.015, 0.02]}
        geometryType="torus"
        color="#818cf8"
        emissive="#4338ca"
        scale={0.8}
        scrollProgress={scrollProgress}
      />

      {/* Mid Right Crystalline Polyhedron near Astronaut */}
      <FloatingArtifact
        position={[2.6, -0.2, 0.2]}
        rotationSpeed={[0.02, 0.01, 0.015]}
        geometryType="dodecahedron"
        color="#ec4899"
        emissive="#be185d"
        scale={0.65}
        scrollProgress={scrollProgress}
      />

      {/* Bottom Left Torus Knot Artifact */}
      <FloatingArtifact
        position={[-2.2, -1.6, -0.2]}
        rotationSpeed={[0.015, 0.025, 0.01]}
        geometryType="torusKnot"
        color="#34d399"
        emissive="#059669"
        scale={0.7}
        scrollProgress={scrollProgress}
      />

      {/* Lower Right Energy Crystal */}
      <EnergyCrystal position={[1.8, -2.1, 0.5]} scale={0.55} color="#c084fc" />

      {/* Background Orbiting Cyber Rings around hero space */}
      <OrbitingCyberRing radius={3.2} speed={0.2} tilt={[Math.PI / 3, 0.2, 0]} color="#38bdf8" />
      <OrbitingCyberRing radius={4.5} speed={-0.15} tilt={[-Math.PI / 4, 0.5, 0.3]} color="#c084fc" />
    </group>
  );
}
