

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, BriefcaseIcon, LockClosedIcon, ChartPieIcon, PhoneIcon
} from '../../../components/icons';

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean}> = ({ title, subtitle, children, className = '', textWhite = false }) => (
  <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textWhite ? 'text-white' : 'text-nexusbyte-primary-dark'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 text-lg max-w-3xl mx-auto ${textWhite ? 'text-gray-300' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
      <div className="mt-12">
        {children}
      </div>
    </div>
  </section>
);

export const TicketingSystemPlatformPage: React.FC = () => {
    const coreConceptsData = [
        { icon: UsersIcon, title: "Role-Based Access Control (RBAC)", description: "The system operates with two primary user roles: Admin (full access) and User (ticket management)." },
        { icon: CogIcon, title: "Client-Side Persistence", description: "All application data—including users, tickets, comments, and time logs—is stored locally in your browser." },
        { icon: BriefcaseIcon, title: "Two-Way Ticket Logging", description: "Tickets can be created internally by staff or externally by clients through a public-facing portal." },
    ];

    const featureHighlightsData = {
        "Ticket Lifecycle Management": ["Creation & Logging", "Client Portal Submission", "Comprehensive Detail View", "Status Updates & Resolution"],
        "Advanced Functionality": ["File Attachments", "Comments & Collaboration", "Reminders & Follow-ups", "Ticket Linking & Audit Trail", "Time Tracking"],
        "Search and Discovery": ["Powerful Global Search", "Find Similar Resolved Tickets", "Client History Lookup"],
        "Administrative Oversight": ["User Management Panel", "Comprehensive Reports Dashboard", "System-Wide Controls"],
        "User Experience (UX)": ["Modern & Responsive UI", "Real-Time Notifications", "Instant Feedback via Toasts", "Intuitive Navigation"],
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-nexusbyte-primary-dark text-white">
                <div className="max-w-screen-xl mx-auto px-4 py-20 md:py-28 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
                    >
                        Nexus-Ticketing Platform
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Streamline and manage support tickets efficiently with a modern, feature-rich interface.
                    </motion.p>
                </div>
            </div>

            {/* Overview & Core Concepts */}
            <Section title="Overview" subtitle="Nexus-Ticketing is a comprehensive, modern web application designed to streamline and manage support tickets efficiently. It simulates a complete helpdesk environment with client-side data management, persisting all information within the browser's local storage.">
                <div className="grid md:grid-cols-3 gap-8">
                    {coreConceptsData.map((concept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <concept.icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">{concept.title}</h3>
                            <p className="text-gray-600">{concept.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Key Features Section */}
            <Section title="Key Features and Capabilities" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(featureHighlightsData).map(([category, features], index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-md text-left h-full"
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-nexusbyte-primary-dark">{category}</h3>
                            <ul className="space-y-3">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckIcon className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="Ready to Experience a Smarter Helpdesk?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Explore the demo, view the pricing, or contact our team to discuss how Nexus-Ticketing can be tailored for your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <Link to="/ticketing-system/demo" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        Request a Demo
                    </Link>
                    <span className="text-gray-500">or</span>
                     <Link to="/ticketing-system/pricing" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        View Pricing & Plans
                    </Link>
                </div>
            </Section>
        </div>
    );
};