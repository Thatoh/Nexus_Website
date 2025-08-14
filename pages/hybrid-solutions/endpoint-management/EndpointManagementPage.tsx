
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, LockClosedIcon, BriefcaseIcon
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

export const EndpointManagementPage: React.FC = () => {
    const coreCapabilitiesData = [
        { icon: CogIcon, title: "Unified Endpoint Management (UEM)", items: ["Manage all device types—Windows, macOS, Android, iOS—from a single pane of glass.", "Device onboarding & offboarding", "OS & patch management", "Remote lock, wipe, and policy enforcement"] },
        { icon: ShieldCheckIcon, title: "Endpoint Security Controls", items: ["Harden endpoints against malware, exploits, and data exfiltration.", "Endpoint Detection & Response (EDR)", "Next-gen antivirus and anti-ransomware", "Firewall & USB port policies", "Disk encryption & secure boot"] },
        { icon: CpuChipIcon, title: "Real-Time Monitoring & Reporting", items: ["Gain insight into device health, compliance posture, and risky behaviours.", "Live dashboards", "Risk scoring per device/user", "Non-compliance alerts"] },
        { icon: BriefcaseIcon, title: "Automation & Self-Healing", items: ["Reduce IT strain with rule-based remediation and auto-patching workflows.", "Auto-remediate out-of-date software", "Auto-isolate infected devices from network", "Notify users with in-device prompts"] },
    ];
    
    const toolingData = [
        { stack: "Microsoft Intune", use: "Cloud-native UEM & MDM across Windows, iOS, Android" },
        { stack: "Defender for Endpoint", use: "EDR, AV, automated response, threat intelligence" },
        { stack: "Jamf", use: "Apple-specific MDM & security" },
        { stack: "Cisco Meraki Systems Manager", use: "Endpoint visibility across networks" },
        { stack: "NexusByte Agent + Nova AI", use: "Device insights + smart automated policy workflows" },
    ];
    
    const useCasesData = [
        { icon: UsersIcon, title: "BYOD Security", description: "Enforce compliance on employee-owned phones & laptops." },
        { icon: CogIcon, title: "Remote Laptop Deployment", description: "Ship pre-enrolled laptops to users with zero-touch setup." },
        { icon: UsersIcon, title: "Executive Device Hardening", description: "Custom policies for VIP & sensitive-access users." },
        { icon: CheckIcon, title: "Health Check Compliance", description: "Ensure only up-to-date & encrypted devices access systems." },
    ];
    
    const benefitsData = ["Reduced attack surface", "Simplified IT operations", "Faster threat containment", "Full visibility across hybrid estate", "Improved end-user experience"];

    const managedPlansData = [
        { plan: "Basic", devices: "10–50", includes: "Policy templates, AV, patching", featured: false },
        { plan: "Advanced", devices: "50–500", includes: "EDR, UEM, zero-trust enforcement", featured: true },
        { plan: "Enterprise", devices: "500+", includes: "Bespoke automation, Nova AI, compliance reports", featured: false },
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
                        🛡️ Secure Endpoint Management
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Protect Every Device. Empower Every User.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        In the hybrid work era, every device is a potential gateway—or a risk. NexusByte’s Endpoint Security & Management services provide unified visibility and control over every laptop, desktop, mobile, and server connected to your network—regardless of location.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Security doesn’t stop at the perimeter—it starts with every endpoint.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What is Endpoint Management? */}
            <Section title="🧭 What Is Endpoint Management?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Endpoint Management is the centralised process of monitoring, securing, configuring, and updating the devices your workforce uses to access business systems. It’s the backbone of a modern hybrid or remote work environment. Our approach goes beyond device visibility—it’s about zero-trust enforcement, real-time compliance, and automated remediation.
                </p>
            </Section>

            {/* Core Capabilities */}
            <Section title="🧰 Core Capabilities" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {coreCapabilitiesData.map((capability, index) => {
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

            {/* Tooling & Use Cases */}
            <Section title="Tooling and Use Cases">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🔧 Tooling & Integration</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Stack</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Use</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {toolingData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.stack}</td>
                                            <td className="px-4 py-3 text-sm">{row.use}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧠 Use Cases</h3>
                        <div className="space-y-4">
                            {useCasesData.map((spotlight, index) => {
                                const Icon = spotlight.icon;
                                return (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-left flex items-center gap-4">
                                        <Icon className="w-8 h-8 text-nexusbyte-accent-green flex-shrink-0" />
                                        <div>
                                            <h4 className="text-md font-bold text-nexusbyte-primary-dark">{spotlight.title}</h4>
                                            <p className="text-sm text-gray-600">{spotlight.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* Benefits */}
            <Section title="🎯 Benefits" className="bg-gray-50">
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {benefitsData.map((benefit, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-nexusbyte-accent-green/10 text-nexusbyte-accent-green font-medium px-4 py-3 rounded-lg shadow-sm text-center"
                        >
                            {benefit}
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* Managed Service */}
            <Section title="📦 Available As-a-Service">
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {managedPlansData.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.featured ? 'bg-nexusbyte-primary-dark text-white ring-4 ring-nexusbyte-accent-green' : 'bg-white text-gray-900 border'}`}
                        >
                            <h3 className="text-2xl font-bold mb-3">{plan.plan}</h3>
                            <p className="text-lg text-gray-500 mb-4">{plan.devices} Devices</p>
                            <div className="flex-grow mb-8">
                              <p className="text-sm font-semibold mb-2">Includes:</p>
                              <p className="text-sm">{plan.includes}</p>
                            </div>
                            <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="📬 Start Securing Endpoints Today" className="bg-nexusbyte-primary-dark" textWhite>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:security@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📧 Email: security@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="#" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        🗓 Schedule a free endpoint audit session
                    </a>
                </div>
            </Section>
        </div>
    );
};
