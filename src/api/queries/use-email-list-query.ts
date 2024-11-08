import { useQuery } from '@tanstack/react-query';

import { TEmailCategory } from '../../types/emails';
import { requests } from '../config/config';

export const useEmailListQuery = (
  accountId: string,
  categoryId: TEmailCategory,
  page: number
) => {
  return useQuery({
    queryKey: ['emails', accountId, categoryId, page],
    queryFn: () =>
      requests.getEmailsList(accountId, categoryId as TEmailCategory, page),
    enabled: !!accountId && !!categoryId,
  });
};
