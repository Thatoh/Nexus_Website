
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from '../../components/icons';

// Reusable Section Component
const Section: React.FC<{title: string; children: React.ReactNode; className?: string}> = ({ title, children, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`py-8 md:py-12 border-b border-gray-200 ${className || ''}`}
    >
        <h2 className="text-2xl md:text-3xl font-bold text-nexusbyte-primary-dark mb-6">{title}</h2>
        {children}
    </motion.div>
);

const CloudInfrastructureArticlesPage: React.FC = () => {
    const whatYoullFind = [
        "Migration strategies for moving from on-prem to Azure and AWS",
        "Cost optimization playbooks to control your cloud spend",
        "Breakdowns of IaaS vs. PaaS vs. SaaS for local business needs",
        "Analysis of fibre network rollouts and 5G's impact on infrastructure",
        "Guides on building resilient, high-availability architectures",
    ];

    const featuredArticles = [
        "Debunking the Myth of 'Lift-and-Shift': A Guide to True Cloud Modernisation",
        "Is Your Data Sovereign? Navigating POPIA in a Multi-Cloud World",
        "The RTO/RPO Balancing Act: Disaster Recovery on a Budget",
        "When to Use Serverless: A Cost-Benefit Analysis for South African SMEs",
    ];

    const toolsAndTemplates = [
        "Cloud readiness assessment checklist",
        "IaaS cost comparison calculator (Azure vs. AWS vs. Local)",
        "Disaster recovery plan template",
    ];

    return (
        <div className="bg-white py-12 md:py-16 min-h-[calc(100vh-80px)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-extrabold text-nexusbyte-primary-dark mb-4"
                    >
                        Briefs and Bytes: Cloud & Infrastructure
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-gray-600 font-medium"
                    >
                        🏗️ The Foundation of Digital Resilience
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-4 text-gray-700 max-w-2xl mx-auto"
                    >
                        From data centres to edge computing, this stream covers the hardware, software, and strategies that power modern business. We dissect cloud models, network performance, and disaster recovery so you can build with confidence.
                    </motion.p>
                </header>

                {/* Blockquote */}
                <motion.blockquote 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="my-10 p-6 bg-gray-50 border-l-4 border-nexusbyte-accent-green text-center text-xl italic text-gray-700 rounded-r-lg shadow-sm"
                >
                    "Your infrastructure isn't just a cost centre—it's your competitive backbone."
                </motion.blockquote>

                <hr className="my-12 border-gray-200" />

                {/* Sections */}
                <div className="space-y-12">
                    <Section title="What You'll Find Here">
                        <ul className="space-y-4 text-left">
                            {whatYoullFind.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="Featured Articles">
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            {featuredArticles.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <p className="font-medium text-gray-800">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Section>
                    
                    <Section title="Tools & Templates">
                         <ul className="space-y-3 text-left max-w-2xl mx-auto">
                            {toolsAndTemplates.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700"><ArrowRightIcon className="w-5 h-5 text-nexusbyte-accent-green mr-3" /> {item}</li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="Updated Monthly">
                         <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                            As infrastructure technology evolves, so does our content. We track developments in cloud platforms, connectivity, and data management to keep you ahead of the curve.
                        </p>
                    </Section>

                    <footer className="text-center pt-8">
                        <p className="text-gray-700">📩 Have a specific infrastructure question? Email: 
                            <a href="mailto:infra@nexusbyte.co.za" className="font-semibold text-nexusbyte-accent-green hover:underline ml-2">
                                infra@nexusbyte.co.za
                            </a>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default CloudInfrastructureArticlesPage;
