

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, ShieldCheckIcon, LockClosedIcon
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

export const RolesPermissionsPage: React.FC = () => {

    const defaultRolesData = [
        { role: "Admin", description: "Full system access for platform setup, oversight, and data control.", permissions: ["Create/edit/delete users", "View and manage all tickets", "Access audit logs", "View analytics", "Modify system-wide settings", "Clear ticket database"] },
        { role: "Agent (User)", description: "The backbone of your helpdesk, responsible for handling and resolving tickets.", permissions: ["Create, update, and resolve tickets", "Comment and attach files", "Search tickets and clients", "Use reminders, time tracking"] },
        { role: "Client", description: "End-users or customers who submit support requests via the external portal.", permissions: ["Submit new tickets", "Receive ticket updates", "Respond to agent comments"] }
    ];

    const optionalRolesData = [
        { role: "Auditor", description: "Read-only view across the platform for auditing and compliance teams." },
        { role: "Team Lead", description: "Elevated agent with access to team stats, escalations, and internal notes." },
        { role: "Client Viewer", description: "Allows specific clients to log in and view ticket histories across their organisation." }
    ];

    const bestPracticesData = [
        "Start with least privilege — give users only what they need.",
        "Review permissions quarterly for compliance.",
        "Use the Audit Log to track sensitive actions."
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
                        🔐 Roles & Permissions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Define who sees what, and who does what—with precision.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Nexus-Ticketing is designed with Role-Based Access Control (RBAC) at its core, ensuring your support platform remains secure, structured, and scalable as your team grows.
                    </motion.p>
                </div>
            </div>

            {/* What is RBAC? */}
            <Section title="🛡️ What is RBAC?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    RBAC (Role-Based Access Control) is a security principle that restricts system access to authorised users based on predefined roles. This ensures that users can only access the features and data they need to perform their tasks—nothing more, nothing less.
                </p>
            </Section>

            {/* Default Roles Table */}
            <Section title="🎭 Default Roles in Nexus-Ticketing" className="bg-gray-50">
                <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Permissions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {defaultRolesData.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-bold align-top">{row.role}</td>
                                    <td className="px-6 py-4 text-sm align-top">{row.description}</td>
                                    <td className="px-6 py-4 text-sm align-top">
                                        <ul className="space-y-1">
                                            {row.permissions.map((perm, pIndex) => (
                                                <li key={pIndex} className="flex items-start">
                                                    <CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                                                    {perm}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* Optional Roles & Custom Builder */}
            <Section title="Advanced Permissions (Enterprise)">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧩 Optional Roles</h3>
                        <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {optionalRolesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.role}</td>
                                            <td className="px-4 py-3 text-sm">{row.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧱 Custom Role Builder</h3>
                        <div className="bg-gray-50 p-6 rounded-lg text-left">
                             <p className="text-gray-600 mb-4">Build your own permission matrix:</p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>Toggle feature access (e.g. commenting, linking tickets)</li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>Define visibility scope (e.g. department-only tickets)</li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>Assign roles per team, per project, or per region</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* Best Practices & Next Steps */}
            <Section title="Best Practices & Next Steps" className="bg-gray-50">
                 <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="text-left bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">🧠 Best Practices</h3>
                        <ul className="space-y-3">
                           {bestPracticesData.map((item, i) => <li key={i} className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>{item}</li>)}
                        </ul>
                    </div>
                     <div className="text-left bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">🧭 Next Steps</h3>
                         <ul className="space-y-3">
                            <li className="flex items-start"><ArrowRightIcon className="w-5 h-5 mr-2 mt-1 text-nexusbyte-accent-green"/><Link to="/ticketing-system/plans-access" className="hover:underline">View Pricing Plans</Link></li>
                            <li className="flex items-start"><ArrowRightIcon className="w-5 h-5 mr-2 mt-1 text-nexusbyte-accent-green"/><Link to="/ticketing-system/demo" className="hover:underline">Book a Demo</Link></li>
                            <li className="flex items-start"><ArrowRightIcon className="w-5 h-5 mr-2 mt-1 text-nexusbyte-accent-green"/><Link to="#" className="hover:underline">Admin Setup Guide (PDF)</Link></li>
                        </ul>
                    </div>
                </div>
            </Section>

        </div>
    );
};
