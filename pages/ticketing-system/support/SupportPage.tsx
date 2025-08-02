

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, PhoneIcon, CogIcon,
    BriefcaseIcon, CpuChipIcon, ShieldCheckIcon, UsersIcon
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

export const SupportPage: React.FC = () => {
    const gettingStartedData = [
        { title: "Installation Guide (Local & Cloud)", link: "#" },
        { title: "Initial Setup: Admins, Roles & Users", link: "#" },
        { title: "Branding the UI for White-Label Deployment", link: "#" },
        { title: "Enabling Nova AI for Smart Support", link: "#" },
    ];
    
    const coreModulesData = [
        { feature: "Ticket Management", link: "#" },
        { feature: "SLA Policies", link: "#" },
        { feature: "Reporting & Analytics", link: "#" },
        { feature: "Audit Logs", link: "#" },
        { feature: "Comments & Attachments", link: "#" },
    ];
    
    const adminSettingsData = [
        { feature: "Role & Permission Control", link: "#" },
        { feature: "User Management", link: "#" },
        { feature: "Client Portal Setup", link: "#" },
        { feature: "Data Backup & Restore", link: "#" },
    ];

    const troubleshootingData = {
        commonIssues: [
            { issue: "Login not working?", link: "#" },
            { issue: "Not receiving reminders?", link: "#" },
            { issue: "Tickets not saving properly?", link: "#" },
        ],
        systemHealth: [
            { topic: "System Requirements", link: "#" },
            { topic: "Performance Optimisation Tips", link: "#" },
            { topic: "Update Logs & Changelog", link: "#" },
        ]
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
                        📚 Support & Documentation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Everything You Need to Deploy, Manage, and Master Nexus-Ticketing
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Welcome to the Nexus-Ticketing Knowledge Base — your go-to support centre for documentation, guides, technical FAQs, and troubleshooting help.
                    </motion.p>
                </div>
            </div>

            {/* Getting Started */}
            <Section title="🧭 Getting Started" subtitle="Your first steps with Nexus-Ticketing" className="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gettingStartedData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
                        >
                            <h3 className="text-lg font-semibold text-nexusbyte-primary-dark mb-4">{item.title}</h3>
                            <Link to={item.link} className="font-semibold text-nexusbyte-accent-green hover:underline">Read Guide &rarr;</Link>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Product Documentation */}
            <Section title="🗃️ Product Documentation">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Core Modules */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-xl mb-4">Core Modules</h3>
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full">
                                <tbody className="divide-y">
                                    {coreModulesData.map((row, i) => <tr key={i}><td className="p-3 font-medium">{row.feature}</td><td className="p-3 text-right"><Link to={row.link} className="text-blue-600 hover:underline text-sm">View Docs</Link></td></tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Admin Settings */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-xl mb-4">Admin Settings</h3>
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full">
                                <tbody className="divide-y">
                                    {adminSettingsData.map((row, i) => <tr key={i}><td className="p-3 font-medium">{row.feature}</td><td className="p-3 text-right"><Link to={row.link} className="text-blue-600 hover:underline text-sm">View Docs</Link></td></tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* AI Assistant */}
                    <div className="lg:col-span-1 bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-4">🤖 AI Assistant Documentation</h3>
                        <p className="text-sm text-gray-600 mb-4">Nova AI can be added to automate triage, summarise tickets, and assist in response drafting.</p>
                         <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>Nova for Ticket Support Setup</li>
                            <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>Training Custom Prompt Libraries</li>
                            <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>Security & Compliance (POPIA Ready)</li>
                        </ul>
                    </div>
                </div>
            </Section>

             {/* Troubleshooting & FAQs */}
            <Section title="🧪 Troubleshooting & FAQs" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Common Issues</h3>
                        {troubleshootingData.commonIssues.map((item, i) => <p key={i}><Link to={item.link} className="text-gray-700 hover:text-nexusbyte-accent-green hover:underline">{item.issue}</Link></p>)}
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-3">System Health</h3>
                        {troubleshootingData.systemHealth.map((item, i) => <p key={i}><Link to={item.topic} className="text-gray-700 hover:text-nexusbyte-accent-green hover:underline">{item.topic}</Link></p>)}
                    </div>
                </div>
            </Section>

            {/* Need Human Help? */}
            <Section title="🆘 Need Human Help?">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[{label: "Live Chat", value: "8AM–5PM SAST"}, {label: "Email Support", value: "support@nexusbyte.co.za"}, {label: "Call Centre", value: "+27 (0)10 500 5655"}, {label: "Remote Assistance", value: "By appointment"}].map(item => (
                        <div key={item.label} className="bg-gray-50 p-4 rounded-lg text-center">
                            <p className="font-bold">{item.label}</p>
                            <p className="text-sm text-gray-600">{item.value}</p>
                        </div>
                    ))}
                </div>
            </Section>

             {/* Downloads & Roadmap */}
            <Section title="Downloads & Next Steps" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                        <h3 className="font-semibold text-xl mb-3">📥 Downloads & Assets</h3>
                        <ul className="space-y-2">
                           {["User Manual PDF", "SLA Configuration Templates", "CSV Ticket Import Tool", "Brand Style Guidelines"].map(item => (
                               <li key={item} className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>{item}</li>
                           ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-3">🚀 What’s Coming Next?</h3>
                        <p className="text-gray-600 mb-4">We’re continuously improving Nexus-Ticketing with input from clients and open-source contributors.</p>
                        <Link to="/bytedesk/roadmap" className="font-bold text-nexusbyte-accent-green hover:underline">📌 See what’s on the roadmap &rarr;</Link>
                    </div>
                </div>
            </Section>
        </div>
    );
};
