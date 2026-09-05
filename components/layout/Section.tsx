import styles from './Section.module.css';

type SectionProps = {
  id?: string;
  bg?: 'back' | 'gradient' | 'blue';
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  bg = 'back',
  className = '',
  children,
}: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[bg]} ${className}`.trim()}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
