import React from 'react';

import ErrorLayout from '../../layouts/error-layout/error-layout';

const NotFoundPage = () => {
  return (
    <ErrorLayout
      description='Page does not exist!'
      title='404'
    />
  );
};

export default NotFoundPage;
