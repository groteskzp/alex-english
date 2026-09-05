import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Lessons from '@/components/sections/Lessons';
import styles from './page.module.css';
import About from '@/components/sections/About';
import Aproach from '@/components/sections/Approach';
import Reviews from '@/components/sections/Reviews';
import Pricing from '@/components/sections/Pricing';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
// зараз
// import { lessons } from "@/data/lessons";
// потім
// const lessons = await getLessons();

type Bg = 'back' | 'gradient' | 'blue';

const stubs: { id: string; title: string; bg: Bg }[] = [
  // { id: 'about', title: 'About Alex', bg: 'back' },
  // { id: 'lessons', title: 'Lessons', bg: 'gradient' },
  // { id: 'approach', title: 'My Approach', bg: 'blue' },
  // { id: 'reviews', title: 'Reviews', bg: 'gradient' },
  // { id: 'pricing', title: 'Formats & Pricing', bg: 'back' },
  // { id: 'faq', title: 'FAQ', bg: 'gradient' },
  // { id: 'contact', title: 'Contact', bg: 'back' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Lessons />
      <Aproach />
      <Reviews />
      <Pricing />
      <Faq />
      <Contact />
      

      {stubs.map(s => (
        <Section key={s.id} id={s.id} bg={s.bg}>
          <div className={styles.stub}>
            <Eyebrow>{s.title}</Eyebrow>
            <h2 className={styles.stubTitle}>{s.title}</h2>
          </div>
        </Section>
      ))}
    </>
  );
}
