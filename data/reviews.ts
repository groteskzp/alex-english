export type Review = {
  id: string;
  /* orange — оранжева іконка + синій заголовок; sky — навпаки */
  accent: 'orange' | 'sky';
  quote: string;
  text: string;
  name: string;
  course: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    id: 'anna',
    accent: 'orange',
    quote: 'I stopped translating everything in my head.',
    text: 'Alex helped me speak more naturally and stop overthinking every sentence. The lessons always feel relevant to what I actually need English for.',
    name: 'Anna',
    course: 'General English',
    avatar: '/img/avatar-anna.png',
  },
  {
    id: 'daniel',
    accent: 'sky',
    quote: 'English finally feels useful, not academic.',
    text: "We work with situations I actually face at work, and I've become much more confident in meetings and calls.",
    name: 'Daniel',
    course: 'Business English',
    avatar: '/img/avatar-daniel.png',
  },
  {
    id: 'sofia',
    accent: 'orange',
    quote: "I'm speaking much more than I expected.",
    text: "The lessons are relaxed, but there's always a clear focus. I can genuinely see how much easier it has become to express myself.",
    name: 'Sofia',
    course: 'Speaking Practice',
    avatar: '/img/avatar-sofia.png',
  },
];
