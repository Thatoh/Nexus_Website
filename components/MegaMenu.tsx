

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { NewNavLinkMegaMenuContent } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import LazyImage from './LazyImage';
import { useMegaMenuPerformance } from '../hooks/useMegaMenuPerformance';
import './MegaMenu.css';

interface MegaMenuProps {
  isOpen: boolean;
  content?: NewNavLinkMegaMenuContent;
  onClose: () => void;
  parentRef: React.RefObject<HTMLDivElement>;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  isOpen,
  content,
  onClose,
  parentRef
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState<{ top: number } | null>(null);

  // Performance monitoring
  useMegaMenuPerformance(isOpen);

  // Memoized constants for better performance
  const fallbackImage = useMemo(() => 'https://placehold.co/100x100/fee2e2/ef4444?text=ImgErr', []);
  const featuredFallbackImage = useMemo(() => 'https://placehold.co/200x200/fee2e2/ef4444?text=ImgErr', []);

  // Memoized brand color for consistency
  const brandColor = useMemo(() => '#a8b545', []);

  // Optimized position calculation
  useEffect(() => {
    if (isOpen && parentRef?.current) {
      const rect = parentRef.current.getBoundingClientRect();
      const topPosition = rect.bottom + 5;
      setPosition({ top: topPosition });
    } else if (!isOpen) {
      setPosition(null);
    }
  }, [isOpen, parentRef]);

  // Reset active index when content changes
  useEffect(() => {
    if (isOpen && content?.items?.length) {
      setActiveIndex(0);
    }
  }, [content, isOpen]);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen || !content?.items?.length) return;

    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex(prev => (prev + 1) % content.items.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex(prev => prev === 0 ? content.items.length - 1 : prev - 1);
        break;
      case 'Enter':
      case ' ':
        if (content.items[activeIndex]?.featured?.linkUrl) {
          event.preventDefault();
          window.location.href = content.items[activeIndex].featured.linkUrl!;
        }
        break;
    }
  }, [isOpen, content, activeIndex, onClose]);

  // Add keyboard event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Early return with validation
  if (!isOpen || !content?.items?.length) {
    return null;
  }

  const currentActiveIndex = Math.min(activeIndex, content.items.length - 1);
  const activeContent = content.items[currentActiveIndex];

  if (!activeContent) {
    return null;
  }

  // Memoized click handler
  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  // Memoized item click handler
  const handleItemHover = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Calculate dynamic height based on content
  const calculateHeight = useMemo(() => {
    const baseHeight = 400; // Minimum height
    const itemHeight = 60; // Approximate height per navigation item
    const contentHeight = content.items.length * itemHeight;
    return Math.min(Math.max(baseHeight, contentHeight + 200), 800); // Max 800px
  }, [content.items.length]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bg-white shadow-2xl z-50 border-t border-gray-200"
          style={{
            width: '100vw',
            height: `${calculateHeight}px`, // Dynamic height
            top: position ? `${position.top}px` : '80px', // Fallback to header height if position not calculated yet
            left: '0px',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-full flex-col lg:flex-row"> {/* Responsive flex direction */}
              
              {/* Left-Hand Navigation Rail */}
              <div className="w-full lg:w-1/3 bg-gray-50/70 border-r border-gray-200 p-2 flex flex-col overflow-y-auto">
                <nav role="navigation" aria-label="Mega menu navigation">
                  {content.items.map((item, index) => (
                    <button
                      key={item.id}
                      onMouseEnter={() => handleItemHover(index)}
                      onClick={() => handleItemHover(index)}
                      className={`mega-menu-nav-item ${
                        currentActiveIndex === index 
                          ? 'mega-menu-nav-item--active' 
                          : 'mega-menu-nav-item--inactive'
                      }`}
                      aria-current={currentActiveIndex === index ? "true" : "false"}
                      aria-expanded={currentActiveIndex === index}
                      tabIndex={0}
                    >
                      {item.title} &raquo;
                    </button>
                  ))}
                </nav>
              </div>

              {/* Right-Hand Content Panel */}
              <div className="w-full lg:w-2/3 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentActiveIndex}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="p-5 flex flex-col bg-white h-full overflow-y-auto"
                  >
                    {/* Top Featured Section */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                      <div className="w-full sm:w-auto flex-shrink-0">
                        <LazyImage
                          src={activeContent.featured.imageUrl}
                          alt={activeContent.featured.title}
                          fallbackSrc={featuredFallbackImage}
                          className="w-full sm:w-24 md:w-32 h-24 md:h-32 object-cover rounded-lg border border-gray-100"
                        />
                      </div>
                      <div className="flex-grow w-full sm:w-auto">
                        <h3 className="text-lg md:text-xl font-bold text-nexusbyte-primary-dark mb-2">
                          {activeContent.featured.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-4 md:line-clamp-6">
                          {activeContent.featured.description}
                        </p>
                        {activeContent.featured.linkUrl && activeContent.featured.linkText && (
                          <Link
                            to={activeContent.featured.linkUrl}
                            onClick={handleLinkClick}
                            className="mega-menu-featured-link"
                          >
                            {activeContent.featured.linkText} &rarr;
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Bottom Sub-Links Section */}
                    <div className="mt-4 border-t border-gray-200 pt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {activeContent.subLinks.slice(0, 4).map(subLink => (
                          <Link
                            key={subLink.title}
                            to={subLink.href}
                            onClick={handleLinkClick}
                            className="mega-menu-sub-link"
                            title={subLink.title}
                          >
                            <LazyImage
                              src={subLink.imageUrl}
                              alt={subLink.title}
                              fallbackSrc={fallbackImage}
                              className="mega-menu-sub-link-image"
                            />
                            <div className="flex-grow">
                              <h4 className="mega-menu-sub-link-title">
                                {subLink.title}
                              </h4>
                              {subLink.description && (
                                <p className="text-xs md:text-sm text-gray-500 line-clamp-2 leading-tight">
                                  {subLink.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MegaMenu;