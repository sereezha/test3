import * as React from 'react';
import { createFileRoute, Outlet, useParams } from '@tanstack/react-router';

import MainLayout from '../layouts/main-layout/main-layout';
import { TEmailType } from '../types/emails';

export const Route = createFileRoute('/_layout')({
  component: Layout,
});

function Layout() {
  const { emailType } = useParams({ strict: false });

  return (
    <MainLayout emailType={emailType as TEmailType}>
      <Outlet />
    </MainLayout>
  );
}
