import React from 'react';
import close from './styles/assets/close.png';

const StatusMessage = ({ message, style, onClick }) => {
  return (
    <div className={style} onClick={onClick}>
      <div>{message}</div>
      <img className={style.close} src={close} alt='close' />
    </div>
  );
};

export default StatusMessage;
