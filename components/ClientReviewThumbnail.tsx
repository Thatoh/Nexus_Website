

import React, { useRef, useEffect, useState, RefObject } from 'react';
import { motion, useTransform, useMotionValue, MotionValue } from 'framer-motion';
import { Link } from 'react-router';

interface VideoThumbnail {
  id: number;
  src: string;
  alt: string;
}

interface ClientReviewThumbnailProps {
  video: VideoThumbnail;
  index: number;
  scrollX: MotionValue<number>;
  itemWidth: number;
  itemGap: number;
  totalUniqueItems: number; // Number of unique items before duplication
}

const ClientReviewThumbnail: React.FC<ClientReviewThumbnailProps> = ({
  video,
  index,
  scrollX,
  itemWidth,
  itemGap,
}) => {
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    if (thumbnailRef.current) {
      // Calculate offset based on its position in the duplicated array
      // Each item's start position is index * (itemWidth + itemGap)
      setOffsetLeft(index * (itemWidth + itemGap));
    }
  }, [index, itemWidth, itemGap]);

  // Determine the center of the carousel's visible area.
  // This could be passed as a prop if the carousel width is dynamic and known by parent.
  // For simplicity, using window.innerWidth / 2, assuming carousel is somewhat centered or full-width.
  const carouselVisibleWidth = typeof window !== 'undefined' ? Math.min(window.innerWidth, 1280) : 1280; // Max-w-7xl approx
  const viewportCenterX = carouselVisibleWidth / 2;

  // Calculate the center of the current item within the scrolling container
  const itemCenterInScrollContainer = offsetLeft + itemWidth / 2;

  // Calculate the item's current X position relative to the start of the *viewport*
  // As scrollX becomes more negative (scrolling left), currentXOnScreen decreases.
  const currentXOnScreen = useTransform(scrollX, (latestScrollX: number) => latestScrollX + itemCenterInScrollContainer);

  // Calculate distance from the viewport's center.
  // Negative if item is to the left of center, positive if to the right.
  const distanceFromCenter = useTransform(currentXOnScreen, (xPos: number) => xPos - viewportCenterX);

  const MAX_ROTATION = 35; // Max degrees of rotation
  const MAX_Z_TRANSLATE = -150; // Max depth (negative z)
  const BASE_SCALE = 0.75;
  const FOCUSED_SCALE = 1;
  const SPREAD_FACTOR = itemWidth * 1.5; // How far from center before max effect is applied

  const scale = useTransform(
    distanceFromCenter,
    [-SPREAD_FACTOR, 0, SPREAD_FACTOR],
    [BASE_SCALE, FOCUSED_SCALE, BASE_SCALE],
    { clamp: true }
  );

  const rotateY = useTransform(
    distanceFromCenter,
    [-SPREAD_FACTOR, 0, SPREAD_FACTOR],
    [MAX_ROTATION, 0, -MAX_ROTATION],
    { clamp: true }
  );

  const z = useTransform(
    distanceFromCenter,
    [-SPREAD_FACTOR, 0, SPREAD_FACTOR],
    [MAX_Z_TRANSLATE, 0, MAX_Z_TRANSLATE],
    { clamp: true }
  );
  
  const opacity = useTransform(
    distanceFromCenter,
    [-SPREAD_FACTOR * 1.5, -SPREAD_FACTOR, 0, SPREAD_FACTOR, SPREAD_FACTOR * 1.5],
    [0.5, 1, 1, 1, 0.5], // Fade out items far from center
    { clamp: true }
  );

  return (
    <motion.div
      {...{
        ref: thumbnailRef,
        className: "flex-shrink-0 group cursor-pointer",
        style: {
          width: `${itemWidth}px`,
          height: `${itemWidth * 1.66}px`, // Taller portrait aspect ratio (e.g., 300px for 180px width)
          marginRight: `${itemGap}px`, // Apply gap here
          transformOrigin: 'center center',
          scale,
          rotateY,
          z,
          opacity,
        },
        whileHover: {
          scale: 1.1, // Scale up more on hover
          rotateY: 0, // Flatten on hover
          zIndex: 20, // Ensure hovered item is on top
          transition: { type: 'spring', stiffness: 200, damping: 15, duration: 0.15 },
        },
      } as any}
    >
      <Link to="/testimonials" aria-label={`View testimonial related to ${video.alt}`} className="block w-full h-full">
        <motion.div className="w-full h-full bg-gray-300 rounded-xl overflow-hidden shadow-lg">
          <img
            src={video.src}
            alt={video.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ClientReviewThumbnail;