import { ErrorMessage, useField } from 'formik';
import React from 'react';

import inputField from './style/InputField.module.scss';


const InputField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  

  return (
    <div>
        <input 
            className={meta.touched && meta.error ? inputField.input : ''}
            placeholder={label} 
            type={label}
            {...field} {...props}
        />
        <ErrorMessage component='div' name={field.name} className={inputField.errors}/>
    </div>
  );
};

export default InputField;