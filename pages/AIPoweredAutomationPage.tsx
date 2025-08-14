

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, CpuChipIcon, ArrowRightIcon, UsersIcon, BriefcaseIcon, CogIcon, BoltIcon, LightBulbIcon } from '../components/icons'; // Removed DocumentTextIcon, will use BriefcaseIcon

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string; titleClassName?: string; subtitleClassName?: string; textWhite?: boolean}> = 
  ({ title, subtitle, children, className = 'py-16 md:py-20', titleClassName = 'text-3xl md:text-4xl font-bold mb-4', subtitleClassName = 'text-lg md:text-xl mb-10 max-w-3xl mx-auto', textWhite }) => (
  <section className={`${className} px-4 sm:px-6 lg:px-8`}>
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={`${titleClassName} ${textWhite ? 'text-white' : 'text-nexusbyte-primary-dark'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${subtitleClassName} ${textWhite ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  </section>
);

// Core Capability Card
const CoreCapabilityCard: React.FC<{title: string; items: string[]; icon: React.FC<React.SVGProps<SVGSVGElement>>; index: number}> = ({ title, items, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left h-full flex flex-col"
    >
        <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
        <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">{title}</h3>
        <ul className="space-y-2 text-sm text-gray-600 flex-grow">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                    <CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);


// Pricing Plan Card
const PlanCard: React.FC<{plan: any; index: number}> = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`p-8 rounded-xl shadow-xl flex flex-col h-full ${
      plan.featured
        ? 'bg-nexusbyte-primary-dark text-white ring-2 ring-nexusbyte-accent-green'
        : 'bg-gray-100 text-nexusbyte-primary-dark'
    }`}
  >
    <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-primary-dark'}`}>{plan.name}</h3>
    {plan.description && <p className={`text-sm mb-4 ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>}
    <p className={`text-4xl font-extrabold mb-1 ${plan.featured ? 'text-white' : 'text-nexusbyte-primary-dark'}`}>{plan.price}</p>
    {plan.subPrice && <p className={`text-sm mb-6 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.subPrice}</p>}
    
    <ul className="space-y-3 text-sm mb-8 flex-grow">
      {plan.features.map((feature: string, i: number) => (
        <li key={i} className="flex items-start">
          <CheckIcon className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      to={plan.ctaLink || "/contact"}
      state={plan.ctaLinkState || { subject: `Inquiry about ${plan.name} Plan` }}
      className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200
        ${plan.featured 
          ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80' 
          : 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80'}`}
    >
      {plan.ctaText || "Choose Plan"}
    </Link>
  </motion.div>
);


const AIPoweredAutomationPage: React.FC = () => {

  const coreCapabilitiesData = [
    { title: "Workflow & Process Automation", icon: CogIcon, items: ["Automate multi-step approvals (HR, finance, compliance)", "Cross-platform task orchestration (Slack, MS365, ERP, etc.)", "Document processing & validation", "Integration with CRMs, ticketing systems, and BI tools"] },
    { title: "Document & Knowledge Automation", icon: BriefcaseIcon, items: ["Contract analysis, summarisation, and risk flagging", "Auto-tagging and classification of internal documents", "POPIA and GDPR redaction bots", "Knowledge base population from PDFs, emails, and databases"] }, // Changed DocumentTextIcon to BriefcaseIcon
    { title: "Robotic Process Automation (RPA)", icon: BoltIcon, items: ["Low-code bots for data entry, reconciliation, and syncing", "Scrape + interpret reports, invoices, or emails", "System-to-system communication without human trigger"] },
    { title: "AI Agents for Business Units", icon: UsersIcon, items: ["Finance: Automate reconciliations, expense reports, budget checks", "HR: Onboarding flows, leave processing, policy FAQs", "Legal: NDA reviews, clause comparisons, compliance alerts", "IT: User provisioning, password resets, monitoring triggers"] },
    { title: "Intelligent Decision Support", icon: LightBulbIcon, items: ["Predictive models to assist human decisions", "AI-generated recommendations for routing, prioritising, flagging", "Real-time dashboards to track automated operations"] }
  ];
  

  const plansData = [
    { name: 'Automation Starter', price: 'R3,200/month', features: ["2 automated workflows", "Up to 1,000 process triggers", "Email or MS365 integration", "No-code automation dashboard"], featured: false },
    { name: 'OpsBot Lite', price: 'R6,500/month', features: ["5+ workflows across departments", "Document handling + approvals", "Webhook/API triggers", "Slack, WhatsApp, or Teams integration", "Daily usage report"], featured: true },
    { name: 'Cognitive Suite', price: 'R14,000/month', features: ["10+ AI-powered processes", "Intelligent document AI + OCR", "RPA script deployment", "On-premise or hybrid deployment", "SSO-enabled dashboards"], featured: false },
    { name: 'Enterprise Automation Grid', price: 'Custom Pricing', features: ["50+ automations across systems", "Multi-agent task orchestration", "Internal + external system integration", "LLM fine-tuning for logic-based workflows", "24/7 SLA, custom triggers, audits, analytics"], featured: false, ctaText: "Contact Sales" },
  ];

  const whyChooseUsData = [
    "Unified across AI + RPA + API layers",
    "Tailored to South African regulatory and operational realities",
    "Scalable—from a single onboarding flow to enterprise orchestration",
    "Human-in-the-loop (HITL) support for all sensitive tasks",
    "Real-time observability & governance built-in"
  ];

  const whatCanYouAutomateData = [
    "Leave approvals", "Compliance email responses", "SLA violation alerts", "Invoice processing", "Client onboarding forms", "Escalation triggers from CRM/ERP", "Internal document classification", "Audit preparation workflows", "Knowledgebase updates"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nexusbyte-primary-dark via-gray-800 to-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <BoltIcon className="absolute top-1/4 left-1/4 w-48 h-48 text-gray-700 transform rotate-12" />
          <CogIcon className="absolute bottom-1/4 right-1/4 w-40 h-40 text-gray-600 transform -rotate-6" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            AI-Powered Automation
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8"
          >
            Streamline operations, cut costs, and amplify productivity by embedding intelligent agents into your everyday workflows.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
          >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about AI-Powered Automation Solutions"
              className="px-8 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Explore Automation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
       <Section title="Overview" 
               subtitle="We combine AI agents, APIs, RPA (robotic process automation), and intelligent workflows to replace repetitive, rule-based tasks with cognitive, learning systems that scale with your business.">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-nexusbyte-accent-green">
            <blockquote className="text-xl italic text-gray-700 leading-relaxed">
            "Automation isn’t just about speed—it’s about freeing your team to focus on impact."
            </blockquote>
        </motion.div>
      </Section>
      
      {/* Core Automation Capabilities Section */}
      <Section title="Core Automation Capabilities" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {coreCapabilitiesData.map((capability, index) => (
            <CoreCapabilityCard key={capability.title} title={capability.title} items={capability.items} icon={capability.icon} index={index} />
          ))}
        </div>
      </Section>

      {/* Product Options & Packages Section */}
      <Section title="Product Options & Packages">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch"> {/* Adjusted for 4 cards */}
          {plansData.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
         <p className="mt-8 text-sm text-gray-500">Custom enterprise packages available. Contact us for tailored solutions.</p>
      </Section>
      
      {/* Why NexusByte for Automation? Section */}
      <Section title="Why NexusByte for Automation?" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12 text-left max-w-3xl mx-auto">
          {whyChooseUsData.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start"
            >
              <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What Can You Automate? Section */}
      <Section title="What Can You Automate?">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
          {whatCanYouAutomateData.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center bg-nexusbyte-accent-green/5 p-3 rounded-md shadow-sm"
            >
              <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mr-2 flex-shrink-0" />
              <span className="text-sm text-nexusbyte-accent-green font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Let’s Automate It" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Email us to explore where AI-powered automation can save your team hours, reduce risk, and modernise your operations. You dream it. Nova automates it.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about AI-Powered Automation Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: solutions@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
        </motion.div>
      </Section>
    </div>
  );
};

export default AIPoweredAutomationPage;
