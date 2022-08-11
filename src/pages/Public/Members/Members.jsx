import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import MembersBanners from './MembersBanner/MembersBanner';
import MembersList from './MembersList/MembersList';
import style from './styles/Members.module.scss';
import memberMock from '../../../members.mock';

const Members = ({ quantity }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(memberMock);
  }, []);

  const sendMember = (memb) => {
    const random = Math.floor(Math.random() * memb.length);
    return memb[random];
  };

  // !location.pathname.includes('testimonios')
  console.log(members);
  return (
    <div className={style.container}>
      <div
        className={
          !location.pathname.includes('nosotros')
            ? `${style.header}`
            : `${style.header} ${style.headerPage}`
        }>
        <h2
          className={
            location.pathname.includes('nosotros')
              ? `${style.title} ${style.titleCentered}`
              : `${style.title}`
          }>
          {location.pathname.includes('nosotros') ? '¡Nuestro Staff!' : 'Nuestro Staff'}
        </h2>
        {location.pathname.includes('nosotros') && members.length > 0 && (
          <MembersBanners member={sendMember(members)} />
        )}
        {!location.pathname.includes('nosotros') && <Link to='/nosotros'>{`Ver mas >`}</Link>}
      </div>
      <MembersList quantity={quantity} members={members} />
    </div>
  );
};

export default Members;
