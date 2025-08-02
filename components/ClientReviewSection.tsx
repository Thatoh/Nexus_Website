

import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import ClientReviewThumbnail from './ClientReviewThumbnail'; // New component
import { Link } from 'react-router'; // Import Link

// Video thumbnails data - 8 items for a good looping feel
const videoThumbnails = [
  { id: 1, src: 'https://images.unsplash.com/photo-1516924967282-e9c85cbdb3c1?q=80&w=300&h=500&auto=format&fit=crop', alt: 'Person on cliff overlooking sea' },
  { id: 2, src: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=300&h=500&auto=format&fit=crop', alt: 'Woman relaxing with face mask' },
  { id: 3, src: 'https://images.unsplash.com/photo-1478144592103-2531830c0250?q=80&w=300&h=500&auto=format&fit=crop', alt: 'Healthy food flat lay with citrus' },
  { id: 4, src: 'https://images.unsplash.com/photo-1540420773420-254d31a50635?q=80&w=300&h=500&auto=format&fit=crop', alt: 'Woman eating a healthy meal' },
  { id: 5, src: 'https://images.unsplash.com/photo-1502700559166-5f85517a1dd1?q=80&w=300&h=500&auto=format&fit=crop', alt: 'Person riding motorcycle on road' },
  { id: 6, src: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=300&h=500&auto=format&fit=crop', alt: 'Fresh orange juice being poured' },
  { id: 7, src: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=300&h=500&auto=format&fit=crop', alt: 'Group of people dancing outdoors' },
  { id: 8, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&h=500&auto=format&fit=crop', alt: 'Fitness class in progress' },
];

const duplicatedVideoThumbnails = [...videoThumbnails, ...videoThumbnails, ...videoThumbnails]; // Duplicate more for smoother long scroll perception

const HandDrawnArrowLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M58 20C48.5 20 42.5 11 32 10.5C21.5 10 14.6667 19.1667 2 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L2 20.5L12 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const HandDrawnArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 20C11.5 20 17.5 11 28 10.5C38.5 10 45.3333 19.1667 58 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 12L58 20.5L48 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ClientReviewSection: React.FC = () => {
  const itemWidth = 180; // Corresponds to sm:min-w-[180px]
  const itemGap = 16; // Corresponds to gap-4
  const oneSetWidth = videoThumbnails.length * (itemWidth + itemGap);
  
  const scrollX = useMotionValue(0);

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          {...{
            initial: { opacity: 0, y: -10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.5 },
            transition: { duration: 0.5 },
            className: "mb-4",
          } as any}
        >
          <span className="inline-block bg-yellow-400 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow-sm">
            Join over 100,000 happy creators
          </span>
        </motion.div>

        <motion.h2
          {...{
            initial: { opacity: 0, y: -20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.5 },
            transition: { duration: 0.6, delay: 0.1 },
            className: "text-4xl sm:text-5xl md:text-6xl font-extrabold text-nexusbyte-primary-dark mb-5",
          } as any}
        >
          Engage Audiences <br className="sm:hidden" />
          with Stunning Videos
        </motion.h2>

        <motion.p
          {...{
            initial: { opacity: 0, y: -20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.5 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "text-md sm:text-lg text-gray-700 max-w-xl mx-auto mb-10",
          } as any}
        >
          Boost your brand with high-impact short videos from our expert content creators. Our team is ready to propel your business forward.
        </motion.p>
      </div>

      <div 
        className="relative mb-12 h-[320px] sm:h-[360px] flex items-center" // Height to accommodate transformations
        style={{ perspective: '1200px' }} // Apply perspective to the parent for 3D effect
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        <motion.div
          {...{
            className: "flex px-2", // Removed gap-4 here, gap is handled by thumbnail margin if needed or within thumbnail component logic
            style: { 
              transformStyle: 'preserve-3d', // Enable 3D transformations for children
            },
            animate: { x: [0, -oneSetWidth] }, // Animate scrollX from 0 to -oneSetWidth
            transition: {
              x: {
                duration: 35, 
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              },
            },
            onUpdate: (latest: any) => scrollX.set(latest.x as number),
          } as any}
          // The onUpdate callback can be used if we need to react to scrollX changes for other logic,
          // but for child transformations, passing scrollX directly is often cleaner.
        >
          {duplicatedVideoThumbnails.map((video, index) => (
            <ClientReviewThumbnail
              key={`${video.id}-${index}`}
              video={video}
              index={index}
              scrollX={scrollX} // Pass the scrollX motion value
              itemWidth={itemWidth}
              itemGap={itemGap}
              totalUniqueItems={videoThumbnails.length}
            />
          ))}
        </motion.div>
      </div>
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        <div className="flex justify-between items-end mb-8 px-4 sm:px-0">
          <motion.div 
            {...{
              className: "text-left",
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, amount: 0.5 },
              transition: { duration: 0.5, delay: 0.3 },
            } as any}
          >
            <HandDrawnArrowLeft className="w-12 h-8 sm:w-16 sm:h-10 text-gray-500 transform rotate-[-15deg] mb-1" />
            <span className="text-sm font-medium text-gray-600 italic">It's free</span>
          </motion.div>
          <motion.div
            {...{
              className: "text-right",
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, amount: 0.5 },
              transition: { duration: 0.5, delay: 0.3 },
            } as any}
          >
            <Link 
              to="/dashboard/brand-analytics" 
              className="inline-block group cursor-pointer"
              aria-label="Access your brand analytics dashboard"
            >
              <HandDrawnArrowRight className="w-12 h-8 sm:w-16 sm:h-10 text-gray-500 transform rotate-[10deg] mb-1 ml-auto transition-colors duration-200 group-hover:text-nexusbyte-accent-green" />
              <span className="text-sm font-medium text-gray-600 italic transition-colors duration-200 group-hover:text-nexusbyte-accent-green">Elevate your brand</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...{
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, amount: 0.5 },
            transition: { duration: 0.5, delay: 0.4 },
          } as any}
        >
          <a // Changed from Link to <a> for external or non-SPA navigation for "Get Started"
            href="/contact" // Assuming /contact is the target, adjust if it's a specific product/service page
            className="inline-block px-10 py-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors text-lg"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ClientReviewSection;