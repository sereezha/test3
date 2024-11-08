import React from 'react';

import EmailList from '../../components/email-list/email-list';
import MainLayout from '../main-layout/main-layout';

const EmailListLayout = () => {
  return (
    <MainLayout>
      <EmailList />
    </MainLayout>
  );
};

export default EmailListLayout;
