import React from 'react';
import { Link, useParams } from '@tanstack/react-router';

import { Text } from '@/components/typography/text';
import { generateEmailRoute } from '@/routes-config/utils';

import { Muted } from '../typography/muted';

type Props = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const EmailItem = (props: Props) => {
  const { title, description, date, id } = props;
  const { accountId, categoryId, emailType } = useParams({
    from: '/layout/$emailType/$accountId/$categoryId',
  });

  return (
    <div className='isolate relative grid grid-cols-[200px_1fr_auto] items-center gap-5 text-sm cursor-pointer p-4 bg-background rounded-lg shadow-sm hover:bg-accent transition-all focus:outline-none border border-border border-solid focus:ring-2 focus:ring-primary focus:ring-opacity-50 active:scale-[0.995] '>
      <Link
        className='appearance-none absolute inset-0 cursor-pointer'
        to={generateEmailRoute(emailType, accountId, categoryId, id)}
      />
      <Text
        truncate
        weight='bold'>
        {title}
      </Text>
      <Text truncate>{description}</Text>
      <Muted>{date}</Muted>
    </div>
  );
};

export default EmailItem;
