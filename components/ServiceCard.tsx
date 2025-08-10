import React from 'react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';
import clsx from 'clsx';

/**
 * Matches the dark, elastic tile style from your screenshot:
 * - Dark glass tile with subtle border
 * - Blue glow & gradient when active
 * - Yellow "Get Started" pill appears on active
 */
const cardBase =
  'relative h-full min-h-[320px] rounded-2xl ring-1 ring-white/5 bg-gradient-to-b from-[#0C111A] to-[#0A0D14] ' +
  'text-white/90 shadow-[0_1px_0_rgba(255,255,255,0.03)] overflow-hidden ' +
  'transition-all duration-200 ease-[cubic-bezier(.2,.8,.2,1)]';

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
      whileHover={{ y: -2 }}
    >
      {/* Blue halo when active */}
      {active && <div className={halo} />}

      {/* Inner */}
      <div className="relative z-10 p-5 sm:p-6 md:p-7 flex flex-col h-full">
        {/* Icon */}
        <div
          className={clsx(
            'mb-4 inline-flex items-center justify-center rounded-xl',
            'h-12 w-12 ring-1 ring-white/10',
            active ? 'bg-cyan-400/10 shadow-[0_0_40px_rgba(56,189,248,0.25)]' : 'bg-white/5'
          )}
        >
          {React.cloneElement(service.icon, { className: 'h-6 w-6 text-white/90' })}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className={clsx(
          'mt-2 text-sm md:text-[15px] leading-relaxed',
          active ? 'text-white/80' : 'text-white/60 line-clamp-3'
        )}>
          {service.description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA (only prominent when active) */}
        <div className="mt-5">
          <button
            className={clsx(
              'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
              active
                ? 'bg-green-400 text-[#0A0D14]'
                : 'bg-white/5 text-white/80 hover:bg-white/10'
            )}
          >
            {active ? 'Get Started' : 'Learn More'}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;