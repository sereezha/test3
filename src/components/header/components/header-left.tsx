type Props = {
  children: React.ReactNode;
};

const HeaderLeft = (props: Props) => {
  const { children } = props;
  return <div className='flex items-center gap-3'>{children}</div>;
};

export default HeaderLeft;
