import React from 'react';

interface GenericPageProps {
  title: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 min-h-[calc(100vh-288px)]"> {/* Adjusted min-height for header (80px) and typical footer height */}
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-nexusbyte-primary-dark mb-6">{title}</h1>
        <p className="text-lg text-gray-700">
          Welcome to the <span className="font-semibold text-nexusbyte-accent-green">{title}</span> page.
        </p>
        <p className="mt-4 text-md text-gray-500 max-w-xl mx-auto">
          We're currently developing this section to bring you the best content. 
          Please check back soon for exciting updates and detailed information!
        </p>
        <img src={`https://picsum.photos/seed/${title.replace(/\s+/g, '')}/600/300`} alt={`${title} placeholder`} className="mt-8 rounded-lg shadow-md mx-auto" />

      </div>
    </div>
  );
}

export default GenericPage;