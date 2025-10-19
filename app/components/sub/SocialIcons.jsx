'use client';

import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
} from '@remixicon/react';

const socialLinks = [
  {
    href: 'https://instagram.com',
    icon: RiInstagramLine,
    hoverColor: 'inline-block hover:text-pink-500',
  },
  {
    href: 'https://linkedin.com',
    icon: RiLinkedinLine,
    hoverColor: 'inline-block hover:text-blue-600',
  },
  {
    href: 'https://facebook.com',
    icon: RiFacebookLine,
    hoverColor: 'inline-block hover:text-blue-500',
  },
  {
    href: 'https://github.com',
    icon: RiGithubLine,
    hoverColor: 'inline-block hover:text-black',
  },
];

const SocialIcons = ({ size = 22, gap = 10, className = '' }) => {
  return (
    <ul
      className={`flex items-center ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {socialLinks.map(({ href, icon: Icon, hoverColor }) => (
        <li key={href} className="flex items-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={href.split('//')[1].split('.')[0]} // e.g. "instagram"
            className={`text-rose-50 dark:text-gray-300 transition ${hoverColor}`}
          >
            <Icon size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;

// Default (22px icons, 10px gap)
// <SocialIcons />

// Smaller icons with tighter spacing
// <SocialIcons size={18} gap={6} />

// Larger icons and aligned to the left
// <SocialIcons size={28} gap={12} className="justify-start mt-6" />
