
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, UsersIcon, CpuChipIcon, LockClosedIcon } from '../components/icons';
import BlurFollowText from '../components/BlurFollowText';

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

const HybridWorkPage: React.FC = () => {
    const whatWeOfferData = [
        { title: "Unified Communications & Collaboration", icon: UsersIcon, items: ["Microsoft Teams & Google Meet enablement", "Business-grade VoIP integration (3CX, Zoom Phone, etc.)", "Shared workspaces, calendars, and project management portals", "Document co-authoring and real-time sync (OneDrive, Google Drive)"] },
        { title: "Cloud PCs & Virtual Workstations", icon: CpuChipIcon, items: ["Windows 365 & Azure Virtual Desktop deployment", "Always-on, fully managed desktops accessible from any device", "GPU-powered Cloud PCs for design, dev, and AI workloads", "Preconfigured environments for developers, designers, and execs"] },
        { title: "Secure Access Anywhere (Zero Trust Controls)", icon: LockClosedIcon, items: ["MFA, SSO & conditional access for cloud and on-prem resources", "Remote device posture checks and encrypted tunnel enforcement", "Secure VPNs and cloud firewalls", "Access segmentation by role, location, or risk level"] },
        { title: "Device & Endpoint Management", icon: ShieldCheckIcon, items: ["Mobile Device Management (MDM) for laptops, phones, tablets", "Endpoint patching, policy enforcement, and remote wipes", "Asset lifecycle tracking and compliance enforcement"] },
    ];

    const useCasesData = [
        { useCase: "Field Sales & Consultants", solution: "Cloud PC access with VoIP + CRM sync" },
        { useCase: "Remote Developers & Designers", solution: "GPU-enabled desktops with Git & design toolkits" },
        { useCase: "Cross-border Teams", solution: "Unified calendars, chat, cloud file access" },
        { useCase: "Security-First Organisations", solution: "Zero Trust enforcement, device control, data loss prevention" },
    ];
    
    const whyNexusByteData = [
        "Microsoft 365 & Azure specialists",
        "Prebuilt cloud environments per user role",
        "POPIA-compliant configurations",
        "Nova-powered support, chat, and monitoring",
    ];

    const pricingData = [
        { plan: "Hybrid Starter", cost: "R1,499/user", includes: "VoIP, M365/Google, VPN, chat tools", featured: false },
        { plan: "Hybrid Cloud PC", cost: "R2,499/user", includes: "+ Cloud PC, endpoint MDM, storage sync", featured: true },
        { plan: "Hybrid Enterprise", cost: "R4,999/user", includes: "+ Zero Trust, full compliance, reporting & DLP", featured: false },
    ];

  return (
    <div className="bg-white">
     {/* Hero Section (full screen) */}
<section className="relative isolate bg-nexusbyte-primary-dark text-white min-h-[100svh] flex items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 overflow-hidden">
  {/* Optional faint icon watermark */}
  <div className="pointer-events-none absolute inset-0 opacity-10">
    <UsersIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-300/40 rotate-12" />
  </div>

  {/* Blurred gradient blob (top) */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-4xl text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <BlurFollowText text="Hybrid Work" radius={150} blur={15} />
    </motion.div>
    
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-nexusbyte-accent-green"
    >
      Solutions
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
    >
      Empower your team to thrive—whether remote, on-site, or on the move. We deliver secure access, seamless communication, and cloud-based productivity tools that ensure continuity without compromising performance.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-8 text-center max-w-2xl mx-auto bg-white/5 p-6 rounded-lg shadow-lg ring-1 ring-white/10 backdrop-blur"
    >
      <blockquote className="text-xl italic text-gray-100 leading-relaxed">
        "Hybrid work isn’t just a setup—it’s a strategic advantage."
      </blockquote>
    </motion.div>
  </div>

  {/* Blurred gradient blob (bottom) */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
    />
  </div>
</section>


      {/* What We Offer Section */}
      <Section title="What We Offer" className="bg-gray-50 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 mt-8">
            {whatWeOfferData.map((offering, index) => {
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
      
      {/* Hybrid Work Use Cases Table Section */}
      <Section title="Hybrid Work Use Cases">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Use Case</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Our Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {useCasesData.map((item) => (
                <tr key={item.useCase} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.useCase}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section title="Pricing Packages (Indicative)" className="bg-gray-50 py-16 md:py-20" subtitle="Volume and NPO discounts available.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-8">
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
                        Choose Plan
                    </button>
                </motion.div>
            ))}
        </div>
      </Section>
      
      {/* Why NexusByte Section */}
      <Section title="Why NexusByte for Hybrid Work?">
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
      <Section title="Bridge the Office Gap—Securely" className="bg-nexusbyte-primary-dark py-16 md:py-20" textWhite
               subtitle="Empower your people, wherever they are.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-8"
        >
            <a
              href="mailto:hybrid@nexusbyte.co.za?subject=Inquiry about Hybrid Work Solutions"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: hybrid@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Book a hybrid work enablement session via Nova
            </p>
        </motion.div>
      </Section>
    </div>
  );
}

export default HybridWorkPage;
