import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import style from './styles/NewsList.module.scss';

import { fetchNews } from '../../redux/actions/news.actions';
import { Loader } from '../loader/Loader';

const NewsList = ({ quantity, centered }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { entries: news, error, loading } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(fetchNews({ method: 'get', url: '/news' }));
  }, [dispatch]);

  return (
    <ul className={`${style.container}`} style={centered && { justifyContent: 'center' }}>
      {loading ? (
        <div className={style.loaderDiv}>
          <Loader />
        </div>
      ) : error ? (
        <p className={style.error}>{error}</p>
      ) : !news.length ? (
        <p className={style.empty}>No hay novedades para mostrar</p>
      ) : (
        news.slice(0, quantity).map(({ name, image, id }) => (
          <li className={style.card} key={id}>
            <div
              className={style.img}
              style={{
                backgroundImage: `url('${image}')`,
              }}></div>
            <div>
              <h1>{name.length > 50 ? name.slice(0, 50) + '...' : name}</h1>
              <button className={style.buttonLink} onClick={() => navigate(`/novedades/${id}`)}>
                Ver Novedad
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default NewsList;
