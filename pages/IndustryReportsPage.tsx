
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../components/icons';

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string}> = ({ title, subtitle, children, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`py-12 md:py-16 ${className || ''}`}
    >
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-nexusbyte-primary-dark mb-4 text-center">{title}</h2>
            {subtitle && <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">{subtitle}</p>}
            {children}
        </div>
    </motion.div>
);

const featuredReportsData = [
    {
        title: "The 2025 State of Cybersecurity in South Africa",
        source: "NexusByte Cyber Intelligence Lab + Fortinet + PWC",
        published: "June 2025",
        highlights: [
            "Top 5 cyber threats faced by SA businesses this year",
            "Security posture benchmarks across SMMEs and enterprises",
            "Recommendations for Zero Trust implementation"
        ],
        link: "#"
    },
    {
        title: "Digital Readiness in a Hybrid Nation: ICT Infrastructure Index 2025",
        source: "NexusByte Research + BusinessTech + ICASA Open Data",
        published: "May 2025",
        highlights: [
            "Fibre and Cloud PC penetration by region",
            "Growth of managed services (MSP) vs in-house IT",
            "Sector analysis: finance, health, education"
        ],
        link: "#"
    },
    {
        title: "The AI Adoption Curve in Africa",
        source: "NexusByte AI Research Unit + OpenAI Africa + Microsoft Azure Foundry",
        published: "March 2025",
        highlights: [
            "Regional breakdown of AI adoption by function (support, finance, HR)",
            "LLM training & usage trends in Africa’s mid-market",
            "POPIA & AI policy readiness findings"
        ],
        link: "#"
    },
    {
        title: "Workplace Modernisation Benchmark: SA 2025",
        source: "Zoom, Microsoft, and NexusByte Hybrid Work Group",
        published: "January 2025",
        highlights: [
            "Remote work enablement stats",
            "Tech adoption by HR and Ops teams",
            "Top 3 barriers to hybrid work success"
        ],
        link: "#"
    }
];

const sourcesData = ["PwC South Africa", "BusinessTech", "ICASA & StatsSA", "MyBroadband", "World Economic Forum & ITU"];

const IndustryReportsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-gray-50 py-16 md:py-24 text-center px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-extrabold text-nexusbyte-primary-dark mb-4"
                >
                    Industry Reports
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-3xl mx-auto"
                >
                    Cutting-Edge Research Curated for South African Enterprises. We collaborate with leading research bodies to bring you evidence-based, industry-aligned knowledge.
                </motion.p>
                 <motion.blockquote 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-8 p-4 bg-white border-l-4 border-nexusbyte-accent-green text-center text-lg italic text-gray-700 rounded-r-lg shadow-sm max-w-lg mx-auto"
                >
                    “Great strategy starts with current, credible insight.”
                </motion.blockquote>
            </header>

            <main className="px-4 sm:px-6 lg:px-8">
                <Section title="Featured Reports (Downloadable)">
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredReportsData.map((report, index) => (
                             <motion.div 
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col text-left h-full"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-bold text-nexusbyte-primary-dark mb-2">{report.title}</h3>
                                <p className="text-xs font-semibold text-purple-600 uppercase mb-1">Source: {report.source}</p>
                                <p className="text-xs text-gray-500 mb-4">Published: {report.published}</p>
                                
                                <p className="text-sm font-semibold text-gray-800 mb-2">Highlights:</p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-grow">
                                    {report.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start"><CheckIcon className="w-4 h-4 text-nexusbyte-accent-green mr-2 mt-0.5 flex-shrink-0" />{item}</li>
                                    ))}
                                </ul>
                                <a href={report.link} className="mt-auto block w-full text-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold py-2.5 rounded-lg hover:bg-opacity-80 transition-colors">
                                    📎 Download Report PDF
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section title="Sources We Monitor and Curate From" className="bg-gray-50 rounded-xl">
                    <div className="flex flex-wrap justify-center gap-4">
                        {sourcesData.map((source, index) => (
                            <motion.div
                                key={index}
                                className="bg-white text-gray-700 font-medium px-4 py-2 rounded-full border border-gray-300 shadow-sm"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                {source}
                            </motion.div>
                        ))}
                    </div>
                </Section>

                 <Section title="Want Report Access Alerts?">
                    <p className="text-gray-600 max-w-xl mx-auto mb-6">
                        Sign up to get notified as soon as new reports are released.
                    </p>
                    <a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-nexusbyte-primary-dark text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors text-lg">
                        📝 Join the Research List
                    </a>
                </Section>
            </main>
            
            <footer className="text-center py-12 bg-gray-50 mt-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">🤝 Partner with NexusByte Research</h3>
                    <p className="text-gray-600 mb-4">Are you an academic, analyst, or corporate think tank looking to collaborate on next-gen insights for Africa’s digital economy?</p>
                    <a href="mailto:research@nexusbyte.co.za" className="font-semibold text-nexusbyte-accent-green hover:underline">
                        📧 Reach out: research@nexusbyte.co.za
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default IndustryReportsPage;
