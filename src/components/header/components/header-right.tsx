import React from 'react';

type Props = {
  children: React.ReactNode;
};

const HeaderRight = (props: Props) => {
  const { children } = props;
  return <div className='flex items-center gap-3 ml-auto'>{children}</div>;
};

export default HeaderRight;
