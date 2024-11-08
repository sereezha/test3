/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import clsx from 'clsx';

import styles from './card.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Card = (props: Props) => {
  const { children, className, onClick } = props;
  return (
    <div
      className={clsx(styles.card, className)}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
