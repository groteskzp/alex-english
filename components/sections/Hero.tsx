import Image from 'next/image';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import Icon, { type IconName } from '@/components/ui/Icon';
import styles from './Hero.module.css';

const photos = [
  {
    src: '/img/hero1.png',
    tile: styles.tile1,
    blob: styles.blob1,
    vector: '/icons/vector1.svg',
  },
  {
    src: '/img/hero2.png',
    tile: styles.tile2,
    blob: styles.blob2,
    vector: '/icons/vector2.svg',
  },
  {
    src: '/img/hero3.png',
    tile: styles.tile3,
    blob: styles.blob3,
    vector: '/icons/vector3.svg',
  },
  {
    src: '/img/hero4.png',
    tile: styles.tile4,
    blob: styles.blob4,
    vector: '/icons/vector4.svg',
  },
];

const stats: { icon: IconName; value: string; label: string }[] = [
  { icon: 'cap', value: '5+ years', label: 'teaching experience' },
  { icon: 'user', value: '300+', label: 'students taught' },
  { icon: 'star', value: '4.9/5', label: 'student rating' },
];

export default function Hero() {
  return (
    <Section id="hero" bg="gradient">
      <div className={styles.top}>
        <div>
          <span className={styles.badge}>Online English Tutor</span>

          <h1 className={styles.title}>
            Your goals. Your pace.
            <br />
            English you&rsquo;ll
            <br className={styles.brMobile} />{' '}
            <span className={styles.accent}>actually speak</span>.
          </h1>

          <p className={styles.text}>
            A personalised approach, proven teaching methods,
            <br className={styles.brDesktop} /> and plenty of speaking practice
            from your very first lesson.
          </p>

          <Button href="#contact" className={styles.cta}>
            Try a lesson
          </Button>
        </div>

        <div className={styles.photos}>
          {photos.map((p, i) => (
            <div key={p.src} className={styles.cell}>
              <img src={p.vector} alt="" className={`${styles.blob} ${p.blob}`} />
              <div className={`${styles.tile} ${p.tile}`}>
                <Image
                  src={p.src}
                  alt=""
                  width={149}
                  height={187}
                  priority={i < 2}
                  className={styles.photo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statsRow}>
          {stats.map(s => (
            <div key={s.value} className={styles.stat}>
              <Icon name={s.icon} className={styles.statIcon} />
              <div className={styles.statText}>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
