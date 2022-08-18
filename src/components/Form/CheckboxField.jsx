import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './styles/Form.module.scss';

import { formField } from '../../redux/actions/form.actions';

const isRoleField = (field) => field === 'roleId';

const decodeRole = (roleName) => {
  switch (roleName) {
    case 'Admin':
      return 1;
    case 'User':
      return 2;
    case 1:
    case '1':
      return 'Admin';
    case 2:
    case '2':
      return 'User';
    default:
      return null;
  }
};

const CheckboxField = ({ field, options }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.fields[field]);

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(formField({ [field]: value }));
  };

  return (
    <>
      {Object.entries(options).map(([optionName, optionValue], i) => (
        <div key={i} className={style.checkbox}>
          <input
            key={i}
            type='radio'
            name={field}
            value={isRoleField(field) ? decodeRole(optionName) : value}
            checked={isRoleField(field) ? decodeRole(value) === optionName : value}
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
