
import React from 'react';
import { motion } from 'framer-motion';
import { ProductTile, ProductTileColor } from '../types';
import { useCart } from '../contexts/CartContext'; // Assuming CartContext is set up

interface AddToCartButtonProps {
  tile: ProductTile;
  buttonRef?: React.RefObject<HTMLButtonElement>; // For focus management
}

const getButtonColorClasses = (color: ProductTileColor) => {
  switch (color) {
    case 'red':
      return 'bg-red-600 hover:bg-red-700 focus:ring-red-500';
    case 'green':
      return 'bg-green-600 hover:bg-green-700 focus:ring-green-500';
    case 'blue':
      return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
    case 'purple':
      return 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500';
    default:
      return 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500';
  }
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ tile, buttonRef }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(tile);
  };

  return (
    <motion.button
      {...{
        ref: buttonRef,
        onClick: handleAddToCart,
        className: `w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ${getButtonColorClasses(tile.color)}`,
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
      } as any}
    >
      Add to Cart - R{tile.pricePerUser.toFixed(2)} / user
    </motion.button>
  );
}

export default AddToCartButton;
