
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, CalendarIcon } from '../components/icons';

const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string}> = ({ title, subtitle, children, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`py-12 md:py-16 ${className || ''}`}
    >
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-nexusbyte-primary-dark mb-3 text-center">{title}</h2>
            {subtitle && <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">{subtitle}</p>}
            {children}
        </div>
    </motion.div>
);

const recentWebinarsData = [
    {
        title: "AI Agents in Action: Deploying Nova Across Finance & Support",
        date: "10 September 2025",
        duration: "1hr 20min",
        partners: "NexusByte + OpenAI + Azure Foundry",
        learnings: [
            "How to configure Nova for support ticket automation",
            "Agentic AI in financial workflows",
            "POPIA-aware design patterns"
        ],
        link: "#"
    },
    {
        title: "The POPIA Playbook: Compliance in a Zero Trust World",
        date: "15 August 2025",
        duration: "55min",
        partners: "NexusByte + Fortinet + Deloitte Legal",
        learnings: [
            "Secure architecture principles for compliance",
            "How to document, report, and govern data in 2025",
            "Security automation strategies"
        ],
        link: "#"
    },
    {
        title: "Cloud PCs vs Physical Infrastructure: The Modern Debate",
        date: "28 July 2025",
        duration: "40min",
        partners: "NexusByte + Microsoft + HOSTAFRICA",
        learnings: [
            "Cost modelling Cloud PCs for remote teams",
            "Security comparisons",
            "Deployment tips using Nova onboarding"
        ],
        link: "#"
    }
];

const categoriesData = [
    { topic: "AI & Automation", partners: "OpenAI, Microsoft Azure", link: "#" },
    { topic: "Cybersecurity", partners: "Fortinet, Sophos, PWC", link: "#" },
    { topic: "Hybrid Work", partners: "Zoom, Microsoft, Dell", link: "#" },
    { topic: "Cloud & IaaS", partners: "HOSTAFRICA, AWS, Acronis", link: "#" },
    { topic: "Legal & POPIA", partners: "Deloitte, LegalSuite", link: "#" }
];

const featuredPartnersData = ["OpenAI", "Microsoft Azure", "Fortinet", "Zoom", "HOSTAFRICA", "Deloitte", "AWS", "Sophos"];

const OnDemandWebinarLibraryPage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-gray-50 py-16 md:py-24 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-extrabold text-nexusbyte-primary-dark mb-4"
                >
                    On-Demand Webinar Library
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-3xl mx-auto"
                >
                    Replay Powerful Sessions from NexusByte & Industry Leaders. Couldn’t make it to a live webinar? Explore our archive on your schedule.
                </motion.p>
            </header>

            <main className="px-4 sm:px-6 lg:px-8">
                <Section title="🔥 Recently Added">
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {recentWebinarsData.map((webinar, index) => (
                             <motion.div 
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col text-left"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <p className="text-xs font-semibold text-purple-600 uppercase mb-2">Presented By: {webinar.partners}</p>
                                <h3 className="text-xl font-bold text-nexusbyte-primary-dark mb-2">{webinar.title}</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <CalendarIcon className="w-4 h-4 mr-2" />
                                    <span>Originally Live: {webinar.date}</span>
                                    <span className="mx-2">|</span>
                                    <span>{webinar.duration}</span>
                                </div>
                                <p className="text-sm font-semibold text-gray-800 mb-2">What you’ll learn:</p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-grow">
                                    {webinar.learnings.map((item, i) => (
                                        <li key={i} className="flex items-start"><CheckIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />{item}</li>
                                    ))}
                                </ul>
                                <a href={webinar.link} className="mt-auto block w-full text-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold py-2.5 rounded-lg hover:bg-opacity-80 transition-colors">
                                    ▶️ Watch Replay
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section title="🗂️ Browse by Category" className="bg-gray-50 rounded-xl">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partners</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Watch</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {categoriesData.map((cat, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cat.topic}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cat.partners}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href={cat.link} className="text-nexusbyte-accent-green hover:underline">Browse &rarr;</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="🤝 Featured Collaboration Partners">
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        {featuredPartnersData.map((partner, index) => (
                             <motion.span 
                                key={index}
                                className="text-lg font-semibold text-gray-600"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                             >
                                {partner}
                            </motion.span>
                        ))}
                    </div>
                </Section>
            </main>
            
            <footer className="text-center py-12 bg-gray-50 mt-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">💬 Suggest a Topic or Partner?</h3>
                    <p className="text-gray-600 mb-4">Have a theme in mind or want to recommend an expert speaker?</p>
                    <a href="mailto:webinars@nexusbyte.co.za" className="font-semibold text-nexusbyte-accent-green hover:underline">
                        📧 Email us at webinars@nexusbyte.co.za
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default OnDemandWebinarLibraryPage;
