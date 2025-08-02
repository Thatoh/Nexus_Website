import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CpuChipIcon, PuzzlePieceIcon, CommandLineIcon, BriefcaseIcon, ShieldCheckIcon, UsersIcon, ChartPieIcon, CogIcon, CloudArrowUpIcon, CheckIcon, ArrowRightIcon } from '../../../components/icons';

// Reusable Section Component (similar to other pages)
const Section = ({ title, subtitle, children, className = '', textWhite = false }: { title: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean }) => (
    <div className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
        <div className="max-w-screen-xl mx-auto">
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
    </div>
);


const NovaPlatformOverviewPage = () => {
    // Content data from the prompt
    const pillars = [
        { icon: CommandLineIcon, title: "Agentic AI Engine", description: "Build autonomous AI agents that perform multi-step reasoning, cross-system execution, and contextual adaptation." },
        { icon: PuzzlePieceIcon, title: "Orchestration Layer", description: "Dynamically route tasks between agents, APIs, databases, and end-users based on business logic." },
        { icon: CpuChipIcon, title: "Multimodal Input Engine", description: "Support for text, speech, images, documents, and form-based queries—handled via adaptive UI components." },
        { icon: BriefcaseIcon, title: "Knowledge Integration Core", description: "Seamlessly connect with internal systems (SharePoint, CRMs, databases), ingest documents, and govern access boundaries." },
        { icon: ShieldCheckIcon, title: "Security & Compliance Module", description: "AI usage analytics, POPIA/GDPR compliance, RBAC, encryption at rest & in transit, plus optional air-gapped deployments." },
    ];

    const deploymentOptions = [
        { env: "Hosted by NexusByte", desc: "Fastest time-to-value. Ideal for teams starting their AI journey." },
        { env: "Private Cloud (Azure/AWS)", desc: "Full control. Enterprise SLAs, custom integrations, and model fine-tuning available." },
        { env: "On-Premises", desc: "Air-gapped environments for highly regulated sectors (e.g. legal, finance, public sector)." },
    ];

    const platformComponents = [
        { component: "Nova Agents", description: "Custom-built GPT/LLM agents with domain-specific memory, role logic, and workflow execution capabilities." },
        { component: "Nova Console", description: "Admin dashboard for monitoring interactions, managing agents, analytics, and user permissions." },
        { component: "Nova APIs", description: "Secure API layer for integration with business systems, mobile apps, portals, and widgets." },
        { component: "Nova Widgets", description: "Embeddable components for web, intranet, or support desks. Customise UI to fit brand tone." },
        { component: "Nova Training Pipeline", description: "Import documents, files, web links, and structured data to train agents with controlled retention and scope." },
    ];
    
    const differentiators = [
        "Built for South African data laws (POPIA-compliant agent training & retention logic)",
        "Multi-agent collaboration (e.g. LegalBot ↔ FinanceBot ↔ HRBot handoffs)",
        "Supports all leading models: OpenAI, Azure OpenAI, Claude, Gemini, Cohere",
        "Realtime trigger-based automation using CRMs, Slack, Teams, DB events",
        "Secure by default: SSO, audit logs, RBAC, encrypted vector search",
    ];

    // Card component emulating shadcn/ui
    const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
        <div className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 ${className}`}>
            {children}
        </div>
    );

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-gray-50">
                <div className="max-w-screen-xl mx-auto px-4 py-20 md:py-28 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-nexusbyte-primary-dark mb-4"
                    >
                        Nova AI Platform Overview
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-600 mb-8"
                    >
                        Agentic AI for the Modern Enterprise
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            to="/ai/nova/demo"
                            className="inline-flex items-center justify-center bg-nexusbyte-primary-dark text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-800 transition-colors"
                        >
                            Request a Demo <ArrowRightIcon className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* What is Nova? */}
            <Section title="What is Nova?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                Nova is NexusByte’s flagship AI orchestration platform—engineered to transform how organisations deploy, manage, and scale intelligent automation. Designed for South African regulatory standards and global enterprise expectations, Nova brings together agentic architecture, data security, and multimodal intelligence in a single unified platform.
                </p>
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mt-8 text-2xl font-medium text-nexusbyte-primary-dark italic max-w-3xl mx-auto"
                >
                    “Nova isn’t just an AI tool. It’s your AI workforce layer.”
                </motion.blockquote>
            </Section>

            {/* How Nova Works */}
            <Section title="How Nova Works" subtitle="Nova brings together five key architectural pillars:" className="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full text-left">
                                <pillar.icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">{pillar.title}</h3>
                                <p className="text-gray-600">{pillar.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Deployment & Components */}
            <Section title="Deployment and Platform Components">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-left text-nexusbyte-primary-dark">Deployment Options</h3>
                         <div className="overflow-hidden border border-gray-200 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Environment</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {deploymentOptions.map((option, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium">{option.env}</td>
                                            <td className="px-6 py-4">{option.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold mb-6 text-left text-nexusbyte-primary-dark">Components at a Glance</h3>
                        <div className="overflow-hidden border border-gray-200 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {platformComponents.map((comp, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium">{comp.component}</td>
                                            <td className="px-6 py-4">{comp.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Differentiators */}
            <Section title="What Makes Nova Different?" className="bg-gray-50">
                <div className="max-w-3xl mx-auto text-left">
                    <ul className="space-y-4">
                        {differentiators.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start text-lg"
                            >
                                <CheckIcon className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </Section>
            
            {/* Learn More */}
            <Section title="Learn More">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/ai/nova/features" className="text-nexusbyte-accent-green font-semibold hover:underline">
                        👉 Key Features & Capabilities
                    </Link>
                     <Link to="/ai/nova/applications" className="text-nexusbyte-accent-green font-semibold hover:underline">
                        🏭 Industry Applications
                    </Link>
                    <Link to="/ai/nova/demo" className="text-nexusbyte-accent-green font-semibold hover:underline">
                       📩 Request a Nova Demo
                    </Link>
                </div>
            </Section>

        </div>
    );
};

export default NovaPlatformOverviewPage;
