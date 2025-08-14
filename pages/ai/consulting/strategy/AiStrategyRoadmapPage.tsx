
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, LightBulbIcon, BriefcaseIcon, UsersIcon, CogIcon,
    ChartPieIcon
} from '../../../../components/icons';

const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean}> = ({ title, subtitle, children, className = '', textWhite = false }) => (
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

const AiStrategyRoadmapPage: React.FC = () => {

    const frameworkData = [
        { icon: LightBulbIcon, title: "Vision & Use Case Discovery", items: ["Define your AI mission and north star", "Identify high-impact use cases per department", "Align AI to business KPIs and transformation goals"] },
        { icon: ChartPieIcon, title: "Readiness & Capability Mapping", items: ["Evaluate internal infrastructure, data maturity, and workforce readiness", "Integrate outputs from our AI Readiness Assessment",] },
        { icon: CogIcon, title: "Model Strategy & Tooling", items: ["Choose the right LLMs, agents, or RAG-based approaches", "Balance between hosted vs. private model deployments", "Define governance, explainability, and data localisation needs"] },
        { icon: UsersIcon, title: "Implementation & Change Management", items: ["Phased rollout of pilots, PoCs, and agentic systems", "Workforce enablement and AI champion selection", "Change comms, policies, and AI ethics awareness"] },
        { icon: CpuChipIcon, title: "Monitoring & Optimisation", items: ["Set up AI analytics, ROI dashboards, and risk monitoring", "Refine prompts, datasets, and model feedback loops", "Prepare for scale across departments and new use cases"] },
    ];
    
    const deliverablesData = [
        { deliverable: "Strategic Roadmap", description: "A detailed 6–18 month plan broken into milestones, budgets, and priorities" },
        { deliverable: "Use Case Playbooks", description: "Templates, workflows, and prompt strategies for each selected use case" },
        { deliverable: "Architecture Diagrams", description: "Technical architecture for integration and agent orchestration" },
        { deliverable: "Change Enablement Toolkit", description: "Training guides, policy templates, and adoption metrics" },
        { deliverable: "ROI Tracking Blueprint", description: "AI value tracking aligned to KPIs and performance dashboards" },
    ];

    const maturityModelData = [
        { level: 1, description: "AI-Aware: Curious, exploring opportunities" },
        { level: 2, description: "AI-Ready: Strategy forming, internal support growing" },
        { level: 3, description: "AI-Active: Running pilots, forming policies" },
        { level: 4, description: "AI-Embedded: Live use cases and analytics" },
        { level: 5, description: "AI-Led: Innovation driven by intelligent systems" },
    ];
    
    const whoIsThisForData = [
        "Enterprises scaling AI across multiple units",
        "Mid-sized firms aligning AI with digital transformation",
        "Tech, finance, legal, retail, public sector, and healthcare organisations",
        "Leaders seeking to future-proof workforce and systems",
        "Teams who’ve launched PoCs but need structure, clarity, and ROI",
    ];

    const addOnsData = [
        { title: "Nova Agent Design Lab", description: "Rapid design sprints to turn roadmap items into real agent workflows." },
        { title: "Board Presentation Pack", description: "Executive-ready AI strategy decks for internal buy-in and funding." },
        { title: "AI Policy Customisation", description: "Legal review and customisation of data use, bias, and consent policies." },
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
                        AI Adoption & Strategy Roadmap
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 mb-8"
                    >
                        From Potential to Practice.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
                    >
                        AI success doesn’t begin with a model—it begins with a roadmap. NexusByte’s AI Strategy services are designed to help you go from curiosity to confident adoption with a tailored, actionable rollout plan aligned to your business goals.
                    </motion.p>
                     <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “AI isn’t a one-time project—it’s a long-term capability. Let’s architect it right.”
                    </motion.blockquote>
                </div>
            </div>
            
            <Section title="🧠 What Is an AI Strategy Roadmap?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    A strategic blueprint that guides your AI adoption journey—aligned with your people, systems, data, risks, and regulatory landscape. Whether you’re deploying AI for the first time or scaling an existing initiative, we help you define a roadmap that delivers impact and avoids disruption.
                </p>
            </Section>

            <Section title="🧩 Roadmap Framework" subtitle="Our AI strategy follows a structured 5-stage methodology:" className="bg-gray-50">
                 <div className="relative mt-12 max-w-4xl mx-auto">
                    <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
                    <div className="space-y-12">
                        {frameworkData.map((stage, index) => {
                            const Icon = stage.icon;
                            return(
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-8"
                                >
                                    <div className="flex-shrink-0 w-24 h-24 bg-white text-nexusbyte-accent-green rounded-full flex items-center justify-center z-10 shadow-lg border-4 border-gray-50">
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <div className="text-left flex-grow">
                                        <h3 className="text-xl font-bold text-nexusbyte-primary-dark mb-2">{index + 1}. {stage.title}</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            {stage.items.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mr-2 mt-1 flex-shrink-0"/>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            <Section title="🛠️ What You’ll Receive">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Deliverable</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {deliverablesData.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 font-medium">{item.deliverable}</td>
                                    <td className="px-6 py-4">{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            <Section title="📚 AI Adoption Maturity Model" className="bg-gray-50">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Level</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {maturityModelData.map((item) => (
                                <tr key={item.level}>
                                    <td className="px-6 py-4 font-bold text-nexusbyte-accent-green">
                                        <span className="bg-nexusbyte-accent-green/10 text-nexusbyte-accent-green px-2 py-1 rounded-full text-sm">Level {item.level}</span>
                                    </td>
                                    <td className="px-6 py-4">{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            <Section title="💼 Who This Is For">
                <div className="max-w-3xl mx-auto text-left">
                    <ul className="space-y-4">
                        {whoIsThisForData.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start text-lg"
                            >
                                <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-4 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </Section>

            <Section title="🧠 Optional Add-Ons" className="bg-gray-50">
                <div className="grid md:grid-cols-3 gap-8">
                    {addOnsData.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
                            <h3 className="font-bold text-xl text-nexusbyte-primary-dark mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
            
            <Section title="💬 Book a Strategy Consultation" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">Let’s map the road ahead.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="https://cal.com/nexusbyte-solutions/ai-strategy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📅 Schedule Directly
                    </a>
                    <span className="text-gray-400">or</span>
                     <a href="mailto:ai-strategy@nexusbyte.co.za" className="inline-flex items-center justify-center font-semibold text-lg hover:underline text-gray-200">
                        📩 Email: ai-strategy@nexusbyte.co.za
                    </a>
                </div>
                <p className="mt-8 text-sm text-gray-400">NexusByte strategy consultants are certified in AI transformation methodologies and have deployed AI at scale across finance, legal, retail, and government sectors.</p>
            </Section>
        </div>
    );
};

export default AiStrategyRoadmapPage;
