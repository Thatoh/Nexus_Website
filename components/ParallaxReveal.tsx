import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  /** Path to media (image or video) placed in /public */
  src: string;
  /** 'image' | 'video' (default: 'image') */
  kind?: 'image' | 'video';
  /** Poster only used when kind='video' */
  poster?: string;
  /** Height of the section in px (design basis 2200) */
  heightPx?: number;
  /** Optional: content overlay */
  children?: React.ReactNode;
  /** Optional: overlay background class */
  overlayClassName?: string;
};

/**
 * ParallaxReveal
 * - Section with tall scroll area (e.g. 2200px)
 * - Overlay content is sticky; background pans as you scroll
 * - Works with image OR video background
 */
export default function ParallaxReveal({
  src,
  kind = 'image',
  poster,
  heightPx = 2200,
  children,
  overlayClassName = "bg-black/30 ring-1 ring-white/10 backdrop-blur-md",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Progress from when the section top hits the viewport to when its bottom leaves
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  /**
   * We pan the background from -25vh to +25vh across the section.
   * This mimics "background moves while overlay sticks", and the overlay
   * only leaves once the section's scroll range is done (edges reached).
   * You can tweak the range to taste (wider range = stronger parallax).
   */
  const bgY = useTransform(scrollYProgress, [0, 1], ['-25vh', '25vh']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.05]); // slight oversize to avoid edges on fast scroll

  return (
    <section
      ref={ref}
      // Full-bleed dark canvas so background is invisible outside media
      className="relative w-full overflow-clip bg-[#0A0D14]"
      style={{
        // Design basis: 1920w × 2200h, but responsive on real screens
        // Use minHeight so it scales with content/smaller viewports too.
        minHeight: `${heightPx}px`,
      }}
    >
      {/* Background layer (image or video), panning with scroll */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        {kind === 'video' ? (
          <video
            className="h-full w-full object-cover"
            src={src}
            poster={poster}
            autoPlay
            playsInline
            muted
            loop
          />
        ) : (
          // Regular img tag for React/Vite project
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
        {/* Optional subtle glass ring/border */}
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-[2.25rem] pointer-events-none" />
      </motion.div>

      {/* Sticky overlay content */}
      <div
        className="
          sticky top-0
          z-10 mx-auto h-screen max-w-[1920px]
          px-6 sm:px-10 lg:px-14
          flex flex-col
        "
      >
        {/* Card-like overlay to place your copy/CTAs */}
        <div className={`
          flex-1 flex flex-col justify-center
          max-w-[2000px] mx-auto
          rounded-3xl ${overlayClassName}
          p-8 md:p-12
          shadow-[0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.45)]
        `}>
          {children}
        </div>
      </div>
    </section>
  );
}
