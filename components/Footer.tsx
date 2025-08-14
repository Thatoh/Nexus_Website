
import React from 'react';
import { Link } from 'react-router';
import { FOOTER_LINKS, COMPANY_MISSION } from '../constants';
import { XIcon, LinkedInIcon, FacebookIcon, GmailIcon, InstagramIcon, MicrosoftIcon, GithubIcon, DiscordIcon, CogIcon } from './icons';
import { useCookieConsent } from '../contexts/CookieConsentContext';
// Add react-icons/si imports for payment methods
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiDiscover,
  SiDinersclub,
  SiJcb,
  SiBitcoin,
  SiPaypal,
  SiGooglepay,
  SiApplepay,
  SiAlipay
} from 'react-icons/si';
import { FaCreditCard } from 'react-icons/fa'; // For UnionPay fallback




const Footer: React.FC = () => {
  const { openPreferencesModal } = useCookieConsent();

  const handleOpenCookieSettings = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openPreferencesModal();
  };

  return (
    <footer className="bg-nexusbyte-primary-dark text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Mission */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src="/logo/logo-footer.png" alt="NexusByte" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">{COMPANY_MISSION}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-sm hover:text-nexusbyte-accent-green transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Support</h5>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-sm hover:text-nexusbyte-accent-green transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-sm hover:text-nexusbyte-accent-green transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
               <li>
                  <a 
                    href="#" 
                    onClick={handleOpenCookieSettings} 
                    className="text-sm hover:text-nexusbyte-accent-green transition-colors flex items-center"
                  >
                    <CogIcon className="w-4 h-4 mr-1.5" /> Cookie Settings
                  </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Options Section */}
        <div className="py-6">
          <h5 className="text-lg font-semibold text-white mb-4">Payment Options</h5>
          <div className="flex flex-wrap items-center gap-4">
            <SiVisa title="Visa" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiMastercard title="MasterCard" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiAmericanexpress title="American Express" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiDiscover title="Discover" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiDinersclub title="Diners Club" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiJcb title="JCB" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <FaCreditCard title="UnionPay" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiBitcoin title="Bitcoin" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiPaypal title="PayPal" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiGooglepay title="Google Pay" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiApplepay title="Apple Pay" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
            <SiAlipay title="Alipay" className="w-8 h-8 text-gray-300 hover:opacity-80 transition-opacity cursor-pointer" />
          </div>
          <p className="mt-4 text-sm text-gray-400">We protect and save your data.</p>
        </div>


        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NexusByte. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nexusbyte-accent-green transition-colors" aria-label="Visit our X profile">
              <XIcon className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nexusbyte-accent-green transition-colors" aria-label="Visit our LinkedIn profile">
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nexusbyte-accent-green transition-colors" aria-label="Visit our Facebook page">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nexusbyte-accent-green transition-colors" aria-label="Visit Gmail">
              <GmailIcon className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nexusbyte-accent-green transition-colors" aria-label="Visit our Instagram profile">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nexusbyte-accent-green transition-colors" aria-label="Visit Microsoft">
              <MicrosoftIcon className="h-6 w-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nexusbyte-accent-green transition-colors" aria-label="Visit our Github profile">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nexusbyte-accent-green transition-colors" aria-label="Visit Discord">
              <DiscordIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
