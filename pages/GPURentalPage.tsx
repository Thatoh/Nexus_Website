


import React from 'react';
import { Link } from 'react-router';
import { CpuChipIcon, LockClosedIcon, GlobeAltIcon, CogIcon, CommandLineIcon, CurrencyDollarIcon, CheckIcon, AcademicCapIcon, BriefcaseIcon, CloudArrowUpIcon } from '../components/icons'; // Changed CloudIcon to CloudArrowUpIcon

// Data for the page
const gpuTiersData = [
  {
    tier: 'Starter',
    gpuType: 'Nvidia RTX 3060',
    specs: '12GB VRAM, 3584 CUDA cores',
    pricingMonth: 'R850',
    pricingHour: 'R5',
    idealFor: 'Students, light workloads, individual developers.',
    icon: AcademicCapIcon,
  },
  {
    tier: 'Pro',
    gpuType: 'Nvidia RTX 3090',
    specs: '24GB VRAM, 10496 CUDA cores',
    pricingMonth: 'R2,000',
    pricingHour: 'R12',
    idealFor: 'Professional model training, 3D rendering, small teams.',
    icon: BriefcaseIcon,
  },
  {
    tier: 'Ultra',
    gpuType: 'Nvidia A100 / H100',
    specs: '40–80GB HBM2e, Tensor Cores, Multi-Instance GPU',
    pricingMonth: 'R5,500 - R12,000',
    pricingHour: 'R30+',
    idealFor: 'AI/ML research, deep learning, enterprise workloads.',
    icon: CloudArrowUpIcon, // Changed CloudIcon to CloudArrowUpIcon
  },
];

const gpuFeaturesData = [
  { title: 'Isolated GPU VM Instances', description: 'Dedicated virtual machine environments for security and performance.', icon: LockClosedIcon },
  { title: 'Hourly or Monthly Rental', description: 'Flexible billing options to suit your project needs and budget.', icon: CurrencyDollarIcon },
  { title: 'Multi-Region Availability', description: 'Deploy your GPU instances in various geographical regions for low latency.', icon: GlobeAltIcon },
  { title: 'Developer APIs', description: 'Integrate and automate GPU provisioning and management with our robust APIs.', icon: CogIcon },
  { title: 'AI/ML Ready Environments', description: 'Pre-configured environments with CUDA, PyTorch, TensorFlow, and more.', icon: CpuChipIcon },
  { title: 'Scalable Resources', description: 'Easily scale your GPU resources up or down as your demands change.', icon: CommandLineIcon },
];

const subscriptionPlansData = [
  { plan: 'Starter', duration: 'Monthly', gpuAccess: '1 Shared GPU', support: 'Community Forum', billingType: 'Pay-as-you-go', price: 'From R5/hr' },
  { plan: 'Growth', duration: 'Monthly', gpuAccess: '1 Dedicated GPU', support: 'Email/Ticket Support', billingType: 'Fixed Subscription', price: 'From R2,000/month' },
  { plan: 'Enterprise', duration: 'Annual Contract', gpuAccess: 'Multi-GPU Cluster', support: '24/7 Priority Phone & Chat', billingType: 'Custom Billing', price: 'Contact Us' },
];


const GPURentalPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <CpuChipIcon className="w-16 h-16 mx-auto mb-6 text-nexusbyte-accent-green" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-nexusbyte-primary-dark">
            GPU Rental Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            High-performance GPU compute on demand – train models, render graphics, or run intensive workloads without the upfront hardware investment.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-16 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-nexusbyte-primary-dark mb-6">What is GPU Rental?</h2>
          <div className="space-y-4 text-gray-700">
            <p>GPU (Graphics Processing Unit) rental services provide access to powerful computing resources specifically designed for parallel processing tasks. Instead of purchasing expensive hardware, you can rent GPU capacity as needed, paying only for what you use.</p>
            <p>This is ideal for a variety of demanding applications, including:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li><strong>AI & Machine Learning:</strong> Training complex neural networks and large language models.</li>
              <li><strong>Video Rendering & Animation:</strong> Accelerating 3D rendering and video post-production workflows.</li>
              <li><strong>Scientific Simulations:</strong> Running complex simulations in fields like physics, biology, and engineering.</li>
              <li><strong>Game Development:</strong> Testing and developing graphics-intensive games.</li>
            </ul>
            <p>We offer flexible models, including on-demand hourly access for short-term projects and reserved monthly instances for ongoing workloads, ensuring you have the power you need, when you need it.</p>
          </div>
        </section>

        {/* Available GPUs & Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nexusbyte-primary-dark mb-8 text-center">Available GPUs & Pricing</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-2 sm:p-0">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tier</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPU / Specs</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ideal For</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gpuTiersData.map((gpu) => {
                  const Icon = gpu.icon || CpuChipIcon;
                  return (
                    <tr key={gpu.tier}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-full mr-3 ${
                            gpu.tier === 'Starter' ? 'bg-nexusbyte-accent-green/10 text-nexusbyte-accent-green' :
                            gpu.tier === 'Pro' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="text-sm font-semibold text-nexusbyte-primary-dark">{gpu.tier}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{gpu.gpuType}</div>
                        <div className="text-xs text-gray-500">{gpu.specs}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{gpu.pricingMonth}/month</div>
                        <div className="text-xs text-gray-500_secondary">{gpu.pricingHour}/hr (on-demand)</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">{gpu.idealFor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link to="/contact" state={{ subject: `Inquiry about ${gpu.tier} GPU Plan`}} className="text-nexusbyte-accent-green hover:text-nexusbyte-accent-green font-semibold">
                          Get Started &rarr;
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
           <p className="text-center mt-4 text-sm text-gray-500">
            Custom configurations and higher-tier GPUs available. <Link to="/contact" className="text-nexusbyte-accent-green hover:underline">Contact sales</Link> for enterprise needs.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-16 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-nexusbyte-primary-dark mb-8 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gpuFeaturesData.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <IconComponent className="w-12 h-12 text-nexusbyte-accent-green mb-4" />
                  <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Integration with AI Services Section */}
        <section className="mb-16 p-8 bg-nexusbyte-primary-dark text-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Seamless Integration with NexusByte AI</h2>
          <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Our GPU rental services are deeply integrated with the NexusByte ecosystem.
            Turbocharge your AI projects by connecting your AI Agents, Custom GPTs, or Model Operations directly to our high-performance GPU compute fabric.
          </p>
          <div className="text-center">
            <Link 
              to="/ai/nova" 
              className="inline-block px-8 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-md hover:bg-opacity-90 transition-colors text-lg shadow-md"
            >
              Explore Nova AI Platform
            </Link>
          </div>
          <p className="text-center mt-4 text-sm text-gray-400">
            Example: "Deploy your custom AI model with GPU acceleration in seconds using our native compute fabric."
          </p>
        </section>
        
        {/* Developer Console/Portal Section */}
        <section className="mb-16 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-nexusbyte-primary-dark mb-6">Developer Console & Portal</h2>
          <div className="text-gray-700 space-y-3">
            <p>Manage your GPU resources effortlessly through our intuitive developer console. Our portal provides a centralized hub for:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Easy VM provisioning and de-provisioning.</li>
              <li>Real-time usage tracking and monitoring.</li>
              <li>Access to GPU instance logs and performance metrics.</li>
              <li>Comprehensive billing history and payment management.</li>
              <li>Simple toggles for auto-renewal and instance reservations.</li>
            </ul>
            <p className="mt-4">We are committed to providing a seamless and powerful experience for developers and researchers.</p>
          </div>
        </section>

        {/* Subscription & Billing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nexusbyte-primary-dark mb-8 text-center">Subscription & Billing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlansData.map((plan) => (
              <div key={plan.plan} className={`p-8 rounded-xl shadow-lg flex flex-col ${plan.plan === 'Growth' ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark ring-4 ring-green-300' : 'bg-white text-nexusbyte-primary-dark'}`}>
                <h3 className={`text-2xl font-bold mb-2 ${plan.plan === 'Growth' ? '' : 'text-nexusbyte-primary-dark'}`}>{plan.plan}</h3>
                <p className={`mb-1 text-sm ${plan.plan === 'Growth' ? 'text-gray-800' : 'text-gray-500'}`}>{plan.billingType}</p>
                <p className={`text-3xl font-extrabold my-4 ${plan.plan === 'Growth' ? '' : 'text-nexusbyte-accent-green'}`}>{plan.price}</p>
                <ul className="space-y-3 text-sm mb-8 flex-grow">
                  <li className="flex items-center"><CheckIcon className={`w-5 h-5 mr-2 ${plan.plan === 'Growth' ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} />Duration: {plan.duration}</li>
                  <li className="flex items-center"><CheckIcon className={`w-5 h-5 mr-2 ${plan.plan === 'Growth' ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} />GPU Access: {plan.gpuAccess}</li>
                  <li className="flex items-center"><CheckIcon className={`w-5 h-5 mr-2 ${plan.plan === 'Growth' ? 'text-nexusbyte-accent-green' : 'text-nexusbyte-accent-green'}`} />Support: {plan.support}</li>
                </ul>
                <Link 
                  to="/contact"
                  state={{ subject: `Inquiry about ${plan.plan} GPU Subscription Plan`}}
                  className={`block w-full text-center px-6 py-3 rounded-md font-semibold transition-colors
                    ${plan.plan === 'Growth' 
                      ? 'bg-nexusbyte-primary-dark text-white hover:bg-gray-800' 
                      : 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark hover:bg-opacity-80'}`}
                >
                  {plan.plan === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default GPURentalPage;
