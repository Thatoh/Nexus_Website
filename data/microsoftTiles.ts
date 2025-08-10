import { ProductTile } from '../types';
// Microsoft product icons
import { MicrosoftOfficeIcon, MicrosoftTeamsIcon, MicrosoftAzureIcon, MicrosoftCopilotIcon } from '../components/microsoftIcons';

export const microsoftTiles: ProductTile[] = [
  {
    id: 'm365',
    title: 'Microsoft 365 Apps & Mail',
    tagline: 'Office Apps & Email',
    longDescription: 'Create, edit & share from anywhere',
    color: 'red',
    icon: MicrosoftOfficeIcon,
    heroCopy: [
      {
        header: 'Desktop & Web Apps',
        bullets: ['Word, Excel, PowerPoint, OneNote, Outlook', '1 TB OneDrive cloud storage per user', '50 GB Exchange mailbox with custom domain', 'Real-time co-authoring & version history'],
      },
      { header: 'Ideal for:', bullets: ['Start-ups, remote teams, organisations moving off legacy file servers.'] },
    ],
    planDetails: [{ header: 'Choose a plan', bullets: ['Business Basic -> web/mobile apps + email', 'Business Standard -> full desktop apps', 'Business Premium -> Standard + Intune & Defender'] }],
    pricePerUser: 249.99,
  },
  {
    id: 'teams',
    title: 'Teams & Collaboration',
    tagline: 'Teams & Collaboration',
    longDescription: 'Meet, chat & co-create',
    color: 'green',
    icon: MicrosoftTeamsIcon,
    heroCopy: [
      {
        header: 'Unified Communications',
        bullets: ['HD video meetings for up to 300 participants', 'Persistent chat channels & external guest access', 'Secure file sharing (SharePoint) & live co-editing', 'Optional Teams Phone & PSTN calling add-on'],
      },
      { header: 'Integrated apps:', bullets: ['Approvals, Whiteboard, Viva Engage, Planner & hundreds of third-party connectors.'] },
    ],
    planDetails: [{ header: 'Choose a plan', bullets: ['Included in all Microsoft 365 Business / Enterprise suites', 'Teams Phone Standard (add-on)', 'Teams Rooms Pro for boardrooms'] }],
    pricePerUser: 150.00, // Example price
  },
  {
    id: 'azure',
    title: 'Azure Cloud Services',
    tagline: 'Innovate & Scale with Azure',
    longDescription: 'Build, deploy & manage applications',
    color: 'blue',
    icon: MicrosoftAzureIcon,
    heroCopy: [
      {
        header: 'Comprehensive Cloud Platform',
        bullets: ['Virtual Machines, Azure SQL, Cosmos DB', 'AI + Machine Learning services', 'IoT Hub & DevOps solutions', 'Global datacenters & hybrid capabilities'],
      },
      { header: 'Use Cases:', bullets: ['Web app hosting, big data analytics, disaster recovery, enterprise app migration.'] },
    ],
    planDetails: [{ header: 'Flexible Pricing', bullets: ['Pay-as-you-go options', 'Reserved Instances for savings', 'Azure Hybrid Benefit', 'Free tier for popular services'] }],
    pricePerUser: 100.00, // Indicative base price
  },
  {
    id: 'copilot',
    title: 'Microsoft Copilot',
    tagline: 'Your AI Companion',
    longDescription: 'Boost productivity with AI',
    color: 'yellow',
    icon: MicrosoftCopilotIcon,
    heroCopy: [
      {
        header: 'AI-Powered Assistance',
        bullets: ['Integrated into Microsoft 365 Apps', 'Draft content, summarize meetings, analyze data', 'Code generation in VS Code & GitHub', 'Contextual and personalized suggestions'],
      },
      { header: 'Benefits:', bullets: ['Automate repetitive tasks, unlock creativity, accelerate workflows, make informed decisions.'] },
    ],
    planDetails: [{ header: 'Licensing', bullets: ['Available as an add-on to Microsoft 365 E3/E5/Business Standard/Premium', 'Per-user monthly subscription', 'Requires underlying M365 license'] }],
    pricePerUser: 30.00, // Per user per month (example)
  },
];
