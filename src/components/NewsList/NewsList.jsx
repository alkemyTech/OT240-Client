import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './styles/NewsList.module.scss';
import useFetchNews from '../../hooks/useFetchNews';

const NewsList = ({ quantity }) => {
  const navigate = useNavigate();

  const { news } = useFetchNews();

  return (
    <ul className={style.cardList}>
      {news.length ? (
        news.slice(0, quantity).map(({ name, image, id, content }) => (
          <li className={style.card} key={id} onClick={() => navigate(`${id}`)}>
            <img src={image} alt='' />
            <div>
              <p>{content.slice(0, 100)}...</p>
              <button className={style.buttonLink}>Ver Novedad</button>
            </div>
          </li>
        ))
      ) : (
        <p>No hay novedades recientes.</p>
      )}
    </ul>
  );
};

export default NewsList;
