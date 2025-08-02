
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CpuChipIcon, PuzzlePieceIcon, CommandLineIcon, BriefcaseIcon, ShieldCheckIcon, UsersIcon, 
    ChartPieIcon, CogIcon, CloudArrowUpIcon, CheckIcon, ArrowRightIcon, BoltIcon, ShareIcon 
} from '../../../components/icons';

// Reusable Section Component
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

const NovaFeaturesPage = () => {
    // Data mapping to icons
    const coreFeatures = [
        { title: "Agentic AI Framework", description: "Build AI agents that analyse, reason, trigger APIs, query databases, and execute multi-step workflows across systems.", icon: CommandLineIcon },
        { title: "Knowledge Ingestion Engine", description: "Train agents on PDFs, DOCX, URLs, or SharePoint libraries. Control data retention and re-training cycles securely.", icon: CloudArrowUpIcon },
        { title: "Security & Governance Suite", description: "POPIA/GDPR boundaries, end-to-end encryption, RBAC, full audit logs, and SSO/SAML support for enterprise-grade control.", icon: ShieldCheckIcon },
        { title: "Multi-Channel Deployment", description: "Deploy agents on websites, intranets, Slack, Teams, WhatsApp, or embed them in CRMs and mobile apps via our API.", icon: ShareIcon },
        { title: "Nova Console & Analytics", description: "Your AI Control Tower. Monitor interactions, agent usage, query heatmaps, and latency in real-time.", icon: ChartPieIcon },
        { title: "Developer Tooling", description: "First-class developer support with SDKs (JS, Python, C#), Webhooks, REST APIs, CLI, and WebSocket streams.", icon: CogIcon },
        { title: "Model Flexibility & LLM Integrations", description: "Connect to GPT-4o, Claude 3, Gemini Pro, and more. You choose the model, Nova orchestrates.", icon: PuzzlePieceIcon },
        { title: "Dynamic Prompt Orchestration", description: "Adaptive prompt stacks that change based on user role, data source, query intent, or conversation history.", icon: BoltIcon },
        { title: "Inter-Agent Collaboration", description: "Enable agents to collaborate. A support bot can hand off a task to an HR bot, which can escalate to a compliance bot.", icon: UsersIcon },
        { title: "Nova Memory Engine", description: "Provide agents with persistent, scoped memory to handle long-form workflows and recall context from prior interactions.", icon: CpuChipIcon }
    ];

    const whoIsNovaFor = [
        { role: "CTO / CIO", benefit: "Deploy secure, scalable AI infra across teams." },
        { role: "Developers", benefit: "Build and integrate agents using APIs & SDKs." },
        { role: "HR / Legal", benefit: "Use Nova as a policy and compliance assistant." },
        { role: "CX Leaders", benefit: "Automate service, deflection, onboarding." },
        { role: "Finance Teams", benefit: "AI-driven audit checks, spend review, SOP guides." },
    ];
    
    const comingSoon = ["Agent Market (pre-built agents)", "AI Skills Library (invoice parsing, etc.)", "Visual Workflow Builder", "VoiceBot Extensions for call centres"];
    
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
                        Nova Key Features & Capabilities
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-600 mb-8"
                    >
                        Your AI Infrastructure. Visualised. Executed. Scaled.
                    </motion.p>
                </div>
            </div>

            {/* Introduction Section */}
            <Section title="Turn AI From Experimental to Operational">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                    Nova isn’t just another AI layer—it’s an end-to-end platform for building, orchestrating, and governing intelligent automation at scale. Whether you’re a business analyst, developer, or CTO, Nova offers you the tools to succeed.
                </p>
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mt-8 text-2xl font-medium text-nexusbyte-primary-dark italic max-w-3xl mx-auto"
                >
                    “From zero to agentic—Nova gives you the tools, controls, and playground to build the future.”
                </motion.blockquote>
            </Section>

            {/* Nova Playground Section */}
            <Section title="Nova Playground: Build, Train & Test Visually" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <p className="text-gray-700 mb-6">
                            Nova ships with an intuitive Playground Interface, giving developers and non-technical users a low-code, visual builder to design, test, and deploy AI agents using modular blocks.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1"/>Design agents with prompts, rules, & API calls.</li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1"/>Test inputs and responses in real-time.</li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1"/>Upload documents to test agent retrieval (RAG).</li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1"/>Chain agents for multi-role task execution.</li>
                        </ul>
                        <p className="mt-4 text-gray-700">All in one interface—sandboxed, secure, and team-collab ready.</p>
                    </div>
                    {/* Mock UI for Playground */}
                    <Card className="!p-4 bg-gray-100">
                        <div className="h-80 bg-slate-800 rounded-md p-4 flex flex-col text-xs text-slate-300 shadow-inner">
                            <div className="text-slate-400 mb-2">/Playground/Support_Workflow</div>
                            <div className="flex-grow space-y-3">
                                <div className="bg-slate-700 p-2 rounded flex justify-between items-center"><span>Block: User Input</span><CogIcon className="w-4 h-4 text-slate-500"/></div>
                                <div className="pl-4 text-slate-500">↓</div>
                                <div className="bg-slate-700 p-2 rounded flex justify-between items-center"><span>Action: Query Knowledge Base</span><CloudArrowUpIcon className="w-4 h-4 text-slate-500"/></div>
                                <div className="pl-4 text-slate-500">↓</div>
                                <div className="bg-slate-700 p-2 rounded flex justify-between items-center"><span>Logic: If "Billing" in Query</span><PuzzlePieceIcon className="w-4 h-4 text-slate-500"/></div>
                                <div className="pl-4 text-slate-500">↓</div>
                                <div className="bg-slate-700 p-2 rounded flex justify-between items-center"><span>Escalate: @FinanceBot</span><UsersIcon className="w-4 h-4 text-slate-500"/></div>
                            </div>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Core Features Grid */}
            <Section title="Core Features">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreFeatures.map((feature, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Card className="h-full text-left">
                                <feature.icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

             {/* Who Is Nova For & Coming Soon */}
            <Section title="Who Benefits from Nova?" className="bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-left text-nexusbyte-primary-dark">Built for Every Role</h3>
                         <div className="overflow-hidden border border-gray-200 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefit</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {whoIsNovaFor.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium">{item.role}</td>
                                            <td className="px-6 py-4">{item.benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold mb-6 text-left text-nexusbyte-primary-dark">Coming Soon (Q4 2025+)</h3>
                         <ul className="space-y-4 text-left">
                            {comingSoon.map((item, index) => (
                                <li key={index} className="flex items-start text-lg">
                                    <CheckIcon className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
            
            {/* CTA */}
            <Section title="Want full technical docs?">
                 <a href="mailto:dev@nexusbyte.co.za" className="font-semibold text-lg text-nexusbyte-accent-green hover:underline">
                    📩 Request developer access: dev@nexusbyte.co.za
                </a>
            </Section>
        </div>
    );
};

export default NovaFeaturesPage;
