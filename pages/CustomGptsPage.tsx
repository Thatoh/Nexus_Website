
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, CpuChipIcon, ArrowRightIcon, CloudArrowUpIcon, LockClosedIcon, CogIcon, ShieldCheckIcon, BoltIcon } from '../components/icons';

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
        ? 'bg-nexusbyte-primary-dark text-white ring-2 ring-[#a8b545]'
        : 'bg-gray-100 text-nexusbyte-primary-dark'
    }`}
  >
    <h3 className={`text-2xl font-bold mb-2 ${plan.name === 'Agentic Pro' ? 'text-[#a8b545]' : 'text-nexusbyte-primary-dark'}`}>{plan.name}</h3>
    <p className={`text-sm mb-4 ${plan.name === 'Agentic Pro' ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>
    <p className={`text-4xl font-extrabold mb-1 ${plan.name === 'Agentic Pro' ? 'text-white' : 'text-nexusbyte-primary-dark'}`}>{plan.price}</p>
    {plan.subPrice && <p className={`text-sm mb-6 ${plan.name === 'Agentic Pro' ? 'text-gray-400' : 'text-gray-500'}`}>{plan.subPrice}</p>}
    
    <ul className="space-y-3 text-sm mb-8 flex-grow">
      {plan.features.map((feature: string, i: number) => (
        <li key={i} className="flex items-start">
          <CheckIcon className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.name === 'Agentic Pro' ? 'text-[#a8b545]' : 'text-[#a8b545]'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      to={plan.ctaLink || "/contact"}
      state={plan.ctaLinkState}
      className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200
        ${plan.name === 'Agentic Pro' 
          ? 'bg-[#a8b545] text-nexusbyte-primary-dark hover:bg-opacity-80' 
          : 'bg-[#a8b545] text-nexusbyte-primary-dark hover:bg-opacity-80'}`}
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

                           {/* Overview Section */}
        <div className="relative bg-white py-24 sm:py-32">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/resources/cgpt-2.jpg)' }}
          ></div>
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base/7 font-semibold text-[#a8b545]">Everything you need</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                Intelligent Assistants, Tailored for You
              </p>
              <p className="mt-6 text-lg/8 text-black">
                NexusByte's Custom GPTs and AI Chatbot Solutions are designed to help businesses automate processes, scale customer interactions, and enhance user experiences across all digital touchpoints. We build smart, secure, and context-aware AI assistants that feel like a natural extension of your team.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
             {[
               {
                 name: 'Round-the-clock Support',
                 description: 'Whether you require a sophisticated assistant for round-the-clock customer support, our solutions are meticulously crafted to align with your specific operational goals.',
                 icon: CloudArrowUpIcon,
               },
               {
                 name: 'Specialized Expertise',
                 description: 'From specialized bots for legal research to highly efficient internal productivity agents, we create AI solutions that are intelligent and secure.',
                 icon: LockClosedIcon,
               },
               {
                 name: 'Advanced NLP',
                 description: 'By leveraging advanced natural language processing (NLP), proprietary datasets, and seamless integration capabilities.',
                 icon: BoltIcon,
               },
               {
                 name: 'Context Awareness',
                 description: 'Our AI assistants are deeply aware of the context in which they operate, providing relevant and accurate responses.',
                 icon: ShieldCheckIcon,
               },
               {
                 name: 'Seamless Integration',
                 description: 'We create AI solutions that integrate seamlessly with your existing systems and workflows.',
                 icon: CogIcon,
               },
               {
                 name: 'Secure & Compliant',
                 description: 'Built with security and compliance in mind, ensuring your data and operations remain protected.',
                 icon: CpuChipIcon,
               },
             ].map((feature) => (
                               <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-black">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5 text-[#a8b545]"
                    />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
             ))}
           </dl>
         </div>
       </div>
      
             {/* Why Choose NexusByte Chatbots? Section */}
       <div className="relative overflow-hidden bg-gray-50 pt-16 pb-32">
         <div className="relative">
           <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
             <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
               <div>
                 <div>
                   <span className="flex size-12 items-center justify-center rounded-xl bg-[#a8b545]">
                     <CpuChipIcon aria-hidden="true" className="size-8 text-white" />
                   </span>
                 </div>
                 <div className="mt-6">
                   <h2 className="text-3xl font-bold tracking-tight text-gray-900">Built on cutting-edge AI platforms</h2>
                   <p className="mt-4 text-lg text-gray-500">
                     Our chatbots are built on OpenAI, Azure, and Google AI platforms, ensuring you get the most advanced AI capabilities available. Custom-trained on your business data including documents, PDFs, emails, and scripts for unparalleled accuracy and relevance.
                   </p>
                   <div className="mt-6">
                     <Link
                       to="/contact"
                       state={{ subject: 'Inquiry about AI Platform Integration' }}
                       className="inline-flex rounded-lg bg-[#a8b545] px-4 py-1.5 text-base/7 font-semibold text-white shadow-xs ring-1 ring-[#a8b545] hover:bg-opacity-80 hover:ring-[#a8b545]"
                     >
                       Get started
                     </Link>
                   </div>
                 </div>
               </div>
               <div className="mt-8 border-t border-gray-200 pt-6">
                 <blockquote>
                   <div>
                     <p className="text-base text-gray-500">
                       &ldquo;The multilingual capabilities and 24/7 availability have transformed our customer support. Zero fatigue means consistent quality service around the clock.&rdquo;
                     </p>
                   </div>
                   <footer className="mt-3">
                     <div className="flex items-center space-x-3">
                       <div className="shrink-0">
                         <img
                           alt=""
                           src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                           className="size-6 rounded-full"
                         />
                       </div>
                       <div className="text-base font-medium text-gray-700">Marcia Hill, Digital Marketing Manager</div>
                     </div>
                   </footer>
                 </blockquote>
               </div>
             </div>
             <div className="mt-12 sm:mt-16 lg:mt-0">
               <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                 <img
                   alt="AI Chatbot Interface"
                   src="https://tailwindcss.com/plus-assets/img/component-images/inbox-app-screenshot-1.jpg"
                   className="w-full rounded-xl shadow-xl ring-1 ring-black/5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                 />
               </div>
             </div>
           </div>
         </div>
         <div className="mt-24">
           <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
             <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
               <div>
                 <div>
                   <span className="flex size-12 items-center justify-center rounded-xl bg-[#a8b545]">
                     <ShieldCheckIcon aria-hidden="true" className="size-8 text-white" />
                   </span>
                 </div>
                 <div className="mt-6">
                   <h2 className="text-3xl font-bold tracking-tight text-gray-900">Secure and compliant deployment</h2>
                   <p className="mt-4 text-lg text-gray-500">
                     POP Act-compliant with secure data protocols, our chatbots are deployable across multiple platforms including websites, WhatsApp, Teams, Messenger, and Slack. Fully modular for specific workflows like customer onboarding, support ticketing, and HR queries.
                   </p>
                   <div className="mt-6">
                     <Link
                       to="/contact"
                       state={{ subject: 'Inquiry about Secure Chatbot Deployment' }}
                       className="inline-flex rounded-lg bg-[#a8b545] px-4 py-1.5 text-base/7 font-semibold text-white shadow-xs ring-1 ring-[#a8b545] hover:bg-opacity-80 hover:ring-[#a8b545]"
                     >
                       Get started
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
             <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
               <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                 <img
                   alt="Multi-platform chatbot deployment"
                   src="https://tailwindcss.com/plus-assets/img/component-images/inbox-app-screenshot-2.jpg"
                   className="w-full rounded-xl shadow-xl ring-1 ring-black/5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                 />
               </div>
             </div>
           </div>
         </div>
       </div>

             {/* Packages and Plans Section */}
       <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
         <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
           <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty dark:text-white">
             Pricing that grows with your business
           </h1>
           <p className="mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-600 max-lg:mx-auto sm:text-xl/8 dark:text-gray-400">
             Choose an affordable plan that's packed with the best features for automating your processes, engaging your customers, and driving business growth.
           </p>
         </div>
         <div className="relative pt-16 sm:pt-24">
           <div className="absolute inset-x-0 top-48 bottom-0 bg-[radial-gradient(circle_at_center_center,#a8b545,#8a9a3a,#030712_70%)] lg:bg-[radial-gradient(circle_at_center_150%,#a8b545,#8a9a3a,#030712_70%)] dark:bg-[radial-gradient(circle_at_center_center,#a8b54580,#8a9a3a80,transparent_70%)] dark:lg:bg-[radial-gradient(circle_at_center_150%,#a8b54580,#8a9a3a80,transparent_70%)]" />
           <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                           <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {plansData.map((plan) => (
                  <div
                    key={plan.name}
                    className="-m-2 grid grid-cols-1 rounded-4xl bg-white/2.5 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md dark:shadow-[inset_0_0_2px_1px_#ffffff32]"
                  >
                   <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5 dark:shadow-none">
                     <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5 dark:bg-gray-800 dark:shadow-none dark:ring-white/10">
                       <h2 className="text-sm font-semibold text-[#a8b545] dark:text-[#a8b545]">
                         {plan.name} <span className="sr-only">plan</span>
                       </h2>
                       <p className="mt-2 text-sm/6 text-pretty text-gray-600 dark:text-gray-300">{plan.description}</p>
                       <div className="mt-8 flex items-center gap-4">
                         <div className="text-5xl font-semibold text-gray-950 dark:text-white">{plan.price}</div>
                         {plan.subPrice && (
                           <div className="text-sm text-gray-600 dark:text-gray-400">
                             <p>{plan.subPrice}</p>
                           </div>
                         )}
                       </div>
                       <div className="mt-8">
                         <Link
                           to="/contact"
                           state={plan.ctaLinkState}
                           aria-label={`Get started with the ${plan.name} plan`}
                           className="inline-block rounded-md bg-[#a8b545] px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8b545] dark:bg-[#a8b545] dark:shadow-none dark:hover:bg-opacity-80 dark:focus-visible:outline-[#a8b545]"
                         >
                           {plan.ctaText}
                         </Link>
                       </div>
                       <div className="mt-8">
                         <h3 className="text-sm/6 font-medium text-gray-950 dark:text-white">Includes:</h3>
                         <ul className="mt-3 space-y-3">
                           {plan.features.map((feature, index) => (
                             <li
                               key={index}
                               className="group flex items-start gap-4 text-sm/6 text-gray-600 dark:text-gray-300"
                             >
                               <span className="inline-flex h-6 items-center">
                                 <CheckIcon
                                   aria-hidden="true"
                                   className="size-4 fill-[#a8b545] dark:fill-[#a8b545]"
                                 />
                               </span>
                               {feature}
                             </li>
                           ))}
                         </ul>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
             <div className="flex justify-between py-16 opacity-60 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 sm:py-24">
               <img
                 alt="OpenAI"
                 src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
                 className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
               />
               <img
                 alt="Azure"
                 src="https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg"
                 className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
               />
               <img
                 alt="Google AI"
                 src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
                 className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
               />
               <img
                 alt="WhatsApp"
                 src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
                 className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
               />
               <img
                 alt="Teams"
                 src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
                 className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
               />
             </div>
           </div>
         </div>
       </div>

             {/* Use Cases Section */}
       <div className="bg-gray-50 py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-2xl text-center">
             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Versatile Use Cases Across Industries
             </h2>
             <p className="mt-6 text-lg leading-8 text-gray-600">
               Our AI chatbots can be adapted to a wide range of applications.
             </p>
           </div>
           <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
             <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
               {useCasesData.map((useCase, index) => (
                 <motion.div 
                   key={useCase.name}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true, amount: 0.3 }}
                   transition={{ duration: 0.4, delay: index * 0.1 }}
                   className="flex flex-col"
                 >
                   <dt className="text-lg font-semibold leading-7 text-gray-900 mb-4">{useCase.name}</dt>
                   <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                     <p className="flex-auto">{useCase.description}</p>
                   </dd>
                 </motion.div>
               ))}
             </dl>
           </div>
         </div>
       </div>
      
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
              <div className="flex-shrink-0 w-16 h-16 bg-[#a8b545] text-white text-2xl font-bold rounded-full flex items-center justify-center mb-4 md:mb-0">
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
       <div className="bg-nexusbyte-primary-dark py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-2xl text-center">
             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
               Let's Build Your Intelligent Assistant
             </h2>
             <p className="mt-6 text-lg leading-8 text-gray-300">
               Ready to transform your business with intelligent automation? Contact our Solutions team to get started.
             </p>
           </div>
           <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
             <motion.div 
                 initial={{ opacity:0, y:20 }} 
                 whileInView={{ opacity:1, y:0 }} 
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration:0.6, delay:0.2 }}
                 className="text-center"
             >
                 <a
                   href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about Custom GPT & Chatbot Solutions"
                   className="inline-flex items-center px-10 py-4 bg-[#a8b545] text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
                 >
                   Email Us: solutions@nexusbyte.co.za
                   <ArrowRightIcon className="w-5 h-5 ml-3" />
                 </a>
                 <p className="mt-6 text-gray-400">Or chat with Nova, our AI assistant, right here on the site!</p>
             </motion.div>
           </div>
         </div>
       </div>
       <div className="bg-white py-4 text-center text-sm text-gray-500 border-t">
        Note: All plans are billed monthly. Custom usage or token thresholds may apply. Bulk discounts available for multi-chatbot deployments.
      </div>
    </div>
  );
}

export default CustomGptsPage;
