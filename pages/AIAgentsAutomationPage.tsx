import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CpuChipIcon, PuzzlePieceIcon, BoltIcon, CreditCardIcon, UsersIcon, ChatBubbleOvalLeftEllipsisIcon, TicketIcon, ChevronDownIcon, ChevronUpIcon, ArrowRightIcon, CheckIcon, ArrowLeftIcon, XMarkIcon } from '../components/icons';

// Pricing data for Nova AI Plans
const frequencies = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'annually', label: 'Annually' },
];

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    featured: false,
    description: 'Everything you need to get started.',
    price: { monthly: 'R499', annually: 'R4999' },
    highlights: ['Custom domains', 'Edge content delivery', 'Advanced analytics'],
  },
  {
    name: 'Scale',
    id: 'tier-scale',
    href: '#',
    featured: true,
    description: 'Added flexibility at scale.',
    price: { monthly: 'R1499', annually: 'R14999' },
    highlights: [
      'Custom domains',
      'Edge content delivery',
      'Advanced analytics',
      'Quarterly workshops',
      'Single sign-on (SSO)',
      'Priority phone support',
    ],
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '#',
    featured: false,
    description: 'All the extras for your growing team.',
    price: { monthly: 'R999', annually: 'R9999' },
    highlights: ['Custom domains', 'Edge content delivery', 'Advanced analytics', 'Quarterly workshops'],
  },
];

const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Edge content delivery', tiers: { Starter: true, Growth: true, Scale: true } },
      { name: 'Custom domains', tiers: { Starter: '1', Growth: '3', Scale: 'Unlimited' } },
      { name: 'Team members', tiers: { Starter: '3', Growth: '20', Scale: 'Unlimited' } },
      { name: 'Single sign-on (SSO)', tiers: { Starter: false, Growth: false, Scale: true } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Advanced analytics', tiers: { Starter: true, Growth: true, Scale: true } },
      { name: 'Basic reports', tiers: { Starter: false, Growth: true, Scale: true } },
      { name: 'Professional reports', tiers: { Starter: false, Growth: false, Scale: true } },
      { name: 'Custom report builder', tiers: { Starter: false, Growth: false, Scale: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: '24/7 online support', tiers: { Starter: true, Growth: true, Scale: true } },
      { name: 'Quarterly workshops', tiers: { Starter: false, Growth: true, Scale: true } },
      { name: 'Priority phone support', tiers: { Starter: false, Growth: false, Scale: true } },
      { name: '1:1 onboarding tour', tiers: { Starter: false, Growth: false, Scale: true } },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Placeholder data for the page
const aiProviders = [
  { id: 'openai', name: 'OpenAI ChatGPT', logoUrl: 'https://picsum.photos/seed/openai_logo/100/50?grayscale&text=OpenAI', poweredApps: 'Nexus Ticketing, ByteDesk, Custom Agents' },
  { id: 'google', name: 'Google Gemini', logoUrl: 'https://picsum.photos/seed/google_logo/100/50?grayscale&text=Gemini', poweredApps: 'Nova AI Core, Nexus Ticketing, ByteDesk' },
  { id: 'anthropic', name: 'Anthropic Claude', logoUrl: 'https://picsum.photos/seed/anthropic_logo/100/50?grayscale&text=Claude', poweredApps: 'Nexus Ticketing, ByteDesk (Long-form summarization)' },
];

const novaFeatures = [
  { title: 'Multi-Model Power', description: 'Access Gemini, ChatGPT, Claude, and the NexusByte Nova model without managing multiple subscriptions.', icon: CpuChipIcon },
  { title: 'Smart Routing', description: 'Nova automatically selects the best model for each task, optimizing for cost and performance.', icon: BoltIcon },
  { title: 'Seamless Integration', description: 'One-click activation for Nexus Ticketing, ByteDesk, and all future NexusByte apps.', icon: PuzzlePieceIcon },
  { title: 'Centralized Billing', description: 'One predictable monthly payment. No surprise fees.', icon: CreditCardIcon },
];

const useCases = [
  { 
    id: 'ticketing', 
    title: 'Nexus Ticketing', 
    icon: TicketIcon,
    headline: 'Automate Your Support Queue', 
    description: 'Let AI handle the repetitive work. Nova can instantly summarize complex support tickets, classify issues by urgency and topic, and draft accurate, context-aware replies for your agents to review.',
    visualUrl: 'https://picsum.photos/seed/ticketing_ui/500/300?text=Ticketing+UI+GIF'
  },
  { 
    id: 'bytedesk', 
    title: 'ByteDesk', 
    icon: ChatBubbleOvalLeftEllipsisIcon,
    headline: 'Enhance Customer Engagement', 
    description: 'Power your ByteDesk live chat and knowledge base with AI. Provide instant answers, smarter suggestions, and personalized customer interactions, 24/7.',
    visualUrl: 'https://picsum.photos/seed/bytedesk_ui/500/300?text=ByteDesk+UI+GIF'
  },
  { 
    id: 'custombots', 
    title: 'Custom Chatbots', 
    icon: UsersIcon,
    headline: 'Build Tailored AI Agents', 
    description: 'Develop custom AI chatbots and agents for specific tasks, from internal helpdesks to specialized client-facing applications, integrated with your data and workflows.',
    visualUrl: 'https://picsum.photos/seed/custombots_ui/500/300?text=Custom+Bots+UI+GIF'
  },
];

const faqsData = [
  { question: 'What does "Bring Your Own Key (BYOK)" mean?', answer: 'BYOK allows you to use your existing subscriptions with AI providers like OpenAI, Google, or Anthropic. You connect your API key to NexusByte services, and your AI usage is billed directly by your provider, not by NexusByte.' },
  { question: 'If I BYOK, who bills me for AI usage?', answer: 'Your AI provider (e.g., OpenAI, Google) will bill you for the AI model usage. NexusByte does not charge extra for using your own key with our compatible applications.' },
  { question: 'How does Nova AI\'s "Smart Routing" work?', answer: 'Nova AI analyzes the nature of your request (e.g., summarization, code generation, creative writing) and intelligently routes it to the most suitable and cost-effective large language model from our integrated pool (which includes models like GPT, Gemini, Claude, and our own proprietary models).' },
  { question: 'Can I switch from BYOK to a Nova AI plan later?', answer: 'Yes, absolutely! You can start by connecting your own AI key and later subscribe to a Nova AI plan if you find it more convenient or cost-effective. You can also switch back if needed.' },
];

const AIAgentsAutomationPage: React.FC = () => {
  const [hoveredProvider, setHoveredProvider] = useState<string | null>(null);
  const [activeUseCaseTab, setActiveUseCaseTab] = useState<string>(useCases[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  const activeUseCase = useCases.find(uc => uc.id === activeUseCaseTab);

  return (
    <div className="bg-white text-nexusbyte-primary-dark">
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/gif/hello.gif" 
            alt="AI Agents in action" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-nexusbyte-primary-dark/70 to-gray-800/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Unify Your AI. <span className="block sm:inline">Automate Your Workflow.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Connect your existing Generative AI subscriptions to supercharge NexusByte apps, or get access to the world's leading models with a single Nova AI plan. Your AI, your choice.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <Link
              to="/ai/nova/plans" // Assuming a future plans page or contact
              className="px-8 py-3 sm:px-10 sm:py-4 text-nexusbyte-primary-dark font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-lg sm:text-xl"
              style={{ backgroundColor: '#a8b545' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a9a3a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#a8b545'}
            >
              Explore Nova AI Plans
            </Link>
            <Link
              to="#byok-section" // Link to BYOK section on the same page
              onClick={(e) => { e.preventDefault(); document.getElementById('byok-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-gray-400 text-gray-200 font-semibold rounded-lg hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all duration-300 text-lg sm:text-xl"
            >
              Connect Your AI (BYOK)
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Integration Hub: Bring Your Own AI */}
      <section id="byok-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-nexusbyte-primary-dark mb-4">
              Already Have an AI Subscription? Plug It In.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You shouldn't have to pay twice. We believe in an open ecosystem. Connect your existing OpenAI, Google, or Anthropic account in seconds and enhance the NexusByte tools you already use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 items-center justify-center">
            {aiProviders.map(provider => (
              <motion.div
                key={provider.id}
                                 className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-2xl hover:border-[#a8b545]"
                onMouseEnter={() => setHoveredProvider(provider.id)}
                onMouseLeave={() => setHoveredProvider(null)}
              >
                <img src={provider.logoUrl} alt={`${provider.name} logo`} className="h-12 mx-auto mb-4 object-contain"/>
                <AnimatePresence>
                {hoveredProvider === provider.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-xs text-gray-500"
                  >
                    Powers: {provider.poweredApps}
                  </motion.div>
                )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mb-12 md:mb-16">
             <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-6">How It Works</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {step: 1, title: 'Select Product', description: 'Choose Nexus Ticketing, ByteDesk, etc.', icon: TicketIcon},
                    {step: 2, title: 'Enter API Key', description: 'Navigate to settings and paste your existing API key.', icon: PuzzlePieceIcon},
                    {step: 3, title: 'Integration Done!', description: 'Your product is now powered by your chosen AI.', icon: BoltIcon }
                ].map(item => {
                    const Icon = item.icon;
                    return (
                        <div key={item.step} className="flex flex-col items-center p-4">
                                                         <div className="bg-[#a8b545]/10 text-[#a8b545] p-3 rounded-full mb-3">
                                <Icon className="w-8 h-8"/>
                            </div>
                            <h4 className="font-semibold text-lg mb-1">Step {item.step}: {item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    );
                })}
             </div>
          </div>
          <div className="text-center">
                         <Link to="/docs/byok-integration" className="text-[#a8b545] font-semibold hover:underline text-lg">
              View Integration Docs <ArrowRightIcon className="inline w-5 h-5 ml-1"/>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The Native Solution: Meet Nova AI */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-nexusbyte-primary-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Or, Use Our All-In-One AI Engine.</h2>
          {/* Placeholder for conceptual graphic */}
          <div className="my-10 flex justify-center items-center space-x-4">
            <img src="https://picsum.photos/seed/openai_logo_flow/80/40?grayscale&text=OpenAI" alt="OpenAI Logo" className="opacity-70"/>
            <ArrowRightIcon className="w-8 h-8 text-gray-500" />
            <img src="https://picsum.photos/seed/nova_ai_logo/120/60?text=NovaAI" alt="Nova AI Logo" className="transform scale-125"/>
            <ArrowLeftIcon className="w-8 h-8 text-gray-500" />
            <img src="https://picsum.photos/seed/gemini_logo_flow/80/40?grayscale&text=Gemini" alt="Gemini Logo" className="opacity-70"/>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                         Introducing <strong className="text-[#a8b545]">Nova AI</strong>, the native intelligence layer for the NexusByte ecosystem. Get the combined power of the world's best models, plus our own proprietary AI, through one simple subscription.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {novaFeatures.map(feature => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-colors">
                                     <Icon className="w-10 h-10 text-[#a8b545] mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. See It in Action */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-nexusbyte-primary-dark mb-12">See It in Action</h2>
          <div className="flex justify-center mb-8 border-b border-gray-300">
            {useCases.map(uc => (
              <button
                key={uc.id}
                onClick={() => setActiveUseCaseTab(uc.id)}
                                 className={`px-4 py-3 sm:px-6 font-medium text-sm sm:text-base border-b-2 transition-colors duration-200 focus:outline-none
                   ${activeUseCaseTab === uc.id 
                     ? 'border-[#a8b545] text-[#a8b545]' 
                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400'}`}
               >
                 <uc.icon className={`inline w-5 h-5 mr-2 ${activeUseCaseTab === uc.id ? 'text-[#a8b545]' : 'text-gray-400'}`} />
                {uc.title}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            {activeUseCase && (
              <motion.div
                key={activeUseCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-3">{activeUseCase.headline}</h3>
                  <p className="text-gray-600 mb-4">{activeUseCase.description}</p>
                                     <p className="text-xs text-gray-500">
                     Powered by: <span className="font-semibold text-[#a8b545]">Nova AI</span> or <span className="font-semibold">Your Connected AI</span>
                   </p>
                </div>
                <div>
                  <img src={activeUseCase.visualUrl} alt={`${activeUseCase.title} UI showcase`} className="rounded-lg shadow-xl w-full object-cover aspect-video" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Nova AI Plans & Pricing */}
      <form className="group/tiers isolate overflow-hidden bg-white dark:bg-gray-900">
        <div className="flow-root border-b border-b-transparent bg-gray-900 pt-24 pb-16 sm:pt-32 lg:pb-0 dark:border-b-white/5 dark:bg-gray-800/25">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10">
              <h2 className="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                Pricing that grows with you
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Choose an affordable plan that's packed with the best features for engaging your audience, creating
                customer loyalty, and driving sales.
              </p>
              <div className="mt-16 flex justify-center">
                <fieldset aria-label="Payment frequency">
                  <div className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
                    <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-[#a8b545]">
                      <input
                        defaultValue="monthly"
                        defaultChecked
                        name="frequency"
                        type="radio"
                        className="absolute inset-0 appearance-none rounded-full"
                      />
                      <span className="text-white">Monthly</span>
                    </label>
                    <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-[#a8b545]">
                      <input
                        defaultValue="annually"
                        name="frequency"
                        type="radio"
                        className="absolute inset-0 appearance-none rounded-full"
                      />
                      <span className="text-white">Annually</span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
              <svg
                viewBox="0 0 1208 1024"
                aria-hidden="true"
                className="absolute -bottom-48 left-1/2 h-256 -translate-x-1/2 translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
              >
                <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" />
                <defs>
                  <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                    <stop stopColor="#a8b545" />
                    <stop offset={1} stopColor="#8a9a3a" />
                  </radialGradient>
                </defs>
              </svg>
              <div
                aria-hidden="true"
                className="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
              />
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  data-featured={tier.featured ? 'true' : undefined}
                  className={classNames(
                    tier.featured
                      ? 'z-10 bg-white shadow-xl outline-1 outline-gray-900/10 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'
                      : 'bg-gray-800/80 outline-1 -outline-offset-1 outline-white/10 lg:bg-transparent lg:pb-14 lg:outline-0',
                    'group/tier relative rounded-2xl',
                  )}
                >
                  <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                    <h3
                      id={`tier-${tier.id}`}
                      className="text-sm/6 font-semibold text-white group-data-featured/tier:text-gray-900 dark:group-data-featured/tier:text-white"
                    >
                      {tier.name}
                    </h3>
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                      <div className="mt-2 flex items-center gap-x-4">
                        <p className="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden group-data-featured/tier:text-gray-900 dark:group-data-featured/tier:text-white">
                          {tier.price.monthly}
                        </p>
                        <p className="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden group-data-featured/tier:text-gray-900 dark:group-data-featured/tier:text-white">
                          {tier.price.annually}
                        </p>
                        <div className="text-sm">
                          <p className="text-white group-data-featured/tier:text-gray-900 dark:group-data-featured/tier:text-white">
                            ZAR
                          </p>
                          <p className="text-gray-400 group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden group-data-featured/tier:text-gray-500 dark:group-data-featured/tier:text-gray-400">
                            Billed monthly
                          </p>
                          <p className="text-gray-400 group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden group-data-featured/tier:text-gray-500 dark:group-data-featured/tier:text-gray-400">
                            Billed annually
                          </p>
                        </div>
                      </div>
                      <button
                        value={tier.id}
                        name="tier"
                        type="submit"
                        aria-describedby={`tier-${tier.id}`}
                        className="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white not-group-data-featured:inset-ring not-group-data-featured:inset-ring-white/5 group-data-featured/tier:bg-[#a8b545] group-data-featured/tier:shadow-xs hover:bg-white/20 group-data-featured/tier:hover:bg-[#8a9a3a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 group-data-featured/tier:focus-visible:outline-[#a8b545] dark:group-data-featured/tier:bg-[#a8b545] dark:group-data-featured/tier:shadow-none dark:group-data-featured/tier:hover:bg-[#8a9a3a] dark:group-data-featured/tier:focus-visible:outline-[#a8b545]"
                      >
                        Buy this plan
                      </button>
                    </div>
                    <div className="mt-8 flow-root sm:mt-10">
                      <ul
                        role="list"
                        className="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white group-data-featured/tier:divide-gray-900/5 group-data-featured/tier:border-gray-900/5 group-data-featured/tier:text-gray-600 lg:border-t-0 dark:group-data-featured/tier:divide-white/10 dark:group-data-featured/tier:border-white/10 dark:group-data-featured/tier:text-white"
                      >
                        {tier.highlights.map((mainFeature) => (
                          <li key={mainFeature} className="flex gap-x-3 py-2">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-gray-500 group-data-featured/tier:text-[#a8b545] dark:group-data-featured/tier:text-[#a8b545]"
                            />
                            {mainFeature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative bg-gray-50 lg:pt-14 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            {/* Feature comparison (up to lg) */}
            <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
              <h2 id="mobile-comparison-heading" className="sr-only">
                Feature comparison
              </h2>

              <div className="mx-auto max-w-2xl space-y-16">
                {tiers.map((tier) => (
                  <div key={tier.id} className="border-t border-gray-900/10 dark:border-white/10">
                    <div
                      className={classNames(
                        tier.featured ? 'border-[#a8b545] dark:border-[#a8b545]' : 'border-transparent',
                        '-mt-px w-72 border-t-2 pt-10 md:w-80',
                      )}
                    >
                      <h3
                        className={classNames(
                          tier.featured ? 'text-[#a8b545] dark:text-[#a8b545]' : 'text-gray-900 dark:text-white',
                          'text-sm/6 font-semibold',
                        )}
                      >
                        {tier.name}
                      </h3>
                      <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">{tier.description}</p>
                    </div>

                    <div className="mt-10 space-y-10">
                      {sections.map((section) => (
                        <div key={section.name}>
                          <h4 className="text-sm/6 font-semibold text-gray-900 dark:text-white">{section.name}</h4>
                          <div className="relative mt-6">
                            {/* Fake card background */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-xs sm:block dark:bg-gray-800/50 dark:shadow-none"
                            />

                            <div
                              className={classNames(
                                tier.featured
                                  ? 'ring-2 ring-[#a8b545] dark:ring-[#a8b545]'
                                  : 'ring-1 ring-gray-900/10 dark:ring-white/10',
                                'relative rounded-lg bg-white shadow-xs sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 dark:bg-gray-800/50 dark:shadow-none dark:sm:bg-transparent',
                              )}
                            >
                              <dl className="divide-y divide-gray-200 text-sm/6 dark:divide-white/10">
                                {section.features.map((feature) => (
                                  <div
                                    key={feature.name}
                                    className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                  >
                                    <dt className="pr-4 text-gray-600 dark:text-gray-400">{feature.name}</dt>
                                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                      {typeof feature.tiers[tier.name] === 'string' ? (
                                        <span
                                          className={
                                            tier.featured
                                              ? 'font-semibold text-[#a8b545] dark:text-[#a8b545]'
                                              : 'text-gray-900 dark:text-white'
                                          }
                                        >
                                          {feature.tiers[tier.name]}
                                        </span>
                                      ) : (
                                        <>
                                          {feature.tiers[tier.name] === true ? (
                                            <CheckIcon
                                              aria-hidden="true"
                                              className="mx-auto size-5 text-[#a8b545] dark:text-[#a8b545]"
                                            />
                                          ) : (
                                            <XMarkIcon
                                              aria-hidden="true"
                                              className="mx-auto size-5 text-gray-400 dark:text-gray-600"
                                            />
                                          )}

                                          <span className="sr-only">
                                            {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                          </span>
                                        </>
                                      )}
                                    </dd>
                                  </div>
                                ))}
                              </dl>
                            </div>

                            {/* Fake card border */}
                            <div
                              aria-hidden="true"
                              className={classNames(
                                tier.featured
                                  ? 'ring-2 ring-[#a8b545] dark:ring-[#a8b545]'
                                  : 'ring-1 ring-gray-900/10 dark:ring-white/10',
                                'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                              )}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Feature comparison (lg+) */}
            <section aria-labelledby="comparison-heading" className="hidden lg:block">
              <h2 id="comparison-heading" className="sr-only">
                Feature comparison
              </h2>

              <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block dark:border-white/10">
                {tiers.map((tier) => (
                  <div key={tier.id} aria-hidden="true" className="-mt-px">
                    <div
                      className={classNames(
                        tier.featured ? 'border-[#a8b545] dark:border-[#a8b545]' : 'border-transparent',
                        'border-t-2 pt-10',
                      )}
                    >
                      <p
                        className={classNames(
                          tier.featured ? 'text-[#a8b545] dark:text-[#a8b545]' : 'text-gray-900 dark:text-white',
                          'text-sm/6 font-semibold',
                        )}
                      >
                        {tier.name}
                      </p>
                      <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">{tier.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="-mt-6 space-y-16">
                {sections.map((section) => (
                  <div key={section.name}>
                    <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">{section.name}</h3>
                    <div className="relative -mx-8 mt-10">
                      {/* Fake card backgrounds */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                      >
                        <div className="size-full rounded-lg bg-white shadow-xs dark:bg-gray-800/50 dark:shadow-none" />
                        <div className="size-full rounded-lg bg-white shadow-xs dark:bg-gray-800/50 dark:shadow-none" />
                        <div className="size-full rounded-lg bg-white shadow-xs dark:bg-gray-800/50 dark:shadow-none" />
                      </div>

                      <table className="relative w-full border-separate border-spacing-x-8">
                        <thead>
                          <tr className="text-left">
                            <th scope="col">
                              <span className="sr-only">Feature</span>
                            </th>
                            {tiers.map((tier) => (
                              <th key={tier.id} scope="col">
                                <span className="sr-only">{tier.name} tier</span>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.features.map((feature, featureIdx) => (
                            <tr key={feature.name}>
                              <th
                                scope="row"
                                className="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-gray-900 dark:text-white"
                              >
                                {feature.name}
                                {featureIdx !== section.features.length - 1 ? (
                                  <div className="absolute inset-x-8 mt-3 h-px bg-gray-200 dark:bg-white/10" />
                                ) : null}
                              </th>
                              {tiers.map((tier) => (
                                <td key={tier.id} className="relative w-1/4 px-4 py-0 text-center">
                                  <span className="relative size-full py-3">
                                    {typeof feature.tiers[tier.name] === 'string' ? (
                                      <span
                                        className={classNames(
                                          tier.featured
                                            ? 'font-semibold text-[#a8b545] dark:text-[#a8b545]'
                                            : 'text-gray-900 dark:text-white',
                                          'text-sm/6',
                                        )}
                                      >
                                        {feature.tiers[tier.name]}
                                      </span>
                                    ) : (
                                      <>
                                                                                 {feature.tiers[tier.name] === true ? (
                                           <CheckIcon
                                             aria-hidden="true"
                                             className="mx-auto size-5 text-[#a8b545] dark:text-[#a8b545]"
                                           />
                                         ) : (
                                           <XMarkIcon
                                             aria-hidden="true"
                                             className="mx-auto size-5 text-gray-400 dark:text-gray-600"
                                           />
                                         )}

                                        <span className="sr-only">
                                          {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                        </span>
                                      </>
                                    )}
                                  </span>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Fake card borders */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                      >
                        {tiers.map((tier) => (
                          <div
                            key={tier.id}
                            className={classNames(
                              tier.featured
                                ? 'ring-2 ring-[#a8b545] dark:ring-[#a8b545]'
                                : 'ring-1 ring-gray-900/10 dark:ring-white/10',
                              'rounded-lg',
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </form>

      {/* 6. Frequently Asked Questions */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-nexusbyte-primary-dark mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-5 text-left text-lg font-medium text-nexusbyte-primary-dark focus:outline-none hover:bg-gray-100"
                  aria-expanded={openFaqIndex === index}
                >
                  <span>{faq.question}</span>
                                     {openFaqIndex === index ? <ChevronUpIcon className="w-6 h-6 text-[#a8b545]" /> : <ChevronDownIcon className="w-6 h-6 text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-5 pb-5 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIAgentsAutomationPage;
