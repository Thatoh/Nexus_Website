
import React from 'react';
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
    case 'purple':
      return `bg-purple-500 hover:bg-purple-600 text-white ${baseOpacity}`;
    default:
      return `bg-gray-500 hover:bg-gray-600 text-white ${baseOpacity}`;
  }
};

const FeatureCube: React.FC<FeatureCubeProps> = ({ tile, onClick, isActive, isAnyActive, cubeRef }) => {
  
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
        className: `relative rounded-xl p-6 md:p-8 shadow-lg cursor-pointer focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out h-64 md:h-72 flex flex-col justify-between items-start text-left
        ${getCubeColorClasses(tile.color, isAnyActive, isActive)} 
        ${isActive ? 'ring-4 ring-offset-2 ring-offset-gray-100' : ''}
        ${isAnyActive && !isActive ? 'pointer-events-none' : ''} 
      `,
        whileHover: !isAnyActive ? { scale: 1.05, y: -5 } : {},
        transition: { type: 'spring', stiffness: 300, damping: 20 },
        role: "button",
        "aria-expanded": isActive,
        "aria-label": `Select ${tile.title}`,
        tabIndex: isAnyActive && !isActive ? -1 : 0, // Make non-active cubes unfocusable when one is active
      } as any}
    >
      <div>
        {tile.icon && <tile.icon className="w-8 h-8 md:w-10 md:h-10 mb-3 text-white opacity-80" />}
        <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{tile.title}</h3>
        <p className="text-sm md:text-md font-medium opacity-90 mb-3">{tile.tagline}</p>
      </div>
      <p className="text-sm font-semibold opacity-95 self-end">
        {tile.longDescription} &rarr;
      </p>
    </motion.button>
  );
}

export default FeatureCube;
