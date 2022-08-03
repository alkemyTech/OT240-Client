import React from 'react';

import api from '../axios/main';

const useFetchNews = (id) => {
  const [news, setNews] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      try {
        const { data } = await api.get(`/news/${id || ''}`);
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

  return { news, error };
};

export default useFetchNews;
