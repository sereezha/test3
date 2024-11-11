import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const kbdVariants = cva(
  'h-fit inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)] rounded-md leading-none',
  {
    variants: {
      size: {
        sm: 'min-h-[18px] text-xs',
        md: 'min-h-[30px] text-sm',
        lg: 'min-h-[42px] text-lg',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

const Kbd = ({ children, asChild, className, size }: Props) => {
  const Tag = asChild ? Slot : 'kbd';
  return <Tag className={cn(kbdVariants({ size, className }))}>{children}</Tag>;
};

export default Kbd;
