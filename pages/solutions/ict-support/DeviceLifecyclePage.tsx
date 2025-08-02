

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, BriefcaseIcon, CogIcon, BoltIcon, CalendarIcon, ShieldCheckIcon } from '../../../components/icons';

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

const DeviceLifecyclePage: React.FC = () => {

    const coreServicesData = [
        { title: "Procurement & Deployment", icon: BriefcaseIcon, items: ["Hardware sourcing (laptops, desktops, switches, etc.)", "Imaging, setup, and tagging for asset tracking", "Pre-installed software and network configurations"] },
        { title: "Repairs & OEM-Certified Support", icon: CogIcon, items: ["Certified repair centre for HP, Asus, Acer, Microsoft, Apple, Cisco", "In-warranty and out-of-warranty servicing", "Part replacements, diagnostics, and bench repairs"] },
        { title: "Upgrade-as-a-Service (UaaS)", icon: BoltIcon, items: ["Subscription-based upgrade insurance option", "Monthly device levy per user or per device", "Scheduled hardware refresh every 24–36 months", "Covers accidental damage, wear and component failures"] },
        { title: "Asset Monitoring & Warranty Management", icon: CalendarIcon, items: ["Track warranty dates and device health", "Scheduled audits and reporting", "Nova integration for device alerts and expiry notifications"] },
        { title: "Decommissioning & Secure Retirement", icon: ShieldCheckIcon, items: ["Full data-wipe (DoD standards)", "Refurbishment or certified e-waste disposal", "Chain-of-custody documentation"] },
    ];

    const useCasesData = [
        { need: "New Hires", value: "Provisioned, tagged, and ready-to-go devices" },
        { need: "Staff Turnover", value: "Onboard/offboard workflows with audit trail" },
        { need: "Tech Upgrades", value: "Subscription-based upgrade planning" },
        { need: "Device Recovery", value: "Certified repairs + replacement guarantee" },
    ];

    const pricingData = [
        { plan: "Base Lifecycle", price: "R120/device", includes: "Tracking, onboarding, retirement", featured: false },
        { plan: "UaaS Add-On", price: "R300/device", includes: "Upgrade cover + scheduled refresh", featured: true },
        { plan: "Repair SLA", price: "Custom", includes: "Certified OEM repair support plan", featured: false },
    ];
    
    const whyNexusByteData = [
        "Certified repair centre across top OEM brands",
        "Insurance-like upgrade cover for peace of mind",
        "Nova integration for tracking & reminders",
        "Secure lifecycle protocols for full compliance",
    ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <BriefcaseIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Device Lifecycle Management
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            From Procurement to Retirement—Simplified. We manage the full journey of every endpoint to maximize its performance and lifespan.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Your IT hardware is an investment—let’s maximise its performance and lifespan."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <Section title="Core Services" className="bg-gray-50">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreServicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left h-full flex flex-col"
                    >
                        <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                        <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">{service.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-600 flex-grow">
                            {service.items.map((item, idx) => (
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
      
      {/* Use Cases Table Section */}
      <Section title="Use Cases">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Business Need</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Lifecycle Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {useCasesData.map((item) => (
                <tr key={item.need} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.need}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section title="Pricing Structure" className="bg-gray-50" subtitle="Minimum of 10 devices required. Volume pricing available.">
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
                    <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                    <div className="flex-grow mb-8">
                      <p className="text-sm font-semibold mb-2">Includes:</p>
                      <p className="text-sm">{plan.includes}</p>
                    </div>
                    <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                        {plan.price === 'Custom' ? 'Contact Sales' : 'Choose Plan'}
                    </button>
                </motion.div>
            ))}
        </div>
      </Section>
      
      {/* Why NexusByte Section */}
      <Section title="Why NexusByte for Device Management?">
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
      <Section title="Keep Your Tech Fleet Smart and Secure" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="From laptops to firewalls, NexusByte protects your device investment from day one.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:devices@nexusbyte.co.za?subject=Inquiry about Device Lifecycle Management"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Contact Us: devices@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
             <p className="mt-6 text-gray-400 text-sm">Request a lifecycle audit or plan via Nova.</p>
        </motion.div>
      </section>
    </div>
  );
}

export default DeviceLifecyclePage;