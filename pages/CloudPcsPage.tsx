

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, CpuChipIcon, UsersIcon, ShieldCheckIcon, LockClosedIcon, CommandLineIcon } from '../components/icons';

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


const CloudPcsPage: React.FC = () => {
    const whatWeOfferData = [
        { title: "Windows 365 Cloud PCs", icon: CpuChipIcon, items: ["Persistent desktops running Windows 11, accessible via browser or Remote Desktop", "Managed by Microsoft Intune for policy enforcement and updates", "Instant onboarding of new employees with ready-to-go desktops"] },
        { title: "Azure Virtual Desktop (AVD)", icon: UsersIcon, items: ["Multi-session Windows experience with full scalability", "GPU-enabled machines for intensive workloads (AI, CAD, design)", "Integration with Microsoft 365 and on-prem resources"] },
        { title: "Custom Virtual Machines (VMs)", icon: CommandLineIcon, items: ["Linux or Windows VMs hosted on NexusByte IaaS or Azure", "Custom configurations for web servers, dev environments, or apps", "Secure access via SSH, RDP, or browser-based gateways"] },
        { title: "Use-Case-Specific Cloud PC Templates", icon: CommandLineIcon, items: ["Developer Workstations: Pre-installed with VSCode, Git, Node.js, Docker", "Design Studio PCs: With Adobe CC, Figma, GPU rendering", "BPO/Support Machines: Locked-down, voice-enabled, secure browser"] },
        { title: "Security, Access & Monitoring", icon: LockClosedIcon, items: ["Zero Trust enforcement with MFA and conditional access", "Geo-fencing, session timeouts, and usage analytics", "Integration with MDM and endpoint protection tools"] },
    ];

    const useCasesData = [
        { role: "Remote Developers", solution: "Linux/Windows VM with Git, code editor" },
        { role: "Designers & Creatives", solution: "GPU Cloud PC with Adobe suite" },
        { role: "Executives", solution: "Persistent Windows 365 Cloud PC with M365 access" },
        { role: "Call Centres", solution: "AVD sessions with softphone, CRM, browser" },
    ];
    
    const whyNexusByteData = [
        "Microsoft CSP & Azure partner",
        "Fully managed desktops with Nova support",
        "POPIA & ISO-compliant data regions",
        "Rapid provisioning for scale-up or temporary workforce",
    ];

    const pricingData = [
        { plan: "Cloud PC Lite", cost: "R999", includes: "Windows 365 basic config, 2vCPU/4GB RAM", featured: false },
        { plan: "Dev/Design VM", cost: "R1,899", includes: "Custom spec VM, 4vCPU/16GB RAM, SSD, GPU-optional", featured: true },
        { plan: "BPO/Enterprise AVD", cost: "R2,499", includes: "Multi-session VM with app control, monitoring, lockdown mode", featured: false },
    ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <CpuChipIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Cloud PCs & Virtual Machines
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            NexusByte’s Cloud PC & Virtual Machine solutions deliver fully functional, secure desktops from the cloud—accessible from anywhere, on any device. Whether for developers, designers, knowledge workers, or call centre teams, we configure virtual environments to your exact needs.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Boot your office from the cloud—powerful, portable, protected."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <Section title="What We Offer" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whatWeOfferData.map((offering, index) => {
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
      
      {/* Use Cases Table Section */}
      <Section title="Use Cases">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Role / Industry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Cloud PC Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {useCasesData.map((item) => (
                <tr key={item.role} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.role}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section title="Pricing Plans (Indicative)" className="bg-gray-50" subtitle="Custom VM specs and billing (monthly/hourly) available.">
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
                    <p className={`text-3xl font-extrabold mb-1 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.cost}</p>
                    <p className={`text-sm mb-6 ${plan.featured ? 'text-gray-400' : 'text-gray-600'}`}>Monthly From</p>
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
      <Section title="Why NexusByte?">
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
      <Section title="Always-On Productivity, Everywhere" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="With NexusByte Cloud PCs, your team is no longer bound by hardware or location.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:cloudpc@nexusbyte.co.za?subject=Inquiry about Cloud PCs & Virtual Machines"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: cloudpc@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Request a custom VM deployment from Nova
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default CloudPcsPage;