

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, LockClosedIcon, BriefcaseIcon, CurrencyDollarIcon
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

const MfaPage: React.FC = () => {

    const whatWeOfferData = [
        { icon: LockClosedIcon, title: "Adaptive Multi-Factor Authentication", items: ["Push notifications (via Microsoft Authenticator, Duo, etc.)", "OTPs (one-time passwords via SMS, email, or app)", "Biometric authentication (fingerprint/face)", "Hardware tokens (FIDO2/U2F keys)"] },
        { icon: CpuChipIcon, title: "AI-Enhanced Risk-Based Authentication", items: ["Nova AI monitors login attempts and flags anomalies in real-time", "Block logins from TOR or geo-anomalies", "Step-up MFA when login pattern is unusual", "Contextual alerts for IT teams"] },
        { icon: UsersIcon, title: "Seamless User Experience", items: ["Designed with users in mind—our MFA solutions balance strong protection with low friction.", "Single Sign-On (SSO) integrations", "Self-service MFA enrolment portals", "Customisable policies for different user tiers (execs, devs, temps)"] },
    ];
    
    const techStackData = [
        { platform: "Microsoft Entra ID (Azure AD)", description: "Native MFA + conditional access" },
        { platform: "Duo Security (Cisco)", description: "Trusted by enterprises, easy for users" },
        { platform: "Okta Adaptive MFA", description: "Ideal for hybrid-cloud environments" },
        { platform: "YubiKey + FIDO2", description: "Hardware key-based authentication" },
        { platform: "Nova AI", description: "Risk analysis + automated enforcement" },
    ];

    const useCasesData = [
        { industry: "Finance", example: "MFA required for all transactions + admin access" },
        { industry: "Healthcare", example: "Biometric MFA for clinicians + device authentication" },
        { industry: "Legal", example: "Document vault access gated with MFA & IP whitelist" },
        { industry: "Public Sector", example: "Citizen portals with token-based 2FA" },
        { industry: "Education", example: "MFA for student portals, faculty remote access" },
    ];

    const integrationOptions = ["Office 365 / Microsoft 365", "VPN, VDI & Remote Desktop", "Azure Virtual Desktop (AVD) & Windows 365", "CRM & ERP Systems (e.g., SAP, Salesforce)", "Email platforms (e.g., Exchange, Google Workspace)"];

    const managedPlansData = [
        { tier: "Starter", users: "1–25", features: "OTP + basic risk policy + SSO", featured: false },
        { tier: "Business", users: "26–250", features: "Adaptive MFA + app integrations", featured: true },
        { tier: "Enterprise", users: "251+", features: "Full Nova AI integration + token support + audit trails", featured: false },
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
                        🔐 Multi-Factor Authentication (MFA)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Lock Down Access. Empower Confidence.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                       MFA is the cornerstone of modern endpoint security—ensuring that even if credentials are compromised, unauthorised access remains blocked. NexusByte provides robust, scalable, and user-friendly MFA solutions to help businesses mitigate identity threats across hybrid environments.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Your password isn’t enough. Protect access with a second layer that hackers can’t steal.”
                    </motion.blockquote>
                </div>
            </div>

            {/* Why MFA is Non-Negotiable */}
            <Section title="💡 Why MFA Is Non-Negotiable">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    With remote work, BYOD, and cloud apps now standard, the attack surface has exploded. MFA drastically reduces the risk of: Credential theft, Phishing attacks, Ransomware infiltration, and Unauthorised system access.
                </p>
            </Section>

            {/* What We Offer */}
            <Section title="🧰 What We Offer" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            {/* Tech Stack & Use Cases */}
            <Section title="Technology Stack & Use Cases">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🛠 Technology Stack & Partners</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {techStackData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.platform}</td>
                                            <td className="px-4 py-3 text-sm">{row.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧪 Use Cases by Industry</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {useCasesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-4 py-3 font-medium">{row.industry}</td>
                                            <td className="px-4 py-3 text-sm">{row.example}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* MFA-as-a-Service */}
            <Section title="📦 MFA-as-a-Service" className="bg-gray-50">
                 <p className="text-center text-gray-600 mb-8">Scale your security with our monthly managed MFA plans.</p>
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
                            <h3 className="text-2xl font-bold mb-3">{plan.tier}</h3>
                            <p className={`text-lg mb-6 ${plan.featured ? 'text-gray-400' : 'text-gray-600'}`}>{plan.users} Users</p>
                            <div className="flex-grow mb-8">
                              <p className="text-sm font-semibold mb-2">Features:</p>
                              <p className="text-sm">{plan.features}</p>
                            </div>
                            <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Combined Power Section */}
            <Section title="🔐 MFA + Endpoint Security = Resilience">
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">MFA is most powerful when deployed alongside EDR (Endpoint Detection & Response), Device compliance enforcement, Zero-trust access policies, and Remote lock + wipe controls. NexusByte combines these into a cohesive hybrid security stack.</p>
            </Section>
            
            {/* CTA Section */}
            <Section title="👣 Get Started" className="bg-nexusbyte-primary-dark" textWhite>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:mfa@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📧 Email: mfa@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="#" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Book your MFA consultation
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default MfaPage;
