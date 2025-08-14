
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesCarousel from '../components/ServicesCarousel';
import DomainSearch from '../components/DomainSearch';
import AIChatbotSection from '../components/AIChatbotSection';
import CorporatePartnersSection from '../components/PartnersSlider'; // Updated import
import ProductivitySection from '../components/ProductivitySection'; 
import { CaseStudies } from '../components/case-studies';
import TestimonialsSection from '../components/TestimonialsSection';
import AnnouncementBanner from '../components/AnnouncementBanner'; 

interface HomePageProps {
  openChat: () => void; 
}

const HomePage: React.FC<HomePageProps> = ({ openChat }) => {
  return (
    <>
      <AnnouncementBanner 
        title="NexusByte Tech Summit 2024"
        message="Join us for the biggest tech event of the year. Discover the latest in AI, Cloud, and Cybersecurity."
        ctaText="Get Tickets"
        ctaLink="/events/tech-summit"
        onDismiss={() => console.log('Announcement banner dismissed')}
      />
      <HeroSlider />
      
      {/* Call to Action Section */}
      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/cta-1.png)' }}>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Ready to dive in?
            <br />
            Start your free trial today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <a
              href="#"
              className="rounded-md bg-nexusbyte-accent-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-nexusbyte-accent-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              {' '}
              Get started{' '}
            </a>
            <a href="#" className="text-sm/6 font-semibold text-black">
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      
      <ServicesCarousel />
      
      {/* Newsletter Signup Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl xl:flex-auto">
              Want our product updates? Sign up for our newsletter.
            </h2>
            <form className="w-full max-w-md">
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:outline-white/20"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white/90 dark:shadow-none dark:hover:bg-white"
                >
                  Notify me
                </button>
              </div>
              <p className="mt-4 text-sm/6 text-gray-300">
                We care about your data. Read our{' '}
                <a
                  href="#"
                  className="font-semibold whitespace-nowrap text-white hover:text-gray-100 dark:hover:text-gray-200"
                >
                  privacy policy
                </a>
                .
              </p>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      
      <DomainSearch />
      <AIChatbotSection onOpenChat={openChat} /> 
      <ProductivitySection />
      <CaseStudies />
      <TestimonialsSection /> 
      <CorporatePartnersSection /> {/* Updated component instance */}
    </>
  );
}

export default HomePage;
