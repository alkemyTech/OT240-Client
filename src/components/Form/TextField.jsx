import React from 'react';

const TextField = ({ field, label, value, setState, style }) => {
  return (
    <>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input
        type='text'
        id={label}
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          setState((prev) => ({ ...prev, [field]: value }));
        }}
      />
    </>
  );
};

export default TextField;
