

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, LightBulbIcon, BriefcaseIcon
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

export const MicrosoftTeamsPage: React.FC = () => {
    const whatWeOfferData = [
        { icon: CogIcon, title: "Teams Deployment & Optimisation", items: ["Custom Teams rollout aligned with your org chart and workflows", "Channel structuring for departments, projects, or clients", "Integration with SharePoint, OneDrive, Planner, and other Microsoft 365 tools"] },
        { icon: CpuChipIcon, title: "Embedded AI Agents in Teams", items: ["Nova Agents that live within Teams channels", "Answer internal FAQs, generate reports, route tickets, and support onboarding", "Use Cases: HR bot, Sales pitch generator, Internal IT assistant"] },
        { icon: ShieldCheckIcon, title: "Teams Governance & Security", items: ["Role-based permissions, external guest access policies", "DLP, audit trails, sensitivity labels", "MFA, SSO, and Conditional Access enforcement"] },
        { icon: LightBulbIcon, title: "Meeting Intelligence", items: ["AI-generated meeting summaries, action items, and sentiment tagging", "Speech-to-text, multilingual captions, and voice command capabilities", "Automated scheduling and follow-up intelligence"] },
    ];
    
    const whyNexusByteData = [
        { feature: "Teams Customisation", advantage: "Tailored to your business structure and SOPs" },
        { feature: "AI Augmentation", advantage: "Native Nova integration for agents inside Teams" },
        { feature: "Microsoft 365 Licensing Support", advantage: "Assistance with Business Premium, E5, or EDU plans" },
        { feature: "Unified Hybrid Stack", advantage: "Integrated with collaboration, secure access, and cloud PCs" },
    ];
    
    const integrationsData = ["Power Platform", "Dynamics 365", "SharePoint", "Third-party Apps (Slack bridges, Zoom embeds, Salesforce cards)"];

    const useCaseSpotlightsData = [
        { icon: CogIcon, title: "Supply Chain & Logistics", description: "Teams agent to track orders, notify delays, and push shipment updates in real-time." },
        { icon: ShieldCheckIcon, title: "Healthcare", description: "Triage assistant integrated with scheduling for virtual consults and care updates." },
        { icon: BriefcaseIcon, title: "Professional Services", description: "Client handover packs, voice memos, and case files shared via dedicated Teams channels." },
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
                        👥 Microsoft Teams Integration
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        The Power of Teams—Supercharged with NexusByte’s Hybrid Collaboration Stack
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Microsoft Teams is more than chat—it’s a digital headquarters for the modern workforce. At NexusByte, we turn your Teams deployment into a smart, secure, and AI-augmented workspace that fuels hybrid productivity at scale.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Wherever your team is—Teams brings them together. We make that experience intelligent, secure, and seamless.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What We Offer */}
            <Section title="🔧 What We Offer">
                <div className="grid md:grid-cols-2 gap-8">
                    {whatWeOfferData.map((offering, index) => {
                        const Icon = offering.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-lg shadow-md text-left h-full"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{offering.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {offering.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green flex-shrink-0"/>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Why NexusByte & Popular Integrations */}
            <Section title="Advantages & Integrations" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🎯 Why NexusByte for Teams?</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">NexusByte Advantage</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {whyNexusByteData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-2 font-medium">{row.feature}</td>
                                            <td className="px-4 py-2 text-sm">{row.advantage}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🔁 Popular Integrations</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {integrationsData.map((item, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                                    <CheckIcon className="w-5 h-5 mr-3 text-nexusbyte-accent-green flex-shrink-0" />
                                    <span className="text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Use Case Spotlights */}
            <Section title="🧑‍💼 Use Case Spotlights">
                <div className="grid md:grid-cols-3 gap-8">
                    {useCaseSpotlightsData.map((spotlight, index) => {
                        const Icon = spotlight.icon;
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-lg text-left"
                            >
                                <Icon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
                                <h3 className="text-lg font-bold text-nexusbyte-primary-dark mb-2">{spotlight.title}</h3>
                                <p className="text-sm text-gray-600">{spotlight.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

             <Section title="Microsoft Teams-as-a-Service" className="bg-gray-50">
                 <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    We offer Teams as a managed service—licensing, setup, training, AI augmentation, and support.
                </p>
            </Section>
            
            {/* CTA Section */}
            <Section title="Ready to Power Up Teams?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Let’s build a smarter, more connected workspace for your organisation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:teams@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Contact our Collaboration Team
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Book a Discovery Call
                    </a>
                </div>
            </Section>
        </div>
    );
};
