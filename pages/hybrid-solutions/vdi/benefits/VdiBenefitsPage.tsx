
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ShieldCheckIcon, UsersIcon, CogIcon, ArrowRightIcon, CpuChipIcon } from '../../../../components/icons';


const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean}> = ({ title, subtitle, children, className = '', textWhite = false }) => (
  <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textWhite ? 'text-white' : 'text-nexusbyte-primary-dark'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 text-lg max-w-3xl mx-auto ${textWhite ? 'text-gray-300' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
      <div className="mt-12">
        {children}
      </div>
    </div>
  </section>
);


const VdiBenefitsPage: React.FC = () => {

    const benefitsData = [
        { icon: ShieldCheckIcon, title: "Security & Control", description: "Data stays in the data centre—not on user devices. Simplified compliance." },
        { icon: UsersIcon, title: "Mobility", description: "Access desktops from any device, anywhere—ideal for remote work and BYOD." },
        { icon: CpuChipIcon, title: "Cost Efficiency", description: "Lower hardware costs. Longer device lifespan. Easier support and patching." },
        { icon: CogIcon, title: "Centralised IT", description: "Streamlined provisioning, updates, and software rollouts across all users." },
        { icon: ShieldCheckIcon, title: "Business Continuity", description: "Operate through outages, disasters, and lockdowns with always-on access." },
        { icon: UsersIcon, title: "Scalability", description: "Instantly add or remove users and resources based on demand." },
    ];
    
    const planningRoadmapData = [
        { step: 1, title: "Assess Business Needs", description: "Identify departments and user personas (task workers, power users, contractors). Understand app usage, storage needs, compliance levels." },
        { step: 2, title: "Choose a VDI Model", description: "Persistent VDI (dedicated desktops like Windows 365) vs. Non-Persistent VDI (shared desktops like AVD pooled)." },
        { step: 3, title: "Select Deployment Architecture", description: "Cloud-native (Azure Virtual Desktop, Windows 365), Hybrid (on-prem with Citrix or VMware), or Fully on-prem." },
        { step: 4, title: "Estimate Resources", description: "vCPU, RAM, storage, GPU (if needed), bandwidth, and licensing." },
        { step: 5, title: "User & Security Policies", description: "Role-based access control, session timeouts, conditional access, and MFA policies." },
        { step: 6, title: "Pilot & Feedback", description: "Start with 10–25 users in different roles. Gather feedback on performance, usability, and support." },
        { step: 7, title: "Full Rollout + Optimisation", description: "Roll out in phases per department. Monitor usage, adjust configurations, and automate provisioning." },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-gray-50">
                <div className="max-w-screen-xl mx-auto px-4 py-20 md:py-28 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-nexusbyte-primary-dark mb-4"
                    >
                        VDI Benefits & Planning
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Build a Smarter, Secure, and Scalable Digital Workplace
                    </motion.p>
                </div>
            </div>

            {/* Why VDI? Section */}
            <Section title="🌟 Why Businesses Choose VDI">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefitsData.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg"
                        >
                            <benefit.icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* VDI Planning Roadmap */}
            <Section title="🏗 VDI Planning Roadmap" className="bg-gray-50">
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
                    <div className="space-y-12">
                        {planningRoadmapData.map((stage, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-8"
                            >
                                <div className="flex-shrink-0 w-24 h-24 bg-white text-nexusbyte-accent-green rounded-full flex items-center justify-center z-10 shadow-lg border-4 border-gray-50 text-3xl font-bold">
                                    {stage.step}
                                </div>
                                <div className="text-left flex-grow bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-nexusbyte-primary-dark mb-2">{stage.title}</h3>
                                    <p className="text-gray-600">{stage.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section title="🧭 Start Your VDI Journey">
                 <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:vdi@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-primary-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-gray-800 transition-colors text-lg">
                        📧 Speak to our infrastructure consultants
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="#" className="inline-flex items-center justify-center font-semibold text-lg text-nexusbyte-accent-green hover:underline">
                        📥 Download the “VDI Planning Guide 2025”
                    </a>
                </div>
            </Section>

        </div>
    );
};

export default VdiBenefitsPage;
