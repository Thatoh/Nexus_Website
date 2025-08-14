


import React, { useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { BriefcaseIcon, CpuChipIcon, CloudArrowUpIcon, UsersIcon, ShoppingCartIcon, XMarkIcon } from '../components/icons'; 
import { ProductTileColor } from '../types';

const CartPage: React.FC = () => {
  const { cartItems, getCartItemCount, incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  // Simulate user authentication status (replace with actual auth check in a real app)
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const totalItems = getCartItemCount();
  const totalPrice = cartItems.reduce((total, item) => total + item.pricePerUser * item.quantity, 0);

  const getIconForProduct = (id: ProductTileColor | string) => {
    switch (id) {
      case 'm365':
      case 'red':
        return <BriefcaseIcon className="w-10 h-10 text-red-500" />;
      case 'teams':
      case 'green':
        return <UsersIcon className="w-10 h-10 text-nexusbyte-accent-green" />;
      case 'azure':
      case 'blue':
        return <CloudArrowUpIcon className="w-10 h-10 text-blue-500" />;
      case 'copilot':
      case 'purple':
        return <CpuChipIcon className="w-10 h-10 text-purple-500" />;
      default:
        return <ShoppingCartIcon className="w-10 h-10 text-gray-400" />;
    }
  };

  const handleProceedToPayment = () => {
    if (isAuthenticated) {
      alert('Proceeding to actual payment gateway... (Simulation)');
      // In a real app, navigate to payment page or trigger payment flow
    } else {
      setShowAuthPrompt(true);
    }
  };

  return (
    <div className="bg-gray-100 py-12 md:py-16 min-h-[calc(100vh-288px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-nexusbyte-primary-dark mb-8 text-center">
          Your Shopping Cart
        </h1>

        {totalItems === 0 ? (
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <ShoppingCartIcon className="w-16 h-16 mx-auto text-gray-300 mb-6" />
            <p className="text-xl text-gray-700 mb-4">Your cart is currently empty.</p>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-md hover:bg-opacity-90 transition-colors text-lg shadow-sm"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Cart Items List */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md space-y-6">
              <h2 className="text-2xl font-semibold text-nexusbyte-primary-dark border-b pb-3 mb-4">
                Order Summary ({totalItems} item{totalItems > 1 ? 's' : ''})
              </h2>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4 py-4 border-b last:border-b-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                    {getIconForProduct(item.id)}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-nexusbyte-primary-dark">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.tagline}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        disabled={item.quantity <= 1}
                        className="px-2 py-1 border rounded-l-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700"
                        aria-label={`Decrease quantity of ${item.title}`}
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-t border-b text-sm text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="px-2 py-1 border rounded-r-md hover:bg-gray-200 text-gray-700"
                        aria-label={`Increase quantity of ${item.title}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <p className="text-lg font-semibold text-nexusbyte-primary-dark">
                      R{(item.pricePerUser * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                      (R{item.pricePerUser.toFixed(2)} each)
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Actions & Total */}
            <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md space-y-6 sticky top-24">
              <h2 className="text-2xl font-semibold text-nexusbyte-primary-dark border-b pb-3 mb-4">
                Total
              </h2>
              <div className="flex justify-between items-center text-xl font-semibold text-nexusbyte-primary-dark">
                <span>Grand Total:</span>
                <span>R{totalPrice.toFixed(2)}</span>
              </div>
              
              {!showAuthPrompt ? (
                <button
                  onClick={handleProceedToPayment}
                  className="w-full mt-4 px-6 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-md hover:bg-opacity-90 transition-colors text-lg shadow-md"
                >
                  Proceed to Payment
                </button>
              ) : (
                <div className="mt-4 p-4 border border-blue-300 bg-blue-50 rounded-md shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-md font-semibold text-blue-700">Authentication Required</p>
                    <button 
                      onClick={() => setShowAuthPrompt(false)} 
                      className="text-blue-500 hover:text-blue-700"
                      aria-label="Close authentication prompt"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-blue-600 mb-4">
                    To complete your purchase, please sign in or create an account.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/signin"
                      onClick={() => setShowAuthPrompt(false)} // Hide prompt on navigation
                      className="w-full text-center px-4 py-2.5 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setShowAuthPrompt(false)} // Hide prompt on navigation
                      className="w-full text-center px-4 py-2.5 border border-blue-500 text-blue-600 font-semibold rounded-md hover:bg-blue-100 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}

              {/* General Sign In/Up links, always visible unless auth prompt is up */}
              {!showAuthPrompt && (
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600 mb-3 text-center">
                    Already have an account or new here?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/signin"
                      className="flex-1 text-center px-4 py-2.5 border border-nexusbyte-primary-dark text-nexusbyte-primary-dark font-semibold rounded-md hover:bg-nexusbyte-primary-dark hover:text-white transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="flex-1 text-center px-4 py-2.5 border border-nexusbyte-accent-green bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-md hover:bg-opacity-80 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
