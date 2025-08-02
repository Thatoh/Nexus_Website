
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import ServiceCard from './ServiceCard';

const ServicesCarousel: React.FC = () => {
  // Calculate approximate width of a card + gap for dragConstraints
  // This is an estimation; for precise calculation, consider using ResizeObserver or similar if card widths are dynamic.
  const cardWidthEstimate = 320; // Based on md:min-w-[320px]
  const gapEstimate = 24; // Based on gap-6 (1.5rem = 24px)
  const totalContentWidth = SERVICES_DATA.length * (cardWidthEstimate + gapEstimate) - gapEstimate; // Total width of all cards and gaps

  return (
    <section className="py-16 md:py-24 bg-white"> {/* Changed background to bg-white */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nexusbyte-primary-dark">Core Services</h2>
          <p className="mt-4 text-lg text-gray-600">Powering your business with cutting-edge ICT solutions.</p>
        </div>
        <div className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div 
                {...{
                    className: "flex gap-6 pb-4",
                    drag: "x",
                    dragConstraints: { left: -(totalContentWidth - (typeof window !== 'undefined' ? window.innerWidth * 0.8 : cardWidthEstimate)) , right: 0 } // Allow dragging until last card is mostly visible
                } as any}
            >
            {SERVICES_DATA.map(service => (
              <motion.div key={service.id} className="min-w-[280px] md:min-w-[320px] flex-shrink-0">
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
         <p className="text-center mt-8 text-sm text-gray-500">Hint: You can drag the cards horizontally to see more.</p>
      </div>
    </section>
  );
}

export default ServicesCarousel;
