

import React from 'react';

interface DomainSearchFormProps {
  domainName: string;
  setDomainName: (name: string) => void;
  onSearch: (name: string) => void;
  isLoading: boolean;
}

const DomainSearchForm: React.FC<DomainSearchFormProps> = ({ domainName, setDomainName, onSearch, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(domainName);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        value={domainName}
        onChange={(e) => setDomainName(e.target.value)}
        placeholder="eg, mydomain.co.za"
        className="flex-grow px-5 py-3.5 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow shadow-sm"
        disabled={isLoading}
        aria-label="Desired domain name"
      />
      <button
        type="submit"
        className="px-8 py-3.5 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
        disabled={isLoading}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default DomainSearchForm;
