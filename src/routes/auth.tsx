import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'primereact/button';

import FormField from '../components/form-field/form-field';
import Tab from '../components/tabs/tab';
import TabList from '../components/tabs/tab-list';
import { TabPanel, Tabs } from '../components/tabs/tabs';
import AuthLayout from '../layouts/auth-layout/auth-layout';
import Form from '../layouts/auth-layout/components/form/form';

export const Route = createFileRoute('/auth')({
  component: Auth,
});

function Auth() {
  return (
    <AuthLayout>
      <Tabs defaultValue='sign-in'>
        <TabList>
          <Tab value='sign-in'>Sign In</Tab>
          <Tab value='sign-up'>Sign Up</Tab>
        </TabList>
        <TabPanel value='sign-in'>
          <Form title='Sign In'>
            <FormField
              id='email'
              inputMode='email'
              label='Email'
              placeholder='Email'
            />
            <FormField
              id='password'
              label='Password'
              placeholder='Password'
              type='password'
            />
            <Button label='Submit'></Button>
          </Form>
        </TabPanel>
        <TabPanel value='sign-up'>
          <Form title='Sign Up'>
            <FormField
              id='email'
              inputMode='email'
              label='Email'
              placeholder='Email'
            />
            <FormField
              id='password'
              label='Password'
              placeholder='Password'
              type='password'
            />
            <Button label='Submit'></Button>
          </Form>
        </TabPanel>
      </Tabs>
    </AuthLayout>
  );
}
