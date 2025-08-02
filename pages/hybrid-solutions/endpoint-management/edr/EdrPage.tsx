

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, BriefcaseIcon, ChartPieIcon
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

const EdrPage: React.FC = () => {

    const whatWeDeliverData = [
        { icon: CpuChipIcon, title: "Intelligent Threat Detection", items: ["Behavioural analytics to spot suspicious activity (keylogging, lateral movement, etc.)", "AI-based detection of unknown threats", "Real-time alerts & risk scoring"] },
        { icon: CogIcon, title: "Automated Response & Containment", items: ["Auto-isolation of infected devices", "Remote command execution for incident response", "Remediation workflows (e.g., kill process, rollback, user lockout)"] },
        { icon: ChartPieIcon, title: "Threat Analytics Dashboard", items: ["Interactive attack timeline", "MITRE ATT&CK mapping", "Root cause analysis and IOC reporting", "Integration with SIEM & SOC platforms"] },
        { icon: BriefcaseIcon, title: "Forensics & Investigation", items: ["Full endpoint event logs", "File change tracking", "USB usage auditing", "Remote triage capabilities"] },
    ];
    
    const techStackData = [
        { platform: "Microsoft Defender for Endpoint", integration: "Deep integration with Microsoft 365 & Azure" },
        { platform: "SentinelOne", integration: "Autonomous AI-based EDR & rollback" },
        { platform: "CrowdStrike Falcon", integration: "Lightweight agent + SOC integration" },
        { platform: "Bitdefender GravityZone", integration: "Cost-effective EDR for SMBs" },
        { platform: "Nova AI Augment", integration: "Smart alert triaging + prioritisation" },
    ];

    const useCasesData = [
        { sector: "Finance", application: "Monitor ATM endpoints, detect fraudware" },
        { sector: "Legal", application: "Protect confidential case data on mobile endpoints" },
        { sector: "Healthcare", application: "Prevent ransomware on patient record systems" },
        { sector: "Retail", application: "Stop card-skimming malware on POS devices" },
        { sector: "Remote Workforce", application: "Detect unusual access patterns, USB risks" },
    ];

    const managedPlansData = [
        { plan: "EDR Lite", price: "R125 per device", features: "Basic detection + alerts", featured: false },
        { plan: "EDR Pro", price: "R199 per device", features: "Detection + auto-response + reporting", featured: true },
        { plan: "EDR Enterprise", price: "Custom Quote", features: "Full EDR + MDR (Managed Detection & Response) + Nova AI triage", featured: false },
    ];
    
    const fullStackData = ["Multi-Factor Authentication (MFA)", "Device Compliance & Remote Wipe", "OS + App Patch Management", "Policy enforcement + Zero Trust overlays"];

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
                        🛡️ Endpoint Detection & Response (EDR)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Real-Time Threat Visibility. Automated Response. Peace of Mind.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                       As cyberattacks grow in sophistication, traditional antivirus isn’t enough. NexusByte’s EDR solutions provide continuous monitoring, intelligent analysis, and automated response to endpoint threats across your entire environment—whether on-prem, remote, or hybrid.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “It’s not if—but when. EDR ensures you’re watching, learning, and reacting in real time.”
                    </motion.blockquote>
                </div>
            </div>

            {/* What is EDR? */}
            <Section title="🔍 What is EDR?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    EDR is a proactive endpoint security solution that detects suspicious behaviour, isolates threats, and allows security teams to investigate and neutralise attacks—before they spread.
                </p>
                <p className="text-md text-gray-600 mt-4 max-w-2xl mx-auto">Unlike legacy tools, EDR uses behavioural AI and forensic logging to catch: Fileless malware, Zero-day exploits, Ransomware in early execution stages, and Insider misuse.</p>
            </Section>

            {/* What We Deliver */}
            <Section title="🔧 What We Deliver" className="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {whatWeDeliverData.map((offering, index) => {
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

            {/* Tech Stack & Use Cases */}
            <Section title="Technology Stack & Use Cases">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧱 Technology Stack</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {techStackData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.platform}</td>
                                            <td className="px-4 py-3 text-sm">{row.integration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🏢 Use Cases Across Industries</h3>
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
            
            {/* EDR-as-a-Service */}
            <Section title="💼 EDR-as-a-Service (Managed)" className="bg-gray-50">
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

            {/* Beyond EDR */}
            <Section title="🔐 Beyond EDR: Full Endpoint Security Suite">
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">EDR forms part of our Secure Endpoint Stack, which includes:</p>
                <div className="flex flex-wrap justify-center gap-4">
                     {fullStackData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="🛡️ Ready to Detect and Defend?" className="bg-nexusbyte-primary-dark" textWhite>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:edr@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📧 Contact: edr@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="#" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Book an EDR Readiness Assessment
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default EdrPage;