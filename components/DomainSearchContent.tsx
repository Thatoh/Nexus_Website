import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { generateDomainSuggestions } from '../services/geminiService';
import { SuggestedDomain } from '../types';

// Child Components
import DomainSearchForm from './domainSearch/DomainSearchForm';
import SearchResults from './domainSearch/SearchResults';
import ScrollingQuotes from './domainSearch/ScrollingQuotes';

type SearchStatus = 'idle' | 'searching' | 'suggesting' | 'success' | 'error';

export default function DomainSearchContent() {
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
      setSuggestionsError(null);
      setAvailability(null);
      return;
    }

    setStatus('searching');
    setSearchResult(`Searching for ${trimmedDomain}...`);
    setSuggestedDomains([]);
    setSuggestionsError(null);
    setAvailability(null);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const isAvailable = Math.random() > 0.5;
    const currentAvailability = isAvailable ? 'available' : 'taken';
    setAvailability(currentAvailability);

    if (isAvailable) {
      setSearchResult(`Congratulations! "${trimmedDomain}" is available.`);
    } else {
      setSearchResult(`Sorry, "${trimmedDomain}" is already taken. Try another?`);
    }
    
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
      setStatus('success');
    }
  }, []);

  const handleSuggestionClick = (suggestion: SuggestedDomain) => {
    const fullSuggestedDomain = `${suggestion.name}${suggestion.tld}`;
    setDomainName(fullSuggestedDomain);
    handleSearch(fullSuggestedDomain);
    contentAboveScrollingTextRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start'});
  };

  const isLoading = status === 'searching' || status === 'suggesting';

  return (
    <div className="mx-auto max-w-4xl text-center">
      <div ref={contentAboveScrollingTextRef}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Find Your Perfect Domain
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Start your online journey with a unique domain name. Powered by Nova AI suggestions.
        </p>
        
        <DomainSearchForm 
          domainName={domainName}
          setDomainName={setDomainName}
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-8 mt-6">
          <Link to="/register-domain" className="text-sm text-white/70 hover:text-white hover:underline">Register a domain</Link>
          <Link to="/signup" className="text-sm text-white/70 hover:text-white hover:underline">SignUp</Link>
          <Link to="/signin" className="text-sm text-white/70 hover:text-white hover:underline">Customer Signin</Link>
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
      
      <ScrollingQuotes contentAboveRef={contentAboveScrollingTextRef} />
    </div>
  );
}
