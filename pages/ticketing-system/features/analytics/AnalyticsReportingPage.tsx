

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, ShieldCheckIcon, ChartPieIcon, CogIcon,
    TicketIcon
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

export const AnalyticsReportingPage: React.FC = () => {

    const coreReportsData = [
        { icon: UsersIcon, title: "Agent Productivity Dashboard", items: ["Tickets handled per agent", "Average resolution time", "First response time", "Reassigned or escalated tickets", "Daily & weekly activity snapshots"] },
        { icon: CogIcon, title: "SLA Performance Tracker", items: ["SLA compliance rate by team/agent", "Breached vs on-track tickets", "Top reasons for SLA failures", "Performance per SLA policy (by urgency, issue type, etc.)"] },
        { icon: TicketIcon, title: "Ticket Volume & Workload Analysis", items: ["New tickets created by date", "Current open ticket load by urgency (Low, Med, High, Critical)", "Reopened tickets", "Trending support categories", "Peak ticket hours for team scheduling"] },
        { icon: UsersIcon, title: "Client Interaction Insights", items: ["Client satisfaction patterns (if CSAT/feedback is integrated)", "Most active clients by volume", "Full client ticket history with time-to-resolution stats"] }
    ];

    const advancedFeaturesData = {
        "📤 Export & Sharing": ["Export reports in CSV, PDF or Excel", "Schedule weekly/monthly digest emails to stakeholders", "Sync with Power BI, Looker, or external BI tools (Enterprise tier)"],
        "🧠 Predictive Insights (Upcoming)": ["Forecasted ticket spikes by season/client history", "Agent burnout risk via AI-inferred workload patterns", "Suggested automation candidates (repetitive tasks)", "Ticket load balancing by team availability"],
        "🛠️ Custom Metrics Available": ["Create custom KPIs via admin settings", "Apply filters across time, urgency, client, agent, category", "Build internal dashboards with REST API data hooks (available for white-label clients)"],
        "🔐 Compliance Reporting": ["Audit log summaries of all actions", "Export-ready reports for POPIA, GDPR, and internal governance teams", "Role-based access to sensitive data analytics"]
    };
    
    const useCasesByRoleData = [
        { role: "Support Managers", use: "Assign resources based on volume & SLA stats" },
        { role: "Executives", use: "Monitor overall performance & client satisfaction trends" },
        { role: "HR/Training", use: "Identify high/low performers for coaching" },
        { role: "Sales/CS Teams", use: "Review account health via client support activity" },
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
                        📊 Analytics & Reporting
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Measure. Optimise. Scale with Insight.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Nexus-Ticketing goes beyond basic dashboards by providing a comprehensive reporting suite that translates every interaction, ticket, and touchpoint into actionable data.
                    </motion.p>
                     <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “In support, what gets measured gets improved.”
                    </motion.blockquote>
                </div>
            </div>

            {/* Why Analytics Matter */}
            <Section title="🎯 Why Analytics Matter">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    With powerful, real-time dashboards, Nexus-Ticketing empowers support managers, team leads, and executives to monitor performance KPIs, SLA compliance, ticket volume trends, and agent productivity—all in one unified interface.
                </p>
            </Section>

            {/* Core Reports Section */}
            <Section title="📈 Core Reports Included" className="bg-gray-50">
                 <div className="grid md:grid-cols-2 gap-8">
                    {coreReportsData.map((report, index) => {
                        const Icon = report.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-left h-full"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{report.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {report.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0"/>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Advanced Features */}
            <Section title="Advanced Capabilities">
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(advancedFeaturesData).map(([title, items], index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-6 rounded-lg text-left"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{title}</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0"/>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Use Cases by Role Table */}
             <Section title="🎓 Use Cases by Role" className="bg-gray-50">
                 <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Use Case</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {useCasesByRoleData.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{row.role}</td>
                                    <td className="px-6 py-4">{row.use}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

             {/* CTA Section */}
            <Section title="🚀 Ready to See the Numbers?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Log in to your Admin Dashboard to explore live analytics, or request a demo.
                </p>
                <a href="mailto:ticketing@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    📩 Email us at ticketing@nexusbyte.co.za
                </a>
            </Section>
        </div>
    );
};