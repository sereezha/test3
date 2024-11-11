import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { TextWeight } from '@/types/styles';

const headingVariants = cva('scroll-m-20 tracking-tight', {
  variants: {
    variant: {
      h1: 'text-4xl lg:text-5xl',
      h2: 'text-3xl first:mt-0',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
    size: {
      default: 'text-2xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    align: {
      start: 'text-start',
      center: 'text-center',
      end: 'text-end',
    },
    truncate: {
      true: 'truncate',
    },
    defaultVariants: {
      variant: 'h1',
      weight: 'bold',
      align: 'center',
      truncate: false,
    },
  },
});

type Props = {
  asChild?: boolean;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: TextWeight;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  truncate?: boolean;
  align?: 'start' | 'center' | 'end';
};

const Heading = (props: Props) => {
  const {
    as = 'h2',
    children,
    asChild,
    className,
    variant = 'h1',
    weight = 'bold',
    align = 'center',
    truncate = false,
  } = props;
  const Tag = asChild ? Slot : as;
  return (
    <Tag
      className={headingVariants({
        variant,
        className,
        weight,
        align,
        truncate,
      })}>
      {children}
    </Tag>
  );
};

export default Heading;
