

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, CloudArrowUpIcon, BriefcaseIcon, UsersIcon } from '../../components/icons';

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

const BackupRecoveryPage: React.FC = () => {

    const whatWeOfferData = [
        { title: "Automated Cloud & Local Backups", icon: CloudArrowUpIcon, items: ["Daily, weekly, or real-time backup options", "Versioning, compression, and deduplication", "Local appliance + offsite encrypted backups"] },
        { title: "Rapid Recovery Systems", icon: BriefcaseIcon, items: ["Bare-metal restore and VM-level recovery", "File-level and granular restore points", "Cloud failover and image-based backup support"] },
        { title: "Business Continuity Planning (BCP)", icon: UsersIcon, items: ["Identify critical systems and RTO/RPO goals", "Custom disaster response playbooks", "Staff training and failover simulation testing"] },
        { title: "Compliance & Data Governance", icon: ShieldCheckIcon, items: ["POPIA, GDPR-aligned backup strategies", "Immutable backup storage options", "Backup audit logs and retention policy enforcement"] },
    ];

    const whoIsItForData = [
        { type: "SMEs & Startups", needs: "Protection from data loss, ransomware" },
        { type: "Schools & NGOs", needs: "Affordable backups for education systems" },
        { type: "Medical & Legal", needs: "Regulatory retention & rapid record access" },
    ];
    
    const addOnsData = [
        "Disaster recovery-as-a-service (DRaaS)",
        "Encrypted backup appliances",
        "365/Google Workspace mail & file backup",
        "Nova alerts for failed or pending jobs",
    ];

    const pricingData = [
        { plan: "Basic Backup", price: "R499/device", includes: "Cloud + local backups, 14-day retention", featured: false },
        { plan: "Pro BDR", price: "R1,299/device", includes: "+ DR restore, 30-day retention, BCP toolkit", featured: true },
        { plan: "Enterprise DR", price: "Custom", includes: "+ Hybrid failover, compliance, audit support", featured: false },
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
            Backup & Disaster Recovery
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Safeguard Your Data, Ensure Business Continuity. Our BDR solutions protect your critical data and ensure rapid recovery from disruption, system failure, or cyberattack.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "In today's world, recovery isn't optional—it’s essential."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <Section title="What We Offer" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
      
      {/* Who It's For Table Section */}
      <Section title="Who It's For">
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
      <Section title="Pricing Snapshot" className="bg-gray-50" subtitle="Data usage billed separately. Bulk and multi-site discounts available.">
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
          {addOnsData.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center bg-yellow-50 p-3 rounded-md shadow-sm"
            >
              <CheckIcon className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-yellow-800 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Want Zero Downtime Confidence?" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Protect your most important asset—your data.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:recovery@nexusbyte.co.za?subject=Inquiry about Backup & Disaster Recovery"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Contact Us: recovery@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
             <p className="mt-6 text-gray-400 text-sm">Schedule a free risk assessment with Nova.</p>
        </motion.div>
      </Section>
    </div>
  );
}

export default BackupRecoveryPage;