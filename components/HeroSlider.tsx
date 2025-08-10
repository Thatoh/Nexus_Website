
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        title: "AI",
        description: "Artificial Intelligence Services",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop"
    },
    {
        title: "Cloud",
        description: "Cloud Migration & Management",
        image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "ICT",
        description: "ICT Support Solutions",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Cyber",
        description: "Cybersecurity and Compliance",
        image: "https://images.unsplash.com/photo-1585224329712-61501918ac59?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Hybrid",
        description: "Hybrid Work Environments",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
    },
    {
        title: "Web-hosting",
        description: "Reliable & Fast Web Hosting",
        image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop"
    }
];

const HeroSlider: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springTransition = {
    type: "spring" as const, // Added 'as const' here
    stiffness: 200,
    damping: 25,
  };

  return (
    <div
      className="w-full h-screen flex overflow-hidden bg-nexusbyte-primary-dark"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {slides.map((slide, index) => (
        <motion.div
          {...{
            key: slide.title,
            className: "relative h-full cursor-pointer group",
            style: {
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            onMouseEnter: () => setHoveredIndex(index),
            animate: {
              flex: hoveredIndex === index ? 4 : hoveredIndex !== null ? 0.75 : 1,
              scale: hoveredIndex === index ? 1.05 : 1,
            },
            transition: springTransition,
          } as any}
        >
          {/* Dark Overlay */}
          <motion.div
            {...{
              className: "absolute inset-0",
              initial: { backgroundColor: "rgba(0,0,0,0.7)" },
              animate: {
                backgroundColor: hoveredIndex === index ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.7)",
              },
              transition: { duration: 0.5, ease: "easeInOut" },
            } as any}
          />

          {/* Content Container */}
          <div className="relative z-10 w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              {hoveredIndex === index ? (
                // HOVERED: Show Title, Description, Button
                <motion.div
                  {...{
                    key: `details-${slide.title}`,
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.15 } },
                    exit: { opacity: 0, y: 30, transition: { duration: 0.3, ease: "easeIn" } },
                    className: "flex flex-col justify-end items-start h-full p-6 md:p-10 lg:p-12",
                  } as any}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 md:mb-5 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-md md:text-lg text-gray-100 mb-5 md:mb-8 max-w-sm md:max-w-md drop-shadow-md">
                    {slide.description}
                  </p>
                  <motion.button
                    {...{
                      className: "px-5 py-2.5 sm:px-6 sm:py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-nexusbyte-accent-green focus:ring-offset-2 focus:ring-offset-black transition-colors text-sm sm:text-base",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                    } as any}
                  >
                    Discover More
                  </motion.button>
                </motion.div>
              ) : (
                // NOT HOVERED (OR ANOTHER IS HOVERED): Show Rotated Title
                <motion.div
                  {...{
                    key: `rotated-${slide.title}`,
                    initial: { opacity: 0, rotate: -90, x: "-50%", y: "-50%" },
                    animate: { opacity: 1, rotate: -90, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } },
                    exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
                    className: "absolute top-1/2 left-1/2 pointer-events-none",
                  } as any}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap drop-shadow-md">
                    {slide.title}
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroSlider;
 