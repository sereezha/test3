import React from 'react';
import clsx from 'clsx';
import { Paginator, PaginatorProps } from 'primereact/paginator';

import styles from './pagination.module.scss';
type Props = PaginatorProps;

const Pagination = (props: Props) => {
  return (
    <Paginator
      {...props}
      className={clsx(styles.pagination, props.className)}
    />
  );
};

export default Pagination;
