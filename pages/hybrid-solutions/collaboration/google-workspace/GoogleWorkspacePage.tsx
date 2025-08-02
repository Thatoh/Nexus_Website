

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, CloudArrowUpIcon, BriefcaseIcon, AcademicCapIcon, HomeIcon,
    ChatBubbleLeftRightIcon
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

export const GoogleWorkspacePage: React.FC = () => {
    const nexusByteServices = [
        { icon: CloudArrowUpIcon, title: "Workspace Deployment & Migration", items: ["Email migration from Microsoft 365, Zimbra, or cPanel", "Domain linking and DNS record configuration", "User provisioning, security baseline, and admin console setup"] },
        { icon: CpuChipIcon, title: "AI-Enhanced Collaboration", items: ["Embed Nova Agents inside Gmail, Docs, and Chat", "Auto-draft emails, summarise Google Meet recordings, answer internal policy questions", "Agent use cases for legal, HR, finance, and customer support teams"] },
        { icon: ShieldCheckIcon, title: "Workspace Security & Compliance", items: ["Configure 2FA, SSO, and access control policies", "Drive DLP, data classification, and audit logs", "Support for POPIA, GDPR, and ISO27001 alignment"] },
        { icon: UsersIcon, title: "Workspace Training & Change Management", items: ["Custom user training sessions for each department", "Best-practice guides and policy onboarding", "Post-deployment support and usage analytics"] },
    ];
    
    const integrationCapabilities = [
        { platform: "Google Drive", functions: "Secure file sharing, live editing, agent annotation" },
        { platform: "Google Docs", functions: "Nova inline suggestions, policy co-writing, summarisation" },
        { platform: "Google Chat", functions: "Real-time agent responses, ticket routing, reminders" },
        { platform: "Google Meet", functions: "AI summaries, translation, voice-driven commands" },
        { platform: "Google Sheets", functions: "Budget analysis, data cleanup, formula auto-fill" },
    ];
    
    const useCasesByIndustry = [
        { icon: HomeIcon, industry: "Public Sector", useCase: "Document automation for permits, project proposals, and internal memos." },
        { icon: AcademicCapIcon, industry: "Education", useCase: "Nova tutors inside Classroom + Docs for guided learning and curriculum assistance." },
        { icon: ShieldCheckIcon, industry: "Healthcare", useCase: "Policy lookup agents, appointment scheduling, and secure doc collaboration." },
        { icon: BriefcaseIcon, industry: "SME Operations", useCase: "Onboarding checklists, sales templates, and internal knowledge agents." },
    ];
    
    const benefitsData = [
        { challenge: "Fragmented document collaboration", solution: "Real-time co-authoring with AI prompts" },
        { challenge: "Confusion on internal policies", solution: "Nova Assistant trained on HR/Finance documents" },
        { challenge: "Email overload and missed responses", solution: "AI-drafted replies with response priority ranking" },
        { challenge: "Lack of file governance", solution: "Enforced DLP, tagging, and version tracking" },
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
                        🧩 Google Workspace Collaboration
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Simplify, Connect, and Collaborate in the Cloud—Smarter with NexusByte
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Google Workspace is a flexible productivity suite that adapts to how modern teams work. At NexusByte, we enhance your Workspace experience with advanced configuration, AI integrations, secure remote collaboration, and seamless change management.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Work faster. Share smarter. Collaborate securely. Welcome to a better way to Google.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What Are Google Workspace Solutions? */}
            <Section title="☁️ What Are Google Workspace Solutions?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Google Workspace includes Gmail, Calendar, Drive, Docs, Meet, Sheets, and more—all unified in a secure, cloud-first platform. We take this further by embedding AI assistants, streamlining workflows, automating document tasks, and ensuring enterprise-grade data protection.
                </p>
            </Section>

            {/* NexusByte Services */}
            <Section title="🔧 NexusByte Services for Google Workspace" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {nexusByteServices.map((service, index) => {
                        const Icon = service.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{service.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0"/>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Integration Capabilities & Benefits */}
            <Section title="Integrations & Benefits">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🔁 Integration Capabilities</h3>
                        <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Platform</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Supported Functions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {integrationCapabilities.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-2 font-medium">{row.platform}</td>
                                            <td className="px-4 py-2 text-sm">{row.functions}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📈 Benefits Snapshot</h3>
                        <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {benefitsData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-2 font-medium">{row.challenge}</td>
                                            <td className="px-4 py-2 text-green-600 font-semibold">{row.solution}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Use Cases by Industry */}
            <Section title="💡 Use Cases Across Industries" className="bg-gray-50">
                 <div className="grid md:grid-cols-2 gap-8">
                    {useCasesByIndustry.map((spotlight, index) => {
                        const Icon = spotlight.icon;
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg text-left shadow-md"
                            >
                                <Icon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
                                <h3 className="text-lg font-bold text-nexusbyte-primary-dark mb-2">{spotlight.industry}</h3>
                                <p className="text-sm text-gray-600">{spotlight.useCase}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
            
            {/* AI Inside Google & Managed Service */}
            <Section title="AI-Enabled & Fully Managed">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">🧠 AI Inside Google Workspace</h3>
                        <p className="text-gray-600">Nova can be embedded via add-ons or browser extensions, enabling: Contract review in Docs, Internal helpdesk in Chat, Meeting summarisation in Calendar + Meet, and a Knowledge query agent in Drive.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">💼 Google Workspace-as-a-Service</h3>
                        <p className="text-gray-600">We offer end-to-end managed Workspace services including Setup, Training, AI Integration, and Support.</p>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="Ready to Upgrade Your Workspace?" className="bg-nexusbyte-primary-dark" textWhite>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:workspace@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Contact Workspace Services
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Book a readiness assessment
                    </a>
                </div>
            </Section>
        </div>
    );
};
