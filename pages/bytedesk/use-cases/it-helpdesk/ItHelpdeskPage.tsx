

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, PuzzlePieceIcon, TicketIcon, 
    ChartPieIcon, BriefcaseIcon, CogIcon, ShieldCheckIcon
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

export const ItHelpdeskPage: React.FC = () => {

    const challengesData = ["Manual ticket triaging", "Delays in hardware/software provisioning", "Inconsistent response and SLA breaches", "Poor internal visibility of issue status", "Fragmented communications across teams"];

    const solutionsData = [
        { icon: CpuChipIcon, title: "AI-Powered Ticket Triage", description: "Nova AI automatically categorises, prioritises, and assigns tickets based on urgency, keywords, and historical patterns—saving your team valuable time." },
        { icon: CogIcon, title: "Guided Troubleshooting Flows", description: "Built-in diagnostic workflows (e.g., for Windows, printers, connectivity issues) walk users through common issues and offer resolutions before a ticket is even created." },
        { icon: BriefcaseIcon, title: "Self-Service Knowledge Base", description: "Equip employees with searchable how-to guides, FAQs, and automated suggestions—reducing basic ticket volumes." },
        { icon: ChartPieIcon, title: "System Health Analyzer", description: "Scan endpoints and server environments to flag potential issues before they become problems. Generate reports for proactive intervention." },
        { icon: PuzzlePieceIcon, title: "Ticket Linking & Asset Management", description: "Connect support issues to devices, software licenses, or users—so agents always have full context at a glance." },
    ];

    const featuresForItData = [
        { feature: "SLA Monitoring", benefit: "Auto-notifications before deadlines, escalations triggered for breaches" },
        { feature: "Audit Logs", benefit: "Full history of actions, changes, and resolution notes" },
        { feature: "Collaboration Threads", benefit: "Engineers can tag each other or escalate inline" },
        { feature: "Multi-Channel Support", benefit: "Users log issues via Teams, Slack, Email, or Web Portal" },
        { feature: "Device Management View", benefit: "Track IT assets linked to support history" },
    ];
    
    const useCasesExamplesData = [
        { type: "Corporate Office", example: "Intranet-based self-service portal for all device, app, and account issues." },
        { type: "MSP", example: "Multi-client environment with white-labeled portals and shared Nova agents." },
        { type: "University", example: "Students log Wi-Fi or software issues via Slack, resolved through guided workflows." },
        { type: "Startup", example: "Quick Zoom session links built into ticket interface for remote support." },
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
                        🖥️ ByteDesk for IT Helpdesks
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Transform internal support with intelligent, automated, and streamlined workflows.
                    </motion.p>
                </div>
            </div>

            {/* Intro */}
            <Section title="🎯 What Is ByteDesk’s IT Helpdesk Suite?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                   A modern, AI-powered helpdesk platform designed to support internal IT teams, system admins, and MSPs. ByteDesk automates routine queries, accelerates issue resolution, and provides a centralised environment to manage infrastructure-related support.
                </p>
            </Section>

            {/* Challenges & Solutions */}
            <Section title="From Challenge to Solution" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">❌ Common IT Helpdesk Challenges</h3>
                        <div className="space-y-3">
                            {challengesData.map((challenge, i) => (
                                <div key={i} className="bg-red-50 p-3 rounded-lg flex items-center shadow-sm">
                                    <span className="text-red-500 font-bold text-lg mr-3">!</span>
                                    <p className="text-gray-700">{challenge}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">✅ ByteDesk Solutions</h3>
                         <div className="space-y-4">
                            {solutionsData.map((solution, i) => {
                                const Icon = solution.icon;
                                return (
                                <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-left">
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-6 h-6 text-nexusbyte-accent-green flex-shrink-0" />
                                        <h4 className="font-semibold text-gray-800">{solution.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 pl-9">{solution.description}</p>
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Features & Use Cases */}
            <Section title="Built for IT, By IT">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧠 Built-in Features for IT Teams</h3>
                        <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {featuresForItData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.feature}</td>
                                            <td className="px-4 py-3 text-sm">{row.benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🏢 Use Case Examples</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesExamplesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.type}</td>
                                            <td className="px-4 py-3 text-sm">{row.example}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* Security */}
            <Section title="🔐 Security & Privacy" className="bg-gray-50">
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full">Role-Based Access Control (RBAC)</span>
                    <span className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full">POPIA/GDPR-aligned data handling</span>
                    <span className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full">Admin-only audit access</span>
                    <span className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full">Agent-specific ticket visibility</span>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="🚀 Get Started with ByteDesk" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Offer modern support to your internal teams or clients today. Use AI and intelligent workflows to power a truly responsive IT Helpdesk.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <Link to="/bytedesk/demo" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        Get a Demo &rarr;
                    </Link>
                    <span className="text-gray-500">or</span>
                     <a href="mailto:demo@bytedesk.co.za" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📨 demo@bytedesk.co.za
                    </a>
                </div>
            </Section>
        </div>
    );
};
