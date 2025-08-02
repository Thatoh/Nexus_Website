
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, BriefcaseIcon, CpuChipIcon, ShieldCheckIcon, UsersIcon, CogIcon, HomeIcon, LockClosedIcon } from '../components/icons';

// A more specific icon mapping for industries
const industryIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  "Healthcare": ShieldCheckIcon,
  "Legal & Consulting": BriefcaseIcon,
  "Financial Services": LockClosedIcon,
  "Education": UsersIcon,
  "Government & Public Sector": HomeIcon,
  "Retail & E-Commerce": CpuChipIcon, // Using AI/Chip icon as a proxy for modern retail
  "Construction & Engineering": CogIcon,
  "Logistics & Transport": CogIcon, // Reusing cog for now
};

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string; textWhite?: boolean}> = ({ title, subtitle, children, className = 'py-16 md:py-20', textWhite }) => (
  <section className={`${className} px-4 sm:px-6 lg:px-8`}>
    <div className="max-w-7xl mx-auto text-center">
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

const UseCasesByIndustryPage: React.FC = () => {

    const industriesData = [
        { name: "Healthcare", solutions: "Zero Trust, Secure Remote Access, Endpoint Monitoring, Cloud PCs for health workers", useCase: "Enable mobile doctors and secure EMR access from the field", compliance: "POPIA, HPCSA" },
        { name: "Legal & Consulting", solutions: "Data Loss Prevention, Document Lifecycle Management, Microsoft 365, Secure Email", useCase: "Draft, store, and collaborate on legal documents securely", compliance: "POPIA, FSCA, ISO27001" },
        { name: "Financial Services", solutions: "AI-powered automation, Compliance Dashboards, SOC-as-a-Service, Pen Testing", useCase: "Real-time anomaly detection and reporting, encrypted document exchange", compliance: "FSCA, FICA, PCI DSS" },
        { name: "Education", solutions: "Collaboration Tools, Classroom Virtual Machines, Cloud Storage", useCase: "Host hybrid classrooms, manage virtual labs", compliance: "POPIA for learner data" },
        { name: "Government & Public Sector", solutions: "Infrastructure Management, Cybersecurity, Public-facing Portals", useCase: "Deliver citizen services securely with uptime assurance", compliance: "Government IT Standards, POPIA" },
        { name: "Retail & E-Commerce", solutions: "Web Hosting, Secure Payment Integration, Endpoint Management, Backup & Recovery", useCase: "Run secure online stores with integrated VoIP and customer analytics", compliance: "" },
        { name: "Construction & Engineering", solutions: "Cloud PCs on-site teams, Project Collaboration Tools, Backup Solutions", useCase: "Share blueprints securely and collaborate from mobile devices", compliance: "" },
        { name: "Logistics & Transport", solutions: "Real-time Communication, Endpoint GPS Monitoring, Cloud Dashboards", useCase: "Track deliveries, run mobile hubs, centralise dispatch data", compliance: "" },
    ];
    
    const customSolutionsData = ["Non-Profits", "Energy & Utilities", "Creative Agencies", "Manufacturing"];

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
            Use Cases by Industry
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            NexusByte understands that each industry faces distinct challenges. Our AI-driven, cloud-enabled, and security-first solutions are purpose-built to meet sector-specific needs—helping your organisation achieve operational resilience, regulatory compliance, and growth.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Not just digital transformation—intelligent industry transformation."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Industry Cards Section */}
      <Section title="Tailored Technology for Your Sector" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industriesData.map((industry, index) => {
                const Icon = industryIcons[industry.name] || BriefcaseIcon; // Fallback icon
                return (
                    <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left h-full flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-nexusbyte-accent-green/10 p-3 rounded-lg">
                                <Icon className="w-8 h-8 text-nexusbyte-accent-green" />
                            </div>
                            <h3 className="text-xl font-bold text-nexusbyte-primary-dark">{industry.name}</h3>
                        </div>
                        <div className="space-y-4 text-sm text-gray-600 flex-grow">
                            <div>
                                <p className="font-semibold text-gray-800 mb-1">Solution Set:</p>
                                <p>{industry.solutions}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 mb-1">Use Case:</p>
                                <p>{industry.useCase}</p>
                            </div>
                             {industry.compliance && (
                                <div>
                                    <p className="font-semibold text-gray-800 mb-1">Compliance Support:</p>
                                    <p className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full inline-block">{industry.compliance}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </Section>
      
      {/* Custom Solutions Section */}
      <Section title="Custom Industry Solutions">
        <p className="text-gray-600 mb-8">Not seeing your industry listed? We develop tailored stacks for:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {customSolutionsData.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <CheckIcon className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-700 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
             <a
              href="mailto:industry@nexusbyte.co.za?subject=Inquiry about Custom Industry Solutions"
              className="inline-flex items-center px-8 py-3 bg-nexusbyte-primary-dark text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition-colors transform hover:scale-105 text-lg"
            >
              Reach Out: industry@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-4 text-gray-500 text-sm">Or let Nova assist in building your industry-aligned stack.</p>
        </div>
      </Section>
    </div>
  );
}

export default UseCasesByIndustryPage;