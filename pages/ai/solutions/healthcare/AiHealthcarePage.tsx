
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, BriefcaseIcon, CpuChipIcon, ShieldCheckIcon,
    UsersIcon, CogIcon, PhoneIcon
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

const AiHealthcarePage: React.FC = () => {
    const keyUseCasesData = [
        { icon: UsersIcon, title: "Smart Patient Triage", items: ["AI chatbots collect symptoms, match urgency levels, and suggest next steps", "Prioritises patients for virtual consults or walk-ins", "Reduces admin load and improves triage accuracy"] },
        { icon: BriefcaseIcon, title: "Claims & Pre-Authorisation Assistant", items: ["Verify codes, benefits, and eligibility in real-time", "Flag inconsistencies or likely rejections", "Automate common scheme checks for Discovery, Bonitas, Momentum, etc."] },
        { icon: CpuChipIcon, title: "Clinical Decision Support", items: ["Surface guidelines, dosage info, and diagnostic pathways", "Assist junior doctors and nurses in remote or under-resourced clinics", "Integrate with EHR systems"] },
        { icon: UsersIcon, title: "Mental Health & Wellness Bots", items: ["Provide stress check-ins, guidance, and escalation options", "Pre-screen for burnout or mental health support needs", "Ideal for corporate wellness and education sectors"] },
        { icon: UsersIcon, title: "Patient Education & Engagement", items: ["Multilingual health explainers for chronic conditions", "Medication reminders, prep instructions, and diet FAQs", "Delivered via WhatsApp, mobile apps, or patient portals"] },
    ];

    const sampleAgentsData = [
        { name: "MedTriage Bot", function: "Symptom intake and triage", channels: "Web + Mobile + Kiosk" },
        { name: "Claims Checker", function: "Pre-auth and scheme validation", channels: "Practice management system" },
        { name: "Health Coach", function: "Chronic condition education", channels: "WhatsApp + SMS" },
        { name: "Mental Health Ally", function: "Emotional wellness support", channels: "Internal HR or schools" },
        { name: "EHR Assistant", function: "Data entry + diagnostic suggestions", channels: "Integrated in EHR/EMR UI" },
    ];

    const builtForHealthcareData = [
        { feature: "POPIA + HIPAA-compliant", value: "Built with patient data security at the core" },
        { feature: "Integration Ready", value: "Connects to EHRs, billing systems, lab results" },
        { feature: "Offline Mode", value: "Ideal for remote clinics with poor internet" },
        { feature: "Language Localisation", value: "Supports Zulu, Xhosa, Afrikaans, Sesotho, and more" },
        { feature: "Medical Ontology Mapping", value: "Uses SNOMED CT, ICD-10, and BHF scheme vocabularies" },
    ];

    const outcomesData = [
        { area: "Triage turnaround time", impact: "↓ 60%" },
        { area: "Claim rejection rate", impact: "↓ 40% via pre-checking" },
        { area: "Appointment no-show rate", impact: "↓ 25% with reminders" },
        { area: "Patient satisfaction score", impact: "↑ 30% due to quicker support" },
    ];

    const techStackData = [
        "LLMs & NLP: GPT-4, MedPaLM, Nova Custom Medical Agents",
        "RAG + Structured Data: ICD-10 mapping, lab results integration",
        "Voice & Kiosk Interfaces: For low-literacy environments",
        "Nova AI Core: Connects patients, staff, and systems with care intelligence"
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
                        🏥 AI for Healthcare
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Smarter Systems. Faster Diagnoses. Safer Outcomes.
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        NexusByte’s Healthcare AI solutions are designed to streamline patient care, administrative workflows, and medical decision support. With Nova AI, healthcare providers gain intelligent tools for triage, claims validation, and patient engagement—all while ensuring POPIA compliance and clinical accuracy.
                    </motion.p>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 text-2xl font-medium italic"
                    >
                        “Care doesn’t stop at 5 PM. Neither should intelligence in your systems.”
                    </motion.blockquote>
                </div>
            </div>

            {/* Why AI in Healthcare? */}
            <Section title="💡 Why AI in Healthcare?">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Healthcare systems are burdened by growing demands, limited staff, and ever-expanding data. AI can help by automating intake, detecting anomalies, guiding treatment paths, and supporting healthcare teams across every touchpoint—from back office to bedside.
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
                                            <CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

             {/* Sample Agents Table */}
             <Section title="🩺 Sample AI Agents Built with Nova">
                <div className="overflow-x-auto shadow-md rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                         <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Agent Name</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Function</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Integration Channels</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-left">
                            {sampleAgentsData.map((agent, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-medium">{agent.name}</td>
                                    <td className="px-6 py-4">{agent.function}</td>
                                    <td className="px-6 py-4">{agent.channels}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>
            
            {/* Built for Healthcare & Impact */}
            <Section title="Built for Purpose, Designed for Impact" className="bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">⚙️ Built for Healthcare Environments</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {builtForHealthcareData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-3 font-medium">{row.feature}</td>
                                            <td className="px-6 py-3">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 text-center">🧬 Impact in Healthcare Environments</h3>
                         <div className="overflow-x-auto shadow-md rounded-lg border">
                            <table className="min-w-full divide-y divide-gray-200">
                                 <tbody className="bg-white divide-y divide-gray-200 text-left">
                                    {outcomesData.map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-3 font-medium">{row.area}</td>
                                            <td className="px-6 py-3 font-bold text-nexusbyte-accent-green">{row.impact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

             {/* Security & Tech Stack */}
            <Section title="Security and Technology">
                 <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">🔐 Security & Ethics</h3>
                        <ul className="space-y-3">
                           {[ "Sensitive data encrypted in transit and at rest", "Role-based access for agents & providers", "No patient data used for training without consent", "Hosted in secure, POPIA-compliant environments" ].map((item, i) => (
                                <li key={i} className="flex items-start text-lg">
                                    <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="text-left">
                        <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4">🧠 Technologies Powering Healthcare AI</h3>
                        <ul className="space-y-3">
                           {techStackData.map((item, i) => (
                                <li key={i} className="flex items-start text-lg">
                                    <CheckIcon className="w-6 h-6 text-nexusbyte-accent-green mr-3 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section title="👩‍⚕️ Build Your AI Health Assistant" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Whether you're a private practice, hospital, scheme, or medtech startup—Nova AI gives you tools to scale smart, human-centred healthcare.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:healthai@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Contact our Healthcare AI team
                    </a>
                    <span className="text-gray-500">or</span>
                     <a href="https://cal.com/nexusbyte-solutions/ai-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        📅 Schedule a discovery call
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default AiHealthcarePage;
