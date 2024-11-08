import React from 'react';

import EmailViewer from '../../components/email-viewer/email-viewer';
import { mockMail } from '../../components/email-viewer/helpers';
import MainLayout from '../main-layout/main-layout';

const EmailViewerLayout = () => {
  return (
    <MainLayout>
      <EmailViewer
        content={mockMail.content}
        header={mockMail.header}
      />
    </MainLayout>
  );
};

export default EmailViewerLayout;
