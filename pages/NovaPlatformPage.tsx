
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, CpuChipIcon, ArrowRightIcon, PuzzlePieceIcon, BoltIcon, CommandLineIcon, LockClosedIcon, UsersIcon } from '../components/icons';

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

const NovaPlanCard: React.FC<{plan: any; index: number}> = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`p-8 rounded-xl shadow-xl flex flex-col h-full ${
      plan.name === 'Nova Edge' 
        ? 'bg-nexusbyte-primary-dark text-white ring-2 ring-nexusbyte-accent-green'
        : 'bg-gray-100 text-nexusbyte-primary-dark'
    }`}
  >
    <h3 className={`text-2xl font-bold mb-2 ${plan.name === 'Nova Edge' ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-primary-dark'}`}>{plan.name}</h3>
    <p className={`text-4xl font-extrabold my-4 ${plan.name === 'Nova Edge' ? 'text-white' : 'text-nexusbyte-primary-dark'}`}>{plan.price}</p>
    
    <ul className="space-y-3 text-sm mb-8 flex-grow">
      {plan.features.map((feature: string, i: number) => (
        <li key={i} className="flex items-start">
          <CheckIcon className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.name === 'Nova Edge' ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      to={plan.ctaLink || "/contact"}
      state={plan.ctaLinkState}
      className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200
        ${plan.name === 'Nova Edge' 
          ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80' 
          : 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80'}`}
    >
      {plan.ctaText}
    </Link>
  </motion.div>
);

const capabilityIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  "Agentic AI Framework": CommandLineIcon,
  "Multimodal Processing": CpuChipIcon,
  "Dynamic Prompt Orchestration": BoltIcon,
  "Enterprise-Grade Security": LockClosedIcon,
  "Modular Integrations": PuzzlePieceIcon,
};


const NovaPlatformPage: React.FC = () => {

  const capabilitiesData = [
    { title: "Agentic AI Framework", description: "Design and run autonomous agents that reason, interact with systems, call APIs, analyse documents, and execute commands across platforms." },
    { title: "Multimodal Processing", description: "Nova supports text, voice, image, and document-based interactions using foundational models trained for vision + language." },
    { title: "Dynamic Prompt Orchestration", description: "Custom workflows adapt based on input context, agent memory, or user role—ideal for legal, finance, and customer service use cases." },
    { title: "Enterprise-Grade Security", description: "End-to-end encrypted, with support for role-based access control, audit logging, AI usage tracking & analytics, and POPIA/GDPR compliance modules." },
    { title: "Modular Integrations", description: "From SQL databases to SharePoint, Nova can be trained on and respond from structured + unstructured enterprise knowledge sources." },
  ];

  const plansData = [
    { name: 'Nova Lite', price: 'R2,500/month', features: ['1 AI agent', '500 monthly interactions', 'Hosted by NexusByte', 'Custom knowledge base (PDFs, URLs)', 'Website or Teams deployment'], ctaText: 'Choose Lite' },
    { name: 'Nova Core', price: 'R6,800/month', features: ['Up to 3 AI agents', '2,000 monthly interactions', 'App integrations (CRM, Slack, SharePoint)', 'Document-based reasoning (RAG)', 'Analytics dashboard'], ctaText: 'Choose Core' },
    { name: 'Nova Edge', price: 'R13,500/month', features: ['5+ AI agents with inter-agent communication', '10,000+ interactions/month', 'Multi-role logic', 'Agent memory & long-context reasoning', 'API access', 'Custom triggers & workflows'], ctaText: 'Choose Edge' },
    { name: 'Nova Private', price: 'R22,000+/month', features: ['Private Azure or on-prem deployment', 'Unlimited AI agents', 'SSO/SAML authentication', 'Enterprise connectors (ERP, DBs, SAP, etc.)', '99.9% SLA + priority support', 'Optional model hosting & fine-tuning'], ctaText: 'Contact Sales', ctaLinkState: {subject: 'Inquiry about Nova Private Plan'} },
  ];

  const useCasesData = [
    { name: 'Legal Departments', description: 'Compliance agents, contract analysis, statute search' },
    { name: 'Customer Support Teams', description: '24/7 AI desk, multilingual ticket deflection' },
    { name: 'Finance Units', description: 'Invoice auditing, policy queries, spending limits AI' },
    { name: 'Executive Teams', description: 'Secure assistant with summarisation, decision-support' },
    { name: 'HR & Admin', description: 'Onboarding agent, policy AI, internal ticket routing' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <BoltIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Nova AI Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8"
          >
            The agentic AI engine at the heart of NexusByte’s ecosystem—powering intelligent, secure, and scalable automation.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
          >
            <Link
              to="/contact" // Or specific demo request page
              state={{ subject: 'Inquiry about Nova AI Platform Demo' }}
              className="px-8 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <Section title="Meet Nova: Your Enterprise AI Engine" 
               subtitle="Nova is a modular, enterprise-grade AI platform built to power intelligent, secure, and scalable automation across all your business functions. Whether it's empowering customer support, enabling internal knowledge search, or deploying multi-agent systems, Nova provides the infrastructure and intelligence.">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-nexusbyte-accent-green">
            <blockquote className="text-xl italic text-gray-700 leading-relaxed">
            "Think of Nova as the always-on AI co-worker: precise, compliant, and purpose-trained for your organisation."
            </blockquote>
        </motion.div>
      </Section>
      
      {/* What is Nova AI Platform? Section */}
      <Section title="What is the Nova AI Platform?" className="bg-gray-50"
               subtitle="Nova is a secure, multi-layered AI orchestration environment that allows businesses to build, train, deploy custom GPT/LLM agents, integrate with internal systems, define data boundaries, and utilize agentic workflows.">
        <div className="text-left max-w-3xl mx-auto mt-8">
            <p className="text-gray-700 mb-4">It supports deployments on NexusByte's hosted infrastructure, on-premises, or in cloud-native environments, ensuring flexibility.</p>
            <h4 className="text-xl font-semibold text-nexusbyte-primary-dark mb-2">Pre-equipped with connectors to:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>OpenAI, Azure AI Studio, Google Vertex</li>
                <li>Microsoft 365, Salesforce, Slack, WhatsApp, and more</li>
            </ul>
            <p className="text-gray-700 mt-4">Nova is platform-agnostic, built for hybrid cloud, and serves AI through secure APIs, embeddable widgets, and front-end portals.</p>
        </div>
      </Section>

      {/* Platform Capabilities Section */}
      <Section title="Core Platform Capabilities">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          {capabilitiesData.map((capability, index) => {
            const Icon = capabilityIcons[capability.title] || CpuChipIcon;
            return (
              <motion.div 
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                {capability.title === "Enterprise-Grade Security" && (
                    <ul className="list-disc list-inside text-sm text-gray-500 mt-2 pl-4 space-y-1">
                        <li>Role-based access control</li>
                        <li>Audit logging</li>
                        <li>AI usage tracking & analytics</li>
                        <li>POPIA/GDPR compliance modules</li>
                    </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Plans & Tiers Section */}
      <Section title="Nova AI Platform: Plans & Tiers" className="bg-gray-50"
               subtitle="Choose a plan that fits your scale. Bespoke enterprise deployments are available upon request.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
          {plansData.map((plan, index) => (
            <NovaPlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </Section>

      {/* Ideal Use Cases Section */}
      <Section title="Ideal Use Cases for Nova"
               subtitle="Nova's versatility makes it suitable for a wide array of business applications.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {useCasesData.map((useCase, index) => (
            <motion.div 
              key={useCase.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border border-gray-200"
            >
              <UsersIcon className="w-8 h-8 text-nexusbyte-accent-green mb-3" /> {/* Generic Icon */}
              <h3 className="text-lg font-semibold text-nexusbyte-primary-dark mb-1">{useCase.name}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Nova? Section */}
      <Section title="Why Choose Nova?" className="bg-gray-50"
               subtitle="Nova is more than just a chatbot—it's your AI layer for true digital transformation.">
        <div className="mt-10 max-w-3xl mx-auto text-left space-y-6">
            <p className="text-gray-700 leading-relaxed">Built on the latest open models and deployable across your entire technology stack, Nova empowers businesses to:</p>
            <ul className="list-none space-y-4">
                {[
                    {title: "Train Custom Agents", text: "Develop agents that intimately understand your policies, workflows, and unique brand tone."},
                    {title: "Scale Human-AI Collaboration", text: "Foster safe, reliable, and efficient collaboration between your human workforce and AI capabilities."},
                    {title: "Transform AI into Infrastructure", text: "Move beyond gimmicky AI applications and embed intelligence as a core component of your operational infrastructure."}
                ].map((item, idx) => (
                     <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                    >
                        <CheckIcon className="w-7 h-7 text-nexusbyte-accent-green mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-nexusbyte-primary-dark">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.text}</p>
                        </div>
                  </motion.li>
                ))}
            </ul>
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Ready to Launch Nova?" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Contact our Solutions Team to request a demo, detailed pricing breakdown, or the full capabilities deck for the Nova AI Platform.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about Nova AI Platform"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: solutions@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Nova is currently powering ByteDesk, Rotate, and hybrid enterprise applications across the NexusByte ecosystem. Let Nova work for you.
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default NovaPlatformPage;
