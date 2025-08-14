

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, ShieldCheckIcon, CalendarIcon, 
    CogIcon, BriefcaseIcon, CpuChipIcon
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

export const RequestDemoPage: React.FC = () => {
    const demoFeatures = [
        "Fully populated ticket dashboard",
        "Admin panel with user management",
        "Real-time ticket creation & resolution",
        "Attachments, comments, and audit trails",
        "SLA timers and reporting",
        "Nova AI Agent preview (ticket triage & suggestions)"
    ];
    
    const demoTemplates = [
        { industry: "IT Helpdesk", templates: "Software errors, hardware requests", features: "Device tracking, reminders" },
        { industry: "Customer Support", templates: "Refunds, delivery delays", features: "SLA escalation, client portal" },
        { industry: "Legal Ops", templates: "Case queries, document requests", features: "Audit logs, secure roles" },
        { industry: "HR/PeopleOps", templates: "Leave requests, onboarding issues", features: "Policy AI, internal comments" },
        { industry: "Education", templates: "LMS errors, student support", features: "Role-based access (faculty vs admin)" }
    ];

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
                        🧪 Request a Demo
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Experience Nexus-Ticketing in Action — No Commitments, No Setup Required
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Explore the full power of Nexus-Ticketing with an interactive demo environment designed to simulate real-world support operations.
                    </motion.p>
                </div>
            </div>

            {/* What You Can Expect */}
            <Section title="🎯 What You Can Expect in the Demo">
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {demoFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center bg-gray-100 p-3 rounded-md">
                            <CheckIcon className="w-5 h-5 mr-3 text-nexusbyte-accent-green flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </Section>
            
            {/* Live Demo CTA */}
            <Section title="🖥️ Try the Live Demo (No Login Required)" className="bg-gray-50">
                <div className="flex justify-center">
                    <button className="bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold text-lg px-10 py-5 rounded-lg shadow-md hover:bg-opacity-90 transition-transform hover:scale-105">
                        🔗 Launch Interactive Demo
                    </button>
                </div>
            </Section>

            {/* Private Demo */}
            <Section title="🔒 Want a Private, Custom Demo?">
                 <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                    For companies evaluating Nexus-Ticketing at scale or for multi-tenant use, we offer private demo environments branded with your logo and preloaded with test data specific to your sector.
                </p>
                 <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:ticketing@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-primary-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-gray-800 transition-colors text-lg">
                        📩 Email us at: ticketing@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-nexusbyte-primary-dark hover:underline">
                        📅 Schedule a live walkthrough
                    </a>
                </div>
            </Section>

            {/* Demo Templates Table */}
             <Section title="🎛️ Customisable Demo Templates by Industry" className="bg-gray-50">
                <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Industry</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Sample Ticket Templates</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Special Features</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {demoTemplates.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{row.industry}</td>
                                    <td className="px-6 py-4 text-sm">{row.templates}</td>
                                    <td className="px-6 py-4 text-sm">{row.features}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* Nova AI Section */}
             <Section title="🤖 Test Nova AI Ticket Assistant (Beta)">
                <div className="max-w-3xl mx-auto text-left bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                    <p className="text-gray-700 mb-4">Nova integrates directly into Nexus-Ticketing to:</p>
                    <ul className="space-y-2">
                        <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-3 mt-1 text-blue-500"/>Summarise long tickets and comments</li>
                        <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-3 mt-1 text-blue-500"/>Suggest response drafts</li>
                        <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-3 mt-1 text-blue-500"/>Recommend relevant past tickets</li>
                        <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-3 mt-1 text-blue-500"/>Automate SLA escalation workflows</li>
                    </ul>
                     <p className="mt-4 text-sm font-semibold text-gray-800">Included in Professional Plan and higher, and available in all demos for preview.</p>
                </div>
            </Section>

            {/* Feedback CTA */}
            <Section title="📣 Feedback Welcome" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                   Tried the demo? Tell us what worked, what didn’t, or what you'd like to see.
                </p>
                <a href="#" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    📥 Submit Feedback
                </a>
            </Section>
        </div>
    );
};
