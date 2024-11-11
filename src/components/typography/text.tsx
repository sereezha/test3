import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { TextWeight } from '@/types/styles';

const textVariants = cva('leading-7', {
  variants: {
    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
    truncate: {
      true: 'truncate',
    },
    showMargin: {
      true: '[&:not(:first-child)]:mt-6',
    },
    defaultVariants: {
      weight: 'normal',
      showMargin: false,
      truncate: false,
    },
  },
});

type Props = {
  children: React.ReactNode;
  className?: string;
  truncate?: boolean;
  showMargin?: boolean;
  weight?: TextWeight;
};

export function Text({
  children,
  className,
  truncate,
  showMargin,
  weight,
}: Props) {
  return (
    <p
      className={cn(textVariants({ truncate, weight, className, showMargin }))}>
      {children}
    </p>
  );
}
