
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
            <CheckIcon className="w-5 h-5 mr-2 mt-0.5 text-nexusbyte-accent-green flex-shrink-0" />
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
     {/* Hero Section (Full Screen) */}
<div className="relative isolate overflow-hidden bg-nexusbyte-primary-dark min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
  {/* Background image */}
  <img
    alt=""
    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
  />

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

  {/* Optional faint icon watermark */}
  <div className="pointer-events-none absolute inset-0 opacity-10">
    <CogIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-300/40 rotate-12" />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-4xl text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl sm:text-6xl font-extrabold text-white mb-6"
    >
      Proactive ICT Support
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
    >
      We offer a complete suite of Proactive ICT Support Services designed to help businesses of all sizes
      maintain, optimise, and secure their technology infrastructure.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-8 text-center max-w-2xl mx-auto bg-white/5 p-6 rounded-lg shadow-lg ring-1 ring-white/10 backdrop-blur"
    >
      <blockquote className="text-xl italic text-gray-100 leading-relaxed">
        "From helpdesk to hardware – we manage it all, so you can focus on what matters."
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
</div>



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
<Section title="Why NexusByte ICT Support?" className="bg-gray-50 py-16 md:py-20">
  <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 mt-12 text-left max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {whyNexusByteData.map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="flex items-start bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <CpuChipIcon className="w-7 h-7 text-nexusbyte-accent-green mr-4 mt-1 flex-shrink-0" />
        <span className="text-gray-700 text-base">{feature}</span>
      </motion.div>
    ))}
  </div>
</Section>


     {/* CTA Section */}
<Section
  title="Let’s Keep Your Business Running"
  className="bg-nexusbyte-primary-dark py-16 md:py-20"
  textWhite
  subtitle="Whether you need fully managed services or support for internal IT, NexusByte’s ICT Support is built to scale and simplify operations."
>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-10"
    >
      <a
        href="mailto:support@nexusbyte.co.za?subject=Inquiry about ICT Support Services"
        className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
      >
        Email Us: support@nexusbyte.co.za
        <ArrowRightIcon className="w-5 h-5 ml-3" />
      </a>
      <p className="mt-6 text-gray-300 text-sm">
        Or book a call via the Nova Client Portal.
      </p>
    </motion.div>
  </div>
</Section>
    </div>
  );
}

export default IctSupportPage;
