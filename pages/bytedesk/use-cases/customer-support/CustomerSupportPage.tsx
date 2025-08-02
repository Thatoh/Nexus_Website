

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, PuzzlePieceIcon, TicketIcon, 
    ChartPieIcon, BriefcaseIcon, CogIcon, ShieldCheckIcon, UsersIcon,
    ChatBubbleLeftRightIcon
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

export const CustomerSupportPage: React.FC = () => {

    const challengesData = ["Long wait times and ticket backlogs", "Repetitive, low-value enquiries", "Poor visibility across customer interactions", "Limited self-service resources", "Channel fragmentation (email, WhatsApp, live chat, etc.)"];

    const solutionsData = [
        { icon: CpuChipIcon, title: "AI-Powered Live Chat", description: "Nova AI responds instantly to customer queries with context-aware answers. Route to human agents only when needed, reducing team strain." },
        { icon: ChatBubbleLeftRightIcon, title: "Multichannel Support", description: "Offer support via web, email, WhatsApp, Facebook Messenger, Teams, and more—managed from a single dashboard." },
        { icon: BriefcaseIcon, title: "Self-Service Knowledge Base", description: "Let customers help themselves with curated FAQs, how-to guides, and troubleshooting flows. Articles are suggested dynamically based on chat context." },
        { icon: CogIcon, title: "Smart Ticket Routing & Automation", description: "Automatically prioritise, assign, and escalate tickets based on issue type, client profile, or urgency—ensuring nothing falls through the cracks." },
        { icon: UsersIcon, title: "Agent Productivity Tools", description: "Unified ticket view, canned responses, internal comments, and AI-powered suggestions keep agents productive and focused." },
    ];
    
    const featureHighlightsData = [
        { feature: "SLA Alerts", value: "Never miss a resolution deadline with smart escalations" },
        { feature: "Sentiment Analysis", value: "Gauge tone of customer messages in real-time" },
        { feature: "Ticket Merging", value: "Combine duplicate requests from multiple channels into a single ticket" },
        { feature: "Audit Logs", value: "Full visibility on agent actions and ticket history" },
        { feature: "Chat-to-Ticket Conversion", value: "Automatically log unresolved chats into tickets" },
    ];
    
    const useCasesData = [
        { industry: "E-commerce", example: "Track order queries, delivery complaints, and product FAQs in one place." },
        { industry: "Telecom", example: "Handle high ticket volumes for signal and billing issues via WhatsApp." },
        { industry: "Financial Services", example: "Automate KYC and FAQ workflows while maintaining compliance." },
        { industry: "Travel & Hospitality", example: "Instant answers for booking, refund, or itinerary changes." },
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
                        💬 ByteDesk for Customer Support
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Deliver world-class customer service with intelligent AI, fast responses, and a seamless support experience across channels.
                    </motion.p>
                </div>
            </div>

            {/* Intro */}
            <Section title="🎯 What Is ByteDesk’s Customer Support Suite?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                   ByteDesk is a unified, AI-powered platform that transforms how your customer support team operates—streamlining every interaction, guiding users to resolutions, and keeping agents focused on high-impact issues.
                </p>
            </Section>

            {/* Challenges & Solutions */}
            <Section title="From Challenge to Solution" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🚧 Typical Challenges</h3>
                        <div className="space-y-3">
                            {challengesData.map((challenge, i) => (
                                <div key={i} className="bg-red-50 p-3 rounded-lg flex items-center shadow-sm">
                                    <span className="text-red-500 font-bold text-lg mr-3">!</span>
                                    <p className="text-gray-700">{challenge}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">✅ ByteDesk Solutions</h3>
                         <div className="space-y-4">
                            {solutionsData.map((solution, i) => {
                                const Icon = solution.icon;
                                return (
                                <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-left">
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-6 h-6 text-nexusbyte-accent-green flex-shrink-0" />
                                        <h4 className="font-semibold text-gray-800">{solution.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 pl-9">{solution.description}</p>
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* Feature Highlights & Use Cases */}
            <Section title="Features & Real-World Use Cases">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🛠️ Feature Highlights</h3>
                        <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {featureHighlightsData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.feature}</td>
                                            <td className="px-4 py-3 text-sm">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🌍 Real-World Use Cases</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.industry}</td>
                                            <td className="px-4 py-3 text-sm">{row.example}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why ByteDesk */}
            <Section title="🌟 Why ByteDesk for Support Teams?" className="bg-gray-50">
                 <div className="flex flex-wrap justify-center gap-4">
                    {["Faster resolution", "Lower ticket volume", "Unified experience", "Happier customers", "Scalable support infrastructure"].map((item, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center"
                        >
                            <CheckIcon className="w-5 h-5 mr-2 text-green-500"/> {item}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="🚀 Ready to Modernise Your Customer Support?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Experience ByteDesk’s AI-driven customer support environment. Book a live demo with our solutions team.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <Link to="/bytedesk/demo" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        Request Demo &rarr;
                    </Link>
                    <span className="text-gray-500">or</span>
                     <a href="mailto:support@bytedesk.co.za" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📨 support@bytedesk.co.za
                    </a>
                </div>
            </Section>
        </div>
    );
};
