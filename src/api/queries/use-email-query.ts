import { useQuery } from '@tanstack/react-query';

import { TEmailCategory } from '../../types/emails';
import { requests } from '../config/config';

export const useEmailQuery = (
  accountId: string,
  categoryId: TEmailCategory,
  emailId: string
) => {
  return useQuery({
    queryKey: ['email', accountId, categoryId, emailId],
    queryFn: () => requests.getEmail(accountId, categoryId, emailId),
    enabled: !!accountId && !!categoryId && !!emailId,
  });
};
