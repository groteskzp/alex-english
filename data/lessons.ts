export type Lesson = {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  tagColor: 'orange' | 'sky';
  /* колір фігурної підкладки під номером */
  numberColor: 'orange' | 'sky';
};

export const lessons: Lesson[] = [
  {
    id: 'general',
    number: '01',
    title: 'General English',
    description:
      'Build stronger English for real-life situations with balanced speaking, vocabulary and grammar practice.',
    tag: 'Everyday',
    tagColor: 'orange',
    numberColor: 'sky',
  },
  {
    id: 'speaking',
    number: '02',
    title: 'Speaking Practice',
    description:
      'Improve fluency, confidence and natural expression through focused conversation.',
    tag: 'Speaking',
    tagColor: 'sky',
    numberColor: 'orange',
  },
  {
    id: 'business',
    number: '03',
    title: 'Business English',
    description:
      'Use English more effectively in meetings, presentations and everyday professional communication.',
    tag: 'Work',
    tagColor: 'sky',
    numberColor: 'orange',
  },
  {
    id: 'exam',
    number: '04',
    title: 'Exam Preparation',
    description:
      'Prepare with a clear strategy, targeted practice and regular feedback.',
    tag: 'Exam',
    tagColor: 'orange',
    numberColor: 'sky',
  },
];
