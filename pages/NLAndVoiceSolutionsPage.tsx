import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, CpuChipIcon, ArrowRightIcon, UsersIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, GlobeAltIcon } from '../components/icons'; // Added necessary icons

// Reusable Section Component (similar to other pages)
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

// Core Offering Card
const CoreOfferingCard: React.FC<{title: string; items: string[]; icon: React.FC<React.SVGProps<SVGSVGElement>>; index: number}> = ({ title, items, icon: Icon, index }) => (
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


const NLAndVoiceSolutionsPage: React.FC = () => {

  const coreOfferingsData = [
    { title: "Natural Language Understanding (NLU)", icon: CpuChipIcon, items: ["Context-aware question answering (QA)", "Named Entity Recognition (NER) for legal, finance, medical", "Document summarisation and classification", "Multi-language query translation and understanding"] },
    { title: "Voice AI & Speech Recognition", icon: UsersIcon, items: ["Real-time speech-to-text transcription (English, isiZulu, Xhosa, Afrikaans and more)", "Voicebots with emotion-aware responses", "Telephony integration for IVR and call centres", "Voice analytics for customer tone and agent performance"] },
    { title: "Document Intelligence", icon: BriefcaseIcon, items: ["OCR-powered legal and contract review bots", "POPIA-compliant document redaction", "Automatic document tagging, labelling, and routing", "Custom language models for sector-specific documents"] },
    { title: "Sentiment & Emotion AI", icon: ChatBubbleLeftRightIcon, items: ["Real-time sentiment tracking on customer interactions", "Emotion classification in voice recordings", "Market perception modelling from reviews, surveys, or social media"] },
    { title: "AI Transcription & Translation Workflows", icon: GlobeAltIcon, items: ["Automated meeting transcription + summary agents", "Live captioning for compliance or accessibility", "Multilingual translation engines for customer service"] }
  ];

  const industryApplicationsData = [
    { name: "Legal", description: "Voice-based deposition transcription, statute interpretation bots", icon: BriefcaseIcon },
    { name: "Contact Centres", description: "Voice assistants, call sentiment scoring, agent analytics", icon: ChatBubbleLeftRightIcon },
    { name: "Banking", description: "Compliance monitoring, voice-based KYC", icon: GlobeAltIcon }, // Using Globe as placeholder, could be more specific
    { name: "Education", description: "Auto-captioning, language tutoring, voice-led LMS bots", icon: UsersIcon }, // Using UsersIcon as placeholder
    { name: "Public Sector", description: "Language access bots for citizens, transcription of community hearings", icon: CpuChipIcon } // Using CpuChip as placeholder
  ];

  const plansData = [
    { name: 'Voice Starter', price: 'R2,200/month', features: ["1 voice-enabled bot", "500 minutes of speech-to-text", "English-only support", "Web widget or WhatsApp deployment"], featured: false },
    { name: 'NLP Core', price: 'R4,900/month', features: ["NLP pipeline for Q&A, summarisation, classification", "Document ingestion (up to 1,000 pages/month)", "Basic sentiment dashboard"], featured: false },
    { name: 'Voice Pro', price: 'R9,800/month', features: ["3,000 speech minutes/month", "Multi-language transcription", "Sentiment + tone analytics", "Phone line or API integration", "Live agent handover capabilities"], featured: true },
    { name: 'NLP Enterprise', price: 'R18,000+/month', features: ["Fine-tuned custom NLP models (domain-specific)", "OCR document analysis", "Named Entity Recognition + redaction", "Integrated workflow engine (RAG + memory)", "Secure hosting + access control"], featured: false, ctaText: "Contact Sales" },
    { name: 'Real-Time Voice Desk', price: 'R29,000/month', features: ["Live voice assistant for call centres", "Emotion classification engine", "Real-time call transcription", "Agent performance dashboard", "Plug into existing IVR/telephony stacks"], featured: false, ctaText: "Contact Sales" },
  ];

  const whyChooseUsData = [
    "Hosted in South Africa, POPIA-compliant",
    "Trained on local languages and dialects",
    "Modular and API-ready for plug-and-play integration",
    "AI that listens, understands, and acts",
    "Scalable from chatbot to enterprise voice console"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nexusbyte-primary-dark via-gray-800 to-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Decorative icons, can adjust if too busy */}
          <UsersIcon className="absolute top-1/4 left-1/4 w-48 h-48 text-gray-700 transform rotate-12" />
          <CpuChipIcon className="absolute bottom-1/4 right-1/4 w-40 h-40 text-gray-600 transform -rotate-6" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            NLP & Voice AI Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8"
          >
            Bridging human language and machine intelligence—turning speech and text into actionable insight, automation, and engagement.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
          >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about NLP & Voice AI Solutions"
              className="px-8 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Book Discovery Session
            </a>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
       <Section title="Overview" 
               subtitle="We build conversational AI systems, transcription pipelines, sentiment models, and multilingual processing layers for businesses ready to harness the power of voice and text across customer service, compliance, market intelligence, and accessibility.">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-nexusbyte-accent-green">
            <blockquote className="text-xl italic text-gray-700 leading-relaxed">
            "From voicebots to legal document understanding—NexusByte gives your language data the intelligence it deserves."
            </blockquote>
        </motion.div>
      </Section>
      
      {/* Core Offerings Section */}
      <Section title="Core Offerings" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {coreOfferingsData.map((offering, index) => (
            <CoreOfferingCard key={offering.title} title={offering.title} items={offering.items} icon={offering.icon} index={index} />
          ))}
        </div>
      </Section>

      {/* Industry Applications Section */}
      <Section title="Industry Applications">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {industryApplicationsData.map((app, index) => {
            const Icon = app.icon || CpuChipIcon; // Fallback icon
            return (
              <motion.div 
                key={app.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border border-gray-200"
              >
                <Icon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
                <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-1">{app.name}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Available Packages Section */}
      <Section title="Available Packages" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 items-stretch">
          {plansData.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
         <p className="mt-8 text-sm text-gray-500">Custom enterprise packages available. Contact us for tailored solutions.</p>
      </Section>
      
      {/* Why Choose NexusByte NLP & Voice? Section */}
      <Section title="Why Choose NexusByte NLP & Voice?">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12 text-left max-w-3xl mx-auto">
          {whyChooseUsData.map((feature, index) => (
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

      {/* CTA Section */}
      <Section title="Let’s Talk (or Listen)" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Book a discovery session with our Voice/NLP engineers or start testing with Nova to experience our language models live. We turn your words—spoken or typed—into intelligent outcomes.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about NLP & Voice AI Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: solutions@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400">Or chat with Nova, our AI assistant, right here on the site!</p>
        </motion.div>
      </Section>
    </div>
  );
}

export default NLAndVoiceSolutionsPage;
