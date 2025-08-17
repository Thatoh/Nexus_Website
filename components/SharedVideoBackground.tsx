import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DomainSearch from './DomainSearch';

type Props = {
  /** Path to video placed in /public */
  src: string;
  /** Height of the combined section in px */
  heightPx?: number;
  /** Newsletter content */
  newsletterContent: React.ReactNode;
  /** Domain search content */
  domainSearchContent: React.ReactNode;
};

/**
 * SharedVideoBackground
 * - Combines Newsletter and Domain Search sections with continuous video background
 * - Video plays continuously across both sections
 * - Parallax effect maintains visual continuity
 */
export default function SharedVideoBackground({
  src,
  heightPx = 3000, // Increased height to accommodate both sections
  newsletterContent,
  domainSearchContent,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Progress from when the section top hits the viewport to when its bottom leaves
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  /**
   * We pan the background from -25vh to +25vh across the section.
   * This creates a continuous flow across both sections.
   */
  const bgY = useTransform(scrollYProgress, [0, 1], ['-25vh', '25vh']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.05]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-clip"
      style={{
        minHeight: `${heightPx}px`,
      }}
    >
      {/* Continuous video background */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <video
          className="h-full w-full object-cover"
          src={src}
          autoPlay
          playsInline
          muted
          loop
          onError={(e) => {
            console.error('Video error:', e);
            console.error('Video src:', src);
          }}
          onLoadStart={() => console.log('Video loading started:', src)}
          onCanPlay={() => console.log('Video can play:', src)}
          onPlay={() => console.log('Video started playing:', src)}
        />
      </motion.div>

      {/* Content sections */}
      <div className="relative z-10">
        {/* Newsletter Section - Top half */}
        <div className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-14">
          <div className="max-w-7xl w-full">
            {newsletterContent}
          </div>
        </div>

        {/* Domain Search Section - Bottom half */}
        <div className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-14">
          <div className="max-w-7xl w-full">
            {domainSearchContent}
          </div>
        </div>
      </div>
    </section>
  );
}
