import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon, GameControllerIcon, RocketLaunchIcon } from '../components/icons';

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
const speedPlans = [
    { title: "Standard Plans", speed: "25Mbps – 1Gbps", description: "ideal for everyday browsing and streaming" },
    { title: "Advanced Plans", speed: "1Gbps – 2.5Gbps", description: "perfect for home offices, multiple 4K streams, and smart homes" },
    { title: "Elite Gaming Plans", speed: "Up to 5Gbps", description: "ultra-low latency gaming, 4K/8K streaming, and simultaneous high-demand usage" }
];
const advantages = [
    { title: "Nationwide Coverage", description: "Through our strategic partnerships, NexusByte provides access to South Africa’s most robust fibre networks." },
    { title: "Future-Proof Infrastructure", description: "Built to handle emerging technologies such as smart homes, 8K streaming, and next-gen cloud services." },
    { title: "Low Latency Architecture", description: "Perfect for gamers and home offices, with average latency as low as 3–6ms on local servers." },
    { title: "Enterprise-Grade Reliability", description: "99.95% uptime backed by redundant routing and proactive network monitoring." },
    { title: "Flexible Pricing", description: "Scalable packages for households of every size." }
];
const priceTiers = [
    { speed: "25Mbps – 50Mbps", price: "R699/month" },
    { speed: "100Mbps", price: "R899/month" },
    { speed: "250Mbps", price: "R1,099/month" },
    { speed: "500Mbps", price: "R1,399/month" },
    { speed: "1Gbps", price: "R1,799/month" },
    { speed: "2.5Gbps", price: "R2,499/month" },
    { speed: "5Gbps (Elite Gaming Plan)", price: "R4,999/month", featured: true, tag: "Elite Gaming Plan" },
];
const gamingFeatures = [
    "Dedicated Bandwidth: Ultra-fast, symmetrical fibre ensures no speed drops during peak times.",
    "Low Latency: Sub-10ms pings for local servers and optimised routing for international play.",
    "Multiple Device Gaming: Support for simultaneous gaming, streaming, and downloads without lag."
];


const FtthPage: React.FC = () => {
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
                        🏠 Fibre to the Home (FTTH) – Ultra-High-Speed Internet for Modern Living
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        With NexusByte FTTH, you don’t just get internet — you get enterprise-grade fibre designed for the digital demands of today and tomorrow. In partnership with Metrofibre, VumaTel, Openserve, and Frogfoot, we bring nationwide coverage, industry-leading speeds, and reliable uptime directly to your home.
                    </motion.p>
                </div>
            </section>

            {/* Partners Section */}
            <Section title="In Partnership With Leading Networks">
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

            {/* Speeds Section */}
            <Section title="Speeds That Redefine Home Connectivity" className="bg-gray-50">
                <div className="grid md:grid-cols-3 gap-8">
                    {speedPlans.map((plan, index) => (
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
                    💡 Symmetrical speeds (upload = download) ensure lag-free gaming, seamless video conferencing, and rapid cloud backups.
                 </motion.p>
            </Section>

            {/* Advantages Section */}
            <Section title="✅ Advantages of NexusByte FTTH">
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
            <Section title="💰 Price Structures (Indicative)" className="bg-gray-50">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {priceTiers.map((tier, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`p-6 rounded-xl border-2 ${tier.featured ? 'border-nexusbyte-accent-green bg-white shadow-2xl' : 'border-gray-200 bg-white shadow-lg'}`}
                        >
                            {tier.featured && (
                                <span className="inline-block bg-nexusbyte-accent-green text-nexusbyte-primary-dark text-xs font-bold px-3 py-1 rounded-full mb-3">{tier.tag}</span>
                            )}
                            <p className="text-xl font-bold text-nexusbyte-primary-dark">{tier.speed}</p>
                            <p className="text-3xl font-extrabold text-gray-800 my-3">Starting from {tier.price}</p>
                        </motion.div>
                    ))}
                </div>
                 <p className="text-center mt-8 text-gray-600">
                    All packages include free installation (subject to coverage), enterprise-grade routers, and optional mesh WiFi upgrades.
                </p>
            </Section>

             {/* Designed for Gamers Section */}
            <Section title="Designed for Gamers" className="bg-nexusbyte-primary-dark" textWhite>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-left"
                    >
                         <div className="inline-block bg-white/10 p-4 rounded-xl mb-5">
                            <GameControllerIcon className="w-10 h-10 text-nexusbyte-accent-green" />
                        </div>
                        <ul className="space-y-4">
                            {gamingFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start text-lg">
                                    <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3 mt-1 flex-shrink-0"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                     <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                     >
                        <img src="https://picsum.photos/seed/ftth_gaming/500/350" alt="Gaming setup" className="rounded-xl shadow-2xl"/>
                    </motion.div>
                </div>
            </Section>

            {/* 5Gbps CTA */}
            <Section title="Ready for 5Gbps?">
                 <div className="text-center">
                    <RocketLaunchIcon className="w-16 h-16 mx-auto mb-4 text-nexusbyte-accent-green" />
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                         Experience the fastest home fibre in South Africa. Whether you’re a competitive gamer, content creator, or a family that demands the best, NexusByte FTTH ensures your connection is always ahead of the curve.
                    </p>
                </div>
            </Section>
            
            {/* Final CTA */}
            <Section className="bg-gray-100">
                <div className="text-center">
                     <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold px-10 py-4 text-lg rounded-lg shadow-lg hover:bg-opacity-80 transition-transform transform hover:scale-105"
                    >
                        Check Coverage & Order FTTH Now
                        <ArrowRightIcon className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default FtthPage;
