

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, BriefcaseIcon, LockClosedIcon
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

const MdmPage: React.FC = () => {
    const whatWeOfferData = [
        { icon: UsersIcon, title: "Device Enrollment & Inventory", items: ["Auto-enrollment for Android, iOS, and Windows", "Real-time inventory of all mobile devices", "Device tagging (by role, region, department)"] },
        { icon: LockClosedIcon, title: "Policy Enforcement", items: ["Enforce passcodes, encryption, and screen locks", "Block access to risky apps, websites, and public Wi-Fi", "Geo-fencing, time-based restrictions, and kiosk mode"] },
        { icon: BriefcaseIcon, title: "Secure App & Data Management", items: ["Deploy internal and 3rd-party apps remotely", "Separate personal and corporate data (containerisation)", "Remote wipe (selective or full) for lost/stolen devices"] },
        { icon: ShieldCheckIcon, title: "Alerting & Compliance", items: ["Instant alerts on jailbreak/rooted devices", "Real-time compliance scoring", "Integration with compliance frameworks (e.g., POPIA, ISO 27001)"] },
    ];

    const platformSupportData = [
        { os: "Android", support: "Full control via Android Enterprise" },
        { os: "iOS/iPadOS", support: "Apple Business Manager integration" },
        { os: "Windows", support: "Endpoint Manager (Intune) & Defender" },
        { os: "macOS", support: "Enrolment + policy enforcement" },
    ];
    
    const useCasesData = [
        { sector: "Healthcare", application: "Lock-down tablets for patient data apps only" },
        { sector: "Retail", application: "Enable kiosk mode for sales-floor tablets" },
        { sector: "Education", application: "Manage student iPads across campuses" },
        { sector: "Construction", application: "GPS tracking of rugged devices with wipe-on-exit policies" },
        { sector: "Finance", application: "Encrypted comms & MFA for advisors on mobile" },
    ];
    
    const managedPlansData = [
        { plan: "MDM Lite", price: "R49/device", features: "Basic monitoring, alerts, and inventory", featured: false },
        { plan: "MDM Pro", price: "R99/device", features: "Full policy control + app deployment", featured: true },
        { plan: "MDM Enterprise", price: "Custom Quote", features: "MDM + Mobile Threat Defence + 24/7 Support", featured: false },
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
                        📱 Mobile Device Management (MDM)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Secure, Monitor & Control Every Device—Anywhere, Anytime
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                       With the rise of BYOD (Bring Your Own Device), remote work, and mobile-first teams, managing and securing mobile endpoints has never been more critical. NexusByte’s MDM solutions offer real-time visibility, policy control, and data protection across your smartphone, tablet, and laptop ecosystem.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Your workforce is mobile. Your security should be too.”
                    </motion.blockquote>
                </div>
            </div>

            {/* Why MDM Matters */}
            <Section title="🔍 Why MDM Matters">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Mobile devices are often the weakest link in enterprise security. A single unsecured phone can lead to data breaches, loss of IP, non-compliance, and phishing attacks. MDM provides centralised control, ensuring devices are configured, compliant, and protected at all times.
                </p>
            </Section>

            {/* What We Offer */}
            <Section title="🔧 What We Offer" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {whatWeOfferData.map((offering, index) => {
                        const Icon = offering.icon;
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
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{offering.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {offering.items.map((item, i) => (
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

            {/* Platforms & Use Cases */}
            <Section title="Platforms and Use Cases">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧱 Supported Platforms</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {platformSupportData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.os}</td>
                                            <td className="px-4 py-3 text-sm">{row.support}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🏭 Industry Use Cases</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.sector}</td>
                                            <td className="px-4 py-3 text-sm">{row.application}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* MDM-as-a-Service */}
            <Section title="💼 MDM-as-a-Service" className="bg-gray-50">
                <p className="text-center text-gray-600 mb-8">We provide fully managed MDM services or assist your IT team with implementation.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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
                            <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                            <div className="flex-grow mb-8">
                              <p className="text-sm font-semibold mb-2">Features:</p>
                              <p className="text-sm">{plan.features}</p>
                            </div>
                            <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                                {plan.price === 'Custom Quote' ? 'Contact Sales' : 'Choose Plan'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="🚀 Get Started with Secure Mobile Management" className="bg-nexusbyte-primary-dark" textWhite>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:mdm@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📧 Email: mdm@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="#" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Book a demo or readiness check
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default MdmPage;
