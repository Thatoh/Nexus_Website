

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ProductTile, CartItem } from '../types'; // Ensure CartItem is imported

// Define the shape of the context data
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: ProductTile) => void;
  getCartItemCount: () => number;
  incrementQuantity: (itemId: string) => void;
  decrementQuantity: (itemId: string) => void;
  removeFromCart: (itemId: string) => void; // Added removeFromCart
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((itemToAdd: ProductTile) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  }, []);

  const getCartItemCount = useCallback((): number => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const incrementQuantity = useCallback((itemId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decrementQuantity = useCallback((itemId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0) // Ensure item is removed if quantity becomes 0 (though decrement stops at 1)
    );
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }, []);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      getCartItemCount, 
      incrementQuantity, 
      decrementQuantity,
      removeFromCart // Expose new function
    }}>
      {children}
    </CartContext.Provider>
  );
}