

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, LockClosedIcon, BriefcaseIcon, CommandLineIcon, CurrencyDollarIcon
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

export const Windows365Page: React.FC = () => {
    const keyBenefitsData = [
        { icon: UsersIcon, title: "Persistent & Personalised", description: "Each user gets their own cloud-hosted Windows machine with persistent storage—unlike pooled desktops in VDI." },
        { icon: CogIcon, title: "Simple to Deploy & Scale", description: "No complex infrastructure. No image management. Just assign licenses and go—scale users up or down instantly." },
        { icon: BriefcaseIcon, title: "Microsoft 365 Native", description: "Integrated out-of-the-box with Teams (optimised), Outlook, Word, Excel, OneDrive, and SharePoint." },
        { icon: ShieldCheckIcon, title: "Secure by Design", description: "Azure AD integration, Conditional Access, Endpoint protection via Microsoft Defender, and full compliance." },
    ];
    
    const useCasesData = [
        { useCase: "Remote Work Enablement", why: "Fast onboarding with persistent machines and no VPNs" },
        { useCase: "BYOD Environments", why: "Separate work environment from personal devices" },
        { useCase: "Field & Sales Teams", why: "Access CRM, email, docs on any device—even on mobile" },
        { useCase: "Contractors & Temporary Staff", why: "Onboard securely without giving access to internal devices" },
        { useCase: "Business Continuity", why: "No dependency on office desktops or site-specific hardware" },
    ];
    
    const comparisonData = [
        { feature: "Personalised Desktops", w365: true, avd: 'limited' },
        { feature: "Scalability", w365: true, avd: true },
        { feature: "App Virtualisation", w365: 'limited', avd: true },
        { feature: "Setup Complexity (Lower is better)", w365: true, avd: 'limited' }, 
        { feature: "Licensing Model", w365: 'predictable', avd: 'variable' },
    ];

    const nexusByteEnhancements = ["AI-Augmented: Optional Nova integration for policy help, IT support, or document search", "Pre-Configured: With Microsoft 365, VPN profiles, secure file sync", "Governed: With usage analytics, user audit trails, and secure offboarding", "Connected: CRM, ERP, and SharePoint-integrated virtual desktops"];
    
    const plansData = [
        { plan: "Basic", specs: "2vCPU, 4GB RAM, 64GB storage", idealFor: "Admins, email/Excel users", price: "R780", featured: false },
        { plan: "Standard", specs: "2vCPU, 8GB RAM, 128GB storage", idealFor: "Sales, Ops, frontline staff", price: "R1,200", featured: true },
        { plan: "Power", specs: "4vCPU, 16GB RAM, 256GB storage", idealFor: "Developers, data users", price: "R1,900", featured: false },
        { plan: "Custom Enterprise", specs: "Dedicated Azure tenant, Nova agent, SSO", idealFor: "Regulated industries, large orgs", price: "Request a quote", featured: false },
    ];

    const addOnsData = ["Nova AI Embedded (document support, internal Q&A)", "Endpoint Defender with NexusByte SOC integration", "Daily backup and disaster recovery add-on", "Custom image provisioning for fast new user setup"];

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
                        🖥️ Windows 365 Cloud PC
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Your Personalised, Always-On Windows Experience—Now in the Cloud.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Windows 365 Cloud PC is Microsoft’s revolutionary approach to desktop computing. With NexusByte, it becomes a secure, scalable, and intelligently managed workspace—perfect for hybrid teams, frontline staff, and executives alike.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “No more physical desktops. Just powerful, persistent computing—anywhere, anytime.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What is W365? */}
            <Section title="💡 What Is Windows 365 Cloud PC?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Windows 365 streams a full Windows 10 or 11 desktop from the cloud to any device. Unlike traditional virtual desktops, each user gets a dedicated Cloud PC—persistent, personalised, and always available. Whether on a Mac, Android tablet, or browser, your apps, data, and settings follow you securely.
                </p>
            </Section>

            {/* Key Benefits */}
            <Section title="🌐 Key Benefits" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {keyBenefitsData.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg text-left shadow-sm hover:shadow-lg"
                            >
                                <Icon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
                                <h3 className="text-lg font-bold text-nexusbyte-primary-dark mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Use Cases & Comparison */}
            <Section title="Use Cases and Comparison">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">👨‍💻 Perfect Use Cases</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.useCase}</td>
                                            <td className="px-4 py-3 text-sm">{row.why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">⚙️ How It Compares to Azure Virtual Desktop (AVD)</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">Windows 365</th>
                                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">Azure VDI</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-center">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 text-left font-medium">{row.feature}</td>
                                            <td>{row.w365 === true ? '✅' : row.w365 === 'limited' ? '⚠️' : '❌'}</td>
                                            <td>{row.avd === true ? '✅' : row.avd === 'limited' ? '⚠️' : '❌'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* Enhancements & Plans */}
            <Section title="NexusByte Enhancements & Plans" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">🧠 NexusByte Enhancements</h3>
                        <ul className="space-y-3 text-left text-gray-700">
                            {nexusByteEnhancements.map((item, i) => (
                                <li key={i} className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-nexusbyte-accent-green"/>{item}</li>
                            ))}
                        </ul>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 mt-8">🧩 Add-Ons Available</h3>
                        <ul className="space-y-3 text-left text-gray-700">
                             {addOnsData.map((item, i) => (
                                <li key={i} className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 mt-1 text-nexusbyte-accent-green"/>{item}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📦 Windows 365 Plans We Support</h3>
                        <div className="space-y-4">
                            {plansData.map((plan, i) => (
                                <div key={i} className={`p-4 rounded-lg shadow-md text-left ${plan.featured ? 'bg-nexusbyte-primary-dark text-white' : 'bg-white border'}`}>
                                    <h4 className="font-bold">{plan.plan}</h4>
                                    <p className="text-xs">{plan.specs}</p>
                                    <p className={`font-bold text-lg mt-1 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                                    <p className="text-xs">{plan.idealFor}</p>
                                </div>
                            ))}
                        </div>
                         <p className="text-xs text-center text-gray-500 mt-2">Licenses include access to Cloud PC from any device, with 99.9% uptime.</p>
                    </div>
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="🚀 Deploy Windows 365 with NexusByte" className="bg-nexusbyte-primary-dark" textWhite>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    From 5 to 5,000 users, we’ve got your Cloud PC journey covered. NexusByte is your certified partner in hybrid workforce enablement.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:vdi@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📧 Contact the VDI team
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="#" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📥 Download our full Windows 365 Playbook
                    </a>
                </div>
            </Section>
        </div>
    );
};
