
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarIcon, UsersIcon, CheckIcon, ArrowRightIcon } from '../components/icons';

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

const liveEventsData = [
    {
        title: "Modern Workflows, Real-Time Results",
        partners: "Zoom & Microsoft South Africa",
        date: "28 August 2025 · 11:00 AM SAST",
        topic: "Building resilient hybrid teams with Zoom + M365 + Nova",
        learnings: [
            "Seamless meeting orchestration with Zoom Rooms",
            "Secure collaboration using Nova AI Assistants",
            "Nova integrations for meeting summarisation and task follow-ups"
        ],
        ctaLink: "#"
    },
    {
        title: "AI Agents in Action: Automate or Fall Behind",
        partners: "OpenAI & Azure Foundry",
        date: "10 September 2025 · 2:00 PM SAST",
        topic: "The rise of agentic AI for business ops, support, and workflows",
        learnings: [
            "Deploying Nova Agents with your own data",
            "AI cost models for SMEs",
            "POPIA-aligned deployment practices"
        ],
        ctaLink: "#"
    }
];

const onDemandLibraryData = [
    { topic: "Zero Trust in Practice", category: "Cybersecurity", partner: "Fortinet", link: "#" },
    { topic: "AI for Legal Ops", category: "AI & Automation", partner: "OpenAI + NexusByte Legal Suite", link: "#" },
    { topic: "Scaling With Cloud PCs", category: "Cloud & Hybrid Work", partner: "Microsoft", link: "#" },
    { topic: "Cyber Resilience for SMEs", category: "Backup & Recovery", partner: "Acronis", link: "#" }
];

const partnersData = ["Zoom", "Microsoft", "Fortinet", "OpenAI", "HOSTAFRICA", "Acronis"];

const WebinarsAndEventsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-gray-50 py-16 md:py-24 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-extrabold text-nexusbyte-primary-dark mb-4"
                >
                    🎙️ Webinars & Events
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-3xl mx-auto"
                >
                    Explore Expert Sessions, AI Briefings & Industry Roundtables. NexusByte hosts and collaborates on regular live sessions to empower South African organisations with practical knowledge, thought leadership, and live product showcases.
                </motion.p>
            </header>

            <main className="px-4 sm:px-6 lg:px-8">
                <Section title="🔴 Upcoming Live Events">
                    <div className="grid md:grid-cols-2 gap-8">
                        {liveEventsData.map((event, index) => (
                             <motion.div 
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col text-left"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <p className="text-xs font-semibold text-purple-600 uppercase mb-2">Co-hosted with: {event.partners}</p>
                                <h3 className="text-xl font-bold text-nexusbyte-primary-dark mb-2">{event.title}</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <CalendarIcon className="w-4 h-4 mr-2" />
                                    <span>{event.date}</span>
                                </div>
                                <p className="text-gray-700 font-medium mb-4">{event.topic}</p>
                                <p className="text-sm font-semibold text-gray-800 mb-2">What you’ll learn:</p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-grow">
                                    {event.learnings.map((item, i) => (
                                        <li key={i} className="flex items-start"><CheckIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />{item}</li>
                                    ))}
                                </ul>
                                <a href={event.ctaLink} className="mt-auto block w-full text-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold py-2.5 rounded-lg hover:bg-opacity-80 transition-colors">
                                    Register: Reserve Your Spot
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section title="🧠 On-Demand Webinar Library" className="bg-gray-50 rounded-xl">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partner</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {onDemandLibraryData.map((webinar, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{webinar.topic}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{webinar.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{webinar.partner}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href={webinar.link} className="text-nexusbyte-accent-green hover:underline">Watch Now &rarr;</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="🤝 Partnership-Driven Knowledge" subtitle="We collaborate with industry leaders to ensure that every webinar delivers real, actionable value.">
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        {partnersData.map((partner, index) => (
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

                 <footer className="text-center py-12 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">Want to Co-Host with Us?</h3>
                    <p className="text-gray-600 mb-4">Are you a NexusByte customer or partner with a story to share? Let’s showcase your journey.</p>
                    <a href="mailto:events@nexusbyte.co.za" className="font-semibold text-nexusbyte-accent-green hover:underline">
                        📧 Propose a session at events@nexusbyte.co.za
                    </a>
                </footer>
            </main>
        </div>
    );
};

export default WebinarsAndEventsPage;
