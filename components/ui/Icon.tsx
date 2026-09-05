import styles from './Icon.module.css';

export type IconName =
  | 'cap'
  | 'user'
  | 'star'
  | 'personalised'
  | 'practical'
  | 'speaking'
  | 'two-people'
  | 'one-person'
  | 'group'
  | 'quote'
  | 'arrow-up-right'
  | 'arrow-right'
  | 'digit-bg'
  | 'wave';

const VIEWBOX: Record<IconName, string> = {
  cap: '0 0 70 70',
  user: '0 0 70 70',
  star: '0 0 70 70',
  personalised: '0 0 80 80',
  practical: '0 0 80 80',
  speaking: '0 0 80 80',
  'two-people': '0 0 80 80',
  'one-person': '0 0 96 96',
  group: '0 0 80 80',
  quote: '0 0 24 24',
  'arrow-up-right': '0 0 24 24',
  'arrow-right': '0 0 101 15',
  'digit-bg': '0 0 40 40',
  wave: '0 0 58 58',
};

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className = '' }: IconProps) {
  const viewBox = VIEWBOX[name];
  const [, , w, h] = viewBox.split(' ');

  return (
    <svg
      viewBox={viewBox}
      className={`${styles.icon} ${className}`.trim()}
      style={{ aspectRatio: `${w} / ${h}` }}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
