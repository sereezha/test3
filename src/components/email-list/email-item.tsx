import React from 'react';
import { useNavigate, useParams } from '@tanstack/react-router';
import clsx from 'clsx';

import { generateEmailRoute } from '../../routes-config/utils';
import Card from '../card/card';

import styles from './email-item.module.scss';

type Props = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const EmailItem = (props: Props) => {
  const { title, description, date, id } = props;
  const navigate = useNavigate();
  const { accountId, categoryId, emailType } = useParams({
    from: '/_layout/$emailType/$accountId/$categoryId/',
  });

  return (
    <Card
      className={styles.item}
      onClick={() => {
        navigate({
          to: generateEmailRoute(emailType, accountId, categoryId, id),
        });
      }}>
      <div className={clsx(styles.title, 'truncate')}>{title}</div>
      <div className={clsx(styles.description, 'truncate')}>{description}</div>
      <div className={styles.date}>{date}</div>
    </Card>
  );
};

export default EmailItem;
