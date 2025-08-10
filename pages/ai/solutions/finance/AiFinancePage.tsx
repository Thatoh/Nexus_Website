
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, BriefcaseIcon, CpuChipIcon, ShieldCheckIcon,
    UsersIcon, ChartPieIcon, CurrencyDollarIcon
} from '../../../../components/icons';
import StandardHeroSection from '../../../../components/StandardHeroSection';

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string, textWhite?: boolean}> = ({ title, subtitle, children, className = '', textWhite = false }) => (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
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
    </div>
);

const AiFinancePage: React.FC = () => {
    const keyUseCasesData = [
        { icon: BriefcaseIcon, title: "Invoice & Document Intelligence", items: ["Extracts line-items, vendor details, and totals from invoices", "Flags duplicate or fraudulent entries", "Connects with SAP, Xero, QuickBooks, and Microsoft Dynamics"] },
        { icon: CurrencyDollarIcon, title: "Expense Automation", items: ["Automatically classifies and approves compliant claims", "Flags policy violations in real time", "Integrated with travel, HR, and payroll systems"] },
        { icon: ChartPieIcon, title: "Budgeting & Forecasting AI", items: ["Analyses historical data and generates forward-looking projections", "Adapts to seasonality, macroeconomic inputs, and custom business logic", "Output-ready for CFO reporting packs"] },
        { icon: ShieldCheckIcon, title: "Financial Compliance Agents", items: ["Cross-check transactions against internal controls and policies", "Supports audit trails and regulatory alignment", "POPIA, IFRS, and Sarbanes-Oxley modules available"] },
        { icon: UsersIcon, title: "Finance Knowledge Assistants", items: ["Answer policy questions for staff: \"What is our asset depreciation policy?\"", "Retrieve key documents on demand", "Live on Microsoft Teams, Slack, or finance portal"] },
    ];

    const toolsFrameworksData = [
        { element: "LLM Platforms", examples: "GPT-4, Claude, Azure OpenAI" },
        { element: "Integrations", examples: "SAP, Xero, Oracle, MS 365, SharePoint" },
        { element: "Data Pipelines", examples: "Snowflake, PowerBI, Azure Synapse" },
        { element: "Automation Layer", examples: "Nova Agents, Power Automate, Zapier" },
    ];

    const outcomesData = [
        { outcome: "Faster Month-End Close", benefit: "30–50% time reduction" },
        { outcome: "Reduced Invoice Processing Time", benefit: "Up to 80% automation coverage" },
        { outcome: "Fewer Policy Violations", benefit: "60–90% of cases flagged automatically" },
        { outcome: "More Confident Forecasting", benefit: "10–20% improvement in accuracy" },
    ];
    
    const customAgentsData = ["Audit Assistant", "Policy Bot", "InvoiceBot", "Budget Forecaster"];

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
                        AI for Finance
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Modernise Your Finance Function with Intelligent Automation
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        NexusByte empowers finance teams to move faster, detect risk earlier, and unlock real-time visibility into financial operations with AI-powered solutions. From invoice analysis to predictive budgeting, our AI systems reduce friction and increase financial intelligence—securely and at scale.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Where others see numbers, your AI sees insights.”
                    </motion.blockquote>
                </div>
            </div>

            {/* Why AI in Finance? */}
            <Section title="💡 Why AI in Finance?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    The finance office is rich in repeatable processes and data-driven decisions—perfect for AI optimisation. With Nova and our Applied AI framework, your finance function becomes more agile, accurate, and insightful.
                </p>
            </Section>

            {/* Key Use Cases */}
            <Section title="🔍 Key Use Cases" className="bg-gray-50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keyUseCasesData.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-left h-full"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{useCase.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {useCase.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Dashboards & Security */}
            <Section title="Intelligence & Integrity">
                 <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">📊 Live Dashboards & Smart Alerts</h3>
                        <ul className="space-y-3">
                           {[ "AI-driven anomaly detection (fraud, outliers)", "Role-based dashboards for CFOs, Controllers, and Analysts", "Natural language queries: \"Show me spend over R100,000 last quarter\"" ].map((item, i) => (
                                <li key={i} className="flex items-start text-lg">
                                    <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="text-left">
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">🔐 Security & Compliance Built-In</h3>
                        <ul className="space-y-3">
                           {[ "End-to-end encryption", "Audit logs & immutable records", "No data used to train external models", "Finance-specific data governance policies" ].map((item, i) => (
                                <li key={i} className="flex items-start text-lg">
                                    <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
            
            {/* Tools, Frameworks & Outcomes */}
            <Section title="Technology Stack & Measurable Outcomes" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Tools & Frameworks */}
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">⚙️ Tools & Frameworks We Use</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {toolsFrameworksData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-3 font-medium">{row.element}</td>
                                            <td className="px-6 py-3">{row.examples}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Outcomes */}
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">📈 Outcomes You Can Expect</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {outcomesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-3 font-medium">{row.outcome}</td>
                                            <td className="px-6 py-3 font-bold text-green-600">{row.benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
            
             {/* Custom Agents */}
            <Section title="Custom Finance Agents Available" subtitle="Launch ready-made agents with your systems and logic:">
                 <div className="flex flex-wrap justify-center gap-4">
                    {customAgentsData.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm"
                        >
                            {agent}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="🎯 Ready to Transform Finance?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Let’s explore how intelligent finance automation can save time, reduce errors, and create strategic value.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:ai-finance@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Contact: ai-finance@nexusbyte.co.za
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Schedule a consultation
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default AiFinancePage;
