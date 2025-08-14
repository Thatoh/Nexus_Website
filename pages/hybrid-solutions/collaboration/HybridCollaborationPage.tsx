
import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from '../../../components/icons';

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

export default function HybridCollaborationPage() {
    const coreCapabilitiesData = [
        { icon: ChatBubbleLeftRightIcon, title: "Unified Communication Hubs", items: ["Chat, video, and calling unified in platforms like Microsoft Teams, Zoom, and Slack", "Real-time presence, file-sharing, and AI-powered meeting summarisation", "Integrated with calendars and business tools for seamless workflow"] },
        { icon: BriefcaseIcon, title: "Document Collaboration & Co-Authoring", items: ["Simultaneous editing on platforms like Microsoft 365, Google Workspace, and OnlyOffice", "Smart versioning and real-time comment threads", "Data-aware AI agents that can assist while writing proposals or policies"] },
        { icon: UsersIcon, title: "Team Workspaces & Portals", items: ["Department-specific digital work hubs", "Project trackers with visual timelines and task boards (Trello, Monday.com, MS Planner)", "Embedded Nova agents for guidance, knowledge search, and onboarding"] },
        { icon: CpuChipIcon, title: "AI-Augmented Meetings", items: ["Nova Meeting Assistant generates action items, summaries, and next-step tracking", "Speech-to-text, multilingual captions, and voice command capabilities", "Automated scheduling and follow-up intelligence"] },
    ];

    const integrationStackData = [
        { layer: "Communication", platforms: "Microsoft Teams, Zoom, Slack, Discord" },
        { layer: "File Collaboration", platforms: "SharePoint, OneDrive, Google Drive, Dropbox" },
        { layer: "Scheduling & Calendars", platforms: "Outlook, Google Calendar, Calendly" },
        { layer: "Knowledge Management", platforms: "Confluence, Notion, ClickUp" },
        { layer: "Identity & Access Control", platforms: "Microsoft Entra ID (Azure AD), Google Workspace Admin" },
    ];
    
    const benefitsData = [
        { challenge: "Communication silos", solution: "Unified chat/video hubs" },
        { challenge: "Disjointed project visibility", solution: "Centralised team workspaces" },
        { challenge: "Delays in document collaboration", solution: "Real-time co-authoring with AI version tracking" },
        { challenge: "Missed tasks post-meeting", solution: "AI-generated action logs + calendar sync" },
    ];
    
    const useCasesByDeptData = [
        { department: "Legal", benefit: "Co-draft contracts with redlines tracked across teams" },
        { department: "Finance", benefit: "Shared budgeting workbooks with versioning & sign-off logs" },
        { department: "Sales", benefit: "Unified client decks and live pitch collaboration" },
        { department: "HR", benefit: "Remote onboarding portals with interactive SOP walkthroughs" },
        { department: "IT", benefit: "Dev + Ops co-working channels with integrated runbooks" },
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
                        Hybrid Collaboration Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Empower Teams to Work Seamlessly—Anywhere, Anytime.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        In a world where location should never limit productivity, NexusByte delivers collaboration infrastructure built for modern hybrid teams. Our Collaboration Solutions integrate secure communication, real-time co-authoring, and AI-enabled tools to elevate teamwork—whether you're in the boardroom or the bedroom.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Hybrid work thrives when collaboration is intuitive, secure, and effortless.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What Are Hybrid Collaboration Solutions? */}
            <Section title="🧠 What Are Hybrid Collaboration Solutions?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Hybrid collaboration bridges the gap between in-office and remote teams, enabling real-time communication, shared productivity tools, and integrated workflows. NexusByte’s suite combines cloud-native tools, AI enhancements, and zero-trust security to ensure teams stay aligned—regardless of geography.
                </p>
            </Section>

            {/* Core Capabilities */}
            <Section title="🔍 Core Capabilities" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {coreCapabilitiesData.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-left h-full"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{capability.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {capability.items.map((item, i) => (
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

            {/* Integration & Use Cases */}
            <Section title="Ready for Anything, Built for Everyone">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🛠️ Integration-Ready & Secure</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Layer</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Supported Platforms/Tools</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {integrationStackData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-2 font-medium">{row.layer}</td>
                                            <td className="px-4 py-2 text-sm">{row.platforms}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🎯 Use Cases by Department</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesByDeptData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-2 font-medium">{row.department}</td>
                                            <td className="px-4 py-2 text-sm">{row.benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
             {/* Security & Benefits */}
            <Section title="Security and Benefits" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🔐 Security & Governance</h3>
                        <ul className="space-y-3 text-left">
                            {["Role-based access for document & call sharing", "Full audit trails of collaborative edits", "MFA integration across platforms", "POPIA-compliant cloud hosting and data governance"].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 mr-3 mt-1 text-nexusbyte-accent-green flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📈 Benefits for Hybrid Teams</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {benefitsData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-2 font-medium">{row.challenge}</td>
                                            <td className="px-4 py-2 text-nexusbyte-accent-green font-semibold">{row.solution}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="🚀 Ready to Collaborate at the Next Level?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Let us assess your current hybrid collaboration stack and integrate AI-driven enhancements to future-proof your workforce.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:collab@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Contact the Collaboration Team
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Book a tech assessment
                    </a>
                </div>
            </Section>
        </div>
    );
}
