
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { COOKIE_CATEGORIES } from '../constants';
import { CookieConsentPreferences, CookieCategory } from '../types';
import { XMarkIcon } from './icons';

const CookiePreferencesModal: React.FC = () => {
  const { consent, savePreferences, acceptAll, isPreferencesModalOpen, closePreferencesModal } = useCookieConsent();
  const [currentPreferences, setCurrentPreferences] = useState<CookieConsentPreferences>(consent.preferences);

  useEffect(() => {
    setCurrentPreferences(consent.preferences);
  }, [consent.preferences, isPreferencesModalOpen]);

  const handleToggle = (categoryId: string) => {
    const category = COOKIE_CATEGORIES.find(c => c.id === categoryId);
    if (category && category.required) return; // Cannot toggle required cookies

    setCurrentPreferences(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleSave = () => {
    savePreferences(currentPreferences);
  };

  const handleAcceptAll = () => {
    acceptAll();
  };

  if (!isPreferencesModalOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isPreferencesModalOpen && (
        <motion.div
          {...{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[1001]",
            onClick: closePreferencesModal, // Close on backdrop click
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "cookie-preferences-title",
          } as any}
        >
          <motion.div
            {...{
              initial: { scale: 0.9, y: 20, opacity: 0 },
              animate: { scale: 1, y: 0, opacity: 1 },
              exit: { scale: 0.9, y: 20, opacity: 0 },
              transition: { type: 'spring', stiffness: 300, damping: 25 },
              className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden",
              onClick: (e: React.MouseEvent) => e.stopPropagation(), // Prevent closing when clicking inside modal
            } as any}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h2 id="cookie-preferences-title" className="text-xl font-semibold text-nexusbyte-primary-dark">
                Cookie Preferences
              </h2>
              <button
                onClick={closePreferencesModal}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-nexusbyte-accent-green"
                aria-label="Close cookie preferences modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Content & Categories */}
            <div className="p-6 overflow-y-auto space-y-5">
              <p className="text-sm text-gray-600">
                We use cookies to enhance your experience. You can choose which types of cookies to allow.
                For more information, please read our <a href="/cookies" target="_blank" rel="noopener noreferrer" className="text-nexusbyte-accent-green hover:underline">Cookie Policy</a>.
              </p>
              {COOKIE_CATEGORIES.map((category: CookieCategory) => (
                <div key={category.id} className={`p-4 rounded-md ${category.required ? 'bg-gray-100' : 'border border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-md font-semibold text-nexusbyte-primary-dark">{category.name}</h3>
                    <label htmlFor={`cookie-toggle-${category.id}`} className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        id={`cookie-toggle-${category.id}`}
                        className="sr-only peer"
                        checked={currentPreferences[category.id] ?? false}
                        onChange={() => handleToggle(category.id)}
                        disabled={category.required}
                        aria-describedby={`cookie-desc-${category.id}`}
                      />
                      <div className={`w-11 h-6 bg-gray-200 rounded-full peer
                                      peer-focus:ring-2 peer-focus:ring-offset-1 peer-focus:ring-nexusbyte-accent-green
                                      dark:bg-gray-700 peer-checked:after:translate-x-full 
                                      peer-checked:after:border-white after:content-[''] 
                                      after:absolute after:top-0.5 after:left-[2px] 
                                      after:bg-white after:border-gray-300 after:border 
                                      after:rounded-full after:h-5 after:w-5 after:transition-all 
                                      dark:border-gray-600 
                                      ${category.required ? 'peer-checked:bg-gray-400 cursor-not-allowed' : 'peer-checked:bg-nexusbyte-accent-green'}`}>
                      </div>
                    </label>
                  </div>
                  <p id={`cookie-desc-${category.id}`} className="text-xs text-gray-500 mt-1.5">{category.description}</p>
                  {category.required && <p className="text-xs text-gray-400 mt-1 italic">(Always Active)</p>}
                </div>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 p-5 border-t border-gray-200 bg-gray-50">
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 text-sm font-medium text-white bg-nexusbyte-accent-green rounded-md hover:bg-opacity-80 transition-colors w-full sm:w-auto"
                aria-label="Accept all cookies and save preferences"
              >
                Accept All
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2.5 text-sm font-medium text-nexusbyte-primary-dark bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto"
                aria-label="Save current cookie preferences"
              >
                Save Preferences
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferencesModal;
