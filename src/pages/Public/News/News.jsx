import React from 'react';

import style from './styles/News.module.scss';

import NewsList from '../../../components/NewsList/NewsList';

const News = () => {
  return (
    <section className={style.container}>
      <h1>Novedades</h1>
      <NewsList centered={true} />
    </section>
  );
};

export default News;
