
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, UsersIcon, GlobeAltIcon, CommandLineIcon, BriefcaseIcon } from '../components/icons';

// Reusable Section Component
const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string; textWhite?: boolean}> = ({ title, subtitle, children, className = 'py-16 md:py-20', textWhite }) => (
  <section className={`${className} px-4 sm:px-6 lg:px-8`}>
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${textWhite ? 'text-white' : 'text-nexusbyte-primary-dark'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto ${textWhite ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  </section>
);


const ThreatDetectionPage: React.FC = () => {
    const servicesOverviewData = [
        { title: "Internal & External Network Penetration Testing", icon: GlobeAltIcon, items: ["Simulated attacker access from both inside (internal LAN) and outside (public IP exposure)", "Scanning of firewalls, open ports, services, and potential misconfigurations", "Privilege escalation testing and lateral movement tracking", "Active Directory, DNS, DHCP, and endpoint analysis"] },
        { title: "Web App & API Penetration Testing", icon: CommandLineIcon, items: ["Dynamic analysis of hosted websites and web-based applications", "OWASP Top 10 coverage (XSS, SQLi, CSRF, SSRF, etc.)", "Broken authentication/session management identification", "Business logic testing for eCommerce, forms, dashboards", "Full REST/GraphQL API fuzzing and request manipulation"] },
        { title: "OWASP-Aligned Reporting & Remediation Plans", icon: BriefcaseIcon, items: ["Executive summary for non-technical stakeholders", "Technical report for IT teams with CVSS scores and risk ratings", "Screenshots, PoCs, and exploit vectors", "Step-by-step remediation plans with patch or config guidance", "Retest cycle to confirm patch effectiveness"] },
        { title: "Optional Red-Team Simulation", icon: UsersIcon, items: ["Full-scope offensive security test mimicking APT actors", "Physical + digital social engineering (if permitted)", "Wireless spoofing, phishing, and USB drops", "Custom attack narratives across email, network, and app layers"] },
    ];

    const whoNeedsThisData = [
        { industry: "Financial Services", threats: "Credential theft, ransomware, weak APIs" },
        { industry: "eCommerce & SaaS", threats: "Insecure apps, session hijack, logic flaws" },
        { industry: "Healthcare", threats: "PHI exposure, weak authentication" },
        { industry: "Education", threats: "Unpatched devices, DNS attacks" },
        { industry: "Public Sector", threats: "Social engineering, privilege escalation" },
    ];
    
    const whyNexusByteData = [
        "Certified penetration testers (CEH, OSCP)",
        "Strict NDA and confidentiality by default",
        "Tailored assessments per industry",
        "Nova AI integration for report queries and follow-up alerts",
    ];

    const pricingData = [
        { tier: "Web Basic", cost: "R6,000/site", includes: "OWASP Web App Test (incl. 1 API endpoint)", featured: false },
        { tier: "Network Scan", cost: "R8,500", includes: "Internal & external pen test on up to 20 assets", featured: true },
        { tier: "Enterprise Red-Team", cost: "R25,000+", includes: "Custom red-team engagement, full-scope test", featured: false },
    ];
    
    const strategyProcessData = [
        "Scoping Session", "Reconnaissance", "Vulnerability Discovery", "Exploitation", "Post-Exploitation", "Reporting & Review", "Retesting & Validation"
    ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ShieldCheckIcon className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Threat Detection & Penetration Testing
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            NexusByte’s Threat Detection & Penetration Testing Services proactively uncover and mitigate security flaws in your infrastructure, applications, and networks. We simulate real-world attack scenarios to identify and resolve weaknesses before they are exploited.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "The best defence is knowing where you’re exposed."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <Section title="Services Overview" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 mt-12">
            {servicesOverviewData.map((offering, index) => {
                const Icon = offering.icon;
                return (
                    <motion.div
                        key={offering.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left h-full flex flex-col"
                    >
                        <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                        <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">{offering.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-600 flex-grow">
                            {offering.items.map((item, idx) => (
                                <li key={idx} className="flex items-start">
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
      
      {/* Who Needs This Table Section */}
      <Section title="Who Needs This?">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Industry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Threats Addressed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {whoNeedsThisData.map((item) => (
                <tr key={item.industry} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.industry}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.threats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      
       {/* Strategy & Process Section */}
      <Section title="Strategy & Process" className="bg-gray-50">
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Horizontal line */}
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          <div className="relative flex justify-between">
            {strategyProcessData.map((step, index) => (
              <motion.div 
                key={step}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 bg-nexusbyte-accent-green text-white font-bold flex items-center justify-center rounded-full z-10 ring-4 ring-gray-50">
                  {index + 1}
                </div>
                <p className="mt-4 text-xs md:text-sm font-semibold text-nexusbyte-primary-dark text-center w-24">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section title="Pricing Tiers (Indicative)">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12">
            {pricingData.map((plan, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative p-8 rounded-2xl flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.featured ? 'bg-nexusbyte-primary-dark text-white ring-4 ring-nexusbyte-accent-green' : 'bg-white text-gray-900 border'}`}
                >
                    <h3 className="text-2xl font-bold mb-3">{plan.tier}</h3>
                    <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.cost}</p>
                    <div className="flex-grow mb-8">
                      <p className="text-sm font-semibold mb-2">Includes:</p>
                      <p className="text-sm">{plan.includes}</p>
                    </div>
                    <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                        Choose Plan
                    </button>
                </motion.div>
            ))}
        </div>
      </Section>
      
      {/* Why NexusByte Section */}
      <Section title="Why NexusByte?" className="bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {whyNexusByteData.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center text-left bg-blue-50 p-4 rounded-lg shadow-sm"
            >
              <CheckIcon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-blue-800 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Let’s Test Before They Do" className="bg-nexusbyte-primary-dark" textWhite
               subtitle="Book a simulated attack and gain control over your vulnerabilities.">
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:threats@nexusbyte.co.za?subject=Inquiry about Threat Detection Services"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: threats@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
            <p className="mt-6 text-gray-400 text-sm">
                Request your scoped test via Nova
                          </p>
          </motion.div>
        </Section>
    </div>
  );
}

export default ThreatDetectionPage;
