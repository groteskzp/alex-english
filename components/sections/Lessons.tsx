import Section from '@/components/layout/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Icon from '@/components/ui/Icon';
import { lessons } from '@/data/lessons';
import styles from './Lessons.module.css';

export default function Lessons() {
  return (
    <Section id="lessons" bg="gradient" className={styles.section}>
      <img
        src="/img/english.svg"
        alt=""
        className={styles.scribble}
        aria-hidden="true"
      />

      <div className={styles.header}>
        <Eyebrow>Lessons</Eyebrow>

        <h2 className={styles.title}>Find the right focus for you</h2>

        <p className={styles.text}>
          Your lessons should reflect what you actually need English for. Choose
          a starting point below &ndash; we&rsquo;ll adapt the content, pace and
          materials to your level and goals.
        </p>
      </div>

      <div className={styles.grid}>
        {lessons.map(lesson => (
          <article key={lesson.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.number}>
                <Icon
                  name="digit-bg"
                  className={`${styles.numberBg} ${
                    lesson.numberColor === 'orange'
                      ? styles.bgOrange
                      : styles.bgSky
                  }`}
                />
                <span className={styles.numberText}>{lesson.number}</span>
              </span>

              <span
                className={`${styles.tag} ${
                  lesson.tagColor === 'orange'
                    ? styles.tagOrange
                    : styles.tagSky
                }`}
              >
                {lesson.tag}
              </span>
            </div>

            <h3 className={styles.cardTitle}>{lesson.title}</h3>
            <p className={styles.cardText}>{lesson.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
