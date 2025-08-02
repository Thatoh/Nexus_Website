
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon,
    BriefcaseIcon, LightBulbIcon, CogIcon, TvIcon, PhoneIcon
} from '../../../components/icons';

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

const useCaseCategories = [
    { 
        icon: UsersIcon,
        title: "Customer Support Automation", 
        items: ["Multilingual chatbots for inbound ticketing", "24/7 intelligent routing & escalation", "Personalised FAQ & service-level support bots"] 
    },
    { 
        icon: BriefcaseIcon,
        title: "Finance & Risk AI", 
        items: ["Invoice processing & approval logic", "Spend analysis & fraud flagging models", "Risk scoring + compliance agents"]
    },
    { 
        icon: BriefcaseIcon,
        title: "Legal Intelligence",
        items: ["Clause classification & redlining AI", "Statute + policy lookup assistants", "Document intake & pre-filing automations"]
    },
    { 
        icon: CogIcon,
        title: "HR & Internal Ops",
        items: ["AI-powered onboarding agents", "Internal knowledge search", "Leave, payroll & policy bots"]
    },
    { 
        icon: ShieldCheckIcon,
        title: "Healthcare & Insurance",
        items: ["Claims triage & prior authorisation agents", "Plan recommendation engines", "Medical NER (Named Entity Recognition) models"]
    },
    { 
        icon: TvIcon,
        title: "Retail & E-commerce",
        items: ["Product recommendation engines", "Customer sentiment tracking", "Inventory prediction & price optimisation AI"]
    }
];

const deliveryProcess = [
    { step: "1️⃣", activity: "Discovery & Problem Mapping", tools: "Industry interviews, business logic modelling" },
    { step: "2️⃣", activity: "Model Selection / Custom Training", tools: "GPT-4/Claude/Open Source LLMs + Data Tuning" },
    { step: "3️⃣", activity: "Workflow & Agent Design", tools: "Nova Framework, prompt chains, memory tuning" },
    { step: "4️⃣", activity: "Integration & Frontend Deployment", tools: "API/Widget integrations, portals, voice UIs" },
    { step: "5️⃣", activity: "Evaluation & Continuous Optimisation", tools: "Usage metrics, feedback loops, cost control" },
];

const agentTemplates = [
    { name: "Legal Clause Reviewer", industry: "Legal", description: "Auto-detects risk clauses, suggests edits" },
    { name: "Support Bot Pro", industry: "Cross-Industry", description: "Handles up to 80% of tier 1 queries" },
    { name: "Invoice AI", industry: "Finance", description: "Validates totals, flags anomalies" },
    { name: "Claims Assistant", industry: "Insurance", description: "Maps query to benefit plan + pre-auth logic" },
    { name: "Onboarding Assistant", industry: "HR & Ops", description: "Guides new employees through processes" },
];

const AppliedAISolutionsPage = () => {
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
                        Applied AI Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Practical Intelligence for Real-World Impact
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        At NexusByte, we move beyond AI hype and deliver tangible, applied AI solutions—trained, integrated, and deployed to solve real business problems. Whether it’s automating claims, predicting risk, classifying documents, or streamlining client support, our applied AI transforms complexity into clarity.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “AI is only as powerful as the problems it solves. Let’s solve yours.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What Are Applied AI Solutions? */}
            <Section title="🔍 What Are Applied AI Solutions?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                    These are purpose-built, industry-specific AI tools and agents tailored to address day-to-day business challenges using modern AI techniques like:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Natural Language Understanding (NLU)", "Machine Learning & Predictive Models", "Document Intelligence & OCR", "Speech Recognition & Voice AI", "Reinforcement Learning for Decision Systems", "Multi-agent LLM Orchestration"].map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Use Case Categories */}
            <Section title="💼 Use Case Categories" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCaseCategories.map((category, index) => {
                        const Icon = category.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{category.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {category.items.map((item, i) => (
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

            {/* How We Deliver */}
            <Section title="🧠 How We Deliver Applied AI">
                 <div className="overflow-x-auto shadow-lg rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Step</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Activity</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Tools & Methods</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {deliveryProcess.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 font-semibold">{item.step}</td>
                                    <td className="px-6 py-4">{item.activity}</td>
                                    <td className="px-6 py-4 text-sm">{item.tools}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* Responsible AI & Pre-Built Templates */}
            <Section title="Our Commitment" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Responsible AI */}
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">🔐 Built on Responsible AI</h3>
                        <ul className="space-y-3">
                            {[ "POPIA & GDPR-aligned", "Configurable user data boundaries", "Full observability & audit logging", "Opt-in logic for AI decisions or recommendations" ].map((item, i) => (
                                <li key={i} className="flex items-start text-lg">
                                    <ShieldCheckIcon className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Pre-Built Templates */}
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">🧩 Pre-Built Agent Templates</h3>
                        <p className="text-gray-600 mb-4">Speed up adoption with ready-to-deploy Nova Agents. All templates are customisable and connect with Microsoft 365, Salesforce, Freshdesk, SAP, SharePoint, and more.</p>
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-3 text-left font-semibold">Template Name</th>
                                        <th className="p-3 text-left font-semibold">Industry</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y">
                                    {agentTemplates.map((template, i) => (
                                        <tr key={i}>
                                            <td className="p-3 font-medium">{template.name}</td>
                                            <td className="p-3 text-gray-600">{template.industry}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

             {/* CTA Section */}
            <Section title="Ready to Deploy? Or Need to Build from Scratch?">
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Let’s assess your workflows and show you how Applied AI can generate measurable ROI in under 90 days.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:ai-solutions@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-primary-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-gray-800 transition-colors text-lg">
                        📩 Contact: ai-solutions@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-nexusbyte-accent-green hover:underline">
                        📅 Book a use-case scoping call
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default AppliedAISolutionsPage;
