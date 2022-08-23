import React from 'react';
import style from './styles/MemberCard.module.scss';

const MemberCard = ({ name, image }) => {
  return (
    <div className={style.card} style={{ backgroundImage: `url(${image})` }}>
      <span>{name}</span>
    </div>
  );
};

export default MemberCard;
