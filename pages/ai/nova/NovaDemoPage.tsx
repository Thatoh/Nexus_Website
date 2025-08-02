
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CpuChipIcon, CheckIcon, ArrowRightIcon, UsersIcon, 
    BriefcaseIcon, ShieldCheckIcon, LockClosedIcon, AcademicCapIcon, PhoneIcon
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


const NovaDemoPage: React.FC = () => {
    
    // Icon mapping for industries
    const industryIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
        "Public Sector": UsersIcon,
        "Legal Services": BriefcaseIcon,
        "Healthcare": ShieldCheckIcon,
        "Finance": LockClosedIcon, // Using a generic lock for finance
        "Education": AcademicCapIcon,
    };
    
    // Data structured from the prompt's example
    const useCasesData = [
        {
            useCase: "Public Sector: Municipal Helpdesk",
            exampleQuery: "How do I apply for an indigent grant in Johannesburg?",
            keyFeatures: "Multilingual, Policy Trained, Escalation Sim",
            icon: industryIcons["Public Sector"]
        },
        {
            useCase: "Legal Services: Contract Analysis Bot",
            exampleQuery: "Does this clause violate POPIA?",
            keyFeatures: "Legal Reasoning, Clause Highlighting, Suggest Edits",
            icon: industryIcons["Legal Services"]
        },
        {
            useCase: "Healthcare: Policy & Claims Assistant",
            exampleQuery: "Is a C-section covered by MedProtect Plan C?",
            keyFeatures: "Medical Rules, Pre-approval Checks, FAQ Triage",
            icon: industryIcons["Healthcare"]
        },
        {
            useCase: "Finance: AuditBot + Expense Assistant",
            exampleQuery: "Is this travel claim policy compliant?",
            keyFeatures: "Receipt Validation, Policy Engine, Approval Path",
            icon: industryIcons["Finance"]
        },
        {
            useCase: "Education: Admissions & Course Bot",
            exampleQuery: "Which courses are still open for mid-year registration?",
            keyFeatures: "Catalog Navigation, Deadline Logic, PDF Support",
            icon: industryIcons["Education"]
        }
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
            Try Nova Live
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Test the Nova AI Engine in Action
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-8 text-xl font-medium text-nexusbyte-primary-dark italic max-w-2xl mx-auto"
          >
            “Train it. Test it. Trust it. Nova is ready when you are.”
          </motion.blockquote>
        </div>
      </div>
      
      {/* How It Works */}
      <Section title="How The Demo Works">
        <div className="max-w-2xl mx-auto text-left space-y-4">
          <p className="text-center text-gray-700">This demo allows you to:</p>
          <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1"/>Choose a sample industry use case.</li>
          <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1"/>Interact with a pre-trained Nova Agent.</li>
          <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1"/>See how agent reasoning, data boundaries, and knowledge recall works.</li>
          <li className="flex items-start"><CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1"/>Explore agent memory and chaining.</li>
          <p className="text-center text-sm font-semibold text-red-600 bg-red-100 p-3 rounded-md mt-6">
            🛑 Note: This is a sandboxed demo. Responses are simulated from limited datasets and do not reflect full production agent integrations.
          </p>
        </div>
      </Section>

      {/* Try by Industry Table */}
      <Section title="Try Nova By Industry" className="bg-gray-50">
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Use Case</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Example Query</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Key Features</th>
                        <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {useCasesData.map((uc, index) => {
                        const Icon = uc.icon;
                        return (
                             <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <Icon className="w-6 h-6 text-nexusbyte-accent-green mr-3" />
                                        <span className="font-medium text-nexusbyte-primary-dark">{uc.useCase}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700 italic">"{uc.exampleQuery}"</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{uc.keyFeatures}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <button className="bg-nexusbyte-primary-dark text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                        Try This Agent →
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
      </Section>
      
      {/* Test with Your Data */}
      <Section title="Want to Test Nova with Your Own Data?">
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
                <p className="text-gray-700 mb-4">Upload your own PDFs, Docs, or CSVs. Or provide a public URL to a knowledge base. Nova will ingest the content and return contextual answers live.</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6">
                    <h4 className="font-bold text-blue-800">For security, uploads are:</h4>
                    <ul className="list-disc list-inside mt-2 text-sm text-blue-700 space-y-1">
                        <li>Ephemeral (auto-deleted after session)</li>
                        <li>Never shared or used for training</li>
                        <li>Viewable only by you</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center">
                 <button className="bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold text-lg px-10 py-5 rounded-lg shadow-md hover:bg-opacity-80 transition-transform hover:scale-105">
                    Upload Your Docs & Test →
                </button>
            </div>
        </div>
      </Section>

      {/* Full Access & Contact */}
       <Section title="Get Full Access" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-8 rounded-lg shadow-md border">
                <h3 className="text-2xl font-bold mb-4 text-nexusbyte-primary-dark">Request Full Sandbox Access</h3>
                <p className="text-gray-600 mb-6">Gain access to the agent builder, custom datasets, API integrations, usage tracking, and internal collaboration settings.</p>
                <Link to="/contact" state={{subject: "Request Full Nova Sandbox Access"}} className="font-semibold text-lg text-nexusbyte-accent-green hover:underline">
                    👉 Request Full Sandbox Access
                </Link>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-md border">
                <h3 className="text-2xl font-bold mb-4 text-nexusbyte-primary-dark">Talk to Sales or Solutions?</h3>
                <p className="text-gray-600 mb-6">We’re ready to build Nova for your unique organisation. Let's discuss your use case and design a tailored deployment plan.</p>
                 <div className="space-y-2">
                    <a href="mailto:solutions@nexusbyte.co.za" className="flex items-center gap-2 font-semibold text-lg text-nexusbyte-accent-green hover:underline">
                        📧 solutions@nexusbyte.co.za
                    </a>
                    <a href="tel:+27105000240" className="flex items-center gap-2 font-semibold text-lg text-nexusbyte-accent-green hover:underline">
                        <PhoneIcon className="w-5 h-5" /> +27 10 500 0240
                    </a>
                </div>
            </div>
        </div>
      </Section>
      
      {/* Powered By */}
      <div className="text-center py-8 bg-gray-100">
        <p className="text-sm font-semibold text-gray-600">
            Powered By: OpenAI GPT-4o, Azure AI Studio, Nova Agent Orchestration Engine, & NexusByte Secure Runtime Environment
        </p>
      </div>

    </div>
  );
};

export default NovaDemoPage;
