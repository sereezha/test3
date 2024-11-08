import { createFileRoute, useParams } from '@tanstack/react-router';
import { Skeleton } from 'primereact/skeleton';

import { useEmailQuery } from '../../../../../../api/queries/use-email-query';
import EmailViewer from '../../../../../../components/email-viewer/email-viewer';

export const Route = createFileRoute(
  '/_layout/$emailType/$accountId/$categoryId/$emailId/'
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { accountId, categoryId, emailId } = useParams({
    from: '/_layout/$emailType/$accountId/$categoryId/$emailId/',
  });
  const { data, isLoading } = useEmailQuery(accountId, categoryId, emailId);

  if (isLoading) {
    return <Skeleton height='100%' />;
  }

  return <EmailViewer {...data!} />;
}
