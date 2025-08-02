
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, CpuChipIcon, BoltIcon, ShieldCheckIcon, UsersIcon, GlobeAltIcon, ArrowRightIcon, BriefcaseIcon, CloudArrowUpIcon, ChevronDownIcon, ChevronUpIcon } from '../components/icons';

// --- Icons (already in icons.tsx, included here for context if needed) ---
/*
const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( ... );
const PhotoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( ... );
const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( ... );
const CursorArrowRaysIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( ... );
*/
const PhotoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.455-2.455L12.75 18l1.197-.398a3.375 3.375 0 002.455-2.455l.398-1.197.398 1.197a3.375 3.375 0 002.455 2.455l1.197.398-1.197.398a3.375 3.375 0 00-2.455 2.455z" />
    </svg>
);

const CursorArrowRaysIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.83-2.25l-1.447 1.448M1.17 11.17h2.25m11.34 0h2.25m-5.83 5.83l1.447 1.447M5.498 5.498L4.05 4.05M21.95 21.95l-1.447-1.447M18.83 5.83l-1.447-1.447M5.498 18.502l1.447-1.447" />
    </svg>
);


// --- Countdown Timer Hook ---
const useCountdown = (initialTimeInSeconds: number) => {
    const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);
  
    useEffect(() => {
      if (timeLeft <= 0) return;
  
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [timeLeft]);
  
    const days = Math.floor(timeLeft / (60 * 60 * 24));
    const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = Math.floor(timeLeft % 60);
  
    const format = (num: number) => num.toString().padStart(2, '0');

    return { 
        days: format(days), 
        hours: format(hours), 
        minutes: format(minutes), 
        seconds: format(seconds) 
    };
};

const CountdownTimer = () => {
    const initialSeconds = (2 * 24 * 3600) + (22 * 3600) + (4 * 60) + 13;
    const { days, hours, minutes, seconds } = useCountdown(initialSeconds);
  
    return (
      <div className="bg-purple-100 text-purple-800 px-6 py-4 rounded-lg font-mono text-xl tracking-widest">
        <span>{days} : </span>
        <span>{hours} : </span>
        <span>{minutes} : </span>
        <span>{seconds}</span>
      </div>
    );
};

// --- Hero Component ---
const WebHostingHero: React.FC = () => {
    // --- Image Handler ---
    // Developer-configurable image URL for the hero section background.
    // The default image shows an energetic person to match the "RUN" theme. This can be replaced with any other image URL.
    const heroBackgroundImageUrl = "https://images.unsplash.com/photo-1534125992258-a5c7c28c35d7?q=80&w=1964&auto=format&fit=crop";

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
            {/* Left Column */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-left"
            >
            <div className="inline-flex items-center gap-2 bg-lime-200 text-lime-900 font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-lime-500 rounded-full"></span>
                AI SALE
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Get 73% off: Launch online <br />
                with <span className="text-purple-600">AI</span> for less
            </h1>

            <ul className="space-y-4 my-8 text-lg text-gray-700">
                <li className="flex items-center gap-3">
                <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Free domain</span>
                <span className="w-5 h-5 flex items-center justify-center border-2 border-gray-400 text-gray-500 text-xs font-bold rounded-full cursor-help" title="Free domain for the first year.">?</span>
                </li>
                <li className="flex items-center gap-3">
                <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Built-in AI tools and bonus credits</span>
                </li>
                <li className="flex items-center gap-3">
                <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>24/7 customer support</span>
                </li>
            </ul>

            <p className="font-semibold text-gray-800 text-lg mb-8">
                Hosting + AI Website Builder + AI tools
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="bg-gray-900 text-white font-bold px-8 py-4 rounded-lg w-full sm:w-auto hover:bg-gray-800 transition-colors">
                Grab deal
                </button>
                <CountdownTimer />
            </div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
                className="relative h-[500px] w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                {/* Main Image */}
                <img 
                    src={heroBackgroundImageUrl}
                    alt="Energetic person in a purple hoodie running"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}
                />
                {/* Phone Frame and Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[90%] h-[90%] bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden p-4">
                        {/* Inner content of phone */}
                        <div className="relative w-full h-full">
                            {/* "Generating image" card */}
                            <motion.div 
                                className="absolute top-4 left-4 bg-white/80 backdrop-blur-md rounded-lg p-2 shadow-lg flex items-center gap-2"
                                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                            >
                                <PhotoIcon className="w-5 h-5 text-purple-600" />
                                <div className="text-xs">
                                    <p className="font-semibold text-gray-800">Generating image...</p>
                                    <div className="w-20 h-1 bg-gray-300 rounded-full mt-1 overflow-hidden">
                                        <div className="w-3/4 h-full bg-purple-500"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Percent Badge */}
                            <motion.div 
                                className="absolute top-4 right-4 w-16 h-16 bg-lime-300 rounded-full flex items-center justify-center shadow-xl"
                                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, type: 'spring' }}
                            >
                                <span className="text-3xl font-bold text-lime-900">%</span>
                            </motion.div>

                            {/* Large Text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                                <span className="text-[140px] font-black text-transparent absolute inset-0 -translate-y-2 flex items-center justify-center" style={{ WebkitTextStroke: '3px rgba(255,255,255,0.7)' }}>
                                    RUN
                                </span>
                                <span className="text-[120px] font-extrabold text-purple-600 relative">73%</span>
                                <div className="flex items-center justify-center -mt-8 relative">
                                    <span className="text-[70px] font-extrabold text-purple-600">SALE</span>
                                    <span className="bg-lime-300 text-lime-900 font-bold px-2 py-0.5 rounded text-sm absolute -right-2 top-1/2 -translate-y-1/2 transform -rotate-6">OFF</span>
                                </div>
                            </div>

                            {/* Bottom Prompt */}
                            <motion.div 
                                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-700">Create a mobile friendly website about running</p>
                                    <button className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-purple-700">
                                        <SparklesIcon className="w-4 h-4" />
                                        Generate
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Cursor */}
                <motion.div 
                    className="absolute bottom-16 right-8 text-gray-900"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                >
                    <CursorArrowRaysIcon className="w-10 h-10 transform -rotate-45" />
                    <SparklesIcon className="w-4 h-4 absolute -bottom-1 -right-1 text-purple-600" />
                </motion.div>
            </motion.div>
        </div>
        </section>
    );
}

// --- Features Section ---
const featuresData = [
  { icon: CpuChipIcon, title: 'AI Website Builder', description: 'Generate a unique website with text and images in minutes. No coding needed.' },
  { icon: GlobeAltIcon, title: 'Free Domain Name', description: 'Get a free domain for the first year and establish your online presence.' },
  { icon: ArrowRightIcon, title: 'Free Website Migration', description: 'We’ll move your existing website to our platform for you, hassle-free.' },
  { icon: UsersIcon, title: '24/7 Customer Support', description: 'Our team of experts is ready to help you around the clock via live chat.' },
  { icon: BriefcaseIcon, title: 'Professional Email', description: 'Create a free professional email address based on your domain name.' },
  { icon: ShieldCheckIcon, title: 'Malware Scanner', description: 'Protect your site with our powerful, integrated malware scanner.' },
];

const FeaturesSection = () => (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">All the Features You Need to Succeed</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">From AI-powered tools to robust security, we've got you covered.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuresData.map((feature, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                            <feature.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// --- Performance & Security Section ---
const PerformanceSecuritySection = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
            >
                <div className="bg-lime-50 p-8 rounded-xl border border-lime-200">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-lime-200 mb-5">
                        <BoltIcon className="w-8 h-8 text-lime-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Blazing-Fast Performance</h2>
                    <p className="text-gray-700 mb-4">Experience superior speed with our LiteSpeed Web Server and NVMe SSD storage, ensuring your website loads quickly for every visitor.</p>
                    <a href="#" className="font-semibold text-lime-700 hover:underline">Learn more about our speed &rarr;</a>
                </div>
            </motion.div>
            <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.7 }}
            >
                <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-200 mb-5">
                        <ShieldCheckIcon className="w-8 h-8 text-purple-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Rock-Solid Security</h2>
                    <p className="text-gray-700 mb-4">Protect your website with our advanced security suite, including Imunify360, free unlimited SSL, and automated weekly backups.</p>
                    <a href="#" className="font-semibold text-purple-700 hover:underline">Explore security features &rarr;</a>
                </div>
            </motion.div>
        </div>
    </section>
);

// --- Pricing Section ---
const pricingPlansData = [
    { name: 'Starter', price: 'R60', features: ['1 Website', '10 GB SSD Storage', 'Shared Hosting', 'Free SSL'], popular: false },
    { name: 'Business', price: 'R400', features: ['Unlimited Websites', '100 GB NVMe Storage', 'VPS Hosting', 'Daily Backups', 'Global CDN'], popular: true },
    { name: 'Scale', price: 'R1500', features: ['Dedicated Infrastructure', 'Cloud Scalability', 'Advanced Security', 'Priority Support', 'Enterprise CDN'], popular: false },
];
const PricingSection = () => (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose Your Perfect Plan</h2>
                <p className="mt-4 text-lg text-gray-600">Simple, transparent pricing. No hidden fees.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {pricingPlansData.map((plan, index) => (
                    <motion.div
                        key={index}
                        className={`relative p-8 rounded-2xl flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.popular ? 'bg-gray-900 text-white ring-4 ring-purple-400' : 'bg-white text-gray-900 border'}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold text-white bg-purple-600 rounded-full">Most Popular</div>}
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="my-6">
                            <span className="text-5xl font-extrabold">{plan.price}</span>
                            <span className={`${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>/mo</span>
                        </div>
                        <ul className="space-y-4 text-left flex-grow mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckIcon className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-purple-400' : 'text-green-500'}`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);


// --- FAQ Section ---
const faqsData = [
  { q: "What is web hosting?", a: "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. A web host, or web hosting service provider, provides the technologies and services needed for the website or webpage to be viewed on the Internet." },
  { q: "How does web hosting work?", a: "When you create a website, you need a place to store its files (like text, images, and code). A web host provides space on a server to store these files and also provides connectivity so that other computers around the world can access the files on your website." },
  { q: "What type of web hosting do I need?", a: "The type of hosting you need depends on your website. For most personal and small business websites, our 'Starter' or 'Business' shared/VPS hosting plans are perfect. If you have a high-traffic site or a custom application, our 'Scale' plan with dedicated resources is a better fit." },
  { q: "Can I transfer my website to NexusByte Hosting?", a: "Yes! We offer a free website migration service. Our experts will handle the entire process of moving your website files, databases, and emails from your old host to our platform, ensuring a smooth transition with minimal downtime." }
];

const FaqItem = ({ faq, index }: { faq: {q: string, a: string}, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div 
            className="border-b"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full py-5 text-left">
                <span className="font-semibold text-lg text-gray-800">{faq.q}</span>
                <span className="text-purple-600">
                    {isOpen ? <ChevronUpIcon className="w-6 h-6"/> : <ChevronDownIcon className="w-6 h-6"/>}
                </span>
            </button>
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <p className="pb-5 text-gray-600">{faq.a}</p>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
    );
}

const FaqSection = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqsData.map((faq, index) => <FaqItem key={index} faq={faq} index={index} />)}
            </div>
        </div>
    </section>
);

// --- Final CTA Section ---
const FinalCtaSection = () => (
    <section className="bg-purple-600">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to launch your website?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-200">
                Join thousands of creators and businesses who trust NexusByte.
            </p>
            <a href="#" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto">
                Grab Deal Now
            </a>
        </div>
    </section>
);


const WebHostingPage: React.FC = () => {
    return (
        <div className="bg-white">
            <WebHostingHero />
            <main>
                <FeaturesSection />
                <PerformanceSecuritySection />
                <PricingSection />
                <GuaranteeSection />
                <FaqSection />
                <FinalCtaSection />
            </main>
        </div>
    );
}

const GuaranteeSection = () => (
    <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-100 rounded-2xl p-8 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
                <ShieldCheckIcon className="w-16 h-16 text-purple-500 flex-shrink-0"/>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">30-Day Money-Back Guarantee</h3>
                    <p className="mt-2 text-gray-600">If you're not satisfied, we'll refund your payment. No hassle, no risk.</p>
                </div>
            </div>
        </div>
    </section>
);

export default WebHostingPage;
