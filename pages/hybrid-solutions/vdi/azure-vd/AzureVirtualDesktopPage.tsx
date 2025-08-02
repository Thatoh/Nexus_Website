
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CpuChipIcon, LockClosedIcon, GlobeAltIcon, CogIcon, CommandLineIcon, 
    CurrencyDollarIcon, CheckIcon, AcademicCapIcon, BriefcaseIcon, CloudArrowUpIcon,
    ArrowRightIcon, UsersIcon, ShieldCheckIcon
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

export const AzureVirtualDesktopPage: React.FC = () => {

    const whyAvdData = [
        { icon: UsersIcon, title: "True Windows Experience Anywhere", description: "Deliver Windows 10 or 11 with Microsoft 365 apps to any device—PC, Mac, iOS, Android, or browser." },
        { icon: ShieldCheckIcon, title: "Enterprise-Grade Security", description: "Azure AD authentication, Conditional access policies, Defender for Endpoint integration, and Multi-Factor Authentication (MFA)." },
        { icon: CurrencyDollarIcon, title: "Cost-Optimised", description: "Pay only for what you use (per session), use existing Microsoft 365 licenses, and reduce CapEx for desktops and VPN hardware." },
    ];
    
    const avdArchitectureData = [
        { layer: "User Access Layer", delivery: "Secure login portals, role-based access, remote gateway" },
        { layer: "Session Hosts", delivery: "VM pool sizing, OS optimisation, app packaging" },
        { layer: "Host Pool Management", delivery: "Autoscaling, load balancing, availability zones" },
        { layer: "FSLogix Profiles", delivery: "Persistent user profile storage across sessions" },
        { layer: "Monitoring & Alerts", delivery: "Real-time usage, performance alerts, and security logs" },
    ];
    
    const useCasesData = [
        { industry: "Legal & Audit", useCase: "Secure access to sensitive files during remote case review" },
        { industry: "Healthcare", useCase: "Clinical desktops with patient systems + DICOM viewers" },
        { industry: "BPO & Call Centres", useCase: "Desktop pools for shift-based agents with app restrictions" },
        { industry: "Finance", useCase: "Desktop-based ERP and secure trading dashboards" },
        { industry: "Education", useCase: "Virtual classrooms with preloaded tools (MS Teams, Whiteboard, Excel Labs)" },
    ];
    
    const comparisonData = [
        { feature: "Device-agnostic Access", avd: true, onPrem: 'limited', vpn: false },
        { feature: "Auto Scaling", avd: true, onPrem: 'manual', vpn: false },
        { feature: "Built-in Microsoft 365", avd: true, onPrem: false, vpn: 'limited' },
        { feature: "AI Integration (Nova)", avd: true, onPrem: 'custom', vpn: false },
        { feature: "Global Availability", avd: true, onPrem: false, vpn: false },
    ];
    
    const includedFeatures = ["Full deployment (1 week turnaround)", "VM sizing + autoscale policies", "App packaging + image management", "Helpdesk support for onboarding users", "POPIA-compliant access controls", "Optional GPU-powered sessions"];
    
    const deploymentPlansData = [
        { plan: "Starter", price: "R550", idealFor: "Admin, accounting, HR users", icon: BriefcaseIcon },
        { plan: "Pro", price: "R980", idealFor: "Developers, analysts", icon: CommandLineIcon },
        { plan: "GPU/Design", price: "R1,850+", idealFor: "3D rendering, AI model training", icon: CpuChipIcon, featured: true },
        { plan: "Enterprise", price: "Request Quote", idealFor: "Custom apps + Nova integration", icon: CogIcon },
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
                        ☁️ Azure Virtual Desktop (AVD)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Enterprise-Grade Desktops. Microsoft-Powered. NexusByte-Optimised.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Deploy and scale secure, virtualised Windows desktops and apps on Azure in minutes. NexusByte helps you unleash the full potential of Azure Virtual Desktop (AVD) for remote work, hybrid infrastructure, and business continuity.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Familiar Windows experience. Backed by Azure. Managed by NexusByte.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What is AVD & Why Choose It */}
            <Section title="The Power of AVD" subtitle="Azure Virtual Desktop (AVD) is Microsoft’s cloud-based desktop virtualisation platform that enables secure remote access to a Windows desktop and apps from anywhere. Users get a full Windows 11 experience while IT keeps centralised control.">
                <div className="grid md:grid-cols-3 gap-8">
                    {whyAvdData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-lg text-left shadow-sm hover:shadow-lg"
                            >
                                <Icon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
                                <h3 className="text-lg font-bold text-nexusbyte-primary-dark mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Architecture & AI/M365 Integration */}
            <Section title="Managed Architecture & Seamless Integration" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🛠 AVD Architecture Managed by NexusByte</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {avdArchitectureData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.layer}</td>
                                            <td className="px-4 py-3 text-sm">{row.delivery}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧩 Integrated with Microsoft 365 & Teams</h3>
                            <ul className="space-y-2 text-left text-gray-700">
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>Teams chat, calling, and meetings in VDI</li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>Outlook, Word, Excel, and PowerPoint natively optimised</li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>Shared OneDrive and SharePoint access</li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-green-500"/>Seamless SSO via Azure Active Directory</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🤖 AI-Ready Desktop Experience</h3>
                            <p className="text-left text-gray-600">With Nova AI embedded inside AVD sessions, enable: Document summarisation from shared folders, Internal IT helpbots for real-time support, Knowledge base search from within Word or Teams, and Drafting assistance in Outlook using LLMs.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Use Cases & Comparison */}
            <Section title="Use Cases and Platform Comparison">
                <div className="space-y-12">
                     <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📊 Use Cases</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.industry}</td>
                                            <td className="px-4 py-3 text-sm">{row.useCase}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🔁 How AVD Compares</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">Azure Virtual Desktop</th>
                                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">On-Prem VDI</th>
                                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">VPN to Office PC</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-center">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 text-left font-medium">{row.feature}</td>
                                            <td>{row.avd ? '✅' : '❌'}</td>
                                            <td>{typeof row.onPrem === 'boolean' ? (row.onPrem ? '✅' : '❌') : '⚠️'}</td>
                                            <td>{typeof row.vpn === 'boolean' ? (row.vpn ? '✅' : '❌') : '⚠️'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Inclusions & Pricing */}
            <Section title="What's Included & Deployment Plans" className="bg-gray-50">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📦 AVD with NexusByte</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md space-y-3">
                            {includedFeatures.map((feature, i) => (
                                <p key={i} className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-2"/> {feature}</p>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📈 AVD Deployment Plans</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {deploymentPlansData.map((plan, i) => {
                                const Icon = plan.icon;
                                return (
                                <div key={i} className={`p-4 rounded-lg shadow-md text-center ${plan.featured ? 'bg-nexusbyte-primary-dark text-white' : 'bg-white'}`}>
                                    <Icon className={`w-8 h-8 mx-auto mb-2 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-primary-dark'}`}/>
                                    <h4 className="font-bold">{plan.plan}</h4>
                                    <p className="text-xs mb-2">{plan.idealFor}</p>
                                    <p className={`font-bold text-lg ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                                </div>
                            )})}
                        </div>
                         <p className="text-xs text-center text-gray-500 mt-2">Includes licensing, storage, backups, and access monitoring.</p>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="🚀 Ready to Launch Azure Virtual Desktop?" className="bg-nexusbyte-primary-dark" textWhite>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Let NexusByte handle everything—from design to deployment to optimisation. AVD isn’t just remote access—it’s a future-ready desktop platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:hybrid@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Reach Out
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="#" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📥 Download Capability Deck
                    </a>
                </div>
            </Section>
        </div>
    );
};
