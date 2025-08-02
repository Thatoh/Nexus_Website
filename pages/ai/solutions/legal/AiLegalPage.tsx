
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, BriefcaseIcon, CpuChipIcon, ShieldCheckIcon,
    UsersIcon, CogIcon
} from '../../../../components/icons';

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean}> = ({ title, subtitle, children, className = '', textWhite = false }) => (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
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
    </div>
);

const AiLegalPage: React.FC = () => {
    const keyUseCasesData = [
        { icon: BriefcaseIcon, title: "Contract Analysis & Clause Detection", items: ["Extract key clauses, obligations, and renewal terms", "Flag inconsistencies, risk-heavy language, or missing elements", "Redline generation and editable summaries"] },
        { icon: CpuChipIcon, title: "Statute & Case Law Search", items: ["Ask: \"Which judgments affect clause X in this NDA?\"", "Retrieve and cite relevant cases, acts, and amendments", "Supports South African and global legal corpora"] },
        { icon: UsersIcon, title: "Policy & Compliance Agents", items: ["Interpret internal legal frameworks (HR, data privacy, procurement)", "Respond to employee queries like “Can I share this data externally?”", "Map responses to POPIA, PAIA, GDPR, etc."] },
        { icon: CogIcon, title: "Legal Ticketing & Intake Bots", items: ["Capture matter details from internal teams", "Route based on urgency, type, or department", "Auto-draft memos and assign tasks in legal tools (e.g., Clio, Caseware)"] },
        { icon: BriefcaseIcon, title: "Due Diligence Automation", items: ["Pre-populate DD reports from data rooms and public registries", "Compare contract families for red flag items", "Extract UBO (Ultimate Beneficial Ownership) data"] },
    ];

    const sampleAgentsData = [
        { name: "ClauseFinder", function: "Clause detection & summaries", channels: "Internal Legal Portal" },
        { name: "POPIA Helper", function: "Internal data compliance queries", channels: "MS Teams, Email, Slack" },
        { name: "NDA Reviewer", function: "Fast-track contract review", channels: "Web, PDF Upload" },
        { name: "Case Law Assistant", function: "Statute and precedent search", channels: "Desktop or API" },
        { name: "Legal Triage Bot", function: "Matter intake and assignment", channels: "Intranet or CRM" },
    ];

    const techStackData = [
        { component: "NLP Models", tool: "GPT-4, Claude, Azure OpenAI, Legal-BERT" },
        { component: "Legal Data Sources", tool: "SAFLII, Lexis, CaseText, internal policies" },
        { component: "Integration Layer", tool: "Microsoft 365, SharePoint, legal ERPs" },
        { component: "RAG & Long Context", tool: "Nova’s Retrieval-Augmented Generation Framework" },
    ];

    const outcomesData = [
        { area: "Contract review time", impact: "↓ 60–80%" },
        { area: "Internal legal queries", impact: "↑ 3x faster response" },
        { area: "Policy compliance gaps", impact: "↓ 40% in first 3 months" },
        { area: "Due diligence workload", impact: "↓ 50% with automation" },
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
                        ⚖️ AI for Legal Tech
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Accelerate Legal Workflows, Ensure Compliance, and Amplify Insight—Securely with AI.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        NexusByte’s Legal AI Solutions bring intelligent automation to legal operations. From rapid contract analysis to statute search, our Nova-powered legal agents free your teams from routine tasks—while upholding confidentiality, precision, and compliance.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “From review to reasoning—your legal team now has a tireless AI paralegal.”
                    </motion.blockquote>
                </div>
            </div>

            {/* Why AI in Legal? */}
            <Section title="💡 Why AI in Legal?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Legal teams handle vast volumes of documents, decisions, and deadlines. AI can streamline contract reviews, surface relevant laws, reduce human error, and improve response times—all while preserving data privacy and POPIA compliance.
                </p>
            </Section>

            {/* Key Use Cases */}
            <Section title="🔍 Key Use Cases" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keyUseCasesData.map((useCase, index) => {
                        const Icon = useCase.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{useCase.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {useCase.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Sample Legal Agents Table */}
             <Section title="📋 Sample Legal Agents from Nova">
                <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                         <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Agent Name</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Core Function</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Channels</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {sampleAgentsData.map((agent, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{agent.name}</td>
                                    <td className="px-6 py-4">{agent.function}</td>
                                    <td className="px-6 py-4">{agent.channels}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>
            
            {/* Tech & Outcomes */}
            <Section title="Technology & Transformation" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">⚙️ Tech Behind Legal AI</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {techStackData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-3 font-medium">{row.component}</td>
                                            <td className="px-6 py-3">{row.tool}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📈 Legal Transformation Outcomes</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {outcomesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-3 font-medium">{row.area}</td>
                                            <td className="px-6 py-3 font-bold text-green-600">{row.impact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

             {/* Security & Compliance */}
            <Section title="🔐 Data Security & Ethical Compliance">
                <ul className="space-y-3 max-w-2xl mx-auto text-left">
                    {[ "Fully compliant with POPIA and GDPR", "Legal document isolation and private LLM hosting available", "Confidentiality firewalls between internal and client data", "Red-team tested and encrypted NLP pipelines" ].map((item, i) => (
                        <li key={i} className="flex items-start text-lg">
                            <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </Section>
            
            {/* CTA Section */}
            <Section title="🎯 Let’s Transform Your Legal Ops" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Whether you're in a law firm, in-house team, or regulatory body, Nova’s AI agents can improve accuracy, reduce turnaround time, and ensure legal compliance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:legalai@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Contact our Legal AI Team
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Schedule a call with our Legal AI Strategists
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default AiLegalPage;
