import React, { useId } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Props = {
  label: string;
} & React.ComponentProps<'input'>;

const FormField = (props: Props) => {
  const { label, ...inputProps } = props;
  const id = useId();
  return (
    <div className='grid gap-2'>
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...inputProps}
        id={id}
      />
    </div>
  );
};

export default FormField;
