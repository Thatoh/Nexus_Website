
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, WhatsAppIcon, XMarkIcon } from './icons';

const FloatingCta: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Call Support", icon: PhoneIcon, href: "tel:+27812510508" },
    { label: "Call Accounts", icon: PhoneIcon, href: "tel:+27812510508" },
    { label: "WhatsApp Us", icon: WhatsAppIcon, href: "https://wa.me/27812510828", isWhatsApp: true },
  ];

  return (
    <div className="fixed bottom-1/2 translate-y-1/2 right-4 md:right-6 z-50">
      <div className="relative flex flex-col items-center gap-3">
        {/* Animated Menu Items */}
        <AnimatePresence>
          {isMenuOpen && menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.isWhatsApp ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-max bg-white rounded-full shadow-lg p-3 text-sm font-semibold text-nexusbyte-primary-dark hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.07, type: 'spring', stiffness: 300, damping: 20 } }}
              exit={{ opacity: 0, y: 15 }}
              aria-label={item.label}
            >
              <span className="hidden sm:inline">{item.label}</span>
              <item.icon className={`w-6 h-6 ${item.isWhatsApp ? 'text-green-500' : 'text-blue-700'}`} />
            </motion.a>
          ))}
        </AnimatePresence>
        
        {/* Main Floating Action Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-16 h-16 bg-[#00529b] text-white rounded-full flex items-center justify-center shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isMenuOpen}
          aria-label="Contact options"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={isMenuOpen ? 'close' : 'phone'}
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                >
                    {isMenuOpen ? <XMarkIcon className="w-8 h-8"/> : <PhoneIcon className="w-8 h-8" />}
                </motion.div>
            </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingCta;
