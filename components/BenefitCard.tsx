
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BenefitCardProps {
  title: string;
  description: string;
  InitialUIComponent: React.FC;
  HoverUIComponent: React.FC;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  InitialUIComponent,
  HoverUIComponent,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={title}
    >
      <div className="aspect-[4/3] w-full bg-slate-700 rounded-lg mb-6 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {!isHovered && (
            <motion.div
              {...{
                key: "initial",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
                className: "w-full h-full",
              } as any}
            >
              <InitialUIComponent />
            </motion.div>
          )}
          {isHovered && (
            <motion.div
              {...{
                key: "hover",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
                className: "w-full h-full",
              } as any}
            >
              <HoverUIComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </motion.div>
  );
};

export default BenefitCard;
