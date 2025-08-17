import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { generateDomainSuggestions } from '../services/geminiService';
import { SuggestedDomain } from '../types';

// Child Components
import DomainSearchForm from './domainSearch/DomainSearchForm';
import SearchResults from './domainSearch/SearchResults';
import ScrollingQuotes from './domainSearch/ScrollingQuotes';

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
      setSuggestionsError(null);
      setAvailability(null);
      return;
    }

    // Start
    setStatus('searching');
    setSearchResult(`Searching for ${trimmedDomain}...`);
    setSuggestedDomains([]);
    setSuggestionsError(null);
    setAvailability(null);

    // Mock delay – replace with your real API call
    await new Promise((r) => setTimeout(r, 1000));

    // Mock availability
    const isAvailable = Math.random() > 0.5;
    const currentAvailability = isAvailable ? 'available' : 'taken';
    setAvailability(currentAvailability);
    setSearchResult(
      isAvailable
        ? `Congratulations! "${trimmedDomain}" is available.`
        : `Sorry, "${trimmedDomain}" is already taken. Try another?`
    );

    // Suggestions
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
    } catch (err) {
      console.error('Error fetching domain suggestions:', err);
      setSuggestedDomains([]);
      setSuggestionsError('An error occurred while fetching suggestions.');
    } finally {
      setStatus('success');
    }
  }, []);

  const handleSuggestionClick = (suggestion: SuggestedDomain) => {
    const fullSuggestedDomain = `${suggestion.name}${suggestion.tld}`;
    setDomainName(fullSuggestedDomain);
    handleSearch(fullSuggestedDomain);
    contentAboveScrollingTextRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const isLoading = status === 'searching' || status === 'suggesting';

  return (
    <section className="px-6 sm:px-8 lg:px-10 py-24 md:py-32">
      <div ref={contentAboveScrollingTextRef} className="text-center mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-4">
          Find Your Perfect Domain
        </h2>
        <p className="text-lg text-white/85 mb-8">
          Start your online journey with a unique domain name. Powered by Nova AI suggestions.
        </p>

        <DomainSearchForm
          domainName={domainName}
          setDomainName={setDomainName}
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        <div className="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-8">
          <Link
            to="/register-domain"
            className="text-xs font-normal text-white/80 hover:text-white hover:underline"
          >
            Register a domain
          </Link>
          <Link to="/signup" className="text-xs font-normal text-white/80 hover:text-white hover:underline">
            SignUp
          </Link>
          <Link to="/signin" className="text-xs font-normal text-white/80 hover:text-white hover:underline">
            Customer Signin
          </Link>
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

      {/* Scrolling Quotes Area */}
      <div className="mt-16">
        <ScrollingQuotes contentAboveRef={contentAboveScrollingTextRef} />
      </div>
    </section>
  );
};

export default DomainSearch;


