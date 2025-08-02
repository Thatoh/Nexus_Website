

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, LightBulbIcon, BriefcaseIcon, AcademicCapIcon, HomeIcon,
    ChatBubbleLeftRightIcon, PuzzlePieceIcon
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

export const ZoomIntegrationsPage: React.FC = () => {
    const zoomServices = [
        { icon: CogIcon, title: "Zoom Implementation & Scaling", items: ["Zoom Meetings, Webinars, Zoom Rooms, and Zoom Phone setup", "SSO and admin dashboard configuration", "Hybrid deployment for boardrooms and virtual teams"] },
        { icon: CpuChipIcon, title: "Nova AI + Zoom", items: ["Real-time AI assistant in Zoom meetings (via integrations or overlays)", "Features: live transcription, summarisation, Q&A automation, speaker sentiment analysis", "Use cases: training, client onboarding, virtual support desks"] },
        { icon: ShieldCheckIcon, title: "Zoom Security & Compliance", items: ["Meeting passcodes, waiting rooms, and participant control policies", "Meeting recordings governance & retention compliance (POPIA, GDPR)", "Role-based access for hosts, co-hosts, and admins"] },
        { icon: PuzzlePieceIcon, title: "Zoom Integrations with Your Tools", items: ["Google Calendar & Microsoft Outlook syncing", "CRM trigger events (e.g., schedule Zoom after lead form submission)", "LMS (Learning Management Systems), ERP, and service desk integrations"] },
    ];
    
    const useCasesBySector = [
        { industry: "Education", application: "Auto-class summaries, attendance tracking, Q&A bots" },
        { industry: "Finance", application: "Compliance-recorded advisory calls with transcript AI" },
        { industry: "Healthcare", application: "Secure teleconsults + patient scheduling assistant" },
        { industry: "Public Sector", application: "Live town halls with multilingual captioning" },
        { industry: "Legal", application: "Deposition recording + clause tagging in real-time" },
    ];
    
    const novaAgentsForZoom = ["Meeting Summariser Bot", "Training Tracker", "Customer Onboarding Agent", "Virtual Moderator"];

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
                        🎥 Zoom Integrations
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Elevate Virtual Collaboration—Zoom-Ready, AI-Optimised, and Enterprise-Secure
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Zoom is no longer just for meetings—it’s a hub for communication, hybrid productivity, and customer engagement. NexusByte enhances your Zoom experience with custom integrations, automation, security, and seamless ecosystem connectivity.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “From boardrooms to breakout rooms—Zoom with intelligence, powered by NexusByte.”
                    </motion.blockquote>
                </div>
            </div>

            {/* Why Zoom with NexusByte? */}
            <Section title="💡 Why Zoom with NexusByte?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Zoom is flexible and fast. But with NexusByte, it becomes smart, secure, and enterprise-aware. We enable intelligent meeting agents, compliance alignment, and deep integration with your productivity stack—be it Microsoft, Google, or custom CRMs.
                </p>
            </Section>

            {/* Zoom Services We Offer */}
            <Section title="🔧 Zoom Services We Offer" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {zoomServices.map((service, index) => {
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

            {/* Use Cases by Sector */}
            <Section title="🧑‍🏫 Zoom Use Cases by Sector">
                 <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Sector</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Intelligent Zoom Application</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {useCasesBySector.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-2 font-medium">{row.industry}</td>
                                    <td className="px-4 py-2 text-sm">{row.application}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* AI Agents & Managed Service */}
            <Section title="AI-Enabled & Fully Managed" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">🧠 Zoom-Enhanced Nova Agents</h3>
                        <ul className="space-y-2 text-gray-700">
                        {novaAgentsForZoom.map((agent, i) => (
                             <li key={i} className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-green-500"/>{agent}</li>
                        ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">🛠 Zoom-as-a-Service (ZaaS)</h3>
                        <p className="text-gray-600 mb-4">NexusByte offers full Zoom lifecycle services for businesses:</p>
                        <p className="text-sm font-medium text-gray-800">Account setup & licensing, Zoom Room hardware provisioning, Nova agent overlay setup, Security policy alignment, and Live event support.</p>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="Let’s Zoom Smart" className="bg-nexusbyte-primary-dark" textWhite>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    NexusByte brings AI, security, and productivity together through Zoom.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:zoom@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📥 Contact our Collaboration Team
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Book a Zoom Experience Workshop
                    </a>
                </div>
            </Section>
        </div>
    );
};
