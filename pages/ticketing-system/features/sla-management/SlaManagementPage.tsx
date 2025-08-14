

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    CheckIcon, ArrowRightIcon, UsersIcon, ShieldCheckIcon, CalendarIcon, CogIcon,
    TicketIcon, ChartPieIcon
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

export const SlaManagementPage: React.FC = () => {

    const whatIsSlaData = [
        "⏳ Response time goal (e.g. respond within 2 hours)",
        "⌛ Resolution time goal (e.g. close ticket in 8 hours)",
        "⚠️ Breach alerts & escalation policies",
        "🧠 Linked priority tiers (Low, Medium, High, Critical)"
    ];

    const rulesEngineData = [
        { icon: UsersIcon, title: "Client Tier", description: "e.g. Gold, Standard, Enterprise" },
        { icon: TicketIcon, title: "Issue Type", description: "e.g. Hardware, Software, Billing" },
        { icon: CalendarIcon, title: "Business Hours", description: "or 24/7" },
        { icon: UsersIcon, title: "Agent Group", description: "or Department" }
    ];

    const monitoringData = [
        "A countdown timer showing time until SLA breach",
        "SLA badges: 🟢 On Track, 🟠 At Risk, 🔴 Breached",
        {
            title: "Auto-notifications when:",
            items: [
                "Time to first response is missed",
                "Resolution time is near breach",
                "Breach occurs"
            ]
        }
    ];

    const escalationData = [
        "🔁 Tickets auto-escalate to higher-tier agents",
        "🔔 Email & in-app alerts are sent to designated team members",
        "🧾 SLA breach is recorded in the audit log for accountability",
        "📈 Escalated tickets feed into the Reporting Dashboard"
    ];

    const reportingMetrics = [
        "Average time to first response & resolution",
        "% of tickets that met SLA",
        "SLA breaches by agent, team, or category",
        "Heatmaps of ticket load vs SLA performance"
    ];
    
    const comingSoonData = [
        "Nova AI SLA Assistant (auto-categorise ticket urgency + predict breach risk)",
        "Microsoft Teams & Slack alerts for SLA breach notifications",
        "Sync SLAs with external CRM contracts or customer success platforms"
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
                        📏 SLA Management
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Track Expectations. Deliver Accountability. Automate Escalations.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Service Level Agreements (SLAs) are more than contracts—they are the heartbeat of customer trust and internal performance. Nexus-Ticketing embeds a powerful SLA Management engine to help support teams meet deadlines, monitor compliance, and act before things fall through the cracks.
                    </motion.p>
                </div>
            </div>

            {/* What is SLA Management? */}
            <Section title="⏱️ What is SLA Management?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                    SLA Management in Nexus-Ticketing allows teams to define, apply, and enforce time-bound service rules for different ticket types, clients, and urgency levels. Each SLA defines:
                </p>
                 <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {whatIsSlaData.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-center justify-center text-gray-800 font-medium">
                            {item}
                        </div>
                    ))}
                </div>
            </Section>

            {/* SLA Rules Engine & Real-Time Monitoring */}
            <Section title="Rules & Real-Time Monitoring" className="bg-gray-50">
                 <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🎛️ SLA Rules Engine</h3>
                        <p className="text-gray-600 mb-6 text-center">Admins can create multiple SLA policies based on:</p>
                         <div className="grid grid-cols-2 gap-6">
                            {rulesEngineData.map((rule, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <rule.icon className="w-8 h-8 mx-auto text-nexusbyte-accent-green mb-2"/>
                                    <h4 className="font-semibold text-gray-800">{rule.title}</h4>
                                    <p className="text-sm text-gray-500">{rule.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📊 Real-Time SLA Monitoring</h3>
                         <p className="text-gray-600 mb-6 text-center">Every ticket includes:</p>
                          <ul className="space-y-3 text-left">
                            {monitoringData.map((item, index) => (
                               typeof item === 'string' ? 
                               <li key={index} className="flex items-start"><CheckIcon className="w-5 h-5 mr-3 mt-1 text-nexusbyte-accent-green flex-shrink-0"/>{item}</li>
                               : (
                                   <li key={index}>
                                        <p className="font-semibold text-gray-800">{item.title}</p>
                                        <ul className="pl-6 space-y-1 text-sm text-gray-600">
                                            {item.items.map((subItem, i) => <li key={i}>- {subItem}</li>)}
                                        </ul>
                                   </li>
                               )
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Escalation & Reporting */}
            <Section title="Escalation & Reporting">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-gray-50 p-6 rounded-lg text-left">
                        <h3 className="text-xl font-semibold mb-3">🚨 SLA Escalation Triggers</h3>
                        <p className="text-sm text-gray-600 mb-4">When SLA thresholds are hit:</p>
                        <ul className="space-y-3">
                           {escalationData.map((item, i) => <li key={i} className="flex items-start text-sm"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>{item}</li>)}
                        </ul>
                    </div>
                     <div className="bg-gray-50 p-6 rounded-lg text-left">
                        <h3 className="text-xl font-semibold mb-3">📈 SLA Reporting & Analytics</h3>
                        <p className="text-sm text-gray-600 mb-4">From the admin dashboard, view detailed SLA metrics like:</p>
                        <ul className="space-y-3">
                           {reportingMetrics.map((item, i) => <li key={i} className="flex items-start text-sm"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green"/>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </Section>

             {/* Why It Matters */}
            <Section title="✅ Why SLA Management Matters" className="bg-gray-50">
                <blockquote className="text-xl italic text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    “You can’t improve what you don’t measure.”
                </blockquote>
                 <p className="text-gray-700 mt-4 max-w-3xl mx-auto">Nexus-Ticketing's SLA Management system transforms service promises into measurable, actionable goals—so your team can stay accountable, act fast, and continuously improve.</p>
            </Section>

             {/* CTA Section */}
            <Section title="🧪 Try SLA Rules in Action" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Use the demo dashboard to simulate SLA countdowns, apply real-time escalation paths, and monitor outcomes. For enterprise SLA templates or industry-specific presets, contact us.
                </p>
                <a href="mailto:solutions@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    📩 Email us at solutions@nexusbyte.co.za
                </a>
            </Section>
        </div>
    );
};
