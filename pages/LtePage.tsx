import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon, WifiIcon, BriefcaseIcon, HomeIcon, RocketLaunchIcon } from '../components/icons';

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

const advantages = [
    { title: "Nationwide Coverage", description: "Stay connected across South Africa with access to major LTE networks." },
    { title: "Plug-and-Play Setup", description: "No complex installations. Insert your SIM, connect your router or device, and you’re online." },
    { title: "Flexible Data Packages", description: "From casual browsing to high-demand business use, choose data plans that fit your needs." },
    { title: "Portable Internet", description: "Ideal for mobile teams, pop-up shops, field operations, and remote locations." },
    { title: "Failover Ready", description: "Integrate LTE as a backup connection to keep your business online during fibre outages." },
    { title: "Scalable Solutions", description: "Options for both home and business use, with shared or dedicated data bundles." }
];
const speedTiers = [
    { title: "Home LTE", description: "Up to 50Mbps download / 25Mbps upload, with flexible 50GB–500GB data packages." },
    { title: "Business LTE", description: "Up to 150Mbps with priority network routing for VoIP and video conferencing." },
    { title: "Premium Unlimited LTE", description: "Uncapped packages with FUP options for heavy users and backup networks." }
];
const priceTiers = [
    { package: "50GB LTE", price: "R299/month" },
    { package: "200GB LTE", price: "R499/month" },
    { package: "Uncapped LTE (Home)", price: "R799/month" },
    { package: "Business LTE 500GB", price: "R1,299/month" },
    { package: "Premium Unlimited LTE", price: "R1,999/month", featured: true },
];
const idealFor = [
    "Homes without fibre coverage.",
    "Remote workers and mobile offices.",
    "Backup internet for businesses.",
    "Pop-up retail, events, and field operations."
];

const LtePage: React.FC = () => {
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
                        📶 LTE Solutions – Fast, Wireless Internet Anywhere
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        When fibre isn’t an option, NexusByte LTE Solutions deliver reliable, high-speed internet without the cables. Perfect for remote areas, mobile teams, or backup connectivity, our LTE packages provide plug-and-play internet designed to keep you online wherever you are.
                    </motion.p>
                </div>
            </section>

            {/* Advantages Section */}
            <Section title="🔗 Key Advantages of NexusByte LTE Solutions">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-nexusbyte-accent-green/10 text-nexusbyte-accent-green rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                                {index + 1}
                            </div>
                            <h4 className="text-xl font-semibold text-nexusbyte-primary-dark mb-2">{adv.title}</h4>
                            <p className="text-gray-600">{adv.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Speed & Data Tiers Section */}
            <Section title="📈 Speed & Data Tiers" className="bg-gray-50">
                <div className="grid md:grid-cols-3 gap-8">
                    {speedTiers.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center"
                        >
                            <h3 className="text-2xl font-bold text-nexusbyte-primary-dark mb-4">{plan.title}</h3>
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
                    💡 Low-latency LTE options available for gaming and business-critical applications.
                 </motion.p>
            </Section>

            {/* Indicative Pricing Section */}
            <Section title="💰 Indicative Pricing">
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
                            <p className="text-xl font-bold text-nexusbyte-primary-dark">{tier.package}</p>
                            <p className="text-3xl font-extrabold text-gray-800 my-3">From {tier.price}</p>
                        </motion.div>
                    ))}
                </div>
                 <p className="text-center mt-8 text-gray-600">
                    Includes SIM card and optional LTE router.
                </p>
            </Section>

            {/* Ideal For Section */}
            <Section title="🌟 Ideal For:" className="bg-gray-50">
                <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {idealFor.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                        >
                            <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-4 flex-shrink-0"/>
                            <span className="text-lg text-gray-800">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* Final CTA */}
            <Section>
                <div className="text-center">
                    <RocketLaunchIcon className="w-16 h-16 mx-auto mb-4 text-nexusbyte-accent-green" />
                    <h3 className="text-3xl font-bold text-nexusbyte-primary-dark mb-4">
                        🚀 Get LTE Now
                    </h3>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                         Experience wireless freedom with NexusByte LTE — fast, portable, and always connected.
                    </p>
                     <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold px-10 py-4 text-lg rounded-lg shadow-lg hover:bg-opacity-80 transition-transform transform hover:scale-105"
                    >
                        Explore LTE Packages & Order Today
                        <ArrowRightIcon className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default LtePage;
