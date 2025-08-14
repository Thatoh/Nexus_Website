import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CpuChipIcon, PuzzlePieceIcon, BoltIcon, CreditCardIcon, UsersIcon, ChatBubbleOvalLeftEllipsisIcon, TicketIcon, ChevronDownIcon, ChevronUpIcon, ArrowRightIcon, CheckIcon, ArrowLeftIcon } from '../components/icons'; // Added CheckIcon and ArrowLeftIcon

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

const pricingPlans = [
  { name: 'Starter', price: 'R499', target: 'Individuals & Startups', requests: '20,000 /mo', integrations: 'All NexusByte Apps', support: 'Standard Support', cta: 'Choose Plan', featured: false },
  { name: 'Pro', price: 'R1499', target: 'Growing Teams', requests: '100,000 /mo', integrations: 'All NexusByte Apps', support: 'Priority Support', cta: 'Choose Plan', featured: true },
  { name: 'Enterprise', price: 'Contact Us', target: 'Large-Scale Operations', requests: 'Custom Volume', integrations: 'All NexusByte Apps', support: 'Dedicated Account Manager', cta: 'Contact Sales', featured: false },
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
              className="px-8 py-3 sm:px-10 sm:py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 text-lg sm:text-xl"
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
                className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-2xl hover:border-nexusbyte-accent-green"
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
                            <div className="bg-nexusbyte-accent-green/10 text-nexusbyte-accent-green p-3 rounded-full mb-3">
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
            <Link to="/docs/byok-integration" className="text-nexusbyte-accent-green font-semibold hover:underline text-lg">
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
            Introducing <strong className="text-nexusbyte-accent-green">Nova AI</strong>, the native intelligence layer for the NexusByte ecosystem. Get the combined power of the world's best models, plus our own proprietary AI, through one simple subscription.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {novaFeatures.map(feature => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-colors">
                  <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4 mx-auto" />
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
                    ? 'border-nexusbyte-accent-green text-nexusbyte-accent-green' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400'}`}
              >
                <uc.icon className={`inline w-5 h-5 mr-2 ${activeUseCaseTab === uc.id ? 'text-nexusbyte-accent-green' : 'text-gray-400'}`} />
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
                    Powered by: <span className="font-semibold text-nexusbyte-accent-green">Nova AI</span> or <span className="font-semibold">Your Connected AI</span>
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
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-nexusbyte-primary-dark mb-3">Nova AI Plans & Pricing</h2>
            <p className="text-gray-600">All plans include access to Gemini, ChatGPT, Claude, and our proprietary Nova model.</p>
            <p className="text-gray-600 mt-1">Just want to connect your own model? It's free. Your provider's rates apply.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map(plan => (
              <div key={plan.name} className={`rounded-xl p-8 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl
                ${plan.featured ? 'bg-nexusbyte-primary-dark text-white ring-4 ring-nexusbyte-accent-green transform scale-105' : 'bg-gray-50 text-nexusbyte-primary-dark border border-gray-200'}`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-primary-dark'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>{plan.target}</p>
                <p className={`text-4xl font-extrabold mb-1 ${plan.featured ? 'text-white' : 'text-nexusbyte-primary-dark'}`}>{plan.price}</p>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.name !== 'Enterprise' ? '/mo' : ''}</p>
                
                <ul className={`space-y-3 text-sm mb-8 flex-grow ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center"><CheckIcon className={`w-5 h-5 mr-2 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} /> AI Requests: {plan.requests}</li>
                  <li className="flex items-center"><CheckIcon className={`w-5 h-5 mr-2 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} /> Integrates with: {plan.integrations}</li>
                  <li className="flex items-center"><CheckIcon className={`w-5 h-5 mr-2 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} /> Support: {plan.support}</li>
                </ul>
                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : `/signup?plan=${plan.name.toLowerCase()}`}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200
                    ${plan.featured 
                      ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80' 
                      : 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  {openFaqIndex === index ? <ChevronUpIcon className="w-6 h-6 text-nexusbyte-accent-green" /> : <ChevronDownIcon className="w-6 h-6 text-gray-400" />}
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
