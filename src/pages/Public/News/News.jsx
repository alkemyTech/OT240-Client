import React from 'react';

import style from './styles/News.component.scss';
import api from '../../../axios/main';

const NewsList = () => {
  const [news, setNews] = React.useState([]);
  const [error, setError] = React.useState([]);

  React.useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      try {
        const { data } = await api.get('/news');
        isMounted && setNews(data);
      } catch (err) {
        isMounted && setError(err.message);
      }
    };

    fetchNews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h1>Novedades</h1>
    </>
  );
};

export default NewsList;
