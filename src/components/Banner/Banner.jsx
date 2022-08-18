import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './styles/Banner.module.scss';
import { loadOrganization } from '../../redux/actions/organization.action';

const Banner = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const { members, loadingMembers } = useSelector((state) => state.members);
  const { organization, loadingOrganization } = useSelector((state) => state.organization);

  const selectRandomMember = (memb) => {
    const random = Math.floor(Math.random() * memb.length);
    return memb[random];
  };

  useEffect(() => {
    dispatch(loadOrganization({ method: 'get', url: '/organization/public' }));
    if (location.pathname.includes('nosotros')) {
      setData(selectRandomMember(members));
    } else {
      setData({ ...data, image: './images/Manos.jpg', name: 'Hola, Bienvenido!' });
    }
  }, [location]);

  return organization ? (
    <div
      className={
        !location.pathname.includes('nosotros')
          ? `${style.container} ${style.containerHome}`
          : `${style.container}`
      }>
      <div className={style.description}>
        <h2 className={style.title}>{data.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: organization.welcomeText } || ''}></div>
        <Link to='/contacto' className={style.link}>
          ¡Quiero ser parte!
        </Link>
      </div>
      <div className={style.image} style={{ backgroundImage: `url(${data.image})` }}></div>
    </div>
  ) : (
    <p>loading</p>
  );
};

export default Banner;
