import { useParams } from '@tanstack/react-router';

import { useEmailQuery } from '../api/queries/use-email-query';
import EmailViewer from '../components/email-viewer/email-viewer';
import { TEmailCategory } from '../types/emails';

function EmailView() {
  const { accountId, categoryId, emailId } = useParams({
    from: '/layout/$emailType/$accountId/$categoryId/$emailId',
  });
  const { data, isLoading } = useEmailQuery(
    accountId,
    categoryId as TEmailCategory,
    emailId
  );
  return (
    <EmailViewer
      {...data}
      isLoading={isLoading}
    />
  );
}

export default EmailView;
