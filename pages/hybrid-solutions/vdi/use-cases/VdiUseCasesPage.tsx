
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckIcon, ArrowRightIcon, UsersIcon, CpuChipIcon, ShieldCheckIcon, 
    CogIcon, BriefcaseIcon, AcademicCapIcon
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

const VdiUseCasesPage: React.FC = () => {
    const useCasesData = [
        { icon: BriefcaseIcon, industry: "Legal & Finance", points: ["Secure access to sensitive client files and financial data from any location.", "Compliance-ready environments with session logging and access controls.", "Standardised desktop for traders, analysts, and legal staff."] },
        { icon: ShieldCheckIcon, industry: "Healthcare", points: ["HIPAA/POPIA-compliant access to Electronic Medical Records (EMR) for clinicians on the move.", "Telehealth platforms hosted on secure, high-availability virtual desktops.", "Isolate patient data from personal devices in BYOD scenarios."] },
        { icon: UsersIcon, industry: "BPO & Call Centres", points: ["Rapidly scale agent desktops up or down based on campaign needs.", "Deliver a uniform desktop experience with specific apps and restricted access.", "Improve agent productivity with faster logins and consistent performance."] },
        { icon: AcademicCapIcon, industry: "Education", points: ["Virtual computer labs with specialised software (e.g., CAD, statistics).", "Equitable access to computing resources for all students, regardless of their personal device.", "Secure testing environments that prevent cheating."] },
        { icon: CogIcon, industry: "Engineering & Design", points: ["GPU-powered virtual workstations for CAD, 3D modelling, and simulations.", "Collaborate on large design files without slow downloads/uploads.", "Protect valuable intellectual property by keeping data centralized."] },
        { icon: CpuChipIcon, industry: "Software Development", points: ["Standardised development environments for consistent builds.", "Isolate testing and QA from production systems.", "Provide secure, sandboxed environments for contractors and offshore teams."] },
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
                        VDI Use Cases
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }} 
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Real-World Applications of Virtual Desktop Infrastructure
                    </motion.p>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="mt-6 text-gray-400 max-w-3xl mx-auto"
                    >
                        From securing sensitive data in regulated industries to empowering creative professionals with powerful remote workstations, VDI is transforming how modern businesses operate. Explore how NexusByte's VDI solutions can be tailored to solve your specific industry challenges.
                    </motion.p>
                </div>
            </div>

            {/* Use Cases Grid */}
            <Section title="VDI Across Industries">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCasesData.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-lg shadow-md text-left h-full"
                            >
                                <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-nexusbyte-primary-dark">{useCase.industry}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {useCase.points.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon className="w-4 h-4 mr-2 mt-1 text-nexusbyte-accent-green flex-shrink-0"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* CTA Section */}
            <Section title="Ready to Find Your VDI Solution?" className="bg-nexusbyte-primary-dark" textWhite>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Our team can design a custom VDI solution that meets your specific use case, security requirements, and budget.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                     <a href="mailto:vdi@nexusbyte.co.za" className="inline-flex items-center justify-center bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-opacity-80 transition-colors text-lg">
                        📩 Discuss Your Use Case
                    </a>
                    <span className="text-gray-500">or</span>
                     <Link to="/hybrid-solutions/vdi/benefits" className="inline-flex items-center justify-center font-semibold text-lg text-gray-200 hover:underline">
                        Explore VDI Benefits &rarr;
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default VdiUseCasesPage;
