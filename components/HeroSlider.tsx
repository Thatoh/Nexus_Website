
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
    title: string;
    description: string;
    image: string;
    isVideo?: boolean;
}

const slides: Slide[] = [
    {
        title: "AI",
        description: "Artificial Intelligence Services",
        image: "/vid/panel_1.mp4",
        isVideo: true
    },
    {
        title: "Cloud",
        description: "Cloud Migration & Management",
        image: "/vid/panel_2.mp4",
        isVideo: true
    },
    {
        title: "ICT",
        description: "ICT Support Solutions",
        image: "/vid/panel_3.mp4",
        isVideo: true
    },
    {
        title: "Cyber",
        description: "Cybersecurity and Compliance",
        image: "/vid/panel_4.mp4",
        isVideo: true
    },
    {
        title: "Hybrid",
        description: "Hybrid Work Environments",
        image: "/vid/panel_5.mp4",
        isVideo: true
    },
    {
        title: "Web-hosting",
        description: "Reliable & Fast Web Hosting",
        image: "/vid/panel_6.mp4",
        isVideo: true
    }
];

const VideoHandler: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.error('Video ref not found');
      return;
    }

    console.log('Setting up video handler for:', src);
    console.log('Video element:', video);

    const handleLoadStart = () => {
      console.log('Video loading started:', src);
      setIsLoading(true);
    };
    
    const handleCanPlay = () => {
      console.log('Video can play:', src);
      setIsLoading(false);
    };
    
    const handleCanPlayThrough = () => {
      console.log('Video can play through:', src);
      setIsLoading(false);
    };
    
    const handleError = (e: Event) => {
      console.error('Video error:', src, e);
      setHasError(true);
      setIsLoading(false);
    };

    const handleLoadedData = () => {
      console.log('Video data loaded:', src);
      setIsLoading(false);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Set video attributes for better loading
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    // Try to play the video
    const playVideo = async () => {
      try {
        await video.play();
        console.log('Video started playing:', src);
      } catch (error) {
        console.error('Failed to play video:', error);
      }
    };

    playVideo();

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  if (hasError) {
    return (
      <div className={`${className} bg-gray-800 flex items-center justify-center`}>
        <span className="text-white text-sm">Video unavailable</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`${className} bg-gray-800 flex items-center justify-center`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          objectFit: 'cover',
          transition: 'opacity 0.3s ease-in-out'
        }}
        onError={(e) => {
          console.error('Video failed to load:', src, e);
          setHasError(true);
        }}
      >
        <source src={src} type="video/mp4" />
        <source src="/vid/main_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

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
            className: "relative h-full cursor-pointer group overflow-hidden",
            onMouseEnter: () => setHoveredIndex(index),
            animate: {
              flex: hoveredIndex === index ? 4 : hoveredIndex !== null ? 0.75 : 1,
              scale: hoveredIndex === index ? 1.05 : 1,
            },
            transition: springTransition,
          } as any}
        >
          {/* Background Image or Video */}
          {slide.isVideo ? (
            <VideoHandler 
              src={slide.image} 
              className="absolute inset-0 w-full h-full" 
            />
          ) : (
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
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
 
