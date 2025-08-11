
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, WifiIcon, BriefcaseIcon, CloudArrowUpIcon, ChartPieIcon, CommandLineIcon, CogIcon } from '../../../components/icons';
import StandardHeroSection from '../../../components/StandardHeroSection';

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


const InfrastructureManagementPage: React.FC = () => {
    const coreCapabilitiesData = [
        { title: "Network Management & Optimisation", icon: WifiIcon, items: ["Switch, router, and firewall configuration", "VLANs, VPNs, QoS tuning for VOIP/data separation", "Secure wireless network deployment (indoor/outdoor)"] },
        { title: "Server Provisioning & Management", icon: BriefcaseIcon, items: ["On-prem and virtual server setup (Windows/Linux)", "Active Directory, file sharing, print servers", "Backup configuration and failover design"] },
        { title: "Cloud & Hybrid Integration", icon: CloudArrowUpIcon, items: ["Microsoft 365, Azure, and Google Cloud services", "VPN & remote desktop gateway setup", "Local-Cloud hybrid file storage strategies"] },
        { title: "Asset Visibility & Compliance", icon: ChartPieIcon, items: ["Infrastructure mapping (logical/physical diagrams)", "Uptime monitoring and alerting dashboards", "Software licensing & device audit compliance"] },
        { title: "Infrastructure as Code (IaC) Options", icon: CommandLineIcon, items: ["Automate server/network provisioning (Ansible, Terraform)", "CI/CD pipeline integration for dev infrastructure", "Perfect for growing SaaS/dev teams"] },
    ];

    const suitableForData = [
        { environment: "Multi-office Businesses", useCase: "Inter-office networking, VPN & shared access" },
        { environment: "Schools & NGOs", useCase: "Centralised file servers, printers, user control" },
        { environment: "Dev Teams", useCase: "Git server setup, container infra, backups" },
    ];
    
    const addOnsData = [
        "24/7 Infrastructure monitoring",
        "Nova integration for alerts, triggers, and insights",
        "Hardware procurement and warranty tracking",
        "Cabling & structured networking installs",
    ];

    const pricingData = [
        { tier: "Basic Infra", price: "R3,000/month", inclusions: "LAN/Wi-Fi, switch/router, monitoring", featured: false },
        { tier: "Hybrid Infra", price: "R6,500/month", inclusions: "+ Cloud apps, VPN, server infra", featured: true },
        { tier: "Custom", price: "Quote-Based", inclusions: "Tailored infra with SLAs + Nova support", featured: false },
    ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Infrastructure Management"
        subtitle="Build a Reliable Digital Backbone"
        description="Our service helps your business scale with secure, high-performance, and monitored networks, servers, and IT hardware—on-premises, cloud, or hybrid."
      >
        <div className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
          <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "We turn complex infrastructure into a seamless operational advantage."
          </blockquote>
        </div>
      </StandardHeroSection>

      {/* Core Capabilities Section */}
      <Section title="Core Capabilities" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreCapabilitiesData.map((capability, index) => {
                const Icon = capability.icon;
                return (
                    <motion.div
                        key={capability.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left h-full flex flex-col"
                    >
                        <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                        <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">{capability.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-600 flex-grow">
                            {capability.items.map((item, idx) => (
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

      {/* Suitable For Table Section */}
      <Section title="Suitable For">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Environment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {suitableForData.map((item) => (
                <tr key={item.environment} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.environment}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.useCase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section title="Pricing Snapshot" className="bg-gray-50">
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
                    <h3 className="text-2xl font-bold mb-3">{plan.tier}</h3>
                    <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                    <div className="flex-grow mb-8">
                      <p className="text-sm font-semibold mb-2">Inclusions:</p>
                      <p className="text-sm">{plan.inclusions}</p>
                    </div>
                    <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                        {plan.price === 'Quote-Based' ? 'Get a Quote' : 'Choose Tier'}
                    </button>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Add-on Services Section */}
       <Section title="Optional Add-on Services">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {addOnsData.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center bg-blue-50 p-3 rounded-md shadow-sm"
            >
              <CheckIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-blue-800 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section title="Need Infrastructure That Scales?" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Let NexusByte modernise your IT foundation with secure and supported infrastructure management.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:infra@nexusbyte.co.za?subject=Inquiry about Infrastructure Management"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Contact Us: infra@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
             <p className="mt-6 text-gray-400 text-sm">Request an infrastructure audit or quotation via Nova.</p>
        </motion.div>
      </Section>
    </div>
  );
}

export default InfrastructureManagementPage;
