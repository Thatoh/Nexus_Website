

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, PuzzlePieceIcon, TicketIcon, 
    ChartPieIcon, BriefcaseIcon, CogIcon, ShieldCheckIcon, UsersIcon, ChatBubbleLeftRightIcon
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

export const LiveChatPage: React.FC = () => {

    const powerfulFeaturesData = [
        { icon: CpuChipIcon, title: "AI-Enhanced Replies", items: ["Nova AI instantly surfaces relevant help articles, pre-written responses, or suggested solutions as agents type.", "Smart auto-suggestions (based on context)", "AI triage for routing tickets or complex issues"] },
        { icon: ChatBubbleLeftRightIcon, title: "Multi-Channel Experience", items: ["Engage users wherever they are: Embedded chat widget for your site or portal, Microsoft Teams, WhatsApp, Slack, and SMS/Email fallback."] },
        { icon: CogIcon, title: "Agent Console Features", items: ["Real-time visitor tracking and typing indicators", "Chat transfer between departments", "Internal agent notes and whisper replies", "File attachments and emoji/sticker support", "Live status indicators (online, busy, offline)"] },
        { icon: ShieldCheckIcon, title: "Secure by Design", items: ["End-to-end encrypted sessions", "Role-based access to chat histories", "Session-based transcript retention", "POPIA and GDPR-ready compliance modes"] },
    ];
    
    const suiteIntegrationData = [
        { icon: TicketIcon, feature: "Ticket Management", description: "Escalate any chat to a full ticket with one click" },
        { icon: BriefcaseIcon, feature: "Knowledge Base", description: "Surface relevant articles during the chat" },
        { icon: ChartPieIcon, feature: "System Analyzer", description: "Trigger health scans mid-conversation" },
        { icon: ChartPieIcon, feature: "Reports", description: "Chat volumes, satisfaction ratings, and agent performance" },
    ];

    const useCasesData = [
        { scenario: "IT Helpdesk", example: "Employee can't connect to VPN—chatbot runs diagnostics, agent joins if unresolved." },
        { scenario: "Product Support", example: "Customer chats via site widget—AI recommends 2 possible fixes before routing." },
        { scenario: "Sales Enablement", example: "Chat triggers when user lingers on a pricing page—agent or bot responds." },
    ];

    const mspBenefits = ["White-labeled for MSP resale", "Integrated with CRM & Microsoft 365", "SLA-backed responses and chat-to-ticket workflows"];

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
                        ByteDesk Live Chat Software
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Real-time, AI-enhanced live chat support for modern IT teams and service providers.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        ByteDesk Live Chat transforms how support teams engage with users. Built into the ByteDesk Suite, it combines real-time human support with Nova-powered AI assistance, allowing faster resolutions, improved customer experience, and scalable helpdesk operations.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        ⚡ Instant Support. Smarter Conversations.
                    </motion.blockquote>
                </div>
            </div>

            {/* What Makes It Powerful? */}
            <Section title="🧠 What Makes It Powerful?">
                <div className="grid md:grid-cols-2 gap-8">
                    {powerfulFeaturesData.map((feature, index) => {
                        const Icon = feature.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{feature.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {feature.items.map((item, i) => (
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

            {/* Integrated with ByteDesk Suite */}
            <Section title="📈 Integrated with ByteDesk Suite" className="bg-gray-50">
                 <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Live Chat doesn’t operate in a silo—it connects directly into:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {suiteIntegrationData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mx-auto mb-3"/>
                                <h4 className="font-semibold text-gray-800">{item.feature}</h4>
                                <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Section>

            {/* Use Cases Table */}
            <Section title="🎯 Use Cases">
                 <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Scenario</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Example</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {useCasesData.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{row.scenario}</td>
                                    <td className="px-6 py-4 text-sm">{row.example}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* For MSPs & Internal Teams */}
             <Section title="💼 For MSPs & Internal Teams" className="bg-gray-50">
                <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Whether you're supporting 100 clients or 1000 staff, ByteDesk Live Chat adapts:
                </p>
                <div className="max-w-3xl mx-auto text-left space-y-4">
                    {mspBenefits.map((item, index) => (
                        <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                            <CheckIcon className="w-6 h-6 mr-3 text-nexusbyte-accent-green flex-shrink-0" />
                            <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="📲 Get Live, Stay Smart" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Make support truly conversational—with ByteDesk Live Chat. Combine real-time responsiveness with AI-enabled intelligence.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <Link to="/bytedesk/demo" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📞 Book a walkthrough
                    </Link>
                    <span className="text-gray-500">or</span>
                     <a href="mailto:livechat@nexusbyte.co.za" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                       📧 Email: livechat@nexusbyte.co.za
                    </a>
                </div>
            </Section>
        </div>
    );
};
