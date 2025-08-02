

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, UsersIcon, GlobeAltIcon, CommandLineIcon, LockClosedIcon, CpuChipIcon } from '../components/icons';

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string; textWhite?: boolean}> = ({ title, subtitle, children, className = 'py-16 md:py-20', textWhite }) => (
  <section className={`${className} px-4 sm:px-6 lg:px-8`}>
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${textWhite ? 'text-white' : 'text-nexusbyte-primary-dark'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto ${textWhite ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  </section>
);


const SecureRemoteAccessPage: React.FC = () => {
    const coreOfferingsData = [
        { title: "Zero Trust Access Control", icon: LockClosedIcon, items: ["Identity-first access enforced with MFA and conditional rules", "IP, location, and device-aware policy enforcement", "No implicit trust—every session is verified"] },
        { title: "VPN & Encrypted Tunnels", icon: ShieldCheckIcon, items: ["Enterprise-grade VPNs (OpenVPN, WireGuard, IPsec)", "Always-on tunnels with DNS leak prevention", "Split tunnelling configuration and kill-switch enforcement"] },
        { title: "Cloud Firewall & Web Filtering", icon: GlobeAltIcon, items: ["Secure web gateway enforcement (DNS-level protection)", "Block phishing, malware, and unsanctioned apps", "Real-time traffic monitoring and usage auditing"] },
        { title: "Device & Endpoint Compliance", icon: CommandLineIcon, items: ["Ensure only healthy and patched devices connect", "Enforce disk encryption, antivirus, and MDM policies", "Granular endpoint role policies and lockdown modes"] },
        { title: "Session Monitoring & Alerting", icon: CpuChipIcon, items: ["Real-time access logs and behaviour analytics", "Session recordings for admin tools or high-privilege apps", "Alerts for anomalies and failed attempts"] },
    ];

    const whoNeedsThisData = [
        { useCase: "Remote employees", risk: "Public WiFi exploits, weak credentials" },
        { useCase: "Developers", risk: "SSH & Git over VPN, source code theft" },
        { useCase: "Executives", risk: "Phishing, email hijack, device loss" },
        { useCase: "BPO/Call centres", risk: "Data leak, screen scraping" },
    ];
    
    const whyNexusByteData = [
        "Local and global VPN endpoints",
        "Nova AI-powered anomaly detection and alerts",
        "POPIA & ISO27001-aligned access design",
        "Unified access dashboard for admins and teams",
    ];

    const pricingData = [
        { plan: "Remote Basic", cost: "R249/user", includes: "VPN, MFA, activity logging", featured: false },
        { plan: "Secure Access Pro", cost: "R499/user", includes: "+ Cloud firewall, device posture control", featured: true },
        { plan: "Enterprise Zero Trust", cost: "R999/user", includes: "+ Full ZTNA, session recording, Nova alerts", featured: false },
    ];
    
    const implementationWorkflowData = [
        "Assessment", "Design", "Rollout", "User Training", "Ongoing Monitoring"
    ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <LockClosedIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Secure Remote Access
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            NexusByte’s Secure Remote Access solutions protect your digital assets while empowering users to work securely from any device or location. Whether you're accessing cloud apps or internal systems, we ensure every session is encrypted, authenticated, and monitored.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Mobility doesn’t need to be a vulnerability."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <Section title="Core Offerings" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreOfferingsData.map((offering, index) => {
                const Icon = offering.icon;
                return (
                    <motion.div
                        key={offering.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left h-full flex flex-col"
                    >
                        <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                        <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">{offering.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-600 flex-grow">
                            {offering.items.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                );
            })}
        </div>
      </Section>
      
      {/* Who Needs Secure Access Table Section */}
      <Section title="Who Needs Secure Access?">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Use Case</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Risk Prevented</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {whoNeedsThisData.map((item) => (
                <tr key={item.useCase} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.useCase}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      
       {/* Implementation Workflow Section */}
       <Section title="Implementation Workflow" className="bg-gray-50">
        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          <div className="relative flex justify-between">
            {implementationWorkflowData.map((step, index) => (
              <motion.div 
                key={step}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-nexusbyte-accent-green text-white font-bold flex items-center justify-center rounded-full z-10 ring-4 ring-gray-50">
                  {index + 1}
                </div>
                <p className="mt-4 text-xs font-semibold text-nexusbyte-primary-dark text-center w-28">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section title="Pricing Plans" subtitle="Custom pricing for >50 users and hybrid site rollouts.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12">
            {pricingData.map((plan, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative p-8 rounded-2xl flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.featured ? 'bg-nexusbyte-primary-dark text-white ring-4 ring-nexusbyte-accent-green' : 'bg-white text-gray-900 border'}`}
                >
                    <h3 className="text-2xl font-bold mb-3">{plan.plan}</h3>
                    <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.cost}</p>
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
      
      {/* Why NexusByte Section */}
      <Section title="Why NexusByte?" className="bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {whyNexusByteData.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center text-left bg-blue-50 p-4 rounded-lg shadow-sm"
            >
              <CheckIcon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-blue-800 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Let Them In, Only If They Belong" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Secure every remote session—no matter where it starts.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:remoteaccess@nexusbyte.co.za?subject=Inquiry about Secure Remote Access"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: remoteaccess@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Request your access security audit via Nova
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default SecureRemoteAccessPage;