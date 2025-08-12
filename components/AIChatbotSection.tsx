
import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon } from './icons';

type AIChatbotSectionProps = {
  onOpenChat: () => void;
};

const features = ['Machine Learning', 'Natural Language', 'Predictive Analytics'];

const AIChatbotSection: React.FC<AIChatbotSectionProps> = ({ onOpenChat }) => {
  return (
    <section className="py-16 md:py-24 bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass card */}
        <div
          className="
            relative overflow-hidden rounded-3xl
            ring-1 ring-white/10
            bg-[linear-gradient(180deg,rgba(18,22,32,0.9)_0%,rgba(10,13,20,0.92)_100%)]
            shadow-[0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.45)]
          "
        >
          {/* Right-side blue wave glow (decorative) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-[45%] opacity-80"
            style={{
              background:
                'radial-gradient(120% 120% at 80% 40%, rgba(56,189,248,0.25) 0%, rgba(2,6,23,0.0) 60%)',
              maskImage:
                'radial-gradient(120% 120% at 80% 40%, rgba(255,255,255,0.9) 0%, transparent 60%)',
              WebkitMaskImage:
                'radial-gradient(120% 120% at 80% 40%, rgba(255,255,255,0.9) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10 md:p-12">
            {/* Left content */}
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Unleash the Power<br className="hidden sm:block" /> of Nova AI
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {features.map((f) => (
                  <span
                    key={f}
                    className="
                      inline-flex items-center px-4 py-2 rounded-full
                      bg-white/5 text-white/80 ring-1 ring-white/10
                      text-sm
                    "
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA – keep your working handler */}
              <div className="mt-8">
                <motion.button
                  {...{
                    onClick: onOpenChat,
                    className:
                      'inline-flex items-center justify-center px-5 py-3 rounded-xl text-base font-semibold ' +
                      'bg-[#F5D02A] text-[#0A0D14] shadow-[0_6px_24px_rgba(245,208,42,0.35)] ' +
                      'hover:shadow-[0_10px_28px_rgba(245,208,42,0.45)] hover:brightness-105 ' +
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
                    whileHover: { scale: 1.04 },
                    whileTap: { scale: 0.98 },
                    'aria-label': 'Chat With Our AI',
                  } as any}
                >
                  Get Started
                </motion.button>
              </div>
            </div>

            {/* Right content: subtle icon anchor so layout matches the reference */}
            <div className="flex items-start justify-end">
              <div className="hidden lg:flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-white/10 bg-white/5">
                <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-white/80" />
              </div>
            </div>
          </div>
        </div>

        {/* Optional tiny caption like in the theme (can remove if not needed) */}
        {/* <p className="mt-3 text-xs text-white/40">Nova is your conversational AI across NexusByte.</p> */}
      </div>
    </section>
  );
};

export default AIChatbotSection;
