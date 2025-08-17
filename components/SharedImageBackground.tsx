import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  src: string;
  heightPx?: number;
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
};

export default function SharedImageBackground({
  src,
  heightPx,
  firstContent,
  secondContent,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-15vh', '15vh']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.05]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={heightPx ? { minHeight: `${heightPx}px` } : undefined}
    >
      {/* Background image with motion effects */}
      <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ y: bgY, scale: bgScale }}>
        <img 
          src={src} 
          alt="" 
          className="h-full w-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14 py-24 md:py-32 space-y-24 md:space-y-32">
        <div>{firstContent}</div>
        <div>{secondContent}</div>
      </div>
    </section>
  );
}
