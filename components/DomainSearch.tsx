


import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { generateDomainSuggestions } from '../services/geminiService';
import { SuggestedDomain } from '../types';

import DomainSearchForm from './domainSearch/DomainSearchForm';
import SearchResults from './domainSearch/SearchResults';
import ScrollingQuotes from './domainSearch/ScrollingQuotes';

// NEW IMPORT:
import ParallaxReveal from './parallax/ParallaxReveal';

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
      setSuggestionsError(null);
      setAvailability(null);
      return;
    }

    setStatus('searching');
    setSearchResult(`Searching for ${trimmedDomain}...`);
    setSuggestedDomains([]);
    setSuggestionsError(null);
    setAvailability(null);

    await new Promise(resolve => setTimeout(resolve, 1000)); // mock delay

    const isAvailable = Math.random() > 0.5;
    const currentAvailability = isAvailable ? 'available' : 'taken';
    setAvailability(currentAvailability);
    setSearchResult(
      isAvailable
        ? `Congratulations! "${trimmedDomain}" is available.`
        : `Sorry, "${trimmedDomain}" is already taken. Try another?`
    );

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
      console.error(err);
      setSuggestedDomains([]);
      setSuggestionsError('An error occurred while fetching suggestions.');
    } finally {
      setStatus('success');
    }
  }, []);

  const handleSuggestionClick = (suggestion: SuggestedDomain) => {
    const full = `${suggestion.name}${suggestion.tld}`;
    setDomainName(full);
    handleSearch(full);
    contentAboveScrollingTextRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isLoading = status === 'searching' || status === 'suggesting';

  return (
    <ParallaxReveal
      src={BACKGROUND_IMAGE_URL}
      kind="image"
      heightPx={2200}                                // your tall section
      overlayClassName="bg-white/85 backdrop-blur-[2px]" // keep light glass over media
    >
      {/* Sticky viewport-height overlay (your content lives here) */}
      <div className="flex h-full flex-col">
        {/* Top content (keeps your original layout) */}
        <div ref={contentAboveScrollingTextRef} className="pt-24 md:pt-32 text-center">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-nexusbyte-primary-dark">
              Find Your Perfect Domain
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Start your online journey with a unique domain name. Powered by Nova AI suggestions.
            </p>

            <DomainSearchForm
              domainName={domainName}
              setDomainName={setDomainName}
              onSearch={handleSearch}
              isLoading={isLoading}
            />

            <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <Link to="/register-domain" className="text-xs font-normal text-gray-600 hover:text-gray-800 hover:underline">
                Register a domain
              </Link>
              <Link to="/signup" className="text-xs font-normal text-gray-600 hover:text-gray-800 hover:underline">
                SignUp
              </Link>
              <Link to="/signin" className="text-xs font-normal text-gray-600 hover:text-gray-800 hover:underline">
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
        </div>

        {/* This fills remaining space in the sticky viewport and reacts to page scroll */}
        <div className="flex-1 flex">
          <ScrollingQuotes contentAboveRef={contentAboveScrollingTextRef} />
        </div>
      </div>
    </ParallaxReveal>
  );
};

export default DomainSearch;
