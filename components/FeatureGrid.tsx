
import React from 'react';
import { motion } from 'framer-motion';
import { ProductTile } from '../types';
import FeatureCube from './FeatureCube';

interface FeatureGridProps {
  tiles: ProductTile[];
  onCubeClick: (id: ProductTile['id'], ref: React.RefObject<HTMLButtonElement>) => void;
  activeCubeId: ProductTile['id'] | null;
  cubeRefs: React.RefObject<HTMLButtonElement>[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ tiles, onCubeClick, activeCubeId, cubeRefs }) => {
  return (
    <motion.div
      {...{
        className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
        initial: { opacity: 1 },
        animate: { opacity: activeCubeId ? 0.3 : 1 }, // Fade out grid if a cube is active
        transition: { duration: 0.15 },
      } as any}
    >
      {tiles.map((tile, index) => (
        <FeatureCube
          key={tile.id}
          tile={tile}
          onClick={() => onCubeClick(tile.id, cubeRefs[index])}
          isActive={activeCubeId === tile.id}
          isAnyActive={!!activeCubeId}
          cubeRef={cubeRefs[index]}
        />
      ))}
    </motion.div>
  );
}

export default FeatureGrid;
