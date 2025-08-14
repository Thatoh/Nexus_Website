
import React from 'react';
import { Link } from 'react-router-dom';

// Local SVG icon components for this section
const FileCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}> {/* Adjusted color for light theme */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 12 2 2 4-4" />
  </svg>
);

const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}> {/* Adjusted color for light theme */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-6 h-6 text-nexusbyte-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}> {/* Adjusted color for light theme */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);


export default function CloudDashboardSection() {
  return (
    <section className="py-16 px-4 bg-white text-nexusbyte-primary-dark"> {/* Changed background to white, text to dark */}
      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-nexusbyte-primary-dark mb-6 leading-tight"> {/* Changed text-white */}
            All Your Cloud Drives,
            <br />
            One Unified Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"> {/* Changed text-gray-300 */}
            NexusByte lets you manage multiple cloud storage in a single, sleek platform.
            <br />
            Upload, organize, and track your files with real-time insights
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105" /* Adjusted for light theme */
            >
              View Demo
            </button>
            <Link
              to="/signup"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200"> {/* Adjusted for light theme */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ufyar159PT2zgJ5En6WAdjIzo1YTIX.png"
              alt="NexusByte Cloud Storage Dashboard showing unified interface for managing Google Drive, OneDrive, Mega Drive, and Dropbox with file management, storage analytics, and recent uploads"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200/50 rounded-full opacity-80 blur-xl"></div> {/* Lightened color */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/40 rounded-full opacity-60 blur-xl"></div> {/* Lightened color */}
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-3 p-4 rounded-lg hover:bg-gray-100 transition-colors"> {/* Adjusted hover */}
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto"> {/* Adjusted icon bg */}
              <FileCheckIcon />
            </div>
            <h3 className="text-lg font-semibold text-nexusbyte-primary-dark">Unified Management</h3> {/* Changed text-white */}
            <p className="text-gray-600">Access all your cloud drives from one central dashboard</p> {/* Changed text-gray-400 */}
          </div>

          <div className="space-y-3 p-4 rounded-lg hover:bg-gray-100 transition-colors"> {/* Adjusted hover */}
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto"> {/* Adjusted icon bg */}
              <ChartBarIcon />
            </div>
            <h3 className="text-lg font-semibold text-nexusbyte-primary-dark">Real-time Analytics</h3> {/* Changed text-white */}
            <p className="text-gray-600">Track storage usage and file activity across all platforms</p> {/* Changed text-gray-400 */}
          </div>

          <div className="space-y-3 p-4 rounded-lg hover:bg-gray-100 transition-colors"> {/* Adjusted hover */}
            <div className="w-12 h-12 bg-nexusbyte-accent-green/10 rounded-lg flex items-center justify-center mx-auto"> {/* Adjusted icon bg */}
              <LockIcon />
            </div>
            <h3 className="text-lg font-semibold text-nexusbyte-primary-dark">Secure & Private</h3> {/* Changed text-white */}
            <p className="text-gray-600">Enterprise-grade security for all your cloud storage needs</p> {/* Changed text-gray-400 */}
          </div>
        </div>
      </div>
    </section>
  );
}
