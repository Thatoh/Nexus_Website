
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, LightBulbIcon, BriefcaseIcon, UsersIcon
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

const pillarData = [
    { icon: LightBulbIcon, title: "Strategy & Vision", questions: ["Is there executive buy-in for AI?", "Are your business goals aligned with potential AI use cases?", "Do you have metrics to measure AI success (ROI, efficiency gains)?"] },
    { icon: BriefcaseIcon, title: "Data Maturity", questions: ["Is your data accessible, organised, and of high quality?", "Do you have clear data governance and privacy policies (POPIA)?", "Are your data sources structured or unstructured?"] },
    { icon: CpuChipIcon, title: "Technology & Infrastructure", questions: ["Is your infrastructure scalable (cloud, on-prem, hybrid)?", "Are APIs available to connect systems?", "What are your current cybersecurity controls?"] },
    { icon: UsersIcon, title: "People & Culture", questions: ["Do your teams have the skills to adopt AI tools?", "Is there a culture of data-driven decision-making?", "What is the change management plan for introducing AI?"] }
];

const deliverablesData = [
    "Comprehensive Readiness Report (PDF): ~20-page report with scores, analysis, and roadmap.",
    "Executive Summary Presentation (PPT): A high-level deck for leadership.",
    "Opportunity Matrix: A prioritised list of AI projects.",
    "90-Day Action Plan: Concrete next steps for your first AI initiative.",
    "Consultation Session: A 1-hour walkthrough of the findings with our AI strategists."
];

const perfectForData = [
    "Organisations exploring AI for the first time.",
    "Businesses wanting to validate their AI strategy before investing.",
    "Leadership teams needing a data-driven case for AI adoption.",
    "Companies aiming to move from ad-hoc AI experiments to a structured plan."
];


const AiReadinessAssessmentPage: React.FC = () => {
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
                        AI Readiness Assessment
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Is your business ready to leverage AI? Our readiness assessment provides a clear, actionable roadmap.
                    </motion.p>
                </div>
            </div>

            {/* Intro Section */}
            <Section title="Evaluate Your Readiness Across Four Core Pillars">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    We evaluate your organisation across Strategy, Data, Technology, and People. The result is a comprehensive report that benchmarks your current state, identifies high-impact opportunities, and outlines a phased strategy for successful AI adoption.
                </p>
            </Section>

            {/* How It Works Section */}
            <Section title="🔍 How It Works" className="bg-gray-50">
                 <div className="relative mt-12 max-w-4xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-20 h-20 bg-nexusbyte-accent-green text-white text-3xl font-bold rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg">1</div>
                            <div className="text-left bg-white p-6 rounded-lg shadow-md md:w-2/3">
                                <h3 className="text-xl font-bold text-nexusbyte-primary-dark">Discovery Workshop (1-2 Hours)</h3>
                                <p className="text-gray-600">We discuss your goals, pain points, and workflows with key stakeholders to identify high-potential AI opportunities.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="w-20 h-20 bg-nexusbyte-accent-green text-white text-3xl font-bold rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg">2</div>
                            <div className="text-left bg-white p-6 rounded-lg shadow-md md:w-2/3">
                                <h3 className="text-xl font-bold text-nexusbyte-primary-dark">Technical & Data Audit (Remote)</h3>
                                <p className="text-gray-600">We non-intrusively review your data infrastructure, quality, governance, and API availability.</p>
                            </div>
                        </div>
                         <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-20 h-20 bg-nexusbyte-accent-green text-white text-3xl font-bold rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg">3</div>
                            <div className="text-left bg-white p-6 rounded-lg shadow-md md:w-2/3">
                                <h3 className="text-xl font-bold text-nexusbyte-primary-dark">Readiness Report & Scorecard</h3>
                                <p className="text-gray-600">We deliver a comprehensive report with a readiness score, risk analysis, and a phased, actionable roadmap for your first AI project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* The Four Pillars Section */}
            <Section title="🔬 The Four Pillars We Assess">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillarData.map((pillar, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-left"
                        >
                            <pillar.icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                            <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{pillar.title}</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                {pillar.questions.map((q, i) => <li key={i}>• {q}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Deliverables & Perfect For Section */}
            <Section title="Your Strategic Toolkit" className="bg-gray-50">
                 <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-6 text-nexusbyte-primary-dark">📦 Deliverables</h3>
                        <ul className="space-y-4">
                            {deliverablesData.map((item, index) => (
                                <li key={index} className="flex items-start text-lg">
                                    <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-6 text-nexusbyte-primary-dark">🎯 Perfect For</h3>
                        <ul className="space-y-4">
                            {perfectForData.map((item, index) => (
                                <li key={index} className="flex items-start text-lg">
                                    <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Pricing and CTA Section */}
            <Section title="Get Your AI Readiness Score" textWhite={false}>
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                    <p className="text-gray-600 mb-2">A fixed-fee engagement for maximum clarity.</p>
                    <p className="text-5xl font-extrabold text-nexusbyte-primary-dark mb-4">R15,000</p>
                    <p className="text-gray-500 mb-6">(ex. VAT) | 2-3 week turnaround</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="mailto:assessment@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-primary-dark text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-800 transition-colors w-full sm:w-auto">
                            Email Us <ArrowRightIcon className="ml-2 w-5 h-5"/>
                        </a>
                        <Link to="/contact" className="font-semibold text-nexusbyte-accent-green hover:underline w-full sm:w-auto">
                            Request a Call
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AiReadinessAssessmentPage;
