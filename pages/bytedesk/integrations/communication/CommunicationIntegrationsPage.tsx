

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, ChatBubbleLeftRightIcon, ShieldCheckIcon, CogIcon
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

export const CommunicationIntegrationsPage: React.FC = () => {

    const supportedChannelsData = [
        { tool: "Microsoft Teams", highlights: "Respond to tickets directly within Teams channels. Create support requests via chat." },
        { tool: "Slack", highlights: "Use slash commands to log, update, or comment on tickets. Real-time alerts in threads." },
        { tool: "Zoom", highlights: "Schedule support sessions from within a ticket. Link recordings to resolution logs." },
        { tool: "WhatsApp Business", highlights: "Client ticket logging via WhatsApp. Route issues to agents automatically." },
        { tool: "Google Chat", highlights: "Auto-notify users of ticket updates and trigger approvals in Google Workspace." },
        { tool: "Email (IMAP/SMTP)", highlights: "Fully email-driven ticket logging and follow-up support." },
    ];
    
    const useCasesData = [
        { industry: "Retail", useCase: "Customers send queries via WhatsApp; ByteDesk turns them into tickets." },
        { industry: "Legal & Finance", useCase: "Clients request document reviews through Microsoft Teams." },
        { industry: "Education", useCase: "Faculty use Slack to escalate IT issues mid-class." },
        { industry: "Healthcare", useCase: "Zoom consultations generate follow-up tickets auto-linked to call logs." },
    ];

    const securityDeploymentData = [
        { title: "Security & Compliance", items: ["All integrations follow OAuth2 or API key security", "Admins control channel visibility and usage per role", "Full audit trail for message-based ticket creation"] },
        { title: "Deployment Options", items: ["One-click integrations from the ByteDesk Integrations Hub", "Custom routing and field mapping per channel", "White-label configs for MSPs managing multiple clients"] },
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
                        Communication Tool Integrations
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Connect ByteDesk with your favourite messaging and collaboration tools to deliver seamless, real-time IT support across every channel your users rely on.
                    </motion.p>
                </div>
            </div>

            {/* Why Integrate? */}
            <Section title="🔔 Why Integrate Communication Platforms?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    In today’s hybrid work environment, your users and teams are spread across tools like Microsoft Teams, Slack, WhatsApp, and Zoom. ByteDesk’s communication integrations ensure support is wherever your people are—without switching context.
                </p>
            </Section>

            {/* Supported Channels Table */}
            <Section title="💬 Supported Communication Channels" className="bg-gray-50">
                 <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                         <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Tool</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Integration Highlights</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {supportedChannelsData.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{row.tool}</td>
                                    <td className="px-6 py-4 text-sm">{row.highlights}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* Conversations & Notifications */}
            <Section title="Conversations & Notifications">
                 <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">🧠 Unified Conversations</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>One interface for email, chat, and voice support</li>
                            <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>Merge duplicate requests across multiple channels</li>
                            <li className="flex items-start"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>Preserve full history regardless of entry point</li>
                        </ul>
                    </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">⚙️ Smart Notifications & Routing</h3>
                        <p className="text-sm text-gray-600 mb-2">Trigger alerts in Teams/Slack for:</p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                            <li>High urgency tickets</li>
                            <li>SLA breaches</li>
                            <li>New ticket assignments</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Use Cases by Industry */}
            <Section title="📞 Use Cases Across Industries" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {useCasesData.map((useCase, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg text-left shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-nexusbyte-primary-dark mb-2">{useCase.industry}</h3>
                            <p className="text-sm text-gray-600">{useCase.useCase}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="🎯 Ready to Connect?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Add real-time responsiveness to your support stack.
                </p>
                <a href="mailto:integrations@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    📩 Need help setting up integrations?
                </a>
            </Section>
        </div>
    );
};
