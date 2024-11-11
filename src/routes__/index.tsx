import * as React from 'react';
import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <Navigate
      params={{ emailType: 'favorites' }}
      to='/$emailType'
    />
  ),
});
