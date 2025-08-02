
import React from 'react';
import { motion } from 'framer-motion';

const whitepapersData = [
  { title: "AI for South African SMEs", topic: "Leveraging Nova & LLMs for Productivity", link: "#" },
  { title: "2025 Cybersecurity Blueprint", topic: "Policy, Practice, & Prevention", link: "#" },
  { title: "Hybrid Work Enablement", topic: "Designing Secure, Scalable Remote Environments", link: "#" },
  { title: "POPIA Readiness Toolkit", topic: "Navigating Local Compliance with Confidence", link: "#" },
  { title: "Cloud vs On-Prem: Cost & Risk Analysis", topic: "Infrastructure Strategy", link: "#" }
];

const WhitepapersPage: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-16 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-nexusbyte-primary-dark mb-4"
          >
            Whitepapers & E-books
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore NexusByte’s library of expert-authored whitepapers and downloadable e-books.
          </motion.p>
        </header>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Topic
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Download</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {whitepapersData.map((paper, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {paper.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {paper.topic}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href={paper.link} className="bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors">
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

         <footer className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700">📩 To request custom insights or co-branded reports:
                <a href="mailto:whitepapers@nexusbyte.co.za" className="font-semibold text-nexusbyte-accent-green hover:underline ml-2">
                    whitepapers@nexusbyte.co.za
                </a>
            </p>
        </footer>
      </div>
    </div>
  );
}

export default WhitepapersPage;
