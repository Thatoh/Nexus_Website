
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CpuChipIcon, CheckIcon, ArrowRightIcon, BriefcaseIcon, 
    CogIcon, ShieldCheckIcon, BoltIcon, LightBulbIcon, CommandLineIcon, PuzzlePieceIcon, UsersIcon
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

const CustomModelsPage: React.FC = () => {
    // Data from prompt
    const whatWeDeliverData = [
        {
            icon: CpuChipIcon,
            title: "Domain-Tuned Models",
            items: [
                "Train LLMs on your internal policies, case law, manuals, customer support logs, or research",
                "Use Retrieval-Augmented Generation (RAG) pipelines to allow grounded responses",
                "Apply zero-shot, few-shot, and fine-tuning techniques on GPT, LLaMA, Claude, or Gemini",
            ],
        },
    ];

    const toolsInfraData = [
        { layer: "Model Training", tools: "Azure ML, Hugging Face, OpenAI Fine-tune, LangChain" },
        { layer: "Retrieval + Search", tools: "Pinecone, FAISS, Azure Cognitive Search" },
        { layer: "Prompt Engineering", tools: "Guidance, PromptFlow, LangChain Chains" },
        { layer: "Data Labeling", tools: "Label Studio, Azure Data Labelling" },
        { layer: "Infra Hosting", tools: "Azure, GCP, AWS, On-Prem or NexusByte Grid" },
        { layer: "Model Wrapping", tools: "FastAPI, Next.js APIs, GraphQL" },
    ];

    const useCasesByIndustryData = [
        { industry: "Legal", basic: "AI trained on POPIA + PAIA policies", advanced: "Case outcome predictors, clause conflict analysis, GPT brief interpreters" },
        { industry: "Retail", basic: "Custom support assistant for refunds, deliveries, promos", advanced: "Inventory forecasting using historical data + NLP demand signals" },
        { industry: "Finance", basic: "AI agent for bank policies, credit FAQs", advanced: "Fraud pattern detector trained on account logs + risk models" },
        { industry: "Public Sector", basic: "FAQ bot for municipality services", advanced: "Cross-departmental data summarisation & public query AI" },
        { industry: "Healthcare", basic: "Medical scheme explanation AI", advanced: "NLP model trained on ICD codes + treatment protocols for support routing" },
    ];

    const scalingProcessData = [
        { step: "Prototype & Tune", description: "2–4 weeks: Dataset prep, initial training, playground validation" },
        { step: "Deploy & Embed", description: "Expose via secure API, Nova portal, or embed in Teams, Slack, etc." },
        { step: "Monitor & Improve", description: "Feedback loops, hallucination tracking, usage analytics, regular retraining support" },
        { step: "License & Own", description: "You keep the IP. We help you host, manage, or even deploy on-prem." },
    ];

    const complianceFeatures = [
        "POPIA & GDPR aware",
        "Stored with optional geographic/data boundary preferences",
        "Include bias detection audits, retention policies, and red-teaming support",
    ];

    const perfectForData = [
        "Enterprises seeking IP ownership",
        "Regulated industries (legal, finance, health)",
        "Multilingual support needs",
        "Complex workflow integrations",
        "Real-time insights & analytics",
    ];

    const DomainTunedModelIcon = whatWeDeliverData[0].icon;

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white">
                <div className="max-w-screen-xl mx-auto px-4 py-20 md:py-28 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
                    >
                        Custom AI Models
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                    >
                        Train models that understand your world.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Whether you're building a smart assistant that speaks legalese, a fraud-detection engine that knows your financial patterns, or an AI that mirrors your brand's tone—NexusByte’s Custom Model Service takes you from data to deployable models with precision and care.
                    </motion.p>
                     <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Off-the-shelf AI knows the internet. Your AI should know you.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What Are Custom Models? */}
            <Section title="🧠 What Are Custom Models?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Custom AI models are machine learning or LLM-based systems trained using your specific documents, datasets, workflows, and tone of voice. They enable higher accuracy, brand alignment, domain-specific language comprehension, and advanced reasoning. Unlike plug-and-play agents, custom models are trained to think and speak like your business.
                </p>
            </Section>

            {/* What We Deliver Section */}
            <Section title="What We Deliver" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Domain-Tuned Models */}
                    <motion.div 
                        className="text-left"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <DomainTunedModelIcon className="w-12 h-12 text-nexusbyte-accent-green"/>
                            <h3 className="text-2xl font-bold text-nexusbyte-primary-dark">{whatWeDeliverData[0].title}</h3>
                        </div>
                        <ul className="space-y-3">
                            {whatWeDeliverData[0].items.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Tools, Frameworks & Infra */}
                    <motion.div 
                        className="text-left"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                             <CogIcon className="w-12 h-12 text-nexusbyte-accent-green"/>
                             <h3 className="text-2xl font-bold text-nexusbyte-primary-dark">Tools, Frameworks & Infra</h3>
                        </div>
                        <div className="overflow-hidden border border-gray-200 rounded-lg">
                             <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Layer</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tools Used</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {toolsInfraData.map((row, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 font-medium text-sm">{row.layer}</td>
                                            <td className="px-4 py-2 text-sm">{row.tools}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Use Cases by Industry */}
            <Section title="🏭 Use Cases by Industry (From Simple to Complex)">
                <div className="overflow-x-auto shadow-lg rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Industry</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Basic Use Case</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Advanced Use Case</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {useCasesByIndustryData.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 font-semibold">{item.industry}</td>
                                    <td className="px-6 py-4">{item.basic}</td>
                                    <td className="px-6 py-4">{item.advanced}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>
            
            {/* Scaling Your Model */}
            <Section title="📈 Scaling Your Model" className="bg-gray-50">
                 <div className="relative mt-12 max-w-4xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
                    <div className="space-y-12">
                        {scalingProcessData.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-20 h-20 bg-nexusbyte-accent-green text-white text-3xl font-bold rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                                    {index + 1}
                                </div>
                                <div className="text-left bg-white p-6 rounded-lg shadow-md md:w-2/3">
                                    <h3 className="text-xl font-bold text-nexusbyte-primary-dark">{step.step}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
            
            {/* Compliance & Perfect For */}
            <Section title="Built Right. For The Right Reasons.">
                 <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-4 text-nexusbyte-primary-dark">🛡️ Built with Compliance in Mind</h3>
                        <ul className="space-y-3">
                            {complianceFeatures.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <ShieldCheckIcon className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-4 text-nexusbyte-primary-dark">🎯 Perfect For:</h3>
                        <ul className="space-y-3">
                            {perfectForData.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-6 h-6 mr-3 text-green-500 flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="🚀 Ready to Train Your Own AI?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">Get a personalised strategy, sandbox, and quote.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:customai@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Email: customai@nexusbyte.co.za
                    </a>
                     <a href="#" className="inline-flex items-center justify-center bg-white text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-gray-200 transition-colors text-lg">
                        📞 Request a discovery call
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default CustomModelsPage;
