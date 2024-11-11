import React from 'react';
import { QueryClient } from '@tanstack/react-query';
import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
  notFound,
  Outlet,
  useParams,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import NotFoundPage from './components/error-pages/not-found';
import AuthLayout from './layouts/auth-layout/auth-layout';
import MainLayout from './layouts/main-layout/main-layout';
import EmailList from './pages/email-list/email-list';
import EmailType from './pages/email-type/email-type';
import EmailView from './pages/email-view';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import { TEmailType } from './types/emails';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <Navigate
      params={{ emailType: 'favorites' }}
      to='/$emailType'
    />
  ),
});

export const authLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: 'auth',
  component: AuthLayout,
});

export const signinRoute = createRoute({
  getParentRoute: () => authLayout,
  path: '/sign-in',
  component: SignIn,
});

export const signupRoute = createRoute({
  getParentRoute: () => authLayout,
  path: '/sign-up',
  component: SignUp,
});

export const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'layout',
  component: MainLayout,
});

export const emailTypeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '$emailType',
  beforeLoad: ({ params }) => {
    const validEmailTypes = ['favorites', 'all'];
    const emailType = params.emailType;
    if (!validEmailTypes.includes(emailType as TEmailType)) {
      throw notFound();
    }
  },
  pendingComponent: () => <Outlet />,
  component: EmailType,
});

const AccountRoute = () => {
  const { accountId, emailType } = useParams({ strict: false });

  return <Navigate to={`/${emailType}/${accountId}/inbox`} />;
};

export const accountRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '$emailType/$accountId',
  component: AccountRoute,
});

type Search = {
  page: number;
};

export const emailListRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '$emailType/$accountId/$categoryId',
  validateSearch: (search: Record<string, unknown>): Search => {
    return {
      page: Number(search?.page ?? 1),
    };
  },
  component: EmailList,
});

export const emailViewRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '$emailType/$accountId/$categoryId/$emailId',
  component: EmailView,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  authLayout.addChildren([signinRoute, signupRoute]),
  layoutRoute.addChildren([
    emailTypeRoute.addChildren([emailListRoute, emailViewRoute, accountRoute]),
  ]),
]);

export const router = (queryClient: QueryClient) =>
  createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    context: {
      queryClient,
    },
    defaultNotFoundComponent: NotFoundPage,
  });

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof router>;
  }
}
