
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, UsersIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '../components/icons';

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


const UnifiedCommsPage: React.FC = () => {
    const coreCapabilitiesData = [
        { title: "Cloud-Based Calling & VoIP", icon: PhoneIcon, items: ["Hosted PBX with business VoIP numbers", "3CX, Zoom Phone, and Microsoft Teams Calling plans", "Auto-attendants, call queues, call recording, and IVR menus", "Port existing numbers and set up local or international extensions"] },
        { title: "Video Conferencing & Meeting Rooms", icon: UsersIcon, items: ["Microsoft Teams, Zoom, and Google Meet integrations", "HD video, screen sharing, transcription, and breakout rooms", "Smart scheduling and in-platform calendar syncing"] },
        { title: "Team Messaging & Chat", icon: ChatBubbleLeftRightIcon, items: ["Internal chat channels, topic threads, and @mentions", "File sharing, document previews, and reaction features", "Sync across desktop and mobile with encryption"] },
        { title: "Omni-Channel Support", icon: ChatBubbleLeftRightIcon, items: ["Live chat, WhatsApp for Business, and social inbox integration", "Sync tickets with helpdesk (ByteDesk or other CRM tools)", "Chatbots (Nova-powered) with escalation paths to agents"] },
        { title: "Presence & Availability Management", icon: UsersIcon, items: ["Set status (online, DND, away, in meeting)", "Calendar-aware presence linked to Outlook or Google", "Ring groups and presence-based call routing"] },
    ];

    const whoNeedsThisData = [
        { role: "Sales Teams", needs: "VoIP, CRM diallers, smart call routing" },
        { role: "Remote Staff", needs: "Video, chat, and VoIP from any device" },
        { role: "Support Teams", needs: "Live chat, IVR, escalations to voice/video" },
        { role: "Executives", needs: "Unified dashboards, meeting consolidation" },
    ];
    
    const whyNexusByteData = [
        "Direct Microsoft & Zoom partner",
        "South African VoIP-ready numbers",
        "Custom onboarding for support, sales, or executive use cases",
        "AI-integrated messaging with Nova chatbot",
    ];

    const pricingData = [
        { plan: "Comms Core", cost: "R299", includes: "VoIP number, internal chat, calendar sync", featured: false },
        { plan: "Comms Pro", cost: "R499", includes: "+ Video, smart routing, Teams/Zoom PBX", featured: true },
        { plan: "Comms Omni", cost: "R899", includes: "+ Omni-channel, chatbot, analytics", featured: false },
    ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ChatBubbleLeftRightIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Unified Communications
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            NexusByte’s Unified Communications solutions integrate voice, video, messaging, and collaboration tools into a seamless experience—optimised for hybrid teams, remote support, and customer-facing operations.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "One platform. Every message. All teams connected."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <Section title="Core Capabilities" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreCapabilitiesData.map((offering, index) => {
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
      
      {/* Who Needs Unified Comms Table Section */}
      <Section title="Who Needs Unified Comms?">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Organisation Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Communication Needs Solved</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {whoNeedsThisData.map((item) => (
                <tr key={item.role} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.role}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.needs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section title="Pricing (Indicative)" className="bg-gray-50" subtitle="All plans include mobile and desktop access.">
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
                    <p className={`text-3xl font-extrabold mb-1 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.cost}</p>
                    <p className={`text-sm mb-6 ${plan.featured ? 'text-gray-400' : 'text-gray-600'}`}>Monthly Per User</p>
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
              className="flex items-center text-left bg-blue-50 p-4 rounded-lg shadow-sm"
            >
              <CheckIcon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-blue-800 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Connect the Dots Across Devices" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Your teams shouldn’t chase messages. Let them flow through one platform.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:unified@nexusbyte.co.za?subject=Inquiry about Unified Communications"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: unified@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Book a unified communications assessment via Nova
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default UnifiedCommsPage;