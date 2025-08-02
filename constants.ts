
import { NavItem, NewNavLinkMegaMenuContent, CookieCategory } from './types';
import { CpuChipIcon, CloudArrowUpIcon, LightBulbIcon, LockClosedIcon, UsersIcon, WifiIcon } from './components/icons';
import React from 'react';

// --- Solutions Mega Menu ---
const solutionsMegaMenu: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'ai-agents',
      title: 'AI Agents',
      featured: {
        title: 'AI Agents & Automation',
        description: 'Explore custom AI agents, GPTs, chatbots, and AI-powered automation solutions to transform your business processes.',
        imageUrl: 'https://picsum.photos/seed/ai_agents_featured/200/200',
        linkUrl: '/solutions/ai-agents',
        linkText: 'Explore AI Agents',
      },
      subLinks: [
        { title: 'Custom GPTs & Chatbots', imageUrl: 'https://picsum.photos/seed/custom_gpts/100/100', href: '/solutions/ai-agents/custom-gpts', description: 'Tailored conversational AI solutions.' },
        { title: 'Nova AI Platform', imageUrl: 'https://picsum.photos/seed/nova_platform/100/100', href: '/solutions/ai-agents/nova-platform', description: 'Leverage our advanced AI platform.' },
        { title: 'NLP & Voice Solutions', imageUrl: 'https://picsum.photos/seed/nlp_voice/100/100', href: '/solutions/ai-agents/nlp-voice', description: 'Natural language processing and voice tech.' },
        { title: 'AI-Powered Automation', imageUrl: 'https://picsum.photos/seed/ai_automation_sub/100/100', href: '/solutions/ai-agents/automation', description: 'Automate tasks with intelligent AI.' },
      ],
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      featured: {
        title: 'Comprehensive Cloud Services',
        description: 'From web hosting to advanced IaaS on Azure and AWS, including migration, domain registration, and GPU rentals.',
        imageUrl: 'https://picsum.photos/seed/cloud_services_featured/200/200',
        linkUrl: '/solutions/cloud',
        linkText: 'Explore Cloud Services',
      },
      subLinks: [
        { title: 'Web & Application Hosting', imageUrl: 'https://picsum.photos/seed/web_hosting_sub/100/100', href: '/solutions/cloud/web-hosting', description: 'Shared, VPS, and Dedicated server plans.' },
        { title: 'Cloud Infrastructure (IaaS)', imageUrl: 'https://picsum.photos/seed/iaas_sub/100/100', href: '/solutions/cloud/iaas', description: 'Scalable Azure & AWS infrastructure.' },
        { title: 'GPU Rental Services', imageUrl: 'https://picsum.photos/seed/gpu_rental_sub/100/100', href: '/solutions/cloud/gpu-rentals', description: 'On-demand high-performance GPUs.' },
        { title: 'Domain Registration', imageUrl: 'https://picsum.photos/seed/domain_reg_sub/100/100', href: '/solutions/cloud/domains', description: 'Find and register your perfect domain.' },
        { title: 'Migration & Modernization', imageUrl: 'https://picsum.photos/seed/migration_sub/100/100', href: '/solutions/cloud/migration', description: 'Seamlessly move and upgrade your apps.' },
      ],
    },
    {
      id: 'ict-support',
      title: 'ICT Support',
      featured: {
        title: 'Proactive ICT Support',
        description: 'Managed IT services, infrastructure management, backup, disaster recovery, and device lifecycle solutions.',
        imageUrl: 'https://picsum.photos/seed/ict_support_featured/200/200',
        linkUrl: '/solutions/ict-support',
        linkText: 'Explore ICT Support',
      },
      subLinks: [
        { title: 'Managed IT Services', imageUrl: 'https://picsum.photos/seed/managed_it_sub/100/100', href: '/solutions/ict-support/managed-it', description: '24/7 helpdesk and proactive care.' },
        { title: 'Infrastructure Management', imageUrl: 'https://picsum.photos/seed/infra_mgmt_sub/100/100', href: '/solutions/ict-support/infrastructure', description: 'Optimize your IT backbone.' },
        { title: 'Backup & Disaster Recovery', imageUrl: 'https://picsum.photos/seed/backup_dr_sub/100/100', href: '/solutions/ict-support/backup-recovery', description: 'Protect your critical data.' },
        { title: 'Device Lifecycle Management', imageUrl: 'https://picsum.photos/seed/device_lifecycle_sub/100/100', href: '/solutions/ict-support/device-lifecycle', description: 'Manage devices from procurement to disposal.' },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      featured: {
        title: 'Advanced Cybersecurity Solutions',
        description: 'Comprehensive protection including threat detection, response, security audits, compliance, and Zero-Trust architecture.',
        imageUrl: 'https://picsum.photos/seed/cybersecurity_featured_new/200/200',
        linkUrl: '/solutions/cybersecurity',
        linkText: 'Explore Cybersecurity',
      },
      subLinks: [
        { title: 'Threat Detection & Response', imageUrl: 'https://picsum.photos/seed/threat_detection_sub/100/100', href: '/solutions/cybersecurity/threat-detection', description: 'SIEM, SOAR, and managed firewalls.' },
        { title: 'Security Audits & Pentesting', imageUrl: 'https://picsum.photos/seed/audits_pentesting_sub/100/100', href: '/solutions/cybersecurity/audits-pentesting', description: 'Identify and mitigate vulnerabilities.' },
        { title: 'Compliance & Governance', imageUrl: 'https://picsum.photos/seed/compliance_gov_sub/100/100', href: '/solutions/cybersecurity/compliance', description: 'Meet GDPR, POPIA, and other standards.' },
        { title: 'Zero-Trust Architecture', imageUrl: 'https://picsum.photos/seed/zero_trust_sub/100/100', href: '/solutions/cybersecurity/zero-trust', description: 'Modern security for all resources.' },
      ],
    },
    {
      id: 'hybrid-work-solutions',
      title: 'Hybrid Work',
      featured: {
        title: 'Enable Hybrid Work Environments',
        description: 'Solutions for unified communications, secure remote access, Cloud PCs, and virtual desktops for a flexible workforce.',
        imageUrl: 'https://picsum.photos/seed/hybrid_work_featured_new/200/200',
        linkUrl: '/solutions/hybrid-work',
        linkText: 'Explore Hybrid Work',
      },
      subLinks: [
        { title: 'Unified Communications', imageUrl: 'https://picsum.photos/seed/unified_comms_sub/100/100', href: '/solutions/hybrid-work/unified-comms', description: 'Integrate voice, video, and messaging.' },
        { title: 'Secure Remote Access', imageUrl: 'https://picsum.photos/seed/secure_remote_access_sub/100/100', href: '/solutions/hybrid-work/secure-access', description: 'Safe connections for remote users.' },
        { title: 'Cloud PCs & Virtual Desktops', imageUrl: 'https://picsum.photos/seed/cloud_pcs_sub/100/100', href: '/solutions/hybrid-work/cloud-pcs', description: 'Access desktops from anywhere.' },
        { title: 'Collaboration Tools', imageUrl: 'https://picsum.photos/seed/collab_tools_hybrid_sub/100/100', href: '/solutions/hybrid-work/collaboration-tools', description: 'Enhance teamwork across locations.' },
      ],
    },
  ],
};

// --- Use Cases Mega Menu ---
const useCasesMegaMenu: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'by-industry',
      title: 'By Industry',
      featured: {
        title: 'Industry-Specific Solutions',
        description: 'Discover how NexusByte tailors solutions for diverse sectors including finance, healthcare, retail, public sector, and manufacturing.',
        imageUrl: 'https://picsum.photos/seed/by_industry_featured/200/200',
        linkUrl: '/use-cases/by-industry',
        linkText: 'View Industry Cases',
      },
      subLinks: [
        { title: 'Financial Services', imageUrl: 'https://picsum.photos/seed/finance_industry/100/100', href: '/use-cases/by-industry/financial-services', description: 'Secure and compliant tech for finance.' },
        { title: 'Healthcare', imageUrl: 'https://picsum.photos/seed/healthcare_industry/100/100', href: '/use-cases/by-industry/healthcare', description: 'Innovative solutions for patient care.' },
        { title: 'Retail & E-commerce', imageUrl: 'https://picsum.photos/seed/retail_industry/100/100', href: '/use-cases/by-industry/retail-ecommerce', description: 'Enhance customer experience and sales.' },
        { title: 'Public Sector', imageUrl: 'https://picsum.photos/seed/public_sector_industry/100/100', href: '/use-cases/by-industry/public-sector', description: 'Modernize services for citizens.' },
      ],
    },
    {
      id: 'by-business-need',
      title: 'By Business Need',
      featured: {
        title: 'Solutions for Key Business Needs',
        description: 'Address critical business challenges such as customer experience, operational efficiency, security, and remote work enablement.',
        imageUrl: 'https://picsum.photos/seed/by_need_featured/200/200',
        linkUrl: '/use-cases/by-business-need',
        linkText: 'View Business Needs',
      },
      subLinks: [
        { title: 'Customer Experience Personalization', imageUrl: 'https://picsum.photos/seed/cx_personalization/100/100', href: '/use-cases/by-business-need/cx-personalization', description: 'Tailor interactions for higher engagement.' },
        { title: 'Operational Efficiency Automation', imageUrl: 'https://picsum.photos/seed/operational_efficiency/100/100', href: '/use-cases/by-business-need/operational-efficiency', description: 'Streamline processes with automation.' },
        { title: 'Secure & Compliant Operations', imageUrl: 'https://picsum.photos/seed/secure_ops/100/100', href: '/use-cases/by-business-need/secure-compliant-ops', description: 'Maintain security and meet regulations.' },
        { title: 'Remote Workforce Enablement', imageUrl: 'https://picsum.photos/seed/remote_workforce_need/100/100', href: '/use-cases/by-business-need/remote-workforce', description: 'Equip your team for remote productivity.' },
      ],
    },
  ],
};

// --- Insights Mega Menu ---
const insightsMegaMenu: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'briefs-and-bytes',
      title: 'Briefs & Bytes',
      featured: {
        title: 'NexusByte Briefs & Bytes',
        description: 'Stay informed with our latest articles on AI, cloud, cybersecurity, and the modern workplace.',
        imageUrl: 'https://picsum.photos/seed/blog_featured_insights/200/200',
        linkUrl: '/insights/briefs-and-bytes',
        linkText: 'Read Briefs & Bytes',
      },
      subLinks: [
        { title: 'AI & Automation Articles', imageUrl: 'https://picsum.photos/seed/blog_ai_automation/100/100', href: '/insights/briefs-and-bytes/ai-automation', description: 'Latest in AI and process automation.' },
        { title: 'Cloud & Infrastructure Articles', imageUrl: 'https://picsum.photos/seed/blog_cloud_infra/100/100', href: '/insights/briefs-and-bytes/cloud-infrastructure', description: 'Cloud computing and IT infrastructure.' },
        { title: 'Cybersecurity Trends Articles', imageUrl: 'https://picsum.photos/seed/blog_cyber_trends/100/100', href: '/insights/briefs-and-bytes/cybersecurity-trends', description: 'Updates on cybersecurity threats.' },
        { title: 'Modern Workplace Articles', imageUrl: 'https://picsum.photos/seed/blog_modern_work/100/100', href: '/insights/briefs-and-bytes/modern-workplace', description: 'Transforming how we work.' },
      ],
    },
    {
      id: 'resources',
      title: 'Knowledge Resources',
      featured: {
        title: 'In-Depth Knowledge Resources',
        description: 'Access our library of whitepapers, e-books, webinar recordings, and industry reports for expert insights.',
        imageUrl: 'https://picsum.photos/seed/resources_featured_insights/200/200',
        linkUrl: '/insights/resources',
        linkText: 'Explore Resources',
      },
      subLinks: [
        { title: 'Whitepapers & E-books', imageUrl: 'https://picsum.photos/seed/whitepapers_ebooks/100/100', href: '/insights/whitepapers', description: 'Detailed guides and analysis.' },
        { title: 'Webinars & Events', imageUrl: 'https://picsum.photos/seed/webinars_events/100/100', href: '/insights/webinars', description: 'Join live sessions or watch recordings.' },
        { title: 'Industry Reports', imageUrl: 'https://picsum.photos/seed/industry_reports/100/100', href: '/insights/reports', description: 'Market trends and research.' },
        { title: 'On-Demand Webinar Library', imageUrl: 'https://picsum.photos/seed/on_demand_webinars/100/100', href: '/insights/webinars/on-demand', description: 'Access past webinars anytime.' },
      ],
    },
  ],
};

// --- AI Mega Menu ---
const aiMegaMenu: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'nova-ai-platform',
      title: 'Nova AI Platform',
      featured: {
        title: 'Meet Nova AI',
        description: 'Discover NexusByte\'s intelligent AI platform, its capabilities, features, and how it can be applied to your industry.',
        imageUrl: 'https://picsum.photos/seed/nova_ai_featured/200/200',
        linkUrl: '/ai/nova',
        linkText: 'Learn About Nova AI',
      },
      subLinks: [
        { title: 'Platform Overview', imageUrl: 'https://picsum.photos/seed/nova_overview/100/100', href: '/ai/nova/overview', description: 'Understand the core of Nova AI.' },
        { title: 'Key Features & Capabilities', imageUrl: 'https://picsum.photos/seed/nova_features/100/100', href: '/ai/nova/features', description: 'Explore what Nova AI can do.' },
        { title: 'Industry Applications', imageUrl: 'https://picsum.photos/seed/nova_applications/100/100', href: '/ai/nova/applications', description: 'See Nova AI in action.' },
        { title: 'Request Nova Demo', imageUrl: 'https://picsum.photos/seed/nova_demo/100/100', href: '/ai/nova/demo', description: 'Experience Nova AI firsthand.' },
      ],
    },
    {
      id: 'ai-services-consulting',
      title: 'AI Services & Consulting',
      featured: {
        title: 'Expert AI Services & Consulting',
        description: 'From custom model development and AI integration to readiness assessments and strategic roadmaps.',
        imageUrl: 'https://picsum.photos/seed/ai_services_consulting_featured/200/200',
        linkUrl: '/ai/services-consulting',
        linkText: 'Explore AI Services',
      },
      subLinks: [
        { title: 'Custom Model Development', imageUrl: 'https://picsum.photos/seed/custom_models_ai/100/100', href: '/ai/services/custom-models', description: 'AI models built for your needs.' },
        { title: 'AI Integration Services', imageUrl: 'https://picsum.photos/seed/ai_integration_ai/100/100', href: '/ai/services/integration', description: 'Embed AI into your systems.' },
        { title: 'AI Readiness Assessment', imageUrl: 'https://picsum.photos/seed/ai_readiness_ai/100/100', href: '/ai/consulting/assessment', description: 'Evaluate your AI preparedness.' },
        { title: 'AI Adoption & Strategy Roadmap', imageUrl: 'https://picsum.photos/seed/ai_strategy_ai/100/100', href: '/ai/consulting/strategy', description: 'Plan your AI journey.' },
      ],
    },
    {
      id: 'applied-ai-solutions',
      title: 'Applied AI Solutions',
      featured: {
        title: 'Targeted AI Solutions',
        description: 'Leverage AI for specific domains such as finance, customer support, legal tech, and healthcare.',
        imageUrl: 'https://picsum.photos/seed/applied_ai_featured/200/200',
        linkUrl: '/ai/applied-solutions',
        linkText: 'View AI Solutions',
      },
      subLinks: [
        { title: 'AI for Finance', imageUrl: 'https://picsum.photos/seed/ai_finance/100/100', href: '/ai/solutions/finance', description: 'Intelligent finance solutions.' },
        { title: 'AI for Customer Support', imageUrl: 'https://picsum.photos/seed/ai_customer_support/100/100', href: '/ai/solutions/customer-support', description: 'Enhance support with AI.' },
        { title: 'AI for Legal Tech', imageUrl: 'https://picsum.photos/seed/ai_legal/100/100', href: '/ai/solutions/legal', description: 'AI in the legal industry.' },
        { title: 'AI for Healthcare', imageUrl: 'https://picsum.photos/seed/ai_healthcare_solutions/100/100', href: '/ai/solutions/healthcare', description: 'Transform healthcare with AI.' },
      ],
    },
  ],
};

// --- Hybrid Solutions Mega Menu ---
const hybridSolutionsMegaMenu: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'collaboration-platforms',
      title: 'Collaboration Platforms',
      featured: {
        title: 'Seamless Collaboration Platforms',
        description: 'Empower teamwork with Microsoft Teams, Google Workspace, Zoom integrations, and strategic unified communications.',
        imageUrl: 'https://picsum.photos/seed/collab_platforms_featured/200/200',
        linkUrl: '/hybrid-solutions/collaboration',
        linkText: 'Explore Collaboration',
      },
      subLinks: [
        { title: 'Microsoft Teams Solutions', imageUrl: 'https://picsum.photos/seed/ms_teams_hybrid/100/100', href: '/hybrid-solutions/collaboration/teams', description: 'Optimize your Teams usage.' },
        { title: 'Google Workspace Solutions', imageUrl: 'https://picsum.photos/seed/google_workspace_hybrid/100/100', href: '/hybrid-solutions/collaboration/google-workspace', description: 'Leverage Google\'s collaboration suite.' },
        { title: 'Zoom Integrations', imageUrl: 'https://picsum.photos/seed/zoom_hybrid/100/100', href: '/hybrid-solutions/collaboration/zoom', description: 'Integrate Zoom into workflows.' },
        { title: 'Unified Communications Strategy', imageUrl: 'https://picsum.photos/seed/uc_strategy_hybrid/100/100', href: '/hybrid-solutions/collaboration/uc-strategy', description: 'Develop a cohesive UC plan.' },
      ],
    },
    {
      id: 'vdi',
      title: 'Virtual Desktop Infrastructure (VDI)',
      featured: {
        title: 'Flexible Virtual Desktops (VDI)',
        description: 'Access desktops anywhere with Azure Virtual Desktop and Windows 365 Cloud PC. Explore VDI benefits and use cases.',
        imageUrl: 'https://picsum.photos/seed/vdi_featured_hybrid/200/200',
        linkUrl: '/hybrid-solutions/vdi',
        linkText: 'Explore VDI Solutions',
      },
      subLinks: [
        { title: 'Azure Virtual Desktop', imageUrl: 'https://picsum.photos/seed/azure_vd_hybrid/100/100', href: '/hybrid-solutions/vdi/azure-vd', description: 'Scalable and secure virtual desktops.' },
        { title: 'Windows 365 Cloud PC', imageUrl: 'https://picsum.photos/seed/windows_365_hybrid/100/100', href: '/hybrid-solutions/vdi/windows-365', description: 'Your personalized Cloud PC.' },
        { title: 'VDI Benefits & Planning', imageUrl: 'https://picsum.photos/seed/vdi_benefits_hybrid/100/100', href: '/hybrid-solutions/vdi/benefits', description: 'Understand the advantages of VDI.' },
        { title: 'VDI Use Cases', imageUrl: 'https://picsum.photos/seed/vdi_use_cases_hybrid/100/100', href: '/hybrid-solutions/vdi/use-cases', description: 'Real-world VDI applications.' },
      ],
    },
    {
      id: 'endpoint-management',
      title: 'Endpoint Security & Management',
      featured: {
        title: 'Secure Endpoint Management',
        description: 'Protect your hybrid workforce with MFA, EDR, MDM, and Unified Endpoint Management (UEM) solutions.',
        imageUrl: 'https://picsum.photos/seed/endpoint_mgmt_featured/200/200',
        linkUrl: '/hybrid-solutions/endpoint-management',
        linkText: 'Secure Your Endpoints',
      },
      subLinks: [
        { title: 'Multi-Factor Authentication (MFA)', imageUrl: 'https://picsum.photos/seed/mfa_hybrid/100/100', href: '/hybrid-solutions/endpoint-management/mfa', description: 'Stronger identity protection.' },
        { title: 'Endpoint Detection & Response (EDR)', imageUrl: 'https://picsum.photos/seed/edr_hybrid/100/100', href: '/hybrid-solutions/endpoint-management/edr', description: 'Advanced threat detection on endpoints.' },
        { title: 'Mobile Device Management (MDM)', imageUrl: 'https://picsum.photos/seed/mdm_hybrid/100/100', href: '/hybrid-solutions/endpoint-management/mdm', description: 'Manage and secure mobile devices.' },
        { title: 'Unified Endpoint Management (UEM)', imageUrl: 'https://picsum.photos/seed/uem_hybrid/100/100', href: '/hybrid-solutions/endpoint-management/uem', description: 'Holistic endpoint management.' },
      ],
    },
  ],
};

// --- Ticketing System Mega Menu ---
const ticketingSystemMegaMenu: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'ticketing-platform',
      title: 'Core Platform Features',
      featured: {
        title: 'Ticketing System Platform',
        description: 'Explore core features like ticket management, SLA tracking, analytics, reporting, and workflow automation.',
        imageUrl: 'https://picsum.photos/seed/ticketing_platform_featured/200/200',
        linkUrl: '/ticketing-system/platform',
        linkText: 'Discover Platform Features',
      },
      subLinks: [
        { title: 'Ticket Creation & Management', imageUrl: 'https://picsum.photos/seed/ticket_mgmt_ticketing/100/100', href: '/ticketing-system/features/ticket-management', description: 'Efficiently manage support tickets.' },
        { title: 'SLA Management', imageUrl: 'https://picsum.photos/seed/sla_mgmt_ticketing/100/100', href: '/ticketing-system/features/sla-management', description: 'Define and track service levels.' },
        { title: 'Analytics & Reporting', imageUrl: 'https://picsum.photos/seed/analytics_ticketing/100/100', href: '/ticketing-system/features/analytics', description: 'Gain insights from support data.' },
        { title: 'Workflow Automation', imageUrl: 'https://picsum.photos/seed/workflow_ticketing/100/100', href: '/ticketing-system/features/automation', description: 'Automate repetitive ticketing tasks.' },
      ],
    },
    {
      id: 'ticketing-plans-access',
      title: 'Plans, Access & Support',
      featured: {
        title: 'Plans, Access Control & Demo',
        description: 'Learn about user roles, permissions, pricing plans, request a demo, and access support documentation.',
        imageUrl: 'https://picsum.photos/seed/ticketing_plans_featured/200/200',
        linkUrl: '/ticketing-system/plans-access',
        linkText: 'Explore Plans & Access',
      },
      subLinks: [
        { title: 'Roles & Permissions', imageUrl: 'https://picsum.photos/seed/roles_ticketing/100/100', href: '/ticketing-system/admin/roles-permissions', description: 'Granular access control.' },
        { title: 'Pricing & Plans', imageUrl: 'https://picsum.photos/seed/pricing_ticketing/100/100', href: '/ticketing-system/pricing', description: 'Choose the right plan for you.' },
        { title: 'Request a Demo', imageUrl: 'https://picsum.photos/seed/demo_ticketing/100/100', href: '/ticketing-system/demo', description: 'See the ticketing system in action.' },
        { title: 'Support & Documentation', imageUrl: 'https://picsum.photos/seed/support_ticketing/100/100', href: '/ticketing-system/support', description: 'Get help and find resources.' },
      ],
    },
  ],
};

// --- ByteDesk Mega Menu ---
const byteDeskMegaMenu: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'bytedesk-suite-main',
      title: 'ByteDesk Suite',
      featured: {
        title: 'The ByteDesk Suite',
        description: 'An all-in-one customer service platform featuring live chat, knowledge base builder, integrated ticketing, and product roadmap.',
        imageUrl: 'https://picsum.photos/seed/bytedesk_suite_featured/200/200',
        linkUrl: '/bytedesk/suite',
        linkText: 'Explore the Suite',
      },
      subLinks: [
        { title: 'Live Chat Software', imageUrl: 'https://picsum.photos/seed/live_chat_bytedesk/100/100', href: '/bytedesk/suite/live-chat', description: 'Engage customers in real-time.' },
        { title: 'Knowledge Base Builder', imageUrl: 'https://picsum.photos/seed/kb_builder_bytedesk/100/100', href: '/bytedesk/suite/knowledge-base', description: 'Create comprehensive help centers.' },
        { title: 'Integrated Ticketing System', imageUrl: 'https://picsum.photos/seed/ticketing_bytedesk/100/100', href: '/bytedesk/suite/ticketing', description: 'Seamlessly manage support requests.' },
        { title: 'Product Roadmap', imageUrl: 'https://picsum.photos/seed/roadmap_bytedesk/100/100', href: '/bytedesk/roadmap', description: 'See what\'s next for ByteDesk.' },
      ],
    },
    {
      id: 'bytedesk-solutions',
      title: 'Integrations & Use Cases',
      featured: {
        title: 'ByteDesk Integrations & Solutions',
        description: 'Connect ByteDesk with CRM and communication tools. Discover use cases for IT helpdesks and customer support.',
        imageUrl: 'https://picsum.photos/seed/bytedesk_solutions_featured/200/200',
        linkUrl: '/bytedesk/solutions',
        linkText: 'Learn About Solutions',
      },
      subLinks: [
        { title: 'CRM Integrations', imageUrl: 'https://picsum.photos/seed/crm_integrations_bytedesk/100/100', href: '/bytedesk/integrations/crm', description: 'Connect with Salesforce, HubSpot, etc.' },
        { title: 'Communication Tool Integrations', imageUrl: 'https://picsum.photos/seed/comm_integrations_bytedesk/100/100', href: '/bytedesk/integrations/communication', description: 'Integrate with Slack, M365, etc.' },
        { title: 'IT Helpdesk Solutions', imageUrl: 'https://picsum.photos/seed/it_helpdesk_bytedesk/100/100', href: '/bytedesk/use-cases/it-helpdesk', description: 'Streamline IT support processes.' },
        { title: 'Customer Support Solutions', imageUrl: 'https://picsum.photos/seed/customer_support_bytedesk/100/100', href: '/bytedesk/use-cases/customer-support', description: 'Enhance your customer service.' },
      ],
    },
  ],
};

// --- NEW Connectivity Mega Menu ---
const connectivityMegaMenu: NewNavLinkMegaMenuContent = {
  items: [
    {
      id: 'connectivity-solutions',
      title: 'Connectivity Solutions',
      featured: {
        title: 'Reliable & Fast Connectivity',
        description: 'Stay connected with our comprehensive range of internet solutions, including high-speed fibre for home and business, mobile LTE, and versatile SIM packages.',
        imageUrl: 'https://picsum.photos/seed/connectivity_featured/200/200',
        linkUrl: '/solutions/connectivity/business-broadband',
        linkText: 'Explore Connectivity',
      },
      subLinks: [
        { title: 'Fibre to the Home (FTTH)', imageUrl: 'https://picsum.photos/seed/ftth_sub/100/100', href: '/solutions/connectivity/ftth', description: 'High-speed internet for your home.' },
        { title: 'Fibre to the Business (FTTB)', imageUrl: 'https://picsum.photos/seed/fttb_sub/100/100', href: '/solutions/connectivity/fttb', description: 'Enterprise-grade fibre for your office.' },
        { title: 'LTE Solutions', imageUrl: 'https://picsum.photos/seed/lte_sub/100/100', href: '/solutions/connectivity/lte', description: 'Fast, wireless internet anywhere.' },
        { title: 'Mobile SIM Solutions', imageUrl: 'https://picsum.photos/seed/mobile_sim_sub/100/100', href: '/solutions/connectivity/mobile-sim', description: 'Voice and data SIMs for mobility.' },
        { title: 'Data SIM Solutions', imageUrl: 'https://picsum.photos/seed/data_sim_sub/100/100', href: '/solutions/connectivity/data-sim', description: 'Data-only SIMs for devices and IoT.' },
      ],
    },
  ],
};


export const NAV_ITEMS: NavItem[] = [
  {
    id: 'solutions',
    title: 'Solutions',
    path: '/solutions', 
    megaMenuContent: solutionsMegaMenu,
  },
  {
    id: 'use-cases',
    title: 'Use Cases',
    path: '/use-cases',
    megaMenuContent: useCasesMegaMenu,
  },
  {
    id: 'insights',
    title: 'Insights',
    path: '/insights',
    megaMenuContent: insightsMegaMenu, 
  },
  {
    id: 'ai',
    title: 'AI',
    path: '/ai',
    megaMenuContent: aiMegaMenu, 
  },
  {
    id: 'hybrid-solutions',
    title: 'Hybrid',
    path: '/hybrid-solutions', // Path in NAV_ITEM
    megaMenuContent: hybridSolutionsMegaMenu, 
  },
  {
    id: 'connectivity',
    title: 'Connectivity',
    path: '/solutions/connectivity',
    megaMenuContent: connectivityMegaMenu,
  },
  { 
    id: 'ticketing-system', 
    title: 'Ticketing System', 
    path: '/ticketing-system',
    megaMenuContent: ticketingSystemMegaMenu,
  },
  { 
    id: 'bytedesk', 
    title: 'ByteDesk', 
    path: '/bytedesk',
    megaMenuContent: byteDeskMegaMenu,
  },
];

export const HERO_SLIDES_DATA = [ // Kept as is, not requested to change
  { id: 1, title: "AI", description: "Artificial Intelligence Services", image: "https://picsum.photos/seed/ai_hero/1200/800" },
  { id: 2, title: "Cloud", description: "Cloud Migration & Management", image: "https://picsum.photos/seed/cloud_hero/1200/800" },
  { id: 3, title: "ICT", description: "ICT Support Solutions", image: "https://picsum.photos/seed/ict_hero/1200/800" },
  { id: 4, title: "Cyber", description: "Cybersecurity and Compliance", image: "https://picsum.photos/seed/cyber_hero/1200/800" },
  { id: 5, title: "Hybrid", description: "Hybrid Work Environments", image: "https://picsum.photos/seed/hybrid_hero/1200/800" },
];

export const SERVICES_DATA = [ // Kept as is
  { id: 1, title: 'AI Development', description: 'Custom AI solutions to optimize your business processes.', icon: React.createElement(CpuChipIcon) },
  { id: 2, title: 'Cloud Services', description: 'Reliable cloud infrastructure and migration services.', icon: React.createElement(CloudArrowUpIcon) },
  { id: 3, title: 'ICT Consulting', description: 'Expert advice to align your IT strategy with business goals.', icon: React.createElement(LightBulbIcon) },
  { id: 4, title: 'Cybersecurity Solutions', description: 'Comprehensive security to protect your valuable assets.', icon: React.createElement(LockClosedIcon) },
  { id: 5, title: 'Hybrid Work Setup', description: 'Seamlessly integrate remote and in-office work environments.', icon: React.createElement(UsersIcon) },
  { id: 6, title: 'Network Solutions', description: 'Robust and scalable network design and implementation.', icon: React.createElement(WifiIcon) },
];

export const PARTNER_LOGOS_DATA = [ // Kept as is
  { id: 1, src: 'https://picsum.photos/seed/logo1/150/75?grayscale', alt: 'Partner 1' },
  { id: 2, src: 'https://picsum.photos/seed/logo2/150/75?grayscale', alt: 'Partner 2' },
  { id: 3, src: 'https://picsum.photos/seed/logo3/150/75?grayscale', alt: 'Partner 3' },
  { id: 4, src: 'https://picsum.photos/seed/logo4/150/75?grayscale', alt: 'Partner 4' },
  { id: 5, src: 'https://picsum.photos/seed/logo5/150/75?grayscale', alt: 'Partner 5' },
  { id: 6, src: 'https://picsum.photos/seed/logo6/150/75?grayscale', alt: 'Partner 6' },
  { id: 7, src: 'https://picsum.photos/seed/logo7/150/75?grayscale', alt: 'Partner 7' },
  { id: 8, src: 'https://picsum.photos/seed/logo8/150/75?grayscale', alt: 'Partner 8' },
];

export const FOOTER_LINKS = { // Updated to reflect new main nav items, if necessary
  quickLinks: [
    { title: 'Solutions', href: '/solutions' },
    { title: 'Use Cases', href: '/use-cases' },
    { title: 'Insights', href: '/insights' },
    { title: 'AI', href: '/ai' },
    { title: 'Hybrid', href: '/hybrid-solutions' },
    { title: 'Connectivity', href: '/solutions/connectivity' },
    { title: 'Ticketing System', href: '/ticketing-system' },
    { title: 'ByteDesk', href: '/bytedesk' },
  ],
  support: [
    { title: 'Contact Us', href: '/contact' },
    { title: 'FAQs', href: '/faq' },
    { title: 'Documentation', href: '/docs' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
  ],
};

export const COMPANY_MISSION = "NexusByte is dedicated to empowering businesses through innovative ICT solutions, driving efficiency, and fostering growth in the digital age.";

export const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Strictly Necessary Cookies',
    description: 'These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. They cannot be disabled.',
    required: true,
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'These cookies allow us to collect information about how visitors use our website, for instance which pages visitors go to most often, and if they get error messages from web pages. This helps us to improve the way our website works.',
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies are used to deliver adverts more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.',
  },
  {
    id: 'preferences',
    name: 'Preferences Cookies',
    description: 'These cookies allow our website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features.',
  },
];

export const LOCAL_STORAGE_COOKIE_CONSENT_KEY = 'nexusbyte-cookie-consent';
