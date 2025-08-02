
import React from 'react';
import { Link } from 'react-router';
import { FOOTER_LINKS, COMPANY_MISSION } from '../constants';
import { XIcon, LinkedInIcon, FacebookIcon, GmailIcon, InstagramIcon, MicrosoftIcon, GithubIcon, DiscordIcon, CogIcon } from './icons'; // Added CogIcon
import { useCookieConsent } from '../contexts/CookieConsentContext'; // Import useCookieConsent

const paymentMethods = [
  { name: 'VISA', bgColor: 'bg-blue-600', textColor: 'text-white' },
  { name: 'MC', bgColor: 'bg-red-500', textColor: 'text-white' },
  { name: 'AMEX', bgColor: 'bg-blue-500', textColor: 'text-white' },
  { name: 'Discover', bgColor: 'bg-orange-500', textColor: 'text-white' },
  { name: 'Diners', bgColor: 'bg-sky-600', textColor: 'text-white' },
  { name: 'JCB', bgColor: 'bg-green-600', textColor: 'text-white' },
  { name: 'UnionPay', bgColor: 'bg-red-700', textColor: 'text-white' },
  { name: 'Bitcoin', bgColor: 'bg-yellow-500', textColor: 'text-black' },
  { name: 'PayPal', bgColor: 'bg-blue-700', textColor: 'text-white' },
  { name: 'G Pay', bgColor: 'bg-gray-200', textColor: 'text-black' }, // Google Pay often uses multicolor, simplified here
  { name: 'Apple Pay', bgColor: 'bg-black', textColor: 'text-white' },
  { name: 'Alipay', bgColor: 'bg-blue-400', textColor: 'text-white' },
];


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
            <h5 className="text-xl font-semibold text-white mb-4">NexusByte</h5>
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
        <div className="my-12">
          <h5 className="text-xl font-semibold text-white mb-6 text-center md:text-left">Payment Options</h5>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
            {paymentMethods.slice(0, 7).map(method => (
              <div key={method.name} title={method.name} className={`flex items-center justify-center h-10 w-16 rounded-md shadow-md text-xs font-bold ${method.bgColor} ${method.textColor}`}>
                {method.name === 'MC' ? 'MCard' : method.name}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {paymentMethods.slice(7).map(method => (
              <div key={method.name} title={method.name} className={`flex items-center justify-center h-10 w-16 rounded-md shadow-md text-xs font-bold ${method.bgColor} ${method.textColor}`}>
                {method.name}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6 text-center md:text-left">We protect and save your data.</p>
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