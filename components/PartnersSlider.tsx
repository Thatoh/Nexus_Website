'use client';

import React from 'react';

type Brand = {
  name: string;
  src: string;        // path to svg/png in /public
  alt?: string;
};

const BRANDS: Brand[] = [
  { name: 'Microsoft',  src: '/brands/microsoft.png' },
  { name: 'AWS',        src: '/brands/aws.png' },
  { name: 'cPanel',     src: '/brands/cpanel.png' },
  { name: 'Cloudflare', src: '/brands/cloudflare.png' },

  // add more rows as needed
  { name: 'Google',     src: '/brands/google.png' },
  { name: 'Azure',      src: '/brands/azure.png' },
  { name: 'GitHub',     src: '/brands/github.png' },
  { name: 'Slack',      src: '/brands/slack.png' },
];

function LogoChip({ brand }: { brand: Brand }) {
  return (
    <div
      className={[
        'rounded-2xl',
        'bg-white/5',
        'ring-1 ring-white/10',
        'shadow-[0_1px_0_rgba(255,255,255,0.06)]',
        'hover:ring-white/20 hover:bg-white/7',
        'transition-all duration-200 ease-[cubic-bezier(.2,.8,.2,1)]',
        'h-20 md:h-24 px-5',
        'flex items-center justify-center',
      ].join(' ')}
    >
      {/* If you use light logos, keep them as-is.
         If you only have dark logos, uncomment the `invert` utility below to make them visible on dark. */}
      <img
        src={brand.src}
        alt={brand.alt ?? `${brand.name} logo`}
        className="max-h-8 md:max-h-10 w-auto object-contain"
      />
    </div>
  );
}

const PartnersSlider: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Integrations</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {BRANDS.map((b) => (
            <LogoChip key={b.name} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
