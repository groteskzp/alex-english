import Section from '@/components/layout/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { plans } from '@/data/pricing';
import styles from './Pricing.module.css';

const blobs = [
  { src: '/icons/vectorp1.svg', className: styles.blob1 },
  { src: '/icons/vectorp2.svg', className: styles.blob2 },
  { src: '/icons/vectorp3.svg', className: styles.blob3 },
  { src: '/icons/vectorp4.svg', className: styles.blob4 },
];

export default function Pricing() {
  return (
    <Section id="pricing" bg="back" className={styles.section}>
      <div className={styles.blobs} aria-hidden="true">
        {blobs.map(blob => (
          <img
            key={blob.src}
            src={blob.src}
            alt=""
            className={`${styles.blob} ${blob.className}`}
          />
        ))}
      </div>

      <div className={styles.content}>
        <Eyebrow>Formats &amp; Pricing</Eyebrow>

        <h2 className={styles.title}>Choose the format that works for you</h2>

        <p className={styles.text}>
          Flexible options for different goals, schedules and budgets.
        </p>

        <div className={styles.grid}>
          {plans.map(plan => (
            <article
              key={plan.id}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
              style={{ '--order': plan.desktopOrder } as React.CSSProperties}
            >
              <h3 className={styles.cardTitle}>{plan.title}</h3>

              <Icon
                name={plan.icon}
                className={`${styles.icon} ${
                  plan.featured ? styles.iconFeatured : ''
                }`}
              />

              <div className={styles.priceBox}>
                <p className={styles.price}>{plan.price}</p>
                <p className={styles.unit}>{plan.unit}</p>
              </div>

              <ul className={styles.features}>
                {plan.features.map(feature => (
                  <li key={feature} className={styles.feature}>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button href="#contact" className={styles.cta}>
                Try a lesson
              </Button>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
