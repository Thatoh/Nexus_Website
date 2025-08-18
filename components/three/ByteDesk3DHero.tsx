import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import React from "react";
import Model from "./Model";


type Props = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export default function ByteDesk3DHero({ title, subtitle, ctaLabel, onCtaClick }: Props) {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[78vh] lg:min-h-[86vh] overflow-hidden bg-gray-950">
      {/* 3D layer */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 1.4, 5], fov: 50 }}
          gl={{ antialias: true }}
        >
          {/* Scene */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[4, 6, 4]} intensity={1.2} />
          <Environment preset="city" />

          {/* Floating centerpiece — replace shapes with your GLB */}
          <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.5}>
            <group position={[0, 0.25, 0]}>
              <Model url="/models/bytedesk.glb" scale={1.4} />
            </group>
          </Float>
          {/* Grounding/shadows */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />

          {/* Non-interactive: allow the UI to capture mouse */}
          <OrbitControls enableZoom={false} enablePan={false} enabled={false} />
        </Canvas>
      </div>

      {/* Gradient vignette for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0)_0%,rgba(2,6,23,0.85)_70%,rgba(2,6,23,1)_100%)]" />

      {/* Content layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl/tight md:text-6xl/tight font-extrabold tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-slate-300">
              {subtitle}
            </p>
          )}
          {ctaLabel && (
            <div className="mt-8">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-gray-900 shadow-lg hover:shadow-xl hover:brightness-95 transition"
              >
                {ctaLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
