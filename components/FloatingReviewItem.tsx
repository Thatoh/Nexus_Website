

import React from 'react';
import { motion } from 'framer-motion';
import { ReviewItem } from '../types';
import { Link } from 'react-router';

interface FloatingReviewItemProps {
  item: ReviewItem;
}

const FloatingReviewItem: React.FC<FloatingReviewItemProps> = ({ item }) => {
  const fallbackImageUrl = `https://placehold.co/300x300/e2e8f0/94a3b8?text=${encodeURIComponent(item.metric.substring(0,10))}`;

  return (
    <Link to="/testimonials" aria-label={`View testimonial: ${item.metric}`}>
      <motion.div
        {...{
          className: `absolute rounded-xl shadow-xl cursor-pointer group ${item.positionClasses} ${item.sizeClasses}`,
          style: { zIndex: item.zIndex || 10 },
          animate: {
            y: ['-4px', '4px', '-4px'],
            x: ['3px', '-3px', '3px'],
          },
          transition: {
            duration: Math.random() * 2 + 4, // Random duration between 4-6s for variety
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.id * 0.3, // Staggered start for the continuous animation
          },
          whileHover: { scale: 1.1, zIndex: 30, transition: {duration: 0.2} }, // Bring to front on hover
        } as any}
      >
        <img
          src={item.imageUrl}
          alt={`Review metric: ${item.metric}`}
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImageUrl; }}
        />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-max max-w-[calc(100%-1rem)]">
          <div className="bg-black/60 backdrop-blur-sm rounded-md px-2.5 py-1 shadow-md">
            <p className="text-xs text-white uppercase font-semibold tracking-tight text-center truncate">
              {item.metric}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default FloatingReviewItem;
