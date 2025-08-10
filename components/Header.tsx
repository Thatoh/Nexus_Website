

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { NAV_ITEMS } from '../constants';
import { NavItem } from '../types';
import MegaMenu from './MegaMenu';
import { MenuIcon, XMarkIcon, ChevronDownIcon, UserCircleIcon, ShoppingCartIcon, TicketIcon } from './icons'; // Added UserCircleIcon, ShoppingCartIcon, TicketIcon
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext'; // Added useCart

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false); // State for login dropdown
  
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const loginIconRef = useRef<HTMLButtonElement>(null); // Ref for login icon
  const loginDropdownRef = useRef<HTMLDivElement>(null); // Ref for login dropdown
  
  const { getCartItemCount } = useCart(); // Get cart count
  const cartItemCount = getCartItemCount();

  const closeMegaMenuCompletely = () => {
    setActiveMegaMenu(null);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    closeMegaMenuCompletely();
    setIsLoginDropdownOpen(false); // Close login dropdown on route change
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavItemClick = (itemId: string, hasMegaMenu?: boolean) => {
    if (hasMegaMenu) {
      setActiveMegaMenu(prev => (prev === itemId ? null : itemId));
    } else {
      setActiveMegaMenu(null); 
      setIsMobileMenuOpen(false); 
    }
    setIsLoginDropdownOpen(false); // Close login dropdown when a nav item is clicked
  };

  // Click outside handler for both MegaMenu and LoginDropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close MegaMenu
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        if (!event.target || !(event.target as HTMLElement).closest('[role="dialog"], [aria-modal="true"]')) {
          closeMegaMenuCompletely();
        }
      }
      // Close Login Dropdown
      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target as Node) &&
        loginIconRef.current &&
        !loginIconRef.current.contains(event.target as Node)
      ) {
        setIsLoginDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-nexusbyte-primary-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20"> {/* Main flex container for header content */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src="/logo/logo-w.png" alt="NexusByte" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex ml-8 space-x-1 items-center">
            {NAV_ITEMS.map((item: NavItem) => (
              <div
                key={item.id}
                className="relative group"
                ref={(el) => { navItemRefs.current[item.id] = el; }}
              >
                <button
                  onClick={() => handleNavItemClick(item.id, !!item.megaMenuContent)}
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-nexusbyte-accent-green focus:outline-none focus:bg-gray-700 transition-colors duration-150 flex items-center
                    ${location.pathname.startsWith(item.path) || activeMegaMenu === item.id ? 'text-nexusbyte-accent-green' : 'text-gray-300'}`}
                  aria-haspopup={!!item.megaMenuContent}
                  aria-expanded={activeMegaMenu === item.id}
                >
                  <Link
                    to={!item.megaMenuContent ? item.path : '#'}
                    onClick={(e) => {
                      if (item.megaMenuContent) {
                        e.preventDefault();
                      } else {
                        closeMegaMenuCompletely();
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="focus:outline-none"
                  >
                    {item.title}
                  </Link>
                  {item.megaMenuContent && <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${activeMegaMenu === item.id ? 'transform rotate-180' : ''}`} />}
                </button>
                {item.megaMenuContent && navItemRefs.current[item.id] && (
                  <MegaMenu
                    isOpen={activeMegaMenu === item.id}
                    content={item.megaMenuContent}
                    onClose={closeMegaMenuCompletely} 
                    parentRef={{ current: navItemRefs.current[item.id] }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right side icons and mobile menu toggle */}
          <div className="ml-auto flex items-center space-x-3 sm:space-x-5">
            {/* Desktop Icons: User Login and Cart */}
            <div className="hidden md:flex items-center space-x-5">
              {/* User Login Dropdown */}
              <div className="relative">
                <button
                  ref={loginIconRef}
                  onClick={() => setIsLoginDropdownOpen(prev => !prev)}
                  className="text-gray-300 hover:text-nexusbyte-accent-green transition-colors focus:outline-none"
                  aria-label="User menu"
                  aria-haspopup="true"
                  aria-expanded={isLoginDropdownOpen}
                >
                  <UserCircleIcon className="h-7 w-7" />
                </button>
                <AnimatePresence>
                  {isLoginDropdownOpen && (
                    <motion.div
                      ref={loginDropdownRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5"
                    >
                      <Link
                        to="/signin"
                        onClick={() => setIsLoginDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-nexusbyte-primary-dark hover:bg-gray-100 hover:text-nexusbyte-accent-green"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/signup"
                        onClick={() => setIsLoginDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-nexusbyte-primary-dark hover:bg-gray-100 hover:text-nexusbyte-accent-green"
                      >
                        Sign Up
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shopping Cart Icon */}
              <Link
                to="/cart"
                className="relative text-gray-300 hover:text-nexusbyte-accent-green transition-colors focus:outline-none"
                aria-label="Shopping cart"
              >
                <ShoppingCartIcon className="h-7 w-7" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* Support Menu Option - Text Only */}
              <a
                href="https://www.ticketing.nexusbyte.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-nexusbyte-accent-green transition-colors focus:outline-none text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-700"
                aria-label="Support and ticketing system"
                title="Support & Ticketing System"
              >
                Support
              </a>
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <XMarkIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-nexusbyte-primary-dark border-t border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item: NavItem) => (
                <div key={`${item.id}-mobile`}>
                  <button
                     onClick={() => handleNavItemClick(item.id, !!item.megaMenuContent)}
                    className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-nexusbyte-accent-green focus:outline-none focus:bg-gray-700 transition-colors duration-150 flex justify-between items-center
                      ${location.pathname.startsWith(item.path) || activeMegaMenu === item.id ? 'text-nexusbyte-accent-green' : 'text-gray-300'}`}
                    aria-haspopup={!!item.megaMenuContent}
                    aria-expanded={item.megaMenuContent && activeMegaMenu === item.id}
                  >
                    {!item.megaMenuContent ? (
                        <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                            {item.title}
                        </Link>
                    ) : (
                        <span className="block w-full">{item.title}</span>
                    )}
                    {item.megaMenuContent && <ChevronDownIcon className={`w-5 h-5 transition-transform ${activeMegaMenu === item.id ? 'transform rotate-180' : ''}`} />}
                  </button>
                  {item.megaMenuContent && activeMegaMenu === item.id && (
                    <div className="pl-4 mt-1 space-y-1 py-2 bg-gray-800 rounded-md">
                      {item.megaMenuContent.items.map(menuItem => (
                        <div key={`${menuItem.id}-mobile-group`} className="pt-2 pb-1">
                          <p className="px-3 pt-1 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {menuItem.title}
                          </p>
                          
                          {menuItem.featured.linkUrl && menuItem.featured.linkText && (
                            <Link
                              to={menuItem.featured.linkUrl}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveMegaMenu(null);
                              }}
                              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-nexusbyte-accent-green"
                            >
                              {menuItem.featured.linkText}
                            </Link>
                          )}

                          {menuItem.subLinks.map(subLink => (
                            <Link
                              key={`${menuItem.id}-${subLink.href}-mobile`}
                              to={subLink.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveMegaMenu(null);
                              }}
                              className="block pl-6 pr-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-nexusbyte-accent-green"
                            >
                              {subLink.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Added User/Cart/Support links for mobile */}
              <div className="border-t border-gray-700 mt-3 pt-3 space-y-1">
                <Link
                  to="/signin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-nexusbyte-accent-green"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-nexusbyte-accent-green"
                >
                  Sign Up
                </Link>
                <a
                  href="https://www.ticketing.nexusbyte.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-nexusbyte-accent-green"
                >
                  Support
                </a>
                <Link
                  to="/cart"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-nexusbyte-accent-green"
                >
                  <span>View Cart</span>
                  {cartItemCount > 0 && (
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;