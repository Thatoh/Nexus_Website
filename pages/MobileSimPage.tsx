import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon, WifiIcon, BriefcaseIcon, UsersIcon, RocketLaunchIcon } from '../components/icons';

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
    { title: "Nationwide Coverage", description: "Access all major networks across South Africa for voice and high-speed data." },
    { title: "Customisable Packages", description: "Choose prepaid, postpaid, or shared pool data bundles tailored to your needs." },
    { title: "Business Fleet Solutions", description: "Manage multiple SIMs with centralised billing, usage tracking, and custom data caps for teams." },
    { title: "IoT & M2M-Ready", description: "Optimised SIMs for connected devices, POS systems, tracking, and automation." },
    { title: "5G & LTE Support", description: "Experience next-gen speeds with devices that support advanced networks." },
    { title: "Port & Keep Your Number", description: "Seamlessly move your current number to NexusByte SIMs." }
];

const useCases = [
    { icon: UsersIcon, title: "Remote & Mobile Teams", description: "Stay productive with reliable voice and data connectivity." },
    { icon: BriefcaseIcon, title: "Business Continuity", description: "Ensure staff are connected even outside the office." },
    { icon: WifiIcon, title: "IoT Deployments", description: "Power smart devices, sensors, and real-time tracking systems." },
    { icon: UsersIcon, title: "Affordable Personal Plans", description: "Flexible bundles for individuals and families." }
];

const priceTiers = [
    { package: "Prepaid SIMs", price: "R49", note: "voice & data ready" },
    { package: "10GB Data Bundle", price: "R199/month" },
    { package: "50GB Shared Data Pool", price: "R699/month" },
    { package: "Unlimited Voice + 20GB Data", price: "R349/month", note: "Business SIM" },
    { package: "IoT SIMs", price: "R25/month", note: "per device, scaled per fleet", featured: true },
];

const whyChooseUs = [
    "One provider for data, voice, and IoT.",
    "Flexible packages for home and business.",
    "Centralised account management for teams.",
    "Support for 5G-ready devices."
];

const MobileSimPage: React.FC = () => {
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
                        📱 Mobile SIM Solutions – Stay Connected, Wherever You Go
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        NexusByte Mobile SIM Solutions provide voice and data connectivity on the move, making it easy for individuals, teams, and businesses to stay online and in touch. Whether you’re managing a mobile workforce, need affordable voice and data bundles, or want dedicated SIMs for IoT devices, our solutions are designed for flexibility, scalability, and seamless integration.
                    </motion.p>
                </div>
            </section>

            {/* Advantages Section */}
            <Section title="🔗 Key Advantages of NexusByte Mobile SIMs">
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

            {/* Use Cases Section */}
            <Section title="📈 Use Cases" className="bg-gray-50">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-nexusbyte-primary-dark mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm">{useCase.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
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
                            <p className="text-3xl font-extrabold text-gray-800 my-2">From {tier.price}</p>
                            {tier.note && <p className="text-sm text-gray-500">{tier.note}</p>}
                        </motion.div>
                    ))}
                </div>
                 <p className="text-center mt-8 text-gray-600">
                    Bulk discounts and enterprise packages available for businesses.
                </p>
            </Section>

            {/* Why Choose Us Section */}
            <Section title="🌟 Why Choose NexusByte SIMs?" className="bg-gray-50">
                <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {whyChooseUs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                        >
                            <CheckIcon className="w-6 h-6 text-green-500 mr-4 flex-shrink-0"/>
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
                        🚀 Stay Connected On the Move
                    </h3>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                         From personal use to enterprise-scale deployments, NexusByte Mobile SIM Solutions give you reliable, scalable, and affordable connectivity anywhere you go.
                    </p>
                     <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold px-10 py-4 text-lg rounded-lg shadow-lg hover:bg-opacity-80 transition-transform transform hover:scale-105"
                    >
                        Order Your SIM Solution Today
                        <ArrowRightIcon className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default MobileSimPage;