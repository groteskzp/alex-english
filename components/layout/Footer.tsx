import Icon from '@/components/ui/Icon';
import { footerColumns } from '@/data/footer';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>
              Alex English
            </a>
            <p className={styles.tagline}>English built around you.</p>
          </div>

          <div className={styles.columns}>
            {footerColumns.map((column, i) => (
              <nav key={i} className={styles.column}>
                {column.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.link}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {link.label}
                    {link.external && (
                      <Icon name="arrow-up-right" className={styles.arrow} />
                    )}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2026 Alex English</p>
        </div>
      </div>
    </footer>
  );
}
