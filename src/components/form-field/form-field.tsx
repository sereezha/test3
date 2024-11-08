import React, { useId } from 'react';
import { InputText } from 'primereact/inputtext';

import styles from './form-field.module.scss';

type Props = {
  label: string;
} & React.ComponentProps<typeof InputText>;

const FormField = (props: Props) => {
  const { label, ...inputProps } = props;
  const id = useId();
  return (
    <div className={styles.formField}>
      <label htmlFor={id}>{label}</label>
      <InputText
        {...inputProps}
        id={id}
      />
    </div>
  );
};

export default FormField;
