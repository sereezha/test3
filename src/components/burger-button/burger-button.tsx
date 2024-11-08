import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './burger-button.module.scss';

type Props = {
  isActive: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BurgerButton = (props: Props) => {
  const { isActive, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(styles.burgerWrapper, {
        [styles.isActive]: isActive,
      })}
      type='button'>
      <div className={styles.burger}>
        <div className={styles.burgerInner} />
      </div>
    </button>
  );
};

export default BurgerButton;
