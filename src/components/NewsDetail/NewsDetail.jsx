import React from 'react';
import { useParams } from 'react-router-dom';

import style from './styles/NewsDetail.module.scss';
// import css from './styles/test.css';
import useFetchNews from '../../hooks/useFetchNews';

const NewsDetail = () => {
  const { id } = useParams();
  const { news } = useFetchNews(id);

  return (
    <article className={style.detail}>
      <img src={news.image} alt='' />
      <h1>{news.name}</h1>
      <p>{news.content}</p>
    </article>
  );
};

export default NewsDetail;
