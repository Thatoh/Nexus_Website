
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon, XIcon, InstagramIcon, MicrosoftIcon, FacebookIcon, GlobeAltIcon, GithubIcon, LinkedInIcon, ShareIcon } from '../components/icons';
import CloudDashboardSection from '../components/CloudDashboardSection';
import CloudCostPlatformSection from '../components/CloudCostPlatformSection';
import CompanyBenefitsSection from "../components/CompanyBenefitsSection";
import CollaborationCtaSection from "../components/CollaborationCtaSection";

const socialIconsList = [
  { icon: XIcon, id: "x", color: "text-gray-700 hover:text-black" },
  { icon: InstagramIcon, id: "instagram", color: "text-pink-500 hover:text-pink-600" },
  { icon: MicrosoftIcon, id: "apple", color: "text-gray-600 hover:text-gray-800" }, // Using MicrosoftIcon for Apple
  { icon: FacebookIcon, id: "facebook", color: "text-blue-600 hover:text-blue-700" },
  { icon: GlobeAltIcon, id: "google", color: "text-blue-500 hover:text-blue-600" }, // Using GlobeAltIcon for Globe/Google
  { icon: GithubIcon, id: "github", color: "text-gray-700 hover:text-black" },
  { icon: LinkedInIcon, id: "linkedin", color: "text-blue-500 hover:text-blue-600" },
  { icon: ShareIcon, id: "dribbble", color: "text-pink-400 hover:text-pink-500" }, // Using ShareIcon for Dribbble
];

const CloudSolutionsPage: React.FC = () => {
  const [visibleIcons, setVisibleIcons] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIcons((prev) => {
        const randomIcon = socialIconsList[Math.floor(Math.random() * socialIconsList.length)];
        const isVisible = prev.includes(randomIcon.id);

        if (isVisible) {
          return prev.filter((id) => id !== randomIcon.id);
        } else {
          if (prev.length < 4) { 
            return [...prev, randomIcon.id];
          }
          const newPrev = [...prev];
          newPrev.splice(Math.floor(Math.random() * newPrev.length), 1);
          return [...newPrev, randomIcon.id];
        }
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative min-h-[calc(100vh-80px)] bg-white overflow-hidden pt-20"> {/* Changed bg-black to bg-white */}
        {/* Animated Green Beam */}
        <motion.div
          {...{
            className: "absolute top-0 h-0.5 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent", // Slightly darker green
            animate: {
              x: ["-100px", "calc(100vw + 100px)"],
            },
            transition: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          } as any}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20"> {/* Increased opacity for subtle visibility on white */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/40 via-transparent to-transparent" /> {/* Changed to light gray radial */}
        </div>

        {/* Social Media Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {socialIconsList.map(({ icon: Icon, id, color }, index) => (
            <AnimatePresence key={id}>
              {visibleIcons.includes(id) && (
                <motion.div
                  {...{
                    initial: { opacity: 0, scale: 0.5 },
                    animate: { opacity: 0.7, scale: 1 }, // Increased opacity for better visibility on white
                    exit: { opacity: 0, scale: 0.5 },
                    transition: { duration: 0.5 },
                    className: `absolute ${color}`,
                    style: {
                      top: `${10 + (index % 5) * 18}%`,
                      left: `${10 + (index % 6) * 15}%`,
                      transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`
                    },
                  } as any}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Yellow Corner Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-bl from-yellow-300 to-transparent opacity-25 rounded-bl-full" /> {/* Adjusted opacity/color if needed */}

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-160px)] px-4 sm:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              {...{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "text-3xl md:text-4xl lg:text-5xl font-bold text-nexusbyte-primary-dark mb-8 leading-tight", // Changed text-white
              } as any}
            >
              NexusByte - YOUR SECURE AND
              <br />
              EFFICIENT CLOUD
              <br />
              COMMUNICATION PARTNER
            </motion.h1>

            <motion.p
              {...{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "text-gray-700 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed", // Changed text-gray-300
              } as any}
            >
              We provide robust cloud solutions that help businesses protect their data, scale their operations, and maximize the value of their digital infrastructure.
            </motion.p>

            <motion.div
              {...{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 },
              } as any}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-nexusbyte-accent-green hover:bg-nexusbyte-accent-green text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                CONTACT US
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Additional floating elements */}
        <motion.div
          {...{
            className: "absolute top-1/4 right-1/4 w-2 h-2 bg-nexusbyte-accent-green rounded-full opacity-70", // Adjusted color/opacity
            animate: {
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            },
            transition: {
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            },
          } as any}
        />

        <motion.div
          {...{
            className: "absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-60", // Adjusted color/opacity
            animate: {
              scale: [1, 2, 1],
              opacity: [0.6, 0.9, 0.6],
            },
            transition: {
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 2,
            },
          } as any}
        />
      </div>

      <CloudDashboardSection />
      <CloudCostPlatformSection />
      <CompanyBenefitsSection />
      <CollaborationCtaSection />
    </>
  );
};

export default CloudSolutionsPage;
