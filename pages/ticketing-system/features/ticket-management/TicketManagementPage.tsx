

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, ShieldCheckIcon, CalendarIcon, BriefcaseIcon, TicketIcon
} from '../../../../components/icons';

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

export const TicketManagementPage: React.FC = () => {

    const ticketCreationFeatures = {
        external: ["Public form with required fields (name, email, issue)", "Auto-send confirmation + tracking number", "Mobile-optimised form layout"],
        internal: ["Urgency levels: Low, Medium, High", "ETA, deadlines & assignment fields", "Attachments (images, logs, contracts, etc.)", "Categorisation for team workflows (IT, Sales, Ops, etc.)"]
    };

    const managementPanelFeatures = [
        "Filter by status, urgency, client, or agent",
        "View by open, resolved, assigned, or overdue",
        "Notification badges for new comments, updates, and follow-ups",
        "Timestamped creation and resolution data"
    ];

    const detailViewFeatures = [
        "Full issue description + metadata",
        "Client profile with history",
        "Status tracker (Open, In Progress, Resolved)",
        "Threaded comments + attachments",
        "Related ticket linking",
        "Reminder and follow-up tools",
        "Audit log of all updates"
    ];
    
    const statusControlFeatures = [
        "ETA & estimated resolution time",
        "Progress notes (e.g. \"Waiting for part\", \"Escalated\", etc.)",
        "Mark ticket as Resolved, auto-stamping the action",
        "Trigger system alerts for overdue or high-priority cases"
    ];

    const comingSoonFeatures = [
        "Email-to-Ticket Conversion",
        "AI-powered Ticket Triage (Nova Integration)",
        "SLA-based auto-escalation triggers",
        "Multi-Tenant Support for Agencies & MSPs",
        "Integration with tools like Jira, Zendesk, and Microsoft Teams"
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
                        📝 Ticket Creation & Management
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Track. Resolve. Improve. All from One Smart Interface.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        At the heart of every effective support system is a robust, intuitive way to log and manage requests. Nexus-Ticketing offers a full-cycle Ticket Management System that empowers agents and clients to easily create, track, and resolve support issues with clarity, speed, and collaboration.
                    </motion.p>
                </div>
            </div>

            {/* Ticket Creation */}
            <Section title="🎫 Ticket Creation: Simple for Users, Powerful for Teams" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">🌐 External Client Portal</h3>
                        <p className="text-sm text-gray-600 mb-4">Clients can log tickets in seconds—without needing to create an account.</p>
                        <ul className="space-y-2 text-sm">
                            {ticketCreationFeatures.external.map((item, i) => (
                                <li key={i} className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">🧑‍💻 Internal Agent Logging</h3>
                        <p className="text-sm text-gray-600 mb-4">Support teams and staff can log detailed tickets from the dashboard.</p>
                        <ul className="space-y-2 text-sm">
                            {ticketCreationFeatures.internal.map((item, i) => (
                                <li key={i} className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Centralised Management & Smart Detail View */}
            <Section title="All Your Tickets in One Place">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🔄 Centralised Ticket Management Panel</h3>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                            <p className="text-sm text-gray-600 mb-4">Every logged issue is accessible in a dynamic management interface, with powerful filters, sorting, and live stats.</p>
                            <ul className="space-y-2 text-left">
                                {managementPanelFeatures.map((item, i) => (
                                    <li key={i} className="flex items-start"><CheckIcon className="w-5 h-5 mr-3 text-nexusbyte-accent-green"/>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧠 Smart Ticket Detail View</h3>
                         <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                            <p className="text-sm text-gray-600 mb-4">Each ticket opens into a full-page view designed for collaborative resolution.</p>
                            <ul className="space-y-2 text-left">
                                {detailViewFeatures.map((item, i) => (
                                    <li key={i} className="flex items-start"><CheckIcon className="w-5 h-5 mr-3 text-nexusbyte-accent-green"/>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Status Control, Security, and Coming Soon */}
            <Section title="Control, Security, and Future Features" className="bg-gray-50">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-xl mb-3">✅ Status & Progress Control</h3>
                        <ul className="space-y-2 text-sm">
                            {statusControlFeatures.map((item, i) => <li key={i} className="flex"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>{item}</li>)}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                         <h3 className="font-semibold text-xl mb-3">🔐 Secure & Compliant</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>Role-based access</li>
                            <li className="flex"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>Audit trails for accountability</li>
                            <li className="flex"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>Future integrations with advanced security</li>
                        </ul>
                    </div>
                     <div className="bg-white p-6 rounded-lg shadow-md">
                         <h3 className="font-semibold text-xl mb-3">🔄 Coming Soon (Q1 2026)</h3>
                        <ul className="space-y-2 text-sm">
                            {comingSoonFeatures.map((item, i) => <li key={i} className="flex"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Why it Matters */}
            <Section title="🚀 Why It Matters">
                <blockquote className="text-xl italic text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    "Support teams don’t just solve issues—they shape experience." Our Ticket Management feature ensures nothing falls through the cracks. It builds accountability, increases transparency, and enhances agent efficiency—all from a central, elegant dashboard.
                </blockquote>
            </Section>
            
            {/* CTA Section */}
            <Section title="💬 Ready to Optimise Support?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Test ticket creation via the Interactive Demo or book a white-label trial with the NexusByte team.
                </p>
                <a href="mailto:support@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    📧 Email us at support@nexusbyte.co.za
                </a>
            </Section>
        </div>
    );
};
