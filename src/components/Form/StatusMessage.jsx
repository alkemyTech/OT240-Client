import React from 'react';
import close from './styles/assets/close.png';

const StatusMessage = ({ message, style, onClick }) => {
  return (
    <div className={style}>
      <div>{message}</div>
      <img className={style.close} src={close} alt='close' onClick={onClick} />
    </div>
  );
};

export default StatusMessage;
