import React from 'react';

import Heading from '@/components/typography/heading';

const EmailType = () => {
  return (
    <Heading
      align='center'
      className={'flex justify-center items-center h-full'}
      variant='h1'
      weight='medium'>
      Select account
    </Heading>
  );
};

export default EmailType;
