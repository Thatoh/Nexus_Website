
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ProductTile, ProductTileColor } from '../types';

interface FeatureCubeProps {
  tile: ProductTile;
  onClick: () => void;
  isActive: boolean; // To know if this cube is the one expanded
  isAnyActive: boolean; // To know if any cube is expanded (for styling others)
  cubeRef: React.RefObject<HTMLButtonElement>;
}

const getCubeColorClasses = (color: ProductTileColor, isAnyActive: boolean, isActive: boolean) => {
  const baseOpacity = isAnyActive && !isActive ? 'opacity-50' : 'opacity-100';
  switch (color) {
    case 'red':
      return `bg-red-500 hover:bg-red-600 text-white ${baseOpacity}`;
    case 'green':
      return `bg-green-500 hover:bg-green-600 text-white ${baseOpacity}`;
    case 'blue':
      return `bg-blue-500 hover:bg-blue-600 text-white ${baseOpacity}`;
    case 'yellow':
      return `bg-yellow-500 hover:bg-yellow-600 text-black ${baseOpacity}`;
    default:
      return `bg-gray-500 hover:bg-gray-600 text-white ${baseOpacity}`;
  }
};

const FeatureCube: React.FC<FeatureCubeProps> = memo(({ tile, onClick, isActive, isAnyActive, cubeRef }) => {
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <motion.button
      {...{
        ref: cubeRef,
        layoutId: tile.id,
        onClick: onClick,
        onKeyDown: handleKeyDown,
        className: `relative rounded-xl p-6 md:p-8 shadow-lg cursor-pointer focus:outline-none focus:ring-4 transition-all duration-150 ease-out h-64 md:h-72 flex flex-col justify-between items-start text-left overflow-hidden
        ${getCubeColorClasses(tile.color, isAnyActive, isActive)} 
        ${isActive ? 'ring-4 ring-offset-2 ring-offset-gray-100' : ''}
        ${isAnyActive && !isActive ? 'pointer-events-none' : ''} 
      `,
        whileHover: !isAnyActive ? { scale: 1.02, y: -2 } : {},
        transition: { duration: 0.2, ease: 'easeOut' },
        role: "button",
        "aria-expanded": isActive,
        "aria-label": `Select ${tile.title}`,
        tabIndex: isAnyActive && !isActive ? -1 : 0, // Make non-active cubes unfocusable when one is active
      } as any}
    >
      {/* Gloss Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none rounded-xl"></div>
      
      {/* Icon Handler Background */}
      <div className="relative z-10">
        {tile.icon && (
          <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 hover:bg-white/30`}>
            <tile.icon className={`w-6 h-6 md:w-8 md:h-8 ${tile.color === 'yellow' ? 'text-black' : 'text-white'} drop-shadow-sm`} />
          </div>
        )}
        <h3 className={`text-xl md:text-2xl font-bold mb-1 md:mb-2 ${tile.color === 'yellow' ? 'text-black' : 'text-white'} drop-shadow-sm`}>{tile.title}</h3>
        <p className={`text-sm md:text-md font-medium opacity-90 mb-3 ${tile.color === 'yellow' ? 'text-black' : 'text-white'} drop-shadow-sm`}>{tile.tagline}</p>
      </div>
      <p className={`text-sm font-semibold opacity-95 self-end relative z-10 ${tile.color === 'yellow' ? 'text-black' : 'text-white'} drop-shadow-sm`}>
        {tile.longDescription} &rarr;
      </p>
    </motion.button>
  );
});

export default FeatureCube;
