
import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { SERVICES_DATA } from '../constants';

const SCROLL_STEP = 360; // px per arrow click (320px card + 40px gap)

const ServicesCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const total = useMemo(() => SERVICES_DATA.length, []);
  const onArrow = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const delta = dir === 'left' ? -SCROLL_STEP : SCROLL_STEP;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#0A0D14] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/resources/ab-2.jpg)' }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0A0D14]/80"></div>
      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Core Services</h2>
          <p className="mt-3 text-white/60">
            Powering your business with advanced cloud, AI and managed solutions.
          </p>
        </div>

        {/* Rail */}
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            aria-label="Scroll left"
            onClick={() => onArrow('left')}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            aria-label="Scroll right"
            onClick={() => onArrow('right')}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll/Drag Track */}
          <div
            ref={trackRef}
            className="overflow-x-auto no-scrollbar w-full px-4"
          >
            <motion.div
              className={`
                flex gap-6 md:gap-8 py-4
                group
              `}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }} // framer enables inertia feel; scrolling does actual movement
              onDragStart={() => setActive(null)}
            >
              {SERVICES_DATA.map((service, idx) => {
                const isActive = active === service.id;
                return (
                  <motion.div
                    key={service.id}
                    className={`
                      w-[320px] flex-shrink-0
                      transition-all duration-300
                      ${isActive ? 'z-10' : 'z-0'}
                    `}
                    onMouseEnter={() => setActive(service.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(service.id)}
                    onBlur={() => setActive(null)}
                  >
                    <ServiceCard
                      service={service}
                      active={isActive}
                      index={idx}
                      total={total}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center mt-6 text-xs text-white/40">
            Tip: Hover or focus a card to expand. Use arrows (desktop) or swipe/drag (mobile) to browse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
