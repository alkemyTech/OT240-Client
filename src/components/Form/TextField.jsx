import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setField } from '../../redux/actions/form.actions';

const TextField = ({ field }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.fields[field]);

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(setField({ [field]: value }));
  };

  return <input type='text' id={field} value={value} onChange={onChange} />;
};

export default TextField;
