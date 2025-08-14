

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, PuzzlePieceIcon, TicketIcon, 
    ChartPieIcon, BriefcaseIcon, CogIcon, ShieldCheckIcon, UsersIcon
} from '../../../../components/icons';

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean}> = ({ title, subtitle, children, className = '', textWhite = false }) => (
  <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
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
  </section>
);

export const KnowledgeBasePage: React.FC = () => {

    const featuresData = [
        { icon: BriefcaseIcon, title: "Drag-and-Drop Article Builder", items: ["Rich text, code snippets, tables, callouts", "File attachments, image galleries, embedded videos", "Article version control and change logs"] },
        { icon: CogIcon, title: "Category Management", items: ["Organise content into categories and subcategories for intuitive browsing", "Customisable sections per client or department"] },
        { icon: CpuChipIcon, title: "Nova AI Integration", items: ["Smart auto-suggestions as users type queries", "AI highlights similar articles from past issues", "Optional chatbot overlay for conversational access"] },
        { icon: UsersIcon, title: "User-Friendly Navigation", items: ["Search by keywords, filters, tags", "View most-viewed or most-helpful articles", "Bookmark or suggest improvements", "Rate content for continuous refinement"] },
        { icon: ChartPieIcon, title: "Analytics & Feedback", items: ["Most searched keywords (and what’s missing)", "Article views, drop-offs, and feedback scores", "Top contributors and content coverage gaps"] },
    ];
    
    const integrationData = [
        { feature: "Turn resolved tickets into knowledge articles with one click", icon: TicketIcon },
        { feature: "Suggest relevant articles during live chat or diagnostic workflows", icon: CheckIcon },
        { feature: "Auto-embed article links in agent responses", icon: CheckIcon },
        { feature: "Link KB articles to ticket resolution audits", icon: CheckIcon },
    ];

    const useCasesData = [
        { useCase: "Internal IT Support", benefit: "Employees resolve basic issues (e.g., printer setup) without logging a ticket." },
        { useCase: "MSP Support Portals", benefit: "Clients access a branded help portal with white-labelled KB articles." },
        { useCase: "Onboarding & Training", benefit: "HR/IT publishes structured how-to guides for new employees." },
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
                        ByteDesk Knowledge Base Builder
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Empower users and reduce ticket volumes with an intelligent, searchable, self-service knowledge system.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        🔍 Smarter Self-Service Starts Here
                    </motion.blockquote>
                </div>
            </div>

            {/* Introduction */}
            <Section title="What is the Knowledge Base Builder?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    The ByteDesk Knowledge Base Builder is your central hub for creating, managing, and delivering support content. Designed to reduce repetitive queries and empower end-users, it blends intuitive authoring tools with Nova AI-powered search and discovery.
                </p>
            </Section>

            {/* Features */}
            <Section title="✍️ Easy to Create, Powerful to Use" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-md text-left h-full"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{feature.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green flex-shrink-0"/>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
            
            {/* Integration & Use Cases */}
            <Section title="Fully Integrated and Versatile">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧩 Fully Integrated with ByteDesk Suite</h3>
                         <div className="bg-gray-50 p-6 rounded-lg text-left">
                            <ul className="space-y-3">
                                {integrationData.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={i} className="flex items-start text-gray-700"><Icon className="w-5 h-5 mr-3 mt-1 text-nexusbyte-accent-green flex-shrink-0"/>{item.feature}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🎯 Use Cases</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.useCase}</td>
                                            <td className="px-4 py-3 text-sm">{row.benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Security */}
             <Section title="🛡️ Security & Access Controls" className="bg-gray-50">
                 <div className="flex flex-wrap justify-center gap-4">
                    {["Public or private knowledge base options", "Role-based permissions for authors, reviewers, and readers", "POPIA-compliant content governance", "SSO & authentication-layer integration"].map((item, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center"
                        >
                            <CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/> {item}
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="⚙️ Your 24/7 Support Sidekick" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Reduce support burden, scale your service delivery, and empower your users. With the ByteDesk Knowledge Base Builder, knowledge becomes your first line of support.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <Link to="/ticketing-system/demo" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📥 Try a sample library
                    </Link>
                    <span className="text-gray-500">or</span>
                     <a href="mailto:knowledge@nexusbyte.co.za" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📧 Contact us: knowledge@nexusbyte.co.za
                    </a>
                </div>
            </Section>
        </div>
    );
};
