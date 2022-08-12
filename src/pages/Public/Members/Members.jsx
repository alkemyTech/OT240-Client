import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import MembersBanners from './MembersBanner/MembersBanner';
import MembersList from './MembersList/MembersList';
import style from './styles/Members.module.scss';
import fetchApi from '../../../axios/axios';

const Members = ({ quantity }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getMembers = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/members' });
        isMounted && setMembers(data.members);
      } catch (err) {
        isMounted && setError(err.message);
      } finally {
        isMounted && setLoading(false);
      }
    };

    getMembers();

    return () => (isMounted = false);
  }, []);

  const selectRandomMember = (memb) => {
    const random = Math.floor(Math.random() * memb.length);
    return memb[random];
  };

  return (
    <div className={style.container}>
      {!loading ? (
        members.length ? (
          <>
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
                <MembersBanners member={selectRandomMember(members)} />
              )}
              {!location.pathname.includes('nosotros') && <Link to='/nosotros'>{`Ver mas >`}</Link>}
            </div>
            <MembersList quantity={quantity} members={members} />
          </>
        ) : (
          <h1>Todavía no hay miembros cargados a la plataforma</h1>
        )
      ) : (
        <p>Cargando..</p>
      )}
    </div>
  );
};

export default Members;
