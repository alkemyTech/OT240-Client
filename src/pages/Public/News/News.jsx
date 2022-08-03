import React from 'react';

import style from './styles/News.component.scss';
import api from '../../../axios/main';

import NewsList from '../../../components/NewsList/NewsList';

const News = () => {
  return (
    <>
      <h1>Novedades</h1>
      <NewsList />
    </>
  );
};

export default News;
