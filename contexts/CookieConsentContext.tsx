import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CookieConsent, CookieConsentPreferences, CookieCategory, CookieCategoryId } from '../types';
import { COOKIE_CATEGORIES, LOCAL_STORAGE_COOKIE_CONSENT_KEY } from '../constants';

interface CookieConsentContextType {
  consent: CookieConsent;
  isLoading: boolean;
  acceptAll: () => void;
  declineAll: () => void;
  savePreferences: (newPreferences: CookieConsentPreferences) => void;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
  isPreferencesModalOpen: boolean;
  getConsentForCategory: (categoryId: CookieCategoryId) => boolean;
}

const defaultPreferences: CookieConsentPreferences = COOKIE_CATEGORIES.reduce((acc, category) => {
  acc[category.id] = !!category.required; // Enable required by default, others false
  return acc;
}, {} as CookieConsentPreferences);

const initialConsentState: CookieConsent = {
  hasMadeChoice: false,
  preferences: defaultPreferences,
  timestamp: undefined,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(initialConsentState);
  const [isLoading, setIsLoading] = useState(true);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const storedConsentString = localStorage.getItem(LOCAL_STORAGE_COOKIE_CONSENT_KEY);
      if (storedConsentString) {
        const storedConsent: CookieConsent = JSON.parse(storedConsentString);
        // Ensure all categories are present, even if new ones were added since last consent
        const currentPreferences = { ...defaultPreferences, ...storedConsent.preferences };
        COOKIE_CATEGORIES.forEach(category => {
          if (category.required) {
            currentPreferences[category.id] = true; // Ensure required are always true
          }
        });
        setConsent({ ...storedConsent, preferences: currentPreferences });
      } else {
        setConsent(initialConsentState);
      }
    } catch (error) {
      console.error("Error loading cookie consent from localStorage:", error);
      setConsent(initialConsentState); // Fallback to initial state on error
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateConsent = useCallback((newConsentState: Partial<CookieConsent>) => {
    const updatedConsent = { ...consent, ...newConsentState, timestamp: Date.now() };
    setConsent(updatedConsent);
    try {
      localStorage.setItem(LOCAL_STORAGE_COOKIE_CONSENT_KEY, JSON.stringify(updatedConsent));
    } catch (error) {
      console.error("Error saving cookie consent to localStorage:", error);
    }
  }, [consent]);

  const acceptAll = useCallback(() => {
    const allEnabledPreferences: CookieConsentPreferences = { ...consent.preferences };
    COOKIE_CATEGORIES.forEach(category => {
      allEnabledPreferences[category.id] = true;
    });
    updateConsent({ hasMadeChoice: true, preferences: allEnabledPreferences });
    setIsPreferencesModalOpen(false);
  }, [updateConsent, consent.preferences]);

  const declineAll = useCallback(() => {
    const necessaryOnlyPreferences: CookieConsentPreferences = { ...consent.preferences };
    COOKIE_CATEGORIES.forEach(category => {
      necessaryOnlyPreferences[category.id] = !!category.required;
    });
    updateConsent({ hasMadeChoice: true, preferences: necessaryOnlyPreferences });
    setIsPreferencesModalOpen(false);
  }, [updateConsent, consent.preferences]);

  const savePreferences = useCallback((newPreferences: CookieConsentPreferences) => {
    const finalPreferences = { ...newPreferences };
    // Ensure required cookies are always enabled
    COOKIE_CATEGORIES.forEach(category => {
      if (category.required) {
        finalPreferences[category.id] = true;
      }
    });
    updateConsent({ hasMadeChoice: true, preferences: finalPreferences });
    setIsPreferencesModalOpen(false);
  }, [updateConsent]);
  
  const openPreferencesModal = () => setIsPreferencesModalOpen(true);
  const closePreferencesModal = () => setIsPreferencesModalOpen(false);

  const getConsentForCategory = useCallback((categoryId: CookieCategoryId): boolean => {
    if (isLoading || !consent.hasMadeChoice) {
      // If still loading or no choice made, assume only necessary are consented
      const category = COOKIE_CATEGORIES.find(c => c.id === categoryId);
      return !!category?.required;
    }
    return consent.preferences[categoryId] ?? false;
  }, [consent, isLoading]);


  return (
    <CookieConsentContext.Provider value={{ 
        consent, 
        isLoading, 
        acceptAll, 
        declineAll, 
        savePreferences,
        openPreferencesModal,
        closePreferencesModal,
        isPreferencesModalOpen,
        getConsentForCategory
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
