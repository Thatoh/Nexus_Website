
import React from 'react';
import { motion } from 'framer-motion';
import BenefitCard from './BenefitCard';
import { AISupportInitial, AISupportHover } from './benefitsMockUI/AISupportMock';
import { MonitoringInitial, MonitoringHover } from './benefitsMockUI/MonitoringMock';
import { TaskControlInitial, TaskControlHover } from './benefitsMockUI/TaskControlMock';

const benefitsData = [
  {
    id: 'ai-support',
    title: 'Never Sleeps AI Support',
    description: 'Smart support, always on. Let AI handle your questions and guide you to the right solution.',
    InitialUIComponent: AISupportInitial,
    HoverUIComponent: AISupportHover,
  },
  {
    id: 'monitoring',
    title: 'Monitoring Everywhere',
    description: 'Stay connected and in control with real-time monitoring—anytime, anywhere.',
    InitialUIComponent: MonitoringInitial,
    HoverUIComponent: MonitoringHover,
  },
  {
    id: 'task-control',
    title: 'Take Control of Your Tasks',
    description: 'Organize, prioritize, and complete your tasks with ease — all in one place.',
    InitialUIComponent: TaskControlInitial,
    HoverUIComponent: TaskControlHover,
  },
];

const CompanyBenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            {...{
              initial: { opacity: 0, y: -10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.5 },
              transition: { duration: 0.5 },
              className: "mb-4",
            } as any}
          >
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow-sm">
              • Our Benefits
            </span>
          </motion.div>
          <motion.h2
            {...{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "text-3xl md:text-4xl lg:text-5xl font-bold text-nexusbyte-primary-dark",
            } as any}
          >
            What Makes Us Different
          </motion.h2>
          <motion.p
            {...{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.1 },
              className: "mt-4 text-lg text-gray-600 max-w-2xl mx-auto",
            } as any}
          >
            Discover the advantages designed to optimize your experience and deliver real results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              {...{
                key: benefit.id,
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { duration: 0.5, delay: index * 0.15 },
              } as any}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                InitialUIComponent={benefit.InitialUIComponent}
                HoverUIComponent={benefit.HoverUIComponent}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefitsSection;
