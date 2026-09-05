import Image from 'next/image';
import Section from '@/components/layout/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Icon from '@/components/ui/Icon';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="about" bg="back">
      <div className={styles.row}>
        <Icon name="arrow-right" className={styles.arrow} />

        <div className={styles.media}>
          <div className={styles.backing} aria-hidden="true" />
          <img
            src="/icons/arrowAB.svg"
            alt=""
            className={styles.arrowAB}
            aria-hidden="true"
          />

          <div className={styles.photoWrap}>
            <Image
              src="/img/about.png"
              alt="Alex teaching an online English lesson"
              width={526}
              height={526}
              className={styles.photo}
            />

            <div className={styles.badge}>
              <span className={styles.badgeValue}>5+</span>
              <span className={styles.badgeLabel}>
                years of helping students speak with confidence
              </span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <Eyebrow>About Alex</Eyebrow>

          <h2 className={styles.title}>
            Hi, I&rsquo;m Alex <Icon name="wave" className={styles.wave} />
          </h2>

          <p className={styles.text}>
            I help adults and motivated students turn the English they know into
            English they can actually use.
          </p>

          <p className={styles.text}>
            I&rsquo;ve been teaching online for over five years. My lessons are
            relaxed but purposeful: we talk a lot, explore topics that genuinely
            matter to you, and build the language you need for real-life
            conversations &ndash; not just the next exercise.
          </p>
        </div>
      </div>
    </Section>
  );
}
