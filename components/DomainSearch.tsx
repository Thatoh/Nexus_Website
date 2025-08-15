


import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { generateDomainSuggestions } from '../services/geminiService';
import { SuggestedDomain } from '../types';

// Child Components
import DomainSearchForm from './domainSearch/DomainSearchForm';
import SearchResults from './domainSearch/SearchResults';
import ScrollingQuotes from './domainSearch/ScrollingQuotes';
import ParallaxReveal from './ParallaxReveal';

const BACKGROUND_IMAGE_URL = "/images/resources/ab-1.jpg";

type SearchStatus = 'idle' | 'searching' | 'suggesting' | 'success' | 'error';

const DomainSearch: React.FC = () => {
  const [domainName, setDomainName] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [status, setStatus] = useState<SearchStatus>('idle');
  const [availability, setAvailability] = useState<'available' | 'taken' | null>(null);
  
  const [suggestedDomains, setSuggestedDomains] = useState<SuggestedDomain[]>([]);
  const [suggestionsError, setSuggestionsError] = useState<string | null>(null);

  const contentAboveScrollingTextRef = useRef<HTMLDivElement>(null);

  const handleSearch = useCallback(async (domainToSearch: string) => {
    const trimmedDomain = domainToSearch.trim();
    if (!trimmedDomain) {
      setStatus('error');
      setSearchResult('Please enter a domain name.');
      setSuggestedDomains([]);
      setSuggestionsError(null); // Clear previous errors
      setAvailability(null); // Clear previous availability
      return;
    }

    // --- Start Search Process ---
    setStatus('searching');
    setSearchResult(`Searching for ${trimmedDomain}...`);
    setSuggestedDomains([]);
    setSuggestionsError(null);
    setAvailability(null);

    await new Promise(resolve => setTimeout(resolve, 1000)); // Mock API delay

    const isAvailable = Math.random() > 0.5;
    const currentAvailability = isAvailable ? 'available' : 'taken';
    setAvailability(currentAvailability);

    if (isAvailable) {
      setSearchResult(`Congratulations! "${trimmedDomain}" is available.`);
    } else {
      setSearchResult(`Sorry, "${trimmedDomain}" is already taken. Try another?`);
    }
    
    // --- Fetch Suggestions ---
    setStatus('suggesting');
    try {
      const suggestions = await generateDomainSuggestions(trimmedDomain, currentAvailability);
      if (suggestions?.length) {
        setSuggestedDomains(suggestions);
        setSuggestionsError(null);
      } else {
        setSuggestedDomains([]);
        setSuggestionsError("Nova couldn't fetch suggestions this time. Try again?");
      }
    } catch (error) {
      console.error("Error fetching domain suggestions:", error);
      setSuggestedDomains([]);
      setSuggestionsError("An error occurred while fetching suggestions.");
    } finally {
      setStatus('success'); // Final state after suggestions are processed
    }
  }, []);

  const handleSuggestionClick = (suggestion: SuggestedDomain) => {
    const fullSuggestedDomain = `${suggestion.name}${suggestion.tld}`;
    setDomainName(fullSuggestedDomain);
    handleSearch(fullSuggestedDomain);
    // Scroll to the top of the page smoothly so user sees the new search results
    contentAboveScrollingTextRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start'});
  };

  const isLoading = status === 'searching' || status === 'suggesting';

  return (
    <ParallaxReveal 
      src={BACKGROUND_IMAGE_URL} 
      heightPx={2200}
      overlayClassName="bg-white/85 backdrop-blur-[2px]"
    >
      <div ref={contentAboveScrollingTextRef}>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-nexusbyte-primary-dark mb-4">
            Find Your Perfect Domain
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Start your online journey with a unique domain name. Powered by Nova AI suggestions.
          </p>
          
          <DomainSearchForm 
            domainName={domainName}
            setDomainName={setDomainName}
            onSearch={handleSearch}
            isLoading={isLoading}
          />

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-8">
            <Link to="/register-domain" className="text-xs font-normal text-gray-600 hover:text-gray-800 hover:underline">Register a domain</Link>
            <Link to="/signup" className="text-xs font-normal text-gray-600 hover:text-gray-800 hover:underline">SignUp</Link>
            <Link to="/signin" className="text-xs font-normal text-gray-600 hover:text-gray-800 hover:underline">Customer Signin</Link>
          </div>
          
          <SearchResults
            status={status}
            searchResult={searchResult}
            availability={availability}
            suggestions={suggestedDomains}
            suggestionsError={suggestionsError}
            onSuggestionClick={handleSuggestionClick}
            isLoading={isLoading}
          />
        </div>
      </div>
      
      {/* Scrolling Quotes Area - This will take up remaining space and handle its own scroll animation */}
      <ScrollingQuotes contentAboveRef={contentAboveScrollingTextRef} />
    </ParallaxReveal>
  );
}

export default DomainSearch;
