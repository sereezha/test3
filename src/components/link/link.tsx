import React from 'react';
import clsx from 'clsx';

import styles from './link.module.scss';

type Props = {
  appearance?: 'primary' | 'secondary';
  underline?: 'hover' | 'always' | 'none';
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = (props: Props) => {
  const {
    appearance = 'primary',
    children,
    className,
    underline = 'always',
    ...rest
  } = props;
  return (
    <a
      {...rest}
      className={clsx(
        styles.link,
        styles[`appearance-${appearance}`],
        styles[`underline-${underline}`],
        className
      )}>
      {children}
    </a>
  );
};

export default Link;
