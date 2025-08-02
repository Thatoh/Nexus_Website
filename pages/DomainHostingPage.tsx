import React from 'react';
import { CheckIcon } from '../components/icons'; // Assuming CheckIcon is added to icons.tsx

const DomainHostingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-nexusbyte-primary-dark">Choose the Perfect Plan for Your Website</h1>
        <p className="mt-4 text-lg text-gray-600">All plans include a free domain for the first year.</p>
      </div>

      {/* Pricing Table Container */}
      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-4">
        {/* Package 1: Starter */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-nexusbyte-primary-dark">Starter</h3>
          <p className="mt-2 text-gray-500">Perfect for personal sites and new projects.</p>
          <div className="mt-6">
            <span className="text-5xl font-bold text-nexusbyte-primary-dark">R60</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>
          <a href="#" className="mt-8 w-full inline-block text-center px-6 py-3 rounded-lg border-2 border-nexusbyte-primary-dark text-nexusbyte-primary-dark font-semibold hover:bg-nexusbyte-primary-dark hover:text-white transition">
            Get Started
          </a>
          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>1</strong> Website</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>Shared Hosting</strong> Resources</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>10 GB</strong> SSD Storage</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span>Free SSL Certificate</span>
            </li>
          </ul>
        </div>

        {/* Package 2: Business (Recommended) */}
        <div className="relative border-2 border-nexusbyte-accent-green rounded-2xl p-8 flex flex-col shadow-2xl bg-white">
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 text-sm font-semibold tracking-wide text-white uppercase bg-nexusbyte-primary-dark rounded-full">Most Popular</span>
          </div>
          <h3 className="text-2xl font-bold text-nexusbyte-primary-dark">Business</h3>
          <p className="mt-2 text-gray-500">For growing businesses and e-commerce.</p>
          <div className="mt-6">
            <span className="text-5xl font-bold text-nexusbyte-primary-dark">R400</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>
          <a href="#" className="mt-8 w-full inline-block text-center px-6 py-3 rounded-lg bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold hover:bg-opacity-90 transition">
            Choose Plan
          </a>
          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>Unlimited</strong> Websites</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>VPS Hosting</strong> Resources</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>100 GB</strong> NVMe Storage</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span>Free SSL & Daily Backups</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span>Global CDN</span>
            </li>
          </ul>
        </div>

        {/* Package 3: Scale */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-nexusbyte-primary-dark">Scale</h3>
          <p className="mt-2 text-gray-500">For high-traffic sites and demanding apps.</p>
          <div className="mt-6">
            <span className="text-5xl font-bold text-nexusbyte-primary-dark">R1500</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>
          <a href="#" className="mt-8 w-full inline-block text-center px-6 py-3 rounded-lg border-2 border-nexusbyte-primary-dark text-nexusbyte-primary-dark font-semibold hover:bg-nexusbyte-primary-dark hover:text-white transition">
            Contact Sales
          </a>
          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>Dedicated</strong> Infrastructure</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>Cloud Hosting</strong> Scalability</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span><strong>Advanced</strong> Security & DDoS Protection</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span>Priority Support & SLA</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green" />
              <span>Enterprise CDN</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DomainHostingPage;