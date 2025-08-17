import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  src: string;
  heightPx?: number; // optional; otherwise sizes to content
  newsletterContent: React.ReactNode;
  domainSearchContent: React.ReactNode;
};

export default function SharedVideoBackground({
  src,
  heightPx,
  newsletterContent,
  domainSearchContent,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Gentle parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15vh', '15vh']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.05]);

  // Determine if the source is a video or image based on file extension
  const isVideo = src.match(/\.(mp4|webm|ogg|mov|avi)$/i);
  const isImage = src.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);

  // Debug logging
  console.log('SharedVideoBackground props:', { src, isVideo, isImage });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-red-500"
      style={heightPx ? { minHeight: `${heightPx}px` } : { minHeight: '600px' }}
    >
      {/* Debug info */}
      <div className="absolute top-0 left-0 z-50 bg-black text-white p-2 text-xs">
        Debug: {src} | isImage: {isImage ? 'true' : 'false'} | isVideo: {isVideo ? 'true' : 'false'}
      </div>
      
      {/* Simple background test - no motion effects */}
      <div className="absolute inset-0 -z-10">
        {isVideo ? (
          <video 
            className="h-full w-full object-cover" 
            src={src} 
            autoPlay 
            playsInline 
            muted 
            loop 
            onError={(e) => console.error('Video error:', e)}
            onLoadStart={() => console.log('Video loading started:', src)}
          />
        ) : isImage ? (
          <img 
            className="h-full w-full object-cover" 
            src={src} 
            alt="" 
            onError={(e) => console.error('Image error:', e)}
            onLoad={() => console.log('Image loaded successfully:', src)}
            style={{ minHeight: '400px' }}
          />
        ) : (
          // Fallback for unknown file types
          <video 
            className="h-full w-full object-cover" 
            src={src} 
            autoPlay 
            playsInline 
            muted 
            loop 
            onError={(e) => console.error('Fallback video error:', e)}
          />
        )}
        {/* Tint for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Foreground content with consistent spacing */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14 py-24 md:py-32 space-y-24 md:space-y-32">
        <div>{newsletterContent}</div>
        <div>{domainSearchContent}</div>
      </div>
    </section>
  );
}
