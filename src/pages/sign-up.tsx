import React from 'react';

import { Button } from '@/components/ui/button';

import FormField from '../components/form-field/form-field';
import Form from '../layouts/auth-layout/components/form/form';

const SignUp = () => {
  return (
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
      <Button>Submit</Button>
    </Form>
  );
};

export default SignUp;
