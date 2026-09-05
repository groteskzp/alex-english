import type { IconName } from '@/components/ui/Icon';

export type ApproachItem = {
  id: string;
  icon: IconName;
  iconColor: 'sky' | 'orange';
  title: string;
  description: string;
};

export const approachItems: ApproachItem[] = [
  {
    id: 'personalised',
    icon: 'personalised',
    iconColor: 'sky',
    title: 'Personalised',
    description:
      'Your goals, level and interests shape what we work on and how quickly we move.',
  },
  {
    id: 'practical',
    icon: 'practical',
    iconColor: 'orange',
    title: 'Practical',
    description:
      "Learn vocabulary and grammar through situations you're actually likely to use English in.",
  },
  {
    id: 'speaking',
    icon: 'speaking',
    iconColor: 'sky',
    title: 'Speaking-focused',
    description:
      "You'll use English throughout the lesson, building confidence and fluency through regular practice.",
  },
];
