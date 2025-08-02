

import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '../components/icons'; // Assuming ArrowRightIcon will be added

const profileImages = [
  { id: 1, src: 'https://picsum.photos/seed/person1/100/100', alt: 'User 1', style: 'top-10 left-10 opacity-70', size: 'w-16 h-16' },
  { id: 2, src: 'https://picsum.photos/seed/person2/100/100', alt: 'User 2', style: 'top-2 left-1/3 opacity-80', size: 'w-20 h-20' },
  { id: 3, src: 'https://picsum.photos/seed/person3/100/100', alt: 'User 3', style: 'top-12 left-1/2 -translate-x-1/2', size: 'w-24 h-24 shadow-lg z-10' }, // Center prominent
  { id: 4, src: 'https://picsum.photos/seed/person4/100/100', alt: 'User 4', style: 'top-4 right-1/3 opacity-80', size: 'w-20 h-20' },
  { id: 5, src: 'https://picsum.photos/seed/person5/100/100', alt: 'User 5', style: 'top-16 right-10 opacity-70', size: 'w-16 h-16' },
  { id: 6, src: 'https://picsum.photos/seed/person6/100/100', alt: 'User 6', style: 'bottom-20 left-16 opacity-60', size: 'w-12 h-12' },
  { id: 7, src: 'https://picsum.photos/seed/person7/100/100', alt: 'User 7', style: 'bottom-8 left-1/3 opacity-75', size: 'w-16 h-16' },
  // Special pop-out image
  { id: 8, src: 'https://picsum.photos/seed/person8pop/120/120', alt: 'User 8 Highlighted', style: 'top-1/2 -translate-y-1/2 right-4 md:right-[-20px] lg:right-[-40px] z-20', size: 'w-28 h-28 md:w-32 md:h-32' },
  { id: 9, src: 'https://picsum.photos/seed/person9/100/100', alt: 'User 9', style: 'bottom-16 right-1/3 opacity-70', size: 'w-14 h-14' },
  { id: 10, src: 'https://picsum.photos/seed/person10/100/100', alt: 'User 10', style: 'bottom-4 right-20 opacity-60', size: 'w-12 h-12' },
  { id: 11, src: 'https://picsum.photos/seed/person11/100/100', alt: 'User 11', style: 'top-20 left-24 opacity-70', size: 'w-12 h-12'},
  { id: 12, src: 'https://picsum.photos/seed/person12/100/100', alt: 'User 12', style: 'top-32 right-32 opacity-80', size: 'w-14 h-14'},
];

const DottedLine: React.FC<{ fromStyle: string; toStyle: string }> = ({ fromStyle, toStyle }) => {
  // This is a simplified representation. Real dotted lines between dynamic elements are complex.
  // For a basic visual effect, these could be positioned based on the profile images.
  // Here, we'll just render a few decorative ones.
  return <div className={`absolute border-l-2 border-dotted border-gray-300 h-10 ${fromStyle}`}></div>
}


const TestimonialsLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-80px)] py-12 md:py-16 lg:py-24"> {/* pt-20 for header height */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Montage Section */}
        <div className="relative h-64 md:h-80 mb-12 md:mb-16">
          {profileImages.map((img) => (
            <motion.div
              {...{
                key: img.id,
                className: `absolute rounded-lg overflow-hidden ${img.style} ${img.size} ${img.id === 8 ? 'shadow-2xl' : 'shadow-md'}`,
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: img.style.includes('opacity') ? parseFloat(img.style.split('opacity-')[1])/100 : 1, scale: 1 },
                transition: { duration: 0.5, delay: Math.random() * 0.5 },
              } as any}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
          {/* Decorative Dotted Lines (simplified) */}
          <DottedLine fromStyle="top-32 left-20 transform rotate-[25deg]" toStyle="" />
          <DottedLine fromStyle="top-40 left-1/3 transform -rotate-[15deg] h-16" toStyle="" />
          <DottedLine fromStyle="top-36 right-1/4 transform rotate-[10deg] h-12" toStyle="" />
           <DottedLine fromStyle="bottom-2 right-1/2 transform rotate-[-35deg] h-10" toStyle="" />

        </div>

        {/* Text Content Section */}
        <div className="text-center">
          <motion.span 
            {...{
              className: "inline-block bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm font-semibold mb-4",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
            } as any}
          >
            Testimonials
          </motion.span>
          <motion.h1 
            {...{
              className: "text-4xl sm:text-5xl md:text-6xl font-bold text-nexusbyte-primary-dark mb-6",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.3 },
            } as any}
          >
            Trusted by leaders <br className="hidden sm:block" />from various industries
          </motion.h1>
          <motion.p 
            {...{
              className: "text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.4 },
            } as any}
          >
            Learn why professionals trust our solutions to complete their customer journeys.
          </motion.p>
          <motion.div
            {...{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.5 },
            } as any}
          >
            <Link
              to="/insights/reports" // Example link, update as needed
              className="inline-flex items-center justify-center px-8 py-3 bg-nexusbyte-primary-dark text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300 text-lg"
            >
              Read Success Stories
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsLandingPage;