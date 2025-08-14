
import React from 'react';
import { Link } from 'react-router';

const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[calc(100vh-288px)] flex flex-col items-center justify-center text-center">
       <img src="https://picsum.photos/seed/404page/300/200" alt="Lost and Found" className="rounded-lg shadow-lg mb-8" />
      <h1 className="text-6xl font-extrabold text-nexusbyte-primary-dark mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-nexusbyte-primary-dark mb-6">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        It seems like you've taken a wrong turn. The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-md hover:bg-opacity-90 transition-colors text-lg"
      >
        Return to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
