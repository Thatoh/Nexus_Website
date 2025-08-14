import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon, BriefcaseIcon, HomeIcon, WifiIcon, PhoneIcon } from '../components/icons';

// Reusable Section Component for consistent styling and animation
const Section: React.FC<{title?: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean}> = 
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

const servicesData = [
    { icon: HomeIcon, title: "Fibre to the Home (FTTH)", description: "Bring the future into your living room. With our high-speed FTTH solutions, you can stream, game, work, and connect without interruptions. Perfect for smart homes and families who need consistent, fast internet 24/7." },
    { icon: BriefcaseIcon, title: "Fibre to the Business (FTTB)", description: "Enterprise-grade fibre built for companies that demand performance and uptime. From video conferencing to cloud operations, our FTTB solution ensures your office runs at maximum efficiency with secure and scalable bandwidth." },
    { icon: WifiIcon, title: "LTE Solutions", description: "Fast, wireless internet for those on the move or in areas where fibre isn’t available. Our LTE solutions provide plug-and-play simplicity, giving you the freedom to work, connect, and stream from virtually anywhere." },
    { icon: PhoneIcon, title: "Mobile SIM Solutions", description: "Stay connected wherever you are with voice and data SIMs designed for mobility and productivity. Ideal for teams, remote workforces, or anyone needing seamless communication on the go." },
];

const benefitsData = [
    "Scalable – Solutions for home users, SMEs, and enterprises",
    "Reliable – Built for uptime and consistent performance",
    "Secure – Backed by enterprise-grade security protocols",
    "Flexible – Options that grow with your needs"
];

const BusinessFibrePage: React.FC = () => {
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
            🚀 Explore Connectivity – Powering Your World, Seamlessly
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            At NexusByte, we believe connectivity isn’t just about internet access — it’s about enabling businesses, homes, and people to reach their full potential. Our comprehensive suite of solutions is designed to deliver speed, reliability, and flexibility, whether you’re a growing startup, a large enterprise, or a home user who needs dependable internet every day.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="inline-block bg-nexusbyte-accent-green/10 p-4 rounded-xl mb-5">
                            <Icon className="w-10 h-10 text-nexusbyte-accent-green" />
                        </div>
                        <h3 className="text-2xl font-bold text-nexusbyte-primary-dark mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </motion.div>
                );
            })}
        </div>
      </Section>
      
      {/* Why Choose Us Section */}
      <Section title="✅ Why Choose NexusByte Connectivity?" className="bg-gray-50">
        <div className="max-w-2xl mx-auto text-left space-y-4">
            {benefitsData.map((benefit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                >
                    <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-4 flex-shrink-0"/>
                    <span className="text-lg text-gray-800">{benefit}</span>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-nexusbyte-primary-dark" textWhite>
        <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
                💡 Your world runs on connection.
            </h3>
            <p className="text-xl text-gray-300 mb-8">
                With NexusByte, that connection is faster, stronger, and built for the future.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold px-10 py-4 text-lg rounded-lg shadow-lg hover:bg-opacity-80 transition-transform transform hover:scale-105"
            >
              Get Connected Today
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </Link>
        </div>
      </Section>
    </div>
  );
};

export default BusinessFibrePage;
