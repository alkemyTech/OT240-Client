import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Banner from '../../../components/Banner/Banner';
import MembersList from './MembersList/MembersList';
import style from './styles/Members.module.scss';

const Members = ({ quantity }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const { members, loading } = useSelector((state) => state.members);

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
              {location.pathname.includes('nosotros') && members.length > 0 && <Banner />}
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
