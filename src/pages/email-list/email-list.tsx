import React, { useEffect } from 'react';
import { getRouteApi, useNavigate, useParams } from '@tanstack/react-router';
import clsx from 'clsx';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';

import { useEmailListQuery } from '../../api/queries/use-email-list-query';
import EmailItem from '../../components/email-list/email-item';
import { emailListRoute } from '../../router';
import { TEmailCategory } from '../../types/emails';
import { generateArrayWith } from '../../utils/generic';

const ROWS_PER_PAGE = 100;
const TOTAL_ITEMS = 200;
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ROWS_PER_PAGE);

const EmailList = () => {
  const routeApi = getRouteApi(emailListRoute.id);
  const { page } = routeApi.useSearch();
  const navigate = useNavigate({ from: emailListRoute.fullPath });
  const params = useParams({
    strict: false,
  });
  const { categoryId, accountId } = params;
  const listRef = React.useRef<HTMLDivElement>(null);
  const { data, isLoading } = useEmailListQuery(
    accountId!,
    categoryId as TEmailCategory,
    page
  );

  useEffect(() => {
    listRef.current?.scrollTo({ top: 0 });
  }, [page]);

  return (
    <div className='grid grid-rows-[1fr_auto] gap-3 h-full overflow-hidden'>
      <div
        className={clsx('grid gap-3 overflow-auto content-start', {
          'overflow-hidden': isLoading,
        })}
        ref={listRef}>
        {isLoading &&
          generateArrayWith(50, (item) => (
            <Skeleton
              className='h-12 rounded-lg'
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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={clsx({
                'opacity-50 pointer-events-none cursor-not-allowed': page === 1,
              })}
              to={`?page=${page - 1}`}
            />
          </PaginationItem>
          {generateArrayWith(TOTAL_PAGES, (item) => (
            <PaginationItem key={item}>
              <PaginationLink
                isActive={page === item + 1}
                to={`?page=${item + 1}`}>
                {item + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              className={clsx({
                'opacity-50 pointer-events-none cursor-not-allowed':
                  TOTAL_PAGES === page,
              })}
              to={`?page=${page + 1}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default EmailList;
