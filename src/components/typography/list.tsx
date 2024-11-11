type Props = {
  children: React.ReactNode;
};

export const List = ({ children }: Props) => {
  return <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>{children}</ul>;
};
