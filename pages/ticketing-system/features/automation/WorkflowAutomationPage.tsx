

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CalendarIcon, TicketIcon, 
    CogIcon, ShieldCheckIcon, CpuChipIcon
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

export const WorkflowAutomationPage: React.FC = () => {

    const coreFeaturesData = [
        { icon: UsersIcon, title: "Auto-Routing & Assignment", items: ["Assign tickets based on category, urgency, or client type", "Load-balancing logic for evenly distributing tickets", "Escalation to senior agents if conditions aren’t met within SLAs"] },
        { icon: CalendarIcon, title: "SLA-Based Triggers", items: ["Auto-prioritise tickets breaching SLA windows", "Notify relevant stakeholders before escalation", "Trigger reassignments if no response within X minutes"] },
        { icon: TicketIcon, title: "Categorisation & Tagging", items: ["Automatically tag tickets based on keywords or templates", "Standardise issue categories for reporting accuracy"] },
        { icon: ShieldCheckIcon, title: "Notifications & Alerts", items: ["Trigger SMS, email, or in-app alerts for key events", "Notify agents of new tickets or comments", "Alert admins when high-urgency tickets are opened"] },
        { icon: CalendarIcon, title: "Reminder Scheduling", items: ["Auto-create reminders based on urgency level or due date", "Set follow-ups 48hrs after last agent response", "Notify users of stale or unattended tickets"] },
        { icon: CpuChipIcon, title: "Custom Logic with Nova AI (Add-On)", items: ["Suggest reassignment based on agent capacity", "Auto-generate initial responses based on ticket history", "Match new issues to similar resolved cases for faster resolution"] },
    ];

    const exampleWorkflows = [
        { useCase: "IT Support", flow: "New “Urgent” ticket → Notify lead + Auto-assign to Senior Tech" },
        { useCase: "HR Helpdesk", flow: "Keyword: “leave policy” → Tag as HR → Assign to HR desk" },
        { useCase: "Sales CRM Support", flow: "Ticket unresolved >72 hrs → Reassign to escalation queue" },
        { useCase: "Customer Support", flow: "Ticket contains “refund” → Tag + email compliance officer" },
    ];
    
    const adminPanelFeatures = ["Visual rule builder (no coding needed)", "Pre-built automation templates for quick setup", "Clone, modify, or disable rules anytime", "Logs and stats per automation rule"];

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
                        🤖 Workflow Automation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Streamline Support with Intelligent Triggers and Task Automation
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Nexus-Ticketing’s automation engine allows teams to do more with less. From ticket routing to smart notifications, repetitive tasks are eliminated so your agents can focus on what matters most—resolving issues and delighting users.
                    </motion.p>
                </div>
            </div>

            {/* What is Workflow Automation? */}
            <Section title="🧠 What is Workflow Automation?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Workflow Automation is the logic layer that runs silently behind your support operations. It automatically executes pre-defined actions based on triggers like ticket creation, updates, time thresholds, or agent behaviours—without human intervention.
                </p>
            </Section>

            {/* Core Automation Features */}
            <Section title="🔧 Core Automation Features" className="bg-gray-50">
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreFeaturesData.map((feature, index) => {
                        const Icon = feature.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{feature.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {feature.items.map((item, i) => (
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

            {/* Example Workflows by Team */}
            <Section title="⚙️ Example Workflows by Team">
                 <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Use Case</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Automation Flow</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {exampleWorkflows.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{row.useCase}</td>
                                    <td className="px-6 py-4 text-sm font-mono">{row.flow}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* Admin Control & Security */}
            <Section title="Control & Compliance" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-white p-6 rounded-lg shadow-md text-left">
                        <h3 className="text-xl font-semibold mb-3">🎛️ Easy Admin Control Panel</h3>
                         <ul className="space-y-3">
                           {adminPanelFeatures.map((item, i) => <li key={i} className="flex items-start text-sm"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>{item}</li>)}
                        </ul>
                    </div>
                     <div className="bg-white p-6 rounded-lg shadow-md text-left">
                        <h3 className="text-xl font-semibold mb-3">🔒 Secure & Compliant</h3>
                        <ul className="space-y-3">
                           <li className="flex items-start text-sm"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>All automation actions are logged in the audit trail</li>
                           <li className="flex items-start text-sm"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>Role-based execution to ensure no unintended access</li>
                           <li className="flex items-start text-sm"><CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500"/>POPIA-compliant decision logic with auditability</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Pro-Tip */}
            <Section title="💡 Pro-Tip">
                <blockquote className="text-lg italic text-gray-700 leading-relaxed max-w-2xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    Combine Workflow Automation with Reminders and Notifications for a 360° support loop: nothing slips through, no one is left waiting, and SLA breaches become a thing of the past.
                </blockquote>
            </Section>

            {/* CTA Section */}
            <Section title="📩 Get Started" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Need help setting up smart flows for your team? Talk to our experts at ticketing@nexusbyte.co.za or request guided onboarding.
                </p>
                <a href="mailto:ticketing@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    Contact Us
                </a>
            </Section>
        </div>
    );
};