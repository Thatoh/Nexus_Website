
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, CogIcon, UsersIcon, ChatBubbleLeftRightIcon, CloudArrowUpIcon, CpuChipIcon } from '../../../components/icons';

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

const ByBusinessNeedPage: React.FC = () => {

    const businessNeedsData = [
        { title: "Secure Growth & Compliance", icon: ShieldCheckIcon, items: ["POPIA, PCI DSS, FSCA-aligned solutions", "Document lifecycle management & role-based access", "Firewall management, encryption, and audit reporting"], idealFor: "Financial services, legal firms, government departments" },
        { title: "Operational Efficiency & Automation", icon: CogIcon, items: ["Workflow automation with Nova AI agents", "AI chatbots for internal and external support", "RPA tools for repetitive back-office tasks"], idealFor: "SMEs, contact centres, HR teams" },
        { title: "Remote Work & Workforce Mobility", icon: UsersIcon, items: ["Cloud PCs and virtual desktops", "Endpoint device compliance enforcement", "Secure remote access with Zero Trust and VPN"], idealFor: "Healthcare, education, field teams" },
        { title: "Customer Engagement & Experience", icon: ChatBubbleLeftRightIcon, items: ["Chatbots, omni-channel live chat, VoIP + CRM integration", "AI-led insights into customer behaviour and abandonment", "Web hosting with integrated WhatsApp and email automation"], idealFor: "Retail, e-commerce, SaaS companies" },
        { title: "Disaster Recovery & Business Continuity", icon: CloudArrowUpIcon, items: ["Real-time backups and encrypted replication", "DRaaS with geographic failover", "SOC alerts and automated Nova incident response"], idealFor: "All industries with mission-critical operations" },
        { title: "Modern Infrastructure & Scalability", icon: CpuChipIcon, items: ["Infrastructure-as-a-Service (IaaS) with cost-based scaling", "Cloud migration for ERP, HRIS, CRMs", "Unified network and device lifecycle control"], idealFor: "Growing organisations, enterprises, multi-branch entities" },
    ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <CogIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Use Cases by Business Need
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Digital transformation is not one-size-fits-all. Whether you're aiming for operational agility, regulatory compliance, stronger customer engagement, or rapid innovation—NexusByte aligns technology with your *business goals*, not just your tech stack.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Start with the need. Design with intention. Scale with confidence."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Business Needs Section */}
      <Section title="Business Needs We Solve" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {businessNeedsData.map((need, index) => {
                const Icon = need.icon;
                return (
                    <motion.div
                        key={need.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left h-full flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-nexusbyte-accent-green/10 p-3 rounded-lg">
                                <Icon className="w-8 h-8 text-nexusbyte-accent-green" />
                            </div>
                            <h3 className="text-xl font-bold text-nexusbyte-primary-dark">{need.title}</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 flex-grow mb-4">
                            {need.items.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto pt-4 border-t border-gray-200">
                             <p className="text-xs font-semibold text-gray-500">IDEAL FOR:</p>
                             <p className="text-sm text-gray-700">{need.idealFor}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section title="Choose By Need, Not Guesswork" className="bg-white">
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Nova can help assess your digital maturity and recommend a curated stack based on your business priorities, sector, and team setup.
        </p>
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
        >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about Business Need Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-primary-dark text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: solutions@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-500 text-sm">
                Or ask Nova to generate a stack based on your need.
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default ByBusinessNeedPage;
