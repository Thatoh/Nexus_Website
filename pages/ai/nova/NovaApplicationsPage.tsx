
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CpuChipIcon, BriefcaseIcon, ShieldCheckIcon, UsersIcon, 
    ArrowRightIcon, LockClosedIcon, TvIcon, CheckIcon
} from '../../../components/icons';

// Reusable Section Component
const Section = ({ title, subtitle, children, className = '', textWhite = false }: { title: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean }) => (
    <div className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
        <div className="max-w-screen-xl mx-auto">
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
    </div>
);


const NovaApplicationsPage: React.FC = () => {
    // Icon mapping for industries
    const industryIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
        "Legal & Professional Services": BriefcaseIcon,
        "Healthcare & Medical": ShieldCheckIcon,
        "Public Sector & Education": UsersIcon,
        "Financial Services": LockClosedIcon,
        "Retail & E-Commerce": TvIcon,
        "Cybersecurity & IT Services": ShieldCheckIcon,
    };

    // Data for the industry sections
    const industryData = [
        {
            name: "Legal & Professional Services",
            note: "Deployed with strict audit trails and document access rules",
            useCases: [
                { case: "AI Brief Review & Contract Analysis", value: "Cut time-to-review by 70% using clause comprehension & deviation spotting" },
                { case: "Compliance Agents (POPIA, GDPR, PAIA)", value: "Ensure instant policy validation and section lookup" },
                { case: "Legal FAQ Assistants for Clients", value: "Improve access to legal services via conversational pre-screening" },
                { case: "Internal Knowledge Base Agent", value: "Speed up staff onboarding & paralegal efficiency" },
            ],
        },
        {
            name: "Healthcare & Medical",
            note: "Can be deployed on secure private cloud environments for POPIA/HIPAA compliance",
            useCases: [
                { case: "Clinical Policy Bots", value: "Real-time lookup of medical procedures and protocols" },
                { case: "Claims & Pre-Auth Assistants", value: "Reduce insurer interaction times with AI triage" },
                { case: "Compliance Agents (HPCSA, POPIA)", value: "Answer staff queries around healthcare data protection" },
                { case: "Health Knowledge Assistants", value: "Help patients find general care information, 24/7" },
            ],
        },
        {
            name: "Public Sector & Education",
            note: "Optimised for load-shedding resilience and bandwidth-saving modes",
            useCases: [
                { case: "AI-Enabled Citizen Helpdesks", value: "Cut queue times with self-service municipal portals" },
                { case: "Policy Literacy Bots", value: "Help citizens understand government policies, grants & procedures" },
                { case: "Internal SOP/HR Agents", value: "Support internal teams with policy, finance and HR workflows" },
                { case: "Education FAQ Agents", value: "Improve student experience with syllabus lookup and enrollment help" },
            ],
        },
        {
            name: "Financial Services",
            note: "Full logging and explainability for every automated decision",
            useCases: [
                { case: "Spending Policy Bots", value: "Prevent out-of-policy claims at the point of request" },
                { case: "Nova AuditBot", value: "Read invoices, verify line items, flag issues" },
                { case: "Risk & Compliance Agents", value: "Flag FATCA/AML irregularities in onboarding" },
                { case: "Client AI Assistants", value: "Personalised account info and loan queries without human agent" },
            ],
        },
        {
            name: "Retail & E-Commerce",
            note: "Easily integrated into WhatsApp, Shopify, and WooCommerce",
            useCases: [
                { case: "Order Status & Return Assistants", value: "Deflect up to 80% of inbound order support" },
                { case: "Product Recommendation Agents", value: "Custom-trained to upsell based on categories, stock, history" },
                { case: "Staff Training Bots", value: "Speed up product line training with searchable guides" },
                { case: "Promotion Bots", value: "Let customers “talk” to deals and get curated offers in real-time" },
            ],
        },
        {
            name: "Cybersecurity & IT Services",
            note: "Nova can be trained on SOPs, policy documents, JSON logs & change request records",
            useCases: [
                { case: "Internal IT Helpdesk Bot", value: "Automate L1-L2 troubleshooting, reset requests, software FAQs" },
                { case: "Nova SOC Agent", value: "Summarise threat detection alerts, remediation advice" },
                { case: "Developer Docs Assistant", value: "Search codebase, APIs, internal documentation" },
                { case: "Infrastructure Knowledge Agent", value: "Query VMs, firewall configs, and security policies conversationally" },
            ],
        },
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
            Nova AI Platform: Industry Applications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Tailored Intelligence for Every Sector
          </motion.p>
        </div>
      </div>

      {/* Introduction Section */}
      <Section title="Purpose-Built for Your Domain">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Nova is not a one-size-fits-all AI. It’s a modular platform that adapts to industry-specific challenges—powering smarter workflows, secure automation, and measurable outcomes in even the most complex environments.
          </p>
          <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-8 text-2xl font-medium text-nexusbyte-primary-dark italic max-w-3xl mx-auto"
          >
              “AI is not the future of work. It's the present—when trained right.”
          </motion.blockquote>
      </Section>

      {/* Industry Use Cases Sections */}
      <div className="space-y-12">
        {industryData.map((industry, index) => {
            const Icon = industryIcons[industry.name] || BriefcaseIcon; // Fallback icon
            return (
                 <Section key={industry.name} title="" className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <div className="text-left mb-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-nexusbyte-accent-green/10 p-3 rounded-lg">
                                <Icon className="w-8 h-8 text-nexusbyte-accent-green"/>
                            </div>
                            <h3 className="text-3xl font-bold text-nexusbyte-primary-dark">{industry.name}</h3>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Nova Use Cases</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/3">Value Delivered</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {industry.useCases.map((uc, ucIndex) => (
                                    <tr key={ucIndex}>
                                        <td className="px-6 py-4 font-medium">{uc.case}</td>
                                        <td className="px-6 py-4">{uc.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-center text-sm italic text-gray-600">
                        {industry.note}
                    </p>
                </Section>
            );
        })}
      </div>

       {/* Custom Deployments Section */}
        <Section title="Custom Deployments">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
                <div>
                    <h3 className="font-semibold text-xl mb-3">Nova is built for any sector that requires:</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>High-volume queries</li>
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>Policy-heavy workflows</li>
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>Secure information handling</li>
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>Auditability of every step</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-xl mb-3">Whether you're building:</h3>
                     <ul className="space-y-2">
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>An AI-powered HR assistant</li>
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>A ticket resolution bot</li>
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-nexusbyte-accent-green"/>A multi-agent financial ops automation system</li>
                    </ul>
                </div>
            </div>
             <p className="mt-8 text-lg text-gray-700">Nova can be trained, scoped, and deployed in days—not months.</p>
        </Section>
        
        {/* CTA */}
        <Section title="Ready to See Nova in Your Sector?" className="bg-gray-50">
            <div className="flex flex-wrap justify-center items-center gap-6">
                <p className="text-xl text-gray-800">👇</p>
                <Link to="/ai/nova/demo" className="text-nexusbyte-accent-green font-semibold text-xl hover:underline">
                    📩 Request a demo customised to your industry
                </Link>
            </div>
        </Section>
    </div>
  );
};

export default NovaApplicationsPage;
