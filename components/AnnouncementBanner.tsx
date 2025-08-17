import React, { useState } from 'react';
import { XMarkIcon } from './icons';

interface AnnouncementBannerProps {
  title?: string;
  message?: string;
  ctaText?: string;
  ctaLink?: string;
  onDismiss?: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  title = "GeneriCon 2023",
  message = "Join us in Denver from June 7 – 9 to see what's coming next.",
  ctaText = "Register now",
  ctaLink = "#",
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10" style={{ backgroundColor: '#a8b545' }}>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-40"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-40"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6" style={{ color: '#2d3748' }}>
          <strong className="font-semibold">{title}</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current" style={{ color: '#2d3748' }}>
            <circle r={1} cx={1} cy={1} />
          </svg>
          {message}
        </p>
        <a
          href={ctaLink}
          className="flex-none rounded-full px-3.5 py-1 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          style={{ backgroundColor: '#2d3748' }}
        >
          {ctaText} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button 
          type="button" 
          className="-m-3 p-3 focus-visible:-outline-offset-4"
          onClick={handleDismiss}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5" style={{ color: '#2d3748' }} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
