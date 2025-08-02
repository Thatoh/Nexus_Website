
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, CpuChipIcon, CommandLineIcon, CloudArrowUpIcon, CogIcon, BriefcaseIcon, ShieldCheckIcon, PuzzlePieceIcon, ArrowRightIcon } from '../components/icons';

const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; className?: string; titleClassName?: string; subtitleClassName?: string; textWhite?: boolean}> = 
  ({ title, subtitle, children, className = 'py-16 md:py-20', titleClassName = 'text-3xl md:text-4xl font-bold mb-4', subtitleClassName = 'text-lg md:text-xl mb-10 max-w-3xl mx-auto', textWhite }) => (
  <section className={`${className} px-4 sm:px-6 lg:px-8`}>
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={`${titleClassName} ${textWhite ? 'text-white' : 'text-nexusbyte-primary-dark'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${subtitleClassName} ${textWhite ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  </section>
);

const CapabilityCard: React.FC<{title: string; items: string[]; icon: React.FC<React.SVGProps<SVGSVGElement>>; index: number}> = ({ title, items, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left h-full flex flex-col"
    >
        <Icon className="w-10 h-10 text-nexusbyte-accent-green mb-4" />
        <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-3">{title}</h3>
        <ul className="space-y-2 text-sm text-gray-600 flex-grow">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                    <CheckIcon className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const IaaSPage: React.FC = () => {

  const capabilitiesData = [
    { title: "AI & Machine Learning Infrastructure", icon: CpuChipIcon, items: ["GPU-powered instances (NVIDIA A100, T4, etc.)", "Pre-configured with TensorFlow, PyTorch, HuggingFace", "Use with Nova, Jupyter, or CLI", "Ideal for model training, fine-tuning, and inference"] },
    { title: "Virtual Machine Hosting", icon: CommandLineIcon, items: ["Linux/Windows VMs with SSH/RDP access", "Scale vertically or horizontally", "Perfect for staging servers, test environments, microservices"] },
    { title: "Serverless Compute (CaaS)", icon: CloudArrowUpIcon, items: ["Auto-scale apps using Docker or K8s", "Deploy APIs, chatbots, LLM agents", "Usage-based billing (RAM + CPU cycles only)", "Git-based CI/CD ready"] },
    { title: "Dev & Ops Use Cases", icon: CogIcon, items: ["Secure CI/CD pipeline environments", "GitLab runners, Selenium test rigs", "Ephemeral dev boxes or build agents"] },
    { title: "Data & Storage", icon: BriefcaseIcon, items: ["Block storage volumes with redundancy", "Object storage (S3-compatible)", "Snapshot backups and live migrations", "Encrypted at rest + in transit"] },
  ];

  const useCasesData = [
    { useCase: 'AI/ML Workloads', example: 'Train LLMs, deploy image classifiers, run fine-tuning loops' },
    { useCase: 'Enterprise Web Infrastructure', example: 'Host ERP, CRM, business platforms' },
    { useCase: 'App Development', example: 'Deploy staging/QA environments, test builds, version control workflows' },
    { useCase: 'DevOps Pipelines', example: 'Use ephemeral compute for CI jobs, headless testing' },
    { useCase: 'Data-Driven Services', example: 'Build APIs on demand, serve embeddings, manage batch jobs' },
    { useCase: 'Media & Render Workloads', example: 'GPU-based rendering, 3D processing, audio model training' },
  ];

  const productTiersData = [
    { name: 'Nano Compute', price: 'From R299/month', features: ['1 vCPU / 1GB RAM', '20GB SSD', 'Ideal for small websites, test environments'] },
    { name: 'Standard VM', price: 'From R799/month', features: ['2–4 vCPU / 4–8GB RAM', '50GB SSD + backups', 'Ubuntu, Debian, CentOS, Windows options'] },
    { name: 'GPU Compute', price: 'From R3,800/month', features: ['NVIDIA T4 or RTX-class GPUs', '16–64GB RAM', 'AI/ML-ready environments'], featured: true },
    { name: 'Elastic K8s Cluster', price: 'From R2,400/month', features: ['3-node container-ready cluster', 'Auto-scaling, secure ingress', 'DevOps support for GitHub Actions, ArgoCD'] },
    { name: 'Enterprise Grid', price: 'Custom Quote', features: ['Multi-region IaaS', 'SSO, VPN, encrypted networking', 'Tier-3+ DC compliance (ISO 27001)', '24/7 support + Nova agent integration'] },
  ];
  
  const securityFeatures = ["POPIA & GDPR aligned", "Network isolation (VPC)", "Role-based access", "DDoS protection + firewall rules", "Optional Nova integration for monitoring/alerts"];
  const integrationFeatures = ["Direct integration with Nova agents", "Custom pre-built machine images", "VPN & private peering options", "Azure/AWS/GCP hybrid orchestration"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <CloudArrowUpIcon className="absolute -top-10 left-1/4 w-64 h-64 text-gray-700 transform rotate-12" />
          <CogIcon className="absolute bottom-0 right-1/4 w-48 h-48 text-gray-600" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          >
            Infrastructure-as-a-Service (IaaS)
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Dynamic, scalable, and secure computing resources for startups, enterprises, AI research teams, and developers.
          </motion.p>
          <motion.div 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
            <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            "From containers to compute clusters, we provide the bare metal and cloud muscle—so you can focus on building."
            </blockquote>
        </motion.div>
        </div>
      </section>

      {/* What is IaaS Section */}
      <Section title="What is IaaS?">
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Infrastructure-as-a-Service is a foundational layer of cloud computing, where businesses rent virtualised computing infrastructure—including servers, storage, and networking—without owning the physical hardware.
        </p>
        <motion.div 
            className="text-left max-w-lg mx-auto bg-gray-800 text-gray-300 font-mono text-sm p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <pre className="whitespace-pre-wrap leading-relaxed">
{`+-----------------------------+
| Software & Applications     | <-- You manage
+-----------------------------+
| Operating Systems           | <-- You configure
+-----------------------------+
| Virtual Machines / Compute  | <-- We provide
+-----------------------------+
| Storage / Networking        | <-- We provide
+-----------------------------+
| Physical Data Centres       | <-- We manage
+-----------------------------+`}
            </pre>
        </motion.div>
      </Section>

      {/* IaaS Capabilities Section */}
      <Section title="IaaS Capabilities" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {capabilitiesData.map((capability, index) => (
            <CapabilityCard key={capability.title} title={capability.title} items={capability.items} icon={capability.icon} index={index} />
          ))}
        </div>
      </Section>
      
      {/* Use Cases Table Section */}
      <Section title="Common IaaS Use Cases">
         <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Use Case</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {useCasesData.map((item, index) => (
                <tr key={item.useCase} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-left">{item.useCase}</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 text-left">{item.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      
      {/* Product Tiers Section */}
      <Section title="IaaS Product Tiers" className="bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-stretch">
            {productTiersData.map((plan, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative p-8 rounded-2xl flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.featured ? 'bg-nexusbyte-primary-dark text-white ring-4 ring-nexusbyte-accent-green' : 'bg-white text-gray-900 border'}`}
                >
                    <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                    <p className={`text-3xl font-extrabold mb-6 ${plan.featured ? 'text-nexusbyte-accent-green' : ''}`}>{plan.price}</p>
                    <ul className="space-y-4 text-left flex-grow mb-8">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm">
                                <CheckIcon className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-nexusbyte-accent-green' : 'text-green-500'}`} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-90' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                        {plan.price === 'Custom Quote' ? 'Contact Sales' : 'Get Started'}
                    </button>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Security and Integration Section */}
      <Section title="Security, Governance, and Integration">
        <div className="grid md:grid-cols-2 gap-12 mt-12 text-left max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 flex items-center gap-3"><ShieldCheckIcon className="w-8 h-8 text-nexusbyte-accent-green" />Security & Governance</h3>
            <ul className="space-y-2">
              {securityFeatures.map((feature, i) => <li key={i} className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-2" />{feature}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-nexusbyte-primary-dark mb-4 flex items-center gap-3"><PuzzlePieceIcon className="w-8 h-8 text-nexusbyte-accent-green" />Integration & Add-ons</h3>
            <ul className="space-y-2">
              {integrationFeatures.map((feature, i) => <li key={i} className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-2" />{feature}</li>)}
            </ul>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section title="Ready to Scale Smarter?" className="bg-nexusbyte-primary-dark" textWhite>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">Provision your infrastructure instantly via the NexusByte Nova Cloud Console or book a call with our Solutions team to design a custom IaaS strategy.</p>
        <motion.div 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="mt-10"
        >
            <a
              href="mailto:solutions@nexusbyte.co.za?subject=Inquiry about IaaS Solutions"
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

export default IaaSPage;