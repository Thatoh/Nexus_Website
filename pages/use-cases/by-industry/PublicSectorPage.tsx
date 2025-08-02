

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, UsersIcon, CloudArrowUpIcon, BriefcaseIcon, CpuChipIcon, HomeIcon } from '../../../components/icons';

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


const PublicSectorPage: React.FC = () => {

    const solutionStackData = [
        { title: "Infrastructure Modernisation & Cloud Migration", icon: CloudArrowUpIcon, items: ["On-prem to cloud migration of finance, HR, and citizen systems", "Azure Government-ready configurations", "Cloud PCs and virtual desktops for distributed departments"] },
        { title: "Cybersecurity & Data Sovereignty", icon: ShieldCheckIcon, items: ["Firewall and Zero Trust enforcement across departments", "Endpoint Detection & Response for laptops, desktops, and kiosks", "Secure email and document lifecycle protection", "Local POPIA-compliant hosting with sovereignty options"] },
        { title: "Digital Citizen Services", icon: UsersIcon, items: ["Secure, scalable hosting of e-portals and application platforms", "Chatbot assistants for form submissions, service requests, or helpdesks", "WhatsApp and voice channel integration for community engagement"] },
        { title: "Business Continuity & Resilience", icon: BriefcaseIcon, items: ["Offsite backups and disaster recovery with RTO/RPO alignment", "Real-time incident detection and Nova AI notifications", "SOC-as-a-Service for real-time threat mitigation"] },
    ];

    const complianceStandardsData = ["POPIA (Protection of Personal Information Act)", "SITA guidelines and SLAs", "ISO 27001 for information security", "MFMA & PFMA ICT compliance principles"];
    
    const whyNexusByteData = [
        "Local infrastructure expertise aligned with government SLAs",
        "POPIA-by-design systems with high security governance",
        "AI-powered service support through Nova agent",
        "Proven scalability across national and local department levels",
    ];

    const pricingData = [
        { plan: "CivicCloud Basic", cost: "R2,999/site", includes: "Secure web hosting, backups, email protection", featured: false },
        { plan: "GovSecure+", cost: "R5,999", includes: "+ EDR, firewall, Zero Trust, chatbot assistant", featured: true },
        { plan: "DigitalGov Suite", cost: "R9,999+", includes: "+ SOC-as-a-Service, full IT refresh & cloud migration", featured: false },
    ];
    
    const keyChallengesData = ["Legacy IT infrastructure and paper-based processes", "Limited internal cybersecurity capacity", "POPIA and government data classification compliance", "Remote access for field workers and mobile units"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <HomeIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Public Sector Use Case
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Public sector organisations require digital systems that are secure, transparent, and efficient—while staying compliant with national regulations. NexusByte provides resilient cloud and cybersecurity infrastructure for municipalities, departments, and government agencies, enabling modern citizen services.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Digital transformation that respects budgets and earns citizen trust."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <Section title="Key Challenges in the Public Sector">
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
      <Section title="NexusByte Solution Stack for the Public Sector" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
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
      
      {/* Regulatory Frameworks Section */}
      <Section title="Regulatory Frameworks Addressed">
        <div className="flex flex-wrap justify-center gap-4 mt-8">
            {complianceStandardsData.map((standard, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
                >
                    {standard}
                </motion.div>
            ))}
        </div>
      </Section>
      
      {/* Indicative Packages Section */}
      <Section title="Indicative Packages" className="bg-gray-50">
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
      <Section title="Why NexusByte?">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {whyNexusByteData.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center text-left bg-green-50 p-4 rounded-lg shadow-sm"
            >
              <CheckIcon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-green-800 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Modernize Public Service Delivery" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Contact our public sector specialists for a confidential discussion about your department's needs.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:gov@nexusbyte.co.za?subject=Inquiry about Public Sector Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: gov@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Ask Nova to run a digital maturity audit for your department.
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default PublicSectorPage;
