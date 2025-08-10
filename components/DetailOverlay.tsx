
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ProductTile, ProductTileColor } from '../types';
import { XMarkIcon } from './icons';
import AddToCartButton from './AddToCartButton';

interface DetailOverlayProps {
  tile: ProductTile;
  onClose: () => void;
}

const getDynamicTextAndBorderColor = (color: ProductTileColor): string => {
  switch (color) {
    case 'red': return 'text-red-700 border-red-500';
    case 'green': return 'text-green-700 border-green-500';
    case 'blue': return 'text-blue-700 border-blue-500';
    case 'yellow': return 'text-yellow-700 border-yellow-500';
    default: return 'text-gray-700 border-gray-500';
  }
};

const getDynamicBgColor = (color: ProductTileColor): string => {
  switch (color) {
    case 'red': return 'bg-red-600';
    case 'green': return 'bg-green-600';
    case 'blue': return 'bg-blue-600';
    case 'yellow': return 'bg-yellow-600';
    default: return 'bg-gray-600';
  }
};

const DetailOverlay: React.FC<DetailOverlayProps> = ({ tile, onClose }) => {
  const overlayContentRef = useRef<HTMLDivElement>(null);
  const addToCartButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = `detail-overlay-title-${tile.id}`;

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  useEffect(() => {
    // Focus the "Add to Cart" button when the overlay opens
    requestAnimationFrame(() => {
      addToCartButtonRef.current?.focus();
    });
    
    // Trap focus within the modal
    const focusableElementsString = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modalElement = overlayContentRef.current;

    const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Tab' && modalElement) {
            const focusableElements = modalElement.querySelectorAll(focusableElementsString) as NodeListOf<HTMLElement>;
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        }
    };

    document.addEventListener('keydown', handleTabKeyPress);
    return () => {
        document.removeEventListener('keydown', handleTabKeyPress);
    };

  }, [tile.id]);

  const dynamicColorClasses = getDynamicTextAndBorderColor(tile.color);
  const dynamicBgClass = getDynamicBgColor(tile.color);

  return (
    <motion.div
      {...{
        layoutId: tile.id,
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": titleId,
        onClick: onClose, // Close on backdrop click
      } as any}
    >
      <motion.div
        {...{
          ref: overlayContentRef,
          className: "bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden",
          initial: { scale: 0.9, y: 20 },
          animate: { scale: 1, y: 0 },
          exit: { scale: 0.9, y: 20, opacity: 0 },
          transition: { duration: 0.2, ease: 'easeOut' },
          onClick: (e: React.MouseEvent) => e.stopPropagation(), // Prevent closing when clicking inside modal content
        } as any}
      >
        {/* Header Ribbon */}
        <div className={`relative p-4 text-white text-center font-semibold text-lg ${dynamicBgClass}`}>
          Recommended: {tile.title}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-opacity-80 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close details"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column (Hero Copy) */}
            <div className="lg:col-span-2 space-y-6">
              <h1 id={titleId} className={`text-3xl md:text-4xl font-bold ${dynamicColorClasses.split(' ')[0]}`}>{tile.title}</h1>
              <p className="text-lg text-gray-700">{tile.tagline}</p>
              
              {tile.heroCopy.map((section, index) => (
                <div key={index}>
                  <h3 className={`text-xl font-semibold mb-2 ${dynamicColorClasses.split(' ')[0]}`}>{section.header}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-2">
                    {section.bullets.map((bullet, bIndex) => <li key={bIndex}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
               <hr className={`my-6 ${dynamicColorClasses.split(' ')[1]}`} />
            </div>

            {/* Right Column (Plan Details & Pricing) */}
            <div className="lg:col-span-1 space-y-6">
              {tile.planDetails.map((section, index) => (
                 <div key={index}>
                  <h3 className={`text-xl font-semibold mb-2 ${dynamicColorClasses.split(' ')[0]}`}>{section.header}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-2">
                    {section.bullets.map((bullet, bIndex) => <li key={bIndex}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
              <div className="mt-auto pt-6"> {/* Pushes button to bottom if content is short */}
                <p className="text-3xl font-bold text-gray-800 mb-1 text-center">
                  R{tile.pricePerUser.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mb-4 text-center">per user / month</p>
                <AddToCartButton tile={tile} buttonRef={addToCartButtonRef} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DetailOverlay;
