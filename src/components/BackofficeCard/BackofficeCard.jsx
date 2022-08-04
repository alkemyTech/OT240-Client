import React from 'react';
import { Link } from 'react-router-dom';

import style from './styles/BackofficeCard.module.scss';

const BackofficeCard = ({ item }) => {
  return (
    <div className={style.card}>
      <p className={style.title}>{item.text}</p>
      <img src={`assets/${item.img}`} alt={item.text} />
      <p className={style.button}>Ir</p>
    </div>
  );
};

export default BackofficeCard;
