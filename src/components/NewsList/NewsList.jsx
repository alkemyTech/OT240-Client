import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './styles/NewsList.module.scss';

import news from '../../news.mock';

const NewsList = ({ quantity }) => {
  const navigate = useNavigate();

  return (
    <ul className={style.container}>
      {news.length ? (
        news.slice(0, quantity).map(({ name, image, id, content }) => (
          <li className={style.card} key={id}>
            <img src={image} alt='' />
            <div>
              <p>{content.slice(0, 100)}...</p>
              <button className={style.buttonLink} onClick={() => navigate(`${id}`)}>
                Ver Novedad
              </button>
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
