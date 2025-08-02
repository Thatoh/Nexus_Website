
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesCarousel from '../components/ServicesCarousel';
import DomainSearch from '../components/DomainSearch';
import AIChatbotSection from '../components/AIChatbotSection';
import CorporatePartnersSection from '../components/PartnersSlider'; // Updated import
import ProductivitySection from '../components/ProductivitySection'; 
import ClientReviewSection from '../components/ClientReviewSection'; 

interface HomePageProps {
  openChat: () => void; 
}

const HomePage: React.FC<HomePageProps> = ({ openChat }) => {
  return (
    <>
      <HeroSlider />
      <ServicesCarousel />
      <DomainSearch />
      <AIChatbotSection onOpenChat={openChat} /> 
      <ProductivitySection />
      <ClientReviewSection /> 
      <CorporatePartnersSection /> {/* Updated component instance */}
    </>
  );
}

export default HomePage;
