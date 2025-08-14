import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  /** Background media from /public or your assets folder */
  src: string;
  /** 'image' | 'video' */
  kind?: 'image' | 'video';
  /** Poster for video */
  poster?: string;
  /** Total section height in px (design basis 2200) */
  heightPx?: number;
  /** Optional extra classes for the sticky inner container */
  overlayClassName?: string;
  /** Children render in the sticky overlay */
  children?: React.ReactNode;
};

/**
 * ParallaxReveal
 * - Tall section (e.g., 2200px)
 * - Background pans while overlay stays sticky
 * - Overlay scrolls away only when section ends (edges reached)
 */
export default function ParallaxReveal({
  src,
  kind = 'image',
  poster,
  heightPx = 2200,
  overlayClassName = '',
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // 0..1 from section start→end
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Parallax range (tweak to taste)
  const bgY = useTransform(scrollYProgress, [0, 1], ['-25vh', '25vh']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.05]); // slight oversize to avoid edge peeking

  return (
    <section
      ref={ref}
      className="relative w-full overflow-clip bg-[#0A0D14]"
      style={{ minHeight: `${heightPx}px` }}
    >
      {/* Background layer */}
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
            muted
            playsInline
            loop
          />
        ) : (
          <img src={src} alt="" className="h-full w-full object-cover" />
        )}
      </motion.div>

      {/* Sticky overlay container */}
      <div className={`sticky top-0 z-10 h-screen w-full ${overlayClassName}`}>
        {children}
      </div>
    </section>
  );
}
