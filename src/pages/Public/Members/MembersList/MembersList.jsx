import React from 'react';
import style from './styles/MembersList.module.scss';
import MemberCard from '../MemberCard/MemberCard';
const MembersList = ({ quantity, members }) => {
  return (
    <div className={style.cards}>
      {members.slice(0, quantity).map((member) => (
        <MemberCard key={member.id} {...member} />
      ))}
    </div>
  );
};

export default MembersList;
