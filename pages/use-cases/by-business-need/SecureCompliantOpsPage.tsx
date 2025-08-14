

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, UsersIcon, CloudArrowUpIcon, BriefcaseIcon, CpuChipIcon, LockClosedIcon } from '../../../components/icons';

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


const SecureCompliantOpsPage: React.FC = () => {

    const solutionStackData = [
        { title: "Compliance-Centric IT Architecture", icon: BriefcaseIcon, items: ["POPIA-aligned systems for data minimisation, consent, and access", "PCI DSS firewall configurations and encryption layers", "Audit logs, version control, and data retention policy enforcement"] },
        { title: "Risk Mitigation & Threat Management", icon: ShieldCheckIcon, items: ["Security Operations Centre (SOC) for real-time incident detection", "Endpoint Detection & Response (EDR) for all connected devices", "Internal & external vulnerability assessments"] },
        { title: "Data Governance & Lifecycle Management", icon: LockClosedIcon, items: ["Role-based access and document versioning", "Email encryption, secure backups, and DLP policies", "Offboarding protocols and data erasure compliance"] },
        { title: "Incident Response & Reporting Frameworks", icon: CpuChipIcon, items: ["Incident playbooks for ransomware, phishing, and data loss", "OWASP-aligned risk reporting with remediation actions", "Optional red-teaming and penetration testing for high-risk sectors"] },
    ];

    const sectorFrameworksData = [
        { sector: "Finance", standards: "POPIA, FSCA, PCI DSS" },
        { sector: "Healthcare", standards: "POPIA, HPCSA, ISO27001" },
        { sector: "Public Sector", standards: "SITA SLAs, POPIA, MFMA/PFMA" },
        { sector: "E-Commerce", standards: "POPIA, PCI DSS, CPA" },
    ];

    const whyNexusByteData = [
        "Compliance-by-design approach",
        "South African regulatory expertise",
        "Real-time threat monitoring and reporting",
        "Nova AI agent for security alerts, document audits, and compliance coaching",
    ];

    const pricingData = [
        { plan: "SecureOps Basic", cost: "R2,499", includes: "POPIA controls, access logs, email security", featured: false },
        { plan: "SecureOps Pro", cost: "R4,999", includes: "+ EDR, backups, incident response, audits", featured: true },
        { plan: "SecureOps Suite", cost: "Custom", includes: "+ Full compliance support, SOC, penetration testing", featured: false },
    ];
    
    const keyChallengesData = ["Lack of internal controls and audit trails", "Non-compliance with POPIA, PCI DSS, FSCA, ISO27001", "Inadequate protection of personal, financial, or sensitive data", "No clear remediation or incident response plans"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ShieldCheckIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Secure & Compliant Operations Use Case
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            For modern organisations, compliance and security aren't checkboxes—they're lifelines. NexusByte delivers secure-by-design digital operations, embedding legal readiness, risk management, and data governance at every layer of your stack.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Compliance isn't a cost. It's the currency of trust."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <Section title="Common Challenges">
        <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {keyChallengesData.map((challenge, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start text-left bg-red-50 p-4 rounded-lg shadow-sm border-l-4 border-red-400"
                >
                    <span className="text-red-500 font-bold text-xl mr-4 mt-1">!</span>
                    <p className="text-gray-700">{challenge}</p>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Solution Stack Section */}
      <Section title="NexusByte Secure & Compliant Stack" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 mt-12">
            {solutionStackData.map((offering, index) => {
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
                                    <CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                );
            })}
        </div>
      </Section>
      
      {/* Sector-Specific Frameworks Section */}
      <Section title="Sector-Specific Legal Framework Alignment">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Sector</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Standards & Acts Addressed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sectorFrameworksData.map((item) => (
                <tr key={item.sector} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.sector}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.standards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      
      {/* Suggested Packages Section */}
      <Section title="Suggested Packages" className="bg-gray-50">
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
                        {plan.cost === 'Custom' ? 'Contact Sales' : 'Choose Plan'}
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
              className="flex items-center text-left bg-nexusbyte-accent-green/5 p-4 rounded-lg shadow-sm"
            >
              <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3 flex-shrink-0" />
              <span className="text-sm text-nexusbyte-accent-green font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Build Trust, Stay Compliant, Operate Securely" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Contact our compliance specialists for a consultation.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:compliance@nexusbyte.co.za?subject=Inquiry about Secure & Compliant Operations"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: compliance@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Ask Nova to scan your system for compliance gaps.
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default SecureCompliantOpsPage;
