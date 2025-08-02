

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, PuzzlePieceIcon
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

const UemPage: React.FC = () => {

    const uemCapabilities = [
        { icon: CogIcon, title: "Cross-Platform Device Management", items: ["Manage Android, iOS, iPadOS, Windows, macOS, ChromeOS", "Automate enrollment, provisioning, and policy deployment", "Apply updates and patches without user disruption"] },
        { icon: ShieldCheckIcon, title: "Zero Trust Security", items: ["Role-based access controls", "Multi-Factor Authentication (MFA) enforcement", "Conditional access based on device health & compliance", "POPIA & GDPR-aligned privacy policies"] },
        { icon: PuzzlePieceIcon, title: "Application Lifecycle Management", items: ["Remote deployment of business-critical apps", "App usage analytics", "Enforced uninstall of unauthorised apps", "Secure web gateways for browser activity control"] },
        { icon: CpuChipIcon, title: "AI-Driven Automation", items: ["Predictive alerts for performance issues", "Self-healing workflows for endpoint compliance", "Automated ticketing integrations with ByteDesk and ServiceNow"] },
    ];

    const uemIntegrations = [
        { system: "Microsoft 365 + Azure AD", integration: "SSO, Defender, Intune" },
        { system: "Google Workspace", integration: "ChromeOS policies, Android Enterprise" },
        { system: "Zoom / Teams", integration: "Secure provisioning of UC tools" },
        { system: "Slack / Salesforce", integration: "App governance and access control" },
        { system: "VMware / Citrix / Jamf", integration: "Advanced UEM extensions" },
    ];

    const industryUseCases = [
        { industry: "Finance", advantage: "Enforce encrypted access, VPN use, and remote data wipes" },
        { industry: "Retail", advantage: "Lockdown POS tablets & update them overnight" },
        { industry: "Healthcare", advantage: "Secure access to EMRs, telehealth apps, and patient data" },
        { industry: "Logistics", advantage: "GPS-based policy enforcement on mobile fleets" },
        { industry: "Education", advantage: "Manage learning devices, control web access" },
    ];
    
    const managedPlans = [
        { plan: "UEM Core", coverage: "Device inventory + policy push", price: "R85/device/month", featured: false },
        { plan: "UEM Secure", coverage: "Full lifecycle + patch + conditional access", price: "R130/device/month", featured: true },
        { plan: "UEM Enterprise", coverage: "+ Threat detection + IoT endpoints + analytics", price: "Custom Quote", featured: false },
    ];
    
    const uemTrialOptions = ["30-Day UEM Trial", "UEM Security Audit", "Unified Device Strategy Workshop"];

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
                        🖥️ Unified Endpoint Management (UEM)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Total Control. One Platform. Every Device.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                       UEM brings together the fragmented worlds of mobile, desktop, and IoT device management into one cohesive, intelligent platform. At NexusByte, our UEM solutions empower your IT team to secure, monitor, and manage every endpoint—across operating systems, device types, and locations—from a single pane of glass.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “From desktops to wearables, UEM makes endpoint security seamless, smart, and scalable.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What is UEM? */}
            <Section title="🌐 What is UEM?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Unified Endpoint Management (UEM) is an evolution of MDM (Mobile Device Management) and EMM (Enterprise Mobility Management), combining Mobile Device Management (MDM), PC & Mac Management, IoT Endpoint Governance, App & Patch Management, and Security & Compliance Policies. UEM eliminates silos and simplifies control across your hybrid or remote-first workforce.
                </p>
            </Section>

            {/* Key Capabilities */}
            <Section title="🧩 Key Capabilities" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {uemCapabilities.map((capability, index) => {
                        const Icon = capability.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{capability.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {capability.items.map((item, i) => (
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

            {/* Integrations & Use Cases */}
            <Section title="Integrations and Industry Applications">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🖧 UEM Integrations</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {uemIntegrations.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.system}</td>
                                            <td className="px-4 py-3 text-sm">{row.integration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🏭 UEM for Your Industry</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {industryUseCases.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.industry}</td>
                                            <td className="px-4 py-3 text-sm">{row.advantage}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* UEM-as-a-Service */}
            <Section title="💼 UEM-as-a-Service by NexusByte" className="bg-gray-50">
                 <p className="text-center text-gray-600 mb-8">Let us manage it for you—or empower your internal IT team.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {managedPlans.map((plan, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.featured ? 'bg-nexusbyte-primary-dark text-white ring-4 ring-nexusbyte-accent-green' : 'bg-white text-gray-900 border'}`}
                        >
                            <h3 className="text-2xl font-bold mb-3">{plan.plan}</h3>
                            <p className={`text-lg mb-2 ${plan.featured ? 'text-gray-400' : 'text-gray-600'}`}>{plan.coverage}</p>
                            <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                            <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                                {plan.price === 'Custom Quote' ? 'Contact Sales' : 'Choose Plan'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="🧪 UEM Trial & Workshop" className="bg-nexusbyte-primary-dark" textWhite>
                <div className="flex flex-wrap justify-center gap-4">
                     {uemTrialOptions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-gray-700 text-white font-medium px-4 py-2 rounded-full shadow-sm flex items-center"
                        >
                            <CheckIcon className="w-5 h-5 mr-2 text-green-400"/> {item}
                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
                     <a href="mailto:uem@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📧 Contact us: uem@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="#" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Book a Free Workshop
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default UemPage;