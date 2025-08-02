import React, { useState, useRef, createRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { microsoftTiles } from '../data/microsoftTiles';
import FeatureGrid from './FeatureGrid';
import DetailOverlay from './DetailOverlay';
import { ProductTile } from '../types';

const ProductivitySection: React.FC = () => {
  const [activeCubeId, setActiveCubeId] = useState<ProductTile['id'] | null>(null);
  const [lastFocusedCubeRef, setLastFocusedCubeRef] = useState<React.RefObject<HTMLButtonElement> | null>(null);

  // Create refs for each cube
  const cubeRefs = useRef(microsoftTiles.map(() => createRef<HTMLButtonElement>())).current;

  const handleCubeClick = (id: ProductTile['id'], ref: React.RefObject<HTMLButtonElement>) => {
    setActiveCubeId(id);
    setLastFocusedCubeRef(ref);
  };

  const handleCloseOverlay = () => {
    setActiveCubeId(null);
    // Restore focus to the last clicked cube
    setTimeout(() => { // Timeout helps ensure the element is focusable after layout changes
        lastFocusedCubeRef?.current?.focus();
    }, 50); 
  };

  const activeTile = activeCubeId ? microsoftTiles.find(tile => tile.id === activeCubeId) : null;

  return (
    <section className="py-16 md:py-24 bg-white"> {/* Changed background to bg-white */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nexusbyte-primary-dark">
            Elevate Your Productivity
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover Microsoft solutions designed to empower your team, streamline workflows, and drive innovation.
          </p>
        </div>

        <FeatureGrid
          tiles={microsoftTiles}
          onCubeClick={handleCubeClick}
          activeCubeId={activeCubeId}
          cubeRefs={cubeRefs}
        />
      </div>

      <AnimatePresence>
        {activeTile && (
          <DetailOverlay
            tile={activeTile}
            onClose={handleCloseOverlay}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProductivitySection;