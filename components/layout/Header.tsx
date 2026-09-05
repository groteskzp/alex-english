'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import styles from './Header.module.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Lessons', href: '#lessons' },
  { label: 'Approach', href: '#approach' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          Alex English
        </a>

        <nav className={styles.nav}>
          {navItems.map(item => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="#contact" className={styles.cta}>
            Try a lesson
          </Button>

          <button
            type="button"
            className={styles.burger}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </div>
    </header>
  );
}
