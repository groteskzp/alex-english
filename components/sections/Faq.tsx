'use client';

import { useId, useState } from 'react';
import Section from '@/components/layout/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { faqItems, type FaqItem } from '@/data/faq';
import styles from './Faq.module.css';

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  const baseId = useId();

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        type="button"
        className={styles.question}
        aria-expanded={open}
        aria-controls={`${baseId}-answer`}
        id={`${baseId}-question`}
        onClick={onToggle}
      >
        {item.question}
        <span className={styles.icon} aria-hidden="true" />
      </button>

      <div
        className={styles.answerWrap}
        id={`${baseId}-answer`}
        role="region"
        aria-labelledby={`${baseId}-question`}
      >
        <div className={styles.answerInner}>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <Section id="faq" bg="gradient">
      <div className={styles.header}>
        <Eyebrow>FAQ</Eyebrow>

        <h2 className={styles.title}>Questions? I&rsquo;ve got you.</h2>

        <p className={styles.text}>
          Still unsure about something? Just ask when you book &ndash; I&rsquo;m
          happy to help.
        </p>
      </div>

      <div className={styles.list}>
        {faqItems.map(item => (
          <AccordionItem
            key={item.id}
            item={item}
            open={openId === item.id}
            onToggle={() =>
              setOpenId(current => (current === item.id ? null : item.id))
            }
          />
        ))}
      </div>
    </Section>
  );
}
