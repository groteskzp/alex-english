export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const footerColumns: FooterLink[][] = [
  [
    { label: 'About', href: '#about' },
    { label: 'Lessons', href: '#lessons' },
    { label: 'Approach', href: '#approach' },
  ],
  [
    { label: 'Formats & Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ],
  [
    { label: 'Instagram', href: 'https://instagram.com', external: true },
    { label: 'Telegram', href: 'https://telegram.org', external: true },
    { label: 'Email', href: 'mailto:hello@alexenglish.com', external: true },
  ],
];
