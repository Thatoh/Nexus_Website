
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { CogIcon } from './icons'; // Assuming CogIcon is available

const CookieConsentBanner: React.FC = () => {
  const { consent, isLoading, acceptAll, declineAll, openPreferencesModal } = useCookieConsent();

  if (isLoading || consent.hasMadeChoice) {
    return null;
  }

  return (
    <AnimatePresence>
      {!consent.hasMadeChoice && (
        <motion.div
          {...{
            initial: { y: '100%', opacity: 0 },
            animate: { y: '0%', opacity: 1 },
            exit: { y: '100%', opacity: 0 },
            transition: { duration: 0.5, ease: 'easeInOut' },
            className: "fixed bottom-0 left-0 right-0 bg-nexusbyte-primary-dark text-white p-4 sm:p-6 shadow-2xl z-[1000]",
            role: "region",
            "aria-label": "Cookie Consent Banner",
          } as any}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm md:text-base text-gray-200 flex-grow">
              <h3 className="text-lg font-semibold mb-1 text-white">Our Use of Cookies</h3>
              <p>
                We use cookies and similar technologies to enhance your browsing experience,
                analyze site traffic, and deliver personalized content. By clicking "Accept All",
                you agree to our use of cookies. You can manage your preferences at any time.
                View our <a href="/cookies" target="_blank" rel="noopener noreferrer" className="underline hover:text-nexusbyte-accent-green">Cookie Policy</a>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={openPreferencesModal}
                className="px-5 py-2.5 text-sm font-medium border border-gray-400 text-gray-200 rounded-md hover:bg-gray-700 hover:border-gray-500 transition-colors flex items-center justify-center w-full sm:w-auto"
                aria-label="Manage cookie preferences"
              >
                <CogIcon className="w-5 h-5 mr-2" />
                Manage Preferences
              </button>
              <button
                onClick={declineAll}
                className="px-5 py-2.5 text-sm font-medium bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors w-full sm:w-auto"
                aria-label="Decline all non-essential cookies"
              >
                Decline All
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 text-sm font-medium bg-nexusbyte-accent-green text-nexusbyte-primary-dark rounded-md hover:bg-opacity-80 transition-colors font-semibold w-full sm:w-auto"
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
