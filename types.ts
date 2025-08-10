import React, { ReactElement, SVGProps } from 'react';

// Original NavLinkMegaMenuContent (kept for reference or other nav items if not all are migrated)
// export interface NavLinkMegaMenuContent {
//   mainLinks: Array<{ title: string; href: string; description?: string }>;
//   featured?: {
//     title: string;
//     description: string;
//     imageUrl: string;
//     linkUrl: string;
//     linkText: string;
//   };
// }

// New types for the redesigned Mega Menu
export interface MegaMenuSubLink {
  title: string;
  imageUrl: string;
  href: string;
  description?: string; // Added optional description
}

export interface MegaMenuItemFeatured {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string; // Optional URL for the "See More" link
  linkText?: string; // Optional text for the "See More" link
}

export interface MegaMenuItem {
  id: string; // e.g., 'cloud-solutions', 'cybersecurity'
  title: string; // Text for the left-rail link, e.g., "Cloud Solutions"
  featured: MegaMenuItemFeatured;
  subLinks: MegaMenuSubLink[];
}

export interface NewNavLinkMegaMenuContent {
  items: MegaMenuItem[];
}

export interface NavItem {
  id: string;
  title: string;
  path: string;
  // Use NewNavLinkMegaMenuContent for items that have the new mega menu design
  // Use original NavLinkMegaMenuContent for others, or update all if all mega menus change
  megaMenuContent?: NewNavLinkMegaMenuContent; // This will be used by specified nav items
}

export interface HeroSlideItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  groundingChunks?: GroundingChunk[];
  isLoading?: boolean; // Added for bot responses
}

export interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web?: GroundingChunkWeb;
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
}

export interface Candidate {
  groundingMetadata?: GroundingMetadata;
}

export interface GenerateContentResponseWithGrounding {
  text: string;
  candidates?: Candidate[];
}

export interface SuggestedDomain {
  name: string;
  tld: string; // e.g. ".com", ".io"
}

// Type for Microsoft Productivity Section
export type ProductTileColor = 'red' | 'green' | 'blue' | 'yellow'; // Microsoft brand colors

export interface ProductTile {
  id: 'm365' | 'teams' | 'azure' | 'copilot';
  title: string;
  tagline: string;
  longDescription: string;
  color: ProductTileColor;
  heroCopy: { header: string; bullets: string[] }[];
  planDetails: { header: string; bullets: string[] }[];
  pricePerUser: number;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Optional: for an icon on the cube
}

// Interface for items in the cart
export interface CartItem extends ProductTile {
  quantity: number;
}

// Interface for Client Review Section
export interface ReviewItem {
  id: number;
  imageUrl: string;
  metric: string;
  positionClasses: string; // Tailwind classes for positioning (e.g., 'top-10 left-20')
  sizeClasses: string;     // Tailwind classes for size (e.g., 'w-32 h-32')
  zIndex?: number;          // Optional z-index
}

// Cookie Consent Types
export type CookieCategoryId = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export interface CookieCategory {
  id: CookieCategoryId;
  name: string;
  description: string;
  required?: boolean; // If true, cannot be disabled by the user
}

export interface CookieConsentPreferences {
  [key: string]: boolean; // Category ID maps to enabled status
}

export interface CookieConsent {
  hasMadeChoice: boolean;
  preferences: CookieConsentPreferences;
  timestamp?: number;
}