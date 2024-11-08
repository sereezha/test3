import React from 'react';

import styles from './form.module.scss';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Form = (props: Props) => {
  const { children, title } = props;
  return (
    <div className={styles.form}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Form;
