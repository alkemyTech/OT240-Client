import React from 'react';

import style from './styles/News.module.scss';

import NewsList from '../../../components/NewsList/NewsList';

const News = () => {
  return (
    <section className={style.container}>
      <h2>Novedades</h2>
      <NewsList />
    </section>
  );
};

export default News;
