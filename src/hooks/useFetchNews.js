import React from 'react';

import api from '../axios/main';

const useFetchNews = () => {
  const [news, setNews] = React.useState([]);
  const [error, setError] = React.useState();

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

  return { news, setNews, error, setError };
};

export default useFetchNews;
