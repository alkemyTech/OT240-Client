import React from 'react';

const TextField = ({ field, name, value, setState, style }) => {
  return (
    <>
      <label className={style.label} htmlFor={name}>
        {name}
      </label>
      <input
        name={name}
        type='text'
        id={name}
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
