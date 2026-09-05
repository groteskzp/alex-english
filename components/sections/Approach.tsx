import Section from '@/components/layout/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Icon from '@/components/ui/Icon';
import { approachItems } from '@/data/approach';
import styles from './Approach.module.css';

export default function Approach() {
  return (
    <Section id="approach" bg="blue">
      <Eyebrow>My Approach</Eyebrow>

      <h2 className={styles.title}>
        Lessons built around you &ndash; not the textbook.
      </h2>

      <p className={styles.text}>
        No two students learn in exactly the same way. That&rsquo;s why your
        lessons adapt to your goals, interests and progress &ndash; while
        keeping speaking at the heart of everything we do.
      </p>

      <div className={styles.grid}>
        {approachItems.map(item => (
          <article key={item.id} className={styles.card}>
            <Icon
              name={item.icon}
              className={`${styles.icon} ${
                item.iconColor === 'orange' ? styles.iconOrange : styles.iconSky
              }`}
            />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerLabel}>What this means in practice</p>
        <p className={styles.footerText}>
          Expect guided conversation, useful feedback, and <br></br>plenty of small wins
          you can feel from lesson to lesson.
        </p>
      </div>
    </Section>
  );
}
