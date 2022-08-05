import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import style from './styles/NewsDetail.module.scss';

import news from '../../../news.mock';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentNew = news.filter((entry) => entry.id == id)[0];

  return (
    <article className={style.container}>
      <img src={currentNew.image} alt='' />
      <div>
        <h1>{currentNew.name}</h1>
        <p>{currentNew.content}</p>
        <button onClick={() => navigate(-1)}>Ir al inicio</button>
      </div>
    </article>
  );
};

export default NewsDetail;
