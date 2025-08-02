
import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon } from './icons';

interface AIChatbotSectionProps {
  onOpenChat: () => void;
}

const AIChatbotSection: React.FC<AIChatbotSectionProps> = ({ onOpenChat }) => {
  return (
    <section className="py-16 md:py-24 bg-white text-nexusbyte-primary-dark"> {/* Changed background to bg-white */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ChatBubbleOvalLeftEllipsisIcon className="w-16 h-16 mx-auto mb-6 text-nexusbyte-primary-dark" />
          <h2 className="text-3xl md:text-4xl font-bold">Meet Your NexusByte AI Assistant</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Our intelligent AI chatbot, Nova, is here to help you navigate our services,
            provide instant information, and guide you to the right solutions.
          </p>
        </div>

        <div className="text-center">
          <motion.button
            {...{
              onClick: onOpenChat,
              className: "px-8 py-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark font-semibold rounded-md hover:bg-opacity-90 transition-colors text-lg shadow-lg",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              "aria-label": "Chat With Our AI",
            } as any}
          >
            Chat With Our AI
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default AIChatbotSection;
