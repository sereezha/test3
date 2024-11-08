import * as React from 'react';
import {
  createFileRoute,
  getRouteApi,
  useNavigate,
  useParams,
} from '@tanstack/react-router';
import clsx from 'clsx';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { Skeleton } from 'primereact/skeleton';

import { useEmailListQuery } from '../../../../../api/queries/use-email-list-query';
import EmailItem from '../../../../../components/email-list/email-item';
import { generateArrayWith } from '../../../../../utils/generic';

import styles from './email-list.module.scss';

type Search = {
  page: number;
};

export const Route = createFileRoute(
  '/_layout/$emailType/$accountId/$categoryId/'
)({
  component: EmailList,
  validateSearch: (search: Record<string, unknown>): Search => {
    return {
      page: Number(search?.page ?? 1),
    };
  },
});

function EmailList() {
  const routeApi = getRouteApi(Route.id);
  const { page } = routeApi.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const params = useParams({
    strict: false,
  });
  const { categoryId, accountId } = params;
  const listRef = React.useRef<HTMLDivElement>(null);
  const { data, isLoading } = useEmailListQuery(accountId, categoryId, page);

  const handlePageChange = (event: PaginatorPageChangeEvent) => {
    listRef.current?.scrollTo({ top: 0 });
    navigate({
      search: () => ({ page: event.page + 1 }),
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.list, {
          [styles.isLoading]: isLoading,
        })}
        ref={listRef}>
        {isLoading &&
          generateArrayWith(50, (item) => (
            <Skeleton
              height='53px'
              key={item}
            />
          ))}
        {!isLoading &&
          data?.map((item) => (
            <EmailItem
              key={item.id}
              {...item}
            />
          ))}
      </div>
      <Paginator
        first={100 * (page - 1)}
        rows={100}
        totalRecords={200}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
