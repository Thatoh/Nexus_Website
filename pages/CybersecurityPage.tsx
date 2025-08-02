
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, CpuChipIcon, UsersIcon, LockClosedIcon, ChartPieIcon } from '../components/icons';

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


const CybersecurityPage: React.FC = () => {
    const coreOfferingsData = [
        { title: "Firewall Management (Cloud & On-Prem)", icon: ShieldCheckIcon, items: ["Next-gen firewall configuration & monitoring", "Application-level filtering, deep packet inspection", "Integration with SD-WAN, VPNs, and multi-site environments", "Cisco, Fortinet, Sophos, and MikroTik supported"] },
        { title: "Endpoint Detection & Response (EDR)", icon: CpuChipIcon, items: ["Behavioural analysis and anomaly detection", "AI-powered EDR agents for Windows/macOS/Linux", "Response playbooks, isolation, and rollback features", "Threat intelligence feeds & IOC enrichment"] },
        { title: "Email Threat Protection", icon: ShieldCheckIcon, items: ["Phishing, spoofing, and malware detection", "Microsoft 365 & Google Workspace protection overlays", "SPF, DKIM, DMARC enforcement", "Real-time quarantine and user self-service portals"] },
        { title: "Penetration Testing & Vulnerability Scans", icon: ShieldCheckIcon, items: ["Internal and external network testing", "Web app & API pen testing", "OWASP-aligned reports with remediation plans", "Optional red-team simulations"] },
        { title: "Security Operations Centre (SOC-as-a-Service)", icon: UsersIcon, items: ["24/7 monitoring of SIEM data (Sentinel, Splunk, etc.)", "Alert correlation, triage, and escalation", "Threat hunting & incident response support", "Monthly reporting and live dashboards"] },
        { title: "Zero Trust & SASE Frameworks", icon: LockClosedIcon, items: ["Identity-based segmentation and access control", "Secure Access Service Edge (SASE) rollouts", "Policy enforcement across users, devices, and locations", "MFA, conditional access, and telemetry-based policies"] },
    ];

    const whoIsItForData = [
        { type: "Finance & Legal", needs: "Compliance, ransomware, secure endpoints" },
        { type: "Retail & eCommerce", needs: "Web firewalling, payment gateway protection" },
        { type: "Education", needs: "Identity management, device lockdown" },
        { type: "Remote Teams", needs: "SASE-based Zero Trust controls" },
    ];
    
    const valueAddsData = [
        "POPIA & GDPR aligned",
        "Nova AI integration for breach alerts & SOC queries",
        "Weekly threat briefs + remediation checklists",
        "Local data centre routing for faster enforcement",
    ];

    const pricingData = [
        { plan: "Secure Basic", price: "R1,499", includes: "NGFW + Email Threat Protection", featured: false },
        { plan: "Business Secure", price: "R3,499", includes: "+ EDR, VPN, monthly scans", featured: true },
        { plan: "Enterprise Secure", price: "R6,999", includes: "+ Pen Testing, SOC, Zero Trust enforcement", featured: false },
    ];

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
            Cybersecurity & Cloud Firewalls
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            NexusByte’s Cybersecurity Solutions combine next-gen firewall protection, proactive threat detection, and Zero Trust architecture to help businesses defend against the evolving threat landscape—all locally managed and globally aligned.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Security isn’t a checkbox—it’s a continuous shield around your digital operations."
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
      
      {/* Who Should Use This Table Section */}
      <Section title="Who Should Use This">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Organisation Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Needs Addressed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {whoIsItForData.map((item) => (
                <tr key={item.type} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.type}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.needs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section title="Packages & Pricing (Indicative)" className="bg-gray-50" subtitle="Volume pricing & MSP white-labelling available.">
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
                    <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
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
      
      {/* Value Adds Section */}
      <Section title="Value Adds">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {valueAddsData.map((item, index) => (
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
      <Section title="Stay Secure with NexusByte" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="From small teams to large enterprises, our Cybersecurity Solutions scale with your needs—without compromise.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:security@nexusbyte.co.za?subject=Inquiry about Cybersecurity Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: security@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Get a free security posture assessment via Nova
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default CybersecurityPage;
