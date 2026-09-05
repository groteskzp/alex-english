export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: 'level',
    question: 'Do I need to know my English level?',
    answer: 'No — we can work it out together during your first lesson.',
  },
  {
    id: 'online',
    question: 'Are all lessons online?',
    answer:
      'Yes, all lessons take place online so you can join from anywhere that suits you.',
  },
  {
    id: 'frequency',
    question: 'How often should I have lessons?',
    answer:
      'Most students take two lessons a week, but we can adjust the schedule to your goals and availability.',
  },
  {
    id: 'homework',
    question: 'Will I get homework?',
    answer:
      "Only if you want it. Homework is optional and always tailored to what we're working on.",
  },
  {
    id: 'first',
    question: 'What happens during the first lesson?',
    answer:
      'We talk about your goals, check your current level in conversation, and plan how the lessons will work.',
  },
  {
    id: 'format',
    question: 'Can I change my lesson format later?',
    answer:
      'Of course. You can switch between individual, paired and group lessons at any point.',
  },
];
