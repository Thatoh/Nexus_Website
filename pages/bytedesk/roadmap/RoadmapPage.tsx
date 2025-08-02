

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, PuzzlePieceIcon, TicketIcon, 
    ChartPieIcon, BriefcaseIcon, CogIcon, ShieldCheckIcon
} from '../../../components/icons';

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

export const RoadmapPage: React.FC = () => {

    const roadmapData = {
        now: [
            { feature: "Agent Productivity Analytics", description: "Live dashboards for resolution time, response stats, and agent workload distribution" },
            { feature: "Guest Access with Rate Limiting", description: "Limited support access for unauthenticated users with max message cap" },
            { feature: "Nova AI Summarisation", description: "Nova generates real-time ticket summaries and insights" },
            { feature: "Knowledge Base Autolink", description: "Smart linking of relevant articles inside ticket threads" },
            { feature: "SLA Breach Alerts", description: "Instant notifications when SLA timers are exceeded" }
        ],
        next: [
            { feature: "Mobile App (iOS & Android)", description: "Native ByteDesk app for field agents and remote users" },
            { feature: "White-Labelling Engine", description: "Fully customisable UI for clients using ByteDesk as a SaaS platform" },
            { feature: "Integrations Marketplace", description: "Pre-built integrations with Microsoft 365, Slack, Zoom, Jira, and more" },
            { feature: "Embedded System Analyzer in Tickets", description: "Inline device health scan results when users log support tickets" },
            { feature: "Voice Commands (Nova)", description: "Hands-free operation of diagnostics, ticket search, and KB lookup" }
        ],
        future: [
            { feature: "Agent Copilot AI", description: "Nova as a live co-agent suggesting resolution paths and autofilling ticket fields" },
            { feature: "Predictive Ticketing", description: "Using past patterns and logs to pre-empt incidents before they occur" },
            { feature: "Client Satisfaction Bot", description: "Automated feedback collection and sentiment analysis per ticket" },
            { feature: "ESG Reporting Module", description: "Track support operations against sustainability or governance KPIs" },
            { feature: "LLM Plugin Support", description: "Plug Nova directly into external LLM-based workflows and industry-specific models" }
        ]
    };

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
                        ByteDesk Product Roadmap
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Transparency meets innovation. Here’s where ByteDesk is headed next.
                    </motion.p>
                </div>
            </div>

            {/* Overview */}
            <Section title="🚦 Roadmap Overview">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    ByteDesk is continuously evolving to meet the growing demands of MSPs, internal IT teams, and enterprise support environments. Our roadmap is structured into three stages: Now Shipping, Coming Next, and Future Concepts.
                </p>
            </Section>

            {/* Roadmap Grid */}
            <Section title="The Road Ahead" className="bg-gray-50">
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Now Shipping */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Now Shipping (Q3 2025)</h3>
                        <div className="space-y-4">
                            {roadmapData.now.map((item, i) => (
                                <div key={i} className="text-left">
                                    <p className="font-semibold text-gray-800">{item.feature}</p>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Coming Next */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
                        <h3 className="text-2xl font-bold text-yellow-600 mb-4">🧪 Coming Next (Q4 2025)</h3>
                        <div className="space-y-4">
                            {roadmapData.next.map((item, i) => (
                                <div key={i} className="text-left">
                                    <p className="font-semibold text-gray-800">{item.feature}</p>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Future Concepts */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">💡 Future Concepts (2026+)</h3>
                         <div className="space-y-4">
                            {roadmapData.future.map((item, i) => (
                                <div key={i} className="text-left">
                                    <p className="font-semibold text-gray-800">{item.feature}</p>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Feedback & Contribution */}
            <Section title="📣 Your Feedback Drives Our Roadmap">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="text-left bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Have an Idea?</h3>
                        <p className="text-gray-600 mb-4">A frustration? A dream feature? We want to hear from you. The ByteDesk team incorporates user feedback every quarter to shape what’s built next.</p>
                        <a href="mailto:roadmap@nexusbyte.co.za" className="font-semibold text-nexusbyte-accent-green hover:underline">📬 Submit roadmap suggestions</a>
                    </div>
                    <div className="text-left bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Contribute to the Future</h3>
                        <p className="text-gray-600 mb-4">ByteDesk is more than a tool—it’s a platform built with and for MSPs and IT teams. Join our beta program, attend previews, or request feature co-design.</p>
                        <div className="space-x-4">
                           <Link to="#" className="font-semibold text-nexusbyte-accent-green hover:underline">🔗 Join the Beta Waitlist</Link>
                           <Link to="#" className="font-semibold text-nexusbyte-accent-green hover:underline">🔗 Book a Roadmap Briefing</Link>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};