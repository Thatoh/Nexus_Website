

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, PuzzlePieceIcon, TicketIcon, 
    ChartPieIcon, BriefcaseIcon, CogIcon
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

export const ByteDeskSuitePage: React.FC = () => {

    const coreModulesData = [
        { icon: CpuChipIcon, title: "Conversational AI Assistant", description: "Powered by Google Gemini and trained for MSP logic, it understands natural language, automates query routing, and triggers tickets or guided fixes." },
        { icon: PuzzlePieceIcon, title: "Guided Diagnostic Workflows", description: "Prebuilt and extensible flows including DSTV & Netflix Fixers, and a generic API connector for custom integrations." },
        { icon: TicketIcon, title: "Ticketing Hub", description: "A robust, three-panel UI for ticket management with rich filters, auto-ticket creation, and full audit trails." },
        { icon: ChartPieIcon, title: "System Analyzer", description: "A real-time simulated health scan for security, storage, backup & performance, generating fix recommendations." },
        { icon: BriefcaseIcon, title: "Knowledge Base (AI-Augmented)", description: "Smart article suggestions based on query, keyword filtering, and chat-to-search to reduce repetitive tickets." },
    ];
    
    const additionalToolsData = [
        { feature: "Integrations Hub", purpose: "Launch and manage service integrations (e.g., M365, Slack, WhatsApp, custom APIs)." },
        { feature: "ESG Dashboard", purpose: "Align support activities with Environmental, Social & Governance impact tracking." },
        { feature: "Guest Support Mode", purpose: "Enable low-friction access to chat and diagnostics for unauthenticated users." },
        { feature: "Secure Identity Control", purpose: "RBAC with admin/user roles, plus privacy & security settings for each user." },
    ];
    
    const forTeamsData = [
        "Cloud-native, on-prem, or hybrid setups",
        "Scalable architecture for enterprise & SME use",
        "White-label options for MSPs to resell or rebrand",
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
                        The ByteDesk Suite
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        The All-in-One AI-Powered IT Support Suite
                    </motion.p>
                </div>
            </div>

            {/* What is ByteDesk Suite? */}
            <Section title="🧠 What Is ByteDesk Suite?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    The ByteDesk Suite is NexusByte’s flagship, AI-powered platform designed to unify and elevate IT support operations. Tailored for Managed Service Providers (MSPs), internal IT teams, and digital service businesses, ByteDesk combines conversational AI, system diagnostics, smart automation, and ticket lifecycle management—into one cohesive, modern support suite. From guided DSTV diagnostics to enterprise-grade ticketing and API-driven workflows, ByteDesk gives you a support desk that thinks, acts, and adapts—24/7.
                </p>
            </Section>

            {/* Core Modules */}
            <Section title="⚙️ Core Modules at a Glance" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreModulesData.map((module, index) => {
                        const Icon = module.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-md text-left h-full"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{module.title}</h3>
                                <p className="text-sm text-gray-600">{module.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
            
            {/* Additional Tools & AI Workflows */}
            <Section title="Additional Tools & AI Workflows">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">💡 Additional Built-In Tools</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {additionalToolsData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.feature}</td>
                                            <td className="px-4 py-3 text-sm">{row.purpose}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧪 AI Workflows in Action</h3>
                         <div className="bg-gray-50 p-6 rounded-lg text-left">
                            <p className="text-gray-600 mb-4">Each ByteDesk Suite deployment includes a Nova-powered agent, which can be extended to:</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>Automate recurring IT tasks (password resets, app access)</li>
                                <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>Provide usage analytics (ticket trends, resolution time)</li>
                                <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>Offer compliance suggestions (POPIA-aligned prompts)</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </Section>

             {/* For Teams of All Sizes */}
            <Section title="📈 For Teams of All Sizes" className="bg-gray-50">
                <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Whether you're supporting 10 users or 10,000, ByteDesk adapts with:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {forTeamsData.map((item, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm border border-gray-200"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="💬 Get Started" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Book a live demo to see how ByteDesk Suite can replace fragmented tools with one intelligent platform for IT success.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:support@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📨 Email: support@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <Link to="/ticketing-system/demo" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Request a Demo
                    </Link>
                </div>
            </Section>
        </div>
    );
};
