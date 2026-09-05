'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import styles from './Contact.module.css';

const formats = ['Individual', 'Lessons for Two', 'Small groups'];

export default function Contact() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [format, setFormat] = useState(formats[0]);
  const [goal, setGoal] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    // TODO: підключити відправку (API route / WP)
    await new Promise(r => setTimeout(r, 600));

    setStatus('sent');
  }

  return (
    <Section id="contact" bg="back">
      <div className={styles.card}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Let&rsquo;s get you speaking.</h2>
          <p className={styles.text}>
            Tell me a little about your goals, and we&rsquo;ll find the right
            format for you.
          </p>
        </div>

        <div className={styles.media}>
          <Image
            src="/img/contact.png"
            alt="Alex waving hello"
            width={510}
            height={510}
            className={styles.photo}
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Trial lesson request</h3>

          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="name"
              name="name"
              className={styles.input}
              placeholder="Alex"
              value={name}
              autoComplete="name"
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact" className={styles.label}>
              Email or Phone
            </label>
            <input
              id="contact"
              name="contact"
              className={styles.input}
              placeholder="How can Alex reach you?"
              value={contact}
              autoComplete="email"
              onChange={e => setContact(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="format" className={styles.label}>
              Preferred format
            </label>
            <select
              id="format"
              name="format"
              className={styles.select}
              value={format}
              onChange={e => setFormat(e.target.value)}
            >
              {formats.map(f => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="goal" className={styles.label}>
              Your main goal
            </label>
            <textarea
              id="goal"
              name="goal"
              className={styles.textarea}
              placeholder="What would you like to do more confidently in English?"
              value={goal}
              onChange={e => setGoal(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className={styles.submit}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Try a lesson'}
          </Button>

          {status === 'sent' && (
            <p className={styles.status}>
              Thanks! Alex will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
