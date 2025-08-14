

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

export const TicketingPage: React.FC = () => {
    const keyFeaturesData = [
        { icon: PuzzlePieceIcon, title: "Multi-Channel Ticket Capture", items: ["Email-to-ticket", "Chat-to-ticket (via ByteDesk Live Chat)", "Self-service portal forms", "API or 3rd-party integrations (e.g., M365, Slack)"] },
        { icon: CpuChipIcon, title: "Smart Ticket Routing", items: ["Nova AI auto-prioritises based on urgency and keywords", "Assigns to the right team or technician", "Suggests similar resolved tickets"] },
        { icon: TicketIcon, title: "Unified Ticket View", items: ["Full ticket history and thread", "Client profile and device metadata", "Attachments, linked knowledge articles, resolution logs"] },
        { icon: CogIcon, title: "Lifecycle Management", items: ["Status flows: Open → In Progress → Resolved → Closed", "Set ETAs, SLAs, and follow-ups", "Escalate or reassign with audit trail preservation"] },
        { icon: ChartPieIcon, title: "Embedded Insights", items: ["First response & resolution times", "Agent productivity dashboards", "Volume trends by issue type, client, or department", "SLA compliance tracking"] },
        { icon: ShieldCheckIcon, title: "Security & Controls", items: ["Role-based access for agents, admins, and clients", "Activity logs for full accountability", "POPIA/GDPR-compliant data handling"] },
    ];

    const integrationHighlights = [
        { feature: "Nova AI", description: "Auto-suggest solutions, generate ticket summaries", icon: CpuChipIcon },
        { feature: "Knowledge Base", description: "Link articles to tickets and suggest FAQs", icon: BriefcaseIcon },
        { feature: "System Analyzer", description: "Attach diagnostic reports to tickets", icon: ChartPieIcon },
        { feature: "API Hub", description: "Connect third-party systems like CRM, ERP, or M365", icon: PuzzlePieceIcon },
    ];
    
    const productivityFeatures = ["Reusable templates for recurring requests", "Drag-and-drop file attachments", "Internal notes & external replies split views", "Built-in time tracking for agents", "Notifications for updates, mentions, and SLAs"];
    
    const useCasesData = [
        { useCase: "MSPs with multiple clients", benefit: "Organise tickets per client, streamline SLAs" },
        { useCase: "Internal IT", benefit: "Log, assign, and resolve hardware/software issues with context" },
        { useCase: "Product teams", benefit: "Capture and prioritise user feedback as structured tasks" },
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
                        ByteDesk Integrated Ticketing System
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Centralise your support operations, streamline ticket lifecycles, and elevate agent productivity with a smart, integrated ticketing engine.
                    </motion.p>
                </div>
            </div>

            {/* What it is */}
            <Section title="🧩 One System. Total Visibility.">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    The ByteDesk Integrated Ticketing System is the core of your service operations—designed to unify multi-channel support requests, optimise response workflows, and give agents a single source of truth across the support journey. Built to support MSPs and internal IT teams, the system handles everything from ticket creation and routing to escalation, resolution, and analytics—with AI enhancements built in.
                </p>
            </Section>

            {/* Key Features */}
            <Section title="⚙️ Key Features" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keyFeaturesData.map((feature, index) => {
                        const Icon = feature.icon;
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
            
            {/* Integration & Productivity */}
            <Section title="Built with Productivity in Mind">
                 <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧵 Integration Highlights</h3>
                        <div className="space-y-4">
                            {integrationHighlights.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                <div key={i} className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                                    <Icon className="w-8 h-8 text-nexusbyte-accent-green flex-shrink-0"/>
                                    <div>
                                        <h4 className="font-semibold">{item.feature}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                     <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🔄 Productivity Features</h3>
                         <div className="bg-gray-50 p-6 rounded-lg text-left">
                            <ul className="space-y-3">
                                {productivityFeatures.map((item, i) => <li key={i} className="flex items-start"><CheckIcon className="w-5 h-5 mr-3 mt-1 text-nexusbyte-accent-green"/>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

             {/* Use Cases */}
            <Section title="🧪 Use Cases" className="bg-gray-50">
                <div className="grid md:grid-cols-3 gap-8">
                    {useCasesData.map((useCase, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg text-center"
                        >
                            <h3 className="text-lg font-bold text-nexusbyte-primary-dark mb-2">{useCase.useCase}</h3>
                            <p className="text-sm text-gray-600">{useCase.benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="🚀 Ready to Streamline Support?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    The ByteDesk Ticketing System is fully customisable, scalable, and ready to power your support organisation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <Link to="/ticketing-system/demo" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        🧪 Test the system in demo mode
                    </Link>
                    <span className="text-gray-500">or</span>
                     <a href="mailto:support@nexusbyte.co.za" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                       📩 Contact Sales
                    </a>
                </div>
            </Section>
        </div>
    );
};
