

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    PuzzlePieceIcon
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

export const UCStrategyPage: React.FC = () => {
    const focusAreasData = [
        { icon: PuzzlePieceIcon, title: "Platform Consolidation", items: ["Identify overlapping tools", "Map user workflows", "Recommend optimal licensing & vendor alignment"] },
        { icon: ArrowRightIcon, title: "Communication Flow Mapping", items: ["UC process diagrams", "Latency bottleneck detection", "Routing logic for voice, chat, video, and support"] },
        { icon: ShieldCheckIcon, title: "Security & Compliance", items: ["Secure messaging platforms", "Meeting access controls", "E-discovery-ready archives"] },
        { icon: CpuChipIcon, title: "AI-Enhanced Interactions", items: ["Meeting summary bots", "Sales assistant in Zoom/Teams", "Internal knowledge retrieval bots in Slack"] },
    ];

    const strategyServicesData = [
        { service: "UC Discovery Workshop", description: "Assess current tools, map communication gaps, evaluate user needs" },
        { service: "Platform Selection & Licensing", description: "Choose best-fit UC platforms (Zoom, Teams, Slack, etc.) with cost analysis" },
        { service: "Integration Blueprint", description: "Connect UC tools with CRM, HRIS, file sharing, and calendars" },
        { service: "Security & Governance Policies", description: "Define data retention, access control, and messaging compliance" },
        { service: "UC Playbooks & Rollout Plans", description: "Training, change management, and success measurement" },
    ];

    const useCasesData = [
        { sector: "Healthcare", useCase: "Nova assistant summarises voice calls into case files" },
        { sector: "Legal", useCase: "Slack + Teams + Document AI for fast legal support" },
        { sector: "Financial", useCase: "Secure voice notes synced to CRM with transcripts" },
        { sector: "Education", useCase: "Classroom collaboration with moderated chat + video" },
    ];

    const benefitsData = [
        { challenge: "Communication silos", solution: "Unified chat/video hubs" },
        { challenge: "Disjointed project visibility", solution: "Centralised team workspaces" },
        { challenge: "Delays in document collaboration", solution: "Real-time co-authoring with AI version tracking" },
        { challenge: "Missed tasks post-meeting", solution: "AI-generated action logs + calendar sync" },
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
                        📡 Unified Communications Strategy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Designing Intelligent, Secure, and Connected Workflows for the Hybrid Era
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Unified Communications (UC) is no longer a luxury—it’s a competitive imperative. NexusByte helps organisations develop a strategic UC roadmap that integrates chat, voice, video, file-sharing, and automation into one coherent, cloud-native ecosystem.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Unify your conversations. Amplify your productivity. Fortify your hybrid workforce.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What is UC Strategy? */}
            <Section title="🧩 What Is Unified Communications Strategy?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    A Unified Communications Strategy combines the technologies, policies, and integration plans that govern how your teams communicate across devices and platforms. NexusByte designs these strategies with a focus on:
                </p>
                 <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {["Seamless hybrid work enablement", "Interoperability across Zoom, Teams, Slack, and email", "Security, compliance, and bandwidth optimisation", "Embedded AI agents to assist, summarise, and route interactions"].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm flex items-center"
                        >
                            <CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/> {item}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Strategic Focus Areas */}
            <Section title="🎯 Strategic Focus Areas" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {focusAreasData.map((area, index) => {
                        const Icon = area.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{area.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {area.items.map((item, i) => (
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

            {/* UC Strategy Services & Use Cases */}
            <Section title="Our Services & Real-World Impact">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🛠 NexusByte UC Strategy Services</h3>
                        <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {strategyServicesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.service}</td>
                                            <td className="px-4 py-3 text-sm">{row.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧠 Unified Communications in Action</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Sector</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Example UC Use Case</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.sector}</td>
                                            <td className="px-4 py-3 text-sm">{row.useCase}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* Blueprint & Results */}
            <Section title="Blueprint & Expected Results" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">🧩 Unified Communications Blueprint Sample</h3>
                        <p className="text-gray-600 mb-4">Your stack may include:</p>
                         <ul className="space-y-2 text-gray-700">
                            {["Zoom or Teams (video + voice)", "Slack or ChatOps tools", "Email + shared inboxes", "File-sharing (Google Drive, SharePoint)", "Nova AI Agents (embedded across platforms)"].map((item, i) => (
                                 <li key={i} className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>{item}</li>
                            ))}
                        </ul>
                    </div>
                     <div className="text-left bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">📈 Results You Can Expect</h3>
                         <ul className="space-y-2 text-gray-700">
                            {["40% improvement in team response times", "100% audit-ready comms for compliance sectors", "Reduced IT load with centralised UC admin", "Data visibility across channels"].map((item, i) => (
                                 <li key={i} className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="🤝 Let’s Build Your UC Future" className="bg-nexusbyte-primary-dark" textWhite>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    UC is not just about the tools—it’s about how your people connect. Let NexusByte guide your unified communications transformation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:hybrid@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Contact our Hybrid Work Team
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Schedule your UC Discovery Workshop
                    </a>
                </div>
            </Section>
        </div>
    );
};
