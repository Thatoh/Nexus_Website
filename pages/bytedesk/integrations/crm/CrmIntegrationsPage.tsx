

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, CpuChipIcon, PuzzlePieceIcon, CogIcon,
    BriefcaseIcon, ShieldCheckIcon
} from '../../../../components/icons';

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

export const CrmIntegrationsPage: React.FC = () => {

    const keyBenefitsData = [
        { icon: PuzzlePieceIcon, title: "Bi-Directional Sync", description: "Sync customer details and ticket updates between ByteDesk and your CRM. View open/closed support history inside your CRM dashboard." },
        { icon: CpuChipIcon, title: "Contextual Support", description: "See recent purchases, service level tier, and previous issues while responding to a ticket. Trigger workflows based on account status." },
        { icon: CogIcon, title: "Automation-Ready", description: "Auto-create tickets in ByteDesk from CRM activities. Trigger follow-ups or alerts if SLAs are breached, directly from your CRM." },
    ];
    
    const supportedPlatformsData = [
        { platform: "Salesforce", highlights: "Native connector with full ticket syncing and lead triggers" },
        { platform: "HubSpot", highlights: "Auto-ticket creation from deals, contact syncing, reporting integration" },
        { platform: "Zoho CRM", highlights: "In-app ticket management, user mapping, and webhook support" },
        { platform: "Microsoft Dynamics", highlights: "Deep integration into Dynamics 365 Customer Service, SLA metrics feed" },
        { platform: "Freshsales", highlights: "Chat-to-lead pipeline conversion, activity logs linking" },
        { platform: "Pipedrive", highlights: "Quick add-to-ticket from pipeline stages, notifications" },
    ];

    const useCasesData = [
        { useCase: "Sales-Driven IT Teams", benefit: "Auto-create IT support tickets from missed follow-ups or expired contracts flagged in the CRM." },
        { useCase: "Account Management", benefit: "Prioritise service based on client plan or history visible directly within ByteDesk." },
        { useCase: "Lead Gen Support", benefit: "Convert technical inquiries into pre-qualified leads by syncing CRM tags based on chat input." },
    ];

    const integrationMethodsData = ["API-based CRM bridges", "Webhooks for real-time triggers", "Scheduled sync for hourly/daily batch updates", "Inline CRM panels within ByteDesk dashboard"];

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
                        CRM Integrations
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Seamlessly connect ByteDesk to your CRM platforms for 360° support visibility, streamlined ticketing, and personalised service delivery.
                    </motion.p>
                </div>
            </div>

            {/* Why Integrate? */}
            <Section title="💼 Why Integrate with CRMs?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Modern IT support is no longer just about issue resolution—it’s about relationship management. With CRM integration, ByteDesk becomes more than a helpdesk; it transforms into a customer intelligence engine.
                </p>
            </Section>

            {/* Key Benefits */}
            <Section title="🚀 Key Benefits" className="bg-gray-50">
                <div className="grid md:grid-cols-3 gap-8">
                    {keyBenefitsData.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-md text-left"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-nexusbyte-primary-dark">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
            
            {/* Supported Platforms */}
            <Section title="🔌 Supported CRM Platforms">
                 <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                         <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Platform</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Integration Highlights</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {supportedPlatformsData.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{row.platform}</td>
                                    <td className="px-6 py-4 text-sm">{row.highlights}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 <p className="text-center text-sm text-gray-500 mt-4">💡 Have a custom CRM? ByteDesk also supports generic REST APIs, Webhooks, and custom SDKs.</p>
            </Section>

            {/* Use Cases & Methods */}
            <Section title="Real-World Applications" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧪 Real-World Use Cases</h3>
                        <div className="space-y-4">
                            {useCasesData.map((item, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-left">
                                    <h4 className="font-semibold">{item.useCase}</h4>
                                    <p className="text-sm text-gray-600">{item.benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🛠️ Integration Methods</h3>
                         <div className="bg-white p-6 rounded-lg shadow-md text-left">
                            <ul className="space-y-3">
                                {integrationMethodsData.map((item, i) => <li key={i} className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-green-500"/>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="📞 Let’s Get Connected" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Whether you're using Salesforce, Dynamics, or a niche CRM, ByteDesk can integrate seamlessly. Contact us for assisted setup.
                </p>
                <a href="mailto:integrations@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                    📧 Email: integrations@nexusbyte.co.za
                </a>
            </Section>
        </div>
    );
};