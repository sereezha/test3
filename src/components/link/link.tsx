import React from 'react';
import {
  Link as RouterLink,
  LinkProps as TanStackLinkProps,
} from '@tanstack/react-router';
import clsx from 'clsx';

import styles from './link.module.scss';

type BaseProps = {
  appearance?: 'primary' | 'secondary';
  underline?: 'hover' | 'always' | 'none';
  children: React.ReactNode;
  className?: string;
};

type ExternalLinkProps = BaseProps & {
  external: true;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type InternalLinkProps = BaseProps & {
  external?: false;
} & Omit<TanStackLinkProps, keyof BaseProps>;

type Props = ExternalLinkProps | InternalLinkProps;

const Link = ({
  appearance = 'primary',
  children,
  className,
  underline = 'always',
  external,
  ...rest
}: Props) => {
  const classes = clsx(
    styles.link,
    styles[`appearance-${appearance}`],
    styles[`underline-${underline}`],
    className
  );

  if (external) {
    return (
      <a
        {...rest}
        className={classes}
        rel='noopener noreferrer'
        target='_blank'>
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      {...rest}
      className={classes}>
      {children}
    </RouterLink>
  );
};

export default Link;
