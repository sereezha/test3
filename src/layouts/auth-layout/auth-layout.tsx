import React from 'react';
import { Link, Outlet, useLocation } from '@tanstack/react-router';

import HeaderAuth from '@/components/header/header-auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Routes } from '../../routes-config/routes';

const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr]'>
      <HeaderAuth />
      <div className='grid content-center items-center max-w-xl mx-auto w-full gap-5'>
        <Tabs
          className='grid gap-4'
          value={location.pathname}>
          <TabsList className='w-full'>
            <TabsTrigger
              asChild
              className='w-full'
              value={Routes.SIGNIN}>
              <Link to='/sign-in'>Sign In</Link>
            </TabsTrigger>
            <TabsTrigger
              asChild
              className='w-full'
              value={Routes.SIGNUP}>
              <Link to='/sign-up'>Sign Up</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value={Routes.SIGNIN}>
            <Outlet />
          </TabsContent>
          <TabsContent value={Routes.SIGNUP}>
            <Outlet />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthLayout;
