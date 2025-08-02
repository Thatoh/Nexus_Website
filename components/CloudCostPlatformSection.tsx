
import React, { useState } from "react";
import { CheckIcon, LightBulbIcon, CurrencyDollarIcon, UsersIcon, CalculatorIcon, PuzzlePieceIcon, CogIcon, ChartPieIcon, CalendarIcon } from './icons';

interface Feature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const featuresData: Feature[] = [
  {
    icon: LightBulbIcon, // Replaced TrendingUp
    title: "Data Normalization",
  },
  {
    icon: CurrencyDollarIcon, // Replaced DollarSign
    title: "Cost Allocation",
  },
  {
    icon: UsersIcon,
    title: "Shared Cost",
  },
  {
    icon: CalculatorIcon, // New icon
    title: "Cost Per Customer",
  },
  {
    icon: PuzzlePieceIcon, // Replaced Layers
    title: "Unit Cost",
  },
  {
    icon: CogIcon, // Replaced Settings
    title: "Kubernetes Visibility",
  },
  {
    icon: ChartPieIcon, // Replaced BarChart3
    title: "Cost Optimization",
  },
  {
    icon: CalendarIcon, // New icon
    title: "Budget Management",
  },
];

const CloudCostPlatformSection: React.FC = () => {
  const [checkedFeatures, setCheckedFeatures] = useState<boolean[]>([
    false, // Data Normalization
    true,  // Cost Allocation
    true,  // Shared Cost
    false, // Cost Per Customer
    false, // Unit Cost
    false, // Kubernetes Visibility
    false, // Cost Optimization
    false, // Budget Management
  ]);

  const toggleFeature = (index: number) => {
    setCheckedFeatures((prev) => prev.map((checked, i) => (i === index ? !checked : checked)));
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <p className="text-green-500 font-medium mb-6">
            <span className="text-green-500">•</span> The World's Leading Cloud Cost Optimization Platform{" "}
            <span className="text-green-500">•</span>
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Cloud Cost Visibility And Savings
          <br />
          In The AI Era
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
          Automate the collection, allocation, and analysis of your infrastructure and AI spend to uncover waste and
          improve unit economics.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {featuresData.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => toggleFeature(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFeature(index);}}
                aria-pressed={checkedFeatures[index]}
                aria-label={feature.title}
              >
                <div className="flex justify-center mb-4 text-gray-700">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm leading-tight">{feature.title}</h3>
                <div className="flex justify-center">
                  {checkedFeatures[index] ? (
                    <div className="w-6 h-6 bg-nexusbyte-accent-green rounded flex items-center justify-center"> {/* Changed to nexusbyte-accent-green */}
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded hover:border-gray-400 transition-colors"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CloudCostPlatformSection;
