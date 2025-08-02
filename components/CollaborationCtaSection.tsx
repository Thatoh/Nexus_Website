
import React from 'react';
import { motion } from 'framer-motion';

const CollaborationCtaSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          {...{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "text-4xl md:text-5xl lg:text-6xl font-normal text-gray-500 mb-8 leading-tight",
          } as any}
        >
          <span className="font-bold text-nexusbyte-primary-dark">Not sure where to start?</span> We're here to tailor a solution just for you. Book a discovery call, and let's explore the possibilities together.
        </motion.h2>
        
        <motion.div
          {...{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 },
          } as any}
        >
          <button
            type="button"
            className="px-10 py-4 bg-nexusbyte-primary-dark text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors text-lg transform hover:scale-105"
            onClick={() => {
              // Add navigation or modal trigger logic here if needed
              // For now, it can just be a visual button
              alert("Let's Collaborate button clicked! Navigation or action can be implemented here.");
            }}
          >
            Let's Collaborate
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationCtaSection;
