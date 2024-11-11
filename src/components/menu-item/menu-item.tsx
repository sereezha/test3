/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const MenuItem = (props: Props, ref: React.Ref<HTMLDivElement>) => {
  const { className, children, onClick, style } = props;
  return (
    <div
      className={cn(
        'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      ref={ref}
      style={style}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default forwardRef(MenuItem);
