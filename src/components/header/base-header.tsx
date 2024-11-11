import React from 'react';

type Props = {
  children: React.ReactNode;
};

const BaseHeader = (props: Props) => {
  const { children } = props;
  return (
    <header className='border-b border-border py-4 bg-card'>
      <div className='flex items-center gap-3 px-4 md:px-6'>{children}</div>
    </header>
  );
};

export default BaseHeader;
