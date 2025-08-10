const fs = require('fs');
const path = require('path');

// Files to update with their hero section patterns
const filesToUpdate = [
  {
    file: 'pages/solutions/ict-support/DeviceLifecyclePage.tsx',
    importPath: '../../../components/StandardHeroSection',
    title: 'Device Lifecycle Management',
    subtitle: 'From Procurement to Retirement—Simplified',
    description: 'We manage the full journey of every endpoint to maximize its performance and lifespan.',
    quote: '"Your IT hardware is an investment—let\'s maximise its performance and lifespan."'
  },
  {
    file: 'pages/solutions/ict-support/BackupRecoveryPage.tsx',
    importPath: '../../../components/StandardHeroSection',
    title: 'Backup & Disaster Recovery',
    subtitle: 'Safeguard Your Data, Ensure Business Continuity',
    description: 'Our BDR solutions protect your critical data and ensure rapid recovery from disruption, system failure, or cyberattack.',
    quote: '"In today\'s world, recovery isn\'t optional—it\'s essential."'
  },
  {
    file: 'pages/ai/solutions/finance/AiFinancePage.tsx',
    importPath: '../../../../components/StandardHeroSection',
    title: 'AI for Finance',
    subtitle: 'Modernise Your Finance Function with Intelligent Automation',
    description: 'NexusByte empowers finance teams to move faster, detect risk earlier, and unlock real-time visibility into financial operations with AI-powered solutions. From invoice analysis to predictive budgeting, our AI systems reduce friction and increase financial intelligence—securely and at scale.',
    quote: '"Where others see numbers, your AI sees insights."'
  }
];

function updateFile(fileInfo) {
  const filePath = fileInfo.file;
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not already present
  if (!content.includes('StandardHeroSection')) {
    const importMatch = content.match(/import.*from.*['"]\.\.\/.*components\/icons['"]/);
    if (importMatch) {
      const importLine = `import StandardHeroSection from '${fileInfo.importPath}';`;
      content = content.replace(importMatch[0], importMatch[0] + '\n' + importLine);
    }
  }

  // Replace hero section
  const heroSectionRegex = /(\s*\{\/\* Hero Section \*\/\s*<section className="relative bg-nexusbyte-primary-dark text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">[\s\S]*?<\/section>\s*)/;
  
  const newHeroSection = `
      {/* Hero Section */}
      <StandardHeroSection
        title="${fileInfo.title}"
        subtitle="${fileInfo.subtitle}"
        description="${fileInfo.description}"
      >
        <div className="mt-8 text-center max-w-2xl mx-auto bg-gray-700/30 p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm">
          <blockquote className="text-xl italic text-gray-200 leading-relaxed">
            ${fileInfo.quote}
          </blockquote>
        </div>
      </StandardHeroSection>`;

  if (heroSectionRegex.test(content)) {
    content = content.replace(heroSectionRegex, newHeroSection);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } else {
    console.log(`Hero section pattern not found in: ${filePath}`);
  }
}

// Update all files
filesToUpdate.forEach(updateFile);
console.log('Hero section updates completed!'); 