

import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GenericPage from './pages/GenericPage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DomainHostingPage from './pages/DomainHostingPage';
import CartPage from './pages/CartPage'; // Import CartPage
import GPURentalPage from './pages/GPURentalPage'; // Import GPURentalPage
import TestimonialsLandingPage from './pages/TestimonialsLandingPage'; // Import TestimonialsLandingPage
import BrandAnalyticsDashboardPage from './pages/BrandAnalyticsDashboardPage'; // Import BrandAnalyticsDashboardPage
import AIAgentsAutomationPage from './pages/AIAgentsAutomationPage'; 
import CustomGptsPage from './pages/CustomGptsPage'; 
import NovaPlatformPage from './pages/NovaPlatformPage'; 
import NLAndVoiceSolutionsPage from './pages/NLAndVoiceSolutionsPage'; 
import AIPoweredAutomationPage from './pages/AIPoweredAutomationPage'; // Import the new AI Powered Automation Page
import CloudSolutionsPage from './pages/CloudSolutionsPage'; // Ensured relative path
import BusinessFibrePage from './pages/BusinessFibrePage'; // Import the new Business Fibre page
import FtthPage from './pages/FtthPage'; // Import the new FTTH page
import FttbPage from './pages/FttbPage'; // Import the new FTTB page
import LtePage from './pages/LtePage'; // Import the new LTE page
import MobileSimPage from './pages/MobileSimPage'; // Import the new Mobile SIM page
import WebHostingPage from './pages/WebHostingPage'; // Import the new Web Hosting page
import IaaSPage from './pages/IaaSPage'; // Import the new IaaS page
import DomainRegistrationsPage from './pages/DomainRegistrationsPage'; // Import the new Domain Registrations page
import IctSupportPage from './pages/IctSupportPage'; // Import the new ICT Support page
import ManagedItPage from './solutions/ict-support/ManagedItPage';
import InfrastructureManagementPage from './solutions/ict-support/InfrastructureManagementPage';
import BackupRecoveryPage from './solutions/ict-support/BackupRecoveryPage';
import DeviceLifecyclePage from './solutions/ict-support/DeviceLifecyclePage';
import CybersecurityPage from './pages/CybersecurityPage'; // Import the new Cybersecurity page
import ThreatDetectionPage from './pages/ThreatDetectionPage'; // Import the new Threat Detection page
import AuditsPentestingPage from './pages/AuditsPentestingPage'; // Import the new Audits & Pentesting page
import CompliancePage from './pages/CompliancePage'; // Import the new Compliance page
import ZeroTrustPage from './pages/ZeroTrustPage'; // Import the new Zero Trust page
import HybridWorkPage from './pages/HybridWorkPage'; // Import the new Hybrid Work page
import UnifiedCommsPage from './pages/UnifiedCommsPage'; // Import the new Unified Communications page
import SecureRemoteAccessPage from './pages/SecureRemoteAccessPage'; // Import the new Secure Remote Access page
import CloudPcsPage from './pages/CloudPcsPage'; // Import the new Cloud PCs page
import CollaborationToolsPage from './pages/CollaborationToolsPage'; // Import the new Collaboration Tools page
import UseCasesByIndustryPage from './pages/UseCasesByIndustryPage'; // Import the new page
import FinancialServicesPage from './pages/use-cases/by-industry/FinancialServicesPage'; // Import the new Financial Services page
import HealthcarePage from './pages/use-cases/by-industry/HealthcarePage'; // Import the new Healthcare page
import RetailEcommercePage from './pages/use-cases/by-industry/RetailEcommercePage'; // Import the new Retail & E-Commerce page
import PublicSectorPage from './pages/use-cases/by-industry/PublicSectorPage'; // Import the new Public Sector page
import ByBusinessNeedPage from './pages/use-cases/by-business-need/ByBusinessNeedPage'; // Import the new page
import CxPersonalizationPage from './pages/use-cases/by-business-need/CxPersonalizationPage'; // Import the new CX Personalization page
import OperationalEfficiencyPage from './pages/use-cases/by-business-need/OperationalEfficiencyPage'; // Import the new page
import SecureCompliantOpsPage from './pages/use-cases/by-business-need/SecureCompliantOpsPage'; // Import the new page
import RemoteWorkforcePage from './pages/use-cases/by-business-need/RemoteWorkforcePage'; // Import the new page
import BriefsAndBytesPage from './pages/BriefsAndBytesPage'; // Import the new Briefs & Bytes page
import AiAutomationArticlesPage from './pages/briefs-and-bytes/AiAutomationArticlesPage'; // Import the new AI & Automation page
import CloudInfrastructureArticlesPage from './pages/briefs-and-bytes/CloudInfrastructureArticlesPage'; // Import the new Cloud & Infra page
import CybersecurityTrendsPage from './pages/briefs-and-bytes/CybersecurityTrendsPage'; // Import the new Cybersecurity Trends page
import ModernWorkplaceArticlesPage from './pages/briefs-and-bytes/ModernWorkplaceArticlesPage'; // Import the new Modern Workplace Articles page
import KnowledgeResourcesPage from './pages/KnowledgeResourcesPage';
import WhitepapersPage from './pages/WhitepapersPage'; // Import the new Whitepapers page
import WebinarsAndEventsPage from './pages/WebinarsAndEventsPage'; // Import the new Webinars page
import IndustryReportsPage from './pages/IndustryReportsPage'; // Import the new Industry Reports page
import OnDemandWebinarLibraryPage from './pages/OnDemandWebinarLibraryPage'; // Import the new page
import NovaPlatformOverviewPage from './pages/ai/nova/NovaPlatformOverviewPage'; // Import the new Nova Platform Overview page
import NovaFeaturesPage from './pages/ai/nova/NovaFeaturesPage'; // Import the new Nova Features page
import NovaApplicationsPage from './pages/ai/nova/NovaApplicationsPage'; // Import the new Nova Applications page
import NovaDemoPage from './pages/ai/nova/NovaDemoPage'; // Import the new Nova Demo page
import AIServicesConsultingPage from './pages/ai/services-consulting/AIServicesConsultingPage'; // Import the new AI Services & Consulting page
import CustomModelsPage from './pages/ai/services-consulting/CustomModelsPage'; 
import AiIntegrationPage from './pages/ai/services-consulting/AiIntegrationPage';
import AiReadinessAssessmentPage from './pages/ai/consulting/assessment/AiReadinessAssessmentPage';
import AiStrategyRoadmapPage from './pages/ai/consulting/strategy/AiStrategyRoadmapPage';
import AppliedAISolutionsPage from './pages/ai/applied-solutions/AppliedAISolutionsPage';
import AiFinancePage from './pages/ai/solutions/finance/AiFinancePage';
import AiLegalPage from './pages/ai/solutions/legal/AiLegalPage';
import AiHealthcarePage from './pages/ai/solutions/healthcare/AiHealthcarePage';
import HybridCollaborationPage from './pages/hybrid-solutions/collaboration/HybridCollaborationPage';
import { MicrosoftTeamsPage } from './pages/hybrid-solutions/collaboration/teams/MicrosoftTeamsPage';
import { GoogleWorkspacePage } from './pages/hybrid-solutions/collaboration/google-workspace/GoogleWorkspacePage';
import { ZoomIntegrationsPage } from './pages/hybrid-solutions/collaboration/zoom/ZoomIntegrationsPage';
import { UCStrategyPage } from './pages/hybrid-solutions/collaboration/uc-strategy/UCStrategyPage';
import { VdiPage } from './pages/hybrid-solutions/vdi/VdiPage';
import { AzureVirtualDesktopPage } from './pages/hybrid-solutions/vdi/azure-vd/AzureVirtualDesktopPage';
import { Windows365Page } from './pages/hybrid-solutions/vdi/windows-365/Windows365Page';
import { EndpointManagementPage } from './pages/hybrid-solutions/endpoint-management/EndpointManagementPage';
import VdiBenefitsPage from './pages/hybrid-solutions/vdi/benefits/VdiBenefitsPage';
import VdiUseCasesPage from './pages/hybrid-solutions/vdi/use-cases/VdiUseCasesPage';
import MfaPage from './pages/hybrid-solutions/endpoint-management/mfa/MfaPage';
import EdrPage from './pages/hybrid-solutions/endpoint-management/edr/EdrPage';
import MdmPage from './pages/hybrid-solutions/endpoint-management/mdm/MdmPage';
import UemPage from './pages/hybrid-solutions/endpoint-management/uem/UemPage';
import { TicketingSystemPlatformPage } from './pages/ticketing-system/platform/TicketingSystemPlatformPage';
import { TicketManagementPage } from './pages/ticketing-system/features/ticket-management/TicketManagementPage';
import { SlaManagementPage } from './pages/ticketing-system/features/sla-management/SlaManagementPage';
import { AnalyticsReportingPage } from './pages/ticketing-system/features/analytics/AnalyticsReportingPage';
import { WorkflowAutomationPage } from './pages/ticketing-system/features/automation/WorkflowAutomationPage';
import { PlansAccessPage } from './pages/ticketing-system/plans-access/PlansAccessPage';
import { RolesPermissionsPage } from './pages/ticketing-system/admin/roles-permissions/RolesPermissionsPage';
import { PricingPage } from './pages/ticketing-system/pricing/PricingPage';
import { RequestDemoPage } from './pages/ticketing-system/demo/RequestDemoPage';
import { SupportPage } from './pages/ticketing-system/support/SupportPage';
import { ByteDeskSuitePage } from './pages/bytedesk/suite/ByteDeskSuitePage';
import { LiveChatPage } from './pages/bytedesk/suite/live-chat/LiveChatPage';
import { KnowledgeBasePage } from './pages/bytedesk/suite/knowledge-base/KnowledgeBasePage';
import { TicketingPage } from './pages/bytedesk/suite/ticketing/TicketingPage';
import { RoadmapPage } from './pages/bytedesk/roadmap/RoadmapPage';
import { ByteDeskSolutionsPage } from './pages/bytedesk/solutions/ByteDeskSolutionsPage';
import { CrmIntegrationsPage } from './pages/bytedesk/integrations/crm/CrmIntegrationsPage';
import { CommunicationIntegrationsPage } from './pages/bytedesk/integrations/communication/CommunicationIntegrationsPage';
import { ItHelpdeskPage } from './pages/bytedesk/use-cases/it-helpdesk/ItHelpdeskPage';
import { CustomerSupportPage } from './pages/bytedesk/use-cases/customer-support/CustomerSupportPage';


import { useChatControl, FloatingChatButton } from './components/ChatSystem';
import { NAV_ITEMS } from './constants';
import { CartProvider } from './contexts/CartContext';
import { CookieConsentProvider } from './contexts/CookieConsentContext'; 
import CookieConsentBanner from './components/CookieConsentBanner'; 
import CookiePreferencesModal from './components/CookiePreferencesModal'; 
import FloatingCta from './components/FloatingCta';

// Custom hook for scroll restoration
const useScrollRestoration = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Store current scroll position before navigation
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    // Restore scroll position or scroll to top
    const restoreScroll = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      
      if (savedPosition) {
        // Clear the saved position
        sessionStorage.removeItem('scrollPosition');
        
        // For same-page navigation, restore position
        if (window.history.state && window.history.state.usr && window.history.state.usr.fromSamePage) {
          window.scrollTo(0, parseInt(savedPosition));
        } else {
          // For new page navigation, scroll to top
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
        }
      } else {
        // No saved position, scroll to top
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Restore scroll after component mounts
    const timer = setTimeout(restoreScroll, 0);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(timer);
    };
  }, [pathname]);
};

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // Force scroll to top for all navigation
    const scrollToTop = () => {
      // Use multiple methods to ensure it works across different browsers
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use instant for immediate effect
      });
      
      // Fallback for older browsers
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(scrollToTop, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle hash navigation separately
  React.useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return null;
};

const AppContent: React.FC = () => {
  const { openChat, ChatModalComponent, isChatOpen, closeChat } = useChatControl();
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';
  
  // Use the scroll restoration hook
  useScrollRestoration();
  
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        {!isAuthPage && <Header />}
        <main className={`flex-grow ${!isAuthPage ? 'pt-20' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage openChat={openChat} />} />
            
            {NAV_ITEMS.filter(item => !item.megaMenuContent).map(item => ( 
              <Route 
                key={item.id + "-toplevel"} 
                path={item.path} 
                element={<GenericPage title={item.title} />} 
              />
            ))}

            {/* --- Routes from Solutions Mega Menu --- */}
            <Route path="/solutions" element={<GenericPage title="Our Solutions" />} />
            {/* AI Agents */}
            <Route path="/solutions/ai-agents" element={<AIAgentsAutomationPage />} /> 
            <Route path="/solutions/ai-agents/custom-gpts" element={<CustomGptsPage />} />
            <Route path="/solutions/ai-agents/nova-platform" element={<NovaPlatformPage />} />
            <Route path="/solutions/ai-agents/nlp-voice" element={<NLAndVoiceSolutionsPage />} />
            <Route path="/solutions/ai-agents/automation" element={<AIPoweredAutomationPage />} />
            {/* Cloud Services */}
            <Route path="/solutions/cloud" element={<CloudSolutionsPage />} /> 
            <Route path="/solutions/cloud/web-hosting" element={<WebHostingPage />} />
            <Route path="/solutions/cloud/iaas" element={<IaaSPage />} />
            <Route path="/solutions/cloud/gpu-rentals" element={<GPURentalPage />} />
            <Route path="/solutions/cloud/migration" element={<GenericPage title="Migration & Modernization" />} />
            <Route path="/solutions/cloud/domains" element={<DomainRegistrationsPage />} />
            {/* ICT Support */}
            <Route path="/solutions/ict-support" element={<IctSupportPage />} />
            <Route path="/solutions/ict-support/managed-it" element={<ManagedItPage />} />
            <Route path="/solutions/ict-support/infrastructure" element={<InfrastructureManagementPage />} />
            <Route path="/solutions/ict-support/backup-recovery" element={<BackupRecoveryPage />} />
            <Route path="/solutions/ict-support/device-lifecycle" element={<DeviceLifecyclePage />} />
            {/* Cybersecurity */}
            <Route path="/solutions/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/solutions/cybersecurity/threat-detection" element={<ThreatDetectionPage />} />
            <Route path="/solutions/cybersecurity/audits-pentesting" element={<AuditsPentestingPage />} />
            <Route path="/solutions/cybersecurity/compliance" element={<CompliancePage />} />
            <Route path="/solutions/cybersecurity/zero-trust" element={<ZeroTrustPage />} />
            {/* Hybrid Work */}
            <Route path="/solutions/hybrid-work" element={<HybridWorkPage />} />
            <Route path="/solutions/hybrid-work/unified-comms" element={<UnifiedCommsPage />} />
            <Route path="/solutions/hybrid-work/secure-access" element={<SecureRemoteAccessPage />} />
            <Route path="/solutions/hybrid-work/cloud-pcs" element={<CloudPcsPage />} />
            <Route path="/solutions/hybrid-work/collaboration-tools" element={<CollaborationToolsPage />} />
            {/* Connectivity */}
            <Route path="/solutions/connectivity" element={<GenericPage title="Connectivity Solutions" />} />
            <Route path="/solutions/connectivity/business-broadband" element={<BusinessFibrePage />} />
            <Route path="/solutions/connectivity/ftth" element={<FtthPage />} />
            <Route path="/solutions/connectivity/fttb" element={<FttbPage />} />
            <Route path="/solutions/connectivity/lte" element={<LtePage />} />
            <Route path="/solutions/connectivity/mobile-sim" element={<MobileSimPage />} />
            <Route path="/solutions/connectivity/data-sim" element={<GenericPage title="Data SIM Solutions" />} />

            {/* --- Routes from Use Cases Mega Menu --- */}
            <Route path="/use-cases" element={<GenericPage title="Use Cases" />} />
            {/* By Industry */}
            <Route path="/use-cases/by-industry" element={<UseCasesByIndustryPage />} />
            <Route path="/use-cases/by-industry/financial-services" element={<FinancialServicesPage />} />
            <Route path="/use-cases/by-industry/healthcare" element={<HealthcarePage />} />
            <Route path="/use-cases/by-industry/retail-ecommerce" element={<RetailEcommercePage />} />
            <Route path="/use-cases/by-industry/public-sector" element={<PublicSectorPage />} />
            {/* By Business Need */}
            <Route path="/use-cases/by-business-need" element={<ByBusinessNeedPage />} />
            <Route path="/use-cases/by-business-need/cx-personalization" element={<CxPersonalizationPage />} />
            <Route path="/use-cases/by-business-need/operational-efficiency" element={<OperationalEfficiencyPage />} />
            <Route path="/use-cases/by-business-need/secure-compliant-ops" element={<SecureCompliantOpsPage />} />
            <Route path="/use-cases/by-business-need/remote-workforce" element={<RemoteWorkforcePage />} />

            {/* --- Routes from Insights Mega Menu --- */}
            <Route path="/insights" element={<GenericPage title="Insights" />} />
            <Route path="/insights/briefs-and-bytes" element={<BriefsAndBytesPage />} />
            <Route path="/insights/briefs-and-bytes/ai-automation" element={<AiAutomationArticlesPage />} />
            <Route path="/insights/briefs-and-bytes/cloud-infrastructure" element={<CloudInfrastructureArticlesPage />} />
            <Route path="/insights/briefs-and-bytes/cybersecurity-trends" element={<CybersecurityTrendsPage />} />
            <Route path="/insights/briefs-and-bytes/modern-workplace" element={<ModernWorkplaceArticlesPage />} />
            <Route path="/insights/resources" element={<KnowledgeResourcesPage />} />
            <Route path="/insights/whitepapers" element={<WhitepapersPage />} />
            <Route path="/insights/webinars" element={<WebinarsAndEventsPage />} />
            <Route path="/insights/reports" element={<IndustryReportsPage />} />
            <Route path="/insights/webinars/on-demand" element={<OnDemandWebinarLibraryPage />} />

            {/* --- Routes from AI Mega Menu --- */}
            <Route path="/ai" element={<GenericPage title="AI" />} />
            <Route path="/ai/nova" element={<NovaPlatformPage />} />
            <Route path="/ai/nova/overview" element={<NovaPlatformOverviewPage />} />
            <Route path="/ai/nova/features" element={<NovaFeaturesPage />} />
            <Route path="/ai/nova/applications" element={<NovaApplicationsPage />} />
            <Route path="/ai/nova/demo" element={<NovaDemoPage />} />
            <Route path="/ai/services-consulting" element={<AIServicesConsultingPage />} />
            <Route path="/ai/services/custom-models" element={<CustomModelsPage />} />
            <Route path="/ai/services/integration" element={<AiIntegrationPage />} />
            <Route path="/ai/consulting/assessment" element={<AiReadinessAssessmentPage />} />
            <Route path="/ai/consulting/strategy" element={<AiStrategyRoadmapPage />} />
            <Route path="/ai/applied-solutions" element={<AppliedAISolutionsPage />} />
            <Route path="/ai/solutions/finance" element={<AiFinancePage />} />
            <Route path="/ai/solutions/customer-support" element={<GenericPage title="AI for Customer Support" />} />
            <Route path="/ai/solutions/legal" element={<AiLegalPage />} />
            <Route path="/ai/solutions/healthcare" element={<AiHealthcarePage />} />

            {/* --- Routes from Hybrid Solutions Mega Menu --- */}
            <Route path="/hybrid-solutions" element={<GenericPage title="Hybrid Solutions" />} />
            <Route path="/hybrid-solutions/collaboration" element={<HybridCollaborationPage />} />
            <Route path="/hybrid-solutions/collaboration/teams" element={<MicrosoftTeamsPage />} />
            <Route path="/hybrid-solutions/collaboration/google-workspace" element={<GoogleWorkspacePage />} />
            <Route path="/hybrid-solutions/collaboration/zoom" element={<ZoomIntegrationsPage />} />
            <Route path="/hybrid-solutions/collaboration/uc-strategy" element={<UCStrategyPage />} />
            <Route path="/hybrid-solutions/vdi" element={<VdiPage />} />
            <Route path="/hybrid-solutions/vdi/azure-vd" element={<AzureVirtualDesktopPage />} />
            <Route path="/hybrid-solutions/vdi/windows-365" element={<Windows365Page />} />
            <Route path="/hybrid-solutions/vdi/benefits" element={<VdiBenefitsPage />} />
            <Route path="/hybrid-solutions/vdi/use-cases" element={<VdiUseCasesPage />} />
            <Route path="/hybrid-solutions/endpoint-management" element={<EndpointManagementPage />} />
            <Route path="/hybrid-solutions/endpoint-management/mfa" element={<MfaPage />} />
            <Route path="/hybrid-solutions/endpoint-management/edr" element={<EdrPage />} />
            <Route path="/hybrid-solutions/endpoint-management/mdm" element={<MdmPage />} />
            <Route path="/hybrid-solutions/endpoint-management/uem" element={<UemPage />} />
            
            {/* --- Routes from Ticketing System Mega Menu --- */}
            <Route path="/ticketing-system" element={<GenericPage title="Ticketing System" />} />
            <Route path="/ticketing-system/platform" element={<TicketingSystemPlatformPage />} />
            <Route path="/ticketing-system/features/ticket-management" element={<TicketManagementPage />} />
            <Route path="/ticketing-system/features/sla-management" element={<SlaManagementPage />} />
            <Route path="/ticketing-system/features/analytics" element={<AnalyticsReportingPage />} />
            <Route path="/ticketing-system/features/automation" element={<WorkflowAutomationPage />} />
            <Route path="/ticketing-system/plans-access" element={<PlansAccessPage />} />
            <Route path="/ticketing-system/admin/roles-permissions" element={<RolesPermissionsPage />} />
            <Route path="/ticketing-system/pricing" element={<PricingPage />} />
            <Route path="/ticketing-system/demo" element={<RequestDemoPage />} />
            <Route path="/ticketing-system/support" element={<SupportPage />} />

            {/* --- Routes from ByteDesk Mega Menu --- */}
            <Route path="/bytedesk" element={<GenericPage title="ByteDesk" />} />
            <Route path="/bytedesk/suite" element={<ByteDeskSuitePage />} />
            <Route path="/bytedesk/suite/live-chat" element={<LiveChatPage />} />
            <Route path="/bytedesk/suite/knowledge-base" element={<KnowledgeBasePage />} />
            <Route path="/bytedesk/suite/ticketing" element={<TicketingPage />} />
            <Route path="/bytedesk/roadmap" element={<RoadmapPage />} />
            <Route path="/bytedesk/solutions" element={<ByteDeskSolutionsPage />} />
            <Route path="/bytedesk/integrations/crm" element={<CrmIntegrationsPage />} />
            <Route path="/bytedesk/integrations/communication" element={<CommunicationIntegrationsPage />} />
            <Route path="/bytedesk/use-cases/it-helpdesk" element={<ItHelpdeskPage />} />
            <Route path="/bytedesk/use-cases/customer-support" element={<CustomerSupportPage />} />

            {/* Standalone Pages */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/domain-hosting" element={<DomainHostingPage />} />
            <Route path="/testimonials" element={<TestimonialsLandingPage />} />
            <Route path="/dashboard/brand-analytics" element={<BrandAnalyticsDashboardPage />} />
            
            {/* Fallback Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        {!isAuthPage && <Footer />}
        {!isAuthPage && !isChatOpen && <FloatingChatButton onOpen={openChat} />}
        {!isAuthPage && !isChatOpen && <FloatingCta />}
        <ChatModalComponent isOpen={isChatOpen} onClose={closeChat} />
        <CookieConsentBanner />
        <CookiePreferencesModal />
      </div>
    </>
  );
};

const App: React.FC = () => {
    return (
        <CookieConsentProvider>
            <CartProvider>
                <HashRouter>
                    <AppContent />
                </HashRouter>
            </CartProvider>
        </CookieConsentProvider>
    );
};

export default App;
