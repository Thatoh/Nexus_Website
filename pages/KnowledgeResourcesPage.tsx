
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from '../components/icons';

// Reusable Section Component
const Section: React.FC<{title: string; children: React.ReactNode; className?: string}> = ({ title, children, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`py-8 md:py-12 border-b border-gray-200 ${className || ''}`}
    >
        <h2 className="text-2xl md:text-3xl font-bold text-nexusbyte-primary-dark mb-6 text-left">{title}</h2>
        {children}
    </motion.div>
);

const KnowledgeResourcesPage: React.FC = () => {
    
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
                        Insights: Knowledge Resources
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-gray-600 font-medium"
                    >
                       🎓 Explore NexusByte's Knowledge Centre
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-4 text-gray-700 max-w-3xl mx-auto"
                    >
                         Welcome to the <strong>Knowledge Resources</strong> hub—your source for detailed guides, templates, whitepapers, and training materials designed to support your digital transformation, security posture, and operational growth.
                    </motion.p>
                </header>

                {/* Blockquote */}
                <motion.blockquote 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="my-10 p-6 bg-gray-50 border-l-4 border-nexusbyte-accent-green text-center text-xl italic text-gray-700 rounded-r-lg shadow-sm"
                >
                    "Resources that empower, not overwhelm."
                </motion.blockquote>

                <hr className="my-12 border-gray-200" />

                {/* Sections */}
                <div className="space-y-12">
                    <Section title="What You’ll Find">
                        <div className="space-y-8 text-left">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Playbooks & Guides</h3>
                                <p className="text-gray-600 mb-3">Step-by-step manuals for:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                                    <li>Cloud migration & hosting setups</li>
                                    <li>Nova AI chatbot and automation workflows</li>
                                    <li>Cybersecurity policies and POPIA checklists</li>
                                    <li>Hybrid work implementation frameworks</li>
                                </ul>
                            </div>
                             <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Templates & Toolkits</h3>
                                <p className="text-gray-600 mb-3">Plug-and-play resources for:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                                    <li>IT asset registers, DR plans, audit logs</li>
                                    <li>Role-based access control policies</li>
                                    <li>Data breach response templates</li>
                                </ul>
                            </div>
                             <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Whitepapers & Reports</h3>
                                <p className="text-gray-600 mb-3">Authoritative, data-backed publications on:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                                    <li>IaaS vs SaaS decision-making in South Africa</li>
                                    <li>AI adoption roadmaps for SMEs</li>
                                    <li>Industry-specific security & compliance models</li>
                                </ul>
                            </div>
                             <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Training Materials & Videos</h3>
                                <p className="text-gray-600 mb-3"></p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                                    <li>Nova quick-start videos</li>
                                    <li>Staff cyber hygiene awareness kits</li>
                                    <li>Admin portal walk-throughs and system onboarding</li>
                                </ul>
                            </div>
                        </div>
                    </Section>
                    
                     <Section title="Access & Licensing">
                         <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-left">
                            Most resources are free for NexusByte clients and newsletter subscribers. Some toolkits require a verified business email or client login for download.
                        </p>
                    </Section>

                    <Section title="Stay Updated">
                         <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-left mb-4">
                            We add new content monthly based on:
                        </p>
                         <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 max-w-2xl mx-auto text-left">
                            <li>Sector feedback</li>
                            <li>Regulatory changes</li>
                            <li>Technology adoption trends</li>
                        </ul>
                    </Section>

                    <footer className="text-center pt-8">
                        <p className="mb-4 text-gray-700">📥 Subscribe or request a resource: 
                            <a href="mailto:resources@nexusbyte.co.za" className="font-semibold text-nexusbyte-accent-green hover:underline ml-2">
                                resources@nexusbyte.co.za
                            </a>
                        </p>
                         <p className="text-gray-700">🔗 Want Nova to help you select relevant documents? 
                            <a href="#" className="font-semibold text-nexusbyte-accent-green hover:underline ml-2">
                                Activate Nova in your dashboard.
                            </a>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default KnowledgeResourcesPage;
