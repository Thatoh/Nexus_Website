

import React from 'react';
import { Link } from 'react-router';
import { ChartPieIcon, UsersIcon, ChatBubbleLeftRightIcon, ShareIcon } from '../components/icons'; // Assuming these icons exist or can be created

const BrandAnalyticsDashboardPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 min-h-[calc(100vh-288px)]">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
        <div className="text-center mb-10">
          <ChartPieIcon className="w-16 h-16 mx-auto mb-4 text-nexusbyte-accent-green" />
          <h1 className="text-3xl md:text-4xl font-bold text-nexusbyte-primary-dark">
            Brand Analytics Dashboard
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Gain insights into your brand's performance and engagement.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-md shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Under Development</h2>
          <p className="text-blue-600">
            This dashboard is currently under active development. Soon, you'll be able to:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-blue-600">
            <li>Review your brand interactions (likes, followers, etc.).</li>
            <li>Analyze your network influence and connections.</li>
            <li>Integrate and view feeds from platforms like Facebook, X, Instagram, GitHub, and more.</li>
            <li>Track key performance indicators for your brand's online presence.</li>
          </ul>
          <p className="mt-4 text-blue-600">
            Thank you for your patience as we build this exciting feature!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <UsersIcon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
            <h3 className="text-lg font-semibold text-nexusbyte-primary-dark mb-1">Audience Growth</h3>
            <p className="text-sm text-gray-500">Track followers and audience demographics across platforms.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
            <h3 className="text-lg font-semibold text-nexusbyte-primary-dark mb-1">Engagement Metrics</h3>
            <p className="text-sm text-gray-500">Monitor likes, comments, shares, and overall interaction rates.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <ShareIcon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
            <h3 className="text-lg font-semibold text-nexusbyte-primary-dark mb-1">Content Performance</h3>
            <p className="text-sm text-gray-500">Analyze which posts and content types resonate most with your audience.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <svg className="w-8 h-8 text-nexusbyte-accent-green mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <h3 className="text-lg font-semibold text-nexusbyte-primary-dark mb-1">Influence Score</h3>
            <p className="text-sm text-gray-500">Understand your brand's impact and reach within your network.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="px-8 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-md hover:bg-opacity-90 transition-colors text-lg"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BrandAnalyticsDashboardPage;
