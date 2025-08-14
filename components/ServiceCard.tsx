import React from 'react';
import { ServiceItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

/**
 * Improved ServiceCard with collapsed/expanded states:
 * - Default: Compact card with title and description only
 * - Hover/Focus: Expanded card with icon and CTA button
 * - Smooth animations with framer-motion
 */
const cardBase =
  'relative rounded-2xl ring-1 ring-white/5 bg-gradient-to-b from-[#0C111A] to-[#0A0D14] ' +
  'text-white/90 shadow-[0_1px_0_rgba(255,255,255,0.03)] overflow-hidden ' +
  'transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)]';

const halo =
  'pointer-events-none absolute inset-0 rounded-2xl ' +
  'bg-[radial-gradient(120%_120%_at_60%_0%,rgba(0,185,255,0.18),rgba(0,0,0,0)_60%)] ';

type Props = {
  service: ServiceItem;
  active?: boolean;
  index?: number;
  total?: number;
};

const ServiceCard: React.FC<Props> = ({ service, active = false }) => {
  return (
    <motion.article
      aria-label={service.title}
      aria-expanded={active}
      className={clsx(
        cardBase,
        active
          ? 'ring-[rgba(80,170,255,0.35)] ring-2'
          : 'hover:ring-white/10'
      )}
      initial={{ height: 190 }}
      animate={{ 
        height: active ? 320 : 190,
        y: active ? -5 : 0,
        scale: active ? 1.01 : 1
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }}
      whileHover={{ y: -2 }}
    >
      {/* Blue halo when active */}
      <AnimatePresence>
        {active && (
          <motion.div 
            className={halo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Inner content container */}
      <div className="relative z-10 p-4 flex flex-col h-full">
        {/* Icon - Only visible when active */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: 0.1
              }}
              className="mb-3 flex justify-center"
            >
              <div className={clsx(
                'inline-flex items-center justify-center rounded-lg',
                'h-20 w-20 ring-1 ring-white/10',
                'bg-cyan-400/10 shadow-[0_0_20px_rgba(56,189,248,0.25)]'
              )}>
                <img 
                  src={service.icon} 
                  alt={`${service.title} icon`}
                  className="h-10 w-10 object-contain" 
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title */}
        <motion.h3 
          className="text-lg font-semibold tracking-tight text-white text-center"
          animate={{ 
            fontSize: active ? "1.125rem" : "1rem",
            marginBottom: active ? "0.5rem" : "0.25rem"
          }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className={clsx(
            'text-xs leading-relaxed text-center',
            active ? 'text-white/80' : 'text-white/60'
          )}
          animate={{ 
            fontSize: active ? "0.75rem" : "0.625rem",
            lineHeight: active ? "1.5" : "1.4"
          }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>

        {/* Spacer - pushes CTA to bottom when active */}
        <motion.div 
          className="flex-1"
          animate={{ 
            minHeight: active ? "0.75rem" : "0rem"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* CTA Button - Only visible when active */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: 0.15
              }}
              className="mt-3 flex justify-center"
            >
              <button
                className={clsx(
                  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
                  'bg-yellow-400 text-[#0A0D14] hover:bg-yellow-300',
                  'transition-colors duration-200'
                )}
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
