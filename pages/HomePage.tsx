
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesCarousel from '../components/ServicesCarousel';
import AIChatbotSection from '../components/AIChatbotSection';
import CorporatePartnersSection from '../components/PartnersSlider';
import TestimonialsSection from '../components/TestimonialsSection';
import AnnouncementBanner from '../components/AnnouncementBanner';
import SharedVideoBackground from '../components/SharedVideoBackground';
import NewsletterContent from '../components/NewsletterContent';
import DomainSearchContent from '../components/DomainSearchContent';
import SharedImageBackground from '../components/SharedImageBackground';
import ProductivityContent from '../components/ProductivityContent';
import CaseStudiesContent from '../components/CaseStudiesContent';

interface HomePageProps {
  openChat: () => void; 
}

const HomePage: React.FC<HomePageProps> = ({ openChat }) => {
  return (
    <>
      <AnnouncementBanner 
        title=""
        message="NexusByte Tech Summit 2026. Join us for the biggest tech event of the year. Discover the latest in AI, Cloud, and Cybersecurity."
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
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              style={{ backgroundColor: '#a8b545' }}
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
      
      {/* Image background page with Newsletter and Domain Search */}
      <SharedImageBackground
        src="/images/resources/ab-3.jpg"
        firstContent={<NewsletterContent />}
        secondContent={<DomainSearchContent />}
      />
      
      <AIChatbotSection onOpenChat={openChat} /> 
      
      {/* Image background page with Productivity and Case Studies */}
      <SharedImageBackground
        src="/images/resources/ab-1.jpg"
        firstContent={<ProductivityContent />}
        secondContent={<CaseStudiesContent />}
      />
      
      <TestimonialsSection /> 
      <CorporatePartnersSection />
    </>
  );
}

export default HomePage;
