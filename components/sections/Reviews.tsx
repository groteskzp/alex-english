import Image from 'next/image';
import Section from '@/components/layout/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Icon from '@/components/ui/Icon';
import { reviews } from '@/data/reviews';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <Section id="reviews" bg="gradient" className={styles.section}>
      <img
        src="/img/english.svg"
        alt=""
        className={styles.scribble}
        aria-hidden="true"
      />

      <div className={styles.header}>
        <Eyebrow>Reviews</Eyebrow>

        <h2 className={styles.title}>What my students say</h2>

        <p className={styles.text}>
          Real progress looks different for everyone &ndash; but confidence is
          usually where it starts.
        </p>
      </div>

      <div className={styles.slider}>
        {reviews.map(review => (
          <article key={review.id} className={styles.card}>
            <Icon
              name="quote"
              className={`${styles.mark} ${
                review.accent === 'orange' ? styles.markSky : styles.markOrange
              }`}
            />

            <p
              className={`${styles.quote} ${
                review.accent === 'orange'
                  ? styles.quoteOrange
                  : styles.quoteSky
              }`}
            >
              &ldquo;{review.quote}&rdquo;
            </p>

            <p className={styles.cardText}>{review.text}</p>

            <div className={styles.author}>
              <Image
                src={review.avatar}
                alt=""
                width={36}
                height={36}
                className={styles.avatar}
              />
              <div>
                <p className={styles.name}>{review.name}</p>
                <p className={styles.course}>{review.course}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
