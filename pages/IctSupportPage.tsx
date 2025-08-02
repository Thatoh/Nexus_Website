
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UsersIcon, CogIcon, ShieldCheckIcon, BriefcaseIcon, CheckIcon, ArrowRightIcon, CpuChipIcon } from '../components/icons';

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

const ServiceCard: React.FC<{ icon: React.FC<React.SVGProps<SVGSVGElement>>; title: string; tagline: string; features: string[]; link: string; index: number }> = ({ icon: Icon, title, tagline, features, link, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex-shrink-0">
        <div className="inline-block bg-nexusbyte-accent-green/10 p-4 rounded-xl mb-4">
            <Icon className="w-10 h-10 text-nexusbyte-accent-green" />
        </div>
        <h3 className="text-2xl font-bold text-nexusbyte-primary-dark">{title}</h3>
        <p className="text-gray-500 italic mt-1 mb-4">{tagline}</p>
      </div>
      <ul className="space-y-3 text-sm text-gray-700 flex-grow mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link to={link} className="font-semibold text-nexusbyte-accent-green hover:underline inline-flex items-center group">
          Learn more <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );

const IctSupportPage: React.FC = () => {
    const servicesData = [
        { 
            icon: UsersIcon, 
            title: "Managed IT Services", 
            tagline: "Your always-on tech partner",
            features: [
                "24/7 helpdesk and ticket resolution",
                "Remote and onsite user support",
                "Proactive monitoring & incident response",
                "OS patching, updates, and antivirus management",
                "SLA-based service delivery with reporting"
            ],
            link: "/solutions/ict-support/managed-it"
        },
        { 
            icon: CogIcon, 
            title: "Infrastructure Management",
            tagline: "Optimise your digital foundation",
            features: [
                "Network topology design & maintenance",
                "Router, switch, firewall & AP configuration",
                "Server setup (physical & virtual)",
                "VPNs, VLANs, and multi-site support",
                "Asset tracking & lifecycle visibility"
            ],
            link: "/solutions/ict-support/infrastructure"
        },
        { 
            icon: ShieldCheckIcon, 
            title: "Backup & Disaster Recovery",
            tagline: "Data loss is not an option",
            features: [
                "Automated daily backups (local & cloud)",
                "Encrypted, redundant storage options",
                "Rapid restore & failover systems",
                "DR plans and business continuity workflows",
                "RTO/RPO-aligned strategies"
            ],
            link: "/solutions/ict-support/backup-recovery"
        },
        { 
            icon: BriefcaseIcon, 
            title: "Device Lifecycle Management",
            tagline: "Maximise device value from procurement to disposal",
            features: [
                "IT asset procurement & configuration",
                "Imaging, deployment & tagging",
                "Scheduled upgrades and warranty tracking",
                "Secure device retirement (data wipe, resale, or recycle)",
                "User onboarding/offboarding kits"
            ],
            link: "/solutions/ict-support/device-lifecycle"
        },
    ];

    const whyNexusByteData = [
        "POPIA-compliant processes & data handling",
        "On-demand engineers and field technicians",
        "Detailed monthly SLA reporting",
        "Integrated with Nova for smart alerting & support triage",
        "Flexible pricing: per-device, per-user, or flat monthly tiers"
    ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <CogIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Proactive ICT Support
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            We offer a complete suite of Proactive ICT Support Services designed to help businesses of all sizes maintain, optimise, and secure their technology infrastructure.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "From helpdesk to hardware – we manage it all, so you can focus on what matters."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <Section title="Our Proactive ICT Support Services">
          <div className="grid md:grid-cols-2 gap-8 mt-12">
              {servicesData.map((service, index) => (
                  <ServiceCard 
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      tagline={service.tagline}
                      features={service.features}
                      link={service.link}
                      index={index}
                  />
              ))}
          </div>
      </Section>

      {/* Why Us Section */}
      <Section title="Why NexusByte ICT Support?" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12 text-left max-w-3xl mx-auto">
          {whyNexusByteData.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start bg-white p-4 rounded-lg shadow-sm"
            >
              <CpuChipIcon className="w-6 h-6 text-nexusbyte-accent-green mr-4 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Let’s Keep Your Business Running" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Whether you need fully managed services or support for internal IT, NexusByte’s ICT Support is built to scale and simplify operations.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:support@nexusbyte.co.za?subject=Inquiry about ICT Support Services"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: support@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">Or book a call via the Nova Client Portal.</p>
        </motion.div>
      </Section>
    </div>
  );
}

export default IctSupportPage;
