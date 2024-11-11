type Props = {
  children: React.ReactNode;
};

export const Muted = ({ children }: Props) => {
  return <p className='text-sm text-muted-foreground'>{children}</p>;
};
