
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, CpuChipIcon, ArrowRightIcon } from '../components/icons'; // Assuming ArrowRightIcon is available

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

const PlanCard: React.FC<{plan: any; index: number}> = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`p-8 rounded-xl shadow-xl flex flex-col h-full ${
      plan.name === 'Agentic Pro' // Example of a "featured" plan
        ? 'bg-nexusbyte-primary-dark text-white ring-2 ring-nexusbyte-accent-green'
        : 'bg-gray-100 text-nexusbyte-primary-dark'
    }`}
  >
    <h3 className={`text-2xl font-bold mb-2 ${plan.name === 'Agentic Pro' ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-primary-dark'}`}>{plan.name}</h3>
    <p className={`text-sm mb-4 ${plan.name === 'Agentic Pro' ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>
    <p className={`text-4xl font-extrabold mb-1 ${plan.name === 'Agentic Pro' ? 'text-white' : 'text-nexusbyte-primary-dark'}`}>{plan.price}</p>
    {plan.subPrice && <p className={`text-sm mb-6 ${plan.name === 'Agentic Pro' ? 'text-gray-400' : 'text-gray-500'}`}>{plan.subPrice}</p>}
    
    <ul className="space-y-3 text-sm mb-8 flex-grow">
      {plan.features.map((feature: string, i: number) => (
        <li key={i} className="flex items-start">
          <CheckIcon className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.name === 'Agentic Pro' ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      to={plan.ctaLink || "/contact"}
      state={plan.ctaLinkState}
      className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200
        ${plan.name === 'Agentic Pro' 
          ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80' 
          : 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80'}`}
    >
      {plan.ctaText}
    </Link>
  </motion.div>
);

const CustomGptsPage: React.FC = () => {

  const plansData = [
    { name: 'Starter Bot', price: 'R1,200/month', description: 'For SMEs, bloggers, freelancers, or startups', features: ['1 Chatbot Instance', 'Up to 100 monthly interactions', 'Website or WhatsApp integration (one platform)', 'Simple Q&A + document knowledge base (PDF/Word)', 'Branded personality tone', 'Monthly analytics report'], ctaText: 'Choose Starter' },
    { name: 'Support Bot', price: 'R2,800/month', description: 'For businesses needing reliable support automation', features: ['1–2 Chatbot Instances', 'Up to 500 monthly interactions', 'Multi-platform deployment (Website + WhatsApp/Teams)', 'Custom workflows (support, FAQs, onboarding)', 'Secure document ingestion (5 docs/month)', 'Weekly usage analytics', 'Email notifications + human escalation fallback'], ctaText: 'Choose Support' },
    { name: 'Agentic Pro', price: 'R5,800/month', description: 'For businesses ready to automate tasks with multi-step logic', features: ['Up to 3 custom chatbot agents', '2,000+ monthly interactions', 'Natural conversation memory', 'Document extraction + data processing', 'Trigger-based task automation', 'CRM/Helpdesk integration', 'RAG (retrieval-augmented generation)'], ctaText: 'Choose Agentic Pro' },
    { name: 'Enterprise AI Desk', price: 'R12,500/month', description: 'For organisations with advanced AI governance needs', features: ['Unlimited chatbot flows and assistants', 'API integration with internal systems (ERP, databases)', 'Private cloud deployment (optional)', 'Advanced admin dashboard', 'Azure AI or OpenAI hosted model (your choice)', 'Role-based access + permissions', 'Quarterly training refresh + updates'], ctaText: 'Contact Sales', ctaLinkState: {subject: 'Inquiry about Enterprise AI Desk Plan'} },
    { name: 'Custom GPT Builder', price: 'From R3,500', subPrice: '(once-off) + R950/month', description: 'For agencies or businesses wanting to deploy their own GPT apps', features: ['Hosted GPT with custom prompts', 'White-labelled chatbot (your brand)', 'Frontend UI + backend analytics', 'Use-case-specific fine-tuning', 'Hosted on your subdomain or portal'], ctaText: 'Build Your GPT', ctaLinkState: {subject: 'Inquiry about Custom GPT Builder Plan'} },
    { name: 'Bespoke GPT Consulting', price: 'Quoted', description: 'For tailored GPT/LLM implementation', features: ['LLM selection and training', 'Domain-specific fine-tuning', 'Regulatory compliance auditing', 'Prompt engineering services', 'Model governance and ethical AI frameworks'], ctaText: 'Get a Quote', ctaLinkState: {subject: 'Inquiry about Bespoke GPT Consulting'} },
  ];

  const useCasesData = [
    { name: 'Retail', description: 'Shopping assistants, product finders, order tracking' },
    { name: 'Legal', description: 'Legal Q&A bots, statute navigation, document drafting support' },
    { name: 'Healthcare', description: 'Symptom checkers, appointment booking assistants' },
    { name: 'Real Estate', description: 'Virtual listing agents, tenant query bots' },
    { name: 'Education', description: 'Tutor bots, syllabus guides, student support AI' },
    { name: 'HR', description: 'Onboarding, leave policy queries, compliance bots' },
  ];

  const processSteps = [
    { number: 1, title: 'Consultation & Use Case Analysis', description: 'Understanding your needs and objectives.' },
    { number: 2, title: 'Data Collection & Integration Planning', description: 'Gathering relevant data and planning system integrations.' },
    { number: 3, title: 'Bot Design & Training', description: 'Designing conversational flows and training the AI models.' },
    { number: 4, title: 'Deployment & Testing', description: 'Launching the chatbot and conducting thorough testing.' },
    { number: 5, title: 'Monitoring & Continuous Improvement', description: 'Ongoing performance tracking and iterative enhancements.' },
  ];


  return (
    <div className="bg-white">
             {/* Hero Section */}
       <section className="relative text-white py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/resources/cgpt-1.jpg)' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-nexusbyte-primary-dark opacity-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
                                 <motion.h1 
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
              style={{ color: '#a8b545' }}
            >
              Custom GPTs and AI Chatbots
            </motion.h1>
            <motion.p 
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
              className="text-lg sm:text-xl mb-8"
              style={{ color: '#a8b545' }}
            >
              Automate, scale, and elevate user experiences with intelligent AI assistants built for your business.
            </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
          >
                         <Link
               to="/contact"
               state={{ subject: 'Inquiry about Custom GPT & Chatbot Solutions' }}
               className="px-8 py-3 text-nexusbyte-primary-dark font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
               style={{ backgroundColor: '#a8b545' }}
             >
               Get Started
             </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section (Adapting from textual content's "Overview") */}
      <Section title="Intelligent Assistants, Tailored for You" 
               subtitle="NexusByte's Custom GPTs and AI Chatbot Solutions are designed to help businesses automate processes, scale customer interactions, and enhance user experiences across all digital touchpoints. We build smart, secure, and context-aware AI assistants that feel like a natural extension of your team.">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-left max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
            Whether you require a sophisticated assistant for round-the-clock customer support, a specialized bot for legal research, or a highly efficient internal productivity agent, our solutions are meticulously crafted to align with your specific operational goals and challenges. By leveraging advanced natural language processing (NLP), proprietary datasets, and seamless integration capabilities, we create AI solutions that are not only intelligent but also secure and deeply aware of the context in which they operate.
            </p>
        </motion.div>
      </Section>
      
      {/* Why Choose NexusByte Chatbots? Section */}
      <Section title="Why Choose NexusByte Chatbots?" className="bg-gray-50"
               subtitle="Our chatbots are built with cutting-edge technology and a focus on your business needs.">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12 text-left max-w-4xl mx-auto">
          {[
            "Built on OpenAI, Azure, and Google AI platforms",
            "Custom-trained on your business data (documents, PDFs, emails, scripts)",
            "Multilingual capabilities for global or diverse customer bases",
            "24/7 availability with zero fatigue",
            "POP Act-compliant with secure data protocols",
            "Deployable on websites, WhatsApp, Teams, Messenger, Slack, and more",
            "Fully modular for specific workflows: customer onboarding, support ticketing, HR queries, etc."
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start"
            >
              <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Packages and Plans Section */}
      <Section title="Packages and Plans" subtitle="Flexible plans tailored to the scale and complexity of your needs. Additional enterprise-level plans are available on request.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {plansData.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section title="Versatile Use Cases Across Industries" className="bg-gray-50"
               subtitle="Our AI chatbots can be adapted to a wide range of applications.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {useCasesData.map((useCase, index) => (
            <motion.div 
              key={useCase.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-2">{useCase.name}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Our Process Section */}
      <Section title="Our Proven Process"
               subtitle="We follow a structured approach to ensure successful chatbot development and deployment.">
        <div className="mt-12 space-y-10 max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, x: (index % 2 === 0) ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col md:flex-row items-center text-left md:space-x-8 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-nexusbyte-accent-green text-white text-2xl font-bold rounded-full flex items-center justify-center mb-4 md:mb-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Let's Build Your Intelligent Assistant" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Ready to transform your business with intelligent automation? Contact our Solutions team to get started.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about Custom GPT & Chatbot Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: solutions@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400">Or chat with Nova, our AI assistant, right here on the site!</p>
        </motion.div>
      </Section>
       <div className="bg-white py-4 text-center text-sm text-gray-500 border-t">
        Note: All plans are billed monthly. Custom usage or token thresholds may apply. Bulk discounts available for multi-chatbot deployments.
      </div>
    </div>
  );
}

export default CustomGptsPage;
