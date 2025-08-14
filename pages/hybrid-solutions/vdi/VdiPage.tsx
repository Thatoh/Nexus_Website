

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon
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

export const VdiPage: React.FC = () => {

    const vdiPlatformsData = [
        { icon: CpuChipIcon, title: "Microsoft Azure Virtual Desktop (AVD)", items: ["Multi-session Windows 11 experience, optimised for cost", "Deep integration with Microsoft 365 and Azure services", "Scalable for thousands of users with pooled resources"] },
        { icon: CpuChipIcon, title: "Windows 365 Cloud PC", items: ["Personal, persistent Windows 11 desktops in the cloud", "Simple, predictable per-user-per-month pricing", "Ideal for individual users or specialised roles"] },
        { icon: CogIcon, title: "Custom VDI on NexusByte IaaS", items: ["Full control over hardware specs, OS (Windows/Linux), and networking", "GPU options available for CAD, design, AI/ML workloads", "On-prem or private cloud hosting for data sovereignty"] },
    ];

    const benefitsData = [
        { benefit: "Centralised Management", description: "Update, patch, and secure all desktops from one console." },
        { benefit: "Enhanced Security", description: "Data stays in the cloud, not on endpoint devices. Full logging, MFA, and Zero Trust." },
        { benefit: "Work From Anywhere", description: "Consistent desktop experience from home, office, or on the go." },
        { benefit: "BYOD (Bring Your Own Device) Ready", description: "Enable staff to use personal devices securely." },
        { benefit: "Rapid Onboarding", description: "Provision a new desktop in minutes, not days." },
        { benefit: "Cost Efficiency", description: "Reduce hardware capex and IT support overhead." },
    ];
    
    const useCasesData = [
        { industry: "Call Centres", useCase: "Standardised desktop with softphone, CRM, and locked-down browser." },
        { industry: "Software Development", useCase: "Pre-configured dev environments with IDEs, compilers, and access to internal repos." },
        { industry: "Financial Services", useCase: "Secure, compliant desktops with restricted access to sensitive client data." },
        { industry: "Education", useCase: "Virtual computer labs for students, accessible from any device." },
        { industry: "Healthcare", useCase: "Secure access to EMR/EHR systems for remote clinicians." },
    ];

    const vdiServicesData = [ "Deployment & Migration", "Image Management", "User Profile Management", "Security Hardening", "Performance Optimisation"];

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
                        🖥️ Virtual Desktop Infrastructure (VDI)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Your Desktop, Anywhere—Securely in the Cloud.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        NexusByte’s Virtual Desktop Infrastructure (VDI) solutions deliver powerful, secure, and fully managed desktops from the cloud. Whether your team needs a lightweight Windows 11 PC or a high-performance GPU workstation, VDI ensures consistent access from any device, anywhere.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Decouple your work from your hardware. Empower your team to be productive from anywhere.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What is VDI? */}
            <Section title="What is VDI?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    VDI is a technology that hosts desktop environments (operating systems, apps, data) on a centralised server and deploys them to end-users over a network. Instead of managing hundreds of physical PCs, you manage one golden image—and your team gets a uniform, secure experience on laptops, tablets, or thin clients.
                </p>
            </Section>

            {/* Key VDI Platforms */}
            <Section title="✅ Key VDI Platforms We Support" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vdiPlatformsData.map((platform, index) => {
                        const Icon = platform.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{platform.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {platform.items.map((item, i) => (
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

            {/* Benefits & Use Cases */}
            <Section title="Benefits and Use Cases">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">💡 Benefits of VDI for Hybrid Teams</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {benefitsData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-2 font-medium">{row.benefit}</td>
                                            <td className="px-4 py-2 text-sm">{row.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🎯 Common Use Cases</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-2 font-medium">{row.industry}</td>
                                            <td className="px-4 py-2 text-sm">{row.useCase}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* Our VDI Services */}
             <Section title="🛠️ Our VDI Services" className="bg-gray-50">
                 <div className="flex flex-wrap justify-center gap-4">
                    {vdiServicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-white text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm border border-gray-200"
                        >
                            {service}
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="📞 Ready to Mobilise Your Workforce?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Explore how VDI can simplify IT, improve security, and empower your hybrid team.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:vdi@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Email: vdi@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Schedule a VDI assessment
                    </a>
                </div>
            </Section>
        </div>
    );
};
