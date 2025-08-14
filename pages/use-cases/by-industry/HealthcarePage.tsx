

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, UsersIcon, CloudArrowUpIcon, BriefcaseIcon, CpuChipIcon, LockClosedIcon, PhoneIcon } from '../../../components/icons';

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


const HealthcarePage: React.FC = () => {

    const solutionStackData = [
        { title: "POPIA-Ready IT Foundation", icon: LockClosedIcon, items: ["Cloud PCs for doctors, nurses, and admins with secure app access", "End-to-end encryption for file sharing and messaging", "Full compliance dashboards and data lifecycle auditing"] },
        { title: "Cybersecurity & Risk Mitigation", icon: ShieldCheckIcon, items: ["Email threat protection (ransomware, phishing, malware)", "Firewall management with Geo-fencing and Zero Trust principles", "Endpoint Detection & Response (EDR) across mobile and clinic devices", "Regular penetration testing and vulnerability scans"] },
        { title: "Infrastructure & Collaboration", icon: UsersIcon, items: ["Hosted VoIP for appointment scheduling and telehealth", "Unified messaging, chat, and internal communication tools", "Cloud storage and EMR system access across devices"] },
        { title: "Disaster Recovery & Data Integrity", icon: CloudArrowUpIcon, items: ["Daily offsite backup and restore services", "Emergency access protocols with audit trails", "High availability (HA) configurations for mission-critical systems"] },
        { title: "AI for Healthcare Efficiency", icon: CpuChipIcon, items: ["Chatbots for appointment booking and symptom triage", "Smart scheduling using calendar-aware Nova assistant", "Predictive alerting for system degradation or cyber events"] },
    ];

    const complianceStandardsData = ["POPIA (Protection of Personal Information Act)", "HPCSA Guidelines", "ISO/IEC 27001 for patient data", "Medical Schemes Act technical guidelines"];
    
    const whyNexusByteData = [
        "Healthcare digital transformation partner with POPIA audit readiness",
        "HIPAA-adjacent best practices in security and uptime",
        "Cloud PC provisioning for mobile field teams and rural clinics",
        "Local support and multi-device compatibility",
    ];

    const pricingData = [
        { plan: "HealthSecure", cost: "R2,499/user", includes: "Backup, encrypted chat, cloud PC, firewall", featured: false },
        { plan: "HealthSecure+", cost: "R4,499/user", includes: "+ VoIP, EMR cloud access, Zero Trust", featured: true },
        { plan: "HealthGov", cost: "Custom", includes: "Multi-site rollout, VPNs, EDR, Nova AI tools", featured: false },
    ];
    
    const keyChallengesData = ["Patient data privacy and POPIA compliance", "Mobile clinics and hybrid work environments", "Downtime sensitivity in clinical systems", "Lack of cybersecurity preparedness across public and private sectors"];

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
            Healthcare Use Case
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            In the high-pressure, data-sensitive world of healthcare, digital tools must be secure, compliant, and dependable. NexusByte delivers a healthcare-ready IT stack that empowers clinicians, admin staff, and mobile health teams to work safely, collaboratively, and efficiently.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "When care can’t pause—your technology shouldn’t either."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <Section title="Key Challenges in Healthcare IT">
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
      <Section title="NexusByte Solution Stack for Healthcare" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
      
      {/* Compliance Alignment Section */}
      <Section title="Healthcare Compliance Alignment">
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
      
      {/* Indicative Plans Section */}
      <Section title="Indicative Plans" className="bg-gray-50">
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
      <Section title="Why NexusByte for Healthcare?">
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
      <Section title="Modernise Your Practice" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Contact our healthcare specialists for a confidential needs assessment.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:healthcare@nexusbyte.co.za?subject=Inquiry about Healthcare Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: healthcare@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Ask Nova to generate your digital health readiness checklist.
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default HealthcarePage;
