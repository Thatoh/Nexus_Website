
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, CpuChipIcon, ShieldCheckIcon, UsersIcon } from '../../../components/icons';
import StandardHeroSection from '../../../components/StandardHeroSection';

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

const ManagedItPage: React.FC = () => {

    const coreFeaturesData = [
        { title: "24/7 Helpdesk & Remote Support", items: ["Instant support via ticket, call, or Nova AI assistant", "Remote desktop troubleshooting and resolution", "SLA-aligned escalation procedures"], icon: UsersIcon },
        { title: "Onsite Support (Optional)", items: ["Field engineers available for callouts", "Onsite troubleshooting for network or hardware issues", "User onboarding, workstation setup, printer and VoIP maintenance"], icon: CpuChipIcon },
        { title: "Monitoring & Proactive Management", items: ["Real-time monitoring of endpoints and servers", "Alert-based intervention before downtime hits", "Patching and OS updates scheduled during off-hours"], icon: CpuChipIcon },
        { title: "Security & Antivirus Management", items: ["Centralised AV/EDR policy management", "Monthly threat reports and incident logs", "Endpoint encryption, firewall and DNS filtering"], icon: ShieldCheckIcon },
        { title: "User Account & Access Management", items: ["Microsoft 365 / Google Workspace admin", "Password resets, MFA, permission changes", "Secure onboarding/offboarding with logs"], icon: UsersIcon },
    ];

    const idealForData = [
        { type: "Startups & SMEs", benefits: "No in-house IT needed – fully managed solution" },
        { type: "Growing Enterprises", benefits: "Supports hybrid & remote work models" },
        { type: "NGOs & Education", benefits: "Budget-conscious plans with robust coverage" },
    ];

    const pricingData = [
        { plan: 'Essential', price: 'R699 per user', includes: 'Helpdesk, remote support, antivirus', featured: false },
        { plan: 'Premium', price: 'R999 per user', includes: '+ Patch mgmt, onsite (1x/mo), monitoring', featured: true },
        { plan: 'Enterprise', price: 'Custom', includes: '+ SLA, full infra integration, custom tooling', featured: false },
    ];
    
    const addOns = ["VoIP setup & management", "Printer/scanner fleet management", "Onsite health checks & audits", "Nova integration for self-service IT support"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Managed IT Services"
        subtitle="Always-On Support That Grows With You"
        description="End-to-end IT support—from helpdesk to endpoint protection—so you can keep your team productive and your systems secure."
      >
        <div className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
          <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Think of us as your outsourced IT department—without the overhead."
          </blockquote>
        </div>
      </StandardHeroSection>

      {/* Core Features Section */}
      <Section title="Core Features" className="bg-gray-50">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreFeaturesData.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left h-full flex flex-col"
                    >
                        <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                        <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">{feature.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-600 flex-grow">
                            {feature.items.map((item, idx) => (
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
      
      {/* Ideal For Table Section */}
      <Section title="Ideal For">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Business Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {idealForData.map((item) => (
                <tr key={item.type} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.type}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section title="Pricing Options" className="bg-gray-50" subtitle="Volume discounts available for teams of 10+ users.">
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
                        {plan.price === 'Custom' ? 'Contact Sales' : 'Choose Plan'}
                    </button>
                </motion.div>
            ))}
        </div>
      </Section>
      
      {/* Optional Add-ons Section */}
      <Section title="Optional Add-ons">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {addOns.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center bg-nexusbyte-accent-green/5 p-3 rounded-md shadow-sm"
            >
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mr-3 flex-shrink-0" />
              <span className="text-sm text-nexusbyte-accent-green font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section title="Ready to Offload IT Headaches?" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Let us manage your IT while you manage your business.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:support@nexusbyte.co.za?subject=Inquiry about Managed IT Services"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Contact Us: support@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
             <p className="mt-6 text-gray-400 text-sm">Or request a custom proposal via Nova</p>
        </motion.div>
      </Section>
    </div>
  );
}

export default ManagedItPage;
