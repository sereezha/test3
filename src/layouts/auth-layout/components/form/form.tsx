import React from 'react';

import Heading from '@/components/typography/heading';

import styles from './form.module.scss';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Form = (props: Props) => {
  const { children, title } = props;
  return (
    <div className={styles.form}>
      <Heading
        as='h1'
        variant='h2'>
        {title}
      </Heading>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Form;
