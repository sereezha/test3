import React from 'react';

import styles from './auth-layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AuthLayout;
