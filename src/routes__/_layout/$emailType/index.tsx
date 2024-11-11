import { createFileRoute, notFound } from '@tanstack/react-router';

import { TEmailType } from '../../../types/emails';

const validEmailTypes = ['favorites', 'all'];

export const Route = createFileRoute('/_layout/$emailType/')({
  beforeLoad: ({ params }) => {
    const emailType = params.emailType;
    if (!validEmailTypes.includes(emailType as TEmailType)) {
      throw notFound();
    }
    return null;
  },
});
