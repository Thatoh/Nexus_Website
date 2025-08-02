

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, ShieldCheckIcon, CogIcon,
    TicketIcon, BriefcaseIcon, CpuChipIcon
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

export const PlansAccessPage: React.FC = () => {

    const rbacData = [
        { role: "Admin", permissions: "Manage users, access reports, configure settings, delete system data" },
        { role: "User (Agent)", permissions: "Create/manage tickets, comment, update statuses, use search" },
        { role: "Client", permissions: "Submit new tickets, receive updates, respond via email/portal (if external portal is activated)" },
    ];

    const pricingData = [
        { plan: "Starter", price: "R0/month", description: "Great for internal demos or solo professionals.", features: ["1 Admin + 1 Agent", "10 Ticket limit", "Basic UI, no reports", "Local-only data"], featured: false },
        { plan: "Pro", price: "R799/month", description: "Perfect for growing teams that need better oversight.", features: ["Up to 5 users", "Unlimited tickets", "Full ticket management", "SLA tracking", "Basic reports"], featured: false },
        { plan: "Team", price: "R2,500/month", description: "For collaborative teams with workflow needs.", features: ["Up to 15 users", "Advanced automation", "Attachments + reminders", "Role management", "Agent productivity metrics"], featured: true },
        { plan: "Enterprise / White Label", price: "Custom Pricing", description: "For larger organisations and resellers.", features: ["Unlimited users", "Custom domain & logo", "Role expansion", "Multi-tenant instance", "API Access", "Priority support"], featured: false },
    ];

    const resourcesData = ["Admin Setup Guide", "User Quick Start Manual", "White-Label Deployment Docs (PDF)", "Nova AI Integration Add-on Guide"];

    const securityFeatures = ["Browser-local data (no external storage by default)", "Full audit trail per ticket", "Optional POPIA/GDPR-aligned version", "Permission-based feature access", "Configurable data retention & deletion controls"];

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
                        🗂️ Plans, Access Control & Demo
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Discover how Nexus-Ticketing adapts to your team—securely and affordably.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Whether you're a small team or a large enterprise, Nexus-Ticketing offers flexible pricing plans, fine-grained access control, and a live demo to experience everything before you commit.
                    </motion.p>
                </div>
            </div>

            {/* Role-Based Access Control */}
            <Section title="🛡️ Role-Based Access Control (RBAC)" subtitle="Nexus-Ticketing is built on a clear, secure RBAC model to ensure your support system operates with transparency and safety.">
                <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Permissions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {rbacData.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{row.role}</td>
                                    <td className="px-6 py-4 text-sm">{row.permissions}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 <p className="text-center text-sm text-gray-500 mt-4">✅ Roles can be expanded or customised in enterprise plans. All actions are recorded in the audit trail.</p>
            </Section>

            {/* Pricing Plans */}
            <Section title="💳 Pricing Plans" subtitle="Choose a plan based on your team size and data needs. All plans include unlimited internal ticket logging, real-time notifications, and local browser-based persistence." className="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {pricingData.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-6 rounded-2xl flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.featured ? 'bg-nexusbyte-primary-dark text-white ring-4 ring-nexusbyte-accent-green' : 'bg-white text-gray-900 border'}`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                            <p className={`text-sm mb-4 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
                            <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                            <ul className="space-y-3 text-sm flex-grow mb-8 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start"><CheckIcon className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-green-500'}`}/>{feature}</li>
                                ))}
                            </ul>
                             <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                                {plan.price === 'Custom Pricing' ? 'Contact Sales' : 'Choose Plan'}
                            </button>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-8">📩 Contact: ticketing@nexusbyte.co.za for enterprise quotes.</p>
            </Section>

            {/* Live Demo & Resources */}
             <Section title="Live Demo & Resources">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="text-left bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">🧪 Request a Live Demo</h3>
                        <p className="text-gray-600 mb-4">Want to see how Nexus-Ticketing fits into your workflow? We offer guided demos to walk you through:</p>
                        <ul className="space-y-2 text-sm">
                            {[ "Full ticket lifecycle", "SLA workflows", "Time tracking & audit logs", "Custom automation setup", "Dashboard reports", "White-labelling options" ].map((item, i) => <li key={i} className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>{item}</li>)}
                        </ul>
                         <button className="mt-6 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-6 py-2 rounded-md hover:bg-opacity-90">
                           Request Now &rarr;
                        </button>
                    </div>
                    <div className="text-left bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">📘 Resources & Support</h3>
                        <p className="text-gray-600 mb-4">Access everything you need to run Nexus-Ticketing effectively:</p>
                        <ul className="space-y-2 text-sm">
                            {resourcesData.map((item, i) => <li key={i} className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Security Highlights */}
            <Section title="🔐 Security & Compliance Highlights" className="bg-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {securityFeatures.map((item, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-blue-100 text-blue-800 font-medium px-4 py-3 rounded-lg shadow-sm text-center"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </Section>

             {/* Final Section */}
            <Section title="🔧 Designed for Scale">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Whether you're a 2-person team or a nationwide service provider, Nexus-Ticketing flexes to your use case. Deploy it internally or offer it as your own support product. We’ve built it to evolve with you.
                </p>
            </Section>

        </div>
    );
};