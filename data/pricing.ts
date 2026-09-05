import type { IconName } from '@/components/ui/Icon';

export type Plan = {
  id: string;
  icon: IconName;
  title: string;
  price: string;
  unit: string;
  features: string[];
  featured: boolean;
  /* порядок на планшеті та десктопі; у мобайлі — порядок у масиві */
  desktopOrder: number;
};

export const plans: Plan[] = [
  {
    id: 'individual',
    icon: 'one-person',
    title: 'Individual lessons',
    price: '₴700',
    unit: '(per lesson)',
    features: [
      '60-minute lessons',
      'Personal learning plan',
      'Full individual attention',
      'Flexible lesson focus',
    ],
    featured: true,
    desktopOrder: 2,
  },
  {
    id: 'two',
    icon: 'two-people',
    title: 'Lessons for Two',
    price: '₴500',
    unit: '(per person)',
    features: [
      '60-minute lessons',
      'Learn with a friend',
      'More speaking interaction',
      'Better value per lesson',
    ],
    featured: false,
    desktopOrder: 1,
  },
  {
    id: 'group',
    icon: 'group',
    title: 'Small groups',
    price: '₴350',
    unit: '(per person)',
    features: [
      '60-minute lessons',
      '3-5 students',
      'Plenty of speaking practice',
      'Supportive group environment',
    ],
    featured: false,
    desktopOrder: 3,
  },
];
