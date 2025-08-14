
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CpuChipIcon, CheckIcon, ArrowRightIcon, UsersIcon, BriefcaseIcon, 
    CogIcon, ShieldCheckIcon, BoltIcon, LightBulbIcon
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


const AIServicesConsultingPage: React.FC = () => {

    const whatWeOfferData = [
        {
            title: "AI Readiness Assessment",
            icon: LightBulbIcon,
            description: "We evaluate your infrastructure, workflows, and data maturity to define a clear, risk-informed path to AI adoption.",
            details: ["Output: Strategy brief, risk map, data strategy & business case."]
        },
        {
            title: "Custom AI Agent Development",
            icon: CpuChipIcon,
            description: "From internal support agents to domain-specific chatbots, we design, train, and deploy your GPT-based agents using Nova, OpenAI, Azure, or Anthropic.",
            details: ["Custom prompt engineering", "Role-based memory", "API-calling abilities", "RAG pipelines for document grounding", "Voice, chat, and workflow-based interfaces"]
        },
        {
            title: "Enterprise LLM Strategy",
            icon: BriefcaseIcon,
            description: "Define when, where, and how to use LLMs securely in your organisation.",
            details: ["Evaluating proprietary vs open-source models", "Building internal AI governance playbooks", "Integrating AI safely into business-critical systems"]
        },
        {
            title: "Fine-Tuning & Training Custom Models",
            icon: CogIcon,
            description: "Need a model that sounds like you, speaks your industry’s language, or understands your tone?",
            details: ["Domain-specific fine-tuning", "Training on internal documents", "Hallucination control and QA frameworks", "Guardrail design and failover logic"]
        },
        {
            title: "Workshops & Executive Training",
            icon: UsersIcon,
            description: "Upskill your leadership and technical teams with AI fluency.",
            details: ["“Prompt Engineering for Business Teams”", "“Building with OpenAI, Azure & Nova APIs”", "“AI Governance & Ethics in South Africa”", "“Legal Frameworks: POPIA, PAIA & AI Readiness”", "Onsite or virtual, customised to sector"]
        },
        {
            title: "Proof-of-Concept & MVP Builds",
            icon: BoltIcon,
            description: "Have a big idea? We’ll help you prototype, test, and validate it fast.",
            details: ["2–6 week sprints", "Rapid iterations", "ROI testing baked in"]
        }
    ];

    const complianceFocusData = [
        "POPIA, PAIA, GDPR compliance",
        "Local server hosting (if required)",
        "Ethical AI principles",
        "Transparent use of third-party APIs",
        "Risk registers & data mapping"
    ];

    const trustedByData = [
        { sector: "Government", engagements: "Citizen support AI, policy bots" },
        { sector: "Legal Firms", engagements: "GPT contract review, compliance advisors" },
        { sector: "Retail", engagements: "AI support desks, WhatsApp agents" },
        { sector: "Financial", engagements: "Spend approval agents, audit AI" },
        { sector: "Education", engagements: "Student onboarding & chatbot tutors" },
    ];

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
                        AI Services & Consulting
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        From Ideas to Impact: Expert-Led AI Transformation
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 text-xl font-medium text-nexusbyte-primary-dark italic max-w-2xl mx-auto"
                    >
                         “NexusByte doesn’t just build AI. We build AI that works for you.”
                    </motion.blockquote>
                </div>
            </div>

             {/* What We Offer Section */}
            <Section title="What We Offer" subtitle="Whether you're exploring AI for the first time or scaling enterprise-grade deployments, our AI Services & Consulting offering helps you unlock real business value—with strategy, compliance, and technical depth.">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whatWeOfferData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4"/>
                                <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">{item.title}</h3>
                                <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    {item.details.map((detail, dIndex) => (
                                        <li key={dIndex} className="flex items-start">
                                            <CheckIcon className="w-4 h-4 mr-2 mt-0.5 text-nexusbyte-accent-green flex-shrink-0"/>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Compliance-Led Section */}
            <Section title="Compliance-Led, Value-Focused" className="bg-gray-50" subtitle="Our consulting is grounded in:">
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {complianceFocusData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-4 rounded-lg shadow-sm flex items-center"
                        >
                            <ShieldCheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3"/>
                            <span className="text-gray-700 font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Trusted By Section */}
            <Section title="Trusted By">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagements</th>
                            </tr>
                        </thead>
                         <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {trustedByData.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium">{item.sector}</td>
                                    <td className="px-6 py-4">{item.engagements}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="Book a Strategy Call" className="bg-nexusbyte-primary-dark" textWhite subtitle="Let’s discuss how AI can solve your real problems—not just add buzzwords.">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📅 Schedule a Free AI Discovery Call
                    </a>
                    <span className="text-gray-400">or</span>
                     <a href="mailto:consulting@nexusbyte.co.za" className="inline-flex items-center justify-center font-semibold text-lg hover:underline text-gray-200">
                        📩 Email: consulting@nexusbyte.co.za
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default AIServicesConsultingPage;
