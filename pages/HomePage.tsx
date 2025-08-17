
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesCarousel from '../components/ServicesCarousel';
import DomainSearch from '../components/DomainSearch';
import AIChatbotSection from '../components/AIChatbotSection';
import CorporatePartnersSection from '../components/PartnersSlider';
import ProductivitySection from '../components/ProductivitySection'; 
import { CaseStudies } from '../components/case-studies';
import TestimonialsSection from '../components/TestimonialsSection';
import AnnouncementBanner from '../components/AnnouncementBanner';
import SharedVideoBackground from '../components/SharedVideoBackground';
import NewsletterContent from '../components/NewsletterContent';
import DomainSearchContent from '../components/DomainSearchContent';

interface HomePageProps {
  openChat: () => void; 
}

const HomePage: React.FC<HomePageProps> = ({ openChat }) => {
  return (
    <>
      <AnnouncementBanner 
        title="NexusByte Tech Summit 2026"
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
      
      {/* Combined Newsletter and Domain Search with shared video background */}
      <SharedVideoBackground
        src="/vid/ds.mp4"
        heightPx={3000}
        newsletterContent={<NewsletterContent />}
        domainSearchContent={<DomainSearchContent />}
      />
      
      <AIChatbotSection onOpenChat={openChat} /> 
      <ProductivitySection />
      <CaseStudies />
      <TestimonialsSection /> 
      <CorporatePartnersSection />
    </>
  );
}

export default HomePage;
