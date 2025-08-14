

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, BriefcaseIcon, CpuChipIcon, PuzzlePieceIcon, CloudArrowUpIcon, UsersIcon, CogIcon } from '../../../components/icons';

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


const OperationalEfficiencyPage: React.FC = () => {

    const solutionStackData = [
        { title: "Workflow Automation with AI Agents", icon: CpuChipIcon, items: ["Nova AI agents embedded in daily tasks and approvals", "Automated triggers for client onboarding, support resolution, task delegation", "RPA (Robotic Process Automation) for repetitive data entry and document processing"] },
        { title: "Smart Document & Knowledge Management", icon: BriefcaseIcon, items: ["Version-controlled, cloud-based document libraries", "AI-driven document summarisation, Q&A, and tagging", "Secure e-signatures and workflow approvals"] },
        { title: "Unified Platforms & Integrations", icon: PuzzlePieceIcon, items: ["Seamless integration with CRMs, HRMS, accounting, and project tools", "Single dashboard for task flows, project statuses, and escalations", "Email, VoIP, and chat streamlined in one interface"] },
        { title: "Cloud Productivity Tools", icon: CloudArrowUpIcon, items: ["Microsoft 365 and Google Workspace deployment & support", "Centralised access control with real-time activity tracking", "Data loss prevention policies and access auditing"] },
        { title: "Team Enablement & Monitoring", icon: UsersIcon, items: ["Time tracking, workload balancing, and AI task summarisation", "Daily reports, team check-ins, and Slack-like comms integrations", "Device management and access governance for hybrid teams"] },
    ];

    const idealForData = [
        { useCase: "SMEs scaling their team operations" },
        { useCase: "Contact centres and service-based businesses" },
        { useCase: "Legal, accounting, and admin-heavy teams" },
        { useCase: "Multi-location teams with workflow dependencies" },
    ];

    const whyNexusByteData = [
        "AI-embedded operations that reduce friction",
        "Proven automation strategies with measurable ROI",
        "POPIA-compliant data flows and access control",
        "Support across all major productivity and ERP platforms",
    ];

    const pricingData = [
        { plan: "OpsBoost Lite", cost: "R1,499/user", includes: "Workflow automation, shared docs, MS365 setup", featured: false },
        { plan: "OpsBoost AI", cost: "R2,999/user", includes: "+ Nova AI agents, RPA triggers, cloud security", featured: true },
        { plan: "OpsBoost Enterprise", cost: "Custom", includes: "+ Cross-system integrations, custom dashboards, support SLAs", featured: false },
    ];
    
    const keyChallengesData = ["Time-intensive manual processes across departments", "Disconnected tools and lack of data visibility", "Rising operational costs from IT bloat and duplication", "Inefficient internal communications and delayed task execution"];

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
            Operational Efficiency & Automation
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            In a landscape where agility and speed determine competitiveness, operational efficiency is your edge. NexusByte empowers organisations to streamline processes, automate repetitive tasks, and enable teams to focus on high-value outcomes—powered by AI, integrations, and secure cloud architecture.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "When manual stops, innovation starts."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <Section title="Key Operational Challenges">
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
      <Section title="NexusByte Automation & Efficiency Stack" className="bg-gray-50">
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
      
      {/* Ideal For Section */}
      <Section title="Ideal For">
         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {idealForData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center text-left bg-gray-100 p-4 rounded-lg"
            >
              <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3 flex-shrink-0" />
              <p className="text-gray-800">{item.useCase}</p>
            </motion.div>
          ))}
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
      <Section title="Why NexusByte for Operational Efficiency?">
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
      <Section title="Ready to Optimize Your Operations?" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Contact our automation specialists to find opportunities for efficiency in your business.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:ops@nexusbyte.co.za?subject=Inquiry about Operational Efficiency Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: ops@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Ask Nova to audit your current workflows for automation opportunities.
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default OperationalEfficiencyPage;
