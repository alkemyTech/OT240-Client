import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Banner from '../../../components/Banner/Banner';
import MembersList from './MembersList/MembersList';
import style from './styles/Members.module.scss';
import { loadMembers } from '../../../redux/actions/member.actions';
import { Loader } from '../../../components/loader/Loader';

const Members = ({ quantity }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { members, loading } = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(loadMembers({ method: 'get', url: '/members' }));
  }, [dispatch]);

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
          <div className={style.loader}>
            <Loader />
          </div>
        )
      ) : (
        <h1>Todavía no hay miembros cargados a la plataforma</h1>
      )}
    </div>
  );
};

export default Members;
