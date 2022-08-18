import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './styles/Form.module.scss';

import { formField } from '../../redux/actions/form.actions';

const CheckboxField = ({ field, checkboxes }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.fields[field]);

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(formField({ [field]: value }));
  };

  return (
    <>
      {Object.entries(checkboxes).map(([optionName, optionValue], i) => (
        <div key={i} className={style.checkbox}>
          <input
            key={i}
            type='radio'
            name={field}
            value={optionValue}
            checked={value == optionValue}
            id={field}
            onChange={onChange}
          />
          <p>{optionName}</p>
        </div>
      ))}
    </>
  );
};

export default CheckboxField;
