import React from 'react';
import { Link } from '@tanstack/react-router';

import styles from './error-layout.module.scss';

type Props = {
  title: string;
  description: React.ReactNode;
};

const ErrorLayout = (props: Props) => {
  const { title, description } = props;
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Link to='/'>Go home</Link>
      </div>
    </div>
  );
};

export default ErrorLayout;
