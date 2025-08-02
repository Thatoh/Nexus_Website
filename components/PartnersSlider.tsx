
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LogoInfo {
  name: string;
  alt: string;
}

interface PartnerPair {
  id: string;
  primaryLogo: LogoInfo;
  secondaryLogo: LogoInfo;
}

const partnerData: PartnerPair[] = [
  { id: '1', primaryLogo: { name: 'AWS', alt: 'AWS Logo' }, secondaryLogo: { name: 'teach:able', alt: 'teach:able Logo' } },
  { id: '2', primaryLogo: { name: 'ThoughtSpot', alt: 'ThoughtSpot Logo' }, secondaryLogo: { name: 'INVOCA', alt: 'Invoca Logo' } },
  { id: '3', primaryLogo: { name: 'QuillBot', alt: 'QuillBot Logo' }, secondaryLogo: { name: 'BNP PARIBAS', alt: 'BNP Paribas Logo' } },
  { id: '4', primaryLogo: { name: 'ShipBob', alt: 'ShipBob Logo' }, secondaryLogo: { name: 'OpenAI', alt: 'OpenAI Logo' } },
  { id: '5', primaryLogo: { name: 'Descartes', alt: 'Descartes Logo' }, secondaryLogo: { name: 'Kinetik', alt: 'Kinetik Logo' } },
  { id: '6', primaryLogo: { name: 'CLOUDZERO', alt: 'CloudZero Logo' }, secondaryLogo: { name: 'Progressive', alt: 'Progressive Logo' } },
  { id: '7', primaryLogo: { name: 'Material-UI', alt: 'Material-UI Logo' }, secondaryLogo: { name: 'Google', alt: 'Google Logo' } },
  { id: '8', primaryLogo: { name: 'Otsuka', alt: 'Otsuka Logo' }, secondaryLogo: { name: 'Zone', alt: 'Zone Logo' } },
];

const PlaceholderLogo: React.FC<{ name: string; alt: string }> = ({ name, alt }) => (
  <div aria-label={alt} className="flex items-center justify-center w-full h-full text-center p-2">
    <span className="text-xl md:text-2xl font-semibold text-nexusbyte-primary-dark break-words"> {/* Adjusted font size and added break-words, changed text-white to text-nexusbyte-primary-dark */}
      {name}
    </span>
  </div>
);

interface PartnerCardProps {
  pair: PartnerPair;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ pair }) => {
  const [isPrimaryVisible, setIsPrimaryVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsPrimaryVisible(prev => !prev);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const currentLogo = isPrimaryVisible ? pair.primaryLogo : pair.secondaryLogo;

  return (
    <div className="bg-gray-100 p-4 rounded-xl aspect-[16/9] flex items-center justify-center overflow-hidden relative shadow-lg h-32 md:h-36 border border-gray-200 hover:shadow-xl transition-shadow"> {/* Changed bg-gray-800 to bg-gray-100 and added border */}
      <AnimatePresence mode="wait">
        <motion.div
          {...{
            key: currentLogo.name,
            initial: { y: "-100%", opacity: 0 }, // Start from top
            animate: { y: "0%", opacity: 1 },
            exit: { y: "100%", opacity: 0 }, // Exit to bottom
            transition: { duration: 0.5, ease: "easeInOut" },
            className: "absolute w-full h-full flex items-center justify-center",
          } as any}
        >
          <PlaceholderLogo name={currentLogo.name} alt={currentLogo.alt} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const CorporatePartnersSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24"> {/* Changed bg-nexusbyte-primary-dark to bg-white */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nexusbyte-primary-dark mb-12 md:mb-16 text-center max-w-3xl mx-auto leading-tight"> {/* Changed text-gray-300 to text-nexusbyte-primary-dark */}
          We join forces with companies dedicated to addressing real human needs.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {partnerData.map(pair => (
            <PartnerCard key={pair.id} pair={pair} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporatePartnersSection;
