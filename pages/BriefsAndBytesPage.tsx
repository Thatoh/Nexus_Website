
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon, GmailIcon, WhatsAppIcon, CpuChipIcon } from '../components/icons';

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

const BriefsAndBytesPage: React.FC = () => {
    const recentHighlights = [
        "The Rise of Zero Trust in African Public Sector Deployments",
        "How POPIA Enforcement Is Changing South African Vendor Risk",
        "2026 Fibre Rollout Map – Top Zones for Metrofibre and VumaTel",
        "Nova Agent Playbooks for Field Services and CX Teams"
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
                        Insights: Briefs & Bytes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-gray-600 font-medium"
                    >
                        Stay Ahead. Stay Informed.
                    </motion.p>
                </header>

                {/* Blockquote */}
                <motion.blockquote 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="my-10 p-6 bg-gray-50 border-l-4 border-nexusbyte-accent-green text-center text-xl italic text-gray-700 rounded-r-lg shadow-sm"
                >
                    "No fluff. Just facts, forecasts, and frameworks—built for decision makers."
                </motion.blockquote>

                <hr className="my-12 border-gray-200" />

                {/* Sections */}
                <div className="space-y-12">
                    <Section title="What is Briefs & Bytes?">
                        <p className="text-gray-700 leading-relaxed mb-6">A curated stream of:</p>
                        <ul className="space-y-4 text-left">
                            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><div><strong className="text-gray-800">Industry Briefings</strong> – Regulatory updates, threat intelligence, funding shifts, and policy changes</div></li>
                            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><div><strong className="text-gray-800">Market Bytes</strong> – Local and global tech insights impacting cloud, cybersecurity, AI, and digital infrastructure</div></li>
                            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><div><strong className="text-gray-800">Tech Pulse Reports</strong> – Monthly indicators and metrics to guide strategic planning</div></li>
                            <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><div><strong className="text-gray-800">Sector Snapshots</strong> – Short reads focused on vertical-specific trends (finance, public sector, retail, health)</div></li>
                        </ul>
                    </Section>

                    <Section title="Who It’s For">
                         <ul className="space-y-3 text-left max-w-2xl mx-auto">
                            <li className="flex items-center text-gray-700"><ArrowRightIcon className="w-5 h-5 text-nexusbyte-accent-green mr-3" /> CIOs and CTOs seeking actionable foresight</li>
                            <li className="flex items-center text-gray-700"><ArrowRightIcon className="w-5 h-5 text-nexusbyte-accent-green mr-3" /> Legal and Compliance officers aligning to POPIA and FSCA</li>
                            <li className="flex items-center text-gray-700"><ArrowRightIcon className="w-5 h-5 text-nexusbyte-accent-green mr-3" /> Startup founders and SMMEs evaluating their tech stack</li>
                            <li className="flex items-center text-gray-700"><ArrowRightIcon className="w-5 h-5 text-nexusbyte-accent-green mr-3" /> Product managers and digital teams navigating rapid change</li>
                        </ul>
                    </Section>

                    <Section title="Recent Highlights">
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            {recentHighlights.map((item, index) => (
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
                    
                    <Section title="Subscribe to Stay Updated">
                        <p className="text-gray-700 mb-6">Want new briefings monthly? Sign up for:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg"><GmailIcon className="w-6 h-6 text-red-500 mr-3"/>Email digests</div>
                            <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg"><WhatsAppIcon className="w-6 h-6 text-green-500 mr-3"/>WhatsApp brief drops</div>
                            <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg"><CpuChipIcon className="w-6 h-6 text-purple-500 mr-3"/>Nova push alerts</div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">(Nova push alerts for registered NexusByte dashboard users)</p>
                    </Section>

                    <footer className="text-center pt-8">
                        <p className="mb-4 text-gray-700">📚 Want deeper insights? 
                            <Link to="/insights/resources" className="font-semibold text-nexusbyte-accent-green hover:underline ml-2">
                                Explore Knowledge Resources &rarr;
                            </Link>
                        </p>
                        <p className="text-gray-700">📩 Have a tip or request? Email: 
                            <a href="mailto:insights@nexusbyte.co.za" className="font-semibold text-nexusbyte-accent-green hover:underline ml-2">
                                insights@nexusbyte.co.za
                            </a>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default BriefsAndBytesPage;