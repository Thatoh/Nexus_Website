

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SuggestedDomain } from '../../types'; // Adjusted path for types

interface SearchResultsProps {
  status: 'idle' | 'searching' | 'suggesting' | 'success' | 'error';
  searchResult: string | null;
  availability: 'available' | 'taken' | null;
  suggestions: SuggestedDomain[];
  suggestionsError: string | null;
  onSuggestionClick: (suggestion: SuggestedDomain) => void;
  isLoading: boolean;
}

const getResultTextColor = (availability: 'available' | 'taken' | null, status: string) => {
  if (status === 'error' && !availability) return 'text-orange-600'; // Specific error color if no availability context
  if (availability === 'available') return 'text-nexusbyte-accent-green';
  if (availability === 'taken') return 'text-red-600';
  return 'text-gray-700'; // Default or for loading messages
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: {type: "spring" as const, stiffness: 300, damping: 20} },
};

const SearchResults: React.FC<SearchResultsProps> = ({
  status,
  searchResult,
  availability,
  suggestions,
  suggestionsError,
  onSuggestionClick,
  isLoading, // Keep isLoading for disabling suggestion buttons during any loading phase
}) => {
  return (
    <div className="min-h-[280px] pt-2"> {/* Reserve space to reduce layout shift, pt for spacing */}
      <AnimatePresence mode="wait">
        {searchResult && (status === 'searching' || status === 'success' || status === 'error') && (
          <motion.p
            {...{
              key: "searchResult",
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 10},
              transition: {duration: 0.3},
              className: `mb-4 text-xl font-medium ${getResultTextColor(availability, status)}`,
            } as any}
          >
            {searchResult}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {status === 'suggesting' && (
          <motion.div 
            {...{
              key: "suggesting",
              initial: { opacity: 0 }, 
              animate: { opacity: 1 }, 
              exit: { opacity: 0 },
              className: "mt-6",
            } as any}
          >
            <p className="text-gray-600 italic text-md">Nova is searching for creative alternatives...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {suggestionsError && (status === 'success' || status === 'error') && !suggestions.length && (
          // Show suggestionsError only if suggestions are not successfully fetched OR if it's a general error
           <motion.div 
            {...{
              key: "suggestionsError",
              initial: { opacity: 0 }, 
              animate: { opacity: 1 }, 
              exit: { opacity: 0 },
              className: "mt-6",
            } as any}
          >
            <p className="text-orange-500 text-md">{suggestionsError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {suggestions.length > 0 && status === 'success' && (
          <motion.div
            {...{
              key: "suggestionsContainer",
              variants: containerVariants,
              initial: "hidden",
              animate: "visible",
              exit: "hidden",
              className: "mt-8 pt-6 border-t border-gray-300",
            } as any}
          >
            <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-6">AI-Powered Suggestions:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestions.map((suggestion, index) => (
                <motion.div 
                  {...{
                    key: `${suggestion.name}-${suggestion.tld}-${index}`,  // More unique key
                    variants: itemVariants, 
                    className: "bg-white border border-gray-200 p-4 rounded-lg shadow-md text-left flex flex-col justify-between hover:shadow-lg transition-shadow",
                  } as any}
                >
                  <div>
                    <p className="text-lg font-medium text-nexusbyte-primary-dark break-all">
                      {suggestion.name}{suggestion.tld}
                    </p>
                  </div>
                  <button
                    onClick={() => onSuggestionClick(suggestion)}
                    disabled={isLoading}
                    className="mt-3 w-full px-4 py-2 text-sm font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ 
                      borderColor: '#a8b545', 
                      color: '#a8b545',
                      '--hover-bg-color': '#a8b545',
                      '--hover-text-color': 'white'
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#a8b545';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = '#a8b545';
                    }}
                  >
                    Check this domain
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchResults;
