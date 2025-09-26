// components/SocialIcon.jsx
'use client';

import Link from 'next/link';

const SocialIcon = ({ href, Icon, label, className = '' }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon className={`w-6 h-6 ${className}`} />
    </Link>
  );
};

export default SocialIcon;
