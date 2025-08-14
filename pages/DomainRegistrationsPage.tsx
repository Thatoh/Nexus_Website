
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, GlobeAltIcon, ArrowRightIcon, CogIcon, UsersIcon, ShieldCheckIcon } from '../components/icons';

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

const DomainRegistrationsPage: React.FC = () => {
    const whatWeOfferData = [
        { title: "Domain Registration", icon: GlobeAltIcon, description: "Register domains across 400+ extensions including popular TLDs like .co.za, .com, .org, and industry-specific ones like .ai, .shop, and .dev." },
        { title: "Domain Transfers", icon: ArrowRightIcon, description: "Seamlessly transfer your existing domains to NexusByte with our expert assistance and free WHOIS privacy protection on eligible domains." },
        { title: "Domain Management Tools", icon: CogIcon, description: "Easily manage DNS records, auto-renewals, and WHOIS contacts. Get support from our Nova AI assistant for quick configuration queries." },
        { title: "International Extensions", icon: UsersIcon, description: "Establish a global presence with country-code domains like .co.uk, .us, .ng, and Africa-focused zones like .joburg, .capetown, .durban." },
    ];

    const useCasesData = [
        { useCase: 'South African Startup', suggestions: '.co.za, .africa, .joburg', notes: 'Great for local presence + SEO' },
        { useCase: 'Tech Brand', suggestions: '.com, .io, .dev, .tech', notes: 'Perfect for innovation-first brands' },
        { useCase: 'Legal/Finance Firm', suggestions: '.law, .legal, .finance', notes: 'Aligns with industry + credibility' },
        { useCase: 'eCommerce Store', suggestions: '.shop, .store, .online', notes: 'Useful for retail and catalogue apps' },
        { useCase: 'Portfolio/Creative', suggestions: '.me, .design, .studio', notes: 'Great for artists, designers, devs' },
    ];

    const pricingData = [
        { extension: '.co.za', firstYear: 'R99', renewal: 'R129', notes: 'Free DNS + WHOIS Privacy' },
        { extension: '.com', firstYear: 'R189', renewal: 'R239', notes: 'Most popular globally' },
        { extension: '.africa', firstYear: 'R349', renewal: 'R399', notes: 'Supports regional focus' },
        { extension: '.tech', firstYear: 'R420', renewal: 'R480', notes: 'Ideal for tech startups' },
        { extension: '.law', firstYear: 'R620', renewal: 'R699', notes: 'High-trust legal TLD' },
    ];

    const valueAddedServicesData = [
        "Free DNS management for all domains",
        "WHOIS Privacy Protection (where supported)",
        "SSL Certificate Bundles",
        "Email forwarding & setup (Gmail, MS365, Proton)",
        "Nova-powered domain assistant for quick edits"
    ];

    const whyNexusByteData = [
        "POPIA-aligned domain data handling",
        "South African support team + local billing",
        "Integrated with your hosting + email",
        "Nova AI support for domain help 24/7",
        "One-stop shop for digital presence"
    ];


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <GlobeAltIcon className="absolute -top-10 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Domain Registration Services
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Secure your digital identity. We make domain registration simple, affordable, and fully integrated with your web hosting needs.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "Your domain is more than a URL—it's your brand's first impression."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <Section title="What We Offer" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whatWeOfferData.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left"
                    >
                        <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
                        <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                );
            })}
        </div>
      </Section>
      
      {/* Use Cases Table Section */}
      <Section title="Use Cases & TLD Suggestions">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Use Case</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">TLD Suggestions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {useCasesData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.useCase}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.suggestions}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Pricing Table Section */}
      <Section title="Indicative Domain Pricing" className="bg-gray-50">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Domain Extension</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">First-Year Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Renewal Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 text-left">{item.extension}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.firstYear}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.renewal}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center text-xs text-gray-500 mt-4">Note: Final pricing may vary based on exchange rates and registry promos.</p>
        </div>
      </Section>

      {/* Combined "Value-Added" and "Why Us" Section */}
       <Section title="More Than Just a Domain">
        <div className="grid md:grid-cols-2 gap-12 mt-12 text-left max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 flex items-center gap-3"><CheckIcon className="w-8 h-8 text-nexusbyte-accent-green" />Value-Added Services</h3>
            <ul className="space-y-2">
              {valueAddedServicesData.map((feature, i) => <li key={i} className="flex items-center text-gray-700"><CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mr-2" />{feature}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 flex items-center gap-3"><ShieldCheckIcon className="w-8 h-8 text-nexusbyte-accent-green" />Why Register with NexusByte?</h3>
            <ul className="space-y-2">
              {whyNexusByteData.map((feature, i) => <li key={i} className="flex items-center text-gray-700"><CheckIcon className="w-5 h-5 text-nexusbyte-accent-green mr-2" />{feature}</li>)}
            </ul>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section title="Ready to Claim Your Name?" className="bg-nexusbyte-primary-dark" textWhite>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">Search, register, and configure your domain directly in the NexusByte client portal. Need help choosing or securing a name? Let Nova assist you.</p>
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about Domain Registration"
              className="inline-flex items-center px-10 py-4 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-bold rounded-lg shadow-xl hover:bg-opacity-80 transition-colors transform hover:scale-105 text-lg"
            >
              Email Us: solutions@nexusbyte.co.za
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </a>
        </motion.div>
      </Section>
    </div>
  );
}

export default DomainRegistrationsPage;
