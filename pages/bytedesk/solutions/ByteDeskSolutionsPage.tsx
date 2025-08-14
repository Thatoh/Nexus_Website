

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, PuzzlePieceIcon, TicketIcon, 
    ChartPieIcon, BriefcaseIcon, CogIcon, ShieldCheckIcon, UsersIcon,
    HomeIcon, AcademicCapIcon, ChatBubbleLeftRightIcon
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

export const ByteDeskSolutionsPage: React.FC = () => {

    const nativeIntegrationsData = [
        { platform: "Microsoft 365", useCase: "Auto-create tickets from Outlook, Teams-based notifications, KB access from SharePoint" },
        { platform: "Slack", useCase: "Create/view tickets directly from Slack channels, alert escalation" },
        { platform: "Zoom", useCase: "Schedule support calls, auto-log meetings into tickets, enable Zoom-based triage sessions" },
        { platform: "WhatsApp Business API", useCase: "Client ticket logging via WhatsApp, real-time updates, Nova chat integration" },
        { platform: "Salesforce & CRMs", useCase: "Pull client context into tickets, sync status updates back into CRM records" },
    ];
    
    const aiWorkflowsData = [
        "Self-healing diagnostics: Auto-resolve device/network errors based on past solutions",
        "Intelligent routing: Assign tickets based on sentiment, urgency, and past behaviour",
        "Workflow triggers: If a server error is detected, notify Slack + escalate ticket + run diagnostics",
        "Smart ticket suggestions: Suggest KB articles or similar solved issues mid-chat",
    ];

    const industryUseCasesData = [
        { icon: ShieldCheckIcon, industry: "Healthcare IT", benefit: "EHR downtime reports auto-escalated to vendors, Nova-guided asset logging for clinical devices, Patient support portal with ticket deflection AI." },
        { icon: CogIcon, industry: "MSPs & Internal IT", benefit: "Proactive server checks & alerts, White-labelled dashboards for client companies, SLA reporting & audit trail integration." },
        { icon: BriefcaseIcon, industry: "Retail & E-Commerce", benefit: "Omni-channel support via WhatsApp + Email + Web, Automated product FAQ generation with Nova, Agent assignment based on product category." },
        { icon: AcademicCapIcon, industry: "Education", benefit: "Faculty and student portals with role-based ticketing, Nova chatbot trained on IT policy & campus tech, Device loan requests with return tracking." },
    ];
    
    const customStackData = [
        { feature: "Create custom workflows" },
        { feature: "Connect to 3rd party REST APIs" },
        { feature: "Push/receive updates from your ERP, CRM, or Helpdesk" },
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
                        ByteDesk Integrations & Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Connect ByteDesk across your IT stack. Power smarter workflows, faster resolutions, and custom-fit support systems with seamless integrations and real-world solutions.
                    </motion.p>
                </div>
            </div>

            {/* Seamless Integrations */}
            <Section title="🔗 Seamless Integrations">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                    ByteDesk connects with your essential tools to extend support capabilities. Custom API connectors available for legacy or industry-specific platforms.
                </p>
                <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                         <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Platform</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Use Case</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {nativeIntegrationsData.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{row.platform}</td>
                                    <td className="px-6 py-4 text-sm">{row.useCase}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* AI-Driven Workflows */}
            <Section title="🛠️ AI-Driven Workflows (Powered by Nova)" className="bg-gray-50">
                 <div className="grid md:grid-cols-2 gap-4">
                    {aiWorkflowsData.map((item, index) => (
                        <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                            <CpuChipIcon className="w-6 h-6 mr-3 text-nexusbyte-accent-green flex-shrink-0" />
                            <span className="text-gray-800">{item}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Industry Use Cases */}
            <Section title="🧪 Industry Use Cases">
                <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
                    ByteDesk adapts across verticals:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {industryUseCasesData.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-lg text-left"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">{useCase.industry}</h3>
                                <p className="text-sm text-gray-600">{useCase.benefit}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
            
            {/* Build Your Own Stack & White-Label */}
            <Section title="Build Your Own & White-Label Support" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧩 Build Your Own Stack</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md text-left">
                           <p className="text-gray-600 mb-4">Use ByteDesk's Integration Hub to:</p>
                           <ul className="space-y-3">
                                {customStackData.map((item, i) => <li key={i} className="flex items-center text-gray-700"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>{item.feature}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🌐 White-Label & Multi-Tenant Support</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md text-left">
                            <p className="text-gray-600 mb-4">Running ByteDesk as a service for your clients? It supports:</p>
                             <ul className="space-y-3">
                                {["Custom theming & domain mapping", "Role-based tenant views", "Client-specific integrations", "Multi-org management for MSPs"].map((item, i) => <li key={i} className="flex items-center text-gray-700"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="🚀 Ready to Connect?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Let our team help you configure ByteDesk to match your workflow and system ecosystem.
                </p>
                 <a href="mailto:solutions@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    📧 Book an integration session
                </a>
            </Section>
        </div>
    );
};
