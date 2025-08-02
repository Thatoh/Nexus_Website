import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon, BriefcaseIcon, CloudArrowUpIcon, UsersIcon, PhoneIcon } from '../components/icons';

// Reusable Section Component
const Section: React.FC<{title?: string; subtitle?: string; children: React.ReactNode; className?: string; textWhite?: boolean}> = 
  ({ title, subtitle, children, className = '', textWhite = false }) => (
  <section className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {title && (
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textWhite ? 'text-white' : 'text-nexusbyte-primary-dark'}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`mt-4 text-lg max-w-3xl mx-auto ${textWhite ? 'text-gray-300' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

const partners = ["Metrofibre", "VumaTel", "Openserve", "Frogfoot"];
const speedTiers = [
    { title: "Starter Business Plans", speed: "100Mbps – 500Mbps", description: "for SMEs and branch offices." },
    { title: "Pro Plans", speed: "1Gbps – 2.5Gbps", description: "for businesses with heavy cloud usage and multiple users." },
    { title: "Enterprise Plans", speed: "5Gbps – 10Gbps", description: "for corporates, data-heavy industries, and high-demand operations." }
];
const advantages = [
    { title: "Dedicated Business-Grade Fibre", description: "Unlike shared residential lines, FTTB provides a guaranteed contention ratio, ensuring consistent speeds even during peak hours." },
    { title: "99.99% Uptime SLA", description: "Backed by redundant routing, proactive monitoring, and rapid failover protocols." },
    { title: "10Gbps Ready", description: "Handle enterprise workloads, large-scale video streaming, data processing, and high-volume VoIP without bottlenecks." },
    { title: "Advanced Security", description: "Integrated firewall options, VLAN segmentation, and DDoS protection to safeguard your business network." },
    { title: "Scalable Packages", description: "Start small and scale to 10Gbps as your business grows — ideal for expanding teams and hybrid workforces." },
    { title: "Nationwide Reach", description: "Powered by South Africa’s top-tier networks: Metrofibre, VumaTel, Openserve, and Frogfoot." }
];
const priceTiers = [
    { speed: "100Mbps", price: "R1,499/month" },
    { speed: "500Mbps", price: "R2,299/month" },
    { speed: "1Gbps", price: "R3,499/month" },
    { speed: "2.5Gbps", price: "R5,999/month" },
    { speed: "5Gbps", price: "R9,499/month" },
    { speed: "10Gbps", price: "R14,999/month" },
];
const businessApplications = [
    { icon: UsersIcon, title: "Hybrid Work Environments", description: "Seamless VPN and video conferencing." },
    { icon: CloudArrowUpIcon, title: "Cloud-Driven Operations", description: "Rapid SaaS, PaaS, and cloud backup performance." },
    { icon: BriefcaseIcon, title: "Data-Heavy Industries", description: "Real-time analytics, massive file transfers, and multi-site networking." },
    { icon: PhoneIcon, title: "VoIP & Unified Comms", description: "Crystal-clear voice and video with QoS optimisation." }
];


const FttbPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gray-50 py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-extrabold text-nexusbyte-primary-dark mb-6"
                    >
                        🏢 Fibre to the Business (FTTB) – Enterprise-Grade Connectivity for Mission-Critical Operations
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        In today’s digital economy, reliable and high-performance connectivity is the backbone of every business. NexusByte FTTB, powered by our partnerships with Metrofibre, VumaTel, Openserve, and Frogfoot, delivers dedicated enterprise fibre with speeds up to 10Gbps, designed for businesses that demand zero downtime and maximum scalability.
                    </motion.p>
                </div>
            </section>

            {/* Partners Section */}
            <Section title="Powered by South Africa's Top-Tier Networks">
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-xl font-semibold text-gray-500"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Speed Tiers Section */}
            <Section title="Speed & Performance Tiers" className="bg-gray-50">
                <div className="grid md:grid-cols-3 gap-8">
                    {speedTiers.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                        >
                            <h3 className="text-2xl font-bold text-nexusbyte-primary-dark mb-2">{plan.title}</h3>
                            <p className="text-3xl font-extrabold text-nexusbyte-accent-green mb-4">{plan.speed}</p>
                            <p className="text-gray-600">{plan.description}</p>
                        </motion.div>
                    ))}
                </div>
                 <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-8 text-lg text-gray-700"
                 >
                    💡 All packages include symmetrical speeds (equal upload/download), ensuring fast cloud backups, video conferencing, and low-latency VPN performance.
                 </motion.p>
            </Section>

            {/* Advantages Section */}
            <Section title="✅ Key Advantages of NexusByte FTTB">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-nexusbyte-accent-green/10 text-nexusbyte-accent-green rounded-lg flex items-center justify-center font-bold text-xl">
                                {index + 1}
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-nexusbyte-primary-dark mb-1">{adv.title}</h4>
                                <p className="text-gray-600">{adv.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Price Structures Section */}
            <Section title="💰 Indicative Price Structures" className="bg-gray-50">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {priceTiers.map((tier, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="p-6 rounded-xl border-2 border-gray-200 bg-white shadow-lg text-center"
                        >
                            <p className="text-xl font-bold text-nexusbyte-primary-dark">{tier.speed}</p>
                            <p className="text-3xl font-extrabold text-gray-800 my-3">From {tier.price}</p>
                        </motion.div>
                    ))}
                </div>
                 <p className="text-center mt-8 text-gray-600">
                    Includes enterprise-grade router, optional managed service agreements, and 24/7 dedicated support.
                </p>
            </Section>

            {/* Business-Critical Applications Section */}
            <Section title="🌟 Designed for Business-Critical Applications" className="bg-nexusbyte-primary-dark" textWhite>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {businessApplications.map((app, index) => {
                        const Icon = app.icon;
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 p-6 rounded-lg text-center"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2">{app.title}</h4>
                                <p className="text-sm text-gray-300">{app.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
            
            {/* Final CTA */}
            <Section>
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-nexusbyte-primary-dark mb-4">
                        🚀 Get Business-Grade Fibre Today
                    </h3>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                         Take your business to the next level with NexusByte FTTB — delivering speed, reliability, and security where it matters most.
                    </p>
                     <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold px-10 py-4 text-lg rounded-lg shadow-lg hover:bg-opacity-80 transition-transform transform hover:scale-105"
                    >
                        Check Coverage & Order FTTB Now
                        <ArrowRightIcon className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default FttbPage;
