
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, ShieldCheckIcon, CpuChipIcon
} from '../../../components/icons';

// Reusable Section Component
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

export const PricingPage: React.FC = () => {

    const pricingPlansData = [
        { name: "Free Forever", price: "R0/month", description: "For demos or solo professionals.", features: ["2 Agents", "Local (Client-side only)", "Ticket Logging", "Time Tracking", "Comment Threads", "Attachments"], featured: false },
        { name: "Standard", price: "R850/month", description: "For small teams needing core features.", features: ["Up to 5 Agents", "10 GB Storage", "SLA Management", "Analytics & Reports", "File Attachments"], featured: false },
        { name: "Professional", price: "R2,300/month", description: "For growing teams that need better oversight.", features: ["Up to 15 Agents", "50 GB Storage", "Ticket Linking", "Global Search & Similar Cases", "Client History Lookup"], featured: true },
        { name: "Enterprise / White Label", price: "Custom", description: "For larger organisations and resellers.", features: ["Unlimited Agents", "Custom Storage", "Multi-Tenant White Labelling", "Advanced Permissions", "API Access", "Priority Support"], featured: false },
    ];
    
    const addOnsData = [
        { icon: CpuChipIcon, title: "Nova AI Agent Integration", price: "R1,200/month", description: "Enable AI ticket triage, client response suggestions, and resolution lookup." },
        { icon: ShieldCheckIcon, title: "SSO & SAML Authentication", price: "R600/month", description: "Secure enterprise login across your identity providers." },
        { icon: UsersIcon, title: "Training & Onboarding", price: "R1,500 (once-off)", description: "3-hour hands-on session + PDF guides for your agents." },
        { icon: CheckIcon, title: "White-Labeling Toolkit", price: "R2,000", description: "Fully brand the platform with your own colours, logo, domain, and email templates." },
    ];

    const comparisonData = [
        { feature: "Ticket Creation & Commenting", free: true, standard: true, pro: true, enterprise: true },
        { feature: "Attachments & Reminders", free: true, standard: true, pro: true, enterprise: true },
        { feature: "SLA Management", free: false, standard: true, pro: true, enterprise: true },
        { feature: "Agent Productivity Reports", free: false, standard: true, pro: true, enterprise: true },
        { feature: "Ticket Linking", free: false, standard: false, pro: true, enterprise: true },
        { feature: "AI Support Agent", free: false, standard: false, pro: 'add-on', enterprise: true },
        { feature: "White Label UI", free: false, standard: false, pro: false, enterprise: true },
        { feature: "API & Advanced Permissions", free: false, standard: false, pro: false, enterprise: true },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-nexusbyte-primary-dark text-white">
                <div className="max-w-screen-xl mx-auto px-4 py-20 md:py-28 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
                    >
                        💸 Pricing & Plans
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Scalable support. Transparent pricing. Built for teams of every size.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        Nexus-Ticketing offers flexible plans for internal teams, client-facing support, and white-labelled deployments.
                    </motion.p>
                </div>
            </div>

            {/* Pricing Plans */}
            <Section title="🧾 Choose the Right Plan for Your Support Needs" className="bg-gray-50">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {pricingPlansData.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-6 rounded-2xl flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.featured ? 'bg-nexusbyte-primary-dark text-white ring-4 ring-nexusbyte-accent-green' : 'bg-white text-gray-900 border'}`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className={`text-sm mb-4 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
                            <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                            <ul className="space-y-3 text-sm flex-grow mb-8 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start"><CheckIcon className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`}/>{feature}</li>
                                ))}
                            </ul>
                             <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                                {plan.name === 'Enterprise / White Label' ? 'Contact Sales' : 'Choose Plan'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </Section>
            
            {/* Optional Add-Ons */}
            <Section title="🧩 Optional Add-Ons">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {addOnsData.map((addOn, index) => {
                        const Icon = addOn.icon;
                        return (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-lg shadow-sm text-left"
                            >
                                <Icon className="w-8 h-8 text-nexusbyte-accent-green mb-3" />
                                <h3 className="text-lg font-bold text-nexusbyte-primary-dark mb-2">{addOn.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{addOn.description}</p>
                                <p className="font-semibold text-gray-800">{addOn.price}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
            
            {/* Feature Comparison */}
            <Section title="📊 Compare Plans" className="bg-gray-50">
                 <div className="overflow-x-auto shadow-lg rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Feature</th>
                                <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase">Free</th>
                                <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase">Standard</th>
                                <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase bg-gray-200">Professional</th>
                                <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-center">
                            {comparisonData.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 text-left font-medium">{row.feature}</td>
                                    <td>{row.free ? <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mx-auto"/> : '❌'}</td>
                                    <td>{row.standard ? <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mx-auto"/> : '❌'}</td>
                                    <td className="bg-gray-50">{row.pro === true ? <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mx-auto"/> : row.pro === 'add-on' ? <span className="text-xs font-semibold text-blue-600">Add-on</span> : '❌'}</td>
                                    <td>{row.enterprise ? <CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mx-auto"/> : '❌'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="🧪 Test Before You Commit" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Explore Nexus-Ticketing in your browser. No credit card required. Preloaded with sample data, Nova AI test agent, and full feature previews.
                </p>
                <Link to="/ticketing-system/demo" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    Launch Demo &rarr;
                </Link>
            </Section>
        </div>
    );
};
