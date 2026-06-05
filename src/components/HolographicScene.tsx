"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Holographic 3D object - rotating icosahedron with neon wireframe, cyberpunk style
function HoloObject({ color = '#FF2D78' }: { color?: string }) {
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation for movement
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      
      // Pulsing scale for "alive" effect
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(hovered ? 1.15 * pulse : pulse);
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main holographic icosahedron - 3D moving object */}
      <mesh>
        <icosahedronGeometry args={[1.2]} />
        <meshBasicMaterial 
          color={hovered ? '#00E5CC' : color} 
          wireframe 
          transparent 
          opacity={0.9}
        />
      </mesh>
      
      {/* Inner solid for depth */}
      <mesh>
        <icosahedronGeometry args={[0.9]} />
        <meshBasicMaterial 
          color="#0A0A0F" 
          transparent 
          opacity={0.6}
        />
      </mesh>

      {/* Floating neon rings for extra cyber animation */}
      <mesh rotation={[1, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00E5CC" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[0, 1, 0]}>
        <torusGeometry args={[2.3, 0.015, 16, 100]} />
        <meshBasicMaterial color="#FF2D78" transparent opacity={0.5} />
      </mesh>

      {/* NASA/LCS inspired subtle glowing Leonida "pins" in the signal — Vice City / Swamps / Keys feel (clickable in full map) */}
      {[
        { pos: [1.6, 0.4, 0.2] as const, col: '#FF2D78', label: 'VC' },
        { pos: [-1.3, -0.6, 0.8] as const, col: '#00E5CC', label: 'SW' },
        { pos: [0.2, 1.1, -1.1] as const, col: '#A855F7', label: 'KY' },
      ].map((p, i) => (
        <group key={i} position={p.pos}>
          <mesh>
            <sphereGeometry args={[0.12]} />
            <meshBasicMaterial color={p.col} transparent opacity={0.85} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.18]} />
            <meshBasicMaterial color={p.col} transparent opacity={0.25} wireframe />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Particles for floating neon dust / cyber rain effect
function Particles({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      // Gentle floating motion
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#00E5CC" 
        transparent 
        opacity={0.7}
        sizeAttenuation 
      />
    </points>
  );
}

export default function HolographicScene() {
  const [loaded, setLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  // Detect very small screens or user preference for static
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSmall = window.innerWidth < 480;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isSmall || prefersReduced) setUseFallback(true);
    }
  }, []);

  // Simple timeout to hide loading (canvas mounts fast)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  if (useFallback) {
    return (
      <div className="w-full h-[420px] md:h-[520px] relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
        <img
          src="/img/futuristic-grid-mockup.jpg"
          alt="Leonida Signal Core — static holographic preview (3D disabled for this device)"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center p-6">
          <div className="text-xs uppercase tracking-[3px] text-[#00E5CC] mb-2">LEONIDA SIGNAL CORE</div>
          <p className="text-sm text-white/80 max-w-xs mx-auto mb-4">Static preview — 3D holographics use more power. Tap to explore the full map instead.</p>
          <a href="/map" className="inline-block text-xs uppercase tracking-widest bg-[#FF2D78] text-black px-6 py-2 rounded font-bold">OPEN THE MAP</a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[420px] md:h-[520px] relative rounded-2xl overflow-hidden border border-white/10 bg-black/60">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-white/50 z-10">
          Loading Leonida signal…
        </div>
      )}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 55 }}
        style={{ background: 'transparent' }}
        onCreated={() => setLoaded(true)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#FF2D78" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#00E5CC" intensity={0.8} />

        <HoloObject />
        <Particles />

        {/* Subtle stars for depth / space cyber feel */}
        <Stars 
          radius={100} 
          depth={50} 
          count={120} 
          factor={3} 
          saturation={0} 
          fade 
          speed={0.5} 
        />

        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minDistance={2.5} 
          maxDistance={7}
          enableDamping 
          dampingFactor={0.1}
        />
      </Canvas>

      {/* Overlay instructions for interaction - futuristic UI */}
      <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[2px] text-white/50 bg-black/60 px-3 py-1 rounded font-mono pointer-events-none">
        DRAG TO ORBIT • SCROLL TO ZOOM • HOVER TO PULSE
      </div>
      <div className="absolute top-4 left-4 text-xs text-[#00E5CC] font-mono tracking-widest">
        3D HOLOGRAPHIC MODEL — LEONIDA PROTOCOL
      </div>
    </div>
  );
}
