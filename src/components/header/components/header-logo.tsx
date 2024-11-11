import { Link } from '@tanstack/react-router';

import Heading from '@/components/typography/heading';

const HeaderLogo = () => {
  return (
    <Heading
      asChild
      variant='h4'>
      <Link
        className='text-foreground'
        style={{ textDecoration: 'none' }}
        to='/'>
        Email viewer
      </Link>
    </Heading>
  );
};

export default HeaderLogo;
